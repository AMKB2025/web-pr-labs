function Skills() {
  const skills = [
    "Володіння англійською мовою (B2)",
    "Базові знання інформаційної безпеки (ISO 27001, COBIT)",
    "Концепції мереж (OSI, TCP/IP)",
    "Python, C#",
    "HTML5 & CSS3",
    "Основи Git та GitHub",
    "Основи JavaScript"
  ];

  return (
    <section className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 my-6 hover:shadow-lg">
      <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">Навички</h2>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill, index) => (
          <span key={index} className="bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 font-medium text-xs md:text-sm px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-default shadow-sm hover:scale-105">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
export default Skills;
