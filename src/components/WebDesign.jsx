import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Mac from "./Mac";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
  
  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage intensity={0.6}>
            <Mac />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
        We make our products with a strong focus on both world class design and
        ensuring your future market success
      </Desc>
    </>
  );
};

export default WebDesign;
