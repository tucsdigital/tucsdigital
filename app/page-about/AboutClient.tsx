"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import CountUp from 'react-countup'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function AboutClient() {

	const swiperOptions = {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		keyboard: {
			enabled: true,
		},
		pagination: {
			clickable: true,
		},
		navigation: true,
		modules: [Autoplay, Keyboard, Pagination, Navigation],
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
		},
	};

	return (
		<Layout>
			<section className="section-page-header py-10 fix position-relative">
				<div className="container position-relative z-1">
					<div className="text-start">
						<h3>Nosotros</h3>
						<div className="d-flex">
							<Link href="/">
								<p className="mb-0 text-900">Inicio</p>
							</Link>
							<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
								<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							<p className="text-primary mb-0">Nosotros</p>
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

			<section className="section-about pt-80px pb-120">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft-keep border border-2 border-white-keep d-inline-flex rounded-pill px-4 py-2">
								<img src="/assets/imgs/features-1/dots.png" alt="Tucs Digital" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Nosotros</span>
							</div>
							<h5 className="ds-5 mt-3 mb-3">Somos Tucs Digital</h5>
							<span className="fs-5 fw-medium">Tu partner tecnológico especializado en transformar ideas en realidades digitales. Con sede en Buenos Aires, ofrecemos soluciones tecnológicas de vanguardia para empresas que buscan crecer en el mundo digital.</span>
						</div>
						<div className="col-lg-6 ps-lg-0 pt-5 pt-lg-0">
							<div className="position-relative">
								<div className="position-relative z-2 p-3 p-md-5 p-lg-8 rounded-3 bg-primary">
									<div className="text-center">
										<div className="mb-4">
											<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" className="text-white">
												<path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
											</svg>
										</div>
										<h3 className="text-white mb-3">Innovación Digital</h3>
										<p className="text-white">Desarrollamos soluciones que impulsan el crecimiento de tu negocio</p>
									</div>
								</div>
								<div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section-features pt-80px pb-120 bg-5">
				<div className="container">
					<div className="text-center mb-8">
						<h2 className="mb-4">Nuestros Valores</h2>
						<p className="fs-5 text-600">Los principios que nos guían en cada proyecto</p>
					</div>
					<div className="row">
						<div className="col-lg-4 col-md-6 mb-6">
							<div className="bg-white rounded-4 p-6 h-100 border shadow-sm text-center">
								<div className="mb-4">
									<div className="bg-primary-soft rounded-circle d-flex align-items-center justify-content-center mx-auto" style={{ width: '80px', height: '80px' }}>
										<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#6D4DF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</div>
								</div>
								<h4 className="mb-3">Calidad</h4>
								<p className="text-600">Entregamos soluciones de alta calidad que superan las expectativas de nuestros clientes.</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mb-6">
							<div className="bg-white rounded-4 p-6 h-100 border shadow-sm text-center">
								<div className="mb-4">
									<div className="bg-primary-soft rounded-circle d-flex align-items-center justify-content-center mx-auto" style={{ width: '80px', height: '80px' }}>
										<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#6D4DF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</div>
								</div>
								<h4 className="mb-3">Innovación</h4>
								<p className="text-600">Utilizamos las últimas tecnologías para crear soluciones innovadoras y eficientes.</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mb-6">
							<div className="bg-white rounded-4 p-6 h-100 border shadow-sm text-center">
								<div className="mb-4">
									<div className="bg-primary-soft rounded-circle d-flex align-items-center justify-content-center mx-auto" style={{ width: '80px', height: '80px' }}>
										<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7ZM23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#6D4DF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</div>
								</div>
								<h4 className="mb-3">Compromiso</h4>
								<p className="text-600">Nos comprometemos con el éxito de nuestros clientes y su crecimiento digital.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section-stats pt-80px pb-120">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6 mb-6">
							<div className="text-center">
								<h3 className="text-primary mb-2">
									<CountUp end={50} duration={2} />+
								</h3>
								<p className="text-600">Proyectos Completados</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 mb-6">
							<div className="text-center">
								<h3 className="text-primary mb-2">
									<CountUp end={30} duration={2} />+
								</h3>
								<p className="text-600">Clientes Satisfechos</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 mb-6">
							<div className="text-center">
								<h3 className="text-primary mb-2">
									<CountUp end={5} duration={2} />
								</h3>
								<p className="text-600">Años de Experiencia</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 mb-6">
							<div className="text-center">
								<h3 className="text-primary mb-2">
									<CountUp end={24} duration={2} />/7
								</h3>
								<p className="text-600">Soporte Disponible</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}
