import ServiceCard from './ServiceCard';
import { FiMonitor, FiStar, FiSmartphone, FiShoppingCart, FiFeather, FiCode } from 'react-icons/fi';

const services = [
  {
    title: "Web Design",
    description: "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
    icon: <FiMonitor />,
  },
  {
    title: "UI/UX Design",
    description: "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
    icon: <FiStar />,
  },
  {
    title: "Responsive Design",
    description: "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
    icon: <FiSmartphone />,
  },
  {
    title: "E-commerce Solutions",
    description: "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
    icon: <FiShoppingCart />,
  },
  {
    title: "Webflow",
    description: "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
    icon: <FiFeather />,
  },
  {
    title: "Custom Development",
    description: "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
    icon: <FiCode />,
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-10 z-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-10">What We do</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
