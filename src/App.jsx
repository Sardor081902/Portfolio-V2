function App() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-linear-to-r from-blue-950 via-purple-900 to-indigo-950 bg-size-[200%_200%] animate-gradient">
      <header className="fixed inset-x-4 top-4 z-50 flex flex-col-reverse gap-4 rounded-full bg-red-500/95 p-4 shadow-lg backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-4 text-white font-medium sm:justify-start">
            <li>
              <a className="cursor-pointer transition hover:opacity-80" href="#home">Home</a>
            </li>
            <li>
              <a className="cursor-pointer transition hover:opacity-80" href="#about">About</a>
            </li>
            <li>
              <a className="cursor-pointer transition hover:opacity-80" href="#skills">Skills</a>
            </li>
            <li>
              <a className="cursor-pointer transition hover:opacity-80" href="#projects">Projects</a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center justify-center min-w-16 h-16">
          <h1 className="text-white text-4xl font-bold animate-pulse sm:text-5xl">
            Web Developer
          </h1>
        </div>
      </header>

      <main id="home" className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <h2 className="text-5xl font-bold sm:text-6xl lg:text-7xl">Crafting modern web experiences</h2>
        <p className="mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">
          I build responsive, accessible, and polished React applications with Tailwind CSS.
        </p>
      </main>

      <section id="about" className="space-y-4 px-6 pb-20 pt-12 text-center text-white">
        <h3 className="text-3xl font-bold">About</h3>
        <p className="mx-auto max-w-3xl text-base text-white/80 sm:text-lg">
          A frontend developer focused on clean interfaces, animation, and fast user experiences.
        </p>
      </section>

      <section id="skills" className="space-y-4 px-6 pb-20 text-center text-white">
        <h3 className="text-3xl font-bold">Skills</h3>
        <p className="mx-auto max-w-3xl text-base text-white/80 sm:text-lg">
          React, Tailwind CSS, Vite, responsive design, and modern JavaScript best practices.
        </p>
      </section>

      <section id="projects" className="space-y-4 px-6 pb-20 text-center text-white">
        <h3 className="text-3xl font-bold">Projects</h3>
        <p className="mx-auto max-w-3xl text-base text-white/80 sm:text-lg">
          Build your portfolio with reusable components and smooth transitions.
        </p>
      </section>
    </div>
  );
}

export default App;
