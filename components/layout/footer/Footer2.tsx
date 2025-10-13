import Link from "next/link";

export default function Footer2() {
  return (
    <>
      <footer>
        <div className="section-footer">
          <div className="container-fluid bg-white">
            <div className=" container position-relative z-2">
              <div className="row py-90">
                <div className="col-lg-4 pe-10">
                  <Link
                    className="navbar-brand d-flex main-logo align-items-center"
                    href="/"
                  >
                    <img
                      className="w-auto"
                      style={{ maxHeight: "22px", width: "auto", paddingRight: "10px" }}
                      src="/assets/imgs/template/tucs-isotipo.png"
                      alt="Tucs Digital"
                    />
                    <span>Tucs Digital</span>
                  </Link>
                  <p className="text-900 fw-medium mt-3 mb-6 opacity-50">
                    Somos expertos en desarrollo web y soluciones digitales.
                    Transformamos ideas en experiencias digitales excepcionales
                    que impulsan el crecimiento de tu negocio en el mundo
                    online.
                  </p>
                  <div className="d-flex social-icons">
                    <Link
                      href="/https://www.facebook.com/"
                      className=" text-900 border border-end-0  border-opacity-10 icon-shape icon-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={17}
                        viewBox="0 0 10 17"
                        fill="none"
                      >
                        <path
                          className="fill-dark"
                          d="M8.84863 9.20312H6.5415V16.0938H3.46533V9.20312H0.942871V6.37305H3.46533V4.18896C3.46533 1.72803 4.94189 0.34375 7.1875 0.34375C8.26416 0.34375 9.40234 0.559082 9.40234 0.559082V2.98926H8.14111C6.91064 2.98926 6.5415 3.72754 6.5415 4.52734V6.37305H9.2793L8.84863 9.20312Z"
                          fill="black"
                        />
                      </svg>
                    </Link>
                    <Link
                      href="/https://twitter.com/"
                      className=" text-900 border border-end-0    border-opacity-10 icon-shape icon-md"
                    >
                      <i className="bi bi-twitter-x" />
                    </Link>
                    <Link
                      href="/https://www.linkedin.com/"
                      className=" text-900 border    border-opacity-10 icon-shape icon-md"
                    >
                      <i className="bi bi-linkedin" />
                    </Link>
                    <Link
                      href="/https://www.behance.net/"
                      className=" text-900 border border-start-0    border-opacity-10 icon-shape icon-md"
                    >
                      <i className="bi bi-behance" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-6">
                      <h3 className="text-900 fs-6 fw-black text-uppercase pb-3 pt-5">
                        Empresa
                      </h3>
                      <div className="d-flex flex-column align-items-start">
                        <Link
                          className="hover-effect text-900 mb-2 fw-medium fs-6"
                          href="/#"
                        >
                          Misión y Visión
                        </Link>
                        <Link
                          className="hover-effect text-900 mb-2 fw-medium fs-6"
                          href="/#"
                        >
                          Nuestro Equipo
                        </Link>
                        <Link
                          className="hover-effect text-900 mb-2 fw-medium fs-6"
                          href="/#"
                        >
                          Trabaja con Nosotros
                        </Link>
                        <Link
                          className="hover-effect text-900 mb-2 fw-medium fs-6"
                          href="/#"
                        >
                          Prensa y Medios
                        </Link>
                        <Link
                          className="hover-effect text-900 mb-2 fw-medium fs-6"
                          href="/#"
                        >
                          Publicidad
                        </Link>
                        <Link
                          className="hover-effect text-900 mb-2 fw-medium fs-6"
                          href="/#"
                        >
                          Testimonios
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-6">
                      <h3 className="text-900 fs-6 fw-black text-uppercase pb-3 pt-5">
                        Soporte
                      </h3>
                      <div className="d-flex flex-column align-items-start">
                        <Link
                          className="hover-effect text-900 mb-2 fw-medium fs-6"
                          href="/#"
                        >
                          Base de Conocimientos
                        </Link>
                        <Link
                          className="hover-effect text-900 mb-2 fw-medium fs-6"
                          href="/#"
                        >
                          Documentación
                        </Link>
                        <Link
                          className="hover-effect text-900 mb-2 fw-medium fs-6"
                          href="/#"
                        >
                          Estado del Sistema
                        </Link>
                        <Link
                          className="hover-effect text-900 mb-2 fw-medium fs-6"
                          href="/#"
                        >
                          Seguridad
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-3">
                      <h3 className="text-900 fs-6 fw-black text-uppercase pb-3 pt-5">
                        Publicaciones de Instagram
                      </h3>
                      {/* Elfsight Instagram Feed | Untitled Instagram Feed */}
                      <div 
                        className="elfsight-app-ec4dc92e-4df1-4c96-b65c-9d78e6ce49c6" 
                        data-elfsight-app-lazy
                      />
                      <style jsx>{`
                        :global(.eapps-instagram-feed-title) {
                          display: none !important;
                        }
                        :global(.elfsight-app-ec4dc92e-4df1-4c96-b65c-9d78e6ce49c6) {
                          max-width: 100% !important;
                          transform: scale(0.8);
                          transform-origin: top left;
                        }
                        :global(.eapps-instagram-feed-posts-grid-item) {
                          max-width: 80px !important;
                          max-height: 80px !important;
                        }
                        :global(.eapps-instagram-feed-posts-grid) {
                          gap: 8px !important;
                        }
                      `}</style>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid bg-primary-soft">
            <div className="container">
              <div className="row">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 py-4 border-top border-white border-opacity-10">
                  <p className="text-900 opacity-50 mb-0 fs-7">
                    Copyright © 2024 Tucs Digital. Todos los Derechos Reservados
                  </p>
                  <div className="d-flex">
                    <Link href="/#" className="text-900 me-3">
                      {" "}
                      Política de Privacidad{" "}
                    </Link>
                    <Link href="/#" className="text-900 me-3">
                      {" "}
                      Cookies{" "}
                    </Link>
                    <Link href="/#" className="text-900 me-3">
                      {" "}
                      Términos de Servicio{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
