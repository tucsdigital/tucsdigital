"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

interface Solucion {
  id: string;
  titulo: string;
  descripcion: string;
  contenido_relacionado: string[];
}

const ICONOS = [
  "/assets/imgs/service-2/icon-1.svg",
  "/assets/imgs/service-2/icon-2.svg", 
  "/assets/imgs/service-2/icon-3.svg",
  "/assets/imgs/service-2/icon-4.svg",
  "/assets/imgs/service-2/icon-5.svg",
  "/assets/imgs/service-2/icon-6.svg"
];

export default function Services2() {
  const [soluciones, setSoluciones] = useState<Solucion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/soluciones.json")
      .then((res) => res.json())
      .then((data: Solucion[]) => {
        // Orden específico de soluciones para mostrar en el inicio
        const ordenSoluciones = [
          "sistema-erp-distintos-rubros",
          "web-viajes-turismo",
          "soluciones-para-madereras",
          "tienda-online-autogestionable",
          "sistema-venta-suscripcion",
          "boton-de-pago"
        ];
        
        // Filtrar y ordenar según el orden especificado
        const solucionesOrdenadas = ordenSoluciones
          .map(id => data.find(sol => sol.id === id))
          .filter((sol): sol is Solucion => sol !== undefined);
        
        setSoluciones(solucionesOrdenadas);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="soluciones" className="section-team-1 position-relative fix section-padding">
        <div className="container position-relative z-2">
          <div className="text-center">
            <div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
              <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
              <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Nuestras Soluciones</span>
            </div>
            <h3 className="ds-3 my-3 fw-regular">
              Soluciones Digitales Especializadas para{" "}
              <span className=" fw-bold">Diferentes Sectores </span>
              y Necesidades de Negocio
            </h3>
          </div>
          <div className="row mt-6 position-relative">
            {Array.from({ length: 6 }).map((_, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
                  <div className="card-service bg-white p-6 border rounded-4 text-center">
                    <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                      <div className="icon">
                        <div className="bg-secondary bg-opacity-10 rounded-circle" style={{ width: 60, height: 60 }} />
                      </div>
                    </div>
                    <div className="bg-secondary bg-opacity-10 rounded mb-3" style={{ width: '70%', height: 24, margin: '0 auto' }} />
                    <div className="bg-secondary bg-opacity-10 rounded mb-6" style={{ width: '90%', height: 60, margin: '0 auto' }} />
                    <div className="bg-secondary bg-opacity-10 rounded-pill" style={{ width: '60%', height: 20, margin: '0 auto' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="soluciones" className="section-team-1 position-relative fix section-padding">
        <div className="container position-relative z-2">
          <div className="text-center">
            <div
              className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
              <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                Nuestras Soluciones
              </span>
            </div>
            <h3 className="ds-3 my-3 fw-regular">
              Soluciones Digitales Especializadas para{" "}
              <span className=" fw-bold">Diferentes Sectores </span>
              y Necesidades de Negocio
            </h3>
          </div>
          <div className="row mt-6 position-relative">
            {soluciones.map((solucion, index) => (
              <div className="col-lg-4 col-md-6" key={solucion.id}>
							<div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
								<div className="card-service bg-white p-6 border rounded-4 text-center">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
										<div className="icon">
                        <img src={ICONOS[index % ICONOS.length]} alt={solucion.titulo} />
										</div>
									</div>
                    <h5 className="my-3">{solucion.titulo}</h5>
                    <p className="mb-6">{solucion.descripcion}</p>
                    <Link 
                      href={solucion.id === 'web-viajes-turismo' ? 'https://www.tucsdigital.com/viajes-turismo' : `/soluciones/${solucion.id}`}
                      className="text-primary fs-7 fw-bold"
                      {...(solucion.id === 'web-viajes-turismo' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      Conocer Más
										<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
											<g clipPath="url(#clip0_399_9647)">
												<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={18} height={18} fill="white" transform="translate(0.5)" />
												</clipPath>
											</defs>
										</svg>
									</Link>
								</div>
							</div>
						</div>
            ))}
            
            <svg
              className="position-absolute top-50 start-50 translate-middle z-0"
              xmlns="http://www.w3.org/2000/svg"
              width={828}
              height={699}
              viewBox="0 0 828 699"
              fill="none"
            >
              <path
                className="fill-primary-soft"
                d="M0 130.481C0 110.236 15.1267 93.1822 35.2276 90.7667L783.228 0.880261C807.04 -1.98124 828 16.611 828 40.5945V533.155C828 552.691 813.888 569.369 794.622 572.603L46.6224 698.173C22.2271 702.269 0 683.462 0 658.725V130.481Z"
                fill="#F5EEFF"
              />
            </svg>
          </div>
          <div className="text-center mt-6 d-flex flex-wrap justify-content-center align-items-center gap-3">
            <Link href="/soluciones" className="btn btn-gradient">
              Explorar Soluciones
              <svg
                className="ms-2"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  className="stroke-white"
                  d="M17.25 15.25V6.75H8.75"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="stroke-white"
                  d="M17 7L6.75 17.25"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="/page-contact-1"
              className="btn btn-outline-secondary hover-up"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  className="stroke-dark"
                  d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z"
                  stroke="#111827"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Contáctanos
            </Link>
          </div>
        </div>
        <div className="position-absolute top-0 start-50 translate-middle-x z-0">
          <img src="/assets/imgs/service-2/bg-line.png" alt="infinia" />
        </div>
        <div className="rotate-center ellipse-rotate-success position-absolute z-1" />
        <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
      </section>
    </>
  );
}
