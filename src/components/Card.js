import * as THREE from 'three'
import React, {useRef, useState} from 'react';
import {Canvas, useFrame,useLoader} from '@react-three/fiber';
import { TransformControls } from '@react-three/drei'

const Card = (props) => {
    
    const front = useRef();
    const back = useRef();
    
    const front_texture = useLoader(THREE.TextureLoader,'/card_front.png');
    const back_texture = useLoader(THREE.TextureLoader,'/card_back.png');

    useFrame((state,delta) => { 
       front.current.rotation.y += 0.05
       back.current.rotation.y += 0.05
      
    });

    //Return view, these are regular three.js elements expressed in JSX

    return (
      <>
        <mesh
          {...props}
          ref={front}
          scale={15}
          >
          <planeGeometry args={[1, 1.5]} />
          <meshStandardMaterial transparent={true} map={front_texture}  side={THREE.FrontSide} />
        </mesh>
        <mesh
          {...props}
          ref={back}
          scale={15}
          >
          <planeGeometry args={[1, 1.5]} />
          <meshStandardMaterial transparent={true} map={back_texture}  side={THREE.BackSide} />
        </mesh>
      </> 
    )

};

export default Card;