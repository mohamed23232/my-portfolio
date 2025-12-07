import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import VRC from "../../Assets/Projects/VRC.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

export const projectsData = [
  {
    id: "vrc",
    title: "VRC",
    imgPath: VRC,
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
    technologies: ["Virtual Reality", "Unity", "C#", "Meta Quest"],
    images: [VRC],
    videos: [],
    ghLink: "https://github.com/soumyajit4419/Chatify",
    demoLink: "https://chatify-49.web.app/",
    isBlog: false,
  },
  {
    id: "bits-of-code",
    title: "Bits-0f-C0de",
    imgPath: bitsOfCode,
    description: "My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.",
    shortDescription: "Personal blog built with Next.js and Tailwind CSS",
    detailedDescription: `Bits-0f-C0de is a modern, fully-featured blogging platform built with Next.js and Tailwind CSS.
    
    This project demonstrates modern web development practices and provides an elegant platform for sharing technical content.
    
    The platform makes it simple to write and publish blog posts while maintaining beautiful styling and excellent performance.`,
    keyFeatures: [
      "Markdown-based content management",
      "Server-side rendering with Next.js",
      "Responsive design with Tailwind CSS",
      "Dark mode support",
      "Fast performance and SEO optimization",
      "Easy-to-use blog writing interface"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Markdown"],
    images: [bitsOfCode],
    videos: [],
    ghLink: "https://github.com/soumyajit4419/Bits-0f-C0de",
    demoLink: "https://blogs.soumya-jit.tech/",
    isBlog: false,
  },
  {
    id: "editor-io",
    title: "Editor.io",
    imgPath: editor,
    description: "Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.",
    shortDescription: "Online code and markdown editor with live preview",
    detailedDescription: `Editor.io is a versatile online editor that supports both code and markdown editing with instant live preview.
    
    This project was built to provide developers and content creators with a lightweight, browser-based tool for coding and documentation.
    
    Perfect for quick prototyping, learning, and documentation writing.`,
    keyFeatures: [
      "HTML, CSS, and JavaScript editor with live preview",
      "Markdown editor with GitHub Flavored Markdown support",
      "Real-time code execution",
      "Auto-save using Local Storage",
      "Clean and intuitive interface",
      "No installation required - works directly in browser"
    ],
    technologies: ["React", "JavaScript", "HTML/CSS"],
    images: [editor],
    videos: [],
    ghLink: "https://github.com/soumyajit4419/Editor.io",
    demoLink: "https://editor.soumya-jit.tech/",
    isBlog: false,
  },
  {
    id: "plant-ai",
    title: "Plant AI",
    imgPath: leaf,
    description: "Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model.",
    shortDescription: "AI-powered plant disease detection using deep learning",
    detailedDescription: `Plant AI is an advanced machine learning project that uses deep learning to identify and classify plant diseases.
    
    This project leverages state-of-the-art computer vision techniques to help farmers and botanists identify plant health issues early.
    
    This model can help prevent crop losses and improve agricultural productivity.`,
    keyFeatures: [
      "38-class image classification model",
      "Detection of 14 different plant types",
      "Disease vs. healthy leaf classification",
      "98% accuracy using ResNet34",
      "Transfer learning implementation",
      "Web interface for easy use"
    ],
    technologies: ["Python", "PyTorch", "CNN", "Transfer Learning", "OpenCV"],
    images: [leaf],
    videos: [],
    ghLink: "https://github.com/soumyajit4419/Plant_AI",
    demoLink: "https://plant49-ai.herokuapp.com/",
    isBlog: false,
  },
  {
    id: "ai-for-social-good",
    title: "Ai For Social Good",
    imgPath: suicide,
    description: "Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace and thus helping in sucide prevention.",
    shortDescription: "NLP-based suicide prevention tool",
    detailedDescription: `AI For Social Good is a meaningful project that uses Natural Language Processing to detect suicide-related posts and ideation on social media platforms.
    
    This tool aims to help identify individuals in crisis and facilitate timely intervention.
    
    This project demonstrates how AI can be used for positive social impact and potentially save lives.`,
    keyFeatures: [
      "NLP-based text analysis",
      "Detection of suicide-related content",
      "Ideation identification",
      "Social media monitoring",
      "Real-time alerts",
      "Privacy-respecting design"
    ],
    technologies: ["Python", "NLP", "Machine Learning", "TensorFlow"],
    images: [suicide],
    videos: [],
    ghLink: "https://github.com/soumyajit4419/AI_For_Social_Good",
    demoLink: null,
    isBlog: false,
  },
  {
    id: "face-emotion-detection",
    title: "Face Recognition and Emotion Detection",
    imgPath: emotion,
    description: "Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person.",
    shortDescription: "Real-time emotion detection from facial expressions",
    detailedDescription: `Face Recognition and Emotion Detection is a computer vision project that combines face detection with emotion classification.
    
    This system can analyze images or video feeds to identify faces and determine the emotional state of individuals.`,
    keyFeatures: [
      "Real-time face detection using OpenCV",
      "Emotion classification (happy, sad, angry, etc.)",
      "Support for multiple faces in single image",
      "Video stream processing",
      "Visual feedback and annotations",
      "60.1% accuracy with CNN model"
    ],
    technologies: ["Python", "Keras", "TensorFlow", "OpenCV", "CNN"],
    images: [emotion],
    videos: [],
    ghLink: "https://github.com/soumyajit4419/Face_And_Emotion_Detection",
    demoLink: null,
    isBlog: false,
  },
];

export const getProjectById = (id) => {
  return projectsData.find((project) => project.id === id);
};
