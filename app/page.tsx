"use client";

import React, { useEffect, useState } from 'react';

const Home = () => {
  const [greeting, setGreeting] = useState('');

  const greetings = {
    zh: '你好',        // 中文
    en: 'Hello',       // 英语
    ko: '안녕하세요',   // 韩语
    fr: 'Bonjour',     // 法语
    de: 'Hallo',       // 德语
    ja: 'こんにちは',   // 日语
    pt: 'Olá',         // 葡萄牙语
    es: 'Hola',        // 西班牙语
    it: 'Ciao',        // 意大利语
    vi: 'Xin chào',    // 越南语
    id: 'Halo',        // 印尼语
    sv: 'Hej',         // 瑞典语
    no: 'Hei',         // 挪威语
    sk: 'Ahoj',        // 斯洛伐克语
  };

  useEffect(() => {
    const randomKey = Object.keys(greetings)[Math.floor(Math.random() * Object.keys(greetings).length)] as keyof typeof greetings;
    setGreeting(greetings[randomKey]);
  }, []);

  const handleGreetingClick = () => {
    setGreeting(greetings['en']);
  };

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
        <h1 
          style={{ margin: 0, fontSize: '48px', cursor: 'pointer', transition: 'all 0.5s ease', fontFamily: 'hello', fontWeight: '400', marginBottom: '10px' }} 
          onClick={handleGreetingClick}
        >👋 {greeting}
        </h1>
        <h2 style={{ margin: 0, fontSize: '48px', fontWeight: 'bold' }}>
          I'm <span style={{ backgroundColor: '#B0CBE6', borderRadius: '8px', padding: '10px', margin: '10px 0', fontSize: '45px' }}>Peach</span>
        </h2>
      </main>

      {/* 页脚 */}
      <footer style={{ padding: '20px', textAlign: 'center', color: '#7d7d7d' }}>
        <p>
          <a href="https://icp.gov.moe/?keyword=20250001" style={{ textDecoration: 'none', color: '#7d7d7d' }}>萌ICP备20250001号</a>
        </p>
        <p>
          <a href="https://beian.miit.gov.cn/" style={{ textDecoration: 'none', color: '#7d7d7d' }}>桂ICP备2023000849号-1</a>
        </p>
        <p><strong>Copyright ©</strong> 2022 - 2025 HiPeach Inc.</p>
      </footer>
    </div>
  );
};

export default Home;