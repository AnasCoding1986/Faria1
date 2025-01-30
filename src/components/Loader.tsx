import { Html, useProgress } from '@react-three/drei'

const CanvasLoader = () => {
  const { progress, errors, active } = useProgress()
  
  if (errors.length > 0) {
    return (
      <Html center>
        <div className="flex flex-col items-center justify-center text-white">
          <p className="text-red-500 text-lg font-bold">Error loading 3D model</p>
          <p className="text-sm mt-2">Details: {errors[0]}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </Html>
    )
  }

  if (!active) {
    return null
  }

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="mt-4 text-white text-lg font-semibold">
          {progress.toFixed(0)}%
        </p>
        <p className="text-gray-400 text-sm">Loading 3D model...</p>
      </div>
    </Html>
  )
}

export default CanvasLoader
