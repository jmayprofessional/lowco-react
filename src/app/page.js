import Image from 'next/image'
import NavigationBar from './components/navigationBar'
import HeroSection from './components/heroSection'
import PricingSection from './components/pricingSection'
import ContentSection from './components/contentSection'
import LogoCloud from './components/logoCloud'
import TestimonialCarousel from './components/testimonialCarousel'
import Gallery from './components/gallery'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <NavigationBar />
        <HeroSection backgroundImage="fish_josh.png" />
        <PricingSection />
        <ContentSection />
        <LogoCloud />
        <TestimonialCarousel />
        <Gallery />
        <Footer />
      </div>
    </main>
  )
}
