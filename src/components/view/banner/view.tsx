"use client"

import AdScript from "@/components/ad-script"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from "react"
// We can't use metadata directly in client components
// The metadata is defined in home-metadata.tsx

export default function BannerView() {
  useEffect(() => {
    // Set up auto-reload every 10 seconds
    // const reloadTimer = setTimeout(() => {
    //   window.location.reload()
    // }, 10000) // 10 seconds in milliseconds

    // // Clean up the timer when component unmounts
    // return () => clearTimeout(reloadTimer)
  }, []) // Empty dependency array ensures this runs once after initial render

  return (
    <div className="container mx-auto px-4 py-12">
    <div className="flex flex-col items-center justify-center space-y-8 text-center">
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6">
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center">Entertainment Beyond Technology</h1>
            <p className="text-lg mt-2 text-center">Exploring the World of Online Entertainment Outside Tech</p>
        </div>
    </div>
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Banner Page</h1>
      <AdScript/>
      <AdScript/>
        <div className="px-6 py-4">
        
        
            <p className="text-gray-700 leading-relaxed mb-4">
                In recent years, online platforms have expanded their reach beyond traditional tech-centric content. From virtual art galleries to live-streamed theater performances, the internet has become a hub for diverse forms of entertainment that cater to a wide range of interests.
            </p>
            
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">The Power of Digital Storytelling</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
                One of the most exciting developments in online entertainment is the rise of digital storytelling. Platforms like Patreon, Substack, and Wattpad allow creators to share serialized fiction, poetry, essays, and even graphic novels directly with their audiences. This model not only supports independent artists financially but also fosters a sense of community among readers who can engage with creators through comments, feedback, and discussions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
                For example, many authors now release chapters of their novels weekly or monthly, creating anticipation and engagement similar to television series. Readers can follow along, participate in polls about future plotlines, and even influence the direction of the story. This interactive form of storytelling has redefined how people consume literature and narrative art.
            </p>

            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Virtual Cultural Experiences</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
                Another growing trend is the integration of cultural experiences into online spaces. Museums, galleries, and historical sites have embraced virtual tours, allowing users to explore exhibits from the comfort of their homes. Platforms like Google Arts & Culture partner with institutions worldwide to bring high-resolution images and immersive experiences to anyone with an internet connection.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
                Similarly, cooking classes hosted by chefs from around the globe enable participants to learn new recipes and techniques while gaining insights into different culinary traditions. These virtual workshops often include live Q&A sessions, making them feel personal and interactive despite the physical distance.
            </p>

            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Music and Performance Art Online</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
                Live-streamed concerts and performances have revolutionized how we experience music and theater. Artists, unable to perform in traditional venues due to various constraints, have turned to platforms like YouTube, Twitch, and Instagram Live to connect with fans. These virtual shows often feature unique setlists, behind-the-scenes footage, and exclusive interactions, creating a more intimate experience than large-scale events.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
                Dance companies and theater troupes have also adapted to this format, offering pre-recorded performances or live-streamed plays. Some productions use green screens and special effects to enhance the viewing experience, proving that creativity knows no bounds—even in a digital space.
            </p>
            <AdScript/>
            <AdScript/>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Gaming as Entertainment</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
                While gaming might seem inherently tied to technology, its role in online entertainment goes far beyond mere gameplay. Streaming platforms like Twitch and YouTube Gaming have created communities where gamers share not just their skills but also their personalities. Viewers tune in not only to watch competitive matches but also to enjoy the humor, commentary, and camaraderie that streamers bring to the table.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
                Moreover, games themselves are becoming storytelling mediums. Titles like "The Last of Us," "Red Dead Redemption 2," and "Cyberpunk 2077" offer cinematic narratives that rival blockbuster movies. Players aren't just consumers; they're active participants in shaping the story's outcome, adding another layer of immersion to the experience.
            </p>

            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">The Future of Online Entertainment</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
                As technology continues to evolve, so too will the ways we entertain ourselves online. Emerging technologies like augmented reality (AR), virtual reality (VR), and artificial intelligence (AI) promise to push boundaries further. Imagine attending a fully immersive VR concert where you can interact with other attendees or exploring a museum exhibit enhanced by AR overlays that bring artifacts to life.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
                However, it's important to remember that at the heart of all these innovations lies human connection. Whether it's sharing a laugh during a live stream, discovering a new favorite artist, or learning a recipe passed down through generations, online entertainment thrives on the shared experiences it creates.
            </p>

        </div>
        <AdScript/>
        <AdScript/>
      <div className="flex flex-col sm:flex-row gap-4">

        <Button asChild>
          <Link href="/">Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/direct">Direct Page</Link>
        </Button>

      </div>
    </div>
  </div>
  )
}

