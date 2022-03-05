import * as THREE from "three"
import { shaderMaterial } from "@react-three/drei"
//@ts-ignore
import glsl from "babel-plugin-glsl/macro"

const GroovyMaterial = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uColor1: new THREE.Color(1.0, 0.5, 0.6),
    uColor2: new THREE.Color(0.5, 1.0, 1.0),
  },
  // Vertex Shader
  glsl`
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); 
    }
  `,
  // Fragment Shader
  glsl`
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform float uTime;

    varying vec2 vUv;

    void main() {
      
      vec2 uv = vUv;
      float movement = 0.05 * sin(uv.x * 13.0 + uTime * 0.7) 
                       - 0.09 * sin(uv.y * 17.0 + uTime * 0.5);

      uv.y += movement * pow(uv.x, 0.05);
      uv.y *= 40.0;
      uv.y = fract(uv.y);

      float t = smoothstep(0.2, 0.3, uv.y) -
                smoothstep(0.7, 0.8, uv.y);
      
      vec4 color1 = vec4(uColor1, 1.0);
      vec4 color2 = vec4(uColor2, 1.0);

      vec4 finalColor = mix(color1, color2, t);

      gl_FragColor = finalColor;
    }
  `,
)

export default GroovyMaterial