function Header() {
    return (
        <header className="bg-blue-700 text-white p-6 rounded-lg text-center mb-6 shadow-md">
            <h1 className="text-3xl font-bold mb-2">Александрук Максим Олександрович</h1>
            <p className="text-sm">
                {' '}Email: <a href="mailto:maksym.aleksandruk.kb.2025@lpnu.ua" className="underline hover:text-blue-200">maksym.aleksandruk.kb.2025@lpnu.ua</a>
                {' '}GitHub: <a href="https://github.com/AMKB2025" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-200">github.com/AMKB2025</a>
                {' '}Телефон: <a href="tel:+380958031126" className="hover:text-blue-200">+380 (95) 803 11 26</a>
            </p>
        </header>
    );
}
export default Header;