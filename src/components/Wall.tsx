interface WallProps {
  position: [number, number, number];
  size: [number, number, number];
}

export default function Wall({ position, size }: WallProps) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color="#2c3e50" />
    </mesh>
  );
}
