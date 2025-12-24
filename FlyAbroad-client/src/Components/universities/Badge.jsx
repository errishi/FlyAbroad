import React from 'react';

const Badge = ({ children, variant = "default" }) => {
  const variants = {
    default: "bg-slate-100 text-slate-700",
    accent: "bg-[#0B7077]/10 text-[#0B7077]",
  };
  return (
    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${variants[variant]}`}>
      {children}
    </span>
  );
};

export default Badge;