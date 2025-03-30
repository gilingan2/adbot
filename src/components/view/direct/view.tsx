"use client"

import AdScript from "@/components/ad-script"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from "react"
// We can't use metadata directly in client components
// The metadata is defined in home-metadata.tsx

export default function DirectView() {
  useEffect(() => {
    // Set up auto-reload every 10 seconds
    const reloadTimer = setTimeout(() => {
      window.location.reload()
    }, 40000) // 10 seconds in milliseconds

    // // Clean up the timer when component unmounts
    return () => clearTimeout(reloadTimer)
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
        <AdScript/>
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

