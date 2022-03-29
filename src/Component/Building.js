/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef , useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()

  useEffect(()=> {
    group.current.position.y = -7.3
    group.current.rotation.y = 1.5

  })

  const { nodes, materials } = useGLTF('/building.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.main_building.geometry} material={materials['main bullding']} position={[0, 4.06, 0]} scale={[4.26, 4.26, 5.73]} receiveShadow/>
      <mesh geometry={nodes.firstloor_cover.geometry} material={nodes.firstloor_cover.material} position={[-4.65, 10.39, -1.34]} rotation={[0, 0, Math.PI / 2]} scale={2.24} castShadow/>
      <mesh geometry={nodes.firtsfloor_design_cover.geometry} material={nodes.firtsfloor_design_cover.material} position={[-4.06, 10.39, 3.29]} scale={[0.42, 1.66, 0.74]} castShadow/>
      <mesh geometry={nodes.design_steel.geometry} material={materials['design steel']} position={[-4.95, 8.13, 2.64]} scale={[0.11, 1.45, 0.08]} castShadow/>
      <mesh geometry={nodes.left_desing_red.geometry} material={materials['left design']} position={[-4.17, 1, -3.21]} scale={[0.32, 1, 0.33]} castShadow/>
      <mesh geometry={nodes.door.geometry} material={nodes.door.material} position={[-0.67, 9.84, -0.46]} scale={[1, 1.24, 1]} castShadow/>
      <mesh geometry={nodes.door001.geometry} material={nodes.door001.material} position={[-0.26, 2.61, 2.83]} scale={[1, 2.16, 1.17]} castShadow/>
      <mesh geometry={nodes.window.geometry} material={nodes.window.material} position={[-0.92, 2.94, -1.62]} scale={[0.37, 1.04, 1.36]} castShadow/>
      <mesh geometry={nodes.window001.geometry} material={nodes.window001.material} position={[-1.61, 10.28, -2.38]} scale={[0.16, 0.57, 0.5]} castShadow/>
      <mesh geometry={nodes.window_glass.geometry} material={nodes.window_glass.material} position={[-1.74, 10.27, -2.4]} rotation={[0, 0, -Math.PI / 2]} scale={0.7} castShadow/>
      <mesh geometry={nodes.window_glass001.geometry} material={nodes.window_glass001.material} position={[-1.22, 2.9, -1.58]} rotation={[0, 0, -Math.PI / 2]} scale={[0.99, 0.99, 1.28]} castShadow/>
      <mesh geometry={nodes.terrace_steel001.geometry} material={nodes.terrace_steel001.material} position={[-4.06, 15.69, -0.01]} scale={[0.08, 0.07, 5.45]} castShadow/>
      <mesh geometry={nodes.terrace_steel.geometry} material={nodes.terrace_steel.material} position={[-4.06, 15.48, -1.07]} scale={[0.08, 0.07, 2.31]} castShadow/>
      <mesh geometry={nodes.terrace_steel002.geometry} material={nodes.terrace_steel002.material} position={[-4.06, 2.34, 3.62]} scale={[0.08, 0.07, 1.9]} castShadow/>
      <mesh geometry={nodes.terrace_steel003.geometry} material={nodes.terrace_steel003.material} position={[-4.06, 2.34, -3.17]} scale={[0.08, 0.07, 2.1]} castShadow/>
      <mesh geometry={nodes.terrace_steel004.geometry} material={nodes.terrace_steel004.material} position={[-4.06, 2.34, 0.39]} scale={[0.08, 0.07, 1.17]} castShadow/>
      <mesh geometry={nodes.terrace_steel005.geometry} material={nodes.terrace_steel005.material} position={[-4.06, 1.27, -0.74]} rotation={[Math.PI / 2, 0, 0]} scale={[0.09, 0.07, 1.19]} castShadow />
      <mesh geometry={nodes.terrace_steel006.geometry} material={nodes.terrace_steel006.material} position={[-4.06, 9.98, -1.51]} scale={[0.08, 0.07, 2.1]} castShadow/>
      <mesh geometry={nodes.wall.geometry} material={nodes.wall.material} position={[-3.98, 0.82, 3.53]} scale={[0.2, 0.82, 1.61]} castShadow/>
      <mesh geometry={nodes.terrace_steel007.geometry} material={nodes.terrace_steel007.material} position={[-4.06, 1.86, 4.22]} scale={[0.04, 0.48, 0.04]} castShadow/>
      <mesh geometry={nodes.terrace_steel008.geometry} material={nodes.terrace_steel008.material} position={[-4.06, 1.86, -1.84]} scale={[0.04, 0.48, 0.04]} castShadow/>
      <mesh geometry={nodes.wall001.geometry} material={nodes.wall001.material} position={[-3.98, 0.82, -3.2]} scale={[0.2, 0.82, 2.01]} castShadow/>
      <mesh geometry={nodes.wall002.geometry} material={nodes.wall002.material} position={[-4.1, 9.14, -1.59]} scale={[0.06, 0.82, 1.88]} castShadow/>
    </group>
  )
}

useGLTF.preload('/building.glb')