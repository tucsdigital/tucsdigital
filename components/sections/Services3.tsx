"use client"
import Link from "next/link"
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Services3() {

	const swiperOptions = {
		slidesPerView: 4,
		spaceBetween: 30,
		slidesPerGroup: 1,
		centeredSlides: false,
		loop: true,
		autoplay: {
			delay: 4000,
		},
		breakpoints: {
			1200: {
				slidesPerView: 4,
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
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	}

	return (
		<>


			<section className="section-services-3  section-padding">
				<div className="container position-relative z-2">
					<div className="text-center">
						<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
							<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
							<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Nuestras Soluciones</span>
						</div>
						<h3 className="ds-3 my-3 fw-regular">Soluciones Digitales <span className=" fw-bold">Especializadas <br className="d-lg-block d-none" /> para tu Negocio</span></h3>
					</div>
					<div className="row mt-6 position-relative">
						<Swiper {...swiperOptions}
							className="swiper slider-2 px-1"
							modules={[Keyboard, Autoplay, Pagination, Navigation]}
						>
							<div className="swiper-wrapper">
								<SwiperSlide className="swiper-slide">
									<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-3/icon-1.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3">Sitio Web con Reservas</h5>
										<p className="mb-6">Sistema completo de reservas online con gestión de disponibilidad, calendario interactivo y confirmaciones automáticas para alojamientos.</p>
										<Link href="#" className="text-primary fs-7 fw-bold">
											Ver Más
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
										<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-3/icon-2.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3">Integración WhatsApp/Calendar</h5>
										<p className="mb-6">Conecta reservas con WhatsApp Business y Google Calendar para automatizar confirmaciones y recordatorios.</p>
										<Link href="#" className="text-primary fs-7 fw-bold">
											Ver Más
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
										<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-3/icon-3.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3">Portal de Pagos</h5>
										<p className="mb-6">Sistema seguro de pagos online con múltiples métodos, facturación automática y gestión de transacciones.</p>
										<Link href="#" className="text-primary fs-7 fw-bold">
											Ver Más
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
										<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-3/icon-4.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3">Web Institucional o Catálogo</h5>
										<p className="mb-6">Sitios web profesionales con catálogo de productos, información corporativa y diseño responsive para comercios.</p>
										<Link href="#" className="text-primary fs-7 fw-bold">
											Ver Más
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
										<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-3/icon-1.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3">Integración Envíos y Pagos</h5>
										<p className="mb-6">Conecta con sistemas de envío, seguimiento de pedidos y múltiples medios de pago para optimizar tu comercio.</p>
										<Link href="#" className="text-primary fs-7 fw-bold">
											Ver Más
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
										<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-3/icon-2.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3">Mapa Interactivo / Master Plan</h5>
										<p className="mb-6">Mapas interactivos con ubicación de propiedades, filtros avanzados y visualización de master plans para inmobiliarias.</p>
										<Link href="#" className="text-primary fs-7 fw-bold">
											Ver Más
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
										<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-3/icon-3.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3">Sistema de Tickets y Pre-inscripción</h5>
										<p className="mb-6">Plataforma completa para venta de tickets, gestión de asistentes y control de aforo para eventos.</p>
										<Link href="#" className="text-primary fs-7 fw-bold">
											Ver Más
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
										<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-3/icon-4.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3">Portal Informativo</h5>
										<p className="mb-6">Sitio web institucional con información académica, noticias y recursos educativos para instituciones educativas.</p>
										<Link href="#" className="text-primary fs-7 fw-bold">
											Ver Más
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
										<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
									</div>
								</SwiperSlide>
							</div>
						</Swiper>
						<div className="swiper-button-prev d-none d-lg-flex shadow-2 position-absolute top-50 translate-middle-y bg-white ms-lg-7">
							<i className="bi bi-arrow-left" />
						</div>
						<div className="swiper-button-next d-none d-lg-flex shadow-2 position-absolute top-50 translate-middle-y bg-white">
							<i className="bi bi-arrow-right" />
						</div>
					</div>
				</div>
			</section>


		</>
	)
}
