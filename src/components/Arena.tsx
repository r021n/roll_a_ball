export default function Arena() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <boxGeometry args={[10, 10, 0.2]} />
      <meshStandardMaterial color="#4a90d9" />
    </mesh>
  );
}
