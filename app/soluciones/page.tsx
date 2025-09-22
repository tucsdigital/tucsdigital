"use client";
import Layout from "@/components/layout/Layout";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CSSProperties } from "react";
import { generateMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Soluciones Digitales - Tucs Digital",
  description: "Descubre nuestras soluciones digitales: desarrollo web, e-commerce, aplicaciones móviles, marketing digital, sistemas de gestión y más. Más de 50 soluciones para tu negocio.",
  keywords: ["soluciones digitales", "desarrollo web", "e-commerce", "aplicaciones móviles", "marketing digital", "sistemas de gestión", "Tucs Digital"],
  canonical: "/soluciones"
})

const CATEGORIAS = [
  {
    nombre: "VENTAS Y COMERCIO",
    soluciones: [
      {
        id: "tienda-online-autogestionable",
        titulo: "Tienda Online Autogestionable",
        descripcion:
          "Crea tu propia tienda digital donde podés cargar productos, gestionar precios, medios de pago y pedidos de forma 100% autónoma.",
      },
      {
        id: "catalogo-virtual-sin-carrito",
        titulo: "Catálogo Virtual sin Carrito",
        descripcion:
          "Ideal para mostrar productos sin necesidad de vender online. Tus clientes pueden ver fotos, descripciones y consultar fácilmente.",
      },
      {
        id: "sistema-pre-orden-encargo",
        titulo: "Sistema de Pre-Orden o Encargo",
        descripcion:
          "Permití que tus clientes reserven productos con antelación y los retiren o reciban luego. ¡Organización asegurada!",
      },
      {
        id: "sistema-venta-suscripcion",
        titulo: "Sistema de Venta por Suscripción",
        descripcion:
          "Ofrecé productos o servicios de manera recurrente con cobros automáticos. Ideal para membresías o entregas periódicas.",
      },
      {
        id: "punto-venta-pos-digital",
        titulo: "Punto de Venta (POS) Digital",
        descripcion:
          "Transformá tu local físico con un sistema de caja moderno, con stock, facturación y estadísticas.",
      },
      {
        id: "boton-pago-sin-tienda",
        titulo: "Botón de Pago sin Tienda",
        descripcion:
          "Generá links de pago para vender sin necesidad de una tienda online completa. ¡Cobrá fácil y rápido!",
      },
      {
        id: "catalogo-virtual-instagram-whatsapp",
        titulo: "Catálogo Virtual para Instagram/WhatsApp",
        descripcion:
          "Un catálogo interactivo ideal para compartir en redes. Mostrá tus productos de forma ordenada y profesional.",
      },
    ],
  },
  {
    nombre: "VISIBILIDAD Y POSICIONAMIENTO",
    soluciones: [
      {
        id: "google-maps-perfil-empresa",
        titulo: "Google Maps + Perfil de Empresa",
        descripcion:
          "Aparecé en Google con tu dirección, horarios y reseñas. Mejorá tu presencia local y que te encuentren fácil.",
      },
      {
        id: "sitio-web-institucional",
        titulo: "Sitio Web Institucional",
        descripcion:
          "Tu carta de presentación online. Mostrá tu historia, servicios, equipo y formas de contacto.",
      },
      {
        id: "landing-pages-promocion",
        titulo: "Landing Pages de Promoción",
        descripcion:
          "Páginas enfocadas en campañas específicas con mensajes claros y llamados a la acción que convierten.",
      },
      {
        id: "web-multilenguaje-multimoneda",
        titulo: "Web Multilenguaje y Multimoneda",
        descripcion:
          "Atendé a públicos internacionales ofreciendo idioma y moneda adaptados a cada cliente.",
      },
      {
        id: "seo-local-estrategico",
        titulo: "SEO Local Estratégico",
        descripcion:
          "Posicioná tu sitio en las búsquedas de tu ciudad o zona, atrayendo visitas con intención de compra.",
      },
      {
        id: "ficha-tecnica-seo-productos",
        titulo: "Ficha Técnica SEO para Productos",
        descripcion:
          "Mejorá el posicionamiento de cada producto con descripciones optimizadas para buscadores.",
      },
      {
        id: "panel-estadisticas-trafico",
        titulo: "Panel de Estadísticas de Visitas y Tráfico",
        descripcion:
          "Conocé cuántas personas visitan tu sitio, desde dónde, y qué hacen en él.",
      },
      {
        id: "sistema-opiniones-testimonios",
        titulo: "Sistema de Opiniones y Testimonios Reales",
        descripcion:
          "Generá confianza con comentarios reales validados por email o WhatsApp.",
      },
      {
        id: "politica-cookies-rgpd",
        titulo: "Política de Cookies y RGPD",
        descripcion:
          "Cumplí con las leyes de protección de datos mostrando transparencia en el uso de información.",
      },
    ],
  },
  {
    nombre: "MARKETING Y PUBLICIDAD DIGITAL",
    soluciones: [
      {
        id: "campanas-meta-ads",
        titulo: "Campañas Meta Ads (Facebook + Instagram)",
        descripcion:
          "Llegá a miles de personas con anuncios que impactan y convierten en redes sociales.",
      },
      {
        id: "campanas-google-ads",
        titulo: "Campañas Google Ads",
        descripcion:
          "Aparecé en los primeros resultados de búsqueda, YouTube o Maps cuando tus clientes te buscan.",
      },
      {
        id: "remarketing-inteligente",
        titulo: "Remarketing Inteligente",
        descripcion:
          "Recordale a tus visitantes que vuelvan. Mostrales productos que ya vieron.",
      },
      {
        id: "email-marketing-automatizado",
        titulo: "Email Marketing Automatizado",
        descripcion:
          "Enviá correos automáticos según el comportamiento del usuario. ¡Fidelizá y reactivá ventas!",
      },
      {
        id: "secuencia-whatsapp-programada",
        titulo: "Secuencia de WhatsApp Programada",
        descripcion:
          "Programá mensajes que se disparan automáticamente para promociones, recordatorios o respuestas.",
      },
      {
        id: "crm-gestion-clientes",
        titulo: "CRM (Gestión de Clientes)",
        descripcion:
          "Conocé y segmentá a tus clientes. Hacé seguimiento, anotá interacciones y mejorá tu atención.",
      },
      {
        id: "gestion-redes-sociales-profesional",
        titulo: "Gestión de Redes Sociales Profesional",
        descripcion:
          "Diseño, contenido y estrategia para que tus redes sumen seguidores y ventas.",
      },
      {
        id: "diseno-reels-contenido-viral",
        titulo: "Diseño de Reels y Contenido Viral",
        descripcion:
          "Creamos videos atractivos con subtítulos y música para que destaques en Instagram o TikTok.",
      },
      {
        id: "panel-reputacion-online",
        titulo: "Panel de Reputación Online",
        descripcion:
          "Monitoreá y respondé reseñas en Google y redes. Protegé tu imagen online.",
      },
    ],
  },
  {
    nombre: "RESERVAS, TURNOS Y AGENDAMIENTO",
    soluciones: [
      {
        id: "sistema-reservas-online",
        titulo: "Sistema de Reservas Online",
        descripcion:
          "Tus clientes reservan desde la web y reciben confirmación automática. Ideal para alojamientos o servicios.",
      },
      {
        id: "turnero-inteligente-profesional-servicio",
        titulo: "Turnero Inteligente por Profesional o Servicio",
        descripcion:
          "Agendá por tipo de servicio, profesional o sucursal. ¡Todo ordenado y sin errores!",
      },
      {
        id: "registro-checkin-digital-eventos",
        titulo: "Registro y Check-In Digital para Eventos",
        descripcion:
          "Registrá asistentes, generá QR y validá entradas desde el celular.",
      },
      {
        id: "agenda-compartida-area-rubro",
        titulo: "Agenda Compartida por Área o Rubro",
        descripcion:
          "Mostrá disponibilidad por sucursal, sede o tipo de servicio.",
      },
      {
        id: "turnos-rango-horario",
        titulo: "Turnos por Rango Horario (Ej. 15 minutos)",
        descripcion:
          "Ofrecé bloques de tiempo predefinidos y simplificá la gestión de agenda.",
      },
    ],
  },
  {
    nombre: "SISTEMAS PERSONALIZADOS & GESTIÓN",
    soluciones: [
      {
        id: "gestion-inventario-avanzado",
        titulo: "Gestión de Inventario Avanzado",
        descripcion:
          "Control completo de stock, ingresos, egresos y mínimos. Nunca más te quedes sin producto.",
      },
      {
        id: "erp-pyme",
        titulo: "ERP PyME (Ventas, Stock, Compras, Cuentas)",
        descripcion:
          "Unificá toda tu gestión en un solo sistema. Administrá desde un solo lugar.",
      },
      {
        id: "facturacion-electronica-reportes",
        titulo: "Facturación Electrónica y Reportes",
        descripcion:
          "Emití facturas automáticas y cumplí con AFIP u organismo local.",
      },
      {
        id: "sistema-pedidos-internos-reposicion",
        titulo: "Sistema de Pedidos Internos / Reposición",
        descripcion: "Coordiná pedidos entre sucursales y depósito central.",
      },
      {
        id: "gestor-documentos-expedientes-digitales",
        titulo: "Gestor de Documentos o Expedientes Digitales",
        descripcion:
          "Almacená y clasificá documentación por cliente, caso o proyecto.",
      },
      {
        id: "panel-cobranzas-morosos",
        titulo: "Panel de Cobranzas y Morosos",
        descripcion:
          "Visualizá quién debe, cuánto y desde cuándo. Enviá alertas automáticas.",
      },
      {
        id: "gestor-presupuestos-online",
        titulo: "Gestor de Presupuestos Online",
        descripcion:
          "Cotizá y enviá presupuestos desde un panel. Hacé seguimiento en tiempo real.",
      },
    ],
  },
  {
    nombre: "INTELIGENCIA Y AUTOMATIZACIÓN",
    soluciones: [
      {
        id: "chatbot-ia-consultas-frecuentes",
        titulo: "ChatBot con IA para Consultas Frecuentes",
        descripcion:
          "Respondé 24/7 con inteligencia artificial, guiando y captando potenciales clientes.",
      },
      {
        id: "asistente-ia-diagnostico-seleccion",
        titulo: "Asistente IA para Diagnóstico o Selección",
        descripcion:
          "Ayudá al usuario a elegir productos o servicios con un asistente inteligente.",
      },
      {
        id: "recomendador-inteligente-productos",
        titulo: "Recomendador Inteligente de Productos",
        descripcion:
          "Mostrá productos sugeridos según intereses y navegación del cliente.",
      },
      {
        id: "notificaciones-inteligentes-personalizadas",
        titulo: "Notificaciones Inteligentes Personalizadas",
        descripcion:
          "Alertas por abandono de carrito, promociones, stock bajo o novedades.",
      },
      {
        id: "automatizador-tareas-repetitivas-rpa",
        titulo: "Automatizador de Tareas Repetitivas (RPA)",
        descripcion:
          "Dejá que el sistema haga por vos tareas como subir datos, enviar mails o informes.",
      },
      {
        id: "panel-kpi-dinamicos",
        titulo: "Panel de KPI Dinámicos",
        descripcion:
          "Visualizá en tiempo real tus métricas clave: ventas, tráfico, reservas y más.",
      },
      {
        id: "encuestas-opiniones-automaticas-post-compra",
        titulo: "Encuestas y Opiniones Automáticas Post-Compra",
        descripcion:
          "Solicitá opiniones tras la compra de forma automática y personalizada.",
      },
    ],
  },
  {
    nombre: "SEGURIDAD Y PROTECCIÓN DIGITAL",
    soluciones: [
      {
        id: "ssl-proteccion-datos-formularios",
        titulo: "SSL + Protección de Datos en Formularios",
        descripcion:
          "Cifrado seguro para proteger datos sensibles de tus usuarios.",
      },
      {
        id: "copias-seguridad-automatizadas",
        titulo: "Copias de Seguridad Automatizadas",
        descripcion:
          "Backups regulares de tu sitio y base de datos, sin que tengas que preocuparte.",
      },
      {
        id: "firewall-escaneo-antihackeo",
        titulo: "Firewall y Escaneo Antihackeo",
        descripcion:
          "Sistema activo que protege tu sitio de ataques, spam y bots.",
      },
      {
        id: "gestion-legal-politicas-uso-privacidad",
        titulo: "Gestión Legal: Políticas de Uso y Privacidad",
        descripcion:
          "Textos legales listos para cumplir con normas locales e internacionales.",
      },
    ],
  },
  {
    nombre: "CONTENIDO & PRESENTACIÓN",
    soluciones: [
      {
        id: "menu-digital-filtros-qr",
        titulo: "Menú Digital con Filtros y QR",
        descripcion:
          "Carta digital escaneable con filtros por tipo, precio o ingredientes. Ideal para gastronomía.",
      },
      {
        id: "galeria-fotos-carga-dinamica",
        titulo: "Galería de Fotos con Carga Dinámica",
        descripcion:
          "Muestra profesional de imágenes actualizadas de productos, servicios o instalaciones.",
      },
      {
        id: "videos-producto-recorridos-360",
        titulo: "Videos de Producto o Recorridos 360°",
        descripcion:
          "Presentaciones visuales que sumergen al usuario en tu marca o espacio.",
      },
      {
        id: "blog-autoadministrable",
        titulo: "Blog Autoadministrable",
        descripcion:
          "Publicá novedades, consejos o noticias. Mejorá el SEO y acercate al público.",
      },
      {
        id: "lookbook-portafolio-visual",
        titulo: "Lookbook o Portafolio Visual",
        descripcion: "Exhibí tus trabajos de forma profesional y categorizada.",
      },
      {
        id: "catalogo-pdf-autogenerado",
        titulo: "Catálogo PDF Autogenerado",
        descripcion:
          "Generación automática de catálogos descargables actualizados.",
      },
    ],
  },
  {
    nombre: "EXPANSIÓN DIGITAL Y SERVICIOS PREMIUM",
    soluciones: [
      {
        id: "plataforma-cursos-online-certificados",
        titulo: "Plataforma de Cursos Online con Certificados",
        descripcion:
          "Ofrecé formación con clases en vivo o grabadas, evaluaciones y certificados digitales.",
      },
      {
        id: "sitio-multirubro-multiciudad",
        titulo: "Sitio Multirubro / Multiciudad",
        descripcion:
          "Creá micrositios por ciudad o rubro dentro de una misma plataforma.",
      },
      {
        id: "sistema-franquicias-digital",
        titulo: "Sistema de Franquicias Digital",
        descripcion:
          "Cada sucursal gestiona su sitio con control central. Escalá tu negocio sin perder el control.",
      },
      {
        id: "sitio-afiliados-promotores",
        titulo: "Sitio de Afiliados o Promotores",
        descripcion:
          "Creá una red de promotores que generen ventas y ganen comisiones automáticamente.",
      },
      {
        id: "aplicacion-movil-personalizada",
        titulo: "Aplicación Móvil Personalizada",
        descripcion:
          "Tu negocio en el celular de tus clientes. App nativa con funcionalidades conectadas a tu web.",
      },
    ],
  },
];

const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  swipeToSlide: true,
  centerMode: false,
  responsive: [
    { breakpoint: 1400, settings: { slidesToShow: 3 } },
    { breakpoint: 992, settings: { slidesToShow: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 1 } },
  ],
};

const cardStyle: CSSProperties = {
  minHeight: 240,
  maxWidth: 350,
  minWidth: 280,
  background: "linear-gradient(135deg, #fff 60%, #f3f4f6 100%)",
  border: "1px solid #e5e7eb",
  boxShadow: "0 6px 32px 0 rgba(60,60,100,0.10)",
  borderRadius: 24,
  padding: 32,
  transition: "box-shadow 0.2s, transform 0.2s",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
};

const cardHoverStyle: CSSProperties = {
  boxShadow: "0 12px 40px 0 rgba(60,60,100,0.18)",
  transform: "translateY(-6px) scale(1.03)",
  borderColor: "#7c3aed",
};

export default function PageSoluciones() {
  return (
    <Layout>
      <section className="section-team-1 position-relative fix section-padding">
        <div className="container position-relative z-2">
          <div className="text-center mb-6">
            <div className="d-inline-flex align-items-center bg-primary-soft border border-2 border-white rounded-pill px-4 py-2 mb-2">
              <img src="/assets/imgs/features-1/dots.png" alt="soluciones" />
              <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                Soluciones Digitales
              </span>
            </div>
            <h2 className="ds-3 my-3 fw-bold text-dark">
              Explora nuestras soluciones por categoría
            </h2>
            <p className="fs-5 text-700">
              Elige la solución ideal para tu negocio y lleva tu empresa al
              siguiente nivel.
            </p>
          </div>
          {CATEGORIAS.map((cat) => (
            <div key={cat.nombre} className="mb-7">
              <div className="d-flex align-items-center mb-4">
                <span className="d-inline-flex align-items-center justify-content-center bg-primary-soft rounded-circle me-3" style={{width: 44, height: 44}}>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#7c3aed" fillOpacity="0.12"/><path d="M8 12h8M12 8v8" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/></svg>
                </span>
                <h3 className="fw-bold text-dark mb-0" style={{fontSize: '2rem', letterSpacing: '0.5px', borderLeft: '4px solid #7c3aed', paddingLeft: 16, background: 'linear-gradient(90deg, #f3f4f6 80%, #fff 100%)', borderRadius: 8}}>
                  {cat.nombre}
                </h3>
              </div>
              <Slider {...sliderSettings} className="mb-2">
                {cat.soluciones.map((sol) => (
                  <div key={sol.id} className="px-2">
                    <Link
                      href={`/soluciones/${sol.id}`}
                      className="text-decoration-none"
                      style={{ display: "block" }}
                    >
                      <div
                        className="sol-card position-relative group"
                        style={cardStyle as any}
                        tabIndex={0}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLDivElement).style.boxShadow =
                            cardHoverStyle.boxShadow!;
                          (e.currentTarget as HTMLDivElement).style.transform =
                            cardHoverStyle.transform!;
                          (
                            e.currentTarget as HTMLDivElement
                          ).style.borderColor = cardHoverStyle.borderColor!;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLDivElement).style.boxShadow =
                            cardStyle.boxShadow!;
                          (e.currentTarget as HTMLDivElement).style.transform =
                            "";
                          (
                            e.currentTarget as HTMLDivElement
                          ).style.borderColor = "#e5e7eb";
                        }}
                      >
                        {/* <span className="badge bg-primary-soft text-primary fw-bold mb-2 px-3 py-2 rounded-pill fs-7 position-absolute top-0 end-0 mt-3 me-3 shadow-sm" style={{letterSpacing: 1}}>
                          {cat.nombre.split(' ')[0]}
                        </span> */}
                        <h5 className="mb-2 text-center text-primary fw-bold fs-5">
                          {sol.titulo}
                        </h5>
                        <p
                          className="text-900 text-center mb-0 fs-6"
                          style={{ minHeight: 60 }}
                        >
                          {sol.descripcion}
                        </p>
                        <span className="d-block mt-4 text-primary fw-bold fs-7 text-decoration-underline">
                          Ver detalle
                        </span>
                        <span className="position-absolute bottom-0 end-0 mb-3 me-3 opacity-10">
                          <svg
                            width="32"
                            height="32"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M5 12h14M13 6l6 6-6 6"
                              stroke="#7c3aed"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          ))}
        </div>
        <style jsx global>{`
          .sol-card:focus,
          .sol-card:active {
            box-shadow: 0 12px 40px 0 rgba(60, 60, 100, 0.18) !important;
            transform: translateY(-6px) scale(1.03) !important;
            border-color: #7c3aed !important;
            outline: none;
          }
          .slick-slider {
            padding-bottom: 16px;
          }
          .slick-arrow {
            background: #fff !important;
            border-radius: 50%;
            box-shadow: 0 2px 8px 0 rgba(60, 60, 100, 0.1);
            width: 40px;
            height: 40px;
            z-index: 2;
          }
          .slick-arrow:before {
            color: #7c3aed !important;
            font-size: 28px !important;
          }
          .slick-disabled {
            opacity: 0.3 !important;
          }
          .slick-slide > div {
            display: flex;
            height: 100%;
          }
        `}</style>
        <div className="position-absolute top-0 start-50 translate-middle-x z-0">
          <img src="/assets/imgs/service-2/bg-line.png" alt="infinia" />
        </div>
        <div className="rotate-center ellipse-rotate-success position-absolute z-1" />
        <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
      </section>
    </Layout>
  );
}
