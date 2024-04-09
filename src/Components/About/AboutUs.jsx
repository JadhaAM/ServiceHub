import React, { useState } from 'react';

const services = [
  { 
    name: 'Food Shops', 
    details: {
      address: '123 Main Street',
      contactNo: '+1234567890',
      openingTime: '8:00 AM',
      closingTime: '10:00 PM',
      products: [
        { name: 'Burger', price: '$5' },
        { name: 'Pizza', price: '$10' },
        { name: 'Sandwich', price: '$3' }
      ]
    }
  },
  { 
    name: 'Mobile Shops', 
    details: {
      address: '456 Elm Street',
      contactNo: '+0987654321',
      openingTime: '9:00 AM',
      closingTime: '8:00 PM',
      products: [
        { name: 'iPhone 12', price: '$999' },
        { name: 'Samsung Galaxy S21', price: '$899' },
        { name: 'Google Pixel 5', price: '$699' }
      ]
    }
  },
  { 
    name: 'Document Services', 
    details: {
      address: '789 Oak Street',
      contactNo: '+9876543210',
      openingTime: '9:00 AM',
      closingTime: '5:00 PM',
      products: [
        { name: 'Printing', price: '$0.10 per page' },
        { name: 'Scanning', price: '$1 per page' },
        { name: 'Copying', price: '$0.15 per page' }
      ]
    }
  },
  // Add more service categories with details as needed
];

const ServiceCards = ({ services, onServiceClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
      {services.map((service, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4 cursor-pointer" onClick={() => onServiceClick(service)}>
          <h2 className="text-lg font-bold mb-2">{service.name}</h2>
        </div>
      ))}
    </div>
  );
};

const ServiceDetails = ({ service, onClose }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-6">
      <button className="text-red-500 font-bold mb-4" onClick={onClose}>Close</button>
      <h2 className="text-lg font-bold mb-2">{service.name}</h2>
      <p><strong>Address:</strong> {service.details.address}</p>
      <p><strong>Contact No:</strong> {service.details.contactNo}</p>
      <p><strong>Opening Time:</strong> {service.details.openingTime}</p>
      <p><strong>Closing Time:</strong> {service.details.closingTime}</p>
      <h3 className="text-lg font-bold mt-4">Products:</h3>
      <ul>
        {service.details.products.map((product, index) => (
          <li key={index}>
            <span className="font-bold">{product.name}</span> - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

const AboutUs = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseDetails = () => {
    setSelectedService(null);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mt-5">Service Categories</h1>
      {selectedService ? (
        <ServiceDetails service={selectedService} onClose={handleCloseDetails} />
      ) : (
        <ServiceCards services={services} onServiceClick={handleServiceClick} />
      )}
    </div>
  );
};

export default AboutUs;
