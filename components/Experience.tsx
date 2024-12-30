export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Cloudoniq Technologies",
      period: "June 2024 – Present",
      description: [
        "Led development and enhancement of the Astrokshetra website and mobile app",
        "Implemented React Native for cross-platform mobile app functionality",
        "Optimized backend services, resulting in a 40% increase in data processing efficiency",
        "Developed various APIs using Micronaut for efficient communication"
      ]
    },
    {
      title: "Project Intern",
      company: "Nucleus Software Exports Ltd.",
      period: "July 2023 – August 2023",
      description: [
        "Developed a dynamic configurable dashboard report system",
        "Enhanced skills in Java, J2EE, and Oracle SQL",
        "Visualized data using advanced charts, improving client satisfaction"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="reveal max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="reveal">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{exp.title}</h3>
                <p className="text-gray-400 mb-4">{exp.company} | {exp.period}</p>
                <ul className="space-y-2 text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

