import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Pickle(props) 
{
    const { nodes, materials } = useGLTF('./assets/models/pickle.glb')

    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_2.geometry}
                material={materials.eye_lp}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_3.geometry}
                material={materials.buziaa}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4.geometry}
                material={materials.ogorek}
                />
            </group>
        </group>
    )
}

useGLTF.preload('./assets/models/pickle.glb')