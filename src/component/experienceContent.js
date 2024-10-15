import React from "react";
import { SkillContainer } from "./aboutContent";
import AnimatedDiv from "./animatedComponent";
const LineContainer = ({left,right,color='white'}) =>{
    const fontStyle = {
        fontSize: '22px'
    }
    const lineStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        margin: '18px 0'
        
    }
    return (
        <div style={lineStyle}>
            <AnimatedDiv>
            <div className='archivo-black-regular' style={{...fontStyle, color:color}}>{left}</div>
            </AnimatedDiv>
            <AnimatedDiv>
            <div style={fontStyle}>{right}</div>
            </AnimatedDiv>
        </div>
    )
}

const ExContent = ()=>{
    const fontStyle = {
        fontSize: '22px',
        margin: '18px 0'
    }
    const skillsStore = {
        skills:['Communication', 'Problem Solving', 'Teamwork', 'Sales Management','Multitasking']
    }
    const fullstackSkills = {
        skills: ['React', 'Python','Swift', 'TypeScript', 'JavaScript','MongoDB', 'NodeJS','Flask']
    }
    const softwareSkills = {
        skills: ['Python','Next.js','React','SQL','NoSQL','REST API','Data Validation','Data Modeling']
    }
    const gridSkills ={
        display: 'flex',
        flexWrap: 'wrap', // 允许换行
        gap: '20px', // 设置技能之间的间距
        margin: '18px 0'
    }
    const line = {
        flexGrow: 1,
        height: '1px',
        backgroundColor:'#7E7E81',
        margin: '25px 0'
    }
    return(
        <div>
            
            <LineContainer left={'Aussie Family Mart'} right={'May 2024 - Aug 2024'}/>


            <LineContainer left={'Store Cashier'} right={'Melbourne, VIC'} color='#0FFF9D'/>

            <AnimatedDiv>
            <div className='rubik-normal' style={fontStyle}>In this role, I restocked shelves, assisted customers with product inquiries, operated the cash register, and processed transactions.</div>
            </AnimatedDiv>
            <AnimatedDiv>
            <div style={gridSkills}>
                {skillsStore.skills.map((i, s) => (
                    <SkillContainer key={s}>
                        {i}
                    </SkillContainer>
                ))}
            </div>
            </AnimatedDiv>
            
            <div style={line}></div>
            
            
            <LineContainer left={'Fillmula Inc - Internship'} right={"Dec 2021 - Jul 2022 "}/>
            
            
            <LineContainer left={"Software Engineering"} right={"GuangZhou, GuangDong"} color='#0FFF9D'/>
            
            <AnimatedDiv>
            <div className='rubik-normal' style={fontStyle}>Participated in the development and maintenance of the JSONClasses open-source project, responsible for optimizing data modeling, validation, and CRUD operation logic.</div>
            </AnimatedDiv>
            <AnimatedDiv>
            <div className='rubik-normal' style={fontStyle}>Improved data validation rules and model design to enhance the framework's performance and scalability in handling complex data structures.</div>
            </AnimatedDiv>
            <AnimatedDiv>
            <div style={gridSkills}>
                {softwareSkills.skills.map((i, s) => (
                    <SkillContainer key={s}>
                        {i}
                    </SkillContainer>
                ))}
            </div>
            </AnimatedDiv>
            
            <div style={line}></div>
            
            
            <LineContainer left={'Weilang Network Technology Inc - Internship'} right={"Dec 2020 - Mar 2021 "}/>
            
            
            <LineContainer left={"Full Stack Developer"} right={"GuangZhou, GuangDong"} color='#0FFF9D'/>
            
            <AnimatedDiv>
            <div className='rubik-normal' style={fontStyle}>Collaborated with clients to define requirements and developed backend solutions, including API development for data storage and retrieval, resulting in a 29% increase in efficiency.</div>
            </AnimatedDiv>
            <AnimatedDiv>
            <div className='rubik-normal' style={fontStyle}>Contributed to frontend development for web and iOS applications, visualizing data based on user specifications.</div>
            </AnimatedDiv>
            <AnimatedDiv>
            <div style={gridSkills}>
                {fullstackSkills.skills.map((i, s) => (
                    <SkillContainer key={s}>
                        {i}
                    </SkillContainer>
                ))}
            </div>
            </AnimatedDiv>
            
            <div style={line}></div>
            
        </div>
    )
}

export default ExContent