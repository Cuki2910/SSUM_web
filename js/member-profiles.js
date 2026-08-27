(function () {
  'use strict';

  var members = {
    'nguyen-phuoc-quy-duy': {
      name: 'Nguyen Phuoc Quy Duy, PhD',
      photo: 'assets/images/member/Quy-Duy.webp',
      role: 'Associate Professor, VinUniversity',
      organisation: 'Vin Sustainable and Smart Urban Mobility Lab (VIN-SSUM)',
      label: 'Lab Director',
      topics: ['Sustainable mobility', 'Traffic safety', 'Transport behaviour', 'Transport modelling', 'Transport economics'],
      linkedin: 'https://www.linkedin.com/in/nguyen-phuoc-q-duy-71078a90/',
      website: 'https://npqduy.com/'
    },
    'vo-dinh-quang-nhat': {
      name: 'Vo Dinh Quang Nhat, MSc',
      photo: 'assets/images/member/card/quang-nhat-card.jpg',
      role: 'Research Assistant',
      organisation: 'Smart Green Transformation Center (GREEN-X), VinUniversity',
      linkedin: 'https://www.linkedin.com/in/dinh-quang-nhat-vo-28563b1a6/'
    },
    'ho-thi-minh-ngan': {
      name: 'Ho Thi Minh Ngan',
      photo: 'assets/images/member/card/minh-ngan-card.jpg',
      role: 'Research Assistant',
      organisation: 'Smart Green Transformation Center (GREEN-X), VinUniversity'
    },
    'nguyen-thu-hang': {
      name: 'Nguyen Thu Hang',
      photo: 'assets/images/member/card/hang-card.jpg',
      role: 'Research Assistant',
      organisation: 'Smart Green Transformation Center (GREEN-X), VinUniversity',
      topics: ['Green Behavior', 'Pro-environmental Behavior', 'Green Public Policy'],
      researchTitles: ['Factors Influencing Mobility Behavior Among Persons with Disabilities (PWDs) in Vietnam'],
      cv: 'assets/images/member/cv/Nguyen%20Thu%20Hang%20CV.pdf',
      linkedin: 'https://www.linkedin.com/in/hangnguyen2604/'
    },
    'dang-tuan-kiet': {
      name: 'Dang Tuan Kiet',
      photo: 'assets/images/member/card/dang-tuan-kiet-card.jpg',
      role: 'Research Assistant',
      organisation: 'Smart Green Transformation Center (GREEN-X), VinUniversity',
      linkedin: 'https://www.linkedin.com/in/cuki2910/'
    },
    'le-nhat-minh': {
      name: 'Le Nhat Minh',
      photo: 'assets/images/member/card/le-nhat-minh-card.jpg',
      role: 'Research Assistant',
      organisation: 'Smart Green Transformation Center (GREEN-X), VinUniversity',
      linkedin: 'https://www.linkedin.com/in/nh%E1%BA%ADt-minh-l%C3%AA-03b21b373/'
    },
    'le-huy-tam': {
      name: 'Le Huy Tam',
      photo: 'assets/images/member/card/tam-card.jpg',
      role: 'Research Assistant',
      organisation: 'Smart Green Transformation Center (GREEN-X), VinUniversity'
    },
    'vo-thuy-ngan': {
      name: 'Vo Thuy Ngan',
      photo: 'assets/images/member/card/thuy-ngan-card.jpg',
      role: 'Research Assistant',
      organisation: 'Smart Green Transformation Center (GREEN-X), VinUniversity',
      linkedin: 'https://www.linkedin.com/in/thuynganvo'
    }
  };

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, function (character) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character];
    });
  }

  function makeAccordion(id, title, content) {
    return '<section class="member-accordion"><button class="member-accordion__button" type="button" aria-expanded="true" aria-controls="' + id + '">' + escapeHtml(title) + '</button><div class="member-accordion__panel" id="' + id + '">' + content + '</div></section>';
  }

  function renderMissing(root) {
    document.title = 'Member profile not found | VIN-SSUM';
    root.innerHTML = '<div class="member-missing"><h1>Member profile not found</h1><p>The requested VIN-SSUM member profile is unavailable.</p><a href="team.html">Return to Team</a></div>';
  }

  function renderProfile(root, slug, member) {
    var actions = [];
    var details = [];

    if (member.linkedin) actions.push('<a href="' + escapeHtml(member.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a>');
    if (member.website) actions.push('<a class="secondary" href="' + escapeHtml(member.website) + '" target="_blank" rel="noopener">Personal website</a>');
    if (member.cv) actions.push('<a class="secondary" href="' + escapeHtml(member.cv) + '" target="_blank" rel="noopener">View CV</a>');
    if (member.bio) details.push(makeAccordion(slug + '-introduction', 'Introduction', '<p>' + escapeHtml(member.bio) + '</p>'));
    if (Array.isArray(member.topics) && member.topics.length) details.push(makeAccordion(slug + '-research-topics', 'Research interests', '<ul>' + member.topics.map(function (topic) { return '<li>' + escapeHtml(topic) + '</li>'; }).join('') + '</ul>'));
    if (Array.isArray(member.researchTitles) && member.researchTitles.length) details.push(makeAccordion(slug + '-research-projects', 'Current research', '<ul>' + member.researchTitles.map(function (title) { return '<li>' + escapeHtml(title) + '</li>'; }).join('') + '</ul>'));

    document.title = member.name + ' | VIN-SSUM';
    root.innerHTML = '<nav class="member-breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span aria-hidden="true">/</span><a href="team.html">Team</a><span aria-hidden="true">/</span><span aria-current="page">' + escapeHtml(member.name) + '</span></nav><article class="member-profile-card"><img class="member-profile-photo" src="' + escapeHtml(member.photo) + '" alt="' + escapeHtml(member.name) + '"><div class="member-profile-content"><p class="member-profile-eyebrow">' + escapeHtml(member.label || 'VIN-SSUM member') + '</p><h1>' + escapeHtml(member.name) + '</h1><p class="member-profile-role">' + escapeHtml(member.role) + '</p><p class="member-profile-org">' + escapeHtml(member.organisation) + '</p>' + (actions.length ? '<div class="member-profile-actions">' + actions.join('') + '</div>' : '') + '</div></article>' + (details.length ? '<div class="member-profile-details">' + details.join('') + '</div>' : '');

    root.querySelectorAll('.member-accordion__button').forEach(function (button) {
      button.addEventListener('click', function () {
        var panel = document.getElementById(button.getAttribute('aria-controls'));
        var expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!expanded));
        panel.hidden = expanded;
      });
    });
  }

  var root = document.querySelector('[data-member-profile]');
  if (!root) return;

  var slug = new URLSearchParams(window.location.search).get('member');
  var member = slug && members[slug];
  if (!member) renderMissing(root);
  else renderProfile(root, slug, member);
})();
