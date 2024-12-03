import React, { useState } from "react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"features" | "pricing">(
    "features"
  );

  const features: FeatureProps[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Lightning Fast",
      description:
        "Experience incredible speed and performance with our cutting-edge technology.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      title: "Reliable",
      description:
        "Guaranteed uptime and consistent performance you can trust.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "User Friendly",
      description:
        "Intuitive design that makes complex tasks simple and enjoyable.",
    },
  ];

  const renderFeatureCard = (feature: FeatureProps) => (
    <div
      key={feature.title}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="mb-4">{feature.icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">
        {feature.title}
      </h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">
            Transform Your Digital Experience
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Innovative solutions designed to elevate your productivity and
            streamline your workflow.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </header>

      <iframe
        src="https://cascade.telkomsel.com/embed/show/?clientKey=U2FsdGVkX191QHTTBdKPor21Ld2K1GctuGL0QX7lnfwdKnf5h5MvUj5RpfMzZP1jQED3l0AdEumtHdWbqo12VHMPor21LdOfMx8KmxMl3JkxMl3JkMYxMl3JkngyH7bJb0ar6lxs5GMVhebQW3lyMaNVDMx"
        height="500"
        width="100%"
        frameBorder="0"
      ></iframe>

      {/* Features Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="flex justify-center mb-12">
          <div className="bg-gray-200 rounded-full p-2 flex space-x-2">
            <button
              onClick={() => setActiveTab("features")}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === "features"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-300"
              }`}
            >
              Features
            </button>
            <button
              onClick={() => setActiveTab("pricing")}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeTab === "pricing"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-300"
              }`}
            >
              Pricing
            </button>
          </div>
        </div>

        {activeTab === "features" && (
          <div className="grid md:grid-cols-3 gap-8">
            {features.map(renderFeatureCard)}
          </div>
        )}

        {activeTab === "pricing" && (
          <div className="grid md:grid-cols-3 gap-8">
            {["Basic", "Pro", "Enterprise"].map((plan, index) => (
              <div
                key={plan}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {plan} Plan
                </h3>
                <p className="text-4xl font-extrabold text-blue-600 mb-4">
                  ${(index + 1) * 29}
                  <span className="text-sm text-gray-500">/month</span>
                </p>
                <ul className="space-y-3 mb-6 text-gray-600">
                  <li>✓ Feature One</li>
                  <li>✓ Feature Two</li>
                  <li>✓ Feature Three</li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-colors">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
