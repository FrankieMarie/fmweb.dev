import { useState, useRef, memo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import { random } from 'maath';
import {
  Points as IPoints,
  BufferGeometry,
  NormalBufferAttributes,
  Material
} from 'three';

const Stars = () => {
  const ref = useRef<IPoints<
    BufferGeometry<NormalBufferAttributes>,
    Material | Material[]
  > | null>(null);

  const generateStars = () =>
    random.inSphere(new Float32Array(250), {
      radius: 1.2
    }) as Float32Array;

  const [sphere] = useState(generateStars);

  useFrame((_state, delta) => {
    if (ref.current != null) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#dee2e6"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = memo(() => {
  return (
    <div className="absolute inset-0 w-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
        <Preload all />
      </Canvas>
    </div>
  );
});

export { StarsCanvas };
