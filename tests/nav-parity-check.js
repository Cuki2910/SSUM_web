const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const pages = [
  'research.html',
  'team.html',
  'publication.html',
  'projects.html',
  'news.html',
  'photo.html',
  'contact.html',
  'member-profile.html?member=nguyen-phuoc-quy-duy',
];

const viewports = [
  { name: 'desktop', width: 1366, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

const profileSlugs = [
  'nguyen-phuoc-quy-duy',
  'vo-dinh-quang-nhat',
  'ho-thi-minh-ngan',
  'nguyen-thu-hang',
  'dang-tuan-kiet',
  'le-nhat-minh',
  'le-huy-tam',
  'vo-thuy-ngan',
];

const selectors = {
  wrapper: '.wrapper',
  header: '.header',
  logo: '.blog-logo img',
  wordmark: '.logo-wordmark',
  subtitle: '.logo-subtitle',
  masthead: '.site-masthead',
  nav: '.navigation',
  menu: '.navigation .main-menu',
  firstLink: '.navigation .main-menu a',
  footer: '.site-footer',
};

function roundedBox(box) {
  return {
    x: Math.round(box.x),
    y: Math.round(box.y),
    width: Math.round(box.width),
    height: Math.round(box.height),
  };
}

async function readPageState(page) {
  return page.evaluate((selectors) => {
    const state = {};
    for (const [name, selector] of Object.entries(selectors)) {
      const el = document.querySelector(selector);
      if (!el) {
        state[name] = null;
        continue;
      }
      const cs = getComputedStyle(el);
      state[name] = {
        box: el.getBoundingClientRect().toJSON(),
        display: cs.display,
        paddingTop: cs.paddingTop,
        paddingRight: cs.paddingRight,
        paddingBottom: cs.paddingBottom,
        paddingLeft: cs.paddingLeft,
        marginTop: cs.marginTop,
        marginBottom: cs.marginBottom,
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
        lineHeight: cs.lineHeight,
        color: cs.color,
        backgroundColor: cs.backgroundColor,
        borderTopWidth: cs.borderTopWidth,
        borderBottomWidth: cs.borderBottomWidth,
      };
    }
    state.doc = {
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    };
    return state;
  }, selectors);
}

function compareBox(failures, file, viewport, key, ref, cur, props = ['width', 'height']) {
  const a = roundedBox(ref[key].box);
  const b = roundedBox(cur[key].box);
  for (const prop of props) {
    if (Math.abs(a[prop] - b[prop]) > 1) {
      failures.push(`${file} ${viewport}: ${key}.${prop} ${b[prop]} != about ${a[prop]}`);
    }
  }
}

(async () => {
  const outDir = path.join(__dirname, 'screenshots');
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage();
  const failures = [];

  for (const viewport of viewports) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto('http://127.0.0.1:4173/index.html');
    await page.waitForLoadState('networkidle');
    const ref = await readPageState(page);
    await page.screenshot({ path: path.join(outDir, `about-${viewport.name}.png`), fullPage: true });

    for (const file of pages) {
      await page.goto(`http://127.0.0.1:4173/${file}`);
      await page.waitForLoadState('networkidle');
      const cur = await readPageState(page);
      const screenshotName = file.split('?')[0].replace('.html', '');
      await page.screenshot({ path: path.join(outDir, `${screenshotName}-${viewport.name}.png`), fullPage: true });

      for (const key of ['wrapper', 'masthead', 'header', 'logo', 'wordmark', 'subtitle', 'nav', 'menu']) {
        if (!cur[key] || !ref[key]) {
          failures.push(`${file} ${viewport.name}: missing ${key}`);
          continue;
        }
        const props = key === 'wrapper' ? ['x', 'width'] : ['width', 'height'];
        compareBox(failures, file, viewport.name, key, ref, cur, props);
      }

      if (cur.doc.scrollWidth > cur.doc.clientWidth + 1) {
        failures.push(`${file} ${viewport.name}: horizontal overflow ${cur.doc.scrollWidth} > ${cur.doc.clientWidth}`);
      }

      if (viewport.width > 1050) {
        const masthead = roundedBox(cur.masthead.box);
        const logo = roundedBox(cur.logo.box);
        const menu = roundedBox(cur.menu.box);
        if (logo.x >= menu.x || masthead.x + masthead.width - (menu.x + menu.width) > 80) {
          failures.push(`${file} desktop: brand/nav not left/right aligned`);
        }
      }

      const footerOk = await page.evaluate(() => {
        const footer = document.querySelector('.site-footer');
        return Boolean(
          footer &&
            footer.querySelector('.site-footer-brand') &&
            footer.querySelector('.site-footer-contact') &&
            footer.querySelector('.site-footer-connect')
        );
      });

      if (!footerOk) {
        failures.push(`${file} ${viewport.name}: missing professional footer columns`);
      }

      if (viewport.width <= 760) await page.locator('.nav-menu-toggle').click();
      await page.hover(selectors.firstLink);
      await page.waitForTimeout(220);
      const headerHover = await page.locator(selectors.firstLink).first().evaluate((el) => getComputedStyle(el).backgroundColor);
      if (!headerHover.includes('255, 255, 255')) {
        failures.push(`${file} ${viewport.name}: header hover not active`);
      }
    }
  }

  await page.setViewportSize({ width: 1366, height: 900 });
  for (const slug of profileSlugs) {
    await page.goto(`http://127.0.0.1:4173/member-profile.html?member=${slug}`);
    await page.waitForLoadState('networkidle');
    const profile = await page.locator('[data-member-profile]');
    if (await profile.locator('.member-profile-card').count() !== 1) failures.push(`member profile ${slug}: missing profile card`);
    if (await page.locator('.member-accordion__button').count() && await page.locator('.member-accordion__button').first().getAttribute('aria-expanded') !== 'true') failures.push(`member profile ${slug}: accordion not expanded initially`);
    if (await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1)) failures.push(`member profile ${slug}: horizontal overflow`);
  }

  await page.goto('http://127.0.0.1:4173/member-profile.html?member=nguyen-thu-hang');
  await page.waitForLoadState('networkidle');
  if (await page.getByRole('link', { name: 'View CV' }).count() !== 1) failures.push('Hang profile: CV link missing');
  if (await page.getByRole('link', { name: 'LinkedIn' }).count() !== 1) failures.push('Hang profile: LinkedIn link missing');

  await page.goto('http://127.0.0.1:4173/member-profile.html?member=ho-thi-minh-ngan');
  await page.waitForLoadState('networkidle');
  if (await page.locator('.member-profile-details').count() !== 0) failures.push('Empty profile: optional details should be absent');

  await page.goto('http://127.0.0.1:4173/member-profile.html?member=unknown');
  await page.waitForLoadState('networkidle');
  if (await page.locator('.member-missing').count() !== 1) failures.push('Unknown profile: fallback missing');

  await browser.close();

  if (failures.length) {
    console.error(failures.join('\n'));
    process.exit(1);
  }

  console.log('about header parity + mobile overflow ok');
})();
