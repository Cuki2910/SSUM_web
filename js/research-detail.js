(function () {
  "use strict";

  var topics = {
    "urban-planning": {
      title: "Urban Planning",
      eyebrow: "Research stream 01",
      image: "assets/images/research/urban-planning-hero.webp",
      alt: "Pedestrian-friendly green street with a metro line and cycle lane",
      description: [

        "The Urban Planning research stream examines how the physical form of cities influences travel choices, quality of life and the transition to cleaner transport. Many cities in Vietnam and Southeast Asia are growing quickly, and decisions made today about land use, streets and infrastructure will shape how residents travel for decades.",
        "Our work covers three areas. The first is urban mobility: we study how people move within and between urban areas, how land use, density and the location of homes, jobs and services affect their travel, and how new developments such as metro lines and satellite towns change these patterns. The second is liveable streets and public spaces: we examine how street layout, landscape design, trees and green areas, shade, footpaths and public spaces influence walking, cycling, safety and residents’ wellbeing, with attention to the needs of older people, children and people with disabilities. The third is new mobility infrastructure: we investigate where and how to place electric vehicle charging stations, battery-swapping points for electric motorcycles, and parking for shared bikes and scooters, drawing on both spatial analysis and the preferences of the people who will use them.",
        "We combine travel surveys, spatial and GIS analysis and behavioural theory. Our aim is to give planners and local authorities evidence for designing cities that are accessible, green and pleasant to live in, and that make sustainable travel the easy choice."
      ]
    },
    "smart-city": {
      title: "Smart City",
      eyebrow: "Research stream 02",
      image: "assets/images/research/smart-city-hero.webp",
      alt: "Smart city mobility data and AI infographic",
      description: [

        "The Smart City research stream asks how digital data and artificial intelligence can make urban mobility safer, more efficient and more responsive to the people who use it. Cities now generate large volumes of data from phones, apps, cameras, sensors and online platforms, but this data only creates value when it is turned into insight that planners and policymakers can act on.",
        "Our work covers three areas. The first is new data for mobility research. We use social media posts, online rider and driver communities, and public discussion of transport policy as sources of behavioural evidence, and apply large language models (LLMs) to analyse sentiment, concerns and emerging issues at scale. We also use vision-language models (VLMs) to read visual data such as street-view images, traffic camera footage and dashcam video. This allows us to detect risky road user behaviour, audit street environments for safety and walkability, and link what people say online with what can be observed on the street. The second is smart mobility services: we study how residents adopt and rely on real-time travel information, intelligent transport systems and integrated digital platforms, and what makes these services useful in everyday travel. The third is public acceptance and governance: we examine how people view the collection and use of urban data, including privacy concerns around cameras and AI analysis, trust in public agencies and willingness to share personal travel data.",
        "We combine computational methods with established behavioural theories and survey research. Our aim is to support smart city initiatives that are grounded in evidence about real user behaviour and that earn public trust, with a focus on fast-growing cities in Vietnam and Southeast Asia."
      ]
    },
    "future-mobility": {
      title: "Future Mobility",
      eyebrow: "Research stream 03",
      image: "assets/images/research/future-mobility-hero.webp",
      alt: "Robotaxis, delivery robots and drones in a future city",
      description: [

        "The Future Mobility research stream examines how people adopt, trust and live with new forms of transport. Robotaxis, autonomous delivery vehicles, low-altitude delivery drones and app-based mobility services are moving from pilots to everyday use. Whether they succeed depends as much on human responses as on technical performance.",
        "Our work covers four areas. The first is users: we study how passengers and customers form, lose and rebuild trust in robotaxis and automated delivery services, including after real-world incidents, and what leads them to continue or stop using these services. The second is human–robot interaction: we examine how people communicate with, give way to and cooperate with autonomous vehicles, delivery robots and drones in streets, footpaths and residential areas, and how interface design shapes these encounters. The third is the safety of people around automated systems: we investigate how pedestrians, cyclists and motorcyclists read and react to vehicles without a human driver, and the risks and public acceptance of drones flying at low altitude over homes and streets. The fourth is workers: we look at how ride-hailing and delivery drivers perceive the threat of automation to their jobs, and how hybrid models that combine autonomous vehicles or drones with human riders may reshape last-mile delivery.",
        "We draw on established behavioural theories and combine survey data with methods such as PLS-SEM and machine learning. Our aim is to inform policies and service designs that make the move to automated mobility safe, trusted and fair for users, surrounding road users and workers, with a particular focus on Southeast Asian cities, where mixed traffic and dense two-wheeler flows make these questions especially pressing."
      ]
    },
    "traffic-safety": {
      title: "Traffic Safety",
      eyebrow: "Research stream 04",
      image: "assets/images/research/traffic-safety-hero.webp",
      alt: "Road safety research stream infographic",
      description: [

        "The Traffic Safety research stream asks why road users take risks and what can be done to make roads safer. Road crashes remain a serious public health problem in Vietnam and across Southeast Asia, where motorcycles dominate traffic and pedestrians, cyclists and riders share space with cars, buses and trucks.",
        "Our work covers three areas. The first is road user behaviour: we study the attitudes, norms, habits and perceptions that lead motorcyclists, drivers and pedestrians to speed, use phones while riding, ignore signals or ride without proper protection, and what encourages safer choices. The second is occupational road safety in the platform economy: food delivery and ride-hailing riders spend long hours on the road under time pressure and algorithmic management. We examine how job demands, job resources, fatigue, income pressure and well-being shape their safety behaviour, and how switching from self-owned petrol motorcycles to company-provided electric motorcycles changes their working conditions and risks. The third is new evidence for safer roads: we draw on social media discussions among riders, traffic and dashcam video analysed with AI, and naturalistic riding data to understand risk in real-world settings, and we use these findings to inform education, enforcement, platform policies and road design.",
        "We build our studies on established behavioural and occupational health theories and apply methods such as structural equation modelling, machine learning and text and video analysis. Our aim is to provide evidence that helps authorities, platform companies and communities reduce road deaths and injuries."
      ]
    },
    "transport-equity-accessibility": {
      title: "Transport Equity & Accessibility",
      eyebrow: "Research stream 05",
      image: "assets/images/research/transport-equity-accessibility-hero.webp",
      alt: "Accessible and inclusive urban transport infographic",
      description: [

        "The Transport Equity & Accessibility research stream asks whether everyone can reach the jobs, education, health care and social life they need, and what stands in their way when they cannot. Transport systems are often designed around the average able-bodied commuter, leaving many groups facing physical, financial, safety and digital barriers that limit their daily lives.",
        "Our work covers three areas. The first is disability and ageing: starting with a systematic review of the factors that enable or constrain travel for people with disabilities, we study the barriers they and older adults face across the whole journey, from footpaths and bus stops to vehicles, information and staff attitudes, and how accessible design, assisted services and app-based mobility can support independent travel. The second is gender and personal safety: we examine how women’s travel differs because of care responsibilities, trip chaining and concerns about harassment and safety, especially on public transport and at night, and what these differences mean for service design. The third is affordability and spatial access: we investigate how low-income households and residents of peri-urban areas and industrial zones reach jobs and services, the share of income they spend on travel, long and tiring commutes, and whether new metro lines, bus networks and digital mobility services reduce or widen existing gaps, including for people with limited access to smartphones or online payment.",
        "We combine surveys, interviews and spatial accessibility analysis with established theories of social exclusion and mobility justice. Our aim is to provide evidence that helps planners, operators and policymakers build transport systems that serve everyone, not only those who already travel with ease."
      ]
    },
    "transport-policy-demand-management": {
      title: "Transport Policy & Demand Management",
      eyebrow: "Research stream 06",
      image: "assets/images/research/transport-policy-demand-management-hero.webp",
      alt: "Transport demand management policy infographic",
      description: [

        "The Transport Policy & Demand Management research stream asks how cities can manage travel demand to cut congestion, air pollution and emissions, and how people respond when they do. Fast-growing cities in Vietnam and Southeast Asia face rising private vehicle ownership, and authorities are planning or piloting stronger measures to limit traffic in central areas. These policies only succeed if they change behaviour and win enough public support to be implemented and sustained.",
        "Our work covers three areas. The first is pricing instruments: we study how congestion charges for entering central districts and higher or time-based parking fees affect when, where and how people travel, and how revenues could be reinvested in public transport and active travel. The second is access restrictions: we examine the effects of low-emission zones and restrictions on petrol motorcycles, including shifts to public transport, electric vehicles or other modes, changes in trip timing and destinations, and the burden these measures place on low-income households, small traders and platform workers who depend on their motorcycles for a living. The third is public acceptability: we investigate how perceived fairness, effectiveness, personal cost, trust in government and the use of revenues shape support for or opposition to demand management policies, and we analyse public debate on social media to follow how attitudes form and change over time.",
        "We combine stated preference surveys and choice modelling with established theories of policy acceptability and behaviour change, and use large language models to analyse public discourse. Our aim is to give policymakers evidence for designing measures that are effective, fair and accepted by the people they affect."
      ]
    }
  };
  // Papers shown on each topic page; same records as publication.html (keep in sync when editing).
  var topicPapers = {
    "urban-planning": [
      {
        "doi": "10.1016/j.tra.2023.103814",
        "title": "Transit-oriented development and floor area ratio regulation in a transportation corridor: Formulation and a case study",
        "authors": "DP Yu, ZC Li, B Liu, DQ Nguyen-Phuoc",
        "venue": "Transportation Research Part A: Policy and Practice, 176, 103814 (2023)"
      },
      {
        "doi": "10.1016/j.tra.2026.104981",
        "title": "Optimal timetabling and charger deployment for urban–rural electric bus services: Formulation and case study",
        "authors": "Z Wang, X Bing, ZC Li, DQ Nguyen-Phuoc, X Fu",
        "venue": "Transportation Research Part A: Policy and Practice, 208, 104981 (2026)"
      },
      {
        "doi": "10.1016/j.tranpol.2024.10.028",
        "title": "The role of physical and social environments on the loyalty toward urban rail services: A consideration of stations and onboard",
        "authors": "DQ Nguyen-Phuoc, NT Ho-Mai, TM Truong, MH Nguyen, ZC Li",
        "venue": "Transport Policy, 159, 328–344 (2024)"
      },
      {
        "doi": "10.1016/j.tbs.2022.01.004",
        "title": "The roles of physical and social environments on the behavioural intention of passengers to reuse and recommend bus systems",
        "authors": "DQ Nguyen-Phuoc, DN Su, T Nguyen, NS Vo, ATP Tran, LW Johnson",
        "venue": "Travel Behaviour and Society, 27, 162–172 (2022)"
      }
    ],
    "smart-city": [
      {
        "doi": "10.1016/j.trf.2025.103484",
        "title": "Driving the shift to electric motorcycles: the role of AI trust and AI benefits",
        "authors": "DQ Nguyen-Phuoc, TN Ho-Mai, TPT Nguyen, NDQ Vo, TT Luu, DN Su",
        "venue": "Transportation Research Part F: Traffic Psychology and Behaviour, 118, 103484 (2026)"
      },
      {
        "doi": "10.1007/s00521-020-05318-3",
        "title": "Developing artificial neural networks to estimate real-time onboard bus ride comfort",
        "authors": "T Nguyen, DQ Nguyen-Phuoc, YD Wong",
        "venue": "Neural Computing and Applications, 33(10), 5287–5299 (2021)"
      },
      {
        "doi": "10.1016/j.tra.2021.06.013",
        "title": "What makes passengers continue using and talking positively about ride-hailing services? The role of the booking app and post-booking service quality",
        "authors": "DQ Nguyen-Phuoc, NS Vo, DN Su, VH Nguyen, O Oviedo-Trespalacios",
        "venue": "Transportation Research Part A: Policy and Practice, 150, 367–384 (2021)"
      },
      {
        "doi": "10.1080/19368623.2022.2020199",
        "title": "Modeling consumers’ trust in mobile food delivery apps: Perspectives of technology acceptance model, mobile service quality and personalization-privacy theory",
        "authors": "DN Su, NAN Nguyen, LNT Nguyen, TT Luu, DQ Nguyen-Phuoc",
        "venue": "Journal of Hospitality Marketing & Management, 31(5), 535–569 (2022)"
      }
    ],
    "future-mobility": [
      {
        "doi": "10.1016/j.tra.2026.105191",
        "title": "Value versus cost in post-experience robotaxi use: evidence from a cognitive–affective–conative model",
        "authors": "DQ Nguyen-Phuoc, FY Wu, TPT Nguyen, DN Su, TT Luu, ZC Li",
        "venue": "Transportation Research Part A: Policy and Practice, 213, 105191 (2026)"
      },
      {
        "doi": "10.1016/j.tranpol.2026.104392",
        "title": "How do user–system interaction and AI driving performance influence robotaxi continuance intention through emotional responses?",
        "authors": "DQ Nguyen-Phuoc, TPT Nguyen, FY Wu, TT Luu, ZC Li",
        "venue": "Transport Policy, 188, 104392 (2026)"
      },
      {
        "doi": "10.1016/j.tra.2023.103583",
        "title": "Examining the effects of Automated Mobility-on-Demand services on public transport systems using an agent-based simulation approach",
        "authors": "DQ Nguyen-Phuoc, M Zhou, MH Chua, AR Alho, S Oh, R Seshadri, DT Le",
        "venue": "Transportation Research Part A: Policy and Practice, 169, 103583 (2023)"
      },
      {
        "doi": "10.1016/j.rtbm.2025.101534",
        "title": "How value, cost, and emotions drive electric motorcycle adoption in Vietnam: A cognitive–affective–conative approach",
        "authors": "B Van Nguyen, DQ Nguyen-Phuoc, NDQ Vo, DN Su, et al.",
        "venue": "Research in Transportation Business & Management, 64, 101534 (2026)"
      }
    ],
    "traffic-safety": [
      {
        "doi": "10.1016/j.aap.2026.108515",
        "title": "Modified MRBQ for the gig economy: linking risky riding behaviors to self-reported safety incidents among food delivery riders",
        "authors": "A Pervez, DQ Nguyen-Phuoc, NDQ Vo, JJ Lee",
        "venue": "Accident Analysis & Prevention, 231, 108515 (2026)"
      },
      {
        "doi": "10.1016/j.aap.2024.107538",
        "title": "Distracted on duty: A theory-based exploration of influences leading to mobile phone distracted riding among food delivery workers",
        "authors": "MH Nguyen, DQ Nguyen-Phuoc, NAN Nguyen, O Oviedo-Trespalacios",
        "venue": "Accident Analysis & Prevention, 202, 107538 (2024)"
      },
      {
        "doi": "10.1016/j.tra.2022.11.002",
        "title": "Factors influencing road safety compliance among food delivery riders: An extension of the job demands-resources (JD-R) model",
        "authors": "DQ Nguyen-Phuoc, NAN Nguyen, MH Nguyen, LNT Nguyen, et al.",
        "venue": "Transportation Research Part A: Policy and Practice, 166, 541–556 (2022)"
      },
      {
        "doi": "10.1016/j.ssci.2022.106007",
        "title": "Deadly meals: The influence of personal and job factors on burnout and risky riding behaviours of food delivery motorcyclists",
        "authors": "DQ Nguyen-Phuoc, LNT Nguyen, DN Su, MH Nguyen, et al.",
        "venue": "Safety Science, 159, 106007 (2023)"
      },
      {
        "doi": "10.1016/j.ssci.2024.106687",
        "title": "Safety climate and its contribution to safety performance in the food delivery industry",
        "authors": "DQ Nguyen-Phuoc, TM Truong, NT Ho-Mai, NX Mai, et al.",
        "venue": "Safety Science, 181, 106687 (2025)"
      },
      {
        "doi": "10.1016/j.kscej.2025.100468",
        "title": "Electric Two-Wheeler Crashes: Risk Factors and Potential Solutions–A Systematic Review",
        "authors": "A Pervez, DQ Nguyen-Phuoc, JJ Lee, F Chang, H Munir, S Ahmad",
        "venue": "KSCE Journal of Civil Engineering, 30(1), 100468 (2025)"
      }
    ],
    "transport-equity-accessibility": [
      {
        "doi": "10.1016/j.tra.2024.104320",
        "title": "Exploring the switch to urban train services: The impact of perceived accessibility and its moderating effects",
        "authors": "DQ Nguyen-Phuoc, ST Pham, TPT Nguyen, DN Su, TT Luu, et al.",
        "venue": "Transportation Research Part A: Policy and Practice, 191, 104320 (2025)"
      },
      {
        "doi": "10.1016/j.cities.2021.103345",
        "title": "Simulating impacts of automated mobility-on-demand on accessibility and residential relocation",
        "authors": "M Zhou, DT Le, DQ Nguyen-Phuoc, PC Zegras, J Ferreira Jr",
        "venue": "Cities, 118, 103345 (2021)"
      },
      {
        "doi": "10.1016/j.tranpol.2025.103769",
        "title": "Influential factors and passenger satisfaction towards integrated urban-rural bus services: A case study of Chibi, China",
        "authors": "ZC Li, Z Ma, DQ Nguyen-Phuoc, X Fu",
        "venue": "Transport Policy, 172, 103769 (2025)"
      },
      {
        "doi": "10.1016/j.tranpol.2020.12.010",
        "title": "Investigating the complexity of perceived service quality and perceived safety and security in building loyalty among bus passengers in Vietnam – A PLS-SEM approach",
        "authors": "DQ Nguyen-Phuoc, ATP Tran, T Van Nguyen, PT Le, DN Su",
        "venue": "Transport Policy, 101, 162–173 (2021)"
      }
    ],
    "transport-policy-demand-management": [
      {
        "doi": "10.1016/j.aap.2024.107756",
        "title": "Questioning penalties and road safety Policies: Are they enough to deter risky motorcyclist Behavior?",
        "authors": "DQ Nguyen-Phuoc, NX Mai, J Kim, O Oviedo-Trespalacios",
        "venue": "Accident Analysis & Prevention, 207, 107756 (2024)"
      },
      {
        "doi": "10.1016/j.trf.2026.103772",
        "title": "Fear of crashes or fear of fines? Understanding what motivates parents to travel safely",
        "authors": "DQ Nguyen-Phuoc, NDQ Vo, A Pervez",
        "venue": "Transportation Research Part F: Traffic Psychology and Behaviour, 122, 103772 (2026)"
      },
      {
        "doi": "10.1016/j.tra.2025.104846",
        "title": "How do the awareness of AI benefits and government subsidies affect green transport adoption: the moderating role of technology interest and engagement",
        "authors": "DQ Nguyen-Phuoc, TM Truong, TN Ho-Mai, TT Luu, ZC Li",
        "venue": "Transportation Research Part A: Policy and Practice, 204, 104846 (2026)"
      },
      {
        "doi": "10.1016/j.tranpol.2023.11.013",
        "title": "What factors influence the intention to use electric motorcycles in motorcycle-dominated countries? An empirical study in Vietnam",
        "authors": "DQ Nguyen-Phuoc, TM Truong, MH Nguyen, HG Pham, ZC Li, et al.",
        "venue": "Transport Policy, 146, 193–204 (2024)"
      },
      {
        "doi": "10.1016/j.jtrangeo.2023.103705",
        "title": "The influence of environmental concerns and psychosocial factors on electric motorbike switching intention in the global south",
        "authors": "DQ Nguyen-Phuoc, NAN Nguyen, PTK Tran, HG Pham, et al.",
        "venue": "Journal of Transport Geography, 113, 103705 (2023)"
      }
    ]
  };
  var topicOrder = ["urban-planning", "smart-city", "future-mobility", "traffic-safety", "transport-equity-accessibility", "transport-policy-demand-management"];
  var navLabels = ["Urban Planning", "Smart City", "Future Mobility", "Traffic Safety", "Equity & Accessibility", "Policy & Demand"];

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character];
    });
  }

  function renderMissing(root) {
    document.title = "Research summary not found | VIN-SSUM";
    root.innerHTML = '<div class="research-missing"><h1>Research summary not found</h1><p>The requested VIN-SSUM research focus is unavailable.</p><a href="research.html">Return to Research</a></div>';
  }

  function renderTabs(root, topic) {
    root.innerHTML = topicOrder.map(function (slug, index) { return '<a href="research-detail.html?topic=' + slug + '"' + (slug === topic.slug ? ' aria-current="page"' : '') + ' title="' + escapeHtml(topics[slug].title) + '">' + navLabels[index] + '</a>'; }).join('');
  }

  function renderTopic(root, topic) {
    document.title = topic.title + " | VIN-SSUM";
    root.innerHTML = '<nav class="research-breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span aria-hidden="true">/</span><a href="research.html">Research</a><span aria-hidden="true">/</span><span aria-current="page">' + escapeHtml(topic.title) + '</span></nav>' +
      '<div class="research-detail-hero"><img src="' + escapeHtml(topic.image) + '" alt="' + escapeHtml(topic.alt) + '"></div>' +
      '<p class="research-detail-eyebrow">' + escapeHtml(topic.eyebrow) + '</p>' +
      '<h1>' + escapeHtml(topic.title) + '</h1>' +
      '<div class="research-detail-body">' + topic.description.map(function (text) { return '<p>' + escapeHtml(text) + '</p>'; }).join('') + '</div>' +
      '<section class="research-papers"><h2>Selected publications</h2><div class="publication-list">' + topicPapers[topic.slug].map(function (p) {
        return '<a class="publication-item" href="https://doi.org/' + escapeHtml(p.doi) + '" target="_blank" rel="noopener"><h2>' + escapeHtml(p.title) + '</h2><p class="publication-authors">' + escapeHtml(p.authors) + '</p><p class="publication-venue">' + escapeHtml(p.venue) + '</p></a>';
      }).join('') + '</div></section>';
  }

  var root = document.querySelector("[data-research-detail]");
  var tabs = document.querySelector("[data-research-topic-tabs]");
  if (!root) return;

  var slug = new URLSearchParams(window.location.search).get("topic") || "urban-planning";
  if (!topics[slug]) {
    slug = topicOrder[0];
    window.history.replaceState(null, "", "?topic=" + slug);
  }
  var topic = topics[slug];
  if (topic) topic.slug = slug;
  if (!topic) renderMissing(root);
  else {
    if (tabs) renderTabs(tabs, topic);
    renderTopic(root, topic);
    if (tabs) tabs.addEventListener("keydown", function (event) {
      var links = Array.prototype.slice.call(tabs.querySelectorAll("a"));
      var index = links.indexOf(document.activeElement);
      if (index === -1) return;
      if (event.key === "Home") index = 0;
      else if (event.key === "End") index = links.length - 1;
      else if (event.key === "ArrowRight") index = (index + 1) % links.length;
      else if (event.key === "ArrowLeft") index = (index - 1 + links.length) % links.length;
      else return;
      event.preventDefault();
      window.location.assign(links[index].href);
    });
  }
})();
