"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export default function Subscribe() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(email)
    setEmail("")
  }

  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        boxSizing: "border-box",
      }}
    >
      {/* Outer wrapper — positions the plus grid OUTSIDE the card */}
      <div style={{ position: "relative", width: "100%", maxWidth: "1100px" }}>

        {/* PLUS GRID — bottom right, outside card */}
        <div
          style={{
            position: "absolute",
            bottom: "-20px",
            right: "-60px",
            display: "grid",
            
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "14px",
            zIndex: 0,
          }}
        >
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

        {/* PAPER PLANE CIRCLE — top right, outside/overlapping card */}
        <div
          style={{
            position: "absolute",
            top: "-28px",
            right: "60px",
            width: "64px",
            height: "64px",
            background: "#6C63FF",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 30px rgba(108,99,255,0.6)",
            zIndex: 20,
          }}
        >
          <Send style={{ color: "#fff", width: "24px", height: "24px", transform: "rotate(-10deg)" }} />
        </div>

        {/* MAIN CARD */}
        <div
          style={{
            position: "relative",
            background: "#f5f5f5",
            borderRadius: "50px",
            padding: "72px 80px",
            overflow: "hidden",
          }}
        >

          {/* LEFT ARC LINES — emanating from bottom-left */}
          <svg
            style={{ position: "absolute", left: 0, bottom: 0, pointerEvents: "none" }}
            width="380"
            height="380"
            viewBox="0 0 380 380"
            fill="none"
          >
            {[380, 320, 260, 200, 140].map((r, i) => (
              <path
                key={i}
                d={`M0 380 A${r} ${r} 0 0 1 ${r} 0`}
                stroke="rgba(120,110,200,0.3)"
                strokeWidth="1.5"
                fill="none"
              />
            ))}
          </svg>

          {/* RIGHT ARC LINES — emanating from top-right */}
          <svg
            style={{ position: "absolute", right: 0, top: 0, pointerEvents: "none" }}
            width="380"
            height="380"
            viewBox="0 0 380 380"
            fill="none"
          >
            {[380, 320, 260, 200, 140].map((r, i) => (
              <path
                key={i}
                d={`M380 0 A${r} ${r} 0 0 0 ${380 - r} ${r}`}
                stroke="rgba(120,110,200,0.3)"
                strokeWidth="1.5"
                fill="none"
              />
            ))}
          </svg>

          {/* CONTENT */}
          <div
            style={{
              position: "relative",
              zIndex: 10,
              textAlign: "center",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(20px, 2.4vw, 30px)",
                fontWeight: 700,
                color: "#7B7B9A",
                marginBottom: "44px",
                lineHeight: 1.5,
              }}
            >
              Subscribe to get information, latest news and other
              <br />
              interesting offers about Jadoo
            </h2>

            {/* FORM ROW */}
            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {/* Email Input */}
              <div
                style={{
                  position: "relative",
                  flex: "1",
                  maxWidth: "460px",
                  minWidth: "260px",
                }}
              >
                <svg
                  style={{
                    position: "absolute",
                    left: "18px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "20px",
                    height: "20px",
                  }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#aaa"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 7 10-7"/>
                </svg>

                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    paddingLeft: "52px",
                    paddingRight: "20px",
                    paddingTop: "18px",
                    paddingBottom: "18px",
                    borderRadius: "10px",
                    border: "none",
                    background: "#ffffff",
                    fontSize: "15px",
                    color: "#555",
                    outline: "none",
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              {/* Subscribe Button */}
              <button
                onClick={handleSubmit}
                style={{
                  background: "linear-gradient(to right, #FF9261, #FF6B58)",
                  border: "none",
                  borderRadius: "10px",
                  padding: "18px 44px",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: 500,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  fontFamily: "inherit",
                  letterSpacing: "0.02em",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}