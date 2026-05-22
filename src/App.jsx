function App() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-linear-to-r from-blue-950 via-purple-900 to-red-950 bg-size-[200%_200%] animate-gradient">
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

        <div className="flex items-center md:flex-col justify-center min-w-16 h-16 gap-2">
          <h1 className="text-white text-3xl font-bold animate-pulse sm:text-4xl md:mr-3">
            Web
          </h1>
          <h1 className="text-white text-3xl font-bold animate-pulse sm:text-4xl md:mr-3">
            Developer
          </h1>
        </div>
      </header>

      <main id="home" className="mx-auto flex min-h-screen max-w-6xl flex-col items-center  justify-center px-6 text-center text-white">
        <div className="flex md:justify-between sm:flex-row flex-col items-center">
          <div className=" h-80 w-80 md:min-h-100 md:min-w-100 overflow-hidden rounded-full border-2 border-white/20">
            <img src="src/asssets/ChatGPT Image 22 мая 2026 г., 11_46_22.png" alt="" className="w-full h-full object-cover" />
          </div>
          <p className="text-3xl bg-white/15 rounded-3xl border border-white p-3 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laborum dolorum error accusamus distinctio doloribus porro sunt eum veniam libero!
            Aspernatur dolorem perspiciatis error esse obcaecati eos ab eligendi?
            Accusamus, similique.
          </p>
        </div>
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
