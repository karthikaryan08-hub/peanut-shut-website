"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiry: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setSubmitStatus(null);

  try {
    // Now calling OUR OWN Next.js API route
    // Not Google directly — no CORS problem!
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.status === "success") {
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        enquiry: "",
        message: "",
      });
    } else {
      setSubmitStatus("error");
    }

  } catch (error) {
    console.error("Submission error:", error);
    setSubmitStatus("error");
  } finally {
    setIsLoading(false);
  }
};


  // ── Brand tokens — exact match to your homepage ──
  const brand = {
    bg:        "#FAF0E6",   // warm peach background
    brown:     "#1a0a00",   // dark headline brown
    orange:    "#C84B11",   // burnt orange accent
    orangeHov: "#a83a08",   // darker on hover
    card:      "#FFFFFF",
    muted:     "#7a6555",   // muted brown for subtitles
    border:    "#e8d5c0",   // warm border
    inputBg:   "#FDF6EE",   // very light warm input bg
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-28"
      style={{ background: brand.bg }}
    >

      {/* ── PAGE HEADER — matches homepage style ── */}
      <div className="text-center mb-14">

        {/* Pill tag — exactly like "CALIFORNIA CRAFTED · EST. 1995" */}
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border text-xs font-bold uppercase tracking-widest mb-6"
          style={{
            borderColor: brand.border,
            color: brand.muted,
            background: "transparent",
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: brand.orange }}
          />
          Get In Touch · We'd Love To Hear From You
        </div>

        {/* Big serif heading — matches "Shut Up. It's That Good." style */}
        <h1
          className="text-5xl md:text-6xl font-black leading-tight mb-4"
          style={{ color: brand.brown }}
        >
          Let's Work
          <br />
          <span style={{ color: brand.orange }}>Together.</span>
        </h1>

        <p
          className="text-base max-w-md mx-auto leading-relaxed"
          style={{ color: brand.muted }}
        >
          Bulk orders, wholesale partnerships, or just a question —
          fill in the form and we'll get back within 24 hours.
        </p>
      </div>

      {/* ── FLOATING CARD ── */}
      <div
        className="w-full max-w-5xl rounded-3xl overflow-hidden"
        style={{
          boxShadow: "0 32px 80px rgba(26,10,0,0.12)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5">

          {/* ── LEFT PANEL — warm dark brown (matches brand) ── */}
          <div
            className="lg:col-span-2 p-10 flex flex-col justify-between"
            style={{ background: brand.brown }}
          >
            <div>
              {/* Brand pill */}
              <div
                className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8"
                style={{
                  background: brand.orange,
                  color: "#fff",
                }}
              >
                Peanut Shut™
              </div>

              {/* Heading */}
              <h3
                className="text-2xl md:text-3xl font-black leading-snug mb-4"
                style={{ color: "#fff" }}
              >
                Premium Peanuts,
                <br />
                <span style={{ color: brand.orange }}>
                  Delivered Fresh.
                </span>
              </h3>

              <p
                className="text-sm leading-relaxed mb-10"
                style={{ color: "#b89880" }}
              >
                From farm to shelf — crafting the finest peanut butter,
                crunchy peanuts, and cold-pressed oil for businesses
                and families across India.
              </p>

              {/* Contact details */}
              <div className="space-y-6">
                {[
                  { label: "EMAIL",    value: "hello@peanutshut.com"    },
                  { label: "PHONE",    value: "+91 98765 43210"          },
                  { label: "LOCATION", value: "Mumbai, India"            },
                  { label: "HOURS",    value: "Mon–Sat, 9am–6pm IST"    },
                ].map((item) => (
                  <div key={item.label}>
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-0.5"
                      style={{ color: brand.orange }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "#fff" }}
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cities */}
            <div
              className="mt-10 pt-8"
              style={{ borderTop: "1px solid #3a1a0a" }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: "#7a4030" }}
              >
                Serving Businesses In
              </p>
              <div className="flex flex-wrap gap-2">
                {["Mumbai","Delhi","Bangalore","Pune","Chennai"].map((city) => (
                  <span
                    key={city}
                    className="text-xs px-3 py-1.5 rounded-full"
                    style={{
                      border: "1px solid #3a1a0a",
                      color: "#b89880",
                    }}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT FORM PANEL ── */}
          <div
            className="lg:col-span-3 p-10 md:p-12"
            style={{ background: brand.card }}
          >
            {/* Form header */}
            <div className="mb-8">
              <h4
                className="text-2xl font-black mb-1"
                style={{ color: brand.brown }}
              >
                Send Us a Message
              </h4>
              <p className="text-sm" style={{ color: brand.muted }}>
                We typically reply within a few hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { label: "Full Name",     name: "name",  type: "text",  ph: "Rahul Sharma",       required: true  },
                  { label: "Phone Number",  name: "phone", type: "tel",   ph: "+91 98765 43210",    required: false },
                ].map((field) => (
                  <div key={field.name} className="flex flex-col gap-1.5">
                    <label
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{ color: brand.muted }}
                    >
                      {field.label}
                      {field.required && (
                        <span style={{ color: brand.orange }}> *</span>
                      )}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      placeholder={field.ph}
                      className="px-4 py-3 rounded-xl text-sm transition-all duration-200 focus:outline-none"
                      style={{
                        border: `1.5px solid ${brand.border}`,
                        background: brand.inputBg,
                        color: brand.brown,
                      }}
                      onFocus={(e) => {
                        e.target.style.border = `1.5px solid ${brand.orange}`;
                        e.target.style.background = "#fff";
                      }}
                      onBlur={(e) => {
                        e.target.style.border = `1.5px solid ${brand.border}`;
                        e.target.style.background = brand.inputBg;
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: brand.muted }}
                >
                  Email Address
                  <span style={{ color: brand.orange }}> *</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="rahul@company.com"
                  className="px-4 py-3 rounded-xl text-sm transition-all duration-200 focus:outline-none"
                  style={{
                    border: `1.5px solid ${brand.border}`,
                    background: brand.inputBg,
                    color: brand.brown,
                  }}
                  onFocus={(e) => {
                    e.target.style.border = `1.5px solid ${brand.orange}`;
                    e.target.style.background = "#fff";
                  }}
                  onBlur={(e) => {
                    e.target.style.border = `1.5px solid ${brand.border}`;
                    e.target.style.background = brand.inputBg;
                  }}
                />
              </div>

              {/* Enquiry Type */}
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: brand.muted }}
                >
                  Enquiry Type
                </label>
                <select
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl text-sm transition-all duration-200 focus:outline-none"
                  style={{
                    border: `1.5px solid ${brand.border}`,
                    background: brand.inputBg,
                    color: brand.brown,
                  }}
                  onFocus={(e) => {
                    e.target.style.border = `1.5px solid ${brand.orange}`;
                    e.target.style.background = "#fff";
                  }}
                  onBlur={(e) => {
                    e.target.style.border = `1.5px solid ${brand.border}`;
                    e.target.style.background = brand.inputBg;
                  }}
                >
                  <option value="">Select a topic...</option>
                  <option value="bulk">Bulk Order</option>
                  <option value="partnership">Business Partnership</option>
                  <option value="wholesale">Wholesale Enquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: brand.muted }}
                >
                  Message
                  <span style={{ color: brand.orange }}> *</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your requirements, quantity needed, delivery location..."
                  className="px-4 py-3 rounded-xl text-sm transition-all duration-200 focus:outline-none resize-none"
                  style={{
                    border: `1.5px solid ${brand.border}`,
                    background: brand.inputBg,
                    color: brand.brown,
                  }}
                  onFocus={(e) => {
                    e.target.style.border = `1.5px solid ${brand.orange}`;
                    e.target.style.background = "#fff";
                  }}
                  onBlur={(e) => {
                    e.target.style.border = `1.5px solid ${brand.border}`;
                    e.target.style.background = brand.inputBg;
                  }}
                />
              </div>

              {/* Success */}
              {submitStatus === "success" && (
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium"
                  style={{
                    background: "#f0faf0",
                    border: "1px solid #b6e0b6",
                    color: "#2d6a2d",
                  }}
                >
                  ✅ Message sent! We'll get back to you within 24 hours.
                </div>
              )}

              {/* Error */}
              {submitStatus === "error" && (
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium"
                  style={{
                    background: "#fff0f0",
                    border: "1px solid #f0b6b6",
                    color: "#8b0000",
                  }}
                >
                  ❌ Something went wrong. Please try again.
                </div>
              )}

              {/* Divider */}
              <div
                className="pt-5"
                style={{ borderTop: `1px solid ${brand.border}` }}
              >
                {/* Submit — matches "SHOP NOW →" pill button style */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full font-black uppercase tracking-widest py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                  style={{
                    background: isLoading ? "#e0a080" : brand.orange,
                    color: "#fff",
                    cursor: isLoading ? "not-allowed" : "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (!isLoading)
                      e.target.style.background = brand.orangeHov;
                  }}
                  onMouseLeave={(e) => {
                    if (!isLoading)
                      e.target.style.background = brand.orange;
                  }}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12" cy="12" r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </button>

                <p
                  className="text-center text-xs mt-4"
                  style={{ color: brand.muted }}
                >
                  🔒 Your data is private and never shared.
                </p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
