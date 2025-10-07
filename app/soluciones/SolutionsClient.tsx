"use client";
import Layout from "@/components/layout/Layout";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useMemo, useState } from "react";

type Solucion = {
  id: string;
  categoria?: string;
  titulo: string;
  descripcion: string;
};

type CategoriaUI = {
  nombre: string;
  soluciones: { id: string; nombre: string; descripcion: string }[];
};

const toDisplayCategory = (slug?: string): string => {
  if (!slug) return "OTRAS";
  return slug
    .replace(/-/g, " ")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
};

export default function SolutionsClient() {
  const [soluciones, setSoluciones] = useState<Solucion[]>([]);
  useEffect(() => {
    fetch("/soluciones.json")
      .then((r) => r.json())
      .then((data: Solucion[]) => setSoluciones(data))
      .catch(() => setSoluciones([]));
  }, []);

  const categorias: CategoriaUI[] = useMemo(() => {
    const grouped = new Map<string, CategoriaUI>();
    soluciones.forEach((s) => {
      const key = toDisplayCategory(s.categoria);
      if (!grouped.has(key)) grouped.set(key, { nombre: key, soluciones: [] });
      grouped.get(key)!.soluciones.push({ id: s.id, nombre: s.titulo, descripcion: s.descripcion });
    });
    return Array.from(grouped.values());
  }, [soluciones]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Layout>
      <section className="section-page-header py-10 fix position-relative">
        <div className="container position-relative z-1">
          <div className="text-start">
            <h3>Nuestras Soluciones Digitales</h3>
            <div className="d-flex">
              <Link href="/">
                <p className="mb-0 text-900">Inicio</p>
              </Link>
              <svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
                <path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-primary mb-0">Soluciones</p>
            </div>
          </div>
        </div>
        <img className="position-absolute bottom-0 start-0 end-0 top-0 z-0" src="/assets/imgs/page-header/bg-line.png" alt="Tucs Digital" />
        <div className="bouncing-blobs-container">
          <div className="bouncing-blobs-glass" />
          <div className="bouncing-blobs">
            <div className="position-absolute top-0 start-0 translate-middle-y bouncing-blob--green" />
            <div className="position-absolute top-0 end-0 bouncing-blob--primary" />
          </div>
        </div>
      </section>

      <section className="section-services pt-80px pb-120">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="mb-4">Más de 50 Soluciones Digitales</h2>
            <p className="fs-5 text-600">Transformamos tu negocio con tecnología de vanguardia</p>
          </div>

          <div className="row">
            {categorias.map((categoria, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-6">
                <div className="bg-white rounded-4 p-6 h-100 border shadow-sm">
                  <h4 className="text-primary mb-4">{categoria.nombre}</h4>
                  <div className="row">
                    {categoria.soluciones.map((solucion) => (
                      <div key={solucion.id} className="col-12 mb-3">
                        <Link 
                          href={`/soluciones/${solucion.id}`}
                          className="d-flex align-items-center p-3 rounded-3 hover-up border"
                          style={{ textDecoration: 'none', transition: 'all 0.3s ease' }}
                        >
                          <div className="me-3">
                            <div className="bg-primary-soft rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#6D4DF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h6 className="mb-0 text-900">{solucion.nombre}</h6>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/contacto" className="btn btn-primary hover-up">
              Consultar Soluciones Personalizadas
              <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                <path className="stroke-white" d="M21.1059 12.2562H0.5V11.7443H21.1059H22.313L21.4594 10.8907L17.0558 6.48705L17.4177 6.12508L23.2929 12.0002L17.4177 17.8754L17.0558 17.5134L21.4594 13.1098L22.313 12.2562H21.1059Z" fill="black" stroke="white" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
