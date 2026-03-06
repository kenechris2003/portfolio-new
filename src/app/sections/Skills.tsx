import { 
  Code, 
  Layout, 
  Server, 
  Cloud, 
  GitBranch, 
  BarChart3,
  Users,
  Lightbulb,
  MessageSquare,
  Shield
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML'],
  },
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: ['React', 'Responsive Web Design', 'UI/UX Principles', 'CSS'],
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: ['Node.js', 'RESTful APIs', 'Database Management', 'Authentication'],
  },
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    skills: ['AWS (Learning)', 'Cloud Deployment', 'Scalability'],
  },
  {
    title: 'Tools & Version Control',
    icon: GitBranch,
    skills: ['Git', 'Unix-like Environments', 'Microsoft Office'],
  },
  {
    title: 'Data & Analytics',
    icon: BarChart3,
    skills: ['Data Cleaning', 'Data Validation', 'Performance Monitoring', 'Dashboards'],
  },
]

const softSkills = [
  { icon: Users, title: 'Team Collaboration' },
  { icon: Lightbulb, title: 'Problem-Solving' },
  { icon: MessageSquare, title: 'Communication' },
  { icon: Shield, title: 'Leadership' },
  { icon: Users, title: 'Customer Service' },
  { icon: Shield, title: 'Organizational Skills' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-gray-900 dark:bg-white mx-auto rounded-full mb-4" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive set of technical and soft skills developed through academic 
            studies and professional experience.
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <category.icon className="h-5 w-5 text-gray-900 dark:text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {softSkills.map((skill) => (
              <div
                key={skill.title}
                className="flex flex-col items-center text-center"
              >
                <div className="p-3 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 mb-3">
                  <skill.icon className="h-5 w-5 text-gray-900 dark:text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
