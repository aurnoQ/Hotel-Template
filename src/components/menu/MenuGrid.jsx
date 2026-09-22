import React from 'react';
import MenuItem from './MenuItem';

export default function MenuGrid({ items }) {
  if (!items || items.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="font-sans text-[#302C29]/50 text-sm">No items in this category.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
      {items.map(item => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}
