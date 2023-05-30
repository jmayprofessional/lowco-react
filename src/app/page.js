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
        <ContentSection 
          contentTitle={"What Makes LowCo Different"}
          contentSubTitle={"It's like when fishy guides just know where to go or what to throw, some people are just in tune with what works. We get that."}
          contentParagraphTitle={"We get it because we're about that life."}
          contentParagraph={"I know everyone thinks AI is going to rule the world but, between you and me we're far from robots. When you work with us you get access to actual people with fishing industry experience and technical expertise. Good enough for the U.S. Navy but, also quality and low priced for local guides. Take full advantage of what sets us apart from some dude slinging shitty websites."}
          featureOne={"Insanely responsive customer support, you actually call my personal phone. Is it scalable over time as we grow? I don't care, I want people to feel good about doing the biz with us so hit me up any time. That's my part of the bargain."}
          featureTwo={"Hands Off website options for fishy guys who just simply don't have time to mess with website stuff. Lets face it: it's hard and it's not fun. Owning a biz is hard enough. Let us do the not fun work."}
          featureThree={"Pay as you go model, you do your thing until you don't want to. Buck stops there, no traps, no gimmicks, we're all biz here so we get it. Do your thing, do what's best for the biz and your fam."}
          contentImage={"LowCo Guide Sites.png"}
          />
        <LogoCloud />
        <TestimonialCarousel />
        <Gallery />
        <Footer />
      </div>
    </main>
  )
}
