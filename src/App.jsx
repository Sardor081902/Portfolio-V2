function App() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-linear-to-r from-black via-gray-900 to-gray-800 bg-size-[200%_200%] flex ani items-center flex-col">
      <header className="fixed inset-x-4 top-4 z-50 flex flex-col-reverse gap-4 rounded-full p-4   from-black via-gray-900 to-gray-800 bg-size-[200%_200%] animate-gradient shadow-lg backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center md:flex-col justify-center min-w-16 h-16 gap-2">
          <h1 className="text-white text-3xl font-bold cursor-default sm:text-4xl md:mr-3">
            Web
          </h1>
          <h1 className="text-white text-3xl font-bold cursor-default sm:text-4xl md:mr-3">
            Developer
          </h1>
        </div>
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


      </header>

      <main id="home" className=" flex min-h-screen max-w-10/12 flex-col items-center  justify-center px-6 text-center text-white">
        <div className="flex md:justify-between sm:flex-row flex-col items-center gap-12 md:gap-20 mb-">
          <div className="flex flex-col ">
            <div className="mt-50 sm:mt-0 h-80 w-80 md:min-h-100 md:min-w-100 overflow-hidden rounded-full ">
              <img src="src/asssets/ChatGPT Image 22 мая 2026 г., 11_46_22.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-5 self-center ">
              <h1 className="text-6xl font-black mask-linear-from-5%">Erkinov</h1>
              <h1 className="text-6xl font-black mask-linear-from-5%">Sardor</h1>
            </div>
          </div>
          <div className="md:max-w-1/2 flex flex-col justify-between max-h-100">
            <h1 className="text-2xl text-white/70 rounded-3xl md:rounded-bl-none border border-white p-3 mb-5 md:mb-20">
              I'm a web developer, who is specializing in UI/UX disignes
            </h1>
            <div className="flex justify-between md:mx-10">
              <h1 className="text-2xl text-white/70 rounded-3xl  border border-white md:p-3 p-1">
                To tie with me
              </h1>
              <h1 className="text-2xl text-white/70 rounded-3xl  border border-white md:p-3 p-1">
                Sociel platforms
              </h1>
            </div>
          </div>
        </div>
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
