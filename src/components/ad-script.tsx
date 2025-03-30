"use client"

import { useAdScript } from "@/lib/AdScriptProvider"
import React, { useEffect, useRef } from "react"


interface AdScriptProps {
  className?: string
}
const AdScript: React.FC<AdScriptProps> = ({ className = "ad-container" }) => {
  const { adScriptOptions, scriptSrc, directLink } = useAdScript()
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptLoaded = useRef(false)

  useEffect(() => {
    // Create a unique instance of options for this component
    const instanceOptions = {...adScriptOptions}
    
    // Create and append script if not already loaded for this instance
    if (containerRef.current && scriptSrc && !scriptLoaded.current) {
      // Set options for this specific instance
      const uniqueVarName = `atOptions_${Math.random().toString(36).substring(2, 9)}`
      ;(window as any)[uniqueVarName] = instanceOptions
      
      // Create script with reference to this instance's options
      const script = document.createElement("script")
      script.innerHTML = `window.atOptions = window.${uniqueVarName};`
      containerRef.current.appendChild(script)
      
      // Create and append the main script
      const mainScript = document.createElement("script")
      mainScript.src = scriptSrc
      mainScript.async = true
      containerRef.current.appendChild(mainScript)
      
      scriptLoaded.current = true
    }

    // Cleanup function
    return () => {
      if (containerRef.current) {
        const scripts = containerRef.current.querySelectorAll('script')
        scripts.forEach(script => {
          containerRef.current?.removeChild(script)
        })
        scriptLoaded.current = false
      }
    }
  }, [scriptSrc, adScriptOptions])

  return (
    <>
      <div
        ref={containerRef}
        className="ad-container flex h-full items-center justify-center"
      ></div>
    </>
  )
}

export default AdScript