import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";


export const metadata = {
  title: "Melissa Ayn Caro - Expert Financial Consulting and Investment Advisory",
  description: "Secure your financial future with Melissa Ayn Caro, an expert in broker services, financial consulting, digital currency trading, stock brokerage, financial planning, estate planning, insurance, risk management, and tax preparation. With over 24 years of experience, Melissa provides comprehensive and personalized financial solutions to help you achieve your goals. Contact us today to start planning your financial success.",
  keywords: "financial consulting, broker services, digital currency trading, stock brokerage, financial planning, estate planning, insurance, risk management, tax preparation, investment advisory, Melissa Ayn Caro",
  author: "Melissa Ayn Caro",
  robots: "index, follow",
  og: {
    title: "Melissa Ayn Caro - Expert Financial Consulting and Investment Advisory",
    description: "Secure your financial future with Melissa Ayn Caro, an expert in broker services, financial consulting, digital currency trading, stock brokerage, financial planning, estate planning, insurance, risk management, and tax preparation. Contact us today to start planning your financial success.",
    image: "/path_to_image.jpg",
    url: "https://melissaayncaro.com",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Melissa Ayn Caro - Expert Financial Consulting and Investment Advisory",
    description: "Secure your financial future with Melissa Ayn Caro, an expert in broker services, financial consulting, digital currency trading, stock brokerage, financial planning, estate planning, insurance, risk management, and tax preparation. Contact us today to start planning your financial success.",
    image: "/path_to_image.jpg"
  }
};


export default function Home() {
       
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      <Blog />
    </main>
  );
}
