
import ImageSlideShow from "./ImageSlideShow";
import TextAnimation from "./TextAnimation";
import Confetti from "react-confetti";
import React, { useEffect, useState } from 'react'
import { Flex, VStack } from "@chakra-ui/react";


const index = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <>
            {/* <Flex h="100%" minH={"100vh"} height={"100%"} minW="100%" minW={"100vw"} backgroundColor={"#101020"}> */}

            <div style={{
                minWidth: "100vw",
                minHeight: "100vh",

            }}>
                <Confetti />
                <Flex h="100%" minH={"70vh"} height={"100%"} width="100%" minW={"100vw"} backgroundColor={"#101020"}>
                    <div>
                        <TextAnimation texts={['Hello', 'World', 'React']} />
                    </div>
                </Flex>
                <Flex h="100%" minH={"30vh"} height={"100%"} width="100%" minW={"100vw"} backgroundColor={"#101020"}>
                    <div>
                        <ImageSlideShow />{" "}
                    </div>
                </Flex>
            </div>

            {/* </Flex> */}
        </>
    )
}

export default index


// import * as THREE from 'three';
// import { useRef, useState, useEffect } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';

// function Confetti({ position, color, speed, rotationSpeed, size }) {
//   const meshRef = useRef();
//   const [rotation, setRotation] = useState(0);

//   useFrame(({ clock }) => {
//     setRotation((rotation) => rotation + rotationSpeed * clock.getElapsedTime());
//     meshRef.current.position.y += speed;
//     if (meshRef.current.position.y > 10) {
//       meshRef.current.position.y = -10;
//     }
//   });

//   return (
//     <mesh ref={meshRef} position={position} rotation={[0, 0, rotation]}>
//       <boxGeometry args={[size, size, size]} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   );
// }

// function ConfettiRain({ count }) {
//   const confettiRefs = useRef([]);
//   const [colors, setColors] = useState([]);

//   useEffect(() => {
//     const newColors = [];
//     for (let i = 0; i < count; i++) {
//       newColors.push(new THREE.Color(Math.random() * 0xffffff));
//     }
//     setColors(newColors);
//   }, [count]);

//   return (
//     <>
//       {colors.map((color, index) => (
//         <Confetti
//           key={index}
//           position={[Math.random() * 20 - 10, -10, Math.random() * 20 - 10]}
//           color={color}
//           speed={Math.random() * 0.1 + 0.05}
//           rotationSpeed={Math.random() * 5}
//           size={0.2}
//           ref={(ref) => (confettiRefs.current[index] = ref)}
//         />
//       ))}
//     </>
//   );
// }

// export default function App() {
//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <Canvas style={{ position: 'absolute', top: 0, left: 0 }}>
//       <color attach="background" args={['#101020']} />
//         <ambientLight />
//         <pointLight position={[10, 10, 10]} />
//         <ConfettiRain count={500} />
//       </Canvas>
//     </div>
//   );
// }


