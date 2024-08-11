"use client";

import React, { useEffect, useState } from 'react';

const Home = () => {
  // 计算运行时间
  const [runTime, setRunTime] = useState('');

  useEffect(() => {
    const startDate = new Date('2022-12-25T00:00:00');
    const updateTime = () => {
      const now = new Date();
      const diff = now - startDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setRunTime(`已运行${days}天${hours}时${minutes}分${seconds}秒`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: 'hsl(205deg, 20%, 94%)', color: '#333', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
      {/* 顶栏 */}
      <header style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>HiPeach</span>
        <nav>
          <a href="https://blog.opeach.cn/" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>Blog</a>
          <a href="https://github.com/HiPeach/" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>Github</a>
        </nav>
      </header>

      {/* 中间内容 */}
      <main style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h1 style={{ margin: 0, fontSize: '48px' }}>👋 Hello</h1>
        <h2 style={{ margin: 0, fontSize: '48px' }}>
          I'm <span style={{ backgroundColor: '#B0CBE6', borderRadius: '8px', padding: '10px', margin: '10px 0', fontSize: '45px', fontWeight: 'bold' }}>Peach</span>
        </h2>
      </main>

      {/* 页脚 */}
      <footer style={{ padding: '20px', textAlign: 'center', color: '#7d7d7d' }}>
        <p>{runTime}</p>
        <p>
          <a href="https://beian.miit.gov.cn/" style={{ textDecoration: 'none', color: '#7d7d7d' }}>桂ICP备2023000849号-1</a>
        </p>
        <p><strong>Copyright ©</strong> 2022 - 2024 HiPeach Inc.</p>
      </footer>
    </div>
  );
};

export default Home;
