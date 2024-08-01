"use client"
import BenefitCard from "./BenefitCard";

const Benefit = () => {
    const benefitData = [
      {
        icon: "🛒", 
        title: "60 Mins Delivery",
        description: "Free shipping over 400Tk",
      },
      {
        icon: "🛡️", 
        title: "Authorized Products",
        description: "within 30 days for an exchange",
      },
      {
        icon: "📞", 
        title: "Customer Service Support",
        description: "9am to 9pm",
      },
      {
        icon: "💳", 
        title: "Flexible Payments",
        description: "Pay with multiple credit cards",
      },
    ];

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
      {benefitData.map((benefit, index) => (
        <BenefitCard
          key={index}
          icon={benefit.icon}
          title={benefit.title}
          description={benefit.description}
        />
      ))}
    </div>
  );
};

export default Benefit;
