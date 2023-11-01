import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience.jsx'

export default function App()
{
    return(
        <Canvas
            shadows
            camera={ 
                {
                    fov: 30,
                    position: [ 0, 2, 5 ]
                    // near: 0.1,
                    // far: 200,
                } 
            }
        >
            <color attach="background" args={["#ececec"]} />
            <Experience />
        </Canvas>
    )
}