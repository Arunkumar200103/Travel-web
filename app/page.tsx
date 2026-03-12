import { Header } from "@/components/header"
import  Hero  from "@/components/hero"
import { Services } from "@/components/services"
import { Destinations } from "@/components/destinations"
import  BookingSteps  from "@/components/booking-steps"
import Testimonials  from "@/components/testimonials"
import  Partners  from "@/components/partners"
import Subscribe  from "@/components/subscribe"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Destinations />
      <BookingSteps />
      <Testimonials />
      <Partners />
      <Subscribe />
      <Footer />
    </main>
  )
}
