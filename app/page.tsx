import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="absolute -top-[60px] left-3 z-[200] rounded-b-md bg-safety px-[18px] py-2.5 font-semibold text-white no-underline focus:top-0"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <Services />
        <About />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
