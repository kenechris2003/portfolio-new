import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Full-Stack Developer',
    company: 'Premium E-Commerce Service Solution',
    type: 'Internship',
    location: 'Ikeja, Lagos, Nigeria',
    period: 'Dec 2025 - March 2026',
    description: [
      'Developing and optimizing responsive web applications using React, TypeScript, and Node.js',
      'Integrating secure RESTful APIs and implementing authentication features',
      'Deploying and managing web applications in Unix-like environments',
      'Utilizing Git version control for streamlined development workflows',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Innovative Digital Concept',
    type: 'Full-time',
    location: 'Lagos, Lagos, Nigeria',
    period: 'Feb 2024 - Nov 2025',
    description: [
      'Engineered and deployed responsive web applications enhancing user experience',
      'Integrated secure RESTful APIs improving application security and data integrity',
      'Implemented robust authentication and authorization features',
      'Managed deployments to enhance application security',
    ],
  },
  {
    title: 'Junior Data Analyst',
    company: 'Fedora International School',
    type: 'Full-time',
    location: 'Lagos, Lagos, Nigeria',
    period: 'Aug 2021 - May 2024',
    description: [
      'Collaborated with IT team to manage databases and optimize cloud-based storage',
      'Gained practical exposure to AWS functionalities',
      'Developed automated data cleaning and validation pipelines using Python',
      'Improved data accuracy by 20% through rigorous integrity checks',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-gray-900 dark:bg-white mx-auto rounded-full mb-4" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional journey spanning full-stack development and data analysis, 
            with a focus on building scalable and secure applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 sm:pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-2 sm:left-6 top-1 w-4 h-4 bg-gray-900 dark:bg-white rounded-full border-4 border-white dark:border-black" />

                {/* Content Card */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-1">
                        <Briefcase className="h-4 w-4" />
                        <span className="text-sm">{exp.company}</span>
                        <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                      >
                        <span className="text-gray-900 dark:text-white mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
