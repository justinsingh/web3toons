//@ts-nocheck
import * as THREE from "three"
import { useRef } from "react"
import { extend, useFrame, useLoader } from "@react-three/fiber"
import WaveShaderMaterial from "./shaders/WaveShaderMaterial"
extend({ WaveShaderMaterial });

const WavyPlane = () => {
  const ref = useRef();
  useFrame(({clock}) => (ref.current.uTime = clock.getElapsedTime()));

  const [image] = useLoader(THREE.TextureLoader, [
    "/black_grid.png"
  ])

  return (
    <mesh rotation={[0, 0, 0]}>
      <planeBufferGeometry args={[20.6, 14.2, 16, 16]} />
      <waveShaderMaterial ref={ref} uColor={"hotpink"} uTexture={image} uNoiseFreq={1.5} uNoiseAmp={0.05}/>
    </mesh>
  )
}

export default WavyPlane