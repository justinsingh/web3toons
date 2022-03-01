import type { NextPage } from 'next'
import { Suspense } from 'react'
import WavyKirby from '../../components/WavyKirby'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Box, VStack } from '@chakra-ui/react'

const WavyKirbyPage: NextPage = () => {
  return (
    <VStack>
        <Box width={["100vw"]} height={["100vh"]} backgroundColor="black">
          <Canvas camera={{ fov: 10, position: [0, 0, 100] }} color="black">
            <Suspense fallback={null}>
              <OrbitControls />
              <pointLight position={[10, 10, 10]} />
              <WavyKirby />
            </Suspense>
          </Canvas>
        </Box>
    </VStack>
  )
}

export default WavyKirbyPage;