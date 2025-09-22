import Layout from "@/components/layout/Layout";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";
import SolutionClient from "./SolutionClient";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  // Fetch data to get solution details
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://tucsdigital.com'}/soluciones.json`);
  const data = await res.json();
  const solucion = data.find((s: any) => s.id === params.id);

  if (!solucion) {
    return generateSEOMetadata({
      title: "Solución no encontrada",
      description: "La solución solicitada no existe",
      noIndex: true
    });
  }

  return generateSEOMetadata({
    title: `${solucion.titulo} - Tucs Digital`,
    description: solucion.descripcion,
    keywords: [solucion.titulo.toLowerCase(), "desarrollo web", "soluciones digitales", "Tucs Digital"],
    canonical: `/soluciones/${solucion.id}`
  });
}

export default function Page({ params }: { params: { id: string } }) {
  return (
    <Layout>
      <SolutionClient params={params} />
    </Layout>
  );
}
