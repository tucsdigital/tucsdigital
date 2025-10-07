"use client";
import Link from "next/link";
import { useState } from "react";
import CountUp from "react-countup";

export default function Features6() {
  // Accordion
  const [activeItem, setActiveItem] = useState(1);

  const handleActiveItem = (index: any) => {
    setActiveItem(index);
  };

  return (
    <>
      <section className="section-team-1 position-relative fix section-padding">
        <div className="container position-relative z-2">
          <div className="text-center">
            <div
              className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <img src="/assets/imgs/features-1/dots.png" alt="Tu Marca" />
              <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                ¿Por qué elegir Tu Marca?
              </span>
            </div>
            <h3 className="ds-3 my-3 fw-regular">
              Proyectos de los que{" "}
              <span className=" fw-bold">
                nos sentimos <br className="d-none d-lg-inline" /> orgullosos
              </span>{" "}
              y nos destacan
            </h3>
          </div>
          <div className="row mt-8">
            <div className="col-lg-6 mt-lg-0 mt-5">
              {/* <div>
								<div className="counter-item-cover counter-item">
									<div className="content text-start mx-auto">
										<h2 className="count ds-2 fw-bold text-primary my-0">+<span className="odometer" /><CountUp end={50} enableScrollSpy={true} /> k</h2>
									</div>
								</div>
							</div> */}
              <p className="fs-5 text-500">
                Nuestras soluciones digitales transforman negocios y crean
                experiencias únicas que conectan con los usuarios de manera
                efectiva.
              </p>
              <div className="accordion">
                <div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={` ${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(1)}
                      data-bs-toggle="collapse"
                    >
                      <span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">
                        1
                      </span>
                      <h6 className="m-0">Desarrollo Web Profesional</h6>
                      <span className="ms-auto arrow me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M11.5 1L6.25 6.5L1 1"
                            stroke="#111827"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div
                    id="collapseOne"
                    className={
                      activeItem == 1
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="px-0 card-body fs-6 text-600">
                      Creamos sitios web modernos, responsivos y optimizados
                      para SEO que convierten visitantes en clientes. Utilizamos
                      las últimas tecnologías para garantizar velocidad y
                      funcionalidad.
                    </p>
                  </div>
                </div>
                <div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={` ${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(2)}
                      data-bs-toggle="collapse"
                    >
                      <span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">
                        2
                      </span>
                      <h6 className="m-0">Aplicaciones Móviles</h6>
                      <span className="ms-auto arrow me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M11.5 1L6.25 6.5L1 1"
                            stroke="#111827"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div
                    id="collapseTwo"
                    className={
                      activeItem == 2
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="px-0 card-body fs-6 text-600">
                      Desarrollamos aplicaciones móviles nativas e híbridas para
                      iOS y Android que ofrecen experiencias de usuario
                      excepcionales y funcionalidades avanzadas.
                    </p>
                  </div>
                </div>
                <div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={` ${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(3)}
                      data-bs-toggle="collapse"
                    >
                      <span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">
                        3
                      </span>
                      <h6 className="m-0">Soluciones E-commerce</h6>
                      <span className="ms-auto arrow me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M11.5 1L6.25 6.5L1 1"
                            stroke="#111827"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div
                    id="collapseThree"
                    className={
                      activeItem == 3
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="px-0 card-body fs-6 text-600">
                      Implementamos tiendas online completas con sistemas de
                      pago seguros, gestión de inventario y herramientas de
                      marketing para maximizar las ventas.
                    </p>
                  </div>
                </div>
                <div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
                  <div className="px-0 card-header border-0 bg-gradient-1">
                    <a
                      className={` ${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`}
                      onClick={() => handleActiveItem(4)}
                      data-bs-toggle="collapse"
                    >
                      <span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">
                        4
                      </span>
                      <h6 className="m-0">Sistemas Personalizados</h6>
                      <span className="ms-auto arrow me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            className="stroke-dark"
                            d="M11.5 1L6.25 6.5L1 1"
                            stroke="#111827"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div
                    id="collapsefour"
                    className={
                      activeItem == 4
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                    data-bs-parent=".accordion"
                  >
                    <p className="px-0 card-body fs-6 text-600">
                      Diseñamos y desarrollamos sistemas a medida que se adaptan
                      perfectamente a las necesidades específicas de tu negocio,
                      optimizando procesos y mejorando la eficiencia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 px-lg-6 mt-lg-0 mt-8">
              <Link
                href="https://dicss.vercel.app/"
                className="d-flex flex-column flex-md-row align-items-center mb-6 hover-up"
              >
                <img
                  className="rounded-3 project-thumb flex-shrink-0"
                  src="/assets/imgs/features-6/dicss.png"
                  alt="Dic security solutions"
                />
                <div className="content mt-md-0 mt-4 ms-5">
                  <h6 className="mb-2">Dic security solutions</h6>
                  <p>
                    Plataforma web profesional para empresa de seguridad con{" "}
                    <b>sistema de pagos mensuales automatizado</b> para
                    clientes. Incluye{" "}
                    <b>
                      gestión de servicios y actualización mensual de soluciones
                    </b>
                    , mejorando la experiencia del cliente y optimizando
                    procesos internos de cobranza.
                  </p>
                </div>
              </Link>
              <Link
                href="https://tucs-app-shop.vercel.app/"
                className="d-flex flex-column flex-md-row align-items-center mb-6 hover-up"
              >
                <img
                  className="rounded-3 project-thumb flex-shrink-0"
                  src="/assets/imgs/features-6/tucsdrinks.png"
                  alt="Tucs Drinks"
                />
                <div className="content mt-md-0 mt-4 ms-5">
                  <h6 className="mb-2">Tucs Drinks</h6>
                  <p>
                    E-commerce de bebidas con{" "}
                    <b>
                      catálogo dinámico, carrito y gestión de pedidos online
                    </b>
                    . Actualmente estoy ampliando la plataforma para incluir{" "}
                    <b>reportes de ventas avanzados</b>, integración con{" "}
                    <b>sistemas de marketing</b> y optimización de flujos
                    internos.
                  </p>
                </div>
              </Link>
              <Link
                href="https://caballeromaderas-ecommerce.vercel.app/"
                className="d-flex flex-column flex-md-row align-items-center mb-6 hover-up"
              >
                <img
                  className="rounded-3 project-thumb flex-shrink-0"
                  src="/assets/imgs/features-6/maderascaballero.png"
                  alt="Maderas Caballero"
                />
                <div className="content mt-md-0 mt-4 ms-5">
                  <h6 className="mb-2">Maderas Caballero</h6>
                  <p>
                    Proyecto integral que combina{" "}
                    <b>sistema POS y e-commerce</b>, permitiendo la gestión de
                    ventas internas y online. Incluye sitio institucional,{" "}
                    <b>
                      landings para campañas publicitarias en Meta Ads y Google
                      Ads
                    </b>
                    , y tracking de conversiones con pixel.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="position-absolute top-0 start-50 translate-middle-x z-0">
          <img src="/assets/imgs/service-2/bg-line.png" alt="Tu Marca" />
        </div>
        <div className="rotate-center ellipse-rotate-success position-absolute z-1" />
        <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
      </section>
      <style jsx>{`
        .project-thumb {
          width: 160px;
          height: auto;
        }
        @media (min-width: 576px) {
          .project-thumb {
            width: 200px;
          }
        }
        @media (min-width: 992px) {
          .project-thumb {
            width: 220px;
          }
        }
      `}</style>
    </>
  );
}
