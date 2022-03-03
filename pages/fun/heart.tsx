import type { NextPage } from 'next'
import { Suspense } from 'react'
import WavyPlane from '../../components/WavyPlane'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import { Box, VStack } from '@chakra-ui/react'

// Alternate name ideas: Love Sick, In Pursuit of Romance (prolly save this one for a bigger idea)
const Heart: NextPage = () => {
  return (
    <VStack>
        <Box width={["100vw"]} height={["100vh"]} backgroundColor="black">
          <Canvas camera={{ fov: 5, position: [0, 0, 125] }} color="black">
            <Suspense fallback={null}>
              <OrbitControls />
              <pointLight position={[10, 10, 10]} />
              <WavyPlane />
              <Sphere position={[0, 0, 1]}>
                <meshPhongMaterial attach="material" color="red" />
              </Sphere>
            </Suspense>
          </Canvas>
        </Box>
    </VStack>
  )
}

export default Heart;