import { createFileRoute } from '@tanstack/react-router';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Images } from '../components/Images';
import { Contact } from '../components/Contact';

export const Route = createFileRoute('/')({
  component: Index
});

function Index() {
  return (
    <>
      {/* height === 100vh - navbar height */}
      <div className="flex h-[calc(100vh-6rem)] flex-col">
        <About />
        <Images />
      </div>
      <Projects />
      <Contact />
    </>
  );
}
