import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ServicesPages from "@/components/pages/ServicesPages";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-480">
        <ServicesPages />
      </main>
      <Footer />
    </>
  );
}
