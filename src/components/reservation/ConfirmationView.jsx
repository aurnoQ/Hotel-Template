import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ConfirmationView({ data, onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="text-center py-8"
      role="status"
      aria-live="polite"
    >
      {/* Icon */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex justify-center mb-6"
      >
        <div className="w-16 h-16 rounded-full bg-[#68705A]/12 flex items-center justify-center">
          <CheckCircle size={32} className="text-[#68705A]" aria-hidden="true" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.5 }}
      >
        <span className="eyebrow text-[#68705A]">Reservation Request</span>
        <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-medium text-[#241A17] mt-3">
          Thank you, {data.name?.split(' ')[0]}.
        </h2>
        <p className="mt-2 font-sans text-[#302C29]/60 text-base">
          Your reservation request has been received.
        </p>

        {/* Details card */}
        <div className="mt-8 inline-flex flex-col gap-3 bg-[#F7F1E8] border border-[#DCCDBB]/60 rounded-[4px] px-8 py-6 text-left">
          <div className="flex items-center gap-3 font-sans text-sm text-[#302C29]">
            <Users size={15} className="text-[#A85C3A] flex-shrink-0" aria-hidden="true" />
            <span>{data.guests} {data.guests === '1' ? 'Guest' : 'Guests'}</span>
          </div>
          <div className="flex items-center gap-3 font-sans text-sm text-[#302C29]">
            <Calendar size={15} className="text-[#A85C3A] flex-shrink-0" aria-hidden="true" />
            <span>{data.date || '—'}</span>
          </div>
          <div className="flex items-center gap-3 font-sans text-sm text-[#302C29]">
            <Clock size={15} className="text-[#A85C3A] flex-shrink-0" aria-hidden="true" />
            <span>{data.time || '—'}</span>
          </div>
        </div>

        <p className="mt-6 font-sans text-sm text-[#302C29]/50">
          We'll confirm your table shortly via phone or email.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onReset}
            className="px-6 py-3 font-sans text-sm font-medium border border-[#DCCDBB] text-[#302C29] rounded-[4px] hover:border-[#302C29] transition-colors duration-200"
          >
            Make Another Reservation
          </button>
          <Link
            to="/"
            className="px-6 py-3 font-sans text-sm font-medium bg-[#241A17] text-[#FFFDF9] rounded-[4px] hover:bg-[#302C29] transition-colors duration-200 text-center"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
