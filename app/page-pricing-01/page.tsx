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
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-3 col-md-12 px-lg-0 mb-lg-0 mb-4 ">
                <div className="p-6 bg-white position-relative border rounded-4 z-1 rounded-end-lg-0">
                  <h6>🔥 Combo 1: Landing Express</h6>
                  <p className="fs-7">Ideal para presentar un producto, servicio o evento en una sola página profesional.</p>
                  <h3 className="text-primary mt-3 mb-0">$XX.XXX ARS</h3>
                  <p className="fs-8">🕒 Entrega: 5 días</p>
                  <Link href="#" className="btn btn-outline-secondary hover-up w-100 d-flex justify-content-between my-5">
                    Elegir este combo
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path className="fill-dark" d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill="#111827" />
                    </svg>
                  </Link>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center mb-4">
                      <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                      <h6 className="fs-6 mb-0 ms-2">Diseño one-page moderno</h6>
                    </li>
                    <li className="d-flex align-items-center mb-4">
                      <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                      <h6 className="fs-6 mb-0 ms-2">Secciones: Inicio, Beneficios, Testimonios, Contacto</h6>
                    </li>
                    <li className="d-flex align-items-center mb-4">
                      <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                      <h6 className="fs-6 mb-0 ms-2">Formulario con WhatsApp o Email</h6>
                    </li>
                    <li className="d-flex align-items-center">
                      <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                      <h6 className="fs-6 mb-0 ms-2">Dominio y Hosting incluidos por 1 año (opcional)</h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mb-lg-0 mb-4 px-lg-0">
                <div className="p-8 bg-linear-2 position-relative border rounded-4 z-1 border-start-lg-0">
                  <div className="position-absolute top-0 end-0 z-0">
                    <img src="/assets/imgs/pricing-3/bg-line-1.png" alt="infinia" />
                  </div>
                  <div className="position-relative z-1">
                    <h6 className="text-white">🛍️ Combo 2: Tienda Online Inicial</h6>
                    <p className="fs-7 text-white">Perfecto para emprendedores y pequeñas marcas que quieren empezar a vender.</p>
                    <div className="d-flex">
                      <span className="fs-2 me-1 text-white">$</span>
                      <h1 className="m-0 text-price-standard fw-black text-white">XX.XXX</h1>
                      <span className="fs-2 text-white ms-1 fw-bold align-self-end text-type-standard">ARS</span>
                    </div>
                    <p className="text-white opacity-50">🕒 Entrega: 7-10 días</p>
                    <ul className="list-unstyled mb-0 mt-3">
                      <li className="d-flex align-items-center mb-4">
                        <img src="/assets/imgs/pricing-3/check-white.svg" alt="infinia" />
                        <h6 className="fs-6 mb-0 ms-2 text-white">Diseño de tienda con carrito</h6>
                      </li>
                      <li className="d-flex align-items-center mb-4">
                        <img src="/assets/imgs/pricing-3/check-white.svg" alt="infinia" />
                        <h6 className="fs-6 mb-0 ms-2 text-white">Integración con Mercado Pago</h6>
                      </li>
                      <li className="d-flex align-items-center mb-4">
                        <img src="/assets/imgs/pricing-3/check-white.svg" alt="infinia" />
                        <h6 className="fs-6 mb-0 ms-2 text-white">Hasta 20 productos cargados</h6>
                      </li>
                      <li className="d-flex align-items-center mb-4">
                        <img src="/assets/imgs/pricing-3/check-white.svg" alt="infinia" />
                        <h6 className="fs-6 mb-0 ms-2 text-white">Consultas por WhatsApp + botón de compra</h6>
                      </li>
                      <li className="d-flex align-items-center">
                        <img src="/assets/imgs/pricing-3/check-white.svg" alt="infinia" />
                        <h6 className="fs-6 mb-0 ms-2 text-white">Manual para autogestión</h6>
                      </li>
                    </ul>
                    <Link href="#" className="btn bg-white-keep text-primary hover-up w-100 d-flex justify-content-between mt-5">
                      Elegir este combo
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill="#6d4df2" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 px-lg-0 mb-lg-0 mb-4">
                <div className="p-6 bg-white position-relative border rounded-4 z-1 border-start-lg-0 rounded-start-lg-0">
                  <h6>🧩 Combo 3: Web Corporativa + Blog</h6>
                  <p className=" fs-7">Ideal para instituciones, profesionales y empresas con contenido constante.</p>
                  <div className="d-flex">
                    <span className="fs-5 text-600 me-1">$</span>
                    <h3 className="text-primary mb-0 text-price-enterprise">XX.XXX</h3>
                    <span className="fs-5 text-600 ms-1 fw-bold align-self-end text-type-enterprise">ARS</span>
                  </div>
                  <p className="fs-8">🕒 Entrega: 10 días</p>
                  <Link href="#" className="btn btn-outline-secondary hover-up w-100 d-flex justify-content-between my-5">
                    Elegir este combo
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path className="fill-dark" d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill="#111827" />
                    </svg>
                  </Link>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center mb-4">
                      <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                      <h6 className="fs-6 mb-0 ms-2">Hasta 5 secciones (Inicio, Nosotros, Servicios, Blog, Contacto)</h6>
                    </li>
                    <li className="d-flex align-items-center mb-4">
                      <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                      <h6 className="fs-6 mb-0 ms-2">Blog autoadministrable</h6>
                    </li>
                    <li className="d-flex align-items-center mb-4">
                      <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                      <h6 className="fs-6 mb-0 ms-2">SEO inicial</h6>
                    </li>
                    <li className="d-flex align-items-center">
                      <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                      <h6 className="fs-6 mb-0 ms-2">Formulario de contacto</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mt-10">
              <div className="d-flex align-items-center justify-content-lg-cener justify-content-center">
                <Link href="#" className="btn btn-gradient">
                  Get Free Quote
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
                  href="#"
                  className="ms-5 text-decoration-underline fw-bold"
                >
                  How We Work
                </Link>
              </div>
            </div>
          </div>
          <div className="position-absolute bottom-0 start-50 translate-middle-x z-0">
            <img src="/assets/imgs/pricing-3/bg-line-2.png" alt="infinia" />
          </div>
          <div className="rotate-center ellipse-rotate-success position-absolute top-50 z-1" />
          <div className="rotate-center-rev ellipse-rotate-primary position-absolute top-50 z-1" />
        </section>
        {/* Pricing 2 */}
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
                      otros combos
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
            <div className="row backdrop-filter-lg rounded-4 position-relative z-1">
              <div className="col-lg-3 col-sm-6 px-lg-0 mb-lg-0 mb-4">
                <div className="backdrop-filter-md h-100 p-6 position-relative border rounded-4 z-1 rounded-end-lg-0">
                  <h6>🧠 Combo 4: Sitio Educativo / Cursos</h6>
                  <p className="fs-7">Diseñado para academias, formaciones, docentes o instituciones educativas.</p>
                  <h3 className="text-primary mt-3 mb-0">$XX.XXX ARS</h3>
                  <p className="fs-8">🕒 Entrega: 12-15 días</p>
                  <button className="btn btn-outline-secondary hover-up w-100 d-flex justify-content-between my-5">
                    Elegir este combo
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path className="fill-dark" d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill="#111827" />
                    </svg>
                  </button>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center mb-4">
                      <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                      <h6 className="fs-6 mb-0 ms-2">Módulos de cursos</h6>
                    </li>
                    <li className="d-flex align-items-center mb-4">
                      <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                      <h6 className="fs-6 mb-0 ms-2">Registro de alumnos</h6>
                    </li>
                    <li className="d-flex align-items-center mb-4">
                      <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                      <h6 className="fs-6 mb-0 ms-2">Integración con Google Calendar</h6>
                    </li>
                    <li className="d-flex align-items-center">
                      <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                      <h6 className="fs-6 mb-0 ms-2">Formularios de inscripción</h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 px-lg-0 mb-lg-0 mb-4">
                <div className="backdrop-filter-md h-100 p-6 position-relative border rounded-4 z-1 border-start-lg-0 rounded-start-lg-0 rounded-end-lg-0">
                  <h6>🏡 Combo 5: Portal Inmobiliario</h6>
                  <p className="fs-7">Para inmobiliarias o desarrollos con carga de propiedades y contacto directo.</p>
                  <div className="d-flex">
                    <span className="fs-5 text-600 me-1">$</span>
                    <h3 className="text-primary mb-0 text-price-standard">XX.XXX</h3>
                    <span className="fs-5 text-600 ms-1 fw-bold align-self-end text-type-standard">ARS</span>
                  </div>
                  <p className="fs-8">🕒 Entrega: 10-15 días</p>
                  <button className="btn btn-gradient w-100 d-flex justify-content-between my-5">
                    Elegir este combo
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path className="fill-white" d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill="white" />
                    </svg>
                  </button>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center mb-4">
                      <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                      <h6 className="fs-6 mb-0 ms-2">Carga de lotes o propiedades</h6>
                    </li>
                    <li className="d-flex align-items-center mb-4">
                      <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                      <h6 className="fs-6 mb-0 ms-2">Buscador por filtros</h6>
                    </li>
                    <li className="d-flex align-items-center mb-4">
                      <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                      <h6 className="fs-6 mb-0 ms-2">Mapa interactivo o Google Maps</h6>
                    </li>
                    <li className="d-flex align-items-center">
                      <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                      <h6 className="fs-6 mb-0 ms-2">Formulario de interés por propiedad</h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 px-lg-0 mb-lg-0 mb-4">
                <div className="backdrop-filter-md h-100 p-6 position-relative border rounded-4 z-1 rounded-start-lg-0 rounded-end-lg-0 border-start-lg-0">
                  <h6>📲 Combo 6: Web + WhatsApp + Pasarela</h6>
                  <p className="fs-7">Pack para negocios que cobran online y gestionan todo por celular.</p>
                  <div className="d-flex">
                    <span className="fs-5 text-600 me-1">$</span>
                    <h3 className="text-primary mb-0 text-price-business">XX.XXX</h3>
                    <span className="fs-5 text-600 ms-1 fw-bold align-self-end text-type-business">ARS</span>
                  </div>
                  <p className="fs-8">🕒 Entrega: 5-7 días</p>
                  <button className="btn btn-outline-secondary hover-up w-100 d-flex justify-content-between my-5">
                    Elegir este combo
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path className="fill-dark" d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill="#111827" />
                    </svg>
                  </button>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center mb-4">
                      <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                      <h6 className="fs-6 mb-0 ms-2">Página institucional</h6>
                    </li>
                    <li className="d-flex align-items-center mb-4">
                      <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                      <h6 className="fs-6 mb-0 ms-2">Botón de pago con Mercado Pago</h6>
                    </li>
                    <li className="d-flex align-items-center mb-4">
                      <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                      <h6 className="fs-6 mb-0 ms-2">WhatsApp conectado al proceso</h6>
                    </li>
                    <li className="d-flex align-items-center">
                      <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                      <h6 className="fs-6 mb-0 ms-2">Sección de preguntas frecuentes</h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 px-lg-0 mb-lg-0 mb-4">
                <div className="backdrop-filter-md h-100 p-6 position-relative border rounded-4 z-1 border-start-lg-0 rounded-start-lg-0">
                  <h6>🧠 Combo 7: Sistema a Medida</h6>
                  <p className="fs-7">Pensado para proyectos con funciones personalizadas (reserva, turnos, CRM, etc).</p>
                  <div className="d-flex">
                    <span className="fs-5 text-600 me-1"></span>
                    <h3 className="text-primary mb-0 text-price-enterprise">Cotización personalizada</h3>
                    <span className="fs-5 text-600 ms-1 fw-bold align-self-end text-type-enterprise"></span>
                  </div>
                  <p className="fs-8">🕒 Entrega: A definir según proyecto</p>
                  <button className="btn btn-outline-secondary hover-up w-100 d-flex justify-content-between my-5">
                    Solicitar propuesta
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path className="fill-dark" d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill="#111827" />
                    </svg>
                  </button>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center mb-4">
                      <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                      <h6 className="fs-6 mb-0 ms-2">Reunión de relevamiento de necesidades</h6>
                    </li>
                    <li className="d-flex align-items-center mb-4">
                      <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                      <h6 className="fs-6 mb-0 ms-2">Desarrollo a medida</h6>
                    </li>
                    <li className="d-flex align-items-center mb-4">
                      <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                      <h6 className="fs-6 mb-0 ms-2">Integraciones externas (Google, WhatsApp, pagos)</h6>
                    </li>
                    <li className="d-flex align-items-center">
                      <img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
                      <h6 className="fs-6 mb-0 ms-2">Panel administrativo completo</h6>
                    </li>
                  </ul>
                </div>
              </div>
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
              <p className="fs-5 mb-0">
                Servicios de IT de última generación.
              </p>
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
                    Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página.
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
                    Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página.
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
                    Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página.
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
                    Únete a junto con varias personas a	 nuestro Newsletter
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
