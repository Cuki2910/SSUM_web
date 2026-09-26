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
        hero = page.locator(".director-hero")
        hero.scroll_into_view_if_needed()
        page.wait_for_timeout(700)
        portrait = page.locator(".director-hero__portrait img")
        cta = page.locator(".director-hero__link")
        bio = page.locator(".director-hero__bio")
        assert hero.is_visible()
        assert "in-view" in (hero.get_attribute("class") or "")
        assert portrait.is_visible()
        assert bio.is_visible()
        assert "director-duy-cutout.png" in (portrait.get_attribute("src") or "")
        assert cta.is_visible()
        assert cta.get_attribute("href") == "https://npqduy.com/"
        metrics = page.evaluate(
            """() => ({
              scrollWidth: document.documentElement.scrollWidth,
              viewportWidth: window.innerWidth,
              heroHeight: Math.round(document.querySelector('.director-hero').getBoundingClientRect().height)
            })"""
        )
        assert metrics["scrollWidth"] <= metrics["viewportWidth"] + 1, metrics
        assert metrics["heroHeight"] > 300, metrics
        hero.screenshot(path=f"{output_dir}/director-hero-{name}.png")
        checks.append({"viewport": name, **metrics})
        page.close()
    browser.close()

print(json.dumps(checks))
