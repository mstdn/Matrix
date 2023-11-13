import { useProgress } from '@react-three/drei'
import { useEffect, useState } from 'react'

export const LoadingScreen = (props) => 
{
  const { started, setStarted } = props
  const { progress, total, loaded, item } = useProgress()
  const [showStartButton, setShowStartButton] = useState(false)
  const [ showLoading, setShowLoading ] = useState(true)

  useEffect(() => 
  {
    if (progress === 100) 
    {
      setShowStartButton(true)
    }
  }, [progress])

  const handleStartClick = () => {
    setStarted(true)
  }

  return (<>
        
      {showLoading && (
      <div
          className={`
              fixed top-0 left-0 w-full h-full z-50 transition-opacity 
              duration-1000
              flex items-center justify-center bg-[#003b00] 
              ${started ? "opacity-0" : "opacity-100"}
          `}
      >
      {showStartButton && progress === 100 && (
          <button 
            className="text-3xl md:text-5xl font-bold text-[#00ff41] transition-all duration-500"
            onClick={() => {
              handleStartClick()
              setShowStartButton(false)
              setShowLoading(false)
            }}
            style={{
              border: "2px solid",
              borderColor: "#00ff41",
              borderRadius: "10px",
              padding: "15px"
            }}
          >
            Start
          </button>
        )}
      { progress !== 100 && (

        <div className="text-3xl md:text-5xl font-bold text-[#00ff41] relative">
          <div
            className="absolute left-0 top-0  overflow-hidden truncate text-clip transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          >
            Loading
          </div>
          <div className="opacity-40">
            Loading
          </div>
        </div> )}

      </div> )}
  </>);
};
