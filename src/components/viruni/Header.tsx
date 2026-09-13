import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { productGroups } from "./data";

const navLinks = ["Home", "Solutions", "Cases", "Support"];

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#home" className="group inline-flex items-center gap-3" aria-label="Viruni home">
      <span className={`brand-symbol ${inverse ? "brand-symbol-inverse" : ""}`} aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="font-display text-xl font-extrabold tracking-[0.16em]">VIRUNI</span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 text-hero-foreground">
      <div className="site-container flex h-20 items-center justify-between lg:h-24">
        <BrandMark inverse />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          <a className="nav-link" href="#home">
            Home
          </a>
          <div className="group/products relative">
            <Button
              variant="navLink"
              className="inline-flex items-center gap-1"
              type="button"
              aria-haspopup="true"
            >
              Products{" "}
              <ChevronDown className="size-3.5 transition-transform group-hover/products:rotate-180" />
            </Button>
            <div className="invisible absolute left-1/2 top-full w-[760px] -translate-x-1/2 translate-y-3 pt-7 opacity-0 transition-all duration-200 group-hover/products:visible group-hover/products:translate-y-0 group-hover/products:opacity-100 group-focus-within/products:visible group-focus-within/products:translate-y-0 group-focus-within/products:opacity-100">
              <div className="mega-menu grid grid-cols-3 gap-8 p-8">
                {productGroups.map((group) => (
                  <div key={group.title}>
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-accent">
                      {group.title}
                    </p>
                    <ul className="space-y-2.5">
                      {group.items.map((item) => (
                        <li key={item}>
                          <a className="mega-link" href="#products">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {navLinks.slice(1).map((item) => (
            <a
              key={item}
              className="nav-link"
              href={
                item === "Solutions" ? "#solutions" : item === "Support" ? "#contact" : "#products"
              }
            >
              {item}
            </a>
          ))}
          <Button variant="heroOutline" asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="navIcon"
              size="icon"
              className="lg:hidden"
              aria-label="Open navigation"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="border-l-border bg-background px-6 pt-8" side="right">
            <SheetHeader className="text-left">
              <SheetTitle>
                <BrandMark />
              </SheetTitle>
              <SheetDescription className="sr-only">Viruni navigation menu</SheetDescription>
            </SheetHeader>
            <nav className="mt-10" aria-label="Mobile navigation">
              <SheetClose asChild>
                <a className="mobile-nav-link" href="#home">
                  Home
                </a>
              </SheetClose>
              <Accordion type="single" collapsible>
                <AccordionItem value="products">
                  <AccordionTrigger className="mobile-nav-link no-underline hover:no-underline">
                    Products
                  </AccordionTrigger>
                  <AccordionContent>
                    {productGroups.map((group) => (
                      <div className="mb-5" key={group.title}>
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-primary">
                          {group.title}
                        </p>
                        {group.items.map((item) => (
                          <SheetClose asChild key={item}>
                            <a
                              href="#products"
                              className="block py-1.5 text-sm text-muted-foreground"
                            >
                              {item}
                            </a>
                          </SheetClose>
                        ))}
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {navLinks.slice(1).map((item) => (
                <SheetClose asChild key={item}>
                  <a
                    className="mobile-nav-link"
                    href={
                      item === "Solutions"
                        ? "#solutions"
                        : item === "Support"
                          ? "#contact"
                          : "#products"
                    }
                  >
                    {item}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button className="mt-8 w-full" size="lg" asChild>
                  <a href="#contact">Contact Us</a>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
