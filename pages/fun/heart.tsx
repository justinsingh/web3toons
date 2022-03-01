import type { NextPage } from 'next'
import { Suspense } from 'react'
import WavyPlane from '../../components/WavyPlane'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Box, VStack } from '@chakra-ui/react'

// Alternate name ideas: Love Sick, In Pursuit of Romance (prolly save this one for a bigger idea)
const Heart: NextPage = () => {
  return (
    <VStack>
      <Box width={["80vw"]} height={["80vh"]}>
        <Canvas camera={{ fov: 5, position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <OrbitControls />
            <pointLight position={[10, 10, 10]} />
            <WavyPlane />
          </Suspense>
        </Canvas>
      </Box>
    </VStack>
  )
}

export default Heart;