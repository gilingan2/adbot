import type { Metadata } from "next";
import BannerView from "@/components/view/banner/view"
export const metadata = {
    title: "Banner Page",
  }
  export default function BannerPage() {
    return (
     <BannerView />
    )
  }
  
  