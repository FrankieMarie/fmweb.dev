import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  showModal: boolean;
  children: ReactNode;
  onClose: () => void;
}

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

const modalVariants = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    y: 1,
    opacity: 1,
    transition: { delay: 0.25 }
  }
};

function Modal(props: Props) {
  const { showModal, children, onClose } = props;

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="fixed left-0 top-0 z-40 h-full w-full bg-[#000000e1]"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="flex h-screen w-screen items-center bg-black md:mx-auto md:max-w-[75vw] md:p-4"
            variants={modalVariants}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { Modal };
