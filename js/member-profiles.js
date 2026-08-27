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
      publications: [
        'Nguyen-Phuoc, D.Q.*, Nguyen, B.V., Vo, D.Q.N & Wong, Y.D., 2025, ‘Riding safely with kids: Uncovering key factors driving parents’ safe riding intentions’. Accident Analysis & Prevention (Q1, A*). Vol 221, pp. 108209. DOI: 10.1016/j.aap.2025.108209',
        'Nguyen-Phuoc, D.Q.*, Pham, S.T.*, Nguyen, T.P.T., Su, D.N., Luu, T.T. & Oviedo-Trespalacios, O., 2025, ‘Exploring the switch to urban train services: the impact of perceived accessibility and its moderating effects’. Transportation Research Part A: Policy and Practice (Q1, A*). Vol 191, 104320. DOI: 10.1016/j.tra.2024.104320',
        'Nguyen-Phuoc, D.Q.*, Mai, N.X. & Oviedo-Trespalacios, O., 2024, ‘Not the Same: How Delivery, Ride-Hailing, and Private Riders’ Roles Influence Safety Behavior’. Accident Analysis & Prevention (Q1, A*). Vol 208, 107762. DOI: 10.1016/j.aap.2024.107762',
        'Nguyen-Phuoc, D.Q.*, Mai, N.X., Kim, I. & Oviedo-Trespalacios, O., 2024, ‘Questioning Penalties and Road Safety Policies: Are They Enough to Deter Risky Two-Wheeler Behavior?’. Accident Analysis & Prevention (Q1, A*). Vol 207, 107756. DOI: 10.1016/j.aap.2024.107756',
        'Nguyen-Phuoc, D.Q.*, Zhou, M., Chua, M. H., Alho, A. R.*, Oh, S.*, Seshadri, R., Le, D. T., 2023, ‘Examining the effects of Automated Mobility-on-Demand services on public transport systems using an agent-based simulation approach’. Transportation Research Part A: Policy and Practice (Q1, A*). Vol 169, 103583. DOI: 10.1016/j.tra.2023.103583',
        'Nguyen-Phuoc, D.Q.*, Ly, Su, D.N., Nguyen, H.H. & Oviedo-Trespalacios, O., 2023, ‘Deadly meals: The influence of job-related factors on burnout and risky riding behaviours of food delivery motorcyclists’. Safety Science (Q1, A*). Vol 159, 106007. DOI: 10.1016/j.ssci.2022.106007',
        'Nguyen-Phuoc, D.Q.*, Nguyen, T.V., Su, D.N., Le, P. T. & Oviedo-Trespalacios, O., 2022, ‘How social cues about other passengers affect word-of-mouth and intention to continue using bus services? A second-order SEM approach’. Transportation Research Part A: Policy and Practice (Q1, A*). Vol 158, pp. 302-320. DOI: 10.1016/j.tra.2022.02.009',
        'Nguyen-Phuoc, D.Q.*, Su, D.N., Vo, N.S., Nguyen, H.H. & Oviedo-Trespalacios, O., 2022, ‘Factors affecting intention to use on-demand shared ride-hailing services in Vietnam: Risk, cost or sustainability?’. Journal of Transport Geography (Q1, A). Vol 99, 103302. DOI: 10.1016/j.jtrangeo.2022.103302',
        'Nguyen-Phuoc, D.Q.*, Oviedo-Trespalacios, O., Vo, N.S., Le, P. T. & Nguyen, T. V., 2021, ‘How does perceived risk affect passenger satisfaction and loyalty towards ride sourcing services?’. Transportation Research Part D: Transport and Environment (Q1, A). Vol 97, 102921. DOI: 10.1016/j.trd.2021.102921',
        'Nguyen-Phuoc, D.Q.*, Tran, A.T.P., Nguyen, T.V., Le, P.T. & Su, D.N., 2021, ‘Investigating the complexity of perceived service quality and perceived safety and security in building loyalty among bus passengers in Vietnam – A PLS-SEM approach’. Transport Policy (Q1, A). Vol 101, pp. 162-173. DOI: 10.1016/j.tranpol.2020.12.010'
      ],
      awards: [
        'Outstanding Research Performance Award, presented by People’s Committee of Danang City, Vietnam in 2018, 2019, 2022, 2023, 2024 and 2025',
        'Winner, Outstanding Research Performance Award, presented by the University of Danang, Vietnam in 2022, 2023 and 2024',
        'Grand Prize, Outstanding Research Performance Award, presented by the University of Danang – University of Science and Technology, Vietnam in 2024',
        'Winner, Outstanding Research Performance Award, presented by the University of Science and Technology, the University of Danang, Vietnam in 2018, 2021 and 2023',
        'Sidra Solutions Award which is presented to the most outstanding postgraduate student from a tertiary institution in Australia or New Zealand, Australia – 2019',
        'Sole keynote speaker for the plenary session, International Conference on Transport Survey Methods (ISCTSC2025), Vietnam'
      ],
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
    if (Array.isArray(member.publications) && member.publications.length) details.push(makeAccordion(slug + '-publications', 'Selected publications', '<ul>' + member.publications.map(function (publication) { return '<li>' + escapeHtml(publication) + '</li>'; }).join('') + '</ul>'));
    if (Array.isArray(member.awards) && member.awards.length) details.push(makeAccordion(slug + '-awards', 'Selected awards & honors', '<ul>' + member.awards.map(function (award) { return '<li>' + escapeHtml(award) + '</li>'; }).join('') + '</ul>'));

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
