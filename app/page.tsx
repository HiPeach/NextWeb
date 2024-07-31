import React, { useEffect, useState } from 'react';  
  
function IndexPage() {  
  const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });  
  
  useEffect(() => {  
    const startDate = new Date('2022-12-25T00:00:00Z');  
    const updateTimer = () => {  
      const now = new Date();  
      const diff = now - startDate;  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));  
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));  
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);  
  
      setTimeElapsed({ days, hours, minutes, seconds });  
    };  
  
    const timer = setInterval(updateTimer, 1000);  
  
    return () => clearInterval(timer);  
  }, []);  
  
  return (  
    <div style={{ backgroundColor: '#fafeff', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', margin: 0, padding: 0 }}>  
      <div style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: '#fff', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>  
        <span>HiPeach</span>  
        <div>  
          <a href="#">Blog</a>  
          <a href="#">Github</a>  
        </div>  
      </div>  
      <div style={{ marginTop: '60px', textAlign: 'center' }}>  
        <p>Hi 👋</p>  
        <div style={{ backgroundColor: '#bfdbfe', padding: '10px 20px', borderRadius: '10px' }}>Peach</div>  
      </div>  
      <footer style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#fff', padding: '10px 20px', textAlign: 'center' }}>  
        <p>Copyright © 2022 - 2024 HiPeach Inc. All Rights Reserved.</p>  
        <p>已运行{timeElapsed.days}天{timeElapsed.hours}时{timeElapsed.minutes}分{timeElapsed.seconds}秒</p>  
        <a href="#" style={{ margin: '0 10px' }}>桂ICP备2023000849号-1</a>  
      </footer>  
    </div>  
  );  
}  
  
export default IndexPage;