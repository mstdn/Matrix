import {  OrbitControls} from '@react-three/drei'
import World from './World.jsx'
import Lights from '../Lights.jsx'

export default function Experience()
{
    return <>
        <OrbitControls />
        <Lights />
        <World />
    </>
}