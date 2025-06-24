'use client'
import { useState } from 'react';
import Link from "next/link"

export default function Faqs2() {

	// Accordion
	const [activeItem, setActiveItem] = useState(1);

	const handleActiveItem = (index: any) => {
		setActiveItem(index);
	};

	return (
		<>
			<section id="preguntas-frecuentes" className="section-faqs-2 section-padding bg-4 position-relative">
				<div className="container position-relative z-2">
					<div className="text-center mb-8">
						<div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
							<img src="/assets/imgs/features-1/dots.png" alt="Tucs Digital" />
							<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Preguntas Frecuentes</span>
						</div>
						<h3 className="ds-3 my-3 fw-bold">¿Tienes alguna duda?</h3>
						<p className="fs-5 mb-0">Estamos aquí para ayudarte con cualquier consulta sobre nuestros servicios.</p>
					</div>
					<div className="row align-items-center position-relative z-1">
						<div className="col-lg-6">
							<div className="accordion">
								<div className="mb-3 card p-3 border bg-white rounded-3">
									<div className="px-0 card-header border-0 bg-gradient-1">
										<a className={` ${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(1)} data-bs-toggle="collapse" >
											<h6 className="m-0">¿Cuáles son los beneficios de trabajar con <span className="text-primary">Tucs Digital</span>?</h6>
											<span className="ms-auto arrow me-2">
												<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
													<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
										</a>
									</div>
									<div id="collapse01" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
										<p className="ps-0 card-body">
											En Tucs Digital ofrecemos soluciones personalizadas, soporte técnico especializado, tecnologías de vanguardia y resultados medibles. Nuestro equipo experto garantiza proyectos de alta calidad con tiempos de entrega optimizados y costos competitivos.
										</p>
									</div>
								</div>
								<div className="mb-3 card p-3 border bg-white rounded-3">
									<div className="px-0 card-header border-0 bg-gradient-1">
										<a className={` ${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(2)} data-bs-toggle="collapse" >
											<h6 className="m-0">¿Qué servicios ofrece <span className="text-primary">Tucs Digital</span>?</h6>
											<span className="ms-auto arrow me-2">
												<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
													<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
										</a>
									</div>
									<div id="collapse02" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
										<p className="ps-0 card-body">
											Ofrecemos desarrollo web profesional, aplicaciones móviles, soluciones e-commerce, sistemas personalizados, migración a la nube, diseño UI/UX, marketing digital y soporte técnico continuo para empresas de todos los tamaños.
										</p>
									</div>
								</div>
								<div className="mb-3 card p-3 border bg-white rounded-3">
									<div className="px-0 card-header border-0 bg-gradient-1">
										<a className={` ${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(3)} data-bs-toggle="collapse">
											<h6 className="m-0">¿Cómo funciona el proceso de trabajo?</h6>
											<span className="ms-auto arrow me-2">
												<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
													<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
										</a>
									</div>
									<div id="collapse03" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
										<p className="ps-0 card-body">
											Nuestro proceso incluye: 1) Consulta inicial y análisis de necesidades, 2) Propuesta personalizada y presupuesto, 3) Diseño y desarrollo iterativo, 4) Pruebas y optimización, 5) Lanzamiento y capacitación, 6) Soporte post-lanzamiento.
										</p>
									</div>
								</div>
								<div className="mb-3 card p-3 border bg-white rounded-3">
									<div className="px-0 card-header border-0 bg-gradient-1">
										<a className={` ${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(4)} data-bs-toggle="collapse" >
											<h6 className="m-0">¿Qué tecnologías utilizan?</h6>
											<span className="ms-auto arrow me-2">
												<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
													<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
										</a>
									</div>
									<div id="collapse04" className={activeItem == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
										<p className="ps-0 card-body">
											Utilizamos las tecnologías más modernas: React, Next.js, Node.js, PHP, WordPress, Flutter, React Native, AWS, Google Cloud, y herramientas de diseño como Figma y Adobe Creative Suite para garantizar soluciones escalables y de alto rendimiento.
										</p>
									</div>
								</div>
								<div className="mb-3 card p-3 border bg-white rounded-3">
									<div className="px-0 card-header border-0 bg-gradient-1">
										<a className={` ${activeItem} == 5 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(5)} data-bs-toggle="collapse" >
											<h6 className="m-0">¿Cuánto tiempo toma desarrollar un proyecto?</h6>
											<span className="ms-auto arrow me-2">
												<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
													<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
										</a>
									</div>
									<div id="collapse05" className={activeItem == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
										<p className="ps-0 card-body">
											Los tiempos varían según la complejidad: sitios web básicos (2-4 semanas), sitios complejos (4-8 semanas), aplicaciones móviles (8-16 semanas), sistemas personalizados (12-24 semanas). Siempre proporcionamos cronogramas detallados al inicio.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 mt-lg-0 mt-2">
							<div className="accordion">
								<div className="mb-3 card p-3 border bg-white rounded-3">
									<div className="px-0 card-header border-0 bg-gradient-1">
										<a className={` ${activeItem} == 6 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(6)} data-bs-toggle="collapse" >
											<h6 className="m-0">¿Ofrecen mantenimiento y soporte?</h6>
											<span className="ms-auto arrow me-2">
												<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
													<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
										</a>
									</div>
									<div id="collapse06" className={activeItem == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
										<p className="ps-0 card-body">
											Sí, ofrecemos planes de mantenimiento que incluyen actualizaciones de seguridad, respaldos automáticos, monitoreo 24/7, soporte técnico prioritario y mejoras continuas para mantener tu proyecto funcionando perfectamente.
										</p>
									</div>
								</div>
								<div className="mb-3 card p-3 border bg-white rounded-3">
									<div className="px-0 card-header border-0 bg-gradient-1">
										<a className={` ${activeItem} == 7 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(7)} data-bs-toggle="collapse" >
											<h6 className="m-0">¿Cómo es el proceso de inicio de proyecto?</h6>
											<span className="ms-auto arrow me-2">
												<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
													<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
										</a>
									</div>
									<div id="collapse07" className={activeItem == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
										<p className="ps-0 card-body">
											Comenzamos con una reunión de consultoría gratuita donde analizamos tus necesidades, objetivos y presupuesto. Luego presentamos una propuesta detallada con cronograma, costos y alcance del proyecto para tu aprobación.
										</p>
									</div>
								</div>
								<div className="mb-3 card p-3 border bg-white rounded-3">
									<div className="px-0 card-header border-0 bg-gradient-1">
										<a className={` ${activeItem} == 8 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(8)} data-bs-toggle="collapse">
											<h6 className="m-0">¿Cuáles son los costos de sus servicios?</h6>
											<span className="ms-auto arrow me-2">
												<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
													<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
										</a>
									</div>
									<div id="collapse08" className={activeItem == 8 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
										<p className="ps-0 card-body">
											Nuestros precios son competitivos y transparentes. Ofrecemos diferentes planes según tus necesidades: desde proyectos básicos hasta soluciones empresariales completas. Todos los presupuestos incluyen desglose detallado sin costos ocultos.
										</p>
									</div>
								</div>
								<div className="mb-3 card p-3 border bg-white rounded-3">
									<div className="px-0 card-header border-0 bg-gradient-1">
										<a className={` ${activeItem} == 9 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(9)} data-bs-toggle="collapse" >
											<h6 className="m-0">¿En qué tiempo veré resultados?</h6>
											<span className="ms-auto arrow me-2">
												<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
													<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
										</a>
									</div>
									<div id="collapse09" className={activeItem == 9 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
										<p className="ps-0 card-body">
											Los resultados varían según el proyecto: sitios web básicos (inmediato al lanzamiento), SEO (3-6 meses), aplicaciones móviles (inmediato), marketing digital (1-3 meses). Proporcionamos reportes regulares de progreso y métricas.
										</p>
									</div>
								</div>
								<div className="mb-3 card p-3 border bg-white rounded-3">
									<div className="px-0 card-header border-0 bg-gradient-1">
										<a className={` ${activeItem} == 10 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(10)} data-bs-toggle="collapse" >
											<h6 className="m-0">¿Trabajan con empresas de cualquier tamaño?</h6>
											<span className="ms-auto arrow me-2">
												<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
													<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
										</a>
									</div>
									<div id="collapse10" className={activeItem == 10 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
										<p className="ps-0 card-body">
											Absolutamente. Trabajamos con startups, pequeñas empresas, medianas empresas y grandes corporaciones. Adaptamos nuestras soluciones y metodologías según el tamaño y necesidades específicas de cada cliente.
										</p>
									</div>
								</div>
								<div className="mb-3 card p-3 border bg-white rounded-3">
									<div className="px-0 card-header border-0 bg-gradient-1">
										<a className={` ${activeItem} == 11 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(11)} data-bs-toggle="collapse" >
											<h6 className="m-0">¿Ofrecen garantía en sus proyectos?</h6>
											<span className="ms-auto arrow me-2">
												<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
													<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
										</a>
									</div>
									<div id="collapse11" className={activeItem == 11 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
										<p className="ps-0 card-body">
											Sí, ofrecemos garantía de 3 meses en todos nuestros proyectos. Durante este período, corregimos cualquier error o problema sin costo adicional. También proporcionamos documentación completa y capacitación para tu equipo.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="ellipse-center position-absolute top-50 start-50 translate-middle z-0" />
				</div>
			</section>

		</>
	)
}
