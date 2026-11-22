import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
    // 1. Початковий стан теми за часом доби (07:00 - 21:00 -> light, інакше dark)
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('reactUserTheme');
        if (saved) return saved;

        const hour = new Date().getHours();
        return hour >= 7 && hour < 21 ? 'light' : 'dark';
    });

    // 2. Синхронізація теми з тегом <html> або <body> та збереження
    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('reactUserTheme', theme);
    }, [theme]);

    // Функція перемикання по кнопці
    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-6 transition-colors duration-200">
            <div className="max-w-3xl mx-auto">

                {/* Кнопка ручного перемикача теми */}
                <div className="flex justify-end mb-3">
                    <button
                        onClick={toggleTheme}
                        className="px-3 py-1 text-xs font-semibold rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                        {theme === 'dark' ? '☀️ Світла тема' : '🌙 Темна тема'}
                    </button>
                </div>

                <Header />

                <main>
                    <About />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Education />
                        <Experience />
                    </div>
                    <Skills />
                    <Reviews />
                </main>

                <Footer />
                <ContactForm />
            </div>
        </div>
    );
}

export default App;