function Header() {
  return (
    <header className="bg-slate-900 text-white py-10 px-6 rounded-2xl shadow-xl text-center mb-8 border border-slate-800">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
        Александрук Максим Олександрович
      </h1>
      <p className="text-sm md:text-base text-slate-300 flex flex-wrap justify-center gap-4 mt-4">
        <span>Email: <a href="mailto:maksym.aleksandruk.kb.2025@lpnu.ua" className="text-blue-400 hover:text-blue-300 underline">maksym.aleksandruk.kb.2025@lpnu.ua</a></span>
        <span className="text-slate-500">•</span>
        <span>GitHub: <a href="https://github.com/AMKB2025" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">github.com/AMKB2025</a></span>
        <span className="text-slate-500">•</span>
        <span>Тел: <a href="tel:+380958031126" 







className="text-slate-200 hover:text-white">+380 (95) 803 11 26</a></span>
      </p>
    </header>
  );
}
export default Header;
