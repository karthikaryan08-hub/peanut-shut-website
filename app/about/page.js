"use client";

import { useState } from "react";
import Link from "next/link";

export default function AboutPage() {

  const [activeValue, setActiveValue] = useState(0);

  const brand = {
    bg:     "#FAF0E6",
    brown:  "#1a0a00",
    orange: "#C84B11",
    muted:  "#7a6555",
    border: "#e8d5c0",
    card:   "#FFFFFF",
  };

  const stats = [
    { number: "28+",  label: "Years of Excellence" },
    { number: "500+", label: "Business Clients"     },
    { number: "3",    label: "Premium Products"     },
    { number: "12+",  label: "States Served"        },
  ];

  const values = [
    {
      title:       "100% Natural",
      subtitle:    "No additives. Ever.",
      description: "Every single product we make contains zero artificial additives, preservatives, or flavor enhancers. What you see on the label is exactly what goes into the jar.",
      icon:        "🌿",
    },
    {
      title:       "Farm Fresh",
      subtitle:    "Straight from the source.",
      description: "We work directly with peanut farmers in Gujarat and Andhra Pradesh, cutting out middlemen and guaranteeing the freshest possible ingredients for you.",
      icon:        "🌾",
    },
    {
      title:       "Cold Pressed",
      subtitle:    "The right way to press.",
      description: "Our oils are extracted using traditional cold-press methods that preserve all the natural nutrients, flavor, and aroma. No heat. No chemicals. Just pure goodness.",
      icon:        "⚗️",
    },
  ];

  const timeline = [
    {
      year:  "1995",
      title: "The Beginning",
      desc:  "Started in a small facility in Kanpur with one product — roasted peanuts. Just a dream and a lot of hard work.",
    },
    {
      year:  "2005",
      title: "Peanut Butter Launch",
      desc:  "After years of perfecting the recipe, we launched our signature peanut butter. Sold out in the first week.",
    },
    {
      year:  "2015",
      title: "Cold Pressed Oil",
      desc:  "Expanded into cold-pressed peanut oil — bringing the same zero-compromise philosophy to cooking oil.",
    },
    {
      year:  "2024",
      title: "Scaling Across India",
      desc:  "Now serving 500+ businesses across 12 states. Still the same recipe. Still the same obsession with quality.",
    },
  ];

  return (
    <div style={{ background: brand.bg, minHeight: "100vh" }}>

      {/* SECTION 1: HERO */}
      <section
        className="min-h-screen flex flex-col items-center justify-center px-4 text-center py-32"
        style={{ background: brand.bg }}
      >
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border text-xs font-bold uppercase tracking-widest mb-8"
          style={{ borderColor: brand.border, color: brand.muted }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: brand.orange }}
          />
          Our Story · Est. 1995 · Kanpur, India
        </div>

        <h1
          className="text-5xl md:text-7xl font-black leading-tight mb-6 max-w-4xl"
          style={{ color: brand.brown }}
        >
          We Do Not Make
          <br />
          <span style={{ color: brand.orange }}>
            Good Enough.
          </span>
        </h1>

        <p
          className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
          style={{ color: brand.muted }}
        >
          For nearly three decades, Peanut Shut has been on one mission.
          To make the most honest, most delicious, most uncompromising
          peanut products in India. No shortcuts. No additives. No apologies.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center py-6 px-4 rounded-2xl"
              style={{
                background: brand.card,
                boxShadow: "0 4px 24px rgba(26,10,0,0.06)",
              }}
            >
              <span
                className="text-3xl md:text-4xl font-black mb-1"
                style={{ color: brand.orange }}
              >
                {stat.number}
              </span>
              <span
                className="text-xs font-bold uppercase tracking-widest text-center"
                style={{ color: brand.muted }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: FOUNDER QUOTE */}
      <section
        className="py-24 px-4"
        style={{ background: brand.brown }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="text-8xl font-black leading-none mb-6"
            style={{ color: brand.orange, opacity: 0.4 }}
          >
            "
          </div>

          <blockquote
            className="text-2xl md:text-4xl font-black leading-snug mb-10"
            style={{ color: "#fff" }}
          >
            I started Peanut Shut because I was tired of reading
            ingredient labels and not recognizing half the words.
            <span style={{ color: brand.orange }}>
              {" "}Food should be simple. Real. Honest.
            </span>
          </blockquote>

          <div className="flex flex-col items-center gap-3">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black"
              style={{ background: brand.orange, color: "#fff" }}
            >
              A
            </div>
            <div>
              <p
                className="font-black text-lg"
                style={{ color: "#fff" }}
              >
                Aryan
              </p>
              <p
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ color: brand.orange }}
              >
                Founder and CEO · Kanpur
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TIMELINE */}
      <section
        className="py-24 px-4"
        style={{ background: brand.bg }}
      >
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-16">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: brand.orange }}
            >
              Our Journey
            </p>
            <h2
              className="text-4xl md:text-5xl font-black"
              style={{ color: brand.brown }}
            >
              Nearly 30 Years
              <br />
              <span style={{ color: brand.orange }}>
                of Getting It Right.
              </span>
            </h2>
          </div>

          <div className="relative">
            <div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px"
              style={{ background: brand.border }}
            />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={
                    i % 2 === 0
                      ? "relative flex items-start gap-8 md:flex-row"
                      : "relative flex items-start gap-8 md:flex-row-reverse"
                  }
                >
                  <div
                    className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-4 transform -translate-x-1/2 mt-1"
                    style={{
                      background: brand.orange,
                      borderColor: brand.bg,
                    }}
                  />

                  <div
                    className={
                      i % 2 === 0
                        ? "ml-20 md:ml-0 md:w-5/12 p-6 rounded-2xl md:mr-auto"
                        : "ml-20 md:ml-0 md:w-5/12 p-6 rounded-2xl md:ml-auto"
                    }
                    style={{
                      background: brand.card,
                      boxShadow: "0 4px 24px rgba(26,10,0,0.06)",
                    }}
                  >
                    <span
                      className="text-xs font-black uppercase tracking-widest mb-2 block"
                      style={{ color: brand.orange }}
                    >
                      {item.year}
                    </span>
                    <h3
                      className="text-lg font-black mb-2"
                      style={{ color: brand.brown }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: brand.muted }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: VALUES */}
      <section
        className="py-24 px-4"
        style={{ background: "#f0e0cc" }}
      >
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: brand.orange }}
            >
              What We Stand For
            </p>
            <h2
              className="text-4xl md:text-5xl font-black"
              style={{ color: brand.brown }}
            >
              Three Rules.
              <br />
              <span style={{ color: brand.orange }}>
                No Exceptions.
              </span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {values.map((v, i) => (
              <button
                key={i}
                onClick={() => setActiveValue(i)}
                className="flex-1 py-4 px-6 rounded-2xl text-left transition-all duration-300 font-black text-sm uppercase tracking-widest"
                style={{
                  background: activeValue === i ? brand.brown : brand.card,
                  color: activeValue === i ? "#fff" : brand.muted,
                  boxShadow: activeValue === i
                    ? "0 8px 32px rgba(26,10,0,0.2)"
                    : "0 2px 8px rgba(26,10,0,0.04)",
                }}
              >
                <span className="text-2xl block mb-2">{v.icon}</span>
                {v.title}
              </button>
            ))}
          </div>

          <div
            className="p-8 md:p-12 rounded-3xl"
            style={{
              background: brand.brown,
              boxShadow: "0 16px 48px rgba(26,10,0,0.15)",
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: brand.orange }}
            >
              {values[activeValue].subtitle}
            </p>
            <h3
              className="text-3xl md:text-4xl font-black mb-6"
              style={{ color: "#fff" }}
            >
              {values[activeValue].title}
            </h3>
            <p
              className="text-base leading-relaxed max-w-2xl"
              style={{ color: "#b89880" }}
            >
              {values[activeValue].description}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section
        className="py-24 px-4 text-center"
        style={{ background: brand.bg }}
      >
        <div className="max-w-2xl mx-auto">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: brand.orange }}
          >
            Ready to work with us?
          </p>
          <h2
            className="text-4xl md:text-5xl font-black mb-6"
            style={{ color: brand.brown }}
          >
            Let us Build Something
            <span style={{ color: brand.orange }}> Great.</span>
          </h2>
          <p
            className="text-base mb-10 leading-relaxed"
            style={{ color: brand.muted }}
          >
            Whether you are a retailer, distributor, or just someone
            who loves great peanut products, we would love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm transition-all duration-300 hover:-translate-y-1"
              style={{
                background: brand.orange,
                color: "#fff",
                boxShadow: "0 8px 24px rgba(200,75,17,0.3)",
              }}
            >
              Get In Touch
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "transparent",
                color: brand.brown,
                border: "2px solid #e8d5c0",
              }}
            >
              View Products
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}