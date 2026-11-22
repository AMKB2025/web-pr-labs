function Skills() {
    const skills = [
        "Англійська мова (B2)",
        "ISO 27001, COBIT",
        "Мережі (OSI, TCP/IP)",
        "Python, C#",
        "HTML5 & CSS3",
        "Git та GitHub",
        "JavaScript"
    ];

    return (
        <section className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 my-6 transition-colors">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">Навички</h2>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-sm px-3 py-1 rounded-full transition-colors"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}

export default Skills;