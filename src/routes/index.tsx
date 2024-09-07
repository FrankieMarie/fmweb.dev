import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Images } from '../components/Images';
import { Contact } from '../components/Contact';
import { TracingBeam } from '../components/TracingBeam';

export const Route = createFileRoute('/')({
  component: Index
});

function Index() {
  return (
    <TracingBeam>
      <Hero />
      <Images />
      <Projects />
      <Contact />
    </TracingBeam>
  );
}
