import React, { useState } from 'react';

const inputClass =
  'w-full px-4 py-3 font-sans text-sm bg-white border border-[#DCCDBB] rounded-[4px] text-[#302C29] placeholder:text-[#302C29]/35 focus:outline-none focus:ring-2 focus:ring-[#A85C3A] focus:border-transparent transition-all duration-200';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSent(true);
  };

  if (sent) {
    return (
      <div className="py-12 text-center">
        <p className="font-display text-2xl text-[#241A17]">Thank you!</p>
        <p className="mt-2 font-sans text-sm text-[#302C29]/60">
          We received your message and will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="c-name" className="block font-sans text-sm font-medium text-[#302C29] mb-1.5">Name</label>
        <input
          id="c-name" type="text" required
          value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
          placeholder="Your name" className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="c-email" className="block font-sans text-sm font-medium text-[#302C29] mb-1.5">Email</label>
        <input
          id="c-email" type="email" required
          value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
          placeholder="hello@email.com" className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="c-message" className="block font-sans text-sm font-medium text-[#302C29] mb-1.5">Message</label>
        <textarea
          id="c-message" rows={4} required
          value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
          placeholder="How can we help?"
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="w-full py-3.5 bg-[#241A17] text-[#FFFDF9] font-sans text-sm font-medium rounded-[4px] hover:bg-[#302C29] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A85C3A] focus-visible:ring-offset-2"
      >
        Send Message
      </button>
    </form>
  );
}
