export default function Projects() {
  const projects = [
    {
      title: "Astrokshetra.com",
      description: "Led the development of a responsive astrology website using React.js, Next.js, Tailwind CSS, and Daisy UI.",
      tech: "React.js, Next.js, Tailwind CSS",
      link: "#"
    },
    {
      title: "Astrokshetra App",
      description: "Developed a responsive astrology mobile app using React Native for cross-platform functionality.",
      tech: "React Native",
      link: "#"
    },
    {
      title: "Customer Relationship Manager",
      description: "Built a web-based CRM application with optimized MySQL database queries.",
      tech: "Java, Spring, React.js",
      link: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="reveal max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="reveal group">
                <a 
                  href={project.link}
                  className="block p-6 -mx-6 rounded-lg transition-colors hover:bg-neutral-900"
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <p className="text-sm text-gray-400">{project.tech}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

