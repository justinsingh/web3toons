import { Box, VStack } from "@chakra-ui/react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { NextPage } from "next";
import FroggyModel from "../../components/models/FroggyModel";

const Froggy: NextPage = () => {
  return (
    <VStack>
      <Box width={["80vw"]} height={["80vh"]}>
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight position={[0, 0, 5]} />
          <FroggyModel />
          <OrbitControls />
        </Canvas>
      </Box>
    </VStack>
  )
}

export default Froggy