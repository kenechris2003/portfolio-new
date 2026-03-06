import { ExternalLink, Github, Folder } from 'lucide-react'

const projects = [
  {
    title: '247 Plug Online Campus Marketplace ',
    description:
      'A full-stack Online Marketplace application with user authentication, product catalog, shopping cart, and payment integration. Built with React, Node.js, and Supabase.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Supabase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/kenechris2003',
    liveUrl: 'https://247plug.store',
  },
  {
    title: 'John Zedomi & Associates Real Estate Platform',
    description:
      'A real estate listing platform that allows users to browse properties, filter by criteria, and contact agents. Built with React, TypeScript, Firebase, and Tailwind CSS.',
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/kenechris2003',
    liveUrl: 'https://jzedomiassociates.com/',
  },
  {
    title: 'Portfolio Website',
    description:
      'A responsive personal portfolio website showcasing projects, skills, and experience. Built with modern web technologies and best practices.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    githubUrl: 'https://github.com/kenechris2003',
    liveUrl: 'https://Devchris.vercel.app',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gray-900 dark:bg-white mx-auto rounded-full mb-4" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development, 
            from responsive web applications to data processing systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col h-full bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <Folder className="h-5 w-5 text-gray-900 dark:text-white" />
                </div>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/kenechris2003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Github className="h-4 w-4 mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
