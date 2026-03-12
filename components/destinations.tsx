import Image from "next/image"
import { Navigation } from "lucide-react"

export function Destinations() {
  const destinations = [
    {
      image: "/images/rome.jpg",
      city: "Rome, Italy",
      price: "$5.42k",
      duration: "10 Days Trip"
    },
    {
      image: "/images/london.jpg",
      city: "London, UK",
      price: "$4.2k",
      duration: "12 Days Trip"
    },
    {
      image: "/images/europe.jpg",
      city: "Full Europe",
      price: "$15k",
      duration: "28 Days Trip"
    }
  ]

  return (
    <section className="w-full px-4 md:px-8 lg:px-16 xl:px-24 py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#5E6282] text-base md:text-lg font-semibold mb-2">Top Selling</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14183E]">Top Destinations</h2>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-[300px] md:h-[350px] overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.city}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-[#5E6282]">{destination.city}</h3>
                  <span className="text-lg font-medium text-[#5E6282]">{destination.price}</span>
                </div>
                
                <div className="flex items-center gap-2 text-[#5E6282]">
                  <Navigation className="w-4 h-4" />
                  <span className="text-sm">{destination.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
