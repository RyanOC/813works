import Section from './ui/Section'

const steps = [
  {
    number: '01',
    title: 'Understand your systems and goals',
    description: 'We start by talking through what tools you\'re using, where the pain points are, and what you\'re trying to accomplish. No jargon, just a clear conversation about your needs.',
  },
  {
    number: '02',
    title: 'Map out data sources and integration points',
    description: 'I dig into your existing systems to understand how data flows (or doesn\'t flow) between them. This helps identify the best approach and any potential roadblocks.',
  },
  {
    number: '03',
    title: 'Build a focused tool, dashboard, or integration',
    description: 'I build the solution with clean code and a simple interface. The goal is something that works well and is easy to maintain, not a complicated mess.',
  },
  {
    number: '04',
    title: 'Iterate based on real-world use',
    description: 'Once it\'s in your hands, we see how it performs in the real world and make adjustments. The best solutions come from actual usage, not guesswork.',
  },
]

export default function Process() {
  return (
    <Section className="bg-gray-50 dark:bg-gray-950">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
        How I Work
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center max-w-2xl mx-auto">
        A straightforward process focused on understanding your needs and delivering practical solutions.
      </p>
      <div className="space-y-8 max-w-3xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                {step.number}
              </div>
            </div>
            <div className="pt-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
