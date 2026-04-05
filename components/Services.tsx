const services = [
  {
    number: '01',
    title: 'Custom Software',
    description: 'Internal tools, dashboards, and platforms built around how your team actually works. Not around a vendor\'s roadmap.',
  },
  {
    number: '02',
    title: 'Systems Integration',
    description: 'APIs, data pipelines, and third-party connectors that make your existing systems stop fighting each other.',
  },
  {
    number: '03',
    title: 'Workflow Automation',
    description: 'Repetitive processes turned into reliable software. Less manual work, fewer errors, more time on things that matter.',
  },
]

export default function Services() {
  return (
    <section id="services" className="px-8 lg:px-16 py-24">
      <div className="max-w-5xl">
        <div>
          {services.map((service) => (
            <div key={service.number} className="py-10 flex flex-col sm:grid sm:grid-cols-12 gap-3 sm:gap-8 sm:items-baseline">
              <h3 className="sm:col-span-4 text-2xl font-semibold text-white">{service.title}</h3>
              <p className="sm:col-span-8 text-neutral-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
