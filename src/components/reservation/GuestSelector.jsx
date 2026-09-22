import React from 'react';

const options = [
  { value: '1', label: '1 Guest' },
  { value: '2', label: '2 Guests' },
  { value: '3', label: '3 Guests' },
  { value: '4', label: '4 Guests' },
  { value: '5', label: '5 Guests' },
  { value: '6+', label: '6+ Guests' },
];

export default function GuestSelector({ value, onChange }) {
  return (
    <div>
      <label className="block font-sans text-sm font-medium text-[#302C29] mb-2">
        Number of Guests
      </label>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {options.map(opt => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            aria-pressed={value === opt.value}
            className={`py-2.5 font-sans text-sm font-medium rounded-[4px] border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A85C3A] ${
              value === opt.value
                ? 'border-[#A85C3A] bg-[#A85C3A]/10 text-[#A85C3A]'
                : 'border-[#DCCDBB] text-[#302C29]/60 hover:border-[#302C29] hover:text-[#302C29]'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
