import { lazy, Suspense } from "react";
import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { FloatingCallButton } from "@/components/FloatingCallButton";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";

// Lazy load components below the fold for better initial load performance
const Menu = lazy(() => import("@/components/Menu").then(m => ({ default: m.Menu })));
const About = lazy(() => import("@/components/About").then(m => ({ default: m.About })));
const Gallery = lazy(() => import("@/components/Gallery").then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import("@/components/Contact").then(m => ({ default: m.Contact })));

// Loading fallback component
function SectionLoader() {
  return (
    <div className="py-20 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SEO />
      <Navigation />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Menu />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Gallery />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <FloatingCallButton />
      <ScrollToTop />
      <Toaster />
    </>
  );
}