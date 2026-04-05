export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-8 lg:px-16 py-8 flex items-center justify-between">
      <p className="text-neutral-600 text-xs">© {new Date().getFullYear()} 813 Works LLC</p>
      <p className="text-neutral-600 text-xs">813works.com</p>
    </footer>
  )
}
