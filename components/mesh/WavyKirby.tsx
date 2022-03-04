//@ts-nocheck
import * as THREE from "three"
import { useRef } from "react"
import { extend, useFrame, useLoader } from "@react-three/fiber"
import WaveShaderTextureMaterial from "../shaders/WaveShaderTexureMaterial"
extend({ WaveShaderTextureMaterial });

const WavyKirby = () => {
  const ref = useRef();
  useFrame(({clock}) => (ref.current.uTime = clock.getElapsedTime()));

  const [image] = useLoader(THREE.TextureLoader, [
    "/kirby1.png"
  ])

  return (
    <mesh rotation={[0, 0, 0]}>
      <planeBufferGeometry args={[20.6, 14.2, 16, 16]} />
      <waveShaderTextureMaterial ref={ref} uColor={"hotpink"} uTexture={image} uNoiseFreq={10.5} uNoiseAmp={0.7} />
    </mesh>
  )
}

export default WavyKirby