import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex justify-evenly py-2 bg-gray-800 text-gray-600">
      <p>{`paytent rights are as per ${currentYear} `}</p>
      <p className="flex gap-2">
        Developed By
        <p className="text-green-500"> SaiKumar Billa</p>
      </p>
    </div>
  );
}

export default Footer;
