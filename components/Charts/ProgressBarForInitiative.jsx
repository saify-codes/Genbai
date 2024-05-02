import React from 'react';

const ProgressBarForInitiative = ({ total=100, valueOne=40, valueTwo=20 }) => {
  // Calculate percentage
  const valueOnePercent = (valueOne / total) * 100;
  const valueTwoPercent = (valueTwo / total) * 100;

  return (
    <div className='flex rounded-full bg-[#D5E2F6] h-3 w-full relative'>
      <div className='rounded-full absolute left-0 top-0 h-3 z-[15] bg-[#0EB498]' style={{ width: `${valueOnePercent}%`, }} />
      <div className='rounded-full absolute left-0 top-0 h-3 z-[9] bg-[#11E4C1]' style={{ width: `${valueTwoPercent + valueOnePercent}%`, }} />
    </div>
  );
};

export default ProgressBarForInitiative;
