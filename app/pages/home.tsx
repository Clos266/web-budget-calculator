import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";
import { HeroSection } from "~/components/Hero/HeroSection";
import { useTexts } from "~/i18n";

export default function Home() {
  const { homeText } = useTexts();
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
