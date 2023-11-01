import { 
    Environment,
    OrbitControls,
    Sky 
} from '@react-three/drei'

export default function Experience()
{
    return <>
        <OrbitControls />
        <Sky />
        <Environment preset='sunset' />
    </>
}