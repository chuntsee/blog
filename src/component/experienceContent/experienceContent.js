import React from "react";
import { SkillContainer } from "../aboutContent/aboutContent";
import AnimatedDiv from "../animatedComponent";
import './experienceContent.css'
const LineContainer = ({left,right,color='white'}) =>{


    return (
        <div className="exp-line-style">
            <AnimatedDiv>
            <div className='archivo-black-regular exp-line-font' style={{ color:color}}>{left}</div>
            </AnimatedDiv>
            <AnimatedDiv>
            <div className="exp-line-font rubik-normal">{right}</div>
            </AnimatedDiv>
        </div>
    )
}

const ExContent = ()=>{

    const skillsStore = {
        skills:['Communication', 'Problem Solving', 'Teamwork', 'Sales Management','Multitasking']
    }
    const fullstackSkills = {
        skills: ['React', 'Python','Swift', 'TypeScript', 'JavaScript','MongoDB', 'NodeJS','Flask']
    }
    const softwareSkills = {
        skills: ['Python','Next.js','React','SQL','NoSQL','REST API','Data Validation','Data Modeling']
    }

    return(
        <div>
            
            <LineContainer left={'Aussie Family Mart'} right={'May 2024 - Aug 2024'}/>


            <LineContainer left={'Store Cashier'} right={'Melbourne, VIC'} color='#0FFF9D'/>

            <AnimatedDiv>
            <div className='rubik-normal exp-font-size'>In this role, I restocked shelves, assisted customers with product inquiries, operated the cash register, and processed transactions.</div>
            </AnimatedDiv>
            <AnimatedDiv>
            <div className="exp-grid-skill">
                {skillsStore.skills.map((i, s) => (
                    <SkillContainer key={s}>
                        {i}
                    </SkillContainer>
                ))}
            </div>
            </AnimatedDiv>
            
            <div className="exp-line"></div>
            
            
            <LineContainer left={'Fillmula Inc - Internship'} right={"Dec 2021 - Jul 2022 "}/>
            
            
            <LineContainer left={"Software Engineering"} right={"GuangZhou, GuangDong"} color='#0FFF9D'/>
            
            <AnimatedDiv>
            <div className='rubik-normal exp-font-size' >Participated in the development and maintenance of the JSONClasses open-source project, responsible for optimizing data modeling, validation, and CRUD operation logic.</div>
            </AnimatedDiv>
            <AnimatedDiv>
            <div className='rubik-normal exp-font-size' >Improved data validation rules and model design to enhance the framework's performance and scalability in handling complex data structures.</div>
            </AnimatedDiv>
            <AnimatedDiv>
            <div className="exp-grid-skill">
                {softwareSkills.skills.map((i, s) => (
                    <SkillContainer key={s}>
                        {i}
                    </SkillContainer>
                ))}
            </div>
            </AnimatedDiv>
            
            <div className="exp-line"></div>
            
            
            <LineContainer left={'Weilang Network Technology Inc - Internship'} right={"Dec 2020 - Mar 2021 "}/>
            
            
            <LineContainer left={"Full Stack Developer"} right={"GuangZhou, GuangDong"} color='#0FFF9D'/>
            
            <AnimatedDiv>
            <div className='rubik-normal exp-font-size' >Collaborated with clients to define requirements and developed backend solutions, including API development for data storage and retrieval, resulting in a 29% increase in efficiency.</div>
            </AnimatedDiv>
            <AnimatedDiv>
            <div className='rubik-normal exp-font-size' >Contributed to frontend development for web and iOS applications, visualizing data based on user specifications.</div>
            </AnimatedDiv>
            <AnimatedDiv>
            <div className="exp-grid-skill">
                {fullstackSkills.skills.map((i, s) => (
                    <SkillContainer key={s}>
                        {i}
                    </SkillContainer>
                ))}
            </div>
            </AnimatedDiv>
            
            <div className="exp-line"></div>
            
        </div>
    )
}

export default ExContent