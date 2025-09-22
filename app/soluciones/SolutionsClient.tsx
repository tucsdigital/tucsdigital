"use client";
import Layout from "@/components/layout/Layout";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CSSProperties } from "react";

const CATEGORIAS = [
  {
    nombre: "VENTAS Y COMERCIO",
    soluciones: [
      { id: "tienda-online", nombre: "Tienda Online", descripcion: "E-commerce completo" },
      { id: "carrito-compras", nombre: "Carrito de Compras", descripcion: "Sistema de compras" },
      { id: "catalogo-productos", nombre: "Catálogo de Productos", descripcion: "Gestión de inventario" },
      { id: "checkout-seguro", nombre: "Checkout Seguro", descripcion: "Proceso de pago seguro" },
      { id: "gestion-inventario", nombre: "Gestión de Inventario", descripcion: "Control de stock" },
      { id: "reportes-ventas", nombre: "Reportes de Ventas", descripcion: "Análisis de ventas" },
      { id: "cupones-descuentos", nombre: "Cupones y Descuentos", descripcion: "Sistema de promociones" },
      { id: "programa-fidelidad", nombre: "Programa de Fidelidad", descripcion: "Cliente frecuente" },
      { id: "marketplace", nombre: "Marketplace", descripcion: "Plataforma multi-vendedor" },
      { id: "dropshipping", nombre: "Dropshipping", descripcion: "Venta sin inventario" }
    ]
  },
  {
    nombre: "MARKETING Y COMUNICACIÓN",
    soluciones: [
      { id: "campañas-email", nombre: "Campañas de Email", descripcion: "Marketing por correo" },
      { id: "redes-sociales", nombre: "Gestión de Redes Sociales", descripcion: "Social media management" },
      { id: "content-marketing", nombre: "Content Marketing", descripcion: "Marketing de contenidos" },
      { id: "seo-sem", nombre: "SEO y SEM", descripcion: "Posicionamiento web" },
      { id: "analytics-marketing", nombre: "Analytics de Marketing", descripcion: "Métricas y análisis" },
      { id: "landing-pages", nombre: "Landing Pages", descripcion: "Páginas de conversión" },
      { id: "chatbots", nombre: "Chatbots", descripcion: "Atención automatizada" },
      { id: "crm-marketing", nombre: "CRM de Marketing", descripcion: "Gestión de clientes" },
      { id: "automation", nombre: "Marketing Automation", descripcion: "Automatización de marketing" },
      { id: "influencer-marketing", nombre: "Influencer Marketing", descripcion: "Marketing de influencers" }
    ]
  },
  {
    nombre: "GESTIÓN Y PRODUCTIVIDAD",
    soluciones: [
      { id: "crm", nombre: "CRM", descripcion: "Gestión de clientes" },
      { id: "erp", nombre: "ERP", descripcion: "Planificación de recursos" },
      { id: "gestion-proyectos", nombre: "Gestión de Proyectos", descripcion: "Project management" },
      { id: "facturacion", nombre: "Facturación Electrónica", descripcion: "Sistema de facturas" },
      { id: "contabilidad", nombre: "Contabilidad", descripcion: "Gestión financiera" },
      { id: "recursos-humanos", nombre: "Recursos Humanos", descripcion: "HR management" },
      { id: "inventario", nombre: "Gestión de Inventario", descripcion: "Control de stock" },
      { id: "tickets-soporte", nombre: "Sistema de Tickets", descripcion: "Soporte al cliente" },
      { id: "documentos", nombre: "Gestión Documental", descripcion: "Document management" },
      { id: "reportes", nombre: "Reportes y Analytics", descripcion: "Business intelligence" }
    ]
  },
  {
    nombre: "DESARROLLO Y TECNOLOGÍA",
    soluciones: [
      { id: "aplicaciones-web", nombre: "Aplicaciones Web", descripcion: "Desarrollo web" },
      { id: "apps-moviles", nombre: "Apps Móviles", descripcion: "iOS y Android" },
      { id: "apis", nombre: "APIs", descripcion: "Interfaces de programación" },
      { id: "integraciones", nombre: "Integraciones", descripcion: "Conectar sistemas" },
      { id: "cloud-computing", nombre: "Cloud Computing", descripcion: "Computación en la nube" },
      { id: "seguridad", nombre: "Seguridad Informática", descripcion: "Ciberseguridad" },
      { id: "backup", nombre: "Backup y Recuperación", descripcion: "Respaldo de datos" },
      { id: "monitoreo", nombre: "Monitoreo de Sistemas", descripcion: "Sistema de alertas" },
      { id: "devops", nombre: "DevOps", descripcion: "Desarrollo y operaciones" },
      { id: "microservicios", nombre: "Microservicios", descripcion: "Arquitectura distribuida" }
    ]
  },
  {
    nombre: "EDUCACIÓN Y CAPACITACIÓN",
    soluciones: [
      { id: "lms", nombre: "LMS", descripcion: "Sistema de aprendizaje" },
      { id: "cursos-online", nombre: "Cursos Online", descripcion: "E-learning" },
      { id: "webinars", nombre: "Webinars", descripcion: "Seminarios web" },
      { id: "certificaciones", nombre: "Certificaciones", descripcion: "Sistema de certificados" },
      { id: "gamificacion", nombre: "Gamificación", descripcion: "Aprendizaje gamificado" },
      { id: "tutores", nombre: "Plataforma de Tutores", descripcion: "Conecta estudiantes y tutores" },
      { id: "evaluaciones", nombre: "Sistema de Evaluaciones", descripcion: "Tests y exámenes" },
      { id: "biblioteca-digital", nombre: "Biblioteca Digital", descripcion: "Recursos educativos" },
      { id: "trabajo-colaborativo", nombre: "Trabajo Colaborativo", descripcion: "Herramientas de colaboración" },
      { id: "analytics-educativo", nombre: "Analytics Educativo", descripcion: "Métricas de aprendizaje" }
    ]
  }
];

export default function SolutionsClient() {
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
            {CATEGORIAS.map((categoria, index) => (
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
                            <h6 className="mb-1 text-900">{solucion.nombre}</h6>
                            <p className="mb-0 text-600 fs-7">{solucion.descripcion}</p>
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
