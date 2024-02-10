import Image from 'next/image'
import GlobalNavigation from "@/app/components/GlobalNavigation";
import HomeHero from "@/app/components/HomeHero";
import HomeNews from "@/app/components/HomeNews";
import HomeEvents from "@/app/components/HomeEvents";

export default function Home() {
  return (
      <main>
          <HomeHero/>
          <HomeNews/>
          <HomeEvents/>
      </main>
  )
}
