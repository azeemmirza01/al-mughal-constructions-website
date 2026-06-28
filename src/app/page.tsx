import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <About />
        <Services />
        <WhyChooseUs />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
