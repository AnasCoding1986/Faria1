import { Suspense, useEffect, useState, useCallback } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import ErrorBoundary from '../ErrorBoundary'
import CanvasLoader from '../Loader'

const MODEL_PATH = '/Faria1/desktop_pc/scene.gltf'

// Pre-load the model
useGLTF.preload(MODEL_PATH)

const ComputerModel = ({ isMobile }: { isMobile: boolean }) => {
  const { scene } = useGLTF(MODEL_PATH)

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const Computers = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <ErrorBoundary fallback={<div>Error loading 3D model</div>}>
      <ComputerModel isMobile={isMobile} />
    </ErrorBoundary>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = useCallback(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches)
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ErrorBoundary>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
      </ErrorBoundary>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
