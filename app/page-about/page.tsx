import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = generateSEOMetadata({
  title: "Nosotros - Tucs Digital",
  description: "Conoce a Tucs Digital, tu partner tecnológico en Buenos Aires. Especialistas en desarrollo web, aplicaciones móviles y soluciones digitales personalizadas.",
  keywords: ["nosotros", "equipo", "desarrollo web", "aplicaciones móviles", "Buenos Aires", "Tucs Digital", "historia"],
  canonical: "/nosotros"
});

export default function AboutPage() {
  return <AboutClient />;
}
