import Link from 'next/link'

export default function Footer1() {
	return (
		<>
			<footer>
				<div className="section-footer position-relative">
					<div className="container-fluid bgft-1">
						<div className="container position-relative z-2">
							<div className="row py-90">
								<div className="col-lg-4 pe-10" data-aos="fade-zoom-in" data-aos-delay={100}>
									<Link href="/"><img src="/assets/imgs/logo/logo-white.svg" alt="Tucs Digital" /></Link>
									<p className="text-white fw-medium mt-3 mb-6 opacity-50">Somos expertos en desarrollo web y soluciones digitales. Transformamos ideas en experiencias digitales excepcionales que impulsan el crecimiento de tu negocio en el mundo online.</p>
									<div className="d-flex social-icons">
										<Link href="https://www.facebook.com/" className=" text-white border border-end-0 border-light border-opacity-10 icon-shape icon-md">
											<svg xmlns="http://www.w3.org/2000/svg" width={10} height={17} viewBox="0 0 10 17" fill="none">
												<path d="M8.84863 9.20312H6.5415V16.0938H3.46533V9.20312H0.942871V6.37305H3.46533V4.18896C3.46533 1.72803 4.94189 0.34375 7.1875 0.34375C8.26416 0.34375 9.40234 0.559082 9.40234 0.559082V2.98926H8.14111C6.91064 2.98926 6.5415 3.72754 6.5415 4.52734V6.37305H9.2793L8.84863 9.20312Z" fill="white" />
											</svg>
										</Link>
										<Link href="https://twitter.com/" className=" text-white border border-end-0 border-light border-opacity-10 icon-shape icon-md">
											<i className="bi bi-twitter-x" />
										</Link>
										<Link href="https://www.linkedin.com/" className=" text-white border border-light border-opacity-10 icon-shape icon-md">
											<i className="bi bi-linkedin" />
										</Link>
										<Link href="https://www.behance.net/" className=" text-white border border-start-0 border-light border-opacity-10 icon-shape icon-md">
											<i className="bi bi-behance" />
										</Link>
									</div>
								</div>
								<div className="col-lg-8">
									<div className="row">
										<div className="col-lg-3 col-md-4 col-6" data-aos="fade-zoom-in" data-aos-delay={200}>
											<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">Empresa</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Misión y Visión</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Nuestro Equipo</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Trabaja con Nosotros</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Prensa y Medios</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Publicidad</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Testimonios</Link>
											</div>
										</div>
										<div className="col-lg-3 col-md-4 col-6" data-aos="fade-zoom-in" data-aos-delay={300}>
											<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">Recursos</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Nuestros Proyectos</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Soluciones</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Clientes</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Noticias y Eventos</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Gestión de Proyectos</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Centro de Ayuda</Link>
											</div>
										</div>
										<div className="col-lg-3 col-md-4 col-6" data-aos="fade-zoom-in" data-aos-delay={400}>
											<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">Servicios</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Desarrollo Web</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Diseño Web</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">E-commerce</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">SEO y Marketing</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Branding</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Consultoría Digital</Link>
											</div>
										</div>
										<div className="col-lg-3 col-md-4 col-6" data-aos="fade-zoom-in" data-aos-delay={500}>
											<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">Soporte</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Base de Conocimientos</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Documentación</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Estado del Sistema</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Seguridad</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row text-center py-4 border-top border-white border-opacity-10">
								<span className="text-white opacity-50" data-aos="fade-zoom-in" data-aos-delay={200}>Copyright © 2024 Tucs Digital. Todos los Derechos Reservados</span>
							</div>
						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/footer-1/line-bg.png" alt="Tucs Digital" />
					</div>
					<div className="position-absolute top-0 start-0 z-0">
						<img src="/assets/imgs/footer-1/ellipse-left.png" alt="Tucs Digital" />
					</div>
					<div className="position-absolute top-0 end-0 z-0">
						<img src="/assets/imgs/footer-1/ellipse-right.png" alt="Tucs Digital" />
					</div>
				</div>
			</footer>

		</>
	)
}
