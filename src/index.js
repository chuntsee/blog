import React from 'react'
import ReactDom from 'react-dom/client'
import ProfilePage from './profilePage/profilePage'
import './index.css'
const root = ReactDom.createRoot(document.getElementById('root')); // 创建根节点
root.render(<ProfilePage />); // 使用新的 render 方法