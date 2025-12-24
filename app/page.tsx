import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import MenuHighlights from "@/components/menu-highlights";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <About />
      <MenuHighlights />
      <Footer />
    </main>
  );
}
