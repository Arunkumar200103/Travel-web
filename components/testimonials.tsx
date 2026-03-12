"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronUp, ChevronDown } from "lucide-react"

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  const testimonials = [
    {
      quote:
        "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
      name: "Mike Taylor",
      location: "Lahore, Pakistan",
      image: "/images/testimonial-avatar.jpg",
    },
    {
      quote:
        "Amazing experience booking through Jadoo. Everything was smooth and the trip was unforgettable.",
      name: "Chris Thomas",
      location: "CEO of Red Button",
      image: "/images/testimonial-avatar.jpg",
    },
    {
      quote:
        "Booking with Jadoo was incredibly easy. I highly recommend it for travel lovers.",
      name: "Sarah Wilson",
      location: "London, UK",
      image: "/images/testimonial-avatar.jpg",
    },
  ]

  const next = () => {
    if (index < testimonials.length - 1) setIndex(index + 1)
  }

  const prev = () => {
    if (index > 0) setIndex(index - 1)
  }

  return (
    <section className="py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">

        {/* LEFT SIDE */}
        <div className="flex-1">
          <p className="text-[#5E6282] font-semibold tracking-widest">
            TESTIMONIALS
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#14183E] mt-4 leading-tight">
            What People Say
            <br />
            About Us.
          </h2>

          {/* DOTS */}
          <div className="flex gap-4 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  index === i ? "bg-[#39425D]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 relative flex items-center">

          {/* BACK CARD */}
          <div className="absolute top-12 left-12 w-full max-w-md bg-white rounded-xl shadow-lg p-8 opacity-70">
            <p className="text-gray-500 leading-relaxed">
              {testimonials[(index + 1) % testimonials.length].quote}
            </p>

            <div className="mt-6">
              <h4 className="font-semibold text-gray-700">
                {testimonials[(index + 1) % testimonials.length].name}
              </h4>
              <p className="text-sm text-gray-500">
                {testimonials[(index + 1) % testimonials.length].location}
              </p>
            </div>
          </div>

          {/* FRONT CARD */}
          <div className="relative bg-white rounded-xl shadow-xl p-10 max-w-md z-10">

            {/* AVATAR */}
            <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow">
              <Image
                src={testimonials[index].image}
                alt="avatar"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-[#5E6282] text-lg leading-relaxed mb-8">
              {testimonials[index].quote}
            </p>

            <div>
              <h4 className="font-semibold text-[#5E6282] text-lg">
                {testimonials[index].name}
              </h4>
              <p className="text-sm text-[#5E6282]">
                {testimonials[index].location}
              </p>
            </div>
          </div>

          {/* ARROWS */}
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 flex flex-col gap-4">

            <button
              onClick={prev}
              className="w-10 h-10 bg-white shadow rounded-full flex items-center justify-center"
            >
              <ChevronUp size={20} />
            </button>

            <button
              onClick={next}
              className="w-10 h-10 bg-white shadow rounded-full flex items-center justify-center"
            >
              <ChevronDown size={20} />
            </button>

          </div>

        </div>
      </div>
    </section>
  )
}