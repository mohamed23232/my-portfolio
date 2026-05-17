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
// Fruithalla Game
import GameStoryImage from "../../Assets/Projects/Fruithalla/Story.png"
import GameplayVideo from "../../Assets/Projects/Fruithalla/Gameplay2.mp4"
import GameplayImage1 from "../../Assets/Projects/Fruithalla/Gameplay1.png"
import GameplayImage2 from "../../Assets/Projects/Fruithalla/Gameplay2.png"
import LevelsImage from "../../Assets/Projects/Fruithalla/Levels.png"
import MainMenuImage from "../../Assets/Projects/Fruithalla/MainMenu.png"
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
// Ship Simulation
import ShipIntroImage from "../../Assets/Projects/Ship simulation/intro.png"

// Crisis Simulation
import CrisisIntroImage from "../../Assets/Projects/Crisis Simulation/intro.png"




export const projectsData = [
  {
  id: "Maritime-Training-Simulation",
  title: "Maritime Training Simulation",
  imgPath: ShipIntroImage,
  description: "A real-time ship simulation platform designed for immersive training and interactive scenario-based experiences.",
  shortDescription: "Real-time maritime training simulator with VR and PC support",
  detailedDescription: `The Maritime Training Simulation is a comprehensive, real-time platform providing immersive training experiences for maritime professionals across VR. The platform features authentic vessel controls, dynamic scenarios, and live operational data monitoring through immersive in-world interfaces.

  A sophisticated telemetry visualization system provides real-time feedback on vessel movement, environmental conditions, and simulation state. The modular scoring framework assesses performance with structured feedback based on configurable objectives. Supporting VR interaction. the platform prioritizes immersion, usability, scalability, and performance.`,
  keyFeatures: [
    "Interactive vessel controls (wheel steering, throttle, bow thruster)",
    "Real-time telemetry visualization and operational data display",
    "Modular objective, quiz, and scoring system",
    "Sonar and radar system integration for enhanced situational awareness",
    "Scenario-driven training exercises with performance assessment",
    "VR interactions implemented with Meta XR All-in-One SDK",
    "Modular audio system with contextual sound design",
    "In-game UI optimized for VR",
  ],
  technologies: [
    "Unity",
    "C#",
    "Meta XR All-in-One SDK",
    "UI/UX for Virtual Reality",
    "Physics-Based Simulation",
  ],
  images: [],
  videos: [],
  isBlog: false,
},
 {
  id: "crisis-simulation",
  title: "Crisis Simulation",
  imgPath: CrisisIntroImage,
  description: "A VR platform for immersive crisis scenario training with guided emergency procedures and interactive walkthroughs.",
  shortDescription: "VR-based crisis scenario training with guided emergency response procedures",
  detailedDescription: `The Crisis Simulation is a comprehensive VR training experience designed to immerse participants in realistic emergency scenarios within large-scale facility environments. The platform guides users through critical emergency procedures using step-by-step walkthroughs, demonstrating the correct actions to take during high-pressure situations while maintaining active engagement through hands-on interactions.
  
  Users progress through scenario modules that unfold sequentially, with guided narration and visual cues directing them through the environment. The experience emphasizes decision-making in crisis situations, with interactive checkpoints that reinforce key procedural moments and enhance learning outcomes.
  
  A built-in assessment system evaluates comprehension and response accuracy throughout the experience, providing structured feedback on user performance. The platform features a compass-based navigation system optimized for large environments, ensuring users maintain spatial orientation while progressing through complex scenarios.
  
  The modular architecture supports flexible scenario and objective management, allowing for customization and extension of training content. The system combines immersive VR interaction, realistic environmental design, and pedagogical assessment to create an effective, engaging training platform for emergency preparedness and response.`,
  keyFeatures: [
    "Realistic crisis scenarios within large-scale facility environments",
    "Step-by-step interactive guided walkthroughs for emergency procedures",
    "Sequential scenario modules with managed progression and state flow",
    "Guided narration and visual cues directing users through scenarios",
    "Integrated assessment system with quizzes and ordering-based evaluations",
    "Compass-based navigation system for large environment orientation",
    "Real-time performance feedback and comprehension evaluation",
    "Hands-on interactive training mechanics for active engagement",
    "Modular architecture for flexible scenario and objective management",
  ],
  technologies: [
    "Unity",
    "C#",
    "Meta XR All-in-One SDK",
    "Scenario Management System",
    "UI/UX for VR",
    "Narration",
  ],
  images: [],
  videos: [],
  isBlog: false,
},
  {
  id: "Fruithalla",
  title: "FRUITHALLA",
  imgPath: MainMenuImage,
  description: "An intense single-player wave-based survival shooter where you fight against relentless enemy waves across multiple challenging levels.",
  shortDescription: "Single-player wave-based survival shooter with strategic combat and progression",
  detailedDescription: `Fruithalla is an action-packed single-player survival experience that challenges players to withstand increasingly difficult waves of enemies across multiple combat arenas.
  Players spawn into hostile environments armed with a dynamic weapon system, facing waves of intelligent AI enemies. Success requires strategic thinking, precise aiming, and survival skills as enemies attack with various behaviors and patterns. Each wave must be completely cleared to progress, with the game tracking your kills and unlocking new levels as you prove your combat prowess.
  
  The project showcases a sophisticated Enemy AI System featuring state machine-based behaviors with detection, pursuit, and attack patterns. A robust Wave Control System manages enemy spawning, wave progression, and difficulty scaling. The game features a comprehensive Level Selection System with unlock progression saved to the cloud, ensuring your progress is never lost. Players can choose from multiple weapons and power-ups to customize their playstyle, all wrapped in a polished UI with responsive menus, HUD feedback, and visual effects.`,
  keyFeatures: [
    "Wave-based survival gameplay with progressive difficulty",
    "Advanced Enemy AI with state machine behaviors (Detection, Chase, Attack)",
    "Multiple attack strategies including melee and ranged combat",
    "Dynamic Wave Spawn System with configurable enemy compositions",
    "Comprehensive Weapon System with projectile mechanics and shooting events",
    "Power-up Selection System for strategic gameplay enhancement",
    "Cloud Save System with authentication for persistent progression",
    "Interactive Level Selection with unlock progression mechanics",
    "Real-time HUD and Feedback Systems for combat awareness",
    "Polished VFX System with pooling and visual feedback",
    "Responsive player controls with kinematic movement and camera control",
    "Audio System with dynamic sound effects and music",
    "Multiple UI screens (Main Menu, Pause, How to Play, Level Selection)"
  ],
  technologies: [
    "Unity",
    "C#",
    "Reflex Framework",
    "Custom Event Channels",
    "UniTask",
    "Cloud Save Integration",
    "Unity Authentication System",
    "Data Management",
    "SOLID Principles & Design Patterns",
  ],
  images: [MainMenuImage,GameplayImage1, LevelsImage, GameStoryImage],
  videos: [GameplayVideo],
  isBlog: false,
},
{
  id: "infrastructure-digital-twin",
  title: "Infrastructure Digital Twin",
  imgPath: DXBIntroImage,
  description: "An immersive VR and PC-based digital twin designed for interactive exploration, spatial inspection, and real-time information visualization of large-scale infrastructure.",
  shortDescription: "Interactive digital twin for VR and PC with touch-screen support",
  detailedDescription: `The Infrastructure Digital Twin project is a high-fidelity virtual representation of a large-scale facility, developed to enable immersive walkthroughs, spatial understanding, and interactive data inspection across both VR and PC platforms. The experience allows users to explore different environments through a smooth, guided walkthrough system.
  
  A dynamic interactive interface presents the environment with rotating views and contextual navigation. Users can inspect detailed sections with data-driven information panels without breaking immersion. The PC version supports touch-screen interaction, ensuring accessibility across kiosks and large displays. Built with a scalable architecture optimized for real-time exploration and performance.`,
  keyFeatures: [
    "High-fidelity digital twin of large-scale infrastructure",
    "VR and PC versions with touch-screen support",
    "Interactive navigation system",
    "Context-aware information display",
    "Data-driven UI panels for detailed inspection",
    "Seamless multi-environment exploration",
    "Smooth camera transitions and intuitive navigation",
    "Interactive UI system optimized for VR and touch input",
    "Scalable architecture",
    "Performance-optimized for real-time rendering"
  ],
  technologies: [
    "Virtual Reality",
    "Unity",
    "C#",
    "VR & Touch Screen Interaction",
    "Custom Navigation System",
    "UI/UX Design",
    "Digital Twin Architecture"
  ],
  images: [DXBIntroImage, DXBVR2],
  videos: [],
  isBlog: false,
},
  {
    id: "sterile-environment-training",
    title: "Sterile Environment VR Training",
    imgPath: VRCIntroImage,
    description: "An innovative VR training platform designed for sterile environment protocol training through immersive, hands-on simulations.",
    shortDescription: "VR-based training system for sterile procedure protocols",
    detailedDescription: `The Sterile Environment Training platform is an immersive VR training experience that enables users to practice critical sterile procedures through realistic virtual scenarios. The platform guides users through essential protocols and procedures with real-time feedback to ensure accurate and compliant performance.
    
    Users engage in hands-on interactions within a controlled virtual environment, progressing through sequential training modules. The experience emphasizes procedural accuracy with interactive checkpoints and comprehensive assessment systems. Built for accessibility and performance optimization across VR platforms.`,
    keyFeatures: [
      "Realistic virtual sterile environment simulation",
      "Complete procedure simulation with step-by-step guidance",
      "Protocol training with real-time validation",
      "Physical object simulation with realistic physics",
      "Comprehensive feedback system ensuring compliance",
      "Dynamic interactive training mechanics",
      "Modular training objectives orchestrating procedure steps",
      "Immersive hand tracking and interaction mechanics",
      "Performance optimized for VR platforms",
      "Scalable architecture supporting multiple procedure types"
    ],
    technologies: ["Virtual Reality", "Unity", "C#", "VR Interactions", "Custom Training Systems", "Hand Tracking"],
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