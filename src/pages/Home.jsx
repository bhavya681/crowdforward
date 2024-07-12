import React from "react";
import { Link } from "react-router-dom";
import Campaigns from "./Campaigns";
import { IoCreate } from "react-icons/io5";

const Home = () => {
  return (
    <>
      <div className="bg-black min-h-screen font-sans text-white">
        <main>
          <section
            className="relative bg-cover bg-center h-screen flex items-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1654198340681-a2e0fc449f1b?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto px-6 relative z-10 text-center">
              <h1 className="text-5xl font-bold text-white mb-4">
                Empower Change, One Donation at a Time
              </h1>
              <p className="text-xl text-white mb-8">
                Join our global community of changemakers and support causes
                that matter.
              </p>
              <Link to="/create-campaign"
                className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 ease-in-out animate-pulse"
              >
             Create Campaign 
          
              </Link>
            </div>
          </section>

          <section id="causes" className="py-16 bg-black">
            <div className="container mx-auto px-6">
              <Campaigns />
            </div>
          </section>

          <section id="impact" className="py-16 bg-gray-900">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-white mb-8">Our Impact</h2>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                  <p className="text-4xl font-bold text-purple-600 mb-2">
                    $2.5M+
                  </p>
                  <p className="text-gray-400">Funds Raised</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                  <p className="text-4xl font-bold text-purple-600 mb-2">
                    50,000+
                  </p>
                  <p className="text-gray-400">Donors</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                  <p className="text-4xl font-bold text-purple-600 mb-2">
                    1,000+
                  </p>
                  <p className="text-gray-400">Projects Funded</p>
                </div>
              </div>
            </div>
          </section>

          <section id="testimonial" className="py-16 bg-purple-700 text-white">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
              <blockquote className="text-xl italic mb-4">
                "Thanks to the generous donations through CrowdFund Connect, we
                were able to build a new school in our village. Now, over 200
                children have access to quality education."
              </blockquote>
              <p className="font-semibold">- Maria, Community Leader</p>
            </div>
          </section>

          <section id="cta" className="py-16 bg-gray-900">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join our community of changemakers and start supporting causes
                you care about.
              </p>
              <Link to="/campaigns"
                className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 ease-in-out"
              >
                Start Donating Now
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
