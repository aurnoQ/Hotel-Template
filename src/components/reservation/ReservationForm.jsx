import React, { useState } from 'react';
import GuestSelector from './GuestSelector';
import TimeSlotPicker from './TimeSlotPicker';
import ConfirmationView from './ConfirmationView';

const occasions = [
  'Birthday', 'Anniversary', 'Date Night', 'Business Dinner', 'Family Gathering', 'Other',
];

const inputClass =
  'w-full px-4 py-3 font-sans text-sm bg-white border border-[#DCCDBB] rounded-[4px] text-[#302C29] placeholder:text-[#302C29]/35 focus:outline-none focus:ring-2 focus:ring-[#A85C3A] focus:border-transparent transition-all duration-200';

export default function ReservationForm() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', date: '', time: '', guests: '2', occasion: '', special: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    if (!form.email.trim() || !form.email.includes('@')) e.email = 'Valid email is required';
    if (!form.date) e.date = 'Date is required';
    if (!form.time) e.time = 'Please select a time slot';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const handleChange = (key) => (e) => {
    setForm(prev => ({ ...prev, [key]: e.target.value }));
    if (errors[key]) setErrors(prev => { const n = { ...prev }; delete n[key]; return n; });
  };

  const handleReset = () => {
    setForm({ name: '', phone: '', email: '', date: '', time: '', guests: '2', occasion: '', special: '' });
    setSubmitted(false);
    setErrors({});
  };

  if (submitted) {
    return <ConfirmationView data={form} onReset={handleReset} />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="res-name" className="block font-sans text-sm font-medium text-[#302C29] mb-1.5">
            Full Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="res-name" type="text" value={form.name} onChange={handleChange('name')}
            placeholder="Your name" className={inputClass}
            aria-describedby={errors.name ? 'err-name' : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p id="err-name" role="alert" className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="res-phone" className="block font-sans text-sm font-medium text-[#302C29] mb-1.5">
            Phone <span aria-hidden="true">*</span>
          </label>
          <input
            id="res-phone" type="tel" value={form.phone} onChange={handleChange('phone')}
            placeholder="+91 98765 43210" className={inputClass}
            aria-describedby={errors.phone ? 'err-phone' : undefined}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p id="err-phone" role="alert" className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="res-email" className="block font-sans text-sm font-medium text-[#302C29] mb-1.5">
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          id="res-email" type="email" value={form.email} onChange={handleChange('email')}
          placeholder="hello@email.com" className={inputClass}
          aria-describedby={errors.email ? 'err-email' : undefined}
          aria-invalid={!!errors.email}
        />
        {errors.email && <p id="err-email" role="alert" className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      {/* Date */}
      <div>
        <label htmlFor="res-date" className="block font-sans text-sm font-medium text-[#302C29] mb-1.5">
          Date <span aria-hidden="true">*</span>
        </label>
        <input
          id="res-date" type="date" value={form.date} onChange={handleChange('date')}
          className={inputClass}
          min={new Date().toISOString().split('T')[0]}
          aria-describedby={errors.date ? 'err-date' : undefined}
          aria-invalid={!!errors.date}
        />
        {errors.date && <p id="err-date" role="alert" className="mt-1 text-xs text-red-500">{errors.date}</p>}
      </div>

      {/* Time slots */}
      <div>
        <TimeSlotPicker
          value={form.time}
          onChange={(t) => {
            setForm(p => ({ ...p, time: t }));
            if (errors.time) setErrors(p => { const n = { ...p }; delete n.time; return n; });
          }}
        />
        {errors.time && <p role="alert" className="mt-1 text-xs text-red-500">{errors.time}</p>}
      </div>

      {/* Guests */}
      <GuestSelector value={form.guests} onChange={(g) => setForm(p => ({ ...p, guests: g }))} />

      {/* Occasion */}
      <div>
        <label htmlFor="res-occasion" className="block font-sans text-sm font-medium text-[#302C29] mb-1.5">
          Occasion <span className="text-[#302C29]/40 font-normal">(optional)</span>
        </label>
        <select id="res-occasion" value={form.occasion} onChange={handleChange('occasion')} className={inputClass}>
          <option value="">Select an occasion</option>
          {occasions.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>

      {/* Special requests */}
      <div>
        <label htmlFor="res-special" className="block font-sans text-sm font-medium text-[#302C29] mb-1.5">
          Special Requests <span className="text-[#302C29]/40 font-normal">(optional)</span>
        </label>
        <textarea
          id="res-special" rows={3} value={form.special} onChange={handleChange('special')}
          placeholder="Dietary requirements, seating preferences, allergies…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-[#241A17] text-[#FFFDF9] font-sans text-sm font-medium tracking-wide rounded-[4px] hover:bg-[#302C29] active:scale-[0.99] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A85C3A] focus-visible:ring-offset-2"
      >
        Request Reservation
      </button>

      <p className="text-center font-sans text-xs text-[#302C29]/40">
        We'll confirm your table within a few hours.
      </p>
    </form>
  );
}
