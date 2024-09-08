import { useRef } from 'react';
import { motion } from 'framer-motion';
import { MoveHorizontal } from 'lucide-react';
import Kayak from '/assets/images/kayak.webp';
import PaintRiver from '/assets/images/paint-river.webp';
import PC from '/assets/images/pc.webp';
import Railroad from '/assets/images/railroad-lake.webp';
import Rena from '/assets/images/rena.webp';
import Sharky from '/assets/images/sharky.webp';
import Stumps from '/assets/images/stumps.webp';

function Images() {
  const boxRef = useRef(null);
  const images = [Stumps, Kayak, Rena, Sharky, PaintRiver, PC, Railroad];

  return (
    <section>
      <div className="mask flex w-full overflow-hidden" ref={boxRef}>
        <motion.div className="inline-flex" drag="x" dragConstraints={boxRef}>
          {images.map((image, i) => (
            <div
              key={i}
              className="h-60 w-60 cursor-grab p-2 py-4 grayscale transition-all hover:grayscale-0 lg:h-72 lg:w-72"
            >
              <img
                className="pointer-events-none h-full w-full rounded-br-3xl rounded-tl-3xl object-cover shadow-lg"
                src={image}
                loading="lazy"
                alt=""
              />
            </div>
          ))}
        </motion.div>
      </div>
      <MoveHorizontal className="text-lightGreen/75 mx-auto" />
    </section>
  );
}

export { Images };
