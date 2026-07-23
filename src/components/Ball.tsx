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
        case "d":
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
        case "d":
        case "arrowright":
          keys.current.d = false;
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame(() => {
    const force = 5;
    const direction = new THREE.Vector3();

    if (keys.current.w) direction.z -= 1;
    if (keys.current.s) direction.z += 1;
    if (keys.current.a) direction.x -= 1;
    if (keys.current.d) direction.x += 1;

    if (direction.length() > 0) {
      direction.normalize();
      api.applyImpulse(
        [direction.x * force, 0, direction.z * force],
        [0, 0, 0],
      );
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#e74c3c" />
    </mesh>
  );
}
