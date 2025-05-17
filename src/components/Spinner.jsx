import React from 'react'

function Spinner({loading}) {
  if (!loading) return null;
  
  return (
    <div className="modern-loader-container">
      <div className="modern-loader">
        <div className="loader-circle"></div>
        <div className="loader-line-mask">
          <div className="loader-line"></div>
        </div>
        <svg className="loader-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <circle className="loader-inner-circle" cx="60" cy="60" r="30" />
        </svg>
      </div>
      
      <style jsx>{`
        .modern-loader-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 200px;
        }
        
        .modern-loader {
          position: relative;
          width: 80px;
          height: 80px;
        }
        
        .loader-circle {
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: rgba(27, 142, 242, 0.1);
        }
        
        .loader-line-mask {
          position: absolute;
          left: 0;
          top: 0;
          width: 40px;
          height: 80px;
          overflow: hidden;
          transform-origin: 40px center;
          mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
          -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
          animation: rotate 1.2s infinite linear;
        }
        
        .loader-line {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          box-sizing: border-box;
          border: 3px solid transparent;
          border-top-color: #1B8EF2;
          border-left-color: #1B8EF2;
          border-right-color: #1B8EF2;
        }
        
        .loader-svg {
          position: absolute;
          left: 0;
          top: 0;
          width: 80px;
          height: 80px;
          animation: rotate-reverse 2s linear infinite;
        }
        
        .loader-inner-circle {
          fill: none;
          stroke: rgba(27, 142, 242, 0.3);
          stroke-width: 2;
          stroke-dasharray: 0, 0, 6, 12;
          stroke-dashoffset: 5;
          animation: dash 1.8s ease-in-out infinite;
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes rotate-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        
        @keyframes dash {
          0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
          50% { stroke-dasharray: 90, 150; stroke-dashoffset: -45; }
          100% { stroke-dasharray: 90, 150; stroke-dashoffset: -135; }
        }
      `}</style>
    </div>
  )
}

export default Spinner