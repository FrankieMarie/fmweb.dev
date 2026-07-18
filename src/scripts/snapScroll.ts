import gsap from 'gsap';
import Observer from 'gsap/Observer';

gsap.registerPlugin(Observer);


const SNAP_QUERY = '(prefers-reduced-motion: no-preference)';

export function createSnapScroll() {
  const matchMedia = gsap.matchMedia();

  matchMedia.add(SNAP_QUERY, () => {
    const viewport = document.querySelector<HTMLElement>('#scroll-viewport');
    const content = document.querySelector<HTMLElement>('#scroll-content');
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-snap-section]')
    );

    if (!viewport || !content || sections.length === 0) {
      return;
    }

    const lastIndex = sections.length - 1;

    gsap.set(viewport, { position: 'fixed', inset: 0, overflow: 'hidden' });

    let index = 0;
    let animating = false;

    const releaseLock = () => {
      gsap.delayedCall(0.15, () => {
        animating = false;
      });
    };

    const offsetOf = (i: number) => {
      const max = content!.scrollHeight - window.innerHeight;
      return -Math.min(sections[i].offsetTop, Math.max(0, max));
    };

    const gotoSection = (target: number) => {
      const next = Math.max(0, Math.min(lastIndex, target));
      if (next === index || animating) {
        return;
      }
      animating = true;
      index = next;
      gsap.to(content, {
        y: offsetOf(next),
        duration: 0.65,
        ease: 'power3.out',
        onComplete: releaseLock,
      });
    };

    const advance = (direction: 1 | -1) => gotoSection(index + direction);

    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]'
      );
      if (!link) {
        return;
      }
      const target = document.querySelector(link.hash);
      const i = sections.findIndex((s) => s === target || s.contains(target!));
      if (i !== -1) {
        event.preventDefault();
        gotoSection(i);
      }
    };
    document.addEventListener('click', onClick);

    const onKeyDown = (event: KeyboardEvent) => {
      const tag = (event.target as HTMLElement | null)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') {
        return;
      }
      if (event.key === 'ArrowDown' || event.key === 'PageDown') {
        event.preventDefault();
        advance(1);
      } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        event.preventDefault();
        advance(-1);
      }
    };
    window.addEventListener('keydown', onKeyDown);

    let pendingRepin: ReturnType<typeof gsap.delayedCall> | undefined;
    const onResize = () => {
      pendingRepin?.kill();
      pendingRepin = gsap.delayedCall(0.2, () => {
        gsap.set(content, { y: offsetOf(index) });
      });
    };
    window.addEventListener('resize', onResize);

    const snapObserver = Observer.create({
      target: window,
      type: 'wheel,touch',
      wheelSpeed: -0.5,
      tolerance: 50,
      preventDefault: true,
      onUp: () => advance(1),
      onDown: () => advance(-1),
    });

    return () => {
      snapObserver.kill();
      document.removeEventListener('click', onClick);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
      pendingRepin?.kill();
      gsap.set(content, { clearProps: 'transform' });
      gsap.set(viewport, { clearProps: 'position,inset,overflow' });
    };
  });

  return () => matchMedia.revert();
}
