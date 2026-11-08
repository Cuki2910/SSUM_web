const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'js/member-profiles.js'), 'utf8');
const members = vm.runInNewContext('(' + source.match(/var members = ([\s\S]*?);\n\n  function escapeHtml/)[1] + ')');
const team = fs.readFileSync(path.join(root, 'team.html'), 'utf8');
const cards = [...team.matchAll(/<article class="person-card is-wide">[\s\S]*?<\/article>/g)];
const escapeHtml = value => value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);

assert.equal(cards.length, 9);
for (const [card] of cards) {
  const slug = card.match(/member-profile\.html\?member=([a-z-]+)/)[1];
  const member = members[slug];
  for (const [label, items] of [['Education', member.education], ['Current Research', member.researchTitles]]) {
    const section = card.match(new RegExp('<dt>' + label + '</dt>\\s*<dd><ul>([\\s\\S]*?)</ul></dd>'));
    if (!items?.length) {
      assert.equal(section, null, slug + ': missing data must not be invented');
      continue;
    }
    assert.ok(section, slug + ': ' + label + ' must be visible in the card');
    assert.deepEqual([...section[1].matchAll(/<li>([\s\S]*?)<\/li>/g)].map(match => match[1]), Array.from(items, escapeHtml));
  }
}
console.log('All nine member cards match existing Education and Current Research data.');
