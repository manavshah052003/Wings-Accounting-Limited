import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";


import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <About />
        <Services />
        <Testimonials />


        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
