import { useFrame } from '@react-three/fiber';
import { BoxGeometry, IcosahedronGeometry, TorusGeometry, Mesh, MeshStandardMaterial, Group, Vector3 } from 'three';
import { useRef, useMemo } from 'react';

interface FloatingShapesProps {
  scrollProgress: number;
  reducedMotion: boolean;
}

const SHAPE_CONFIGS = [
  { geometry: new BoxGeometry(0.8, 0.8, 0.8), position: new Vector3(-4, 2, -3), rotationSpeed: new Vector3(0.001, 0.002, 0.001), floatAmplitude: 0.5, floatSpeed: 0.8 },
  { geometry: new IcosahedronGeometry(0.6, 0), position: new Vector3(4, -1, -4), rotationSpeed: new Vector3(0.002, 0.001, 0.003), floatAmplitude: 0.3, floatSpeed: 1.2 },
  { geometry: new TorusGeometry(0.5, 0.15, 8, 16), position: new Vector3(-3, -2, -5), rotationSpeed: new Vector3(0.0015, 0.0025, 0.001), floatAmplitude: 0.4, floatSpeed: 1.0 },
  { geometry: new BoxGeometry(0.5, 0.5, 0.5), position: new Vector3(3, 3, -2), rotationSpeed: new Vector3(0.003, 0.001, 0.002), floatAmplitude: 0.6, floatSpeed: 0.6 },
  { geometry: new IcosahedronGeometry(0.4, 1), position: new Vector3(0, 4, -6), rotationSpeed: new Vector3(0.001, 0.003, 0.001), floatAmplitude: 0.2, floatSpeed: 1.5 },
  { geometry: new TorusGeometry(0.35, 0.1, 6, 12), position: new Vector3(5, 1, -3), rotationSpeed: new Vector3(0.002, 0.002, 0.002), floatAmplitude: 0.3, floatSpeed: 0.9 },
];

export function FloatingShapes({ scrollProgress, reducedMotion }: FloatingShapesProps) {
  const groupRef = useRef<Group>(null!);
  const meshesRef = useRef<Mesh[]>([]);
  const initialPositions = useMemo(() => SHAPE_CONFIGS.map(c => c.position.clone()), []);

  useFrame((_, delta) => {
    if (reducedMotion || !groupRef.current) return;

    meshesRef.current.forEach((mesh, i) => {
      const config = SHAPE_CONFIGS[i];
      const initialPos = initialPositions[i];

      mesh.rotation.x += config.rotationSpeed.x * delta * 60;
      mesh.rotation.y += config.rotationSpeed.y * delta * 60;
      mesh.rotation.z += config.rotationSpeed.z * delta * 60;

      const time = performance.now() * 0.001 * config.floatSpeed;
      mesh.position.y = initialPos.y + Math.sin(time) * config.floatAmplitude;
      mesh.position.x = initialPos.x + Math.cos(time * 0.7) * config.floatAmplitude * 0.5;

      const scrollOffset = scrollProgress * 0.5;
      mesh.position.z = initialPos.z - scrollOffset;
    });

    if (groupRef.current) {
      groupRef.current.rotation.y = scrollProgress * 0.05;
    }
  });

  const materials = useMemo(() => [
    new MeshStandardMaterial({
      color: '#00d4ff',
      metalness: 0.3,
      roughness: 0.4,
      transparent: true,
      opacity: 0.6,
      wireframe: true,
    }),
    new MeshStandardMaterial({
      color: '#ffffff',
      metalness: 0.1,
      roughness: 0.8,
      transparent: true,
      opacity: 0.4,
      wireframe: true,
    }),
    new MeshStandardMaterial({
      color: '#00d4ff',
      metalness: 0.5,
      roughness: 0.3,
      transparent: true,
      opacity: 0.5,
      wireframe: false,
    }),
  ], []);

  return (
    <group ref={groupRef}>
      {SHAPE_CONFIGS.map((config, i) => (
        <mesh
          key={i}
          ref={(el) => { if (el) meshesRef.current[i] = el; }}
          geometry={config.geometry}
          material={materials[i % materials.length]}
          position={config.position}
          castShadow
          receiveShadow
        />
      ))}
    </group>
  );
}