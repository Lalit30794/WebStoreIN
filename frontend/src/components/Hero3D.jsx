import { Canvas } from '@react-three/fiber';

const Hero3D = () => (
  <Canvas style={{ height: 200 }}>
    <ambientLight intensity={0.5} />
    <mesh rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={'#6366f1'} />
    </mesh>
  </Canvas>
);

export default Hero3D; 