import { useState, useEffect } from 'react';

function Footer() {
    const [sysInfo, setSysInfo] = useState(null);

    useEffect(() => {
        // Отримуємо дані про платформу та браузер
        const info = {
            platform: navigator.platform || 'Невідомо',
            userAgent: navigator.userAgent
        };

        // 2. Зберігаємо в localStorage у вигляді JSON-рядка
        localStorage.setItem('reactUserSystemInfo', JSON.stringify(info));

        // 3. Зчитуємо дані назад із localStorage
        const saved = localStorage.getItem('reactUserSystemInfo');
        if (saved) {
            setSysInfo(JSON.parse(saved));
        }
    }, []); // Порожній масив — запускається лише 1 раз при монтуванні

    return (
        <footer className="text-center py-6 text-gray-400 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-700 mt-6">
            <p>&copy; 2026 Александрук Максим. Всі права захищено.</p>

            {sysInfo && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    ОС: <span className="font-medium text-gray-700 dark:text-gray-300">{sysInfo.platform}</span> |
                    Браузер: <span className="font-medium text-gray-700 dark:text-gray-300">{sysInfo.userAgent}</span>
                </p>
            )}
        </footer>
    );
}

export default Footer;