import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience.jsx'
import { Suspense, useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen.jsx'

export default function App()
{
    const [ started, setStarted ] = useState(false)

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
                    position: [ 0, 0, 5 ]
                    // near: 0.1,
                    // far: 200,
                } 
            }
        >
            <Suspense>
                {started && (
                    <Experience />
                )}
            </Suspense>
        </Canvas>
    </> )
}