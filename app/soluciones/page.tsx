import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";
import SolutionsClient from "./SolutionsClient";

export const metadata: Metadata = generateSEOMetadata({
  title: "Soluciones Digitales - Tucs Digital",
  description: "Descubre nuestras soluciones digitales: desarrollo web, e-commerce, aplicaciones móviles, marketing digital, sistemas de gestión y más. Más de 50 soluciones para tu negocio.",
  keywords: ["soluciones digitales", "desarrollo web", "e-commerce", "aplicaciones móviles", "marketing digital", "sistemas de gestión", "Tucs Digital"],
  canonical: "/soluciones"
});

export default function SolutionsPage() {
  return <SolutionsClient />;
}
