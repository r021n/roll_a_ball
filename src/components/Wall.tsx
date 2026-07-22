import { useBox } from "@react-three/cannon";

interface WallProps {
  position: [number, number, number];
  size: [number, number, number];
}

export default function Wall({ position, size }: WallProps) {
  const [ref] = useBox(() => ({
    type: "Static",
    args: size,
    position: position,
  }));
  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color="#2c3e50" />
    </mesh>
  );
}
