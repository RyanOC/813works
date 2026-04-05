const useCases = [
  {
    title: 'Unified Activity Dashboard',
    description: 'Multiple tools, one clear view. Time tracking, spreadsheets, and email pulled into a single daily summary.',
  },
  {
    title: 'TV-Friendly Status Screen',
    description: 'Key metrics from multiple systems on an office screen, auto-refreshing and designed for at-a-glance viewing.',
  },
  {
    title: 'Spreadsheet Process Replacement',
    description: 'Complex spreadsheet workflows replaced with purpose-built tools. Same process, proper interface, fewer errors.',
  },
  {
    title: 'Form Submission Manager',
    description: 'Form responses searchable and filterable, not buried in a spreadsheet tab. Mark handled, export, organize.',
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="px-8 lg:px-16 py-24">
      <div className="max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-[#1a1a1a] p-10">
              <h3 className="text-white font-semibold mb-4">{useCase.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
