import React, {useEffect, useState}from "react";
import ProfileContent from "../component/profileContent/profileContent";
import TopMenu from "../component/topMenuComponent";
import SectionTitle from "../component/sectionTitleComponent/sectionTitleComponent";
import {AboutContent} from "../component/aboutContent/aboutContent";
import ProjectContent from "../component/projectContent/projectContent";
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ExContent from "../component/experienceContent/experienceContent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedDiv from "../component/animatedComponent";
import { motion } from "framer-motion";
import { Link,Element,scroller} from 'react-scroll';

function ProfilePage(){
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        maxWidth: '1000px',
        margin: '0 auto',
        flexGrow: '1',
        paddingLeft:'55px',
        
    }
    const sectionStyle = {
        marginBottom: '200px',
        width: '100%', // 在小屏幕上使用100%宽度
        boxSizing: 'border-box',

    }
    const imgStyle = {
        width: '25px', height: '25px', borderRadius:'5px',padding:'2px' 
    }
    const contactLine = {
        display: 'flex',  // 确保图标和文字在一行内显示
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '25px',
      };
      
    const clickableArea = {
        display: 'inline-flex',  // 让图标和文字仅占据它们自己的宽度
        cursor: 'pointer',  // 让图标和文字部分显示点击手型
        alignItems: 'center',  // 保证图标和文字对齐
    };
    const email = "chuntsexj@gmail.com"
    const navStyle = {
        position: 'fixed', // 固定在页面左侧
        top: '0', // 距离顶部0
        left: '0', // 距离左侧0
        width: '50px', // 导航的宽度
        height: '100%', // 导航的高度
        display: 'flex',
        flexDirection: 'column', // 竖排菜单项
        alignItems: 'center', // 居中对齐
        paddingTop: '50px', // 上部填充
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)', // 阴影效果
        boxSizing: 'border-box',
        backgroundColor: '#080808',
        
    };
    
    const menuItemStyle = {
        writingMode: 'vertical-rl', // 文字从右到左书写
        transform: 'rotate(180deg)', // 文字旋转180度
        cursor: 'pointer', // 鼠标悬停时显示手型
        color: 'white', // 字体颜色
        fontSize: '18px', // 字体大小
        display: 'flex', // 保证内容可以居中
        alignItems: 'center', // 垂直居中
        justifyContent: 'center', // 水平居中
        width: '100%', // 占满父容器的宽度
        height: 'auto', // 自动调整高度
        padding: '25px 0', // 添加内边距
        boxSizing: 'border-box',
    };
    const selectedMenuItemStyle = {
        ...menuItemStyle,
        backgroundColor: '#232323', // 选中后的背景颜色
        borderLeft: '2px solid #0FFF9D'
    };
    const [selected, setSelected] = useState(null); // 初始选中项

    const handleSetActive = (section) => {
        setSelected(section);
    };

    const handleClick = (section) => {
        // 使用 clickOffset 处理点击事件
        scroller.scrollTo(section, {
            duration: 500,
            delay: 0,
            smooth: 'easeInOut',
            offset: clickOffset // 点击时的偏移量
        });
    };
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['intro','about', 'project', 'experience', 'contact'];
            sections.forEach((section) => {
                const sectionElement = document.getElementById(section);
                if (sectionElement) {
                    const rect = sectionElement.getBoundingClientRect();
                    // 检查 section 是否在视口中
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        handleSetActive(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const clickOffset = -100

    return(
        <div style={containerStyle}>
            <nav style={navStyle}>
            <div style={selected === 'intro' ? selectedMenuItemStyle : menuItemStyle} onClick={() => handleClick('intro')}>
                    <Link
                        to="intro" // 目标 section 的 ID
                        className="rubik-normal"
                        smooth={true} // 启用平滑滚动
                        duration={500} // 动画持续时间
                        spy={true}
                        onSetActive={() => handleSetActive('intro')}
                        offset= {clickOffset}
                    >
                        Intro
                    </Link>
                </div>
                <div style={selected === 'about' ? selectedMenuItemStyle : menuItemStyle}onClick={() => handleClick('about')}>
                    <Link
                        to="about" // 目标 section 的 ID
                        className="rubik-normal"
                        smooth={true} // 启用平滑滚动
                        duration={500} // 动画持续时间
                        spy={true}
                        onSetActive={() => handleSetActive('about')}
                        offset= {clickOffset}
                        
                    >
                        About
                    </Link>
                </div>
                <div style={selected === 'project' ? selectedMenuItemStyle : menuItemStyle} onClick={() => handleClick('project')}>
                    <Link
                        to="project"
                        className="rubik-normal"
                        smooth={true}
                        duration={500}
                        spy={true}
                        onSetActive={() => handleSetActive('project')}
                        offset= {clickOffset}
                    >
                        Project
                    </Link>
                </div>
                <div style={selected === 'experience' ? selectedMenuItemStyle : menuItemStyle} onClick={() => handleClick('experience')}>
                    <Link
                        to="experience"
                        className="rubik-normal"
                        smooth={true}
                        duration={500}
                        spy={true}
                        onSetActive={() => handleSetActive('experience')}
                        offset= {clickOffset}
                    >
                        Experience
                    </Link>
                </div>
                <div style={selected === 'contact' ? selectedMenuItemStyle : menuItemStyle} onClick={() => handleClick('contact')}>
                    <Link
                        className="rubik-normal"
                        to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        onSetActive={() => handleSetActive('contact')}
                        offset= {clickOffset}
                    >
                        Contact
                    </Link>
                </div>
            </nav>
            <header>
                <TopMenu/>
            </header>
            <Element name="intro" id="intro" style={{marginBottom:'100px'}}>
                <ProfileContent/>
            </Element>
            <Element name="about" id = "about" style={sectionStyle}>
                <SectionTitle title={'About'} lineDir={'right'} />
                <AboutContent />
            </Element>
            <Element name="project" id="project" style={sectionStyle}>
                <SectionTitle title={'Project'} lineDir={'left'} />
                <ProjectContent/>
            </Element>
            <Element name="experience" id="experience" style={sectionStyle}>
                <SectionTitle title={'Experience'} lineDir={'right'} /> 
                <ExContent/>
            </Element>
            <Element name="contact" id="contact" style={{...sectionStyle,marginBottom:'300px'}}>
                
                <AnimatedDiv width="100%">
                <div className='archivo-black-regular'style={{fontSize:'4.5rem', justifyContent:'center', display:'flex'}}>
                    Contact
                </div>
                </AnimatedDiv>
                
                <motion.div
                    style={contactLine}
                >
                    <AnimatedDiv>
                        <div style={{ display: 'inline-flex', alignItems: 'center',cursor:'default'}}>
                            <FontAwesomeIcon icon={faPhone} style={imgStyle} />
                            <div className='rubik-normal' style={{ fontSize: '22px', color: 'inherit', marginLeft:'10px' }}>
                                0450685770
                            </div>
                        </div>
                    </AnimatedDiv>
                </motion.div>
                
                
                <motion.div style={{ ...contactLine }}>
                <AnimatedDiv>
                    <motion.div
                        style={{ ...clickableArea }}
                        whileHover={{ color: '#0FFF9D' }}
                        onClick={() => window.location.href = `mailto:${email}`}
                    >
                        <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{ ...imgStyle }}  // 图标样式
                        />
                        <div
                        className='rubik-normal'
                        style={{ fontSize: '22px', color: 'inherit', marginLeft: '10px' }}  // 邮箱文字样式
                        >
                        {email}
                        </div>
                    </motion.div>
                    </AnimatedDiv>
                </motion.div>    
            </Element>
            
        </div>
    )
}

export default ProfilePage