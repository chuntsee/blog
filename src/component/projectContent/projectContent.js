import React, { useEffect, useState } from "react";
import AnimatedDiv from "../animatedComponent";
import mobileProject from '../projectImage/WechatIMG71.jpg'
import qsparser from '../projectImage/WechatIMG72.jpg'
import webProject from '../projectImage/WechatIMG75.jpg'
import research from '../projectImage/WechatIMG76.jpg'
import jsonclasses from '../projectImage/WechatIMG78.jpg'
import jsonWeb from '../projectImage/WechatIMG79.jpg'
import { motion } from "framer-motion";
import './projectContent.css'
const ProjectContentContainer = ({project}) =>{
    const [isOpen, setDia] = useState(false)
    const openDia = () => setDia(true)
    const closeDia = () => setDia(false)
    const handleDiaClose = (e) => {
        // 只有当点击背景层（外部）时才关闭模态框
        if (e.target === e.currentTarget) {
            closeDia();
        }
    };
    useEffect(()=>{
        if(isOpen){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'auto'
        }
        return ()=>{
            document.body.style.overflow = 'auto'
        }
    },[isOpen])
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
    }
    const projectTitleStyle = {
        fontSize: '22px', margin:'18px 0', display:'flex',justifyContent:'center'
    }
    const projectSubTitleStyle = {
        ...projectTitleStyle,
        color: '#0FFF9D'
    }
    const projectDesStyle = {
        fontSize: '22px',
    }
    const linkStyle = {
        ...projectDesStyle,
        color: '#0FFF9D',
        marginTop: '10px',
        cursor: 'pointer',
        
    }
    const diaStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // 半透明背景
        backdropFilter: 'blur(5px)', // 背景模糊
        display: 'flex',
        justifyContent: 'center',
        zIndex: 1000, // 确保模态框位于最上层
        boxSizing: 'border-box',
        overflowY:'scroll'
    };

    return (
        <>
        <div style={containerStyle}>
            <AnimatedDiv>
                <ProjectImgContainer src={project.src} alt={project.alt} onClick={openDia}/>
            </AnimatedDiv>
                <AnimatedDiv width="100%">
                <div className="archivo-black-regular" style={projectTitleStyle}>{project.title}</div>
                </AnimatedDiv>
                <AnimatedDiv>
                <div className='rubik-normal'style={projectSubTitleStyle}>{project.subTitle}</div>
                </AnimatedDiv>
                <AnimatedDiv>
                <div className= 'rubik-normal' style={projectDesStyle}>{project.des}</div>
                </AnimatedDiv>
                <AnimatedDiv>
                <motion.div 
                className='rubik-normal' 
                style={linkStyle}
                whileHover={{textDecoration:'underline'}}
                whileTap={{scale: 0.9}}
                onClick={openDia}
                >{'Learn More >'}</motion.div>
                </AnimatedDiv>
        </div>
        
        {isOpen && (
            <div style={diaStyle} onClick={handleDiaClose}>
                <motion.div 
                    initial='hidden'
                    animate = 'visible'
                    transition={{transition}}
                    variants={animateVariants}
                    >
                         <ProjectDetail project={project} onClose={closeDia}/>
                </motion.div>
            </div>
        )}
        </>
    )
}

const ProjectImgContainer = ({src, alt, onClick}) => {
    const containerStyle= {
        borderRadius: '15px',
        flex: 1,
        backgroundColor: '#232323',
        padding: '40px 40px 0px 40px',
        boxSizing: 'border-box',
        cursor: 'pointer',
        overflow:'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',      // 限制容器最大宽度

    }
    const imageStyle = {
        borderRadius: '15px',     // 保持边框圆角效果
        objectFit: 'cover',       // 确保图片填充容器
        width: '100%',            // 图片宽度占据容器的100%
        maxWidth: '400px',        // 最大宽度限制
        aspectRatio: '16 / 9',     // 统一宽高比例
    }
    return(
        <div style={containerStyle} onClick={onClick}>
            <motion.img src={src} alt={alt} style={imageStyle}
            whileHover={{scale: 1.1, rotate:2.5,transition:0.3}}
            whileTap={{scale:0.9}}
            />
        </div>
    )
}



const animateVariants= {
    hidden: {opacity: 0, y: -50 },
    visible: {opacity:1, y: 0},
}
const transition = {
    duration: 0.5,  // 动画持续时间
};

const ProjectDetail = ({project,onClose}) => {

    const titileStyle = {
        fontSize: '35px',
        marginTop: '35px'
    }
    const contentTextStyle ={
        fontSize: '18px',
        marginBottom:'20px',
        
    }
    const handleClick = () =>{
        window.open(project.link, '_blank')
    }
    return(
        <div className="project-container">
            <img src={project.src} alt={project.alt} style={{borderRadius:'15px'}}/>
            <div className='archivo-black-regular' style={titileStyle}>{project.title}</div>
            <div className='rubik-normal' style={{...contentTextStyle, color:'#0FFF9D',marginTop:'20px',}}>{project.subTitle}</div>
            <div>
                {project.detail.map((p,index) => (
                    <div key={index} className='rubik-normal' style={contentTextStyle}>
                        {p}
                    </div>
                ))}
            </div>
            {project.link &&(
                <div>
                    <Link action={handleClick}>{'Click to view detail >'}</Link>
                </div>
            )}

            <div style={{ textAlign: 'right' }}> {/* 新增的 div */}
                <Link action={onClose}>{'Exit >'}</Link>
            </div>
        </div>
    )
}

const Link = ({children, action}) => {
    const exitStyle = {
        fontSize:'18px',
        color:'#0FFF9D',
        marginTop: '10px',
        cursor: 'pointer',
        display:'inline-block'
    }
    return (    
    <motion.div
        className='rubik-normal'
        style={exitStyle}
        whileHover={{ textDecoration: 'underline' }}
        onClick={action}
        >{children}
    </motion.div>)

}

const LineContainer = ({children}) =>{
    const lineStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', // 设置列数和最小宽度
        gap: '40px', // 设置间距
        alignItems: 'flex-start', // 垂直居中对齐
        boxSizing: 'border-box',

    }
    return(
        <div style={lineStyle}>
            {children}
        </div>
    )
}

const ProjectContent = () =>{
    const contentStyle = {
        marginTop: '25px',
        boxSizing:'border-box'
    }
    const projects = [
        {src: mobileProject, alt:'Mobile Project', title: ' Online Order Assistant', subTitle:'JavaScript - HTML - CSS - NoSQL',des:'I independently developed a real-world project that has been deployed and is currently used by several Asian supermarkets in Australia.',
            detail:['This mobile application is designed to provide convenient online order management services for Asian supermarkets in Australia. ',
                'The app offers several key features, including the ability to record staff and user information, manage store personnel data, upload and save order information, search for order details, change order statuses, search for customer information, and view pending orders.',
                'I developed the entire software, from design to deployment, independently. It has been officially launched and is currently being used by several Asian supermarkets across Australia.',
                'During my part-time experience at an Asian supermarket, I discovered a common issue: most supermarkets in Melbourne were using paper and pen to manage group orders. This method was not only time-consuming but also prone to errors. ',
                'To address this problem, I designed and developed this mobile app based on customer needs, currently available in Chinese. The frontend is built using JavaScript, HTML, and CSS, with NoSQL databases for data storage and local storage to enhance efficiency.',
            ]
        },
        {src: qsparser, alt:'Open Source Project', title: 'qsparser', subTitle:'Python',des:'This query string processing library is an open-source project designed to simplify the parsing and generation of URL query parameters.',
            detail:['This open-source project is a library designed for handling URL query strings, aimed at simplifying the parsing and generation of query parameters. ',
                'When handling GET requests, developers often need to convert parameters into query string format. This library offers a convenient stringify function, making it easier to construct URLs and seamlessly append user filtering conditions and pagination information.',
                'At the same time, when a request is received, parsing the query string to extract the required parameters becomes crucial. By using the parse function, developers can quickly convert the query string back into dictionary format, facilitating access and manipulation of the data. ',
                'The library also supports nested dictionaries and lists, allowing developers to organize complex data structures more clearly when passing information.',
                'In designing RESTful APIs, query strings are frequently used to convey parameters. This library can assist developers in constructing API requests and responses, ensuring the correct parsing and generation of parameters, thereby enhancing the usability of the API.'
            ],
            link:'https://pypi.org/project/qsparser/'
        },
        {src: webProject, alt:'Web Solution For Medical Software ', title: 'Web Solution For Medical Software', subTitle:'APIFlask - PyMSSQL - React',des:'Web-based application that allows General Practitioners to conveniently access and manage their appointment schedules from desktops or mobile devices.',
            detail:['This application addresses the limitations of accessing appointment schedules, allowing GPs to conveniently view and manage their appointments from any device with a web browser. ',
                'To enable interaction with the Windows SQL Server database used by the Best Practice medical system, I utilized pymssql to execute SQL queries that retrieve essential appointment data. ',
                'The backend was built using APIFlask, facilitating the creation of a RESTful API for seamless communication between the frontend and backend.',
                "For the frontend, I employed React to create an intuitive user interface that provides GPs with easy access to their appointment details. ",
                "The application offers features such as the ability to view a GP's appointment book, access specific patient appointment histories, and identify important dates for phone consultations.",
                'Additionally, it highlights patients without Medicare cards to streamline administrative processes and provides appointment statistics, including the total number of appointments and expected workload duration.',
                'A key feature is the timesheet functionality, which helps GPs easily visualize and manage their schedules.'
            ],
            
        },
        {src: research, alt:'research for diverse users', title: 'Research For Diverse End-users', subTitle:'React - Persona - COMPSAC 2022',des:'This article has been published, presenting a novel tool designed to assist software developers in addressing diverse end-user characteristics and needs.',
            detail:['In this paper, I served as an author in designing and developing a user-centric tool aimed at supporting the diverse needs of end-users.',
                'Collaborating with the team, we created a curated persona and design guidelines tool to assist developers in considering and meeting these diverse end-user needs throughout the software development process.',
                'We conducted surveys and interviews with different user groups, supplemented by a literature review, to create multiple representative personas. ',
                'These personas reflect various user demographics, showcasing their unique needs and challenges. The visualization of these personas is achieved through a web interface built with React, which enables developers to gain a better understanding and empathy for the diverse backgrounds of users.',
                "The research evaluated with 23 real-world software developers demonstrated that employing human-centric persona and guideline tools in the early stages of software development can significantly reduce user bias and enhance software accessibility. ",
                
                
            ],
            link: 'https://www.monash.edu/it/humanise-lab/research/a-curated-personas-and-design-guidelines-tool-for-better-supporting-diverse-end-users'
            
        },
        {src: jsonclasses, alt:'jsonclasses', title: 'JSONClasses', subTitle:'Python - ORM',des:'Contributed to the development and maintenance of the JSONClasses open-source project, focusing on optimizing data modeling, validation, and CRUD operation logic. ',
            detail:['JSONClasses is a framework designed to simplify data modeling, validation, and CRUD operations, allowing developers to quickly create efficient backend services through a declarative approach.',
                'It leverages Python type hints, enabling developers to define data models in an intuitive way that enhances both readability and maintainability of the code.',
                'By utilizing JSONClasses, developers can effortlessly construct complex data structures and achieve seamless interactions with databases through streamlined CRUD operations.',
                'During my involvement in the development of JSONClasses, I primarily focused on optimizing data modeling and validation logic.',
                'I implemented a decorator-based mechanism that allows developers to specify validation conditions directly within the model definitions, eliminating the need for separate validation logic. This approach not only improved development efficiency but also minimized the likelihood of errors.',
                'Additionally, I contributed to enhancing CRUD operations to reduce the amount of code developers need to write.',
                'My contributions in this area included designing and implementing an efficient query interface, enabling developers to interact with the database using simple function calls, while the framework automatically generates the underlying SQL queries.'
                
            ],
            link: 'https://pypi.org/project/jsonclasses/'
            
        },
        {src: jsonWeb, alt:'web for jsonclasses', title: 'Website of JSONClasses ', subTitle:'NextJS - React - TypeScript',des:'Participated in the development and design of the JSONClasses website, providing users with examples of usage and modifications to its features.',
            detail:['The JSONClasses website was developed using several modern technologies to create an efficient and user-friendly platform for showcasing the capabilities and usage of the JSONClasses framework.',
                'The primary framework utilized is Next.js, a widely-used React framework that enables server-side rendering and static site generation, enhancing both performance and SEO. ',
                'The website leverages React to build interactive user interfaces, providing a seamless experience for users',
                'To improve readability, the integration of react-syntax-highlighter facilitates the display of code snippets with syntax highlighting, making it easier for users to comprehend examples.',
                'For styling and design, Linaria is employed, a zero-runtime CSS-in-JS library that allows developers to write CSS directly within JavaScript files. This approach enhances maintainability and performance by eliminating the need for a separate CSS file at runtime.',
                
            ]
            
        }
    ]
    return (
        <div style={contentStyle}>
             <LineContainer>
                {projects.map((project, index) => (
                        <ProjectContentContainer key={index} project={project} />
                    ))}
            </LineContainer>
        </div>
    )
}

export default ProjectContent