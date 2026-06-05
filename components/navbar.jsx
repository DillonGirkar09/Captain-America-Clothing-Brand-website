"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-[#0D0F14]">
      <h1 className="text-2xl font-bold text-[#6C63FF]">Captain America Apparel</h1>
      <div className="hidden md:flex space-x-4">
        <Button variant="outline">Home</Button>
        <Button variant="outline">Shop</Button>
        <Button variant="outline">About</Button>
        <Button variant="outline">Contact</Button>
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        Menu
      </button>
      {isOpen && (
        <div className="absolute top-16 right-4 bg-[#0D0F14] rounded shadow-lg">
          <Button variant="outline">Home</Button>
          <Button variant="outline">Shop</Button>
          <Button variant="outline">About</Button>
          <Button variant="outline">Contact</Button>
        </div>
      )}
    </nav>
  );
}