export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold tracking-wide text-white">Dاللوى تل</p>
          <p>Amplifying bilingual resonance for every digital ritual.</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="#features" className="transition hover:text-white">
            Features
          </a>
          <a href="#signals" className="transition hover:text-white">
            Signals
          </a>
          <a href="#stories" className="transition hover:text-white">
            Stories
          </a>
          <a href="#connect" className="transition hover:text-white">
            Connect
          </a>
        </div>
      </div>
    </footer>
  );
}
