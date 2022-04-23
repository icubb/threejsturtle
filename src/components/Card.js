import * as THREE from 'three'
import React, {useRef, useState} from 'react';
import {Canvas, useFrame,useLoader} from '@react-three/fiber';
import { TransformControls } from '@react-three/drei'

import cardFrontImg from '../imgs/card_front.png';
import cardBackImg from '../imgs/card_back.png';


const Card = (props) => {
    
    const front = useRef();
    const back = useRef();
    
    const front_texture = useLoader(THREE.TextureLoader,cardFrontImg);
    const back_texture = useLoader(THREE.TextureLoader,cardBackImg);

    const [movement, setMovement] = useState(true);

    useFrame((state,delta) => { 
      if(movement) {
        front.current.rotation.y += 0.02
        back.current.rotation.y += 0.02 
      }
    });

    //Return view, these are regular three.js elements expressed in JSX

    return (
      <>
        <mesh
          {...props}
          ref={front}
          scale={15}
          onClick={(event) => setMovement(!movement)}
          >
          <planeGeometry args={[1, 1.5]} />
          <meshStandardMaterial transparent={true} map={front_texture}  side={THREE.FrontSide} />
        </mesh>
        <mesh
          {...props}
          ref={back}
          scale={15}
          onClick={(event) => setMovement(!movement)}
          >
          <planeGeometry args={[1, 1.5]} />
          <meshStandardMaterial transparent={true} map={back_texture}  side={THREE.BackSide} />
        </mesh>
      </> 
    )

};

export default Card;