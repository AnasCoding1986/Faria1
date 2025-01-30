import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import CanvasLoader from '../Loader'

const EarthModel = () => {
  return (
    <mesh>
      {/* Simple sphere as placeholder */}
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="#4444ff" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
    </mesh>
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

export default EarthCanvas
