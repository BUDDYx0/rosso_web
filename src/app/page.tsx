import HomeHero from "@/app/components/HomeHero";
import HomeNews from "@/app/components/HomeNews";
import HomeEvents from "@/app/components/HomeEvents";

export default function Home() {
  return (
      <main className={'bg-post-bg bg-no-repeat bg-top bg-cover bg-fixed'}>
          <HomeHero/>
          <HomeNews/>
          <HomeEvents/>
      </main>
  )
}
