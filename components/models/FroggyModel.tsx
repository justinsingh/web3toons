//@ts-nocheck
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function FroggyModel(props: any) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/froggy/froggy.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head.geometry}
        material={nodes.Head.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body.geometry}
        material={nodes.Body.material}
        position={[0, -1.1, 0]}
        scale={0.54}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tshirt.geometry}
        material={nodes.Tshirt.material}
        position={[0, -1.1, 0]}
        scale={0.54}
      />
    </group>
  );
}

useGLTF.preload("/models/froggy/froggy.glb");