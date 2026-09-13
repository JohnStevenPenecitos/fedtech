import {
  ArrowRight,
  BrainCircuit,
  Camera,
  CloudCog,
  Globe2,
  Network,
  RadioTower,
  ScanFace,
  Server,
  ShieldCheck,
  Sparkles,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories, introImage, productsList } from "./data";

const categoryIcons = [
  Camera,
  Camera,
  Camera,
  ScanFace,
  Camera,
  RadioTower,
  Sparkles,
  ScanFace,
  ShieldCheck,
  Network,
  Wifi,
  Server,
  CloudCog,
  Network,
  Server,
  BrainCircuit,
  Sparkles,
  RadioTower,
  CloudCog,
];

export function IntroSection() {
  return (
    <section id="about" className="section-pad bg-background">
      <div className="site-container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="reveal">
          {/* <p className="eyebrow text-primary">Who we are</p> */}
          <h2 className="section-title mt-4">
            Redefining the
            <br />
            IT landscape.
          </h2>
          <div className="accent-rule mt-7" />
          <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground">
            VirUni stands at the forefront of technology, specializing in a diverse spectrum of IT
            product solutions. With an unwavering focus on innovation, our expertise spans
            cutting-edge security through advanced CCTV systems, network excellence through
            Container Data Centers and network solutions, seamless network monitoring, and the
            transformative power of AI. As a technology trailblazer, Viruni is dedicated to shaping
            the future by delivering unparalleled advancements that redefine what’s possible in IT.
          </p>
        </div>
        <div className="intro-image reveal relative overflow-hidden">
          <img
            src={introImage}
            alt="Viruni CCTV cameras and enterprise network equipment"
            width={1600}
            height={1104}
            loading="lazy"
            className="parallax-image size-full object-cover"
          />
          <div className="image-stat">
            <strong>One partner.</strong>
            <span>Security, networks, IoT and AI.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedProducts() {
  return (
    <section id="solutions" className="section-pad bg-surface">
      <div className="site-container">
        <div className="reveal mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            {/* <p className="eyebrow text-primary">Built for what’s next</p> */}
            <h2 className="section-title mt-4">
              Featured products
              <br />& solutions
            </h2>
          </div>
          {/* <p className="max-w-md text-sm leading-7 text-muted-foreground">
            A connected technology portfolio designed to secure, connect and intelligently transform
            critical operations.
          </p> */}
        </div>
        <div className="stagger-grid grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {productsList.map((product, index) => (
            <article
              key={product.name}
              className={`product-card group ${index < 2 ? "lg:col-span-6" : "lg:col-span-4"}`}
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  width={index === 1 ? 1920 : 1600}
                  height={1104}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6 lg:p-7">
                <p className="eyebrow text-primary">Products & solutions</p>
                <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {product.description}
                </p>
                <Button variant="link" className="mt-4 h-auto p-0 font-bold no-underline" asChild>
                  <a href="#contact">
                    Read More <ArrowRight />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const benefits = [
  [
    ShieldCheck,
    "Security",
    "Advanced, round-the-clock surveillance and access control technology designed to protect what matters most.",
  ],
  [
    Network,
    "Connectivity",
    "Seamless, scalable network and data center infrastructure built for reliability at any size.",
  ],
  [
    BrainCircuit,
    "Intelligence",
    "AI-driven insights and automation that turn raw data into smarter decisions.",
  ],
  [
    Globe2,
    "Global Support",
    "Distributed offices and authorized-distributor network ensure support wherever you operate.",
  ],
] as const;

export function BenefitsGrid() {
  return (
    <section className="section-pad bg-primary text-primary-foreground">
      <div className="site-container">
        <div className="reveal grid gap-8 border-b border-primary-foreground/20 pb-10 md:grid-cols-2">
          <div>
            {/* <p className="eyebrow text-accent-soft">The Viruni advantage</p> */}
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
              Technology with purpose.
              <br />
              Performance without limits.
            </h2>
          </div>
          <p className="max-w-md self-end text-sm leading-7 text-primary-foreground/70">
            From the first sensor to the final insight, every Viruni solution is engineered to work
            as one dependable ecosystem.
          </p>
        </div>
        <div className="stagger-grid mt-10 grid gap-px bg-primary-foreground/20 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(([Icon, title, copy]) => (
            <article key={title} className="benefit-item bg-primary p-7 lg:p-8">
              <Icon className="size-8 text-accent-soft" strokeWidth={1.5} />
              <h3 className="mt-8 font-display text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-primary-foreground/70">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CategoryGrid() {
  return (
    <section id="products" className="section-pad bg-background">
      <div className="site-container">
        <div className="reveal text-center">
          {/* <p className="eyebrow text-primary">Complete portfolio</p> */}
          <h2 className="section-title mt-4">Explore Our Full Range</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
            Purpose-built products spanning the full technology lifecycle—from capture and
            connectivity to control and intelligence.
          </p>
        </div>
        <div className="stagger-grid mt-12 grid grid-cols-2 border-l border-t border-border sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category, index) => {
            const Icon = categoryIcons[index] ?? CloudCog;
            return (
              <a href="#contact" className="category-tile group" key={category}>
                <Icon
                  className="size-7 text-primary transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.5}
                />
                <span>{category}</span>
                <ArrowRight className="category-arrow size-4" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section id="contact" className="cta-band relative overflow-hidden">
      <div className="hero-grid absolute inset-0 opacity-20" />
      <div className="site-container reveal relative py-20 text-center sm:py-24">
        {/* <p className="eyebrow text-accent-soft">Let’s connect</p> */}
        <h2 className="mx-auto mt-4 max-w-4xl font-display text-3xl font-bold leading-tight text-hero-foreground sm:text-5xl">
          Ready to move your technology forward?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-hero-muted">
          For inquiries, reach us at{" "}
          <a
            className="font-bold text-hero-foreground underline underline-offset-4"
            href="mailto:support@viruni.tech"
          >
            support@viruni.tech
          </a>
          —send us a message and we’ll endorse you to one of our authorized distributors.
        </p>
        <Button variant="hero" size="xl" className="mt-8" asChild>
          <a href="mailto:support@viruni.tech">
            Contact Us <ArrowRight />
          </a>
        </Button>
      </div>
    </section>
  );
}
