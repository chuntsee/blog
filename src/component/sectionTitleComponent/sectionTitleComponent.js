import React from "react";
import AnimatedDiv from "../animatedComponent";
import './sectionTitleComponent.css'
const SectionTitle = ({title,lineDir='right'}) =>{

    return(
            
            <div style={{
                display: 'flex',
                alignItems:'center',
                width: '100%'

            }}>  
                {lineDir === 'left' &&<div className="left-line"></div>}
                <AnimatedDiv>
                <div className='archivo-black-regular section-title' >
                    {title}
                </div>
                </AnimatedDiv>
                {lineDir === 'right' &&<div className="right-line"></div>}  
            </div>
            
    )
}

export default SectionTitle