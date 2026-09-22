import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function ButtonPrimary({ children, to, href, onClick, className = '', showArrow = false }) {
  const base = `inline-flex items-center gap-2 px-6 py-3 bg-[#241A17] text-[#FFFDF9] font-sans text-sm font-medium tracking-wide rounded-[4px] hover:bg-[#302C29] transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A85C3A] focus-visible:ring-offset-2 ${className}`;
  const content = (
    <>
      {children}
      {showArrow && <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />}
    </>
  );
  if (to) return <Link to={to} className={base}>{content}</Link>;
  if (href) return <a href={href} className={base} target="_blank" rel="noopener noreferrer">{content}</a>;
  return <button onClick={onClick} className={base}>{content}</button>;
}

export function ButtonSecondary({ children, to, href, onClick, className = '', showArrow = false }) {
  const base = `inline-flex items-center gap-2 px-6 py-3 border border-[#241A17] text-[#241A17] font-sans text-sm font-medium tracking-wide rounded-[4px] hover:bg-[#241A17] hover:text-[#FFFDF9] transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A85C3A] focus-visible:ring-offset-2 ${className}`;
  const content = (
    <>
      {children}
      {showArrow && <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />}
    </>
  );
  if (to) return <Link to={to} className={base}>{content}</Link>;
  if (href) return <a href={href} className={base} target="_blank" rel="noopener noreferrer">{content}</a>;
  return <button onClick={onClick} className={base}>{content}</button>;
}

export function ButtonText({ children, to, href, onClick, className = '' }) {
  const base = `inline-flex items-center gap-2 font-sans text-sm font-medium text-[#A85C3A] hover:text-[#241A17] transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A85C3A] focus-visible:ring-offset-2 rounded-sm ${className}`;
  const content = (
    <>
      {children}
      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </>
  );
  if (to) return <Link to={to} className={base}>{content}</Link>;
  if (href) return <a href={href} className={base} target="_blank" rel="noopener noreferrer">{content}</a>;
  return <button onClick={onClick} className={base}>{content}</button>;
}
