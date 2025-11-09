import type { Route } from "./+types/home";
import { HeroSection } from "../components/HeroSection";
import { HousesSection } from "../components/HousesSection";
import { ActivitiesSection } from "../components/ActivitiesSection";
import { ContactSection } from "../components/ContactSection";
import { BookingSection } from "../components/BookingSection";
import { Footer } from "../components/Footer";
import { WhatsAppFloat } from "../components/WhatsAppFloat";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Finca La Obsidiana - Casas Rurales de Lujo en Arcos de la Frontera" },
    { name: "description", content: "Descubre Finca La Obsidiana, dos elegantes casas rurales con piscina privada en Arcos de la Frontera. Experiencia única y enriquecedora con 15 años de prestigio." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <HeroSection />
      <HousesSection />
      <ActivitiesSection />
      <BookingSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
