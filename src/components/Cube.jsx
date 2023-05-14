import React, { useRef, Suspense } from "react";
import {
  PerspectiveCamera,
  RenderTexture,
  Text,
  OrbitControls,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

const CubeMesh = () => {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 1.5)
  );
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#b394d2"]} />
          <Text ref={textRef} fontSize={3} color="#555">
            hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

const Cube = () => {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 2, 1]} />
        <CubeMesh />
        <OrbitControls enableZoom={false} autoRotate />
      </Suspense>
    </Canvas>
  );
};

export default Cube;
