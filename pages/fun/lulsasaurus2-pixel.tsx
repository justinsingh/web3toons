//@ts-nocheck
import * as THREE from "three"
import type { NextPage } from 'next'
import { Suspense, useRef } from 'react'
import WavyBlackGridPlane from "../../components/mesh/WavyBlackGridPlane"
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { meshBounds, OrbitControls, Sphere } from '@react-three/drei'
import { Box, VStack } from '@chakra-ui/react'
import { ChromaticAberration, EffectComposer, Pixelation, Glitch, Noise } from '@react-three/postprocessing'
import { useMediaQuery } from '@chakra-ui/react'

import GroovyMaterial from "../../components/shaders/GroovyMaterial"
extend({ GroovyMaterial })


const RedSphere = () => {

const { viewport } = useThree();
  const [isMobile] = useMediaQuery("(max-width: 30em)");
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.uTime = clock.getElapsedTime();
    //ref.current.rotation.y = clock.getElapsedTime() / 1;
  });

  return (
    <Sphere scale={isMobile ? 2.0 : 3.0} position={[0, 0, 4]} rotation={[0,0,0]}>
      <groovyMaterial ref={ref} uColor1="purple" uColor2="red" />
    </Sphere>

  )
}

// Alternate name ideas: Love Sick, In Pursuit of Romance (prolly save this one for a bigger idea)
const Heart2Pixel: NextPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 30em)");

  return (
    <VStack>
      <Box width={["100vw"]} height={["100vh"]} backgroundColor="black">
        <Canvas camera={{ fov: (isMobile ? 6 : 5), position: [0, 0, 125] }} color="black">
          <Suspense fallback={null}>
            <OrbitControls />
            <pointLight position={[10, 10, 15]} />
            <WavyBlackGridPlane uNoiseFreq={1.5} uNoiseAmp={0.95} />
            <RedSphere />
            <EffectComposer>
              <Pixelation granularity={10} />
              <Noise premultiply />
              <Glitch
                delay={new THREE.Vector2(0.55, 1.7)} // min and max glitch delay
                duration={new THREE.Vector2(0.2, 0.5)} // min and max glitch duration
                strength={new THREE.Vector2(0.3, 1.0)} // min and max glitch strength
                active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
                ratio={0.55} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
              />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </Box>
    </VStack>
  )
}

export default Heart2Pixel;