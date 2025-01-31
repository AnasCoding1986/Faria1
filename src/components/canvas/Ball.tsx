import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei'
import CanvasLoader from '../Loader'

// Import existing tech icons
import analytics from '../../assets/digital_analytics.png'
import content from '../../assets/content_analytics.png'
import email from '../../assets/tech/email.png'
import facebook from '../../assets/tech/facebook.png'
import instagram from '../../assets/tech/instagram.png'
import seo from '../../assets/seo_optimization.png'
import social from '../../assets/tech/social.png'
import strategy from '../../assets/tech/strategy.png'
import socialmedia from '../../assets/socialmedia.png'

// Mapping of icon names to their actual paths
const techIcons: { [key: string]: string } = {
  analytics,
  content,
  email,
  facebook,
  instagram,
  seo,
  social,
  strategy,
  socialmedia
}

interface BallProps {
  imgUrl: string
}

const Ball = ({ imgUrl }: BallProps) => {
  try {
    const [decal] = useTexture([imgUrl])

    return (
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color='#fff8eb'
            polygonOffset
            polygonOffsetFactor={-5}
            transparent
            opacity={0.9}
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            map={decal}
            scale={1}
            depthTest={false}
          />
        </mesh>
      </Float>
    )
  } catch (error) {
    console.error('Error loading texture:', error)
    return null
  }
}

const BallCanvas = ({ icon }: { icon: string }) => {
  // Resolve icon path, default to a fallback if not found
  const imagePath = techIcons[icon] || 
    (typeof icon === 'string' && icon.startsWith('/') 
      ? icon 
      : `/src/assets/tech/${icon}`)

  if (!imagePath) {
    console.warn(`No icon found for: ${icon}`)
    return null
  }

  return (
    <Canvas 
      frameloop='demand' 
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 5], fov: 25 }}
      style={{ width: '100%', height: '100%' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ball imgUrl={imagePath} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas
