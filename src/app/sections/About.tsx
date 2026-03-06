import { Code2, Database, Cloud, GitBranch } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Building complete web applications from frontend to backend',
  },
  {
    icon: Database,
    title: 'API Integration',
    description: 'Designing and integrating secure RESTful APIs',
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Learning AWS for scalable deployment solutions',
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    description: 'Managing code with Git in collaborative environments',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gray-900 dark:bg-white mx-auto rounded-full" />
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Full-Stack Developer | CS Undergraduate
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I&apos;m a passionate Full-Stack Developer currently pursuing a Bachelor&apos;s degree 
                in Computer Science at the University of Ibadan. With hands-on experience 
                in modern web technologies, I enjoy building applications that solve real-world 
                problems.
              </p>
              <p>
                My journey in tech started with data analysis, where I developed automated 
                data cleaning pipelines that improved accuracy by 20%. This foundation in 
                data-driven thinking now informs my approach to building efficient, 
                user-centered applications.
              </p>
              <p>
                I&apos;m currently expanding my skills in cloud services with AWS and always 
                eager to learn new technologies. I thrive in collaborative environments 
                and enjoy applying my problem-solving mindset to challenging engineering tasks.
              </p>
            </div>
          </div>

          {/* Right Column - Education & Cert */}
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Education
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">
                    Bachelor of Science in Computer Science
                  </h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    University of Ibadan • 2023 - 2027
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Coursework: Data Structures & Algorithms, Database Management Systems, 
                    Operating Systems, Object-Oriented Programming
                  </p>
                </div>
              </div>
            </div>

            {/* Certification */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Certification
              </h4>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white">CompTIA A+</h5>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  CompTIA • January 2023
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
            >
              <item.icon className="h-8 w-8 text-gray-900 dark:text-white mb-4" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
