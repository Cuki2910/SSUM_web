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
        section = page.locator(".lab-about-grid")
        cards = section.locator(".lab-about-card")
        assert cards.count() == 3
        section.scroll_into_view_if_needed()
        page.wait_for_timeout(700)
        boxes = [cards.nth(index).bounding_box() for index in range(3)]
        heading_boxes = [cards.nth(index).locator("h2").bounding_box() for index in range(3)]
        assert all(boxes)
        assert all(heading_boxes)
        assert page.evaluate(
            "Array.from(document.querySelectorAll('.lab-about-card h2')).every((heading) => getComputedStyle(heading).opacity === '1')"
        )
        assert page.evaluate("document.documentElement.scrollWidth <= window.innerWidth + 1")
        if name == "desktop":
            assert boxes[0]["y"] < boxes[1]["y"]
            assert abs(boxes[1]["y"] - boxes[2]["y"]) < 2
        else:
            assert boxes[0]["y"] < boxes[1]["y"] < boxes[2]["y"]
        section.screenshot(path=f"{output_dir}/about-{name}.png")
        checks.append({"viewport": name, "cards": boxes})
        page.close()
    browser.close()

print(json.dumps(checks))
