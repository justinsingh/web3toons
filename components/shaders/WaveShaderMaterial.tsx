import * as THREE from "three"
import { shaderMaterial } from "@react-three/drei"
//@ts-ignore
import glsl from "babel-plugin-glsl/macro"

const WaveShaderMaterial = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uNoiseFreq: 0,
    uNoiseAmp: 0,
  },
  // Vertex Shader
  glsl`
    precision mediump float;

    varying vec2 vUv;
    varying float vWave;

    uniform float uTime;
    uniform float uNoiseFreq;
    uniform float uNoiseAmp;

    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);

    void main() {
      vUv = uv;

      vec3 pos = position;
      float noiseFreq = uNoiseFreq;
      float noiseAmp = uNoiseAmp; 
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
      pos.z += snoise3(noisePos) * noiseAmp;
      vWave = pos.z;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // Fragment Shader
  glsl`
    precision mediump float;

    uniform vec3 uColor;
    uniform float uTime;
    
    varying vec2 vUv;
    varying float vWave;

    void main() {
      float wave = vWave * 0.1;
      gl_FragColor = vec4(uColor, 1.0);
    }
  `
)

export default WaveShaderMaterial