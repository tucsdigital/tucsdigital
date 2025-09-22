"use client"
import { useState } from "react";
import React from "react";
import Link from "next/link";
import { notFound } from 'next/navigation';
import Preloader from "@/components/elements/Preloader";
import StructuredData from "@/components/seo/StructuredData";

interface FAQ {
  pregunta: string;
  respuesta: string;
}

interface Solucion {
  id: string;
  titulo: string;
  titulos_sugeridos: string[];
  descripcion: string;
  puntos_clave: string[];
  beneficios_cercanos: string[];
  beneficios_futuros: string[];
  tips_uso: string[];
  contenido_relacionado: string[];
  faq: FAQ[];
}

interface SolutionClientProps {
  params: { id: string };
}

export default function SolutionClient({ params }: SolutionClientProps) {
  const [activeItem, setActiveItem] = useState(1);

  // Leer el archivo JSON de soluciones (fetch en client component)
  const [solucion, setSolucion] = useState<Solucion | null>(null);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch('/soluciones.json');
      const data: Solucion[] = await res.json();
      const found = data.find(s => s.id === params.id);
      setSolucion(found || null);
      setLoading(false);
    }
    fetchData();
  }, [params.id]);

  if (loading) return <Preloader />;
  if (!solucion) return notFound();

  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: solucion.titulo,
          description: solucion.descripcion,
          category: "Soluciones Digitales",
          url: `https://tucsdigital.com/soluciones/${solucion.id}`
        }} 
      />
      <StructuredData 
        type="faq" 
        data={solucion.faq.map(f => ({
          question: f.pregunta,
          answer: f.respuesta
        }))} 
      />
      <section className="section-page-header py-10 fix position-relative">
        <div className="container position-relative z-1">
          <div className="text-start">
            <h3>{solucion.titulo}</h3>
            <div className="d-flex">
              <Link href="#">
                <p className="mb-0 text-900">Inicio</p>
              </Link>
              <svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
                <path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-primary mb-0">Detalle de la Solución</p>
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
      <section className="section-services-details pt-80px pb-120">
        <div className="container">
          <div className="row pt-8">
            <div className="col-lg-8 ps-lg-4 mt-lg-0 mt-8 content">
              <img className="rounded-3" src="/assets/imgs/services-details-2/img-1.png" alt="Tucs Digital" />
              {solucion.titulos_sugeridos[0] && (
                <h4 className="fw-bold text-primary mb-2 mt-4">{solucion.titulos_sugeridos[0]}</h4>
              )}
              <p className="mb-0">{solucion.descripcion}</p>
              {solucion.puntos_clave && solucion.puntos_clave.length > 0 && (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 mt-4 mb-2">
                  {solucion.puntos_clave.map((p, i) => (
                    <div className="col d-flex align-items-center mb-2" key={i}>
                      <span className="d-inline-flex align-items-center justify-content-center rounded-circle me-2" style={{width: 28, height: 28, background: '#34d399'}}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.5 8.5L7 11L12 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="fw-medium text-900">{p}</span>
                    </div>
                  ))}
                </div>
              )}
              <h5 className="pt-3 border-top mb-3 mt-5">Preguntas frecuentes</h5>
              <div className="accordion">
                {solucion.faq.map((f, i) => (
                  <div key={i} className="border-bottom">
                    <button
                      className={`w-100 d-flex align-items-center py-4 px-0 border-0 bg-transparent text-start ${activeItem === i+1 ? '' : ''}`}
                      style={{ outline: 'none' }}
                      onClick={() => setActiveItem(activeItem === i+1 ? 0 : i+1)}
                      aria-expanded={activeItem === i+1}
                    >
                      <span className="d-inline-flex align-items-center justify-content-center rounded-circle me-3" style={{width: 32, height: 32, background: '#7c3aed', color: '#fff', fontWeight: 700, fontSize: 18}}>{i+1}</span>
                      <span className="fw-bold fs-5 flex-grow-1">{f.pregunta}</span>
                      <span className="ms-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: activeItem === i+1 ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s'}}>
                          <path d="M6 8L10 12L14 8" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                    {activeItem === i+1 && (
                      <div className="ps-5 pb-4 pe-0">
                        <div className="fs-6 text-600">{f.respuesta}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4 sidebar">
              {/* Sidebar igual que en el ejemplo, puedes personalizar si lo deseas */}
              <Link href="#" className="btn btn-outline-secondary-2 w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center">
                Consultoría Digital
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path className="fill-neutral-100" d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="#f3f4f6" />
                </svg>
              </Link>
              <Link href="#" className="btn btn-outline-secondary-2 w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center">
                Estrategia y Branding
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path className="fill-neutral-100" d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="#f3f4f6" />
                </svg>
              </Link>
              <Link href="#" className="btn btn-outline-secondary-2 w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center">
                Desarrollo E-commerce
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path className="fill-neutral-100" d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="#f3f4f6" />
                </svg>
              </Link>
              <Link href="#" className="btn btn-outline-secondary-2 w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center">
                SEO y Marketing Digital
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path className="fill-neutral-100" d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="#f3f4f6" />
                </svg>
              </Link>
              <Link href="#" className="btn btn-outline-secondary-2 w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center">
                Soporte y Mantenimiento
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path className="fill-neutral-100" d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="#f3f4f6" />
                </svg>
              </Link>
              <div className="bg-neutral-100 px-5 pb-5 mt-7 rounded-4 border">
                <h6 className="mb-4 mt-3">Brochure de Servicios</h6>
                <Link href="#" className="bg-white rounded-3 p-3 border d-flex align-items-center mb-3">
                  <img src="/assets/imgs/services-details/icon-1.svg" alt="Tucs Digital" />
                  <p className="text-900 fs-7 mb-0 ms-3">PDF. Descargar (25 Mb)</p>
                </Link>
                <Link href="#" className="bg-white rounded-3 p-3 border d-flex align-items-center mb-3">
                  <img src="/assets/imgs/services-details/icon-2.svg" alt="Tucs Digital" />
                  <p className="text-900 fs-7 mb-0 ms-3">DOC. Descargar (28 Mb)</p>
                </Link>
                <Link href="#" className="bg-white rounded-3 p-3 border d-flex align-items-center mb-3">
                  <img src="/assets/imgs/services-details/icon-3.svg" alt="Tucs Digital" />
                  <p className="text-900 fs-7 mb-0 ms-3">Ver en Google Drive</p>
                </Link>
                <Link href="#" className="bg-white rounded-3 p-3 border d-flex align-items-center">
                  <img src="/assets/imgs/services-details/icon-4.svg" alt="Tucs Digital" />
                  <p className="text-900 fs-7 mb-0 ms-3">Ver en Google Drive</p>
                </Link>
              </div>
              <div className="bg-primary rounded-4 mt-7 position-relative">
                <div className="p-7">
                  <h4 className="text-white">
                    Impulsando la Experiencia Digital <br />
                    para tu Negocio
                  </h4>
                  <Link href="#contacto" className="d-flex align-items-center mt-8 mb-9">
                    <img src="/assets/imgs/services-details/icon-contact.svg" alt="Tucs Digital" />
                    <div className="ms-3">
                      <span className="text-white mb-0 fs-4">Contáctanos</span>
                      <h5 className="text-white d-block">+54 9 11 4471 3445</h5>
                    </div>
                  </Link>
                  <Link href="#" className="fw-bold btn text-start bg-white fs-6 d-flex align-items-center justify-content-between text-primary hover-up w-100">
                    <span>Solicita una Consultoría Gratuita</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="#6D4DF2" />
                    </svg>
                  </Link>
                </div>
                <img className="position-absolute top-0 end-0" src="/assets/imgs/services-details/bg-line-3.png" alt="Tucs Digital" />
              </div>
              <div className="position-relative mb-lg-0 mb-8 d-inline-block fix mt-7">
                <div className="zoom-img rounded-4 fix">
                  <img src="/assets/imgs/services-details-2/img-2.png" alt="Tucs Digital" />
                </div>
                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-8 backdrop-filter rounded-4 px-7 py-4 text-center z-1">
                  <p className="pt-2 text-900 text-nowrap">
                    Más de 4k clientes satisfechos
                  </p>
                  <div className="d-flex align-items-center justify-content-center py-4">
                    <img src="/assets/imgs/features-3/avatar-1.png" alt="Tucs Digital" />
                    <img className="avt-hero z-1" src="/assets/imgs/features-3/avatar-2.png" alt="Tucs Digital" />
                    <img className="avt-hero z-0" src=" assets/imgs/features-3/avatar-3.png" alt="Tucs Digital" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contacto igual que en el ejemplo */}
      <section className="section-contact-2 position-relative section-padding bg-5">
        <div className="container position-relative z-1">
          <div className="text-center">
            <h5 className="ds-5 mt-3 mb-3">
              ¿Pensando en un proyecto? <br className="d-md-block d-none" />
              Ponte en contacto con nosotros.
            </h5>
            <span className="fs-5 fw-medium">Conecta hoy con Tucs Digital a través de los datos abajo o completa el formulario para una respuesta rápida</span>
          </div>
          <div className="row mt-8">
            <div className="col-lg-10 mx-lg-auto">
              <div className="row">
                <div className="col-lg-6 ps-lg-0 pb-5 pb-lg-0">
                  <h4>Déjanos tu mensaje</h4>
                  <form action="#">
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <div className="input-group rounded-1 d-flex align-items-center">
                          <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                              <path className="stroke-dark" d="M12 11.25C13.7949 11.25 15.25 9.79493 15.25 8C15.25 6.20507 13.7949 4.75 12 4.75C10.2051 4.75 8.75 6.20507 8.75 8C8.75 9.79493 10.2051 11.25 12 11.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path className="stroke-dark" d="M6.84723 19.25H17.1522C18.2941 19.25 19.1737 18.2681 18.6405 17.2584C17.856 15.7731 16.0677 14 11.9997 14C7.93174 14 6.1434 15.7731 5.35897 17.2584C4.8257 18.2681 5.70531 19.25 6.84723 19.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder="Tu nombre *" aria-label="username" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group rounded-1 d-flex align-items-center mt-4 mt-md-0">
                          <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                              <path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder="Correo electrónico" aria-label="email" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group rounded-1 d-flex align-items-center mt-4">
                          <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                              <path className="stroke-dark" d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path className="stroke-dark" d="M5.5 6.5L12 12.25L18.5 6.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder="Teléfono" aria-label="phone" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group rounded-1 d-flex align-items-center mt-4">
                          <div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                              <path className="stroke-dark" d="M6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V9.75001L12 4.75L4.75 9.75001V17.25C4.75 18.3546 5.64544 19.25 6.75 19.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path className="stroke-dark" d="M9.75 15.749C9.75 14.6444 10.6455 13.749 11.75 13.749H12.25C13.3546 13.749 14.25 14.6444 14.25 15.749V19.249H9.75V15.749Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder="Asunto" aria-label="subject" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-group rounded-1 d-flex mt-4">
                          <div className="icon-input pt-2 ps-3 align-items-start border border-end-0 rounded-1 rounded-end-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                              <path className="stroke-dark" d="M5.5 2.14844H3C1.89543 2.14844 1 3.04387 1 4.14844V14.6484C1 15.753 1.89543 16.6484 3 16.6484H13.5C14.6046 16.6484 15.5 15.753 15.5 14.6484V12.1484" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path className="stroke-dark" d="M17.3285 1.20344L16.4448 0.319749C16.0185 -0.106583 15.3248 -0.106583 14.8984 0.319749L7.82915 7.38907C7.76373 7.45449 7.71914 7.53782 7.70096 7.62854L7.2591 9.83772C7.22839 9.99137 7.27647 10.1502 7.38729 10.261C7.47605 10.3498 7.59561 10.3983 7.71864 10.3983C7.74923 10.3983 7.77997 10.3953 7.81053 10.3892L10.0197 9.94732C10.1104 9.92917 10.1938 9.88455 10.2592 9.81913L17.3285 2.74984C17.3285 2.74984 17.3286 2.74984 17.3286 2.74981C17.7549 2.32351 17.7549 1.6298 17.3285 1.20344ZM9.69678 9.05607L8.31606 9.33225L8.59224 7.95153L14.3461 2.19754L15.4507 3.30214L9.69678 9.05607ZM16.6658 2.0871L16.1135 2.6394L15.0089 1.53479L15.5612 0.982524C15.6221 0.921601 15.7212 0.92157 15.7821 0.982493L16.6658 1.86618C16.7267 1.92707 16.7267 2.0262 16.6658 2.0871Z" fill="black" />
                            </svg>
                          </div>
                          <textarea className="form-control border border-start-0 ms-0 rounded-start-0 rounded-1 pb-10" name="name" placeholder="Describe brevemente tu proyecto" aria-label="With textarea" />
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary hover-up mt-4">
                          Enviar Mensaje
                          <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <path className="stroke-white" d="M21.1059 12.2562H0.5V11.7443H21.1059H22.313L21.4594 10.8907L17.0558 6.48705L17.4177 6.12508L23.2929 12.0002L17.4177 17.8754L17.0558 17.5134L21.4594 13.1098L22.313 12.2562H21.1059Z" fill="black" stroke="white" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-lg-6">
                  <div className="ps-lg-6">
                    <h6>Chatea con nosotros</h6>
                    <p className="text-500">Nuestro equipo de soporte está disponible 24/7</p>
                    <div className="d-flex mb-2">
                      <img src="/assets/imgs/contact-2/icon-1.svg" alt="Tucs Digital" />
                      <Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">Chat vía Whatsapp</Link>
                    </div>
                    <div className="d-flex mb-2">
                      <img src="/assets/imgs/contact-2/icon-2.svg" alt="Tucs Digital" />
                      <Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">Chat vía Viber</Link>
                    </div>
                    <div className="d-flex mb-2 mb-5">
                      <img src="/assets/imgs/contact-2/icon-3.svg" alt="Tucs Digital" />
                      <Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">Chat vía Messenger</Link>
                    </div>
                    <h6>Envíanos un correo</h6>
                    <p className="text-500">Nuestro equipo responderá rápidamente tus consultas</p>
                    <div className="d-flex mb-2">
                      <img src="/assets/imgs/contact-2/icon-4.svg" alt="Tucs Digital" />
                      <Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">soporte@tucsdigital.com</Link>
                    </div>
                    <div className="d-flex mb-2 mb-5">
                      <img src="/assets/imgs/contact-2/icon-4.svg" alt="Tucs Digital" />
                      <Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">ventas@tucsdigital.com</Link>
                    </div>
                    <h6>¿Necesitas ayuda inmediata?</h6>
                    <p className="text-500">Contáctanos para asistencia inmediata</p>
                    <div className="d-flex mb-2">
                      <img src="/assets/imgs/contact-2/icon-5.svg" alt="Tucs Digital" />
                      <Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">+54 9 11 2345 6789</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
