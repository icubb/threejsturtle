import * as THREE from 'three'
import React, {useRef, useState} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';

const Plane = (props) => {
    
    const mesh = useRef();

    const [hovered,setHover] = useState(false);

    const [active, setActive] = useState(false);

    //Subscribe this component to the render-loop, rotate the mesh every frame
    
    useFrame((state,delta) => {
      mesh.current.position.y = 10;
      mesh.current.rotation.y += 0.01});

    
    //Return view, these are regular three.js elements expressed in JSX

    return (
        <mesh
        {...props}
        ref={mesh}
        scale={active ? 15 : 10}
        textureHeight
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <planeGeometry args={[1, 1.5]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} side={THREE.DoubleSide} />
      </mesh>
    )

};

export default Plane;



  