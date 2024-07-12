import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            scelerisque tincidunt augue, ac varius justo volutpat ac. Proin
            ullamcorper lacus at libero tincidunt, non tincidunt sapien
            venenatis. Mauris consectetur, sapien eget lacinia mattis, dui
            purus molestie quam, in aliquet est nulla nec enim. Nulla facilisi.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Sed non nulla at dolor tincidunt maximus. Curabitur congue elit non
            quam posuere, sit amet vestibulum dui lacinia. Quisque rhoncus
            ipsum ut ligula blandit interdum. Fusce hendrerit ex vel orci
            commodo, et faucibus neque rutrum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
