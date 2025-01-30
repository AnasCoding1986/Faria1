import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import ErrorBoundary from '../ErrorBoundary'
import CanvasLoader from '../Loader'

const MODEL_PATH = '/Faria1/planet/scene.gltf'

// Pre-load the model
useGLTF.preload(MODEL_PATH)

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
    <ErrorBoundary fallback={<div>Error loading Earth model</div>}>
      <EarthModel />
    </ErrorBoundary>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <ErrorBoundary>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
        </Suspense>
      </ErrorBoundary>
      <Preload all />
    </Canvas>
  )
}

export default EarthCanvas
