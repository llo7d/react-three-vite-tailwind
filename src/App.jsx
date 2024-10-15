import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useControls } from 'leva';

import Cube from './components/Cube';

function App() {
  const { cubeColor } = useControls('Cube', {
    cubeColor: { options: ['orange', 'blue', 'red', 'green', 'purple'] },
  });

  return (
    <>
      <div className="relative w-full h-screen">
        <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-2xl z-10 font-bold text-gray-100">
          R3F + Vite + Tailwind + Leva
        </h1>

        <p className="absolute top-20 left-1/2 -translate-x-1/2 text-lg text-gray-400 max-w-md text-center">
          A simple starter kit for React Three Fiber with Vite and Tailwind CSS
          & Leva for debugging.
        </p>

        <Canvas flat shadows camera={{ position: [0, 0, 20], fov: 25 }}>
          <OrbitControls />
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />
          <Cube position={[-1.2, 0, 0]} cubeColor={cubeColor} />
          <Cube position={[1.2, 0, 0]} cubeColor={cubeColor} />
        </Canvas>
      </div>
    </>
  );
}

export default App;
