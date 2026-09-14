import smartSecurity from "@/assets/fedtech-smart-security.jpg";
import dataCenter from "@/assets/fedtech-data-center.jpg";
import aiIot from "@/assets/fedtech-ai-iot.jpg";
import products from "@/assets/fedtech-products.jpg";
import droneIot from "@/assets/fedtech-drone-iot.jpg";

export const productGroups = [
  {
    title: "Surveillance",
    items: ["Dome Type CCTV", "Bullet Type CCTV", "PTZ Type CCTV", "Traffic Surveillance", "Body Camera System"],
  },
  {
    title: "Network & Infrastructure",
    items: ["Network Switch", "Digital Network Device", "Network Video Recorder", "Storage", "Video Management Platform", "Video Management Server"],
  },
  {
    title: "Smart & Emerging Tech",
    items: ["IoT Sensors", "Unmanned Aerial Vehicle", "Document and Biometrics", "Access Control", "LED Street Lighting", "Visual & Displays", "LMM Software", "Other Accessories"],
  },
];

export const slides = [
  {
    image: smartSecurity,
    eyebrow: "Global technology, engineered for impact",
    title: "Leading Tech Horizons, One Solution at a Time",
    copy: "Fedtech delivers cutting-edge IT product solutions spanning security, networking, and AI.",
    cta: "Explore Solutions",
    target: "#solutions",
  },
  {
    image: products,
    eyebrow: "Always-on protection",
    title: "Advanced CCTV Security Solutions",
    copy: "Round-the-clock surveillance technology that protects your assets and premises with unmatched vigilance.",
    cta: "View Products",
    target: "#products",
  },
  {
    image: dataCenter,
    eyebrow: "Built for uninterrupted growth",
    title: "Integrated Data Center & Network Solutions",
    copy: "Seamless connectivity and scalability with our Container Data Center and network infrastructure.",
    cta: "Learn More",
    target: "#about",
  },
  {
    image: aiIot,
    eyebrow: "Connected intelligence",
    title: "AI & IoT-Powered Innovation",
    copy: "Harness automation, real-time insights, and smarter connected systems across homes, businesses, and industries.",
    cta: "Discover AI Solutions",
    target: "#solutions",
  },
];

export const productsList = [
  { name: "CCTV Security Solution", description: "Experience peace of mind with advanced CCTV security. Round-the-clock surveillance protects your assets and premises with unmatched vigilance.", image: products, alt: "Dome and bullet CCTV cameras with network hardware" },
  { name: "Integrated Data Center Solution", description: "Unlock seamless connectivity and scalability with our integrated Network and Container Data Center solution, built for efficiency and streamlined operations.", image: dataCenter, alt: "Modern data center corridor with illuminated server racks" },
  { name: "AI & Software Solutions", description: "Elevate your capabilities with AI-powered software. Harness artificial intelligence to drive insights, efficiency, and innovation.", image: aiIot, alt: "AI edge computing and connected sensor equipment" },
  { name: "Internet of Things", description: "Fedtech IoT connects devices, sensors, and systems to share data and work smarter together, enabling automation and real-time insights.", image: droneIot, alt: "Industrial IoT sensors and drone monitoring a facility" },
  { name: "Digital Network Device (WIFI6 ONU)", description: "The pinnacle in digital connectivity—enhanced speed, expanded bandwidth, and a forward-thinking solution for reliable infrastructure.", image: products, alt: "Enterprise network switch and security equipment" },
];

export const categories = productGroups.flatMap((group) => group.items);

export { products as introImage };