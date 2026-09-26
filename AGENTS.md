# AGENTS.md

## Boi canh du an

Day la static export cua website TUPA. Trang chinh nam o `index.html`; CSS/JS duoc load truc tiep tu file tinh.

## Cau truc thu muc

- `index.html`: trang chu va HTML shell.
- `css/`: stylesheet cua theme, plugin, va bien thiet ke.
- `js/`: script tu WordPress/theme/plugin export.
- `assets/images/`: anh, icon, favicon, SVG dung trong giao dien.
- `assets/fonts/`: font files va icon fonts.

## Quy tac lam viec

- Giu link asset la relative path de co the mo truc tiep bang browser.
- Design system dung token trong `css/variables.css`, shared chrome trong `css/theme.css`, va shared content component trong `css/lab-content.css`.
- Dung Montserrat cho heading, Mulish cho body; palette navy `#0b2448`/`#134d8b`, red CTA `#c72127`, amber accent `#f2a900`.
- Khi di chuyen asset, cap nhat ca HTML va cac `url(...)` trong CSS.
- Han che sua file minified neu khong can; neu can, chi sua path/bug nho.
- Khong thay doi noi dung thuc cua trang khi chi redesign giao dien. `publication.html` va `team.html` chi nhan shared chrome/font neu chua co yeu cau moi.
- Giu `js/navigation.js`, `js/scroll-experience.js`, `js/back-to-top.js`, `js/page-transition.js` va dung cac class contract hien co cua chung.
