export function Services() {
  const services = [
    {
      icon: "/icons/weather.png",
      title: "Calculated Weather",
      description:
        "Built Wicket longer admire do barton vanity itself do in it.",
    },
    {
      icon: "/icons/flight.png",
      title: "Best Flights",
      description:
        "Engrossed listening. Park gate sell they west hard for the.",
      active: true,
    },
    {
      icon: "/icons/events.png",
      title: "Local Events",
      description:
        "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    },
    {
      icon: "/icons/custom.png",
      title: "Customization",
      description:
        "We deliver outsourced aviation services for military customers.",
    },
  ];

  return (
    <section className="relative py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-[#5E6282] uppercase tracking-widest text-[18px] font-semibold">
            Category
          </p>

          <h2 className="font-heading text-[#14183E] text-[50px] font-bold mt-4">
            We Offer Best Services
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">

          {services.map((service, i) => (
            <div key={i} className="relative text-center">

              {/* Orange background shape for active card */}
              {service.active && (
                <div className="absolute -bottom-6 -left-6 w-[90px] h-[90px] bg-[#DF6951] rounded-[30px] z-0"></div>
              )}

              {/* CARD */}
              <div
                className={`relative z-10 p-10 rounded-[36px] transition duration-300
                ${service.active
                    ? "bg-white shadow-[0_30px_60px_rgba(0,0,0,0.1)]"
                    : "hover:bg-white hover:shadow-lg"
                  }`}
              >
                {/* ICON */}
                <div className="flex justify-center mb-6">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-[60px] h-[60px]"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-[20px] font-semibold text-[#1E1D4C] mb-4">
                  {service.title}
                </h3>

                {/* DESC */}
                <p className="text-[#5E6282] text-[15px] leading-[26px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Decorative + pattern */}

        
       {/* PLUS GRID — bottom right, outside card */}
             <div className="absolute right-16 top-16 grid grid-cols-5  gap-4 opacity-50" >
          {[
            "w","w","w","w",
            "w","w","r","w",
            "w","w","w","b",
            "w","w","w","w",
            "w","w","w","w",
          ].map((color, i) => (
            <span
              key={i}
              style={{
                fontSize: "18px",
                fontWeight: 300,
                color:
                  color === "r"
                    ? "#FF5C5C"
                    : color === "b"
                    ? "#747DEF"
                    : "rgba(25, 23, 23, 0.35)",
                lineHeight: 1,
                display: "block",
                width: "18px",
                textAlign: "center",
              }}
            >
              +
            </span>
          ))}
        </div>
    </section>
  );
}