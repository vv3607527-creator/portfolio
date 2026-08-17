import { useFrame } from '@react-three/fiber';
import { SphereGeometry, Mesh, MeshStandardMaterial, Group, TextureLoader, PlaneGeometry, Texture } from 'three';
import { useRef, useMemo, useEffect, useState } from 'react';

interface ProfileAvatarProps {
  scrollProgress: number;
  reducedMotion: boolean;
}

export function ProfileAvatar({ scrollProgress, reducedMotion }: ProfileAvatarProps) {
  const groupRef = useRef<Group>(null!);
  const sphereRef = useRef<Mesh>(null!);
  const [texture, setTexture] = useState<Texture | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loader = new TextureLoader();
    loader.load(
      '/profile.svg',
      (tex) => {
        tex.colorSpace = 'srgb';
        setTexture(tex);
      },
      undefined,
      () => {
        setHasError(true);
      }
    );
  }, []);

  const material = useMemo(() => {
    if (hasError) {
      return new MeshStandardMaterial({
        color: '#00d4ff',
        metalness: 0.2,
        roughness: 0.5,
        emissive: '#00d4ff',
        emissiveIntensity: 0.1,
      });
    }
    return new MeshStandardMaterial({
      map: texture || undefined,
      color: '#ffffff',
      metalness: 0.1,
      roughness: 0.8,
      transparent: !texture,
      opacity: texture ? 1 : 0.8,
    });
  }, [texture, hasError]);

  const glowMaterial = useMemo(() =>
    new MeshStandardMaterial({
      color: '#00d4ff',
      transparent: true,
      opacity: 0.15,
      side: 2,
      depthWrite: false,
    }), []
  );

  useFrame((_, delta) => {
    if (reducedMotion || !groupRef.current) return;

    const time = performance.now() * 0.001;

    groupRef.current.rotation.y = scrollProgress * 0.1 + Math.sin(time * 0.3) * 0.05;
    groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.05;
    groupRef.current.position.y = Math.sin(time * 0.5) * 0.15 + scrollProgress * 0.3;

    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.02 * delta * 60;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.5, -2]}>
      <mesh
        ref={sphereRef}
        geometry={new SphereGeometry(1.5, 64, 64)}
        material={material}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={new SphereGeometry(1.65, 32, 32)}
        material={glowMaterial}
        scale={1.05}
      />
      <mesh
        geometry={new PlaneGeometry(4, 0.5)}
        material={new MeshStandardMaterial({
          color: '#00d4ff',
          transparent: true,
          opacity: 0.3,
          depthWrite: false,
        })}
        position={[0, -2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1 + Math.abs(Math.sin(performance.now() * 0.001)) * 0.2}
      />
    </group>
  );
}