"use client"

import { useEffect } from "react"
// We can't use metadata directly in client components
// The metadata is defined in home-metadata.tsx

export default function HomeView() {
  useEffect(() => {
    const reloadTimer = setTimeout(() => {
      window.location.reload()
    }, 10000) // 10 seconds in milliseconds

    // Clean up the timer when component unmounts
    return () => clearTimeout(reloadTimer)
  }, []) // Empty dependency array ensures this runs once after initial render

  return (
    <div className="flex flex-row w-full">
      {/* First iframe - full screen height */}
      <div className="w-full h-screen">
        <iframe
          src="https://bio-king.vercel.app/GIAOVJ"
          className="w-full h-full border-0"
          title="Bio King Full Screen"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Second iframe - half screen height */}
      <div className="w-full h-screen">
        <iframe
          src="https://bio-king.vercel.app/GIAOVJ"
          className="w-full h-full border-0"
          title="Bio King Half Screen"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}

