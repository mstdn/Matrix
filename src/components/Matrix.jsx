import React, { useEffect, useRef } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"

export function Matrix(props) 
{
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("./assets/models/matrix.glb")
  const { actions } = useAnimations(animations, group)
  
  useEffect(() =>
  {
    actions['Animation'].play()
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="color003_19" position={[-1.883, 5.151, -0.867]}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Color}
                />
              </group>
              <group name="color004_20" position={[0.831, 3.321, 1.612]}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.Color}
                />
              </group>
              <group name="color011_21" position={[1.075, 5.151, -2.485]}>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.Color}
                />
              </group>
              <group name="color012_22" position={[1.581, 3.321, -0.23]}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.Color}
                />
              </group>
              <group name="color013_23" position={[-1.237, 3.321, -2.589]}>
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.Color}
                />
              </group>
              <group name="color017_24" position={[2.049, 3.321, 2.098]}>
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.Color}
                />
              </group>
              <group name="color021_25" position={[-0.07, 3.321, 1.248]}>
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.Color}
                />
              </group>
              <group
                name="color029_26"
                position={[0.873, 6.531, 2.497]}
                scale={1.947}
              >
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.Color}
                />
              </group>
              <group
                name="color030_27"
                position={[-1.954, 4.562, 1.09]}
                scale={1.366}
              >
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials.Color}
                />
              </group>
              <group
                name="color031_28"
                position={[2.976, 4.562, 0.135]}
                scale={1.366}
              >
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials.Color}
                />
              </group>
              <group
                name="color032_29"
                position={[0.155, 4.562, -4.27]}
                scale={1.366}
              >
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials.Color}
                />
              </group>
              <group
                name="color033_30"
                position={[-2.965, 4.562, 4.437]}
                scale={1.366}
              >
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials.Color}
                />
              </group>
              <group
                name="color037_31"
                position={[2.48, 8.471, -1.09]}
                scale={2.52}
              >
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials.Color}
                />
              </group>
              <group
                name="color038_32"
                position={[-3.249, 10.301, -1.991]}
                scale={2.52}
              >
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials.Color}
                />
              </group>
              <group
                name="color039_33"
                position={[-3.844, 8.471, 1.664]}
                scale={2.52}
              >
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  material={materials.Color}
                />
              </group>
              <group
                name="color040_34"
                position={[-2.416, 8.471, -0.104]}
                scale={2.52}
              >
                <mesh
                  name="Object_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials.Color}
                />
              </group>
              <group
                name="color041_35"
                position={[4.477, 8.471, 1.613]}
                scale={2.52}
              >
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials.Color}
                />
              </group>
              <group
                name="color042_36"
                position={[4.061, 11.672, -2.833]}
                scale={3.465}
              >
                <mesh
                  name="Object_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38.geometry}
                  material={materials.Color}
                />
              </group>
              <group
                name="color043_37"
                position={[-1.631, 11.672, -4.473]}
                scale={3.465}
              >
                <mesh
                  name="Object_40"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={materials.Color}
                />
              </group>
              <group
                name="mask003_38"
                position={[-1.876, 0.874, -0.865]}
                rotation={[0, 1.205, 0]}
              >
                <mesh
                  name="Object_42"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42.geometry}
                  material={materials.Mask}
                />
              </group>
              <group
                name="CatMesh2_39"
                position={[1.763, 0, -1.304]}
                rotation={[Math.PI / 2, 0, 0.688]}
                scale={0.051}
              >
                <mesh
                  name="Object_44"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_44.geometry}
                  material={materials.Color}
                />
                <mesh
                  name="Object_45"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_45.geometry}
                  material={materials.Mask}
                />
              </group>
              <group
                name="CatMesh2001_40"
                position={[1.763, 0, -1.304]}
                rotation={[Math.PI / 2, 0, 0.688]}
                scale={0.051}
              >
                <mesh
                  name="Object_47"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_47.geometry}
                  material={materials.wire}
                />
              </group>
              <group
                name="Plane026_41"
                position={[1.743, 0, -1.372]}
                rotation={[-Math.PI, 0.809, -Math.PI]}
                scale={0.042}
              >
                <mesh
                  name="Object_49"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_49.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="man_in_suit002_42"
                position={[-1.765, 0, 1.732]}
                rotation={[Math.PI / 2, 0, -2.5]}
              >
                <mesh
                  name="Object_51"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_51.geometry}
                  material={materials.Mask}
                />
              </group>
              <group
                name="man_in_suit001_43"
                position={[-1.765, 0, 1.732]}
                rotation={[Math.PI / 2, 0, -2.5]}
              >
                <mesh
                  name="Object_53"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_53.geometry}
                  material={materials.Color}
                />
              </group>
              <group
                name="Korpus_44"
                position={[-1.139, 1.474, 1.424]}
                rotation={[1.555, 0.002, -0.821]}
                scale={0.001}
              >
                <mesh
                  name="Object_55"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_55.geometry}
                  material={materials.Color}
                />
              </group>
              <group name="Circle_45" scale={2.136}>
                <mesh
                  name="Object_57"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_57.geometry}
                  material={materials.wire}
                />
              </group>
              <group
                name="Circle001_46"
                position={[0, -0.012, 0]}
                scale={2.136}
              >
                <mesh
                  name="Object_59"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_59.geometry}
                  material={materials.Mask}
                />
              </group>
              <group
                name="Circle002_47"
                position={[0, -0.022, -0.061]}
                scale={2.136}
              >
                <mesh
                  name="Object_61"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_61.geometry}
                  material={materials.Color}
                />
              </group>
              <group
                name="Korpus001_48"
                position={[-1.139, 1.474, 1.424]}
                rotation={[1.555, 0.002, -0.821]}
                scale={0.001}
              >
                <mesh
                  name="Object_63"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_63.geometry}
                  material={materials.Mask}
                />
              </group>
              <group
                name="Cylinder001_49"
                position={[0, -64.018, 0]}
                scale={0.071}
              >
                <mesh
                  name="Object_65"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_65.geometry}
                  material={materials.Color}
                />
              </group>
              <group name="Empty_51" scale={0.071}>
                <group name="Cylinder_50" position={[0, 98.31, 0]}>
                  <mesh
                    name="Object_68"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_68.geometry}
                    material={materials.Mask}
                  />
                </group>
              </group>
              <group name="Plane_52" position={[0, 19.244, 0]} scale={8.942}>
                <mesh
                  name="Object_70"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_70.geometry}
                  material={materials.Alpha}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/matrix.glb");
