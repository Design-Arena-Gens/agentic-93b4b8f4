import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FeatureGrid } from "@/components/feature-grid";
import { SignalVisualizer } from "@/components/signal-visualizer";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { ConnectPanel } from "@/components/connect-panel";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <SignalVisualizer />
        <FeatureGrid />
        <TestimonialCarousel />
        <ConnectPanel />
      </main>
      <Footer />
    </div>
  );
}
