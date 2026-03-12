"use client"

import Image from "next/image"
import { Heart } from "lucide-react"

export default function BookingSteps() {
  return (
    <section className="py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>

          <p className="text-[#5E6282] font-semibold tracking-wide">
            Easy and Fast
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#14183E] mt-3 leading-tight">
            Book Your Next Trip
            <br />
            In 3 Easy Steps
          </h2>

          {/* STEP 1 */}
          <div className="flex gap-4 mt-10">
            <div className="w-12 h-12 bg-[#F0BB1F] rounded-xl flex items-center justify-center">
              <Image src="/icons/destination.svg" alt="" width={24} height={24}/>
            </div>

            <div>
              <h4 className="font-semibold text-[#5E6282]">
                Choose Destination
              </h4>
              <p className="text-[#5E6282] text-sm mt-1 max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Urna, tortor tempus.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="flex gap-4 mt-8">
            <div className="w-12 h-12 bg-[#F15A2B] rounded-xl flex items-center justify-center">
              <Image src="/icons/payment.svg" alt="" width={24} height={24}/>
            </div>

            <div>
              <h4 className="font-semibold text-[#5E6282]">
                Make Payment
              </h4>
              <p className="text-[#5E6282] text-sm mt-1 max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Urna, tortor tempus.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="flex gap-4 mt-8">
            <div className="w-12 h-12 bg-[#006380] rounded-xl flex items-center justify-center">
              <Image src="/icons/airport.svg" alt="" width={24} height={24}/>
            </div>

            <div>
              <h4 className="font-semibold text-[#5E6282]">
                Reach Airport on Selected Date
              </h4>
              <p className="text-[#5E6282] text-sm mt-1 max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Urna, tortor tempus.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center">

          {/* MAIN TRIP CARD */}
          <div className="bg-white rounded-3xl shadow-xl p-6 w-[320px]">

            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/greece.jpg"
                alt="Trip to Greece"
                width={300}
                height={160}
                className="object-cover"
              />
            </div>

            <h3 className="mt-4 font-semibold text-[#14183E]">
              Trip To Greece
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              14-29 June | by Robbin Jobs
            </p>

            <div className="flex items-center gap-4 mt-4">
              <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <p className="text-sm text-gray-500">24 people going</p>

              <Heart className="text-gray-400" size={20}/>
            </div>
          </div>

          {/* FLOATING CARD */}
          <div className="absolute -right-20 bottom-10 bg-white rounded-2xl shadow-lg p-4 w-[240px]">

            <p className="text-xs text-gray-400">
              Ongoing
            </p>

            <h4 className="font-semibold text-sm mt-1">
              Trip to Rome
            </h4>

            <p className="text-xs text-gray-500 mt-1">
              40% completed
            </p>

            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-purple-500 h-2 rounded-full w-[40%]"></div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}