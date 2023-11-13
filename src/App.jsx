import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience.jsx'
import { Suspense, useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen.jsx'
import { PositionalAudio } from '@react-three/drei'
import { Interface } from './components/Interface.jsx'

export default function App()
{
    const [ started, setStarted ] = useState(false)
    const [ audio, setAudio ] = useState(true)

    return( <>
        <LoadingScreen 
            started={ started } 
            setStarted={ setStarted }
        />
        <Canvas
            shadows
            camera={ 
                {
                    fov: 45,
                    position: [ 0, 0.5, 4.5 ],
                    near: 0.1,
                    far: 600,
                } 
            }
        >
            <Suspense>
                {started && ( <>
                    { audio && (
                        <PositionalAudio autoplay loop url="./assets/mp3/1.mp3" distance={ 300 } />
                    )}
                    <Experience />
                </>
                )}
            </Suspense>
        </Canvas>
        { started && (
            <Interface 
                audio={ audio }
                setAudio={ setAudio }
            />
        )}
    </> )
}