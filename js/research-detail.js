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
      '<div class="research-detail-body">' + topic.description.map(function (text) { return '<p>' + escapeHtml(text) + '</p>'; }).join('') + '</div>';
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
