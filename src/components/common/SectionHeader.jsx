import React from 'react';

export default function SectionHeader({
  eyebrow,
  heading,
  subtext,
  align = 'left',
  light = false,
  className = '',
}) {
  const alignClass = align === 'center' ? 'text-center items-center' : align === 'right' ? 'text-right items-end' : 'text-left items-start';
  const textColor = light ? 'text-[#FFFDF9]' : 'text-[#241A17]';
  const subtextColor = light ? 'text-[#FFFDF9]/70' : 'text-[#302C29]/70';
  const eyebrowColor = light ? 'text-[#F7F1E8]/60' : 'text-[#A85C3A]';

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className={`eyebrow ${eyebrowColor}`}>{eyebrow}</span>
      )}
      {heading && (
        <h2 className={`display-heading whitespace-pre-line text-[clamp(2.25rem,4vw,3.5rem)] ${textColor}`}>
          {heading}
        </h2>
      )}
      {subtext && (
        <p className={`font-sans text-base md:text-lg leading-relaxed max-w-xl ${align === 'center' ? 'mx-auto' : ''} ${subtextColor}`}>
          {subtext}
        </p>
      )}
    </div>
  );
}
