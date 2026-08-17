import { Canvas, useFrame } from '@react-three/fiber';
import { FloatingShapes } from './FloatingShapes';
import { ProfileAvatar } from './ProfileAvatar';
import { useScroll } from '../../hooks/useScroll';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { Suspense } from 'react';

function SceneContent() {
  const { scrollProgress } = useScroll();
  const reducedMotion = useReducedMotion();

  useFrame(({ camera }) => {
    if (!reducedMotion) {
      camera.position.z = 5 + scrollProgress * 2;
      camera.rotation.y = scrollProgress * 0.1;
    }
  });

  return (
    <>
      <color attach="background" args={['#0a0a0f']} />
      <ambientLight intensity={0.6} color="#ffffff" />
      <directionalLight position={[5, 10, 7]} intensity={1.2} color="#00d4ff" />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#ffffff" />
      <pointLight position={[0, 5, 10]} intensity={0.8} color="#00d4ff" decay={2} />

      <FloatingShapes scrollProgress={scrollProgress} reducedMotion={reducedMotion} />
      <ProfileAvatar scrollProgress={scrollProgress} reducedMotion={reducedMotion} />
    </>
  );
}

export function Scene() {
  return (
    <div id="three-canvas" style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ touchAction: 'none' }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}