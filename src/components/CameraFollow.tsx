import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface CameraFollowProps {
  position: [number, number, number];
  lookAt: [number, number, number];
}

export default function CameraFollow({ position, lookAt }: CameraFollowProps) {
  const { camera } = useThree();
  const cameraPosition = useRef(new THREE.Vector3(0, 10, 10));
  const cameraLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(() => {
    const idealOffset = new THREE.Vector3(0, 8, 8);
    const idealTarget = new THREE.Vector3(0, 0, 0);

    const desiredPosition = new THREE.Vector3(
      position[0] + idealOffset.x,
      position[1] + idealOffset.y,
      position[2] + idealOffset.z,
    );

    const desiredLookAt = new THREE.Vector3(
      lookAt[0] + idealTarget.x,
      lookAt[1] + idealTarget.y,
      lookAt[2] + idealTarget.z,
    );

    cameraPosition.current.lerp(desiredPosition, 0.1);
    cameraLookAt.current.lerp(desiredLookAt, 0.1);

    camera.position.copy(cameraPosition.current);
    camera.lookAt(cameraLookAt.current);
  });

  return null;
}
