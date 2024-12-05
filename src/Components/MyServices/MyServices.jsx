import React from "react";
import "./MyServices.css"; // Import CSS for styling

const MyServices = () => {
  const services = [
    {
      id: 1,
      icon: "🌟", // Use an emoji or a font icon here
      title: "Web Development",
      description: "Creating responsive and high-performing websites tailored to your needs.",
    },
    {
      id: 2,
      icon: "📱",
      title: "Mobile App Development",
      description: "Building user-friendly and functional mobile applications for Android and iOS.",
    },
    {
      id: 3,
      icon: "🎨",
      title: "UI/UX Design",
      description: "Designing intuitive and engaging user interfaces for seamless experiences.",
    },
  ];

  return (
    <div className="my-services">
      <h2 className="services-title">My Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServices;
