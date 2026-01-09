"use client"
import Link from "next/link"
import { useEffect } from "react"

export default function HeroViajes() {
	useEffect(() => {
		// Smooth scroll para navegación interna
		const handleSmoothScroll = (e: Event) => {
			const target = e.target as HTMLAnchorElement
			const href = target.getAttribute('href')
			if (href && href.startsWith('#') && href !== '#') {
				e.preventDefault()
				const element = document.querySelector(href)
				if (element) {
					const headerOffset = 100
					const elementPosition = element.getBoundingClientRect().top
					const offsetPosition = elementPosition + window.pageYOffset - headerOffset
					window.scrollTo({
						top: offsetPosition,
						behavior: 'smooth'
					})
				}
			}
		}

		const links = document.querySelectorAll('a[href^="#"]')
		links.forEach(link => {
			link.addEventListener('click', handleSmoothScroll)
		})

		return () => {
			links.forEach(link => {
				link.removeEventListener('click', handleSmoothScroll)
			})
		}
	}, [])

	return (
		<>
			<section className="position-relative overflow-hidden section-padding hero-viajes" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
				<div className="container position-relative z-2">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12 mb-lg-0 mb-5">
							<div className="pe-2" data-aos="fade-right" data-aos-duration="1000">
								<div className="d-flex align-items-center bg-linear-1 d-inline-flex rounded-pill px-2 py-1 mb-4" data-aos="zoom-in" data-aos-delay={100}>
									<span className="bg-primary fs-9 fw-bold rounded-pill px-2 py-1 text-white">Nuevo</span>
									<span className="fs-7 fw-medium text-primary mx-2">Solución Integral para Agencias</span>
									<svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
										<path d="M10.3125 5.5625L14.4375 9.5L10.3125 13.4375" stroke="#6342EC" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M14.25 9.5H3.5625" stroke="#6342EC" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
								<h1 className="ds-2 mb-4 fw-bold" data-aos="fade-up" data-aos-delay={200}>
									Transforma tu Agencia de Viajes con Tecnología de Vanguardia
								</h1>
								<p className="fs-5 mb-5 text-600" data-aos="fade-up" data-aos-delay={300}>
									Sistema completo de gestión y reservas diseñado específicamente para agencias de viajes y turismo. 
									Optimiza tus operaciones, aumenta tus ventas y ofrece una experiencia excepcional a tus clientes.
								</p>
								<div className="d-flex flex-wrap gap-3 mb-5" data-aos="fade-up" data-aos-delay={400}>
									<Link href="#paquetes" className="btn btn-gradient">
										Ver Paquetes
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
									<Link href="#contacto" className="btn btn-outline-secondary hover-up">
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
										Contactar
									</Link>
								</div>
								<div className="row mt-6" data-aos="fade-up" data-aos-delay={500}>
									<div className="col-md-4 mb-3 mb-md-0">
										<div className="d-flex align-items-center">
											<div className="icon-shape icon-lg rounded-3 bg-primary-soft me-3">
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#6D4DF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M2 17L12 22L22 17" stroke="#6D4DF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M2 12L12 17L22 12" stroke="#6D4DF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</div>
											<div>
												<h6 className="mb-0 fw-bold">100% Cloud</h6>
												<p className="fs-7 mb-0 text-500">Acceso desde cualquier lugar</p>
											</div>
										</div>
									</div>
									<div className="col-md-4 mb-3 mb-md-0">
										<div className="d-flex align-items-center">
											<div className="icon-shape icon-lg rounded-3 bg-primary-soft me-3">
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#6D4DF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</div>
											<div>
												<h6 className="mb-0 fw-bold">Soporte 24/7</h6>
												<p className="fs-7 mb-0 text-500">Asistencia permanente</p>
											</div>
										</div>
									</div>
									<div className="col-md-4">
										<div className="d-flex align-items-center">
											<div className="icon-shape icon-lg rounded-3 bg-primary-soft me-3">
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#6D4DF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M12 6V12L16 14" stroke="#6D4DF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</div>
											<div>
												<h6 className="mb-0 fw-bold">Actualizaciones</h6>
												<p className="fs-7 mb-0 text-500">Mejoras continuas</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 position-relative">
							<div className="position-relative" data-aos="fade-left" data-aos-duration="1000" data-aos-delay={200}>
								<div className="hero-image-wrapper">
									<div className="hero-gradient-bg"></div>
									<div className="floating-card card-1 position-absolute">
										<div className="card-content">
											<div className="d-flex align-items-center mb-2">
												<div className="icon-shape icon-sm rounded-circle bg-primary text-white me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none">
														<path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</div>
												<h6 className="mb-0 fw-bold">Reservas Online</h6>
											</div>
											<p className="fs-7 mb-0 text-500">Sistema de reservas en tiempo real</p>
										</div>
									</div>
									<div className="floating-card card-2 position-absolute">
										<div className="card-content">
											<div className="d-flex align-items-center mb-2">
												<div className="icon-shape icon-sm rounded-circle bg-primary text-white me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none">
														<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</div>
												<h6 className="mb-0 fw-bold">Panel Admin</h6>
											</div>
											<p className="fs-7 mb-0 text-500">Gestión completa desde un solo lugar</p>
										</div>
									</div>
									<div className="floating-card card-3 position-absolute">
										<div className="card-content">
											<div className="d-flex align-items-center mb-2">
												<div className="icon-shape icon-sm rounded-circle bg-primary text-white me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none">
														<path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</div>
												<h6 className="mb-0 fw-bold">Multi-destino</h6>
											</div>
											<p className="fs-7 mb-0 text-500">Gestiona múltiples destinos</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Background elements */}
				<div className="position-absolute top-0 start-0 w-100 h-100 z-0">
					<div className="hero-bg-gradient"></div>
				</div>
				<div className="rotate-center ellipse-rotate-success position-absolute z-1" />
				<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
			</section>
			<style jsx>{`
				.hero-viajes {
					background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 50%, #f5eeff 100%);
				}
				.hero-image-wrapper {
					position: relative;
					min-height: 500px;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.hero-gradient-bg {
					width: 100%;
					height: 100%;
					background: linear-gradient(135deg, rgba(109, 77, 242, 0.1) 0%, rgba(156, 39, 176, 0.1) 100%);
					border-radius: 30px;
					position: absolute;
					top: 0;
					left: 0;
					animation: pulse 4s ease-in-out infinite;
				}
				.floating-card {
					background: white;
					padding: 1.5rem;
					border-radius: 16px;
					box-shadow: 0 10px 40px rgba(109, 77, 242, 0.15);
					backdrop-filter: blur(10px);
					animation: float 6s ease-in-out infinite;
					z-index: 10;
				}
				.floating-card.card-1 {
					top: 10%;
					right: 10%;
					animation-delay: 0s;
				}
				.floating-card.card-2 {
					bottom: 20%;
					left: 5%;
					animation-delay: 2s;
				}
				.floating-card.card-3 {
					top: 50%;
					right: 0;
					animation-delay: 4s;
				}
				@keyframes float {
					0%, 100% {
						transform: translateY(0px);
					}
					50% {
						transform: translateY(-20px);
					}
				}
				@keyframes pulse {
					0%, 100% {
						opacity: 0.5;
						transform: scale(1);
					}
					50% {
						opacity: 0.8;
						transform: scale(1.05);
					}
				}
				.hero-bg-gradient {
					background: radial-gradient(circle at 20% 50%, rgba(109, 77, 242, 0.1) 0%, transparent 50%),
								radial-gradient(circle at 80% 80%, rgba(156, 39, 176, 0.1) 0%, transparent 50%);
				}
				@media (max-width: 992px) {
					.hero-image-wrapper {
						min-height: 400px;
						margin-top: 3rem;
					}
					.floating-card {
						padding: 1rem;
					}
				}
				@media (max-width: 576px) {
					.hero-image-wrapper {
						min-height: 300px;
					}
					.floating-card {
						padding: 0.875rem;
						font-size: 0.875rem;
					}
				}
			`}</style>
		</>
	)
}
