
const SOCIALS = [
  { label: "LI", href: "https://www.linkedin.com/in/gabriela-aguilar01" },
  
];

export default function Footer() {
  return (
    <footer className="relative border-t overflow-hidden"
      style={{ background: "rgba(9,9,20,.95)", borderColor: "rgba(124,58,237,.12)" }}>
      <div className="max-w-[1200px] mx-auto px-6 pt-2 pb-7">


        <div className="footer-big-logo">GABS.</div>
        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-2 border-t flex-wrap gap-4"
          style={{ borderColor: "rgba(124,58,237,.1)" }}>
          <p className="text-[.75rem] text-[#6b6b9a]">
            © {new Date().getFullYear()} Gabriela Aguilar. Todos los derechos reservados.
          </p>
          <div className="flex gap-2.5">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank"
                className="social-btn w-9 h-9 rounded-xl border flex items-center justify-center text-[.7rem] font-bold text-[#6b6b9a] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_8px_18px_rgba(124,58,237,.35)]"
                style={{ background: "rgba(255,255,255,.03)", borderColor: "rgba(124,58,237,.12)" }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Big logo */}

    </footer>
  );
}
