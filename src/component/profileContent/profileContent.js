import React from "react";
import AnimatedDiv from "../animatedComponent";
import { ContactButton } from "../buttonComponent";
import './profileContent.css'
const Title = () => {

    return (
        <div className='archivo-black-regular title'>
            Hi, I'm Jun Xie.
        </div>
    );
};
const SubTitle = () => {

    return(
        <div className='archivo-black-regular subtitle'>
            
        I'm a <span style={{color:'#0FFF9D'}}>Full Stack Developer</span>
        </div>

    )
}
const Description = () =>{

    return(
        <div  className= 'rubik-normal description'>
Recent graduate and full-stack developer with experience in both web and mobile applications. I specialize in creating efficient backend solutions and intuitive frontend interfaces. I am dedicated, hardworking, and continuously eager to learn and adapt to new technologies.
        </div>
    )
}

const ProfileContent = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '100vh',
        justifyContent: 'center',
        boxSizing: 'border-box',
        paddingTop:'100px',
        
    }
    return(
        
        <div style={containerStyle}>
            <AnimatedDiv >
                <Title/>
            </AnimatedDiv>
            <AnimatedDiv>
                <SubTitle/>
            </AnimatedDiv>
                
            <AnimatedDiv>
                <Description/>
            </AnimatedDiv>
            <AnimatedDiv>
                <ContactButton/>
            </AnimatedDiv>
        </div>
        
    )
}
export default ProfileContent
