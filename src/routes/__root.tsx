import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { StarsCanvas } from '../components/Stars';
import { StarsBackground } from '../components/StarBackground';

export const Route = createRootRoute({
  component: Root
});

function Root() {
  return (
    <main
      id="top"
      className="relative bg-darkest text-lightest selection:bg-gold selection:text-darkest"
    >
      <Navbar />
      <StarsCanvas />
      <StarsBackground />

      <div className="relative z-10 mx-auto w-full max-w-screen-content px-10">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
