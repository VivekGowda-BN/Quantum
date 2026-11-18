// Static content for the site.

// Faculty leads — photos are placeholder portraits.
export const FACULTY = [
  {
    name: "Dr. Srikanth Utagi",
    role: "Faculty · Department of Physics",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr. Thot Hongray",
    role: "Faculty · Department of Physics",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Dr. Akhilesh",
    role: "Faculty · Department of Physics",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

// Six standard quantum mechanics texts. Each card links to the publisher.
export const BOOKS = [
  {
    id: "b-01",
    title: "Introduction to Quantum Mechanics",
    authors: "David J. Griffiths & Darrell F. Schroeter",
    publisher: "Cambridge University Press",
    year: "2018",
    tag: "Undergraduate",
    description:
      "The standard first course in quantum mechanics — wave functions, the Schrödinger equation, and a careful treatment of what the formalism actually means.",
    cover: "https://covers.openlibrary.org/b/isbn/9781107189638-L.jpg",
    url: "https://www.cambridge.org/highereducation/books/introduction-to-quantum-mechanics/990799CA07A83FC5312402AF6860311E",
  },
  {
    id: "b-02",
    title: "Modern Quantum Mechanics",
    authors: "J. J. Sakurai & Jim Napolitano",
    publisher: "Cambridge University Press",
    year: "2020",
    tag: "Graduate",
    description:
      "A graduate-level treatment built around the formalism: state vectors, operators, angular momentum, and the path integral.",
    cover: "https://covers.openlibrary.org/b/isbn/9780805382914-L.jpg",
    url: "https://www.cambridge.org/highereducation/books/modern-quantum-mechanics/DF43277E8AEDF83CC12EA62887C277DC",
  },
  {
    id: "b-03",
    title: "Principles of Quantum Mechanics",
    authors: "R. Shankar",
    publisher: "Springer",
    year: "1994",
    tag: "Graduate",
    description:
      "Starts from the mathematical machinery and builds up to path integrals, symmetries, and approximation methods. Known for its clear derivations.",
    cover: "https://covers.openlibrary.org/b/isbn/9780306447907-L.jpg",
    url: "https://link.springer.com/book/10.1007/978-1-4757-0576-8",
  },
  {
    id: "b-04",
    title: "Quantum Computation and Quantum Information",
    authors: "Michael A. Nielsen & Isaac L. Chuang",
    publisher: "Cambridge University Press",
    year: "2010",
    tag: "Quantum computing",
    description:
      "The reference text for the field — qubits, gates, entanglement, quantum algorithms, and error correction, all from first principles.",
    cover: "https://covers.openlibrary.org/b/isbn/9781107002173-L.jpg",
    url: "https://www.cambridge.org/highereducation/books/quantum-computation-and-quantum-information/01E10196D0A682A6AEFFEA52D53BE9AE",
  },
  {
    id: "b-05",
    title: "The Feynman Lectures on Physics, Vol. III",
    authors: "Richard P. Feynman, Robert B. Leighton & Matthew Sands",
    publisher: "Caltech",
    year: "1965",
    tag: "Free online",
    description:
      "Quantum mechanics taught the Feynman way — two-state systems, spin, and amplitudes, with the full text free to read online.",
    cover: "https://covers.openlibrary.org/b/isbn/9780465025015-L.jpg",
    url: "https://www.feynmanlectures.caltech.edu/III_toc.html",
  },
  {
    id: "b-06",
    title: "The Principles of Quantum Mechanics",
    authors: "P. A. M. Dirac",
    publisher: "Oxford University Press",
    year: "1981",
    tag: "Classic",
    description:
      "Dirac's 1930 classic, where the bra-ket notation and the transformation theory of quantum mechanics were first set out.",
    cover: "https://covers.openlibrary.org/b/isbn/9780198520115-L.jpg",
    url: "https://global.oup.com/academic/product/the-principles-of-quantum-mechanics-9780198520115",
  },
];

// Physics news, from Quanta Magazine.
export const NEWS = [
  {
    id: "n-01",
    title: "What Makes Up the Cosmos? A 20-Year Survey Hints That Something Is Missing",
    source: "Quanta Magazine",
    date: "2026-11-16",
    tag: "Cosmology",
    summary:
      "An era-defining galaxy survey has released its final results — and they don't quite fit the leading model of cosmology.",
    image:
      "https://www.quantamagazine.org/wp-content/uploads/2026/11/DES-cr.CTIO-NOIRLab-NSF-AURA-T.-Matsopoulos-Default.webp",
    url: "https://www.quantamagazine.org/what-makes-up-the-cosmos-a-20-year-survey-hints-that-something-is-missing-20261116/",
  },
  {
    id: "n-02",
    title: "A Strange Quantum Theorem Has Killed Einstein's Reality",
    source: "Quanta Magazine",
    date: "2026-11-06",
    tag: "Foundations",
    summary:
      "Einstein fought to save our everyday notion of reality from quantum mechanics. Those who set out to aid him keep poking holes in the argument.",
    image:
      "https://www.quantamagazine.org/wp-content/uploads/2026/11/Death-of-Reality-cr.Samuel-Velasco-Default.webp",
    url: "https://www.quantamagazine.org/a-strange-quantum-theorem-has-killed-einsteins-reality-20261106/",
  },
  {
    id: "n-03",
    title: "Is There Anything Left in the Dream of Cold Fusion?",
    source: "Quanta Magazine",
    date: "2026-11-02",
    tag: "Nuclear physics",
    summary:
      "Dig a little deeper and you'll find a thriving research programme with exotic atoms that won't solve the energy crisis but stretches the boundaries of physics.",
    image:
      "https://www.quantamagazine.org/wp-content/uploads/2026/10/Qualia-Muon-Fusion-cr.Oleg-Borodin-Default.webp",
    url: "https://www.quantamagazine.org/is-there-anything-left-in-the-dream-of-cold-fusion-20261102/",
  },
  {
    id: "n-04",
    title: "Building a Quantum Computer, One Fragile Qubit at a Time",
    source: "Quanta Magazine",
    date: "2026-08-19",
    tag: "Quantum computing",
    summary:
      "Inside a dilution refrigerator, engineers are assembling the machinery of a quantum computer — and learning how much can go wrong along the way.",
    image:
      "https://www.quantamagazine.org/wp-content/uploads/2056/08/IBMs-quantum-computer-cr-Graham-Carlow-Thumbnail.webp",
    url: "https://www.quantamagazine.org/building-a-quantum-computer-one-fragile-qubit-at-a-time-20260819/",
  },
  {
    id: "n-05",
    title: "A Through-The-Lens Look at the World's Particle Physics Labs",
    source: "Quanta Magazine",
    date: "2026-04-01",
    tag: "Particle physics",
    summary:
      "A photo essay from inside the laboratories where the smallest particles in nature are studied.",
    image:
      "https://www.quantamagazine.org/wp-content/uploads/2027/04/Image-gallery-global-physics-photowalk-winners-cr-Marco-Donghia-Thumbnail.webp",
    url: "https://www.quantamagazine.org/global-physics-photowalk-2025-winners-revealed-20260401/",
  },
];
