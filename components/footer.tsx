import Link from "next/link"

export function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        background: "#ffffff",
        padding: "64px 80px 40px 80px",
        boxSizing: "border-box",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

        {/* MAIN GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1.6fr",
            gap: "40px",
            marginBottom: "60px",
            alignItems: "start",
          }}
        >

          {/* COL 1 — Logo + Description */}
          <div>
            <Link href="/" style={{ textDecoration: "none" }}>
              <span
                style={{
                  fontSize: "42px",
                  fontWeight: 800,
                  color: "#1E1D4C",
                  letterSpacing: "-1px",
                  lineHeight: 1,
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                Jadoo<span style={{ color: "#DF6951" }}>.</span>
              </span>
            </Link>
            <p style={{ fontSize: "14px", color: "#5E6282", lineHeight: 1.7, maxWidth: "200px", margin: 0 }}>
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          {/* COL 2 — Company */}
          <div>
            <h4
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#1E1D4C",
                marginBottom: "24px",
                marginTop: 0,
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {["About", "Careers", "Mobile"].map((item) => (
                <li key={item}>
                  <Link href="#" style={{ fontSize: "15px", color: "#5E6282", textDecoration: "none" }}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3 — Contact */}
          <div>
            <h4
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#1E1D4C",
                marginBottom: "24px",
                marginTop: 0,
              }}
            >
              Contact
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {["Help/FAQ", "Press", "Affilates"].map((item) => (
                <li key={item}>
                  <Link href="#" style={{ fontSize: "15px", color: "#5E6282", textDecoration: "none" }}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4 — More */}
          <div>
            <h4
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#1E1D4C",
                marginBottom: "24px",
                marginTop: 0,
              }}
            >
              More
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {["Airlinefees", "Airline", "Low fare tips"].map((item) => (
                <li key={item}>
                  <Link href="#" style={{ fontSize: "15px", color: "#5E6282", textDecoration: "none" }}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 5 — Social + Apps */}
          <div>
            {/* Social Icons */}
            <div style={{ display: "flex", gap: "14px", marginBottom: "28px" }}>
              {/* Facebook */}
              <a
                href="#"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "#fff",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
                  <path d="M6.5 6.5V4.5C6.5 3.7 7.1 3 8 3H9.5V0.5H7C4.5 0.5 3 2.2 3 4.5V6.5H0.5V9H3V17.5H6.5V9H8.8L9.5 6.5H6.5Z" fill="#1E1D4C"/>
                </svg>
              </a>

              {/* Instagram */}
<a
  href="#"
  style={{
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle at 30% 30%, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
  }}
>
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
  </svg>
</a>

              {/* Twitter */}
              <a
                href="#"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "#fff",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <svg width="18" height="15" viewBox="0 0 18 15" fill="none">
                  <path d="M18 1.8C17.3 2.1 16.6 2.3 15.8 2.4C16.6 1.9 17.2 1.1 17.5 0.3C16.7 0.8 15.8 1.1 14.9 1.3C14.1 0.5 13 0 11.8 0C9.4 0 7.5 1.9 7.5 4.3C7.5 4.6 7.5 4.9 7.6 5.2C5 5.1 2.6 3.8 1.1 1.8C0.8 2.4 0.6 3.1 0.6 3.8C0.6 5.2 1.3 6.4 2.4 7.1C1.7 7.1 1.1 6.9 0.5 6.6V6.7C0.5 8.8 2 10.5 3.9 10.9C3.6 11 3.3 11 2.9 11C2.7 11 2.4 11 2.2 10.9C2.7 12.6 4.3 13.8 6.2 13.9C4.7 15.1 2.8 15.8 0.8 15.8C0.5 15.8 0.2 15.8 0 15.7C1.9 17 4.2 17.7 6.6 17.7C14 17.7 18 11.7 18 6.5V6C18.8 5.4 19.5 4.7 20 3.9L18 1.8Z" fill="#1E1D4C"/>
                </svg>
              </a>
            </div>

            {/* Discover our app */}
            <p style={{ fontSize: "15px", fontWeight: 600, color: "#1E1D4C", marginBottom: "14px", marginTop: 0 }}>
              Discover our app
            </p>

            {/* App Store Badges */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {/* Google Play */}
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#111",
                  borderRadius: "8px",
                  padding: "8px 14px",
                  textDecoration: "none",
                  border: "1px solid #333",
                }}
              >
                {/* Google Play triangle icon */}
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                  <path d="M1 1L11 11L1 21V1Z" fill="#EA4335"/>
                  <path d="M1 1L14 7.5L11 11L1 1Z" fill="#FBBC04"/>
                  <path d="M1 21L11 11L14 14.5L1 21Z" fill="#34A853"/>
                  <path d="M14 7.5L19 10.5L14 13.5L11 11L14 7.5Z" fill="#4285F4"/>
                </svg>
                <div>
                  <div style={{ fontSize: "8px", color: "#aaa", lineHeight: 1.2 }}>GET IT ON</div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "#fff", lineHeight: 1.3 }}>Google Play</div>
                </div>
              </a>

              {/* Apple Store */}
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#111",
                  borderRadius: "8px",
                  padding: "8px 14px",
                  textDecoration: "none",
                  border: "1px solid #333",
                }}
              >
                {/* Apple logo */}
                <svg width="18" height="22" viewBox="0 0 814 1000" fill="white">
                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 71 0 130.5 46.4 174.9 46.4 42.7 0 109.2-49 192.5-49 31 0 108.3 2.6 168.4 71.8zm-194.3-86.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
                </svg>
                <div>
                  <div style={{ fontSize: "8px", color: "#aaa", lineHeight: 1.2 }}>Available on the</div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "#fff", lineHeight: 1.3 }}>Apple Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "24px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "14px", color: "#5E6282", margin: 0 }}>
            All rights reserved@jadoo.co
          </p>
        </div>
      </div>
    </footer>
  )
}