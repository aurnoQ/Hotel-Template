import React from 'react';

const timeSlots = [
  { id: 'lunch', label: 'Lunch', slots: ['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM'] },
  { id: 'dinner', label: 'Dinner', slots: ['7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'] },
];

export default function TimeSlotPicker({ value, onChange }) {
  return (
    <div>
      <label className="block font-sans text-sm font-medium text-[#302C29] mb-3">
        Preferred Time
      </label>
      <div className="space-y-4">
        {timeSlots.map(group => (
          <div key={group.id}>
            <p className="font-sans text-xs font-semibold tracking-[0.12em] uppercase text-[#302C29]/40 mb-2">
              {group.label}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {group.slots.map(slot => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => onChange(slot)}
                  aria-pressed={value === slot}
                  className={`py-2.5 font-sans text-sm font-medium rounded-[4px] border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A85C3A] ${
                    value === slot
                      ? 'border-[#A85C3A] bg-[#A85C3A]/10 text-[#A85C3A]'
                      : 'border-[#DCCDBB] text-[#302C29]/60 hover:border-[#302C29] hover:text-[#302C29]'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
