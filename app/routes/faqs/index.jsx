// app/routes/faqs.jsx

import { useLoaderData, Link } from "@remix-run/react";
import { json } from "@remix-run/node";
import path from "path";
import fs from "fs/promises";
import { useState } from "react";

export async function loader() {
  const filePath = path.resolve("app/data/faqs.json");
  const fileContents = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(fileContents);

  return json(data, {
    headers: {
      "X-Frame-Options": "SAMEORIGIN",
    },
  });
}

export default function FaqsPage() {
  const faqData = useLoaderData();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    console.log('Toggling FAQ:', index, 'Current openIndex:', openIndex);
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-white dark:bg-gray-950">
      {/* Header */}
      <header className="w-full sticky top-0 z-30 bg-white dark:bg-gray-950/80 backdrop-blur border-b border-[#FA6F51] shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between py-3 px-4">
          {/* Logo or Icon */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FA6F51] text-white font-bold text-2xl shadow">
              Q
            </span>
            <span className="text-2xl md:text-3xl font-extrabold tracking-wide text-[#DA4B2C]">Al Quran</span>
          </div>
          {/* Navigation */}
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link to="/" className="text-black dark:text-white hover:text-[#FA6F51] font-medium transition">Home</Link>
              </li>
              <li>
                <Link to="/faqs" className="text-black dark:text-white hover:text-[#FA6F51] font-medium transition">Faqs</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center underline decoration-[#DA4B2C] decoration-4 underline-offset-8 mt-10 text-[#DA4B2C]">
        Frequently Asked Questions
      </h1>

      <div className="w-full max-w-3xl px-4">
        {faqData.mainEntity.map((faq, index) => (
          <div key={index} className="mb-4 rounded-lg shadow-md overflow-hidden border border-[#FA6F51]">
            <button
              className="flex justify-between items-center w-full p-4 text-left bg-[#FA6F51] text-white font-semibold text-lg focus:outline-none hover:bg-[#DA4B2C] transition-colors duration-300"
              onClick={() => toggleFaq(index)}
            >
              {faq.name}
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                <p>{faq.acceptedAnswer.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
