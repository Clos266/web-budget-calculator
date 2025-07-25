import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";
import { HeroSection } from "~/components/Hero/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
