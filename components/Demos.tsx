import Section from './ui/Section'
import Card from './ui/Card'

const demos = [
  {
    title: 'Unified Activity Dashboard',
    description: 'A live example of pulling data from multiple sources (time tracking, project management, email) into a single, clean dashboard view.',
    status: 'Coming Soon',
  },
  {
    title: 'Data Reconciliation Tool',
    description: 'An interactive demo showing how to compare and reconcile data between two different systems, highlighting discrepancies and suggesting fixes.',
    status: 'Coming Soon',
  },
  {
    title: 'Form Submission Manager',
    description: 'A working prototype of a searchable, filterable interface for managing form submissions from various sources.',
    status: 'Coming Soon',
  },
]

export default function Demos() {
  return (
    <Section id="demos">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
        Live Demos & Sandbox
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center max-w-2xl mx-auto">
        Interactive examples and prototypes are on the way. Check back soon to see working demos of the kinds of tools I build.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {demos.map((demo, index) => (
          <Card key={index} className="relative">
            <div className="absolute top-4 right-4">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">
                {demo.status}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 pr-24">
              {demo.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {demo.description}
            </p>
          </Card>
        ))}
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-500 text-center mt-8">
        These cards are placeholders. You can replace them with actual interactive components or links to live demos when ready.
      </p>
    </Section>
  )
}
