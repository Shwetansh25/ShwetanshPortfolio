export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="reveal max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl text-gray-300 mb-12">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          <div className="space-y-4">
            <a 
              href="mailto:srivastavashwetansh2001@gmail.com"
              className="block text-lg hover:text-blue-400 transition-colors"
            >
              srivastavashwetansh2001@gmail.com
            </a>
            <a 
              href="tel:+916387188545"
              className="block text-lg hover:text-blue-400 transition-colors"
            >
              +91 6387188545
            </a>
            <a 
              href="https://linkedin.com/in/shwetansh"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg hover:text-blue-400 transition-colors"
            >
              linkedin.com/in/shwetansh
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

