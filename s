import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        <main>
          <About />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Education />
            <Experience />
          </div>
          <Skills />
        </main>
        <Footer />
      </div>
    </div>
  );
}
export default App;
