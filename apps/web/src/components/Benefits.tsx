import React from 'react';
import phone from '@/assets/phone.png';
import Image from 'next/image';
import { FaRegEdit } from 'react-icons/fa'; // Icon for editing
import { AiOutlineProfile } from 'react-icons/ai'; // Icon for profile
import { MdAttachMoney } from 'react-icons/md'; // Icon for money
import { BsFillGridFill } from 'react-icons/bs'; // Icon for square poll (grid)

export const Benefits = () => {
  const iconSize = 30; // Size of the icons in pixels

  return (
    <div className="benefits-layout">
      <div className="phone-container">
        <Image
          src={phone}
          width={450}
          height={500}
          alt="Phone"
          className="phone-image"
        />
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <BsFillGridFill className="icon" size={iconSize} />
          <h2>Event creation and ticketing tools</h2>
          <p>
            Post your event, build your own professional online ticketing
            system, and create tickets in just minutes.
          </p>
        </div>
        <div className="grid-item">
          <FaRegEdit className="icon" size={iconSize} />
          <h2>Customizable event pages</h2>
          <p>
            Provide a seamless online ticket purchasing experience for your
            attendees with customizable event pages{' '}
          </p>
        </div>
        <div className="grid-item">
          <MdAttachMoney className="icon" size={iconSize} />
          <h2>Flexible event payouts</h2>
          <p>
            et up online ticket payouts for your events on a custom schedule of
            your choice and get paid quickly.
          </p>
        </div>
        <div className="grid-item">
          <AiOutlineProfile className="icon" size={iconSize} />
          <h2>Eventbrite Organizer App</h2>
          <p>
            Monitor on-site and online ticket sales, complete attendee
            check-ins, and view real-time data on the go with our easy-to-use
            mobile app.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Benefits;
