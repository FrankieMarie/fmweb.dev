import { useRef } from 'react';
import { motion } from 'framer-motion';
import { MoveHorizontal } from 'lucide-react';
import Kayak from '../assets/images/kayak.jpg';
import PaintRiver from '../assets/images/paint-river.jpg';
import PC from '../assets/images/pc.jpg';
import Railroad from '../assets/images/railroad-lake.jpg';
import Rena from '../assets/images/rena.jpg';
import Sharky from '../assets/images/sharky.jpg';
import Stumps from '../assets/images/stumps.jpg';

function Images() {
  const boxRef = useRef(null);
  const images = [Kayak, Stumps, Rena, Sharky, PaintRiver, PC, Railroad];

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
                className="pointer-events-none h-full w-full rounded-br-3xl rounded-tl-3xl object-cover"
                src={image}
                alt=""
              />
            </div>
          ))}
        </motion.div>
      </div>
      <MoveHorizontal className="mx-auto text-medium" />
    </section>
  );
}

export { Images };
