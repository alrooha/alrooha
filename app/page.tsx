"use client"

import Navbar from "@/src/components/Navbar"
import Hero from "@/src/components/Hero"
import CompanyLogo from "@/src/components/CompanyLogo"
import PurposeSection from "@/src/components/PurposeSection"
import FeaturesSection from "@/src/components/FeaturesSection"
import ScheduleSection from "@/src/components/ScheduleSection"
import MonitorSection from "@/src/components/MonitorSection"
import PricingSection from "@/src/components/PricingSection"
import ServicesSection from "@/src/components/ServicesSection"
import TestimonialsSection from "@/src/components/TestimonialsSection"
import NewsletterSection from "@/src/components/NewsletterSection"
import Footer from "@/src/components/Footer"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white dark:bg-gray-950">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 dark:from-indigo-500/10 to-pink-500/20 dark:to-pink-500/10 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeaturesSection />
        <ScheduleSection />
        <MonitorSection />
        <PricingSection />
        <ServicesSection />
        <TestimonialsSection />
        <NewsletterSection />
        <Footer />
      </div>
    </main>
  )
}
