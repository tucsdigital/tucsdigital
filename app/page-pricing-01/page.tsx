"use client";
import Layout from "@/components/layout/Layout";
import Services3 from "@/components/sections/Services3";
import Link from "next/link";
import { useState } from "react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function PagePricing01() {
  // Accordion
  const [activeItem, setActiveItem] = useState(1);

  const handleActiveItem = (index: any) => {
    setActiveItem(index);
  };

  const swiperOptions = {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  };

  const combos = [
    {
      id: 1,
      emoji: "🔥",
      titulo: "Combo 1: Landing Express",
      descripcion:
        "Ideal para presentar un producto, servicio o evento en una sola página profesional.",
      precio: "$200.000 ARS",
      entrega: "5 días",
      features: [
        "Landing Page para promociones o productos estrella",
        "Formulario de contacto optimizado",
        "Presencia estratégica en Google Maps",
        "Dominio y Hosting incluidos por 1 año",
      ],
      destacado: false,
      personalizado: false,
    },
    {
      id: 2,
      emoji: "🛍️",
      titulo: "Combo 2: Tienda Online Inicial",
      descripcion:
        "Perfecto para emprendedores y pequeñas marcas que quieren empezar a vender.",
      precio: "$300.000 ARS",
      entrega: "7-10 días",
      features: [
        "Tienda Online Autogestionable",
        "Pasarela de pagos + Métodos de envío integrados",
        "Panel administrativo para ventas futuras de la tienda online",
        "Consultas por WhatsApp + botón de compra",
        "Manual para autogestión",
      ],
      destacado: true,
      personalizado: false,
    },
    {
      id: 3,
      emoji: "🧩",
      titulo: "Combo 3: Web Corporativa + Blog",
      descripcion:
        "Ideal para instituciones, profesionales y empresas con contenido constante.",
      precio: "$300.000 ARS",
      entrega: "10 días",
      features: [
        "Sitio Web Corporativo con Secciones Personalizadas",
        "Sección de Blog Autoadministrable",
        "Optimización SEO Inicial",
        "Formulario de contacto",
      ],
      destacado: false,
      personalizado: false,
    },
    {
      id: 4,
      emoji: "📚",
      titulo: "Combo 4: Sitio Educativo / Cursos",
      descripcion:
        "Diseñado para academias, formaciones, docentes o instituciones educativas.",
      precio: "$450.000 ARS",
      entrega: "12-15 días",
      features: [
        "Módulos de cursos",
        "Registro de alumnos",
        "Integración con Google Calendar",
        "Formularios de inscripción",
      ],
      destacado: false,
      personalizado: false,
    },
    {
      id: 5,
      emoji: "🏡",
      titulo: "Combo 5: Portal Inmobiliario",
      descripcion:
        "Para inmobiliarias o desarrollos con carga de propiedades y contacto directo.",
      precio: "$300.000 ARS",
      entrega: "10-15 días",
      features: [
        "Carga de lotes o propiedades",
        "Buscador por filtros",
        "Mapa interactivo o Google Maps",
        "Formulario de interés por propiedad",
      ],
      destacado: false,
      personalizado: false,
    },
    {
      id: 6,
      emoji: "💬",
      titulo: "Combo 6: Web + WhatsApp + Pasarela",
      descripcion:
        "Pack para negocios que cobran online y gestionan todo por celular.",
      precio: "$300.000 ARS",
      entrega: "5-7 días",
      features: [
        "Página institucional",
        "Botón de pago con Mercado Pago",
        "WhatsApp conectado al proceso",
        "Sección de preguntas frecuentes",
      ],
      destacado: false,
      personalizado: false,
    },
    {
      id: 7,
      emoji: "🧠",
      titulo: "Combo 7: Sistema a Medida",
      descripcion:
        "Pensado para proyectos con funciones personalizadas (reserva, turnos, CRM, etc).",
      precio: "Cotización personalizada",
      entrega: "A definir según proyecto",
      features: [
        "Reunión de relevamiento de necesidades",
        "Desarrollo a medida",
        "Integraciones externas (Google, WhatsApp, pagos)",
        "Panel administrativo completo",
      ],
      destacado: false,
      personalizado: true,
    },
  ];

  const combosArriba = [combos[0], combos[1], combos[2]];
  const combosAbajo = combos.slice(3);

  function renderCombo(combo: typeof combos[0]) {
    return (
      <div
        className={`position-relative w-100 h-100 d-flex flex-column ${combo.destacado ? "bg-linear-2 text-white shadow-lg p-8 border-0 rounded-5" : "bg-white p-6 border rounded-4 z-1"}`}
        style={combo.destacado ? { minHeight: 560, zIndex: 2, boxShadow: '0 12px 48px 0 rgba(109,77,242,0.18)' } : {}}
      >
        {combo.destacado && (
          <div style={{position: 'absolute', inset: 0, zIndex: 0, borderRadius: '2rem', overflow: 'hidden'}}>
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{position: 'absolute', top: 0, left: 0}}>
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.3" opacity="0.18" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        )}
        <div className="position-relative z-1">
          <h6 className={combo.destacado ? "text-white" : ""}>
            {combo.emoji} {combo.titulo}
          </h6>
          <p className={`fs-7 ${combo.destacado ? "text-white opacity-90" : ""}`}>{combo.descripcion}</p>
          <div className="d-flex align-items-end mb-2 mt-3">
            <span className={`fs-2 me-1 ${combo.destacado ? "text-white" : "text-primary"}`}>{combo.precio.startsWith("$") ? "$" : ""}</span>
            <h2 className={`m-0 fw-bold ${combo.destacado ? "text-white" : "text-primary"}`}>{combo.precio.replace("$", "").replace("ARS", "").trim()}</h2>
            <span className={`fs-5 ms-1 fw-bold align-self-end ${combo.destacado ? "text-white" : "text-type-standard"}`}>{combo.precio.includes("ARS") ? "ARS" : ""}</span>
          </div>
          <p className={`fs-8 mb-2 ${combo.destacado ? "text-white opacity-80" : ""}`}>🕒 Entrega: {combo.entrega}</p>
          <button className={`btn ${combo.destacado ? "bg-white-keep text-primary" : "btn-outline-secondary hover-up"} w-100 d-flex justify-content-between my-4`}>
            Elegir este combo
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
              <path d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill={combo.destacado ? "#6d4df2" : "#111827"} />
            </svg>
          </button>
          <ul className="list-unstyled mb-0 mt-2">
            {combo.features.map((f: string, i: number) => (
              <li className="d-flex align-items-center mb-3" key={i}>
                <span className="d-inline-flex align-items-center justify-content-center rounded-circle" style={{width: 24, height: 24, background: '#6d4df2'}}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 7L6 9L10 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h6 className={`fs-6 mb-0 ms-2 ${combo.destacado ? "text-white" : "text-dark"}`}>{f}</h6>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <>
      <Layout>
        {/*Pricing 3*/}
        <section className="section-pricing-2 position-relative fix section-padding">
          <div className="container position-relative z-2">
            <div className="text-center mb-8">
              <div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
                <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                  Nuestros Precios
                </span>
              </div>
              <h3 className="ds-3 my-3 fw-bold">
                Precios
                <span className=" fw-regular">
                  Transparentes <br className="d-none d-lg-inline" />
                  y
                </span>
                Accesibles
              </h3>
              <p className="fs-5 mb-0">
                Soluciones digitales profesionales adaptadas a tus necesidades <br className="d-none d-lg-inline" />
                y presupuesto.
              </p>
            </div>
            <div className="row justify-content-center align-items-end g-4">
              {combosArriba.map((combo, idx) => (
                <div
                  key={combo.id}
                  className="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch"
                >
                  {renderCombo(combo)}
                </div>
              ))}
            </div>
          </div>
          <div className="position-absolute bottom-0 start-50 translate-middle-x z-0">
            <img src="/assets/imgs/pricing-3/bg-line-2.png" alt="infinia" />
          </div>
          <div className="rotate-center ellipse-rotate-success position-absolute top-50 z-1" />
          <div className="rotate-center-rev ellipse-rotate-primary position-absolute top-50 z-1" />
        </section>
        {/* Pricing 2 - Combos personalizados */}
        <section className="section-pricing-1 position-relative pb-120 pt-120 overflow-hidden">
          <div className="container">
            <div className="row pb-9 position-relative z-1">
              <div className="col-lg-auto me-lg-auto">
                <div className="text-start mb-lg-0 mb-5">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                    data-aos="zoom-in"
                    data-aos-delay={100}
                  >
                    <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                    <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                      combos personalizados
                    </span>
                  </div>
                  <h3
                    className="ds-3 my-3"
                    data-aos="fade-zoom-in"
                    data-aos-delay={200}
                  >
                    Combos personalizados
                  </h3>
                  <p
                    className="fs-5 mb-0"
                    data-aos="fade-zoom-in"
                    data-aos-delay={300}
                  >
                    ⚡Buscamos el mejor combo para tu negocio
                  </p>
                </div>
              </div>
            </div>
            <div className="row backdrop-filter-lg rounded-4 position-relative z-1 g-4">
              {combosAbajo.map((combo, idx) => (
                <div
                  key={combo.id}
                  className="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch"
                >
                  <div
                    className={`backdrop-filter-md h-100 p-6 position-relative border rounded-4 z-1 w-100 d-flex flex-column ${
                      combo.personalizado ? "border-2 border-primary" : ""
                    }`}
                  >
                    <h6>
                      {combo.emoji} {combo.titulo}
                    </h6>
                    <p className="fs-7">{combo.descripcion}</p>
                    <div className="d-flex align-items-end mb-2 mt-3">
                      <span className="fs-5 text-600 me-1">
                        {combo.precio.startsWith("$") ? "$" : ""}
                      </span>
                      <h3
                        className={`mb-0 ${
                          combo.personalizado
                            ? "text-price-enterprise"
                            : "text-primary"
                        }`}
                      >
                        {combo.precio
                          .replace("$", "")
                          .replace("ARS", "")
                          .trim()}
                      </h3>
                      <span className="fs-5 text-600 ms-1 fw-bold align-self-end text-type-standard">
                        {combo.precio.includes("ARS") ? "ARS" : ""}
                      </span>
                    </div>
                    <p className="fs-8">🕒 Entrega: {combo.entrega}</p>
                    {combo.personalizado ? (
                      <button className="btn btn-outline-secondary hover-up w-100 d-flex justify-content-between my-4">
                        Solicitar propuesta
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            className="fill-dark"
                            d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z"
                            fill="#111827"
                          />
                        </svg>
                      </button>
                    ) : (
                      <button
                        className={`btn ${
                          combo.destacado
                            ? "bg-white-keep text-primary"
                            : "btn-outline-secondary hover-up"
                        } w-100 d-flex justify-content-between my-4`}
                      >
                        Elegir este combo
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z"
                            fill={combo.destacado ? "#6d4df2" : "#111827"}
                          />
                        </svg>
                      </button>
                    )}
                    <ul className="list-unstyled mb-0 mt-2">
                      {combo.features.map((f, i) => (
                        <li className="d-flex align-items-center mb-3" key={i}>
                          <img
                            src="/assets/imgs/pricing-1/check-primary.svg"
                            alt="infinia"
                          />
                          <h6 className="fs-6 mb-0 ms-2">{f}</h6>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rotate-center ellipse-rotate-success position-absolute z-0" />
          <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
        </section>
        {/*How It Work 2*/}
        <section className="howitwork-2 section-padding position-relative fix">
          <div className="container position-relative z-1">
            <div className="text-center mb-8">
              <div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
                <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                  proceso de trabajo
                </span>
              </div>
              <h3 className="ds-3 my-3 fw-black">Cómo trabajamos</h3>
              <p className="fs-5 mb-0">Servicios de IT de última generación.</p>
            </div>
          </div>
          <div className="position-absolute top-0 start-50 translate-middle-x z-0">
            <img src="/assets/imgs/howitwork-2/img-bg-line.png" alt="infinia" />
          </div>
          <div className="container">
            <div className="row position-relative justify-content-center">
              <div className="col-lg-4 text-center px-md-10">
                <div className="card-service-4 text-center mt-2">
                  <div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
                    <div className="icon">
                      <img
                        src="/assets/imgs/howitwork-2/icon-1.svg"
                        alt="infinia"
                      />
                    </div>
                  </div>
                  <h5 className="my-3">Elige servicios</h5>
                  <p className="mb-6">
                    Es un hecho establecido desde hace mucho tiempo que un
                    lector se distraerá con el contenido legible de una página.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 text-center px-md-10">
                <div className="card-service-4 text-center mt-2">
                  <div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
                    <div className="icon">
                      <img
                        src="/assets/imgs/howitwork-2/icon-2.svg"
                        alt="infinia"
                      />
                    </div>
                  </div>
                  <h5 className="my-3">Análisis del proyecto</h5>
                  <p className="mb-6">
                    Es un hecho establecido desde hace mucho tiempo que un
                    lector se distraerá con el contenido legible de una página.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 text-center px-md-10">
                <div className="card-service-4 text-center mt-2">
                  <div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
                    <div className="icon">
                      <img
                        src="/assets/imgs/howitwork-2/icon-3.svg"
                        alt="infinia"
                      />
                    </div>
                  </div>
                  <h5 className="my-3">Obtén el resultado final</h5>
                  <p className="mb-6">
                    Es un hecho establecido desde hace mucho tiempo que un
                    lector se distraerá con el contenido legible de una página.
                  </p>
                </div>
              </div>
            </div>
            <div className="navigation-arrow-1 d-none d-lg-block position-absolute top-50">
              <img src="/assets/imgs/howitwork-2/arrow-1.png" alt="infinia" />
            </div>
            <div className="navigation-arrow-2 d-none d-lg-block position-absolute">
              <img src="/assets/imgs/howitwork-2/arrow-2.png" alt="infinia" />
            </div>
            <div className="row">
              <div className="text-center mt-6">
                <p className="text-900 fw-bold">
                  {" "}
                  Necesitas más ayuda? Visita nuestro{" "}
                  <Link
                    href="/ #"
                    className="text-primary text-decoration-underline"
                  >
                    Centro de ayuda
                  </Link>
                </p>
              </div>
            </div>
            <div className="bouncing-blobs-container">
              <div className="bouncing-blobs-glass" />
              <div className="bouncing-blobs">
                <div className="bouncing-blob bouncing-blob--green" />
                <div className="bouncing-blob bouncing-blob--primary" />
              </div>
            </div>
          </div>
        </section>
        <Services3 />
        {/* Newsletter 1 */}
        <section className="section-newsletter-1 pb-120 pt-120 fix position-relative">
          <div className="container position-relative fix">
            <div className="row align-items-center fix text-center border rounded-4 position-relative z-1">
              <div className="col-lg-6 my-4">
                <div className="row">
                  <div className="ms-lg-4">
                    <img
                      className="rounded-4 border border-3 border-white me-3 mb-3"
                      src="/assets/imgs/newsletter-1/img-1.png"
                      alt="infinia"
                    />
                    <img
                      className="rounded-4 border border-3 border-white me-3 mb-3"
                      src="/assets/imgs/newsletter-1/img-2.png"
                      alt="infinia"
                      data-aos="fade-zoom-in"
                      data-aos-delay={50}
                    />
                    <img
                      className="rounded-4 border border-3 border-white me-3 mb-3 d-none d-md-inline"
                      src="/assets/imgs/newsletter-1/img-3.png"
                      alt="infinia"
                    />
                  </div>
                </div>
                <div className="row">
                  <div>
                    <img
                      className="rounded-4 border border-3 border-white me-3 mb-3"
                      src="/assets/imgs/newsletter-1/img-4.png"
                      alt="infinia"
                    />
                    <img
                      className="rounded-4 border border-3 border-white me-3 mb-3"
                      src="/assets/imgs/newsletter-1/img-5.png"
                      alt="infinia"
                      data-aos="fade-zoom-in"
                      data-aos-delay={100}
                    />
                    <img
                      className="rounded-4 border border-3 border-white me-3 mb-3"
                      src="/assets/imgs/newsletter-1/img-6.png"
                      alt="infinia"
                    />
                    <img
                      className="rounded-4 border border-3 border-white me-3 mb-3"
                      src="/assets/imgs/newsletter-1/img-7.png"
                      alt="infinia"
                      data-aos="fade-zoom-in"
                      data-aos-delay={100}
                    />
                  </div>
                </div>
                <div className="row d-none d-lg-flex">
                  <div className="me-lg-0">
                    <img
                      className="rounded-4 border border-3 border-white me-3 mb-3"
                      src="/assets/imgs/newsletter-1/img-8.png"
                      alt="infinia"
                      data-aos="fade-zoom-in"
                      data-aos-delay={50}
                    />
                    <img
                      className="rounded-4 border border-3 border-white me-3 mb-3"
                      src="/assets/imgs/newsletter-1/img-9.png"
                      alt="infinia"
                      data-aos="fade-zoom-in"
                      data-aos-delay={100}
                    />
                    <img
                      className="rounded-4 border border-3 border-white me-3 mb-3 d-none d-md-inline"
                      src="/assets/imgs/newsletter-1/img-10.png"
                      alt="infinia"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-lg-0 mt-5">
                <div className="px-lg-5 text-lg-start text-center">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                    data-aos="zoom-in"
                    data-aos-delay={100}
                  >
                    <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                    <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                      Mantente informado
                    </span>
                  </div>
                  <h4
                    className="mt-3 mb-3"
                    data-aos="fade-zoom-in"
                    data-aos-delay={100}
                  >
                    Suscríbete a nuestro Newsletter!
                  </h4>
                  <span
                    className="fs-6 fw-medium"
                    data-aos="fade-zoom-in"
                    data-aos-delay={200}
                  >
                    Únete a junto con varias personas a nuestro Newsletter
                  </span>
                  <div className="input-group mb-3 mt-4 position-relative">
                    <input
                      type="text"
                      className="ps-5 py-3 form-control bg-neutral-100 rounded-start-pill border-2 border-end-0 border-white"
                      name="name"
                      placeholder="Ingresa tu correo .."
                    />
                    <div className="bg-neutral-100 border-2 border border-start-0 border-white rounded-end-pill">
                      <button
                        className="btn btn-gradient px-3 py-3 m-3 fs-7 fw-bold border-0 rounded-pill"
                        type="button"
                        data-aos="fade-zoom-in"
                        data-aos-delay={100}
                      >
                        Únete ahora
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle z-0">
              <img src="/assets/imgs/newsletter-1/bg-line.png" alt="infinia" />
            </div>
            <div className="bouncing-blobs-container rounded-4 fix">
              <div className="bouncing-blobs-glass rounded-4" />
              <div className="bouncing-blobs">
                <div className="bouncing-blob bouncing-blob--green" />
                <div className="bouncing-blob bouncing-blob--primary" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
