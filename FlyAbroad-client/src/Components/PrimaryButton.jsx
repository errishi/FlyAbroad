import React from 'react'

const PrimaryButton = ({ name, url, onClick, type = 'button', className = '', asChild = false, children }) => {
  const buttonClass = `bg-[#09585e] w-fit rounded-md text-white hover:bg-[#0B7077] transition-all cursor-pointer px-5 py-2 ${className}`;
  const content = children ?? name;

  if (asChild) {
    return (
      <span className={buttonClass} onClick={onClick}>
        {content}
      </span>
    );
  }

  if (url) {
    return (
      <a href={url} className={buttonClass}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClass}>
      {content}
    </button>
  );
}

export default PrimaryButton;