import { Suspense, useEffect, useState, useCallback } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import CanvasLoader from '../Loader'

const ComputerModel = ({ isMobile }: { isMobile: boolean }) => {
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
      
      {/* Simple box as placeholder */}
      <mesh scale={isMobile ? 0.7 : 0.75} position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#4444ff" />
      </mesh>
    </mesh>
  )
}

const Computers = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <Suspense fallback={<CanvasLoader />}>
      <ComputerModel isMobile={isMobile} />
    </Suspense>
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
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
