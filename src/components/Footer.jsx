import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex justify-center py-2 bg-gray-800 text-gray-600">
      <p>{`paytent rights are as per ${currentYear} `}</p>
    </div>
  );
}

export default Footer;
