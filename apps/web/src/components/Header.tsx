import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../assets/logo.png';

export const Header = () => {
  return (
    <div className="navbar">
      <Link href="/">
        <Image
          src={Logo}
          width={80}
          height={40}
          alt="logo"
          className="logo-image"
        />
      </Link>
      <div className="navbar-buttons">
        <button>
          <Link href="/findevents">Find Events</Link>
        </button>
        <div className="dropdown">
          <button className="dropbtn">
            <Link href="/eventtypes">Event Types</Link>
          </button>
          <div className="dropdown-content">
            <button>
              <Link href="/music"> Music</Link>
            </button>
            <button>
              <Link href="/fooddrink">Food & Drink</Link>
            </button>
            <button>
              <Link href="/arts">Arts</Link>
            </button>
            <button>
              <Link href="/charity">Charity</Link>
            </button>
            <button>
              <Link href="/festivals">Festivals</Link>
            </button>
            <button>
              <Link href="/retails">Retails</Link>
            </button>
            <button>
              <Link href="/wellness">Wellness</Link>
            </button>
          </div>
        </div>
        <button>
          <Link href="/createevents">Create Events</Link>
        </button>
        <button>
          <Link href="/login">Login</Link>
        </button>
        <button>
          <Link href="/signup">Sign Up</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
