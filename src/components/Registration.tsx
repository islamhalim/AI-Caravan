// Updated Registration.tsx — Registration fully closed, vouchers disabled
// Only text/UI changed + voucher + submit blocked. No other logic modified.

import React, { useState } from "react";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./config/firebase";
import TopSection from './TopSection';

const availableVouchers: string[] = []; // FIXED — no syntax error

const Registration: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    title: "",
    affiliation: "",
    email: "",
    phone: "",
    country: "",
    ieeeId: ""
  });

  const [voucherCode, setVoucherCode] = useState("");
  const [appliedVoucher, setAppliedVoucher] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleApplyVoucher = async () => {
    // Registration is now closed — voucher application disabled
    alert("Registration is closed. Voucher codes can no longer be applied.");
    return;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Registration fully closed for everyone
    alert("Registration is officially closed. No further submissions are allowed.");
    return;
  };

  return (
    <>
      <TopSection
        title="Summit Registration"
        subtitle="Registration is officially closed. No new registrations or voucher submissions are accepted."
      />

      <section className="py-12 bg-gray-50 flex justify-center items-start">
        <div className="max-w-3xl w-full bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-center text-xl font-bold text-red-600 mb-6">
            Registration Closed
          </h2>

          <p className="text-center text-gray-700 mb-8">
            Registration for the Summit is now closed.  
            Voucher-code registration is no longer available.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Basic Info (kept unchanged for UI consistency, but disabled) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["name", "title", "affiliation", "email", "phone", "country"].map((field) => (
                <input
                  key={field}
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={(form as any)[field]}
                  onChange={handleInputChange}
                  disabled
                  className="p-3 border rounded-lg bg-gray-200 text-gray-500 cursor-not-allowed"
                />
              ))}
            </div>

            {/* Voucher Code (disabled entirely) */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Voucher code no longer accepted"
                value={voucherCode}
                disabled
                className="flex-1 p-3 border rounded-lg bg-gray-200 text-gray-500 cursor-not-allowed"
              />
              <button
                type="button"
                disabled
                className="bg-gray-400 text-white px-4 rounded-lg font-semibold cursor-not-allowed"
              >
                Apply
              </button>
            </div>

            {/* Submit button disabled */}
            <div className="text-center">
              <button
                type="submit"
                disabled
                className="bg-gray-400 text-white px-6 py-3 rounded-xl font-semibold cursor-not-allowed"
              >
                Registration Closed
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-12 bg-gray-50 flex flex-col items-center gap-8">
        <div className="max-w-3xl w-full bg-white p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-xl font-bold mb-2">Summit Poster Generator</h2>
          <p className="mb-4">You can still generate your personalized summit poster.</p>
          <a
            href="https://poster-generato-production.up.railway.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Go to Poster Generator
          </a>
        </div>
      </section>
    </>
  );
};

export default Registration;
