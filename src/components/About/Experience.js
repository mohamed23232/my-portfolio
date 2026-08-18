import React from "react";

const experienceData = [
  {
    role: "Mid-Level Unity Developer",
    company: "Genesis Creations",
    period: "February 2026 – Present",
    bullets: [
      "Developed VR experiences and interactive games using Unity.",
      "Built gameplay systems and implemented modern tools and packages to enhance functionality.",
      "Optimized performance and memory usage to improve player experience across platforms.",
      "Collaborated with teammates from different disciplines to ensure smooth development workflows.",
      "Organized and assigned tasks using ClickUp to support project management and team productivity.",
    ],
  },
  {
    role: "Unity Developer Intern",
    company: "Genesis Creations",
    period: "July 2025 – January 2026",
    bullets: [
      "Supported development of VR experiences and game features.",
      "Assisted in implementing gameplay mechanics and UI elements.",
      "Learned and applied Unity best practices, debugging, and optimization basics.",
      "Contributed to team tasks and gained hands-on experience in production workflows.",
    ],
  },
  {
    role: "AI Instructor",
    company: "Technovate, IEEE, and A-One Training",
    period: "September 2024 – February 2025",
    bullets: [
      "Taught foundational and advanced AI concepts to engineering and computer science students.",
      "Designed and delivered hands-on workshops using Python, TensorFlow, and real-world datasets.",
      "Created structured learning paths covering algorithms, neural networks, and model evaluation.",
      "Guided students through building projects, including image classification, NLP, and data pipelines.",
      "Coordinated and taught sessions for the IEEE AI Bootcamp with 60+ participants.",
    ],
  },
  {
    role: "AI Trainee",
    company: "National Telecommunication Institute (NTI)",
    period: "July 2023 – September 2023",
    bullets: [
      "Learned about machine learning and deep learning, and how to implement models after wrangling data.",
      "Learned soft skills including communication, leadership, time management, and presentation making.",
    ],
  },
];

function Experience() {
  return (
    <div className="experience-timeline">
      {experienceData.map((item, index) => (
        <div className="experience-item" key={index}>
          <div className="experience-marker">
            <div className="experience-dot" />
          </div>
          <div className="experience-card">
            <h3 className="experience-role">{item.role}</h3>
            <p className="experience-company">
              {item.company} <span className="experience-period">| {item.period}</span>
            </p>
            <ul className="experience-bullets">
              {item.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
