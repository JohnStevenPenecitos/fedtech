import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/viruni/Header";
import { HeroSlider } from "@/components/viruni/HeroSlider";
import { BenefitsGrid, CategoryGrid, ContactCTA, FeaturedProducts, IntroSection } from "@/components/viruni/Sections";
import { Footer } from "@/components/viruni/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Viruni | Global IT & Technology Solutions" },
      { name: "description", content: "Viruni delivers global security, network infrastructure, IoT and AI-powered technology solutions." },
      { property: "og:title", content: "Viruni | Global IT & Technology Solutions" },
      { property: "og:description", content: "Security, connectivity and intelligence engineered for tomorrow." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cleanup = () => {};
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      const context = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => gsap.from(element, { scrollTrigger: { trigger: element, start: "top 84%", toggleActions: "play none none none" }, y: 28, opacity: 0, duration: 0.8, ease: "power2.out" }));
        gsap.utils.toArray<HTMLElement>(".stagger-grid").forEach((group) => gsap.from(group.children, { scrollTrigger: { trigger: group, start: "top 84%", toggleActions: "play none none none" }, y: 24, opacity: 0, duration: 0.7, stagger: { each: 0.09, amount: 0.85 }, ease: "power2.out" }));
        gsap.from(".footer-reveal", { scrollTrigger: { trigger: ".footer-reveal", start: "top 90%", toggleActions: "play none none none" }, opacity: 0, duration: 0.8 });
        gsap.to(".hero-media", { scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }, yPercent: 8, ease: "none" });
        gsap.to(".parallax-image", { scrollTrigger: { trigger: ".intro-image", start: "top bottom", end: "bottom top", scrub: true }, yPercent: 7, ease: "none" });
        ScrollTrigger.create({ trigger: ".hero", start: "bottom top+=96", onEnter: () => document.querySelector(".site-header")?.classList.add("is-scrolled"), onLeaveBack: () => document.querySelector(".site-header")?.classList.remove("is-scrolled") });
      });
      cleanup = () => context.revert();
    });
    return () => cleanup();
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <IntroSection />
        <FeaturedProducts />
        <BenefitsGrid />
        <CategoryGrid />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
