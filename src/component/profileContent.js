import React from "react";
import AnimatedDiv from "./animatedComponent";
import { ContactButton } from "./buttonComponent";
const Title = () => {
    const titleStyle = {fontSize: '80px',
        fontWeight: 'bold',
        paddingBottom: '20px'
    }
    return (
        <div className='archivo-black-regular'style={titleStyle}>
            Hi, I'm Jun Xie.
        </div>
    );
};
const SubTitle = () => {
    const subTitleStyle = {fontSize: '35px',
        paddingBottom: '20px'
    }
    return(
        <div className='archivo-black-regular'style={subTitleStyle}>
            
        I'm a <span style={{color:'#0FFF9D'}}>Full Stack Developer</span>
        </div>

    )
}
const Description = () =>{
    const fontSize = {fontSize : '22px',
        textAlign:'left',
        paddingRight: '180px'
    }
    return(
        <div  className= 'rubik-normal'style={fontSize}>
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
        paddingTop:'100px'
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
