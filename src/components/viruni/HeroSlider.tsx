import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { slides } from "./data";

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const go = (index: number) => setActive((index + slides.length) % slides.length);

  useEffect(() => {
    const id = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 7000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const element = contentRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    void import("gsap").then(({ gsap }) => {
      gsap.fromTo(element.children, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.14, ease: "power2.out", clearProps: "transform,opacity" });
    });
  }, [active]);

  const slide = slides[active] ?? slides[0];
  if (!slide) return null;
  return (
    <section id="home" className="hero relative min-h-[720px] overflow-hidden text-hero-foreground" aria-roledescription="carousel" aria-label="Viruni solutions">
      <div className="hero-media absolute inset-0" aria-hidden="true">
        {slides.map((item, index) => <img key={item.title} src={item.image} alt="" width={1920} height={1088} fetchPriority={index === 0 ? "high" : "auto"} className={`absolute inset-0 size-full object-cover transition-opacity duration-[1300ms] ${active === index ? "opacity-100" : "opacity-0"}`} />)}
      </div>
      <div className="hero-overlay absolute inset-0" />
      <div className="hero-grid absolute inset-0 opacity-40" />
      <div className="site-container relative flex min-h-[720px] items-end pb-28 pt-36 lg:items-center lg:pb-16 lg:pt-28">
        <div ref={contentRef} key={active} className="max-w-4xl">
          {/* <p className="eyebrow text-accent-soft">{slide.eyebrow}</p> */}
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl xl:text-[5.3rem]">{slide.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-hero-muted sm:text-lg">{slide.copy}</p>
          <div className="mt-9"><Button variant="hero" size="xl" asChild><a href={slide.target}>{slide.cta}<ArrowUpRight /></a></Button></div>
        </div>
      </div>
      <div className="site-container absolute inset-x-0 bottom-7 z-10 flex items-center justify-between">
        <div className="flex gap-2" role="tablist" aria-label="Select slide">
          {slides.map((item, index) => <button key={item.title} type="button" className={`slide-dot ${active === index ? "is-active" : ""}`} onClick={() => go(index)} aria-label={`Show slide ${index + 1}: ${item.title}`} aria-selected={active === index} role="tab" />)}
        </div>
        <div className="flex gap-2"><Button variant="navIcon" size="icon" onClick={() => go(active - 1)} aria-label="Previous slide"><ArrowLeft /></Button><Button variant="navIcon" size="icon" onClick={() => go(active + 1)} aria-label="Next slide"><ArrowRight /></Button></div>
      </div>
    </section>
  );
}