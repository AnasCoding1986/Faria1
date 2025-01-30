import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const MODEL_PATH = '/planet/scene.gltf'

const EarthModel = () => {
  const { scene } = useGLTF(MODEL_PATH)

  return (
    <primitive 
      object={scene} 
      scale={2.5} 
      position-y={0} 
      rotation-y={0} 
    />
  )
}

const Earth = () => {
  return (
    <Suspense fallback={<CanvasLoader />}>
      <EarthModel />
    </Suspense>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true, alpha: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

// Preload the model
useGLTF.preload(MODEL_PATH)

export default EarthCanvas
