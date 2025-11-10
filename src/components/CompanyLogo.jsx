import slack from "@/src/assets/slack.png"
import amazon from "@/src/assets/amazon.png"
import woocommerce from "@/src/assets/woocommerce.png"
import meundies from "@/src/assets/meundies.png"
import sitepoint from "@/src/assets/sitepoint.png"
import Image from "next/image"

const CompanyLogo = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint]

  return (
    <div className="w-full container mx-auto py-20 overflow-hidden flex  flex-col sm:flex-row sm:items-center items-start ">
      <div className="w-[300px] shrink-0 px-8 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold sm:text-left  mb-8 sm:mb-0">
        Trusted by leading <br /> global traders & suppliers
      </div>
      <div className="flex animate-marquee whitespace-nowrap">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo || "/placeholder.svg"}
            alt={`Company Logo ${index + 1}`}
            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
        {/* Duplicate logos for seamless loop */}
        {logos.map((logo, index) => (
          <Image
            key={`duplicate-${index}`}
            src={logo || "/placeholder.svg"}
            alt={`Company Logo ${index + 1}`}
            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
      </div>
    </div>
  )
}

export default CompanyLogo
