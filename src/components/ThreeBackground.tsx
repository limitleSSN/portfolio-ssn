
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useMemo } from 'react';

const ThreeBackground = () => {
  const sphereCount = 40;
  
  const spherePositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < sphereCount; i++) {
      positions.push([
        Math.random() * 20 - 10,
        Math.random() * 20 - 10,
        Math.random() * 20 - 10
      ]);
    }
    return positions;
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 75 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      {spherePositions.map((position, i) => (
        <Sphere
          key={i}
          position={position as [number, number, number]}
          args={[0.1, 16, 16]}
        >
          <meshStandardMaterial 
            attach="material"
            color={i % 2 === 0 ? '#f54298' : '#41e0de'}
            transparent
            opacity={0.6}
          />
        </Sphere>
      ))}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default ThreeBackground;
