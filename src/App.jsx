import Card from './components/Card';
import imagePerfil from '/image-perfil.jpg';
import { IconBrandTwitter, IconBrandWhatsapp, IconBrandLinkedin, IconBrandGithub, IconMail } from '@tabler/icons-react';

function App() {
  return (
    <>
      <div>
        <header></header>
        <main className='flex flex-col items-center'>
          <section className='flex flex-col items-center gap-6 py-16 px-6'>
            <h1 className='text-3xl font-bold text-center'>Full-Stack Developer</h1>
            <p className='text-xl	text-center'>
              Creando experiencias completas, desde la idea hasta la realidad, con tecnologías web modernas.
            </p>
            <div className='rounded-full w-56 h-56 overflow-hidden'>
              <img src={imagePerfil} alt='Foto de Larry Finol' />
            </div>
          </section>

          <section className='flex flex-col items-center gap-6 py-16 px-6 bg-sky-700 w-full'>
            <h2 className='text-2xl font-bold text-white text-center'>Hola, soy Larry Finol</h2>
            <p className='text-xl text-white text-center max-w-5xl'>
              Un Ingeniero en Informática apasionado por el desarrollo web. Me especializo en el desarrollo Full-Stack
              con las tecnologías de JavaScript, React, NextJS, NodeJS, Express y NestJS. Tengo experiencia en el manejo
              de bases de datos SQL y NoSQL, tales como MySQL, PostgreSQL, SQL Server y MongoDB. También domino el
              control de versiones con Git y GitHub, el uso de la nube de Microsoft Azure y metodologías ágiles tales
              como Scrum.
            </p>
          </section>

          <div className='w-full py-16 px-6 border-b-2 flex justify-center'>
            <section className='grid grid-cols-1 rounded-2xl max-w-5xl lg:grid-cols-3 lg:px-0'>
              <article className='flex flex-col border-2 border-r-0 rounded-s-2xl items-center gap-6 px-6 py-8'>
                <h3 className='text-2xl font-bold'>Frontend</h3>
                <p className='text-lg text-center'>Creo interfaces que conectan e interactúan con los usuarios.</p>
                <div>
                  <h4 className='text-lg font-bold text-sky-700 text-center'>Habilidades</h4>
                  <ul className='flex flex-col items-center'>
                    <li className='text-lg'>HTML</li>
                    <li className='text-lg'>CSS</li>
                    <li className='text-lg'>JavaScript</li>
                    <li className='text-lg'>React</li>
                    <li className='text-lg'>NextJS</li>
                    <li className='text-lg'>TailwindCSS</li>
                  </ul>
                </div>
              </article>
              <article className='flex flex-col border-2 border-r-0 items-center  gap-6 p-6'>
                <h3 className='text-2xl font-bold'>Backend</h3>
                <p className='text-lg text-center'>Gestiono los datos, la lógica y la seguridad de tu proyecto.</p>
                <div>
                  <h4 className='text-lg font-bold text-sky-700 text-center'>Habilidades</h4>
                  <ul className='flex flex-col items-center'>
                    <li className='text-lg'>TypeScript</li>
                    <li className='text-lg'>NodeJS</li>
                    <li className='text-lg'>Express</li>
                    <li className='text-lg'>NestJS</li>
                    <li className='text-lg'>SQL</li>
                    <li className='text-lg'>NoSQL</li>
                  </ul>
                </div>
              </article>
              <article className='flex flex-col border-2 items-center rounded-e-2xl gap-6 p-6'>
                <h3 className='text-2xl font-bold'>Others</h3>
                <p className='text-lg text-center'>Uso herramientas y metodologías que complementan el desarrollo.</p>
                <div>
                  <h4 className='text-lg font-bold text-sky-700 text-center'>Habilidades</h4>
                  <ul className='flex flex-col items-center'>
                    <li className='text-lg'>Git</li>
                    <li className='text-lg'>GitHub</li>
                    <li className='text-lg'>Microsoft Azure</li>
                    <li className='text-lg'>Scrum</li>
                  </ul>
                </div>
              </article>
            </section>
          </div>

          <div className='w-full py-16 px-6 flex justify-center'>
            <section className='max-w-5xl flex flex-col gap-6'>
              <h3 className='text-2xl font-bold text-center'>Desarrollos</h3>
              <ul className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
                <li>
                  <Card
                    title='Este portafolio'
                    link='https://larrysfinolb.github.io'
                    source='https://github.com/larrysfinolb/larrysfinolb.github.io'
                  >
                    Un portafolio hecho en React con Tailwind para mostrar mis habilidades e historial como Full-Stack
                    Developer.
                  </Card>
                </li>
              </ul>
            </section>
          </div>
        </main>

        <footer className='flex flex-col gap-6 items-center bg-sky-700 py-6 px-8'>
          <h4 className='text-2xl text-white'>Contácteme</h4>
          <ul className='flex gap-3'>
            <li className='flex'>
              <a
                href='https://twitter.com/larrysfinolb'
                target='_blank'
                className='border-gray-300 border-2 p-3 rounded-full'
                rel='noreferrer'
              >
                <IconBrandTwitter className='text-gray-300' />
              </a>
            </li>
            <li className='flex'>
              <a
                href='https://linkedin.com/in/larry-segundo-finol-bohórquez-a4408a211'
                target='_blank'
                className='border-gray-300 border-2 p-3 rounded-full'
                rel='noreferrer'
              >
                <IconBrandLinkedin className='text-gray-300' />
              </a>
            </li>
            <li className='flex'>
              <a
                href='https://github.com/larrysfinolb'
                target='_blank'
                className='border-gray-300 border-2 p-3 rounded-full'
                rel='noreferrer'
              >
                <IconBrandGithub className='text-gray-300' />
              </a>
            </li>
            <li className='flex'>
              <a
                href='mailto:larrysfinolb@gmail.com'
                target='_blank'
                className='border-gray-300 border-2 p-3 rounded-full'
                rel='noreferrer'
              >
                <IconMail className='text-gray-300' />
              </a>
            </li>
            <li className='flex'>
              <a
                href='https://wa.me/584146096840'
                target='_blank'
                className='border-gray-300 border-2 p-3 rounded-full'
                rel='noreferrer'
              >
                <IconBrandWhatsapp className='text-gray-300' />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default App;
