import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { contactImg } from '../../assets/index';

const ContactLeft = () => {
  return (
    <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
      <img
        className='w-full h-64 object-cover rounded-lg mb-2'
        src={contactImg}
        alt='contactImg'
      />
      <div className='flex flex-col gap-4'>
        <h3 className='text-3xl font-bold text-white'>Yazan Ali</h3>
        <p className='text-lg font-normal text-gray-400'>
          MERN Stack Developer
        </p>
        <p className='text-base text-gray-400 tracking-wide'>
          Let's connect and explore new opportunities! Please feel free to reach
          out to me via email or phone to discuss potential collaborations,
          projects, or any other inquiries you may have.
        </p>
        <p className='text-base text-gray-400 flex items-center gap-2'>
          Phone: <span className='text-lightText'>+963 938449815</span>
        </p>
        <p className='text-base text-gray-400 flex items-center gap-2'>
          Email: <span className='text-lightText'>yazan.ali.dev@gmail.com</span>
        </p>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
        <div className='flex gap-4'>
          <span className='bannerIcon'>
            <a href='https://www.facebook.com/YazanAli007/'>
              <FaFacebookF />
            </a>
          </span>
          <span className='bannerIcon'>
            <a href='https://www.linkedin.com/in/yazan-ali/'>
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
