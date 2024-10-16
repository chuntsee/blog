import React from "react";
import AnimatedDiv from "../animatedComponent";
import codeIcon from '../icons/code-solid.svg'
import schoolIcon from '../icons/school-solid.svg'
import './aboutContent.css'
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
const AboutDescription = () =>{

    return (
        <div  className= 'rubik-normal'>
            <AnimatedDiv>
                <div  className='des'>
                    I am a recent graduate with a Bachelor's degree in Software Engineering from Monash University and a Master's in Information Technology from the University of New South Wales, with an overall average score of 75. 
                </div>
            </AnimatedDiv>
            <AnimatedDiv>
                <div className='des'>
                    I have experience in developing web and mobile applications, with strong expertise in both front-end and back-end development. I specialize in front-end development, turning prototypes into fully functional user interfaces. 
                </div>
            </AnimatedDiv>
            <AnimatedDiv>
                <div className='des'>
                Additionally, I have experience with backend server development, database implementation, and a solid understanding of network protocols. I excel at building efficient RESTful APIs that seamlessly integrate front-end and back-end systems.
                </div>
            </AnimatedDiv>
            <AnimatedDiv>
                <div className='des'>
                    I am passionate about coding, eager to learn new technologies, and excited about new challenges. If you're looking for a dedicated developer ready to make an impact, feel free to reach out. I'm also open to relocation if needed!
                </div>
            </AnimatedDiv>
        </div>
    ) 
}

const SkillSectionContainer = () => {

    const skillGridStyle = {
        display: 'flex',
        flexWrap: 'wrap', // 允许换行
        gap: '20px', // 设置技能之间的间距
        marginTop: '20px'
    }
    const imgStyle = {
        width: '25px', height: '25px', backgroundColor: '#0FFF9D', borderRadius:'5px',marginRight:'10px',padding:'2px' 
    }
    return (
        <div>
            <AnimatedDiv>
                <div className="titleStyle">
    
                        <img src={codeIcon} alt={"code icon"} style={imgStyle}></img>
                        <div className='archivo-black-regular'>Technical Skills</div>

                </div>
                </AnimatedDiv>
                <AnimatedDiv>
                <div style={skillGridStyle}>
                    <SkillContainer>JavaScript</SkillContainer>
                    <SkillContainer>React</SkillContainer>
                    <SkillContainer>Nodejs</SkillContainer>
                    <SkillContainer>Express</SkillContainer>
                    <SkillContainer>MySQL</SkillContainer>
                    <SkillContainer>MongoDB</SkillContainer>
                    <SkillContainer>Postgres</SkillContainer>
                    <SkillContainer>Flask</SkillContainer>
                    <SkillContainer>FastAPI</SkillContainer>
                    <SkillContainer>HTML</SkillContainer>
                    <SkillContainer>CSS</SkillContainer>
                    <SkillContainer>Docker</SkillContainer>
                    <SkillContainer>Python</SkillContainer>
                    <SkillContainer>Java</SkillContainer>
                    <SkillContainer>Swift</SkillContainer>
                    <SkillContainer>AWS</SkillContainer>
                    <SkillContainer>Git</SkillContainer>
                </div>
                </AnimatedDiv>

                <AnimatedDiv>
                <div className="titleStyle">
                    <img src={schoolIcon} alt={"school icon"} style={imgStyle}></img>
                    <div className='archivo-black-regular'>Education</div>
                </div>
                </AnimatedDiv>
                <div style={{display:'flex',flex:'1',flexDirection:'column'}}>
                    <AnimatedDiv width="100%">
                    <EducationContainer degree={'Master of Information Technology'} uni={'University of New South Wales'} date={'Sep 2022 - Jan 2024'}/>
                    </AnimatedDiv>
                    <AnimatedDiv width="100%">
                    <EducationContainer degree={'Bachelor of Software Engineering (Honour)'} uni={'Monash University'} date={'Mar 2018 - Jul 2022'}/>
                    </AnimatedDiv>
                </div>
        </div>
    ) 
}

const SkillContainer = ({children}) =>{
    const skillContent = {
        backgroundColor: '#232323',
        borderRadius: '10px',
        padding: '6px',
        color: 'white',
        textAlign: 'center', // 文本居中
    }

    return (
        <div className="rubik-normal" style={skillContent}> {/* 使用 <div> 包裹内容 */}
            {children} {/* 渲染 children */}
        </div>
    )
}
const EducationContainer = ({uni,degree,date}) => {
    const dateStyle = {
        display: 'flex',
        justifyContent:'flex-end',
        margin: '10px 0',
        flex:'1',

    }
    const lineStyle = {
        marginTop: '2px',
        display:'flex',
        flex:'1',

    }
    const containerStyle = {
        fontWeight:'bold', 
        marginTop:'10px',
        display: 'flex', // Ensure the container is a flex container
        flexDirection: 'column', // Stack children vertically
        flex: '1', // Allow it to grow
        
    }
    return(
        
        <div style={containerStyle}>
            <div className="rubik-normal" style={lineStyle}>{degree}</div>
            
            <div className="rubik-normal" style={lineStyle}>{uni}</div>

            <div className="rubik-normal" style={dateStyle}>{date}</div>
        </div>
        
    )
}

const AboutContent = () =>{

    
    return(
        <div className="about-container">
            <div style={{flex: '1 1 65%', marginRight:'30px', boxSizing: 'border-box'}}>
                <AboutDescription/>
            </div>
            <div style={{flex: '1 1 35%', boxSizing: 'border-box'}}>
                <SkillSectionContainer/>
            </div>
        </div>
    )
}
export  {AboutContent,SkillContainer}