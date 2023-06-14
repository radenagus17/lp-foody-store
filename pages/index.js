import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Middle from "@/components/Middle";
import MiddleTop from "@/components/MiddleTop";
import NavMobile from "@/components/NavMobile";
import Navbar from "@/components/Navbar";
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center ${rubik.className} bg-white text-black`}
    >
      <section className="before:absolute before:inset-0 before:bg-hero-pattern before:bg-no-repeat before:bg-cover before:opacity-5">
        <Navbar />
        <Hero />
      </section>
      <section>
        <MiddleTop />
      </section>
      <section>
        <Middle />
      </section>
      <section>
        <Footer />
      </section>
      <NavMobile />
    </main>
  );
}
