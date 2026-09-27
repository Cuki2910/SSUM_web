(function () {
  "use strict";

  var topics = {
    "sustainable-transportation": {
      title: "Sustainable Transportation",
      eyebrow: "01 · Research focus",
      image: "assets/images/research/sustainable-transport.webp",
      alt: "Electric bus and cyclists in a green urban mobility corridor",
      description: "We study low-carbon mobility solutions, including electric vehicles, public transport, shared mobility, and active travel. Our research examines how technology, policy, infrastructure, and human behaviour can support cleaner and more sustainable transport systems."
    },
    "travel-behaviour": {
      title: "Travel Behaviour",
      eyebrow: "02 · Research focus",
      image: "assets/images/research/travel-behaviour.webp",
      alt: "Commuters studying mobility information in a research setting",
      description: "We investigate psychological, social, economic, technological, and environmental factors influencing travel decisions, including mode choice, transport adoption, satisfaction, loyalty, accessibility, willingness to pay, and pro-environmental travel behaviour."
    },
    "urban-innovation": {
      title: "Urban Innovation",
      eyebrow: "03 · Research focus",
      image: "assets/images/research/urban-innovation.webp",
      alt: "Green smart district with future urban mobility",
      description: "We explore how emerging technologies, mobility services, and governance models transform urban transportation: smart mobility, MaaS, ride-hailing, digital platforms, autonomous vehicles, robotaxis, unmanned aerial vehicles, and urban air mobility."
    },
    "traffic-safety": {
      title: "Traffic Safety",
      eyebrow: "04 · Research focus",
      image: "assets/images/research/traffic-safety.webp",
      alt: "Protected crossing and road safety infrastructure",
      description: "We examine behavioural, technological, occupational, and environmental factors associated with road crashes and unsafe travel, with particular attention to motorcyclists, pedestrians, cyclists, ride-hailing drivers, and delivery riders."
    },
    "transport-modelling": {
      title: "Transport Modelling",
      eyebrow: "05 · Research focus",
      description: "We develop quantitative models to understand and predict travel demand, traveller behaviour, traffic operations, and transport policy outcomes through statistical modelling, discrete choice analysis, structural equation modelling, simulation, and machine learning."
    },
    "explainable-ai": {
      title: "Explainable Artificial Intelligence for Transportation",
      eyebrow: "06 · Research focus",
      description: "We develop interpretable AI models for transparent and trustworthy transport decision-making, including traffic prediction, crash-risk analysis, travel behaviour modelling, operational management, and policy evaluation."
    },
    "llms-vlms": {
      title: "Large Language Models and Vision-Language Models for Intelligent Transportation Systems",
      eyebrow: "07 · Research focus",
      description: "We investigate how LLMs and VLMs can analyse transport data, understand traffic scenes, extract knowledge, support travellers, assess safety, and improve intelligent transportation systems."
    }
  };
  var topicOrder = ["sustainable-transportation", "travel-behaviour", "urban-innovation", "traffic-safety", "transport-modelling", "explainable-ai", "llms-vlms"];
  var navLabels = ["Sustainable Transport", "Travel Behaviour", "Urban Innovation", "Traffic Safety", "Transport Modelling", "Explainable AI", "LLMs & VLMs"];

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
      (topic.image ? '<div class="research-detail-hero"><img src="' + escapeHtml(topic.image) + '" alt="' + escapeHtml(topic.alt) + '"></div>' : '<div class="research-detail-hero research-detail-hero--graphic" aria-hidden="true"></div>') +
      '<p class="research-detail-eyebrow">' + escapeHtml(topic.eyebrow) + '</p>' +
      '<h1>' + escapeHtml(topic.title) + '</h1>' +
      '<div class="research-detail-body"><p>' + escapeHtml(topic.description) + '</p></div>';
  }

  var root = document.querySelector("[data-research-detail]");
  var tabs = document.querySelector("[data-research-topic-tabs]");
  if (!root) return;

  var slug = new URLSearchParams(window.location.search).get("topic") || "sustainable-transportation";
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
