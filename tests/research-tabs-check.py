from playwright.sync_api import sync_playwright

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1366, "height": 900})
    page.goto("file:///D:/GREEN-X/ssum_web/research.html")
    page.wait_for_load_state("networkidle")
    assert page.url.endswith("research-detail.html?topic=sustainable-transportation")
    tabs = page.locator('.research-topic-tabs a')
    assert tabs.count() == 7
    assert tabs.first.get_attribute("aria-current") == "page"
    tabs.nth(3).click()
    page.wait_for_timeout(500)
    assert page.url.endswith("research-detail.html?topic=traffic-safety")
    page.get_by_role("link", name="Traffic Safety").press("End")
    page.wait_for_load_state("networkidle")
    assert page.url.endswith("research-detail.html?topic=llms-vlms")
    page.set_viewport_size({"width": 390, "height": 844})
    assert page.locator('.research-topic-tabs').evaluate("element => element.scrollWidth > element.clientWidth")
    print("research redirect, seven tabs, keyboard, mobile scroll verified")
    browser.close()
