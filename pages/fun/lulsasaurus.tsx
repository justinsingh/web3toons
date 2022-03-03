import * as THREE from "three"
import type { NextPage } from 'next'
import { Suspense } from 'react'
import WavyPlane from '../../components/WavyPlane'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import { Box, VStack } from '@chakra-ui/react'
import { ChromaticAberration, EffectComposer, Pixelation, Glitch, Noise } from '@react-three/postprocessing'

// Alternate name ideas: Love Sick, In Pursuit of Romance (prolly save this one for a bigger idea)
const Heart: NextPage = () => {
  return (
    <VStack>
      <Box width={["100vw"]} height={["100vh"]} backgroundColor="black">
        <Canvas camera={{ fov: 5, position: [0, 0, 125] }} color="black">
          <Suspense fallback={null}>
            <OrbitControls />
            <pointLight position={[10, 10, 15]} />
            <WavyPlane />
            <Sphere scale={3.0} position={[0, 0, 4]}>
              <meshPhongMaterial attach="material" color="red" />
              <EffectComposer>
                <Pixelation granularity={0} />
                <Noise premultiply />
                <Glitch
                  delay={new THREE.Vector2(0.55, 1.7)} // min and max glitch delay
                  duration={new THREE.Vector2(0.2, 0.5)} // min and max glitch duration
                  strength={new THREE.Vector2(0.3, 1.0)} // min and max glitch strength
                  active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
                  ratio={0.55} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
                />
              </EffectComposer>
            </Sphere>
          </Suspense>
        </Canvas>
      </Box>
    </VStack>
  )
}

export default Heart;