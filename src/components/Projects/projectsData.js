//VRC 
import VRCIntroImage from "../../Assets/Projects/VRC/Intro.jpg";
import VRCCleaing from "../../Assets/Projects/VRC/Cleaning.png";
import VRCMopping from "../../Assets/Projects/VRC/Mopping.png";
import VRCHandCleaing from "../../Assets/Projects/VRC/hand hygene.jpg";
import VRCVideo from "../../Assets/Projects/VRC/video.mp4";
//DXB
import DXBIntroImage from "../../Assets/Projects/DXB/DXBIntroImage.png"
import DXBVR1 from "../../Assets/Projects/DXB/DXBVR1.png"
import DXBVR2 from "../../Assets/Projects/DXB/DXBVR2.png"
import DXBPC1 from "../../Assets/Projects/DXB/DXBPC1.png"
import DXBPC2 from "../../Assets/Projects/DXB/DXBPC2.png"
import DXBVideo from "../../Assets/Projects/DXB/video.mp4"
// Spring's Resturant
import SpringsIntroImage from "../../Assets/Projects/Spring's Resturant/intro.png"
import Springs1 from "../../Assets/Projects/Spring's Resturant/inside1.png"
import Springs2 from "../../Assets/Projects/Spring's Resturant/inside2.png"
import Springs3 from "../../Assets/Projects/Spring's Resturant/inside3.png"
import Springs4 from "../../Assets/Projects/Spring's Resturant/inside4.png"
// Java Chess engine
import ChessIntroImage from "../../Assets/Projects/Ai Chess Engine/intro.png"
import Chess1 from "../../Assets/Projects/Ai Chess Engine/img1.png"
import Chess2 from "../../Assets/Projects/Ai Chess Engine/img2.png"
import Chess3 from "../../Assets/Projects/Ai Chess Engine/img3.png"
import Chess4 from "../../Assets/Projects/Ai Chess Engine/img4.png"
// PropHuntGame
import GameStoryImage from "../../Assets/Projects/OutOfSight/Story.png"
// EMS
import EMSIntroImage from "../../Assets/Projects/EMS/intro.png"
import EMS1 from "../../Assets/Projects/EMS/1.png"
import EMS2 from "../../Assets/Projects/EMS/2.png"
import EMS3 from "../../Assets/Projects/EMS/3.png"
import EMS4 from "../../Assets/Projects/EMS/4.png"
import EMSvideo from "../../Assets/Projects/EMS/video.mp4"
// CXR
import CXRIntroImage from "../../Assets/Projects/CXR/Intro.png"
import CXR1 from "../../Assets/Projects/CXR/1.png"
import CXR2 from "../../Assets/Projects/CXR/2.png"
import CXR3 from "../../Assets/Projects/CXR/3.png"
import CXR4 from "../../Assets/Projects/CXR/4.png"
// XO
import XOIntroImage from "../../Assets/Projects/XOARM/intro.png"
import XO1 from "../../Assets/Projects/XOARM/1.png"
import XO2 from "../../Assets/Projects/XOARM/2.png"
import XO3 from "../../Assets/Projects/XOARM/3.png"




export const projectsData = [
  {
  id: "out-of-sight",
  title: "Out of Sight!",
  imgPath: GameStoryImage,
  description: "A fast-paced, chaotic multiplayer prop-hunt game that blends magical abilities, creative deception, and clip-worthy moments.",
  shortDescription: "Chaotic multiplayer prop-hunt game with magical abilities",
  detailedDescription: `Out of Sight! is an asymmetric multiplayer prop-hunt game designed to turn classic hide-and-seek into a fast, magical, and chaotic mind game.
  
  Set in a vibrant fantasy world, players take on one of two roles: clever aliens who disguise themselves as props using traps and trickery, or magical hunters equipped with elemental abilities to uncover and chase them down. Every match is built around unpredictability, creativity, and last-second escapes that naturally produce memorable and shareable moments.
  
  Designed for short, replayable 5–8 minute sessions, Out of Sight! emphasizes fast decision-making, ability-driven gameplay, and environmental interaction. The game is built with a strong focus on replayability, humor, and community-driven development, making each round feel like a unique story worth sharing.`,
  keyFeatures: [
    "Asymmetric prop-hunt gameplay with distinct roles",
    "Ability-driven mechanics for both hunters and aliens",
    "Magical elemental powers and trap-based deception",
    "Short, fast-paced matches (5–8 minutes)",
    "Highly replayable gameplay with unpredictable outcomes",
    "Vibrant fantasy environments with interactive props",
    "Clip-worthy moments designed for streaming and social media",
    "Polished multiplayer experience built for party play",
    "Creator-friendly design encouraging memes and highlights",
    "Community-focused development with playtesting feedback loops"
  ],
  technologies: [
    "Unity",
    "C#",
    "Multiplayer Game Architecture",
    "Custom Ability System",
    "Asymmetric Game Design",
    "UI & UX Systems",
    "Performance Optimization"
  ],
  images: [],
  videos: [],
  isBlog: false,
},
{
  id: "dxb",
  title: "DXB",
  imgPath: DXBIntroImage,
  description: "An immersive VR and PC-based digital twin of Dubai International Airport, designed for interactive exploration, spatial inspection, and real-time information visualization.",
  shortDescription: "Interactive digital twin of Dubai Airport for VR, PC, and touch screens",
  detailedDescription: `The DXB Digital Twin is a high-fidelity virtual representation of Dubai International Airport, developed to enable immersive walkthroughs, spatial understanding, and interactive data inspection across both VR and PC platforms.
  
  The experience allows users to explore the airport’s exterior and interior environments through a smooth, guided walkthrough system. A dynamic main menu presents the airport exterior in a rotating, interactive view, with contextual buttons positioned above key rooms and zones.
  
  Selecting a room instantly brings up detailed UI panels displaying relevant operational, spatial, or informational data, enabling intuitive inspection without breaking immersion. The PC version additionally supports touch-screen interaction, ensuring accessibility across kiosks, large displays, and standard desktop setups.`,
  keyFeatures: [
    "High-fidelity digital twin of Dubai International Airport",
    "VR and PC versions with touch-screen support",
    "Interactive rotating exterior main menu",
    "Context-aware buttons positioned above rooms and zones",
    "Instant room inspection with data-driven UI panels",
    "Seamless exterior and interior walkthrough experience",
    "Smooth camera transitions and focus-based navigation",
    "Interactive UI system optimized for VR and touch input",
    "Scalable architecture supporting future airport expansions",
    "Performance-optimized for real-time exploration"
  ],
  technologies: [
    "Virtual Reality",
    "Unity",
    "C#",
    "PC & Touch Screen Interaction",
    "Custom Camera & Navigation System",
    "UI Toolkit / Custom UI System",
    "Digital Twin Architecture"
  ],
  images: [DXBVR1, DXBVR2, DXBPC1, DXBPC2],
  videos: [DXBVideo],
  isBlog: false,
},
  {
    id: "vrc",
    title: "VRC",
    imgPath: VRCIntroImage,
    description: "The first VR-based training system in Canada built to support pharmacy professionals in learning and perfecting sterile compounding protocols.",
    shortDescription: "VR-based training system for pharmacy professionals",
    detailedDescription: `The Virtual Interactive Cleanroom (VRC) is an innovative VR training platform that enables pharmacy professionals to strengthen their sterile compounding skills through immersive, on-demand simulations.
    As the first solution of its kind in Canada, it tackles the growing need for consistent compliance and hands-on competency in hospital and compounding pharmacy environments.
    Through realistic virtual scenarios, pharmacists and technicians can practice essential procedures—such as garbing, hand hygiene, and laminar flow hood cleaning—while receiving real-time feedback to ensure accurate and protocol-aligned performance.`,
    keyFeatures: [
      "Realistic virtual cleanroom environment with pharmaceutical standards compliance",
      "Complete garbing simulation with proper donning procedures",
      "Hand hygiene training with step-by-step protocols",
      "Physical object simulation with realistic physics (mops, tissues, tools)",
      "Hand washing simulation with proper technique validation",
      "PPE simulation with correct wearing procedures",
      "Real-time feedback system ensuring protocol compliance",
      "Dynamic cleaning system working on any surface with any tool",
      "Modular objectives system orchestrating interactions and steps",
      "Immersive hand tracking and interaction mechanics",
      "Performance optimized for Meta Quest platform"
    ],
    technologies: ["Virtual Reality", "Unity", "C#", "Meta Quest","Custom VR Interaction System", "Custom Cleaning System"],
    images: [VRCIntroImage, VRCCleaing,VRCMopping,VRCHandCleaing],
    videos: [VRCVideo],
    isBlog: false,
  },
  {
  id: "explainable-thoracic-diagnosis",
  title: "XAI for Thoracic Diagnosis",
  imgPath: CXRIntroImage,
  description: "An explainable AI-based diagnostic system for thoracic disease detection from chest X-rays using Vision Transformers and state-of-the-art XAI techniques.",
  shortDescription: "Explainable Vision Transformer system for chest X-ray diagnosis",
  detailedDescription: `This graduation project presents an advanced, explainable AI system designed to assist in the diagnosis of thoracic diseases from chest X-ray images. The research addresses two critical challenges in medical AI: achieving high diagnostic accuracy and providing transparent, interpretable model decisions suitable for clinical use.
  
  The system leverages a Vision Transformer (ViT-Base-R50-S16-224) architecture to classify thoracic conditions including Atelectasis, Pleural Effusion, and Infiltration. Unlike traditional CNN-based approaches, the transformer-based model captures long-range spatial dependencies and subtle overlapping patterns commonly found in complex radiographs.
  
  A dedicated thorax-extraction preprocessing pipeline was implemented using OpenCV to isolate the lung region and reduce background noise, improving both classification performance and interpretability. The model was trained and evaluated on the NIH ChestX-ray14 dataset, achieving strong AUC scores that outperform CNN benchmarks.
  
  To address the black-box nature of deep learning in healthcare, multiple explainable AI (XAI) techniques were integrated and evaluated, including SHAP, LIME, GradCAM++, and Attention Rollout. Each method was analyzed in terms of interpretability quality, decision impact, and computational efficiency, demonstrating that selecting disease-aligned explainability techniques significantly enhances clinical insight and physician trust.`,
  keyFeatures: [
    "Vision Transformer-based thoracic disease classification",
    "Detection of Atelectasis, Effusion, and Infiltration from CXR images",
    "Thorax extraction preprocessing pipeline using OpenCV",
    "Evaluation on NIH ChestX-ray14 dataset",
    "Comprehensive explainability using SHAP, LIME, GradCAM++, and Attention Rollout",
    "Quantitative comparison of explainability impact and processing cost",
    "Clinically relevant performance evaluation using AUC-ROC",
    "Improved interpretability for physician trust and validation",
    "Designed for real-time inference and clinical workflows",
    "Research-driven system aligned with healthcare regulations and ethics"
  ],
  technologies: [
    "Deep Learning",
    "Vision Transformers (ViT)",
    "Python",
    "OpenCV",
    "Explainable AI (XAI)",
    "SHAP",
    "GradCAM++",
    "Attention Rollout",
    "Medical Image Analysis"
  ],
  images: [CXR1, CXR2, CXR3, CXR4],
  videos: [],
  isBlog: false,
},
  {
  id: "ai-chess-engine",
  title: "AI Chess Engine",
  imgPath: ChessIntroImage,
  description: "A customizable AI-powered chess engine built with Java, applying OOP best practices and a Minimax-based decision-making system.",
  shortDescription: "Java-based AI chess engine using Minimax",
  detailedDescription: `This project is a fully functional AI chess engine developed using Java with a strong focus on object-oriented design principles and clean architecture.
  
  The engine uses a Minimax algorithm to evaluate game states and make strategic decisions, allowing the AI to simulate future moves and choose optimal plays. The chess system itself is highly customizable, enabling flexible configurations of rules, pieces, and board behavior.
  
  Special attention was given to applying OOP best practices such as encapsulation, abstraction, inheritance, and separation of concerns, resulting in a maintainable, extensible, and testable codebase. Guava was used to support utility operations and improve code readability and performance.`,
  keyFeatures: [
    "AI opponent powered by the Minimax decision-making algorithm",
    "Customizable chess rules and game configurations",
    "Well-structured object-oriented architecture",
    "Clear separation between game logic, AI logic, and rendering",
    "Extensible design allowing future AI or rule enhancements",
    "Efficient game state evaluation and move generation",
    "Use of Guava utilities for cleaner and safer code",
    "Readable, maintainable, and scalable codebase",
  ],
  technologies: [
    "Java",
    "Object-Oriented Programming (OOP)",
    "Minimax Algorithm",
    "Guava",
    "AI Game Logic",
    "Software Design Patterns"
  ],
  images: [Chess1, Chess2, Chess3,Chess4],
  videos: [],
  isBlog: false,
},
{
  id: "educational-management-system",
  title: "Educational Management System",
  imgPath: EMSIntroImage,
  description: "A full-stack educational management system built with Node.js following the MVC architecture, designed to manage users, subjects, assignments, and submissions.",
  shortDescription: "MVC-based educational management system using Node.js",
  detailedDescription: `This project is a complete Educational Management System developed using Node.js and structured around the MVC (Model–View–Controller) architectural pattern to ensure scalability, clarity, and maintainability.
  
  The system supports multiple user roles including administrators, teachers, and students. Administrators can manage subjects, teachers, and overall system structure, while teachers can create, edit, and manage assignments. Students can view assignments, submit their work, and track their submissions through a clean and intuitive interface.
  
  Server-side rendering is handled using EJS, allowing dynamic views and seamless integration between backend logic and front-end presentation. The project emphasizes clean routing, modular models, proper separation of concerns, and real-world academic workflows.`,
  keyFeatures: [
    "MVC architecture with clear separation of concerns",
    "Role-based system (Admin, Teacher, Student)",
    "Authentication and authorization workflows",
    "Subject creation and management by administrators",
    "Assignment creation, editing, and viewing by teachers",
    "Student assignment submissions and tracking",
    "Dynamic server-side rendered views using EJS",
    "Modular model structure for scalability and maintainability",
    "Structured routing for assignments, subjects, users, and auth",
    "Error handling and validation mechanisms"
  ],
  technologies: [
    "Node.js",
    "Express.js",
    "MVC Architecture",
    "EJS",
    "JavaScript",
    "RESTful Routing",
    "Server-Side Rendering"
  ],
  images: [EMS1, EMS2, EMS3, EMS4],
  videos: [EMSvideo],
  isBlog: false,
},
{
  id: "xo-arm-tiva-c",
  title: "XO–ARM Game",
  imgPath: XOIntroImage,
  description: "A hardware-based Tic-Tac-Toe game implemented on a Tiva C ARM microcontroller with custom-built drivers and real-time hardware interaction.",
  shortDescription: "Embedded XO (Tic-Tac-Toe) game on ARM Tiva C",
  detailedDescription: `XO–ARM is an embedded systems project that implements the classic Tic-Tac-Toe (X-O) game on a TM4C123GH6PM (Tiva C) ARM microcontroller.
  
  The game is played by two players on a 3x3 grid using physical push buttons for input, with the game state displayed on a Nokia 5110 LCD screen. Players take turns placing their symbols (X or O), while the system updates the display in real time and checks for win or tie conditions.
  
  All hardware drivers, including GPIO, LCD, button handling, LEDs, and buzzer control, were implemented from scratch without relying on external libraries. The system also uses LEDs to indicate the active player and a buzzer with a warning LED to signal game-ending conditions such as wins or ties.
  
  This project demonstrates low-level ARM programming, direct register manipulation, and real-time interaction between software and hardware components in an embedded environment.`,
  keyFeatures: [
    "Classic Tic-Tac-Toe game implemented on embedded hardware",
    "Custom-written drivers for GPIO, LCD, buttons, LEDs, and buzzer",
    "Real-time player input using physical push buttons",
    "Graphical game board rendered on Nokia 5110 LCD",
    "Player turn indication using dedicated LEDs",
    "Audio and visual alerts using buzzer and alarm LED",
    "Low-level ARM programming with direct register access",
    "Reliable real-time system behavior on resource-constrained hardware"
  ],
  technologies: [
    "Embedded Systems",
    "ARM Cortex-M4",
    "TM4C123GH6PM (Tiva C)",
    "C Programming",
    "Bare-Metal Programming",
    "Custom Hardware Drivers",
    "GPIO & Peripheral Control"
  ],
  images: [XOIntroImage,XO3,XO1, XO2],
  videos: [],
  isBlog: false,
},
{
  id: "springs-restaurant",
  title: "Spring’s Restaurant",
  imgPath: SpringsIntroImage,
  description: "A modern, animated restaurant website designed to deliver a smooth food ordering and browsing experience with a strong visual identity.",
  shortDescription: "Modern restaurant website with online ordering and animations",
  detailedDescription: `Spring’s Restaurant is a fully responsive, front-end web project designed to showcase a restaurant’s brand, menu, and services through an elegant and interactive user experience.
  
  The website allows users to explore the restaurant’s story, browse the food menu, view a curated gallery, and place food orders through an intuitive ordering flow. A carefully crafted color palette, smooth animations, and well-structured architecture work together to create a visually appealing and user-friendly experience.
  
  Built with clean HTML, modular SCSS, and JavaScript, the project focuses on performance, maintainability, and accessibility, ensuring a seamless experience across devices and screen sizes.`,
  keyFeatures: [
    "Online food ordering system with intuitive user flow",
    "Interactive and animated user interface",
    "Responsive design for desktop, tablet, and mobile",
    "Restaurant menu with clear categorization",
    "Image gallery showcasing dishes and ambiance",
    "About section highlighting the restaurant’s identity",
    "Location and contact information section",
    "Smooth page transitions and UI animations",
    "Consistent color palette and modern visual design",
    "Well-structured and maintainable front-end architecture"
  ],
  technologies: [
    "HTML5",
    "SCSS",
    "JavaScript",
    "Responsive Web Design",
    "CSS Animations",
    "Front-End Architecture"
  ],
  images: [Springs1, Springs2, Springs3, Springs4],
  videos: [],
  isBlog: false,
}
];
export const getProjectById = (id) => {
  return projectsData.find((project) => project.id === id);
};