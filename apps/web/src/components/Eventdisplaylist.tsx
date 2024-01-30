'use client';
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Image from 'next/image';
import event1 from '../assets/event1.png';
import event2 from '../assets/event2.png';
import event3 from '../assets/event3.png';
import event4 from '../assets/event4.png';
import event5 from '../assets/event5.png';
import event6 from '../assets/event6.png';

const eventData = [
  {
    image: event1,
    name: 'Yoga Workshop',
    location: 'Central Park',
    date: 'May 15, 2024',
    price: '$10',
  },
  {
    image: event2,
    name: 'Hair Care Seminar',
    location: 'Downtown Studio',
    date: 'June 20, 2024',
    price: '$15',
  },
  {
    image: event3,
    name: 'Skincare Fundamentals',
    location: 'Beach Resort',
    date: 'July 22, 2024',
    price: 'Free',
  },
  {
    image: event4,
    name: 'Mindfulness Retreat',
    location: 'Mountain View Lodge',
    date: 'August 5, 2024',
    price: '$50',
  },
  {
    image: event5,
    name: 'Vegan Cooking Class',
    location: 'City Culinary School',
    date: 'September 10, 2024',
    price: '$30',
  },
  {
    image: event6,
    name: 'Digital Art Exhibition',
    location: 'Gallery of Modern Art',
    date: 'October 11, 2024',
    price: '$8',
  },
];

const EventDisplay = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? eventData.length - 1 : prevSlide - 1,
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === eventData.length - 1 ? 0 : prevSlide + 1,
    );
  };

  return (
    <div className="eventDisplayContainer">
      <div className="eventSlideImage">
        <Image
          src={eventData[currentSlide].image}
          alt={eventData[currentSlide].name}
          layout="fill"
          objectFit="cover"
        />
        <div className="eventDetails">
          <h2>{eventData[currentSlide].name}</h2>
          <p>{eventData[currentSlide].location}</p>
          <p>{eventData[currentSlide].date}</p>
          <p>{eventData[currentSlide].price}</p>
        </div>
      </div>
      <div className="eventArrow leftArrow" onClick={handlePrevSlide}>
        <BsChevronCompactLeft size={30} />
      </div>
      <div className="eventArrow rightArrow" onClick={handleNextSlide}>
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  );
};

export default EventDisplay;

// import React from 'react';
// import Image from 'next/image';
// import event1 from '../assets/event1.png';
// import event2 from '../assets/event2.png';
// import event3 from '../assets/event3.png';
// import event4 from '../assets/event4.png';
// import event5 from '../assets/event5.png';
// import event6 from '../assets/event6.png';

// const eventData = [
//   {
//     image: event1,
//     name: 'Yoga Workshop',
//     location: 'Central Park',
//     date: '2024-05-15',
//     price: '$10',
//   },
//   {
//     image: event2,
//     name: 'Hair Care Seminar',
//     location: 'Downtown Studio',
//     date: '2024-06-20',
//     price: '$15',
//   },
//   {
//     image: event3,
//     name: 'Skincare 101',
//     location: 'Beach Resort',
//     date: '2024-07-22',
//     price: 'Free',
//   },
//   {
//     image: event4,
//     name: 'Mindfulness Retreat',
//     location: 'Mountain View Lodge',
//     date: '2024-08-05',
//     price: '$50',
//   },
//   {
//     image: event5,
//     name: 'Vegan Cooking Class',
//     location: 'City Culinary School',
//     date: '2024-09-10',
//     price: '$30',
//   },
//   {
//     image: event6,
//     name: 'Digital Art Exhibition',
//     location: 'Gallery of Modern Art',
//     date: '2024-10-11',
//     price: '$8',
//   },
// ];

// const EventDisplay = () => {
//   return (
//     <div className="ed-background">
//       <div className="ed-container">
//         <div className="ed-title-container">
//           <h1 className="ed-title">Scroll Through the events</h1>
//         </div>

//         <div className="ed-grid-container">
//           {eventData.map((event, index) => (
//             <div key={index} className="ed-image-card">
//               <Image
//                 src={event.image}
//                 alt={event.name}
//                 width={200}
//                 height={200}
//                 className="ed-service-image"
//               />
//               <div className="ed-text-container">
//                 <p className="ed-service-text">{event.name}</p>
//                 <p className="ed-service-text">{event.location}</p>
//                 <p className="ed-service-text">{event.date}</p>
//                 <p className="ed-service-text">{event.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventDisplay;
