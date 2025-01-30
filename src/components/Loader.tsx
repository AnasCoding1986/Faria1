import { Html, useProgress } from '@react-three/drei'

const CanvasLoader = () => {
  const { progress, errors } = useProgress()
  
  if (errors.length > 0) {
    return (
      <Html center>
        <div className="flex flex-col items-center justify-center">
          <p className="text-red-500">Error loading 3D model</p>
          <p className="text-sm text-gray-500">Please refresh the page</p>
        </div>
      </Html>
    )
  }

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-20 h-20 border-2 border-t-blue-500 rounded-full animate-spin" />
        <p className="mt-4 text-sm text-gray-500">{progress.toFixed(2)}% loaded</p>
      </div>
    </Html>
  )
}

export default CanvasLoader
