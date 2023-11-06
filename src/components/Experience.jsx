import { 
    Environment,
    OrbitControls,
    Sky 
} from '@react-three/drei'
import World from './World'

export default function Experience()
{
    return <>
        <OrbitControls />
        <Sky />
        <Environment preset='sunset' />
        <World />
    </>
}