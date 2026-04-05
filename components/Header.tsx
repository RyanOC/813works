import Image from 'next/image'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#1a1a1a]/95 backdrop-blur-sm">
      <div className="px-6 lg:px-16 py-4 flex flex-wrap items-center justify-between gap-y-2">
        <a href="#hero">
          <Image src="/logo.png" alt="813 Works LLC" width={80} height={80} className="h-9 w-auto invert opacity-50 hover:opacity-70 transition-opacity" />
        </a>
        <nav className="flex flex-wrap items-center gap-8 lg:gap-14">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs tracking-widest uppercase text-neutral-500 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
