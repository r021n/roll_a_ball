import { useEffect, useRef } from "react";
import { useSphere } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Ball() {
  const [ref, api] = useSphere(() => ({
    mass: 1,
    args: [0.5],
    position: [0, 0.5, 0],
    linearDamping: 0.5,
    angularDamping: 0.5,
  }));

  const keys = useRef({
    w: false,
    a: false,
    s: false,
    d: false,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key.toLocaleLowerCase()) {
        case "w":
        case "arrowup":
          keys.current.w = true;
          break;
        case "a":
        case "arrowleft":
          keys.current.a = true;
          break;
        case "s":
        case "arrowdown":
          keys.current.s = true;
          break;
        case "a":
        case "arrowright":
          keys.current.d = true;
          break;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      switch (e.key.toLocaleLowerCase()) {
        case "w":
        case "arrowup":
          keys.current.w = false;
          break;
        case "a":
        case "arrowleft":
          keys.current.a = false;
          break;
        case "s":
        case "arrowdown":
          keys.current.s = false;
          break;
        case "a":
        case "arrowright":
          keys.current.d = false;
          break;
      }
    };
  });

  return (
    <mesh position={[0, 0.5, 0]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#e74c3c" />
    </mesh>
  );
}
