import React, { useEffect, useState } from 'react';  
  
const IndexPage = () => {  
  const [timeElapsed, setTimeElapsed] = useState('已运行0天0时0分0秒');  
  
  useEffect(() => {  
    const startTime = new Date('2022-12-25T00:00:00Z').getTime(); // 获取UTC时间的毫秒数  
  
    const timer = setInterval(() => {  
      const now = new Date().getTime(); // 获取当前时间的毫秒数  
      const diff = now - startTime; // 计算毫秒数差  
  
      // 将毫秒数转换为天、小时、分钟和秒  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));  
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));  
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);  
  
      // 更新页面上的时间显示  
      setTimeElapsed(`已运行${days}天${hours}时${minutes}分${seconds}秒`);  
    }, 1000); // 每秒更新一次  
  
    // 清理函数，组件卸载时取消定时器  
    return () => clearInterval(timer);  
  }, []); // 依赖数组为空，表示只运行一次  
  
  return (  
    <div style={{  
      display: 'flex',  
      flexDirection: 'column',  
      alignItems: 'center',  
      justifyContent: 'center',  
      height: '100vh',  
      backgroundColor: '#fafeff',  
      padding: '20px',  
      boxSizing: 'border-box',  
      fontFamily: 'Arial, sans-serif'  
    }}>  
      <div style={{  
        position: 'sticky',  
        top: 0,  
        backgroundColor: '#fff',  
        zIndex: 1000,  
        width: '100%',  
        display: 'flex',  
        justifyContent: 'space-between',  
        padding: '10px 20px',  
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'  
      }}>  
        <div>HiPeach</div>  
        <div>  
          <a href="#">Blog</a>  
          <a href="#">Github</a>  
        </div>  
      </div>  
      <div style={{ fontSize: '24px', marginTop: '50px' }}>Hi 👋</div>  
      <div style={{  
        fontSize: '24px',  
        padding: '10px 20px',  
        borderRadius: '10px',  
        backgroundColor: '#bfdbfe',  
        marginTop: '20px'  
      }}>Peach</div>  
      <div style={{  
        position: 'sticky',  
        bottom: 0,  
        backgroundColor: '#fff',  
        zIndex: 1000,  
        width: '100%',  
        padding: '10px 20px',  
        borderTop: '1px solid #eee',  
        display: 'flex',  
        flexDirection: 'column',  
        alignItems: 'center'  
      }}>  
        <div>Copyright © 2022 - 2024 HiPeach Inc. All Rights Reserved.</div>  
        <div>{timeElapsed}</div>  
        <div>  
          <a href="#" style={{ marginRight: '10px' }}>桂ICP备2023000849号-1</a>  
        </div>  
      </div>  
    </div>  
  );    
};  
  
export default IndexPage;