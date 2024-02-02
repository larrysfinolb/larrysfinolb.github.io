import { IconLink } from '@tabler/icons-react';
import { IconBrandGithubFilled } from '@tabler/icons-react';

export default function Card({ children, title, link, source }) {
  return (
    <article className='flex flex-col items-center gap-6 shadow border-2 rounded-2xl px-6 py-8'>
      <h3 className='font-bold text-2xl'>{title}</h3>
      <p className='text-center text-lg'>{children}</p>
      <div className='flex gap-4'>
        {link && (
          <a
            className='flex items-center gap-2 py-1 px-3 rounded-lg bg-sky-100 text-sky-700'
            href={link}
            target='_blank'
            rel='noreferrer'
          >
            <IconLink className='w-4' color='#0369a1' />
            Visitar
          </a>
        )}
        {source && (
          <a className='flex items-center gap-2' href={source} target='_blank' rel='noreferrer'>
            <IconBrandGithubFilled className='w-4' color='#000' />
            Fuente
          </a>
        )}
      </div>
    </article>
  );
}
