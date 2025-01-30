import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { progress, active } = useProgress()

  if (!active && progress === 100) return null

  return (
    <Html
      as='div'
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      <p className="text-white text-lg mt-4">
        {progress.toFixed(0)}%
      </p>
    </Html>
  )
}

export default Loader
