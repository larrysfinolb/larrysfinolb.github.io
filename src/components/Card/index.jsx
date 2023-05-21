import { GitHubIcon, LinkIcon } from "../Icons";

export default function Card({ children, title, link, source }) {
  return (
    <article className="flex flex-col items-center gap-4 shadow-lg rounded p-10">
      <h3 className="font-bold text-2xl">{title}</h3>
      <p className="text-center">{children}</p>
      {link && (
        <a
          className="flex items-center gap-2 py-1 px-3 rounded-lg bg-sky-200 text-sky-700"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <LinkIcon className="w-4" color="#0369a1" />
          Sitio web
        </a>
      )}
      {source && (
        <a
          className="flex items-center gap-2"
          href={source}
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon className="w-4" color="#000" />
          Codigo fuente
        </a>
      )}
    </article>
  );
}
