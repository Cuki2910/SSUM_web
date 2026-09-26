import json
import sys

from playwright.sync_api import sync_playwright


url = sys.argv[1]
output_dir = sys.argv[2]
checks = []

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True)
    for name, width, height in (("desktop", 1440, 900), ("mobile", 390, 844)):
        page = browser.new_page(viewport={"width": width, "height": height})
        page.goto(url, wait_until="networkidle")
        page.wait_for_selector("html.page-ready")
        cta = page.locator(".home-hero__cta")
        section = page.locator("#research")
        cards = section.locator(".research-card")
        assert cta.get_attribute("href") == "#research"
        assert cards.count() == 7
        cta.click()
        page.wait_for_timeout(700)
        assert page.url.endswith("#research")
        assert page.evaluate("document.documentElement.scrollWidth <= window.innerWidth + 1")
        if name == "desktop":
            control = cards.nth(0).locator(".research-card__toggle")
            control.click()
            assert control.get_attribute("aria-pressed") == "true"
            control.click()
            assert control.get_attribute("aria-pressed") == "false"
            page.evaluate("document.activeElement.blur()")
        page.mouse.move(width - 1, 0)
        page.wait_for_timeout(500)
        section.screenshot(path=f"{output_dir}/research-{name}.png")
        checks.append({"viewport": name, "cards": cards.count()})
        page.close()
    browser.close()

print(json.dumps(checks))
