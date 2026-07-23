import { useBox } from "@react-three/cannon";

export default function Arena() {
  const [ref] = useBox(() => ({
    type: "Static",
    args: [10, 10, 0.2],
    position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <boxGeometry args={[10, 10, 0.2]} />
      <meshStandardMaterial color="#4a90d9" />
    </mesh>
  );
}
