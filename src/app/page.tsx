import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { InfiniteMovingCard } from "@/components/InfiniteMovingCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
   <>
     <main className="min-h-screen  bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <InfiniteMovingCard/>
      <UpcomingWebinars/>
     </main>
   </>
  );
  
}
