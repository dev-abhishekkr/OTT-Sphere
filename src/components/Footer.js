import React from "react";

function Footer() {
  return (
    <div className="h-[15rem] bg-gray-900  text-white p-10">
      <div className="flex flex-col sm:flex-row space-y-10 justify-between mx-5">
        <div>
          <h2>About</h2>
        </div>
        <div>
          <h2>Contact US</h2>
        </div>
        <div>
          <h2>Connect with us</h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
