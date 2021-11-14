import React, { useEffect, useRef } from 'react';
import { Text, View } from 'react-native';
import StyleSheet from '../style/style';
import { gsap } from 'gsap'
import { Draggable } from "gsap/Draggable"
import { TweenMax } from 'gsap/gsap-core';
gsap.registerPlugin(Draggable);
// gsap.set("#hsimage", { transformOrigin: "12.3% 46.4%" });
// Draggable.create("hsimage", {
// 	type: "rotation",
// });

export default function Horoscope() {

    const hsRef = useRef();
    useEffect(() => {
        // gsap.to(hsRef.current, { rotation: "+=360" });
        const rotationSnap = 360 / 14
        Draggable.create('#hsimage', {
            type: 'rotation',
            // onDragEnd: 
            // liveSnap: (endValue) => Math.round(endValue / rotationSnap) * rotationSnap,
        })

        // gsap.to('#hsimage', 1, {
        //     rotation: 180,
        //     // modifiers: {
        //     //     rotation: liveSnap
        //     // }
        // })
    });
    
    return (
        <View>
            <div>
                <h1 style={{textAlign: 'center'}}>Daily Horoscope</h1>
            </div>
            <img id="hsimage" ref={hsRef} src={require("../assets/horoscopetemp.jpg")} />
            <p id="value">0</p>

        </View>
        
    )
}