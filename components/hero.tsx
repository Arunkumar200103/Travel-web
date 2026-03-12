import Image from "next/image"
import { Play } from "lucide-react"

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#ffffff",
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
       
      }}
    >
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          padding: "60px 60px",
          position: "relative",
          maxWidth: "1440px",
          zIndex: 10,
        }}
      >

        {/* LEFT CONTENT */}
        <div style={{ paddingLeft: "40px" }}>
          <p
            style={{
              color: "#DF6951",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Best Destinations around the world
          </p>

          <h1
            style={{
              fontSize: "clamp(52px, 6vw, 84px)",
              fontWeight: 800,
              color: "#1E1D4C",
              lineHeight: 1.08,
              letterSpacing: "-2px",
              margin: "0 0 24px 0",
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Travel,{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              enjoy
              <svg
                style={{
                  position: "absolute",
                  bottom: "-10px",
                  left: 0,
                  width: "100%",
                }}
                viewBox="0 0 260 12"
                fill="none"
              >
                <path
                  d="M2 9C50 3 100 2 130 6C160 10 210 7 258 3"
                  stroke="#F1A501"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            and live a new
            <br />
            and full life
          </h1>

          <p
            style={{
              color: "#888",
              fontSize: "15px",
              lineHeight: 1.9,
              maxWidth: "400px",
              marginBottom: "40px",
            }}
          >
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate
            sell they west hard for the.
          </p>

          {/* BUTTONS */}
          <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
            <button
              style={{
                background: "#F1A501",
                color: "#fff",
                border: "none",
                borderRadius: "12px",
                padding: "16px 36px",
                fontSize: "16px",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 10px 40px rgba(241,165,1,0.45)",
              }}
            >
              Find out more
            </button>

            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <span
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "#DF6951",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 24px rgba(223,105,81,0.5)",
                  flexShrink: 0,
                }}
              >
                <Play style={{ color: "#fff", fill: "#fff", width: "16px", height: "16px", marginLeft: "3px" }} />
              </span>
              <span style={{ color: "#aaa", fontSize: "16px" }}>Play Demo</span>
            </button>
          </div>
        </div>

        {/* RIGHT — circle + image + planes */}
        <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "flex-end", height: "600px" }}>

         <Image
  src="/shapes/cream-shape.png"
  alt="background shape"
  width={650}
  height={650}
  style={{
    position: "absolute",
    top: "-80px",
    right: "-120px",
    zIndex: 1,
    pointerEvents: "none",
  }}
/>


          {/* Traveler image */}
          <Image
            src="/images/traveler.png"
            alt="traveler"
            width={520}
            height={600}
            priority
            style={{
              position: "relative",
              zIndex: 2,
              objectFit: "contain",
              objectPosition: "bottom",
              maxHeight: "580px",
              width: "auto",
            }}
          />
        </div>
      </div>
    </section>
  )
}