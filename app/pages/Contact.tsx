import SectionTitle from '@/components/ui/SectionTitle';
import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <div id="contact">
      <Link
        href="/Work"
        className="text-center text-emerald-300 text-[30px] hover:text-blue-400"
      >
        <h3>Work</h3>
      </Link>
      <SectionTitle title="Contact info" />
      <div className="bg-[#0a0000] text-white p-6 font-serif">
        <div className="text-center space-y-2">
          <p className="text-xl">Tel: 081 267 7005</p>
          <p className="text-xl">Email: ndumisolungelo.zulu@gmail.com</p>
          <p className="text-xl">Base: Katlehong,Gauteng</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
