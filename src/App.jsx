import Card from "./components/Card";
import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./components/Icons";
import imagePerfil from "/image-perfil.jpg";

function App() {
  return (
    <>
      <div>
        <header></header>
        <main>
          <section className="flex flex-col items-center py-16 px-6">
            <h1 className="text-3xl font-bold text-center">
              Full-Stack Developer
            </h1>
            <div className="rounded-full w-56 h-56 overflow-hidden">
              <img src={imagePerfil} alt="Foto de Larry Finol" />
            </div>
          </section>
          <section className="bg-sky-700 py-16 px-6">
            <h2 className="text-2xl font-bold text-white text-center">
              Hola, soy Larry Finol
            </h2>
            <p className="text-white text-center">
              Un apasionado Full-Stack Developer con experiencia en tecnologias
              modernas. Especializado en el ecosistema de JavaScript, destaco en
              el Frontend con React y Next.js y en el Backend con Node.js y
              Express.js. Ademas, tengo conocimientos en bases de datos
              relacionales y no relacionales. Actualmente estoy adquiriendo
              conocimientos con la nube de azure. Soy un colaborador
              interdiciplinario con Experiencia en Scrum y habilidades de
              comunicacion solidas. Mi objetivo es impulsar la innovacion y
              enfretar desafios en proyectos de alto impacto.
            </p>
            <div>
              <article></article>
              <article></article>
            </div>
          </section>
          <section className="py-16 px-6">
            <h2 className="text-2xl font-bold text-center">
              Mis proyectos personales
            </h2>
            <ul>
              <li>
                <Card
                  title="Este portafolio"
                  link="https://larrysfinolb.github.io"
                  source="https://github.com/larrysfinolb/larrysfinolb.github.io"
                >
                  Un portafolio hecho en React con Tailwind para mostrar mis
                  habilidades e historial como Full-Stack Developer.
                </Card>
              </li>
            </ul>
          </section>
        </main>
        <footer className="flex flex-col items-center bg-sky-700 py-16 px-6">
          <h4 className="text-2xl text-white">Contactame</h4>
          <ul className="flex gap-x-2">
            <li className="flex">
              <a href="#" className="border-gray-300 border-2 p-3 rounded-full">
                <TwitterIcon className="w-5" />
              </a>
            </li>
            <li className="flex">
              <a href="#" className="border-gray-300 border-2 p-3 rounded-full">
                <LinkedInIcon className="w-5" />
              </a>
            </li>
            <li className="flex">
              <a href="#" className="border-gray-300 border-2 p-3 rounded-full">
                <GitHubIcon className="w-5" />
              </a>
            </li>
            <li className="flex">
              <a href="#" className="border-gray-300 border-2 p-3 rounded-full">
                <EmailIcon className="w-5" />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default App;
