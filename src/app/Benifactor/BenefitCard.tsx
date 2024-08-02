import React from "react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <div className="text-4xl text-gray-500">{icon}</div>
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default BenefitCard;
