// Modal data
const modalsData = [
  {
    id: "modal-valsecchi",
    title: "Claudia Keller Valsecchi (she/her)",
    body: "Research in our laboratory focuses on elucidating the fundamental mechanisms and the physiological relevance of gene copy numbers for regulating cellular function in eukaryotes. We study the causes and consequences of gene dosage alterations and their impact on developmental, evolutionary and ageing processes. A major interest lies in the evolution of sex chromosomes and molecular diversity of compensatory mechanisms.",
    headerColor: "rgba(63,218,172,255)",
    borderColor: "rgba(63,218,172,255)"
  },
  {
    id: "modal-chen",
    title: "Fei Chen (he/him)",
    body: "Chen’s laboratory is building tools that bridge single-cell genomics with space and time, to enable discoveries of where cell types are localised within intact tissues, as well as when relevant transcriptional modules are active. To do this, the lab is developing novel experimental and computational technologies at the intersection of microscopy, genomics, and synthetic biology. His group is applying these tools to learn organisational principles governing tissue development and cellular mechanisms of disorganisation during injury and disease.",
    headerColor: "rgba(63,218,172,255)",
    borderColor: "rgba(63,218,172,255)"},
  {
    id: "modal-scaffidi",
    title: "Paola Scaffidi (she/her)",
    body: "We are interested in understanding how epigenetic mechanisms work together with alterations in the underlying genetic code and faulty communication between cells to promote cancer. By combining lab techniques with mouse models and patient samples, we want to find out how cells switch their identity as a cancer starts, and how they diversify from one another while the cancer grows. We then use this knowledge to search for ways to manipulate these processes to treat cancer more effectively.",
    headerColor: "rgba(63,218,172,255)",
    borderColor: "rgba(63,218,172,255)"
  },
  {
    id: "modal-ruprecht",
    title: "Verena Ruprecht (she/her)",
    body: "Our lab studies the molecular and biophysical mechanisms that  control cell shape, migration and multicellular organisation in the  early embryo. We further study how the tissue microenvironment and stress conditions regulate morphodynamic migration plasticity and dynamic cell functions such as phagocytic activity. With our work we aim to address how developmental robustness and innate immune responses are established in the early embryo and how adaptive cell behaviours impact on disease processes such as cancer cell metastasis.",
    headerColor: "rgba(123,173,242,255)",
    borderColor: "rgba(123,173,242,255)"
  },
  {
    id: "modal-stehbens",
    title: "Samantha Stehbens (she/her)",
    body: "Cancer cells sense and become more invasive following changes in the biophysical properties their microenvironment including increases in stromal stiffness and interstitial fluid pressures. To do this, cells need mechanisms to detect these physical limits, deform their cortex whilst producing mechanical force for forward locomotion and  orient themselves to move through tissues. We focus on understanding how the microtubule cytoskeleton and microtubule associated proteins regulate the movement of cells through physically challenging environments.",
    headerColor: "rgba(123,173,242,255)",
    borderColor: "rgba(123,173,242,255)"
  },
  {
    id: "modal-drescher",
    title: "Knut Drescher (he/him)",
    body: "My research focuses on understanding the mechanisms that determine the dynamics of bacteria in biofilms and swarms. In particular, we study the mechanisms that underlie the spatiotemporal development of microbial communities, and the properties that the communities acquire during their development.",
    headerColor: "rgba(54,218,135,255)",
    borderColor: "rgba(54,218,135,255)"
  },
  {
    id: "modal-laurent",
    title: "Gilles Laurent (he/him)",
    body: "I will describe recent work on two systems and at different levels of investigation. In the first I will describe the unexpected dynamic complexity of sleep activity in the brain of a reptile. In the second, I will describe experiments on camouflage behavior in cuttlefish, an animal that exploits a unique skin display system controlled by the brain to match the texture statistics of visual scenes. Such studies, in animals that diverged over 320 and 550 MYA respectively from our own lineage, force one to reflect on the nature of common principles of brain operations.",
    headerColor: "rgba(54,218,135,255)",
    borderColor: "rgba(54,218,135,255)"
  },
  {
    id: "modal-gartner",
    title: "Zev Gartner (he/him)",
    body: "The Gartner group is working to understand how cells self-organise into tissues, how the structure of tissues help regulate cell behaviors, and how tissue structure breaks down in diseases like cancer. By understanding these processes they hope to reveal general principles contributing to cancer progression, to speed the development of new drugs, and to develop new strategies for regenerative medicine. To accomplish these goals they build, perturb, and model human tissues in vitro using techniques from the chemical, physical, and biological sciences.",
    headerColor: "rgba(54,218,135,255)",
    borderColor: "rgba(54,218,135,255)"
  },
  {
    id: "modal-tung",
    title: "Jenny Tung (she/her)",
    body: "Jenny and her group are interested in the intersection between social behavior, genetics, and evolution. We study how the social environment influences gene regulation, population genetic structure, and health and survival across the life course. We primarily pursue these questions in nonhuman primates and other social mammals, both wild and captive.",
    headerColor: "rgba(63,218,213,255)",
    borderColor: "rgba(63,218,213,255)"
  },
  {
    id: "modal-sepela",
    title: "Rebecka Sepela (she/her)",
    body: "Animals and microorganisms have coevolved to share similar environmental niches and signal to one another in symbiotic relationships. While interkingdom signaling is appreciated in host-microbiome interactions, whether animals use microbial signaling to explore their external environment is not understood. My research exploits the uniquely adapted octopus chemotactile system to reveal broad principles for how animals sense and interact with the bacteria living all around them.",
    headerColor: "rgba(63,218,213,255)",
    borderColor: "rgba(63,218,213,255)"
  },
  {
    id: "modal-dijk",
    title: "Bram van Dijk (he/him)",
    body: "Microbial evolution is a process governed by many scales. Studying the interplay between genes, mobile elements, cells, populations, and communities of microbes is very challenging. I develop multilevel simulations that capture this interplay, and try do decipher the fundamental principles of the microbial world.",
    headerColor: "rgba(100,192,228,255)",
    borderColor: "rgba(100,192,228,255)"
  },
  {
    id: "modal-engel",
    title: "Ben Engel (he/him)",
    body: "We explore the relationship between organelle form and function by investigating how macromolecules sculpt cellular organelles, and reciprocally, how the shape of each organelle directs the function of its resident macromolecules. Cryo-electron tomography (cryo-ET) provides a window into this new world of structural cell biology.",
    headerColor: "rgba(100,192,228,255)",
    borderColor: "rgba(100,192,228,255)"
  }
];

// Create modals dynamically
for (let i = 0; i < modalsData.length; i++) {
  const modalData = modalsData[i];

  // Create modal element
  const modalElement = document.createElement("div");
  modalElement.classList.add("modal", "fade");
  modalElement.id = modalData.id;
  modalElement.setAttribute("data-bs-keyboard", "false");
  modalElement.setAttribute("tabindex", "-1");
  modalElement.setAttribute("aria-labelledby", "modalLabel-" + i);
  modalElement.setAttribute("aria-hidden", "true");

  // Modal dialog
  const modalDialog = document.createElement("div");
  modalDialog.classList.add("modal-dialog", "modal-dialog-centered", "modal-dialog-scrollable");

  // Modal content
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  // Modal header
  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");
  modalHeader.style.backgroundColor = modalData.headerColor;

  const modalTitle = document.createElement("h5");
  modalTitle.classList.add("modal-title");
  modalTitle.id = "modalLabel-" + i;
  modalTitle.textContent = modalData.title;
  modalTitle.style.borderColor = modalData.borderColor;
  modalTitle.style.borderBottomColor = modalData.borderColor;

  modalHeader.appendChild(modalTitle);

  // Modal body
  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");
  modalBody.textContent = modalData.body;

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);

  modalDialog.appendChild(modalContent);

  modalElement.appendChild(modalDialog);

  // Append modal to the document body
  document.body.appendChild(modalElement);
}
