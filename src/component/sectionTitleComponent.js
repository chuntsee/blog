import React from "react";
import AnimatedDiv from "./animatedComponent";
const SectionTitle = ({title,lineDir='right',size}) =>{
    const titleStyle = {
        fontSize: size,
    }
    const rightLine = {
        flexGrow: 1,
        height: '2px',
        backgroundColor:'#7E7E81',
        marginLeft: '20px'
    }
    const leftline = {
        flexGrow: 1,
        height: '2px',
        backgroundColor:'#7E7E81',
        marginRight: '20px'
    }
    return(
            
            <div style={{
                display: 'flex',
                alignItems:'center',
                width: '100%'

            }}>  
                {lineDir === 'left' &&<div style={leftline}></div>}
                <AnimatedDiv>
                <div className='archivo-black-regular' style={titleStyle}>
                    {title}
                </div>
                </AnimatedDiv>
                {lineDir === 'right' &&<div style={rightLine}></div>}  
            </div>
            
    )
}

export default SectionTitle