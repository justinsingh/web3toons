import type { NextPage } from 'next'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Box, VStack } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import TestPlane from '../../components/mesh/TestPlane'

const TestPlanePage: NextPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 30em)");

  return (
    <VStack>
        <Box width={["100vw"]} height={["100vh"]} backgroundColor="black">
          <Canvas camera={{ fov: ( isMobile ? 25 : 9), position: [0, 0, 100] }} color="black">
            <Suspense fallback={null}>
              <OrbitControls />
              <pointLight position={[10, 10, 10]} />
              <TestPlane />
            </Suspense>
          </Canvas>
        </Box>
    </VStack>
  )
}

export default TestPlanePage;