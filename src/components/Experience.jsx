import { Environment, OrbitControls, Sky } from '@react-three/drei'
import { Suspense } from 'react'
import  Lights from '../Lights.jsx'
import World from './World.jsx'

export default function Experience()
{
    return <>
        <OrbitControls />
        <Lights />
        <Suspense fallback={ null }>
            <World />
        </Suspense>
    </>
}