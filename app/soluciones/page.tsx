"use client"
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Solucion {
  id: string;
  titulo: string;
  descripcion: string;
  contenido_relacionado: string[];
}

const ICONO = "/assets/imgs/service-3/icon-1.svg"; // Icono genérico

// SkeletonCard para loading
function SkeletonCard() {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="zoom-img position-relative d-inline-block w-100 z-1">
        <div className="rounded-3 fix bg-white p-4 shadow-sm h-100 d-flex flex-column align-items-center justify-content-between animate-pulse">
          <div className="mb-3 bg-secondary bg-opacity-10 rounded-circle" style={{ width: 60, height: 60 }} />
          <div className="mb-2 bg-secondary bg-opacity-10 rounded" style={{ width: '70%', height: 24 }} />
          <div className="mb-3 bg-secondary bg-opacity-10 rounded" style={{ width: '90%', height: 16 }} />
          <div className="bg-secondary bg-opacity-10 rounded-pill w-100 mt-auto" style={{ height: 38 }} />
        </div>
      </div>
    </div>
  );
}

export default function PageSoluciones() {
  const [soluciones, setSoluciones] = useState<Solucion[]>([]);
  const [relacionados, setRelacionados] = useState<string[]>([]);
  const [filtro, setFiltro] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/soluciones.json")
      .then((res) => res.json())
      .then((data: Solucion[]) => {
        setSoluciones(data);
        // Obtener todos los valores únicos de contenido_relacionado
        const allRelacionados = data.flatMap((s) => s.contenido_relacionado || []);
        setRelacionados(Array.from(new Set(allRelacionados)));
        setLoading(false);
      });
  }, []);

  const solucionesFiltradas = filtro
    ? soluciones.filter((s) => s.contenido_relacionado?.includes(filtro))
    : soluciones;

  return (
    <Layout>
      <section className="section-case-studies pt-120">
        <div className="container position-relative z-2">
          <div className="text-center">
            <div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
              <img src="/assets/imgs/features-1/dots.png" alt="soluciones" />
              <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Soluciones Digitales</span>
            </div>
            <h3 className="ds-3 my-3">Todas las Soluciones</h3>
            <p className="fs-5">Selecciona una categoría para filtrar o explora todas nuestras soluciones</p>
          </div>
          <div className="text-center mt-6">
            <div className="p filter-menu-active">
              <button className={`btn btn-md btn-filter mb-2 me-2${filtro === "" ? " active" : ""}`} onClick={() => setFiltro("")}>Todas</button>
              {relacionados.map((cat) => (
                <button
                  key={cat}
                  className={`btn btn-md btn-filter mb-2 me-2${filtro === cat ? " active" : ""}`}
                  onClick={() => setFiltro(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="container mt-6">
          {loading ? (
            <div className="row">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : (
            <div className="row">
              {solucionesFiltradas.map((sol) => (
                <div className="col-lg-4 col-md-6 mb-4" key={sol.id}>
                  <div className="zoom-img position-relative d-inline-block w-100 z-1">
                    <div className="rounded-3 fix bg-white p-4 shadow-sm h-100 d-flex flex-column align-items-center justify-content-between">
                      <img className="mb-3" src={ICONO} alt="icono" style={{ width: 60, height: 60 }} />
                      <h5 className="mb-2 text-center">{sol.titulo}</h5>
                      <p className="text-900 text-center mb-3" style={{ minHeight: 60 }}>{sol.descripcion.slice(0, 90)}...</p>
                      <Link href={`/soluciones/${sol.id}`} className="btn btn-primary w-100 mt-auto">
                        Ver más
                        <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
                          <g clipPath="url(#clip0_399_9647)">
                            <path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#fff" />
                          </g>
                          <defs>
                            <clipPath id="clip0_399_9647">
                              <rect width={18} height={18} fill="white" transform="translate(0.5)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              {solucionesFiltradas.length === 0 && (
                <div className="col-12 text-center py-5">
                  <p>No hay soluciones para esta categoría.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
} 