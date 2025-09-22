import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = generateSEOMetadata({
  title: "Contacto - Tucs Digital",
  description: "Ponte en contacto con Tucs Digital. Consulta gratuita para tu proyecto digital. Desarrollo web, aplicaciones móviles y soluciones tecnológicas en Buenos Aires.",
  keywords: ["contacto", "consulta gratuita", "desarrollo web", "aplicaciones móviles", "Buenos Aires", "Tucs Digital"],
  canonical: "/contacto"
});

export default function ContactPage() {
  return <ContactClient />;
}
