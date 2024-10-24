import React, { useState } from 'react';

const Sidebar = ({ sector, industry, fullTimeEmployees, marketCap, companyName, companySite, currency }) => {
  const [width, setWidth] = useState(360);
  const [isResizing, setIsResizing] = useState(false);

  const minWidth = 250;
  const maxWidth = 450;

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleMouseMove = (e) => {
    if (isResizing) {
      const newWidth = e.clientX;
      if (newWidth > minWidth && newWidth < maxWidth) {
        setWidth(newWidth);
      }
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  React.useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  });  // Only update event listeners when resizing

  return (
    <div className="flex h-screen">
      {/* Sidebar container */}
      <div
        className='bg-[#0b082a] pr-2 pl-3 overflow-y-auto scrollbar-hide'  // Applying custom class to hide scrollbar
        style={{ width: `${width}px`, transition: isResizing ? 'none' : 'width 0.2s', height: '100vh' }} // 100vh for full screen height
      >
        <div className='px-[5px] py-[30px] flex items-center justify-center border-b border-[#EDEDED] border-opacity-30'>
          <h1 className='text-[#c7cad8] text-[25px] leading-[24px] font-extrabold cursor-pointer'> Ticker Predictor </h1>
        </div>
        {/* Display the company details */}
        <div className='pb-4 text-[#c7cad8] leading-7 bg-[#06061d] pl-5 mt-7 rounded-lg'>
          <h2 className='font-bold py-[16px] text-[16px]'> Company Details </h2>
          <p><strong> Company - </strong> {companyName || '--'}</p>
          <p><strong> Sector - </strong> {sector || '--'}</p>
          <p><strong> Industry - </strong> {industry || '--'}</p>
          <p><strong> Full-Time Employees - </strong> {Intl.NumberFormat('en-US').format(fullTimeEmployees || '--')}</p>
          <p><strong> Market Cap - </strong> {Intl.NumberFormat('en-US').format(marketCap || '--')} {currency}</p>
        </div>

        <button className='mb-6 p-4 ml-12 mt-10 rounded-lg text-[#c7cad8] border-b border-[#EDEDED] border-opacity-70 w-3/5 transition ease-in-out bg-[#06061d] delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-400'><a href={companySite} target="_blank" rel="noopener noreferrer "><strong>Company Website</strong></a></button>

        {/* Duplicate section for demo */}
        <div className='flex-col items-center gap-[15px] py-4'>
          <p className='text-[20px] leading-[10px] py-2 pr-[20px] font-bold mb-4 text-[#c7cad8]'>Contributors</p>
          <div className='grid grid-cols-2 bg-[#06061d] rounded-lg mb-4'>
            <p className='text-[15px] py-3 px-3 pr-[20px] font-bold text-[#c7cad8]'>
              Debasish Ray
            </p>
            <a className='text-[15px] py-3 px-3 pr-[20px] font-bold text-[#c7cad8] text-right hover:underline' href="https://github.com/debasishray16" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-github"> Github </i> 
            </a>
          </div>
          <div className='grid grid-cols-2 bg-[#06061d] rounded-lg'>
            <p className='text-[15px] py-3 px-3 pr-[20px] font-bold text-[#c7cad8]'>
              Utkarsh Raj Sinha
            </p>
            <a className='text-[15px] py-3 px-3 pr-[20px] font-bold text-[#c7cad8] text-right hover:underline' href='https://github.com/gamecoder08' target="_blank" rel="noopener noreferrer">
            <i class="bi bi-github"> Github </i> 
            </a>
          </div>
        </div>
      </div>

      {/* Resizing handle */}
      <div className="flex flex-col items-center justify-center w-3 bg-[#07051b] cursor-ew-resize" onMouseDown={handleMouseDown}>
        <span className="w-1 h-1 bg-gray-500 rounded-full mb-1"></span>
        <span className="w-1 h-1 bg-gray-500 rounded-full mb-1"></span>
        <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
      </div>
    </div>
  );
};

export default Sidebar;