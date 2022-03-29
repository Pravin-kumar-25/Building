import React, { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Building from './Building'

const BuildingModel = () => {

  return (
    <div>
        <Canvas
            shadows
            camera={{position:[0,0,20]}}
            style={{width:'100vw' , height:'100vh' , background:'black'}}
        >
            <ambientLight intensity={0.1} />
            <pointLight color={'white'} position={[10,10,50]} castShadow/>
            {/* <directionalLight position={[-10,0,10]} castShadow /> */}
            <Suspense fallback={null}>
                <Building />
            </Suspense>
            <OrbitControls maxAzimuthAngle={Math.PI/4}  minAzimuthAngle={-Math.PI/4}  minPolarAngle={Math.PI/4} maxPolarAngle={Math.PI/2} enableZoom={false}/>
        </Canvas>
    </div>
  )
}

export default BuildingModel