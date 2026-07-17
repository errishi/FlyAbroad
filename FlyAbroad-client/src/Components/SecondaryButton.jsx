import React from 'react'

const SecondaryButton = ({ name, isCurrent, onClick, type = 'button', className = '', asChild = false, children }) => {
  const baseClass = `border lg:text-[14px] md:text-[12px] text-[12px] w-fit px-4 py-2 rounded-md cursor-pointer ${className}`;
  const activeClass = 'bg-[#09585e] text-white';
  const inactiveClass = 'border border-gray-600 text-[#818C96] hover:text-[#FD661F]';
  const buttonClass = `${baseClass} ${isCurrent ? activeClass : inactiveClass}`;
  const content = children ?? name;

  if (asChild) {
    return (
      <span className={buttonClass} onClick={onClick}>
        {content}
      </span>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClass}
    >
      {content}
    </button>
  )
}

export default SecondaryButton;