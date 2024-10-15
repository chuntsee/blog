import {motion, useInView, useAnimation} from 'framer-motion'
import React, {useEffect,useRef} from 'react'
const AnimatedDiv = ({children, duration=0.5,delay=0.5,y = 75,width='fit-content'}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: false})
    const mainControls = useAnimation();
    const slideControls = useAnimation()
    useEffect(()=>{
        if(isInView){
            slideControls.start("visible")
            mainControls.start("visible")
            
        }
    }, [isInView])
    return(
        <div style={{position: 'relative', width:width}}>
            <motion.div 
                ref={ref}
                variants={{
                    hidden: {opacity:0, y:y},
                    visible: {opacity:1,y:0},
                }}
                initial = "hidden"
                animate = {mainControls} 
                transition={{duration:duration,delay:delay}}
                >
                    {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: {left: 0},
                    visible: {left: '100%'},
                }}
                initial= 'hidden'
                animate={slideControls}
                transition={{duration:0.5, ease:'easeIn'}}
                style={{
                    position:"absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    backgroundColor: '#0FFF9D',
                    zIndex: 20
                }}
                >
            </motion.div>
        </div>
    )
}

export default AnimatedDiv