import React from "react";
import linkedinIcon from './icons/linkedin-brands-solid.svg'
import titokIcon from './icons/tiktok-brands-solid.svg'
import { motion } from "framer-motion";
import { ResumeButton } from "./buttonComponent";
const SocialIcon = ({ href, src, alt }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" style={{display:'inline-block', padding:'10px 0',margin:'10px 8px'}}>
            <motion.img
                whileHover={{ scale: 1, backgroundColor: '#0FFF9D' }}
                whileTap={{ scale: 0.9 }}
                src={src}
                alt={alt}
                style={{ width: '25px', height: '25px', backgroundColor: '#7E7E81', borderRadius:'20%' }}
                transition={{ duration: 0.3 }}
            />
        </a>
    );
};
const TopMenu = () => {
    const menuStyle = {
        position: 'fixed', /* 固定在页面顶部 */
        top: '0', /* 距离顶部0 */
        left: '50px', /* 距离左侧0 */
        width: 'calc(100% - 50px)', /* 宽度占满全屏 */
        zIndex: '1000', /* 确保在其他内容之上 */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 0',
        backdropFilter: 'blur(10px)' /* 模糊效果 */
    }
    return (
        <div style={menuStyle}>
            <div style={{paddingLeft:'20px'}}>
            <SocialIcon
                href="https://www.linkedin.com/in/jun-xie-5ab400308"
                src={linkedinIcon}
                alt="Jun Xie's LinkedIn Profile"
            />
            <SocialIcon
                href="https://www.tiktok.com/@junxie76?_t=8qOykFXXXr6&_r=1"
                src={titokIcon}
                alt="Jun Xie's Titok Profile"
            />
            </div>

            <ResumeButton/>
        </div>
    );
};

export default TopMenu;