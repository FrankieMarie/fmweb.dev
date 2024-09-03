import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { StarsCanvas } from '../components/Stars';

export const Route = createRootRoute({
  component: Root
});

function Root() {
  return (
    <main className="relative bg-darkest text-lightest selection:bg-gold selection:text-darkest">
      <StarsCanvas />
      <Navbar />
      <div className="relative z-10 mx-auto w-full max-w-screen-content px-8">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
