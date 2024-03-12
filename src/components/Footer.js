import React from "react";

function Footer() {
  return (
    <div className=" bg-gray-900  text-white p-10">
      <div className="flex flex-col sm:flex-row gap-3 justify-between mx-5">
        <div className="sm:w-1/3">
          <h2 className="text-xl mb-3 font-semibold  hover:underline">About</h2>
          <p>
            The OTT-Sphere is a cutting-edge online hub, delivering a rich
            cinematic experience with a vast array of movies spanning genres.
            Offering seamless navigation, personalized recommendations, and
            high-quality streaming.
          </p>
        </div>
        <div>
          <h2 className="text-xl mb-3 font-semibold  hover:underline">
            Connect with Us
          </h2>
          <ul className="flex flex-col gap-3 px-4">
            <a
              href="https://twitter.com/firstofmirage"
              className="hover:underline"
            >
              Twitter | X
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-kumar-0b6b1a211/"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a href="">Instagram </a>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl mb-3 font-semibold  hover:underline ">
            Contact Us
          </h2>
          <h3 className="hover:underline">Email: dev.abhishekkr@gmail.com</h3>
          <h3>Phone: +91-620727XXXX</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
