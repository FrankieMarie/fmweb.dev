import { CodeXml, Github, SquareArrowOutUpRight } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';
import { Link } from '@tanstack/react-router';
import { InView } from './InView';

function Projects() {
  return (
    <section id="projects" className="mt-20 md:mt-40">
      <Link className="mb-4 block w-max md:mb-8" hash="projects">
        <h1 className="flex w-max items-center gap-2 font-dank text-32 font-semibold text-gold hover:text-gold/80 md:text-48">
          <CodeXml className="block md:hidden" size={32} />
          <CodeXml className="hidden md:block" size={48} /> Projects
        </h1>
      </Link>
      <InView
        viewOptions={{ once: false, margin: '0px 0px -250px 0px' }}
        variants={{
          hidden: {
            opacity: 0
          },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.09
            }
          }
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <AnimatedBackground
            className="rounded-lg bg-darker"
            enableHover
            transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6
            }}
          >
            {PROJECTS.map((project, index) => (
              <div key={index} data-id={`card-${index}`} className="relative">
                <div className="flex select-none flex-col space-y-1 p-4">
                  <h3 className="text-20 font-medium">{project.title}</h3>
                  <p className="text-16 text-light">{project.description}</p>
                </div>
                <div className="flex gap-4 px-4 pb-4">
                  {project.link && (
                    <a
                      className="text-gold hover:text-gold/80"
                      href={project.link}
                      target="_blank"
                    >
                      <SquareArrowOutUpRight size={18} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      className="text-gold hover:text-gold/80"
                      href={project.github}
                      target="_blank"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </AnimatedBackground>
        </div>
      </InView>
    </section>
  );
}

export { Projects };

const PROJECTS = [
  {
    id: 1,
    title: 'The Rusty Spoke',
    description:
      'The first website I built, for a non-profit bicycle repair shop in downtown Phoenix, AZ. Hosted on GitHub pages. Built with vanilla HTML.',
    link: 'https://www.rustyspoke.org/',
    github: 'https://github.com/rustyspoke/rustyspoke.github.io'
  },
  {
    id: 2,
    title: 'Paint River Rentals',
    description:
      'A website built for rental properties in my hometown. Hosted on GitHub Pages. Vanilla HTML and TypeScript with TailwindCSS.',
    link: 'https://paintriverrentals.com/',
    github: 'https://github.com/FrankieMarie/paint-river-rentals'
  },
  {
    id: 3,
    title: 'React Memory Game',
    description:
      'A simple memory game built with React and Vite, hosted with Azure Static Web Apps and automatic deployment with GitHub Actions.',
    link: 'https://gentle-grass-0c705c61e.5.azurestaticapps.net/',
    github: 'https://github.com/FrankieMarie/memory-game'
  },
  {
    id: 4,
    title: 'FM Web Dev',
    description:
      'My personal website. Built with React, Framer Motion, Three.js, and Tailwind. Constantly evolving, perpetually improving.',
    github: 'https://github.com/FrankieMarie/frankiemarie.me'
  }
];
