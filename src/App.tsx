import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Arena from "./components/Arena";
import Ball from "./components/Ball";
import Wall from "./components/Wall";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Physics gravity={[0, -9.81, 0]}>
          <Arena />
          <Ball />
          <Wall position={[5.1, 0.5, 0]} size={[0.2, 1, 10.4]} />
          <Wall position={[-5.1, 0.5, 0]} size={[0.2, 1, 10.4]} />
          <Wall position={[0, 0.5, 5.1]} size={[10.4, 1, 0.2]} />
          <Wall position={[0, 0.5, -5.1]} size={[10.4, 1, 0.2]} />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
