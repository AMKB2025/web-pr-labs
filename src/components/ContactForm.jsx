import { useState, useEffect } from 'react';

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Таймер на 60000 мс
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 60000);

        return () => clearTimeout(timer); // Очищення таймера при демонтуванні
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6 relative shadow-xl border border-gray-200 dark:border-gray-700">

                {/* Кнопка закриття */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl leading-none"
                >
                    &times;
                </button>

                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Форма зворотного зв'язку</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                    Залиште свої контактні дані, і я зв'яжуся з вами.
                </p>

                <form action="https://formspree.io/f/mqppvkvd" method="POST" className="space-y-3">
                    <div>
                        <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Ім'я</label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Ваше ім'я"
                            className="w-full text-sm p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="name@example.com"
                            className="w-full text-sm p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Номер телефону</label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="+380..."
                            className="w-full text-sm p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Повідомлення</label>
                        <textarea
                            name="message"
                            rows="3"
                            required
                            placeholder="Текст повідомлення..."
                            className="w-full text-sm p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white outline-none focus:border-blue-500 resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 rounded text-sm transition-colors mt-2"
                    >
                        Надіслати
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;