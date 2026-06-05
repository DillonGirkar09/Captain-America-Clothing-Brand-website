"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function InteractiveSection() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Thank you for your interest!');
  };

  return (
    <section className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
      <p className="mb-4">Sign up for exclusive offers and updates.</p>
      <Button onClick={handleClick} className="bg-[#6C63FF] text-white">Sign Up</Button>
      {message && <p className="mt-4 text-lg text-green-500">{message}</p>}
    </section>
  );
}