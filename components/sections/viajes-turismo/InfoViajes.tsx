"use client"
import Link from "next/link"

export default function InfoViajes() {
	return (
		<>
			<section id="info" className="section-padding position-relative overflow-hidden">
				<div className="container position-relative z-2">
					<div className="text-center mb-8">
						<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2 mb-4" data-aos="zoom-in" data-aos-delay={100}>
							<img src="/assets/imgs/features-1/dots.png" alt="Info" />
							<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Quiénes Somos</span>
						</div>
						<h3 className="fs-1 mb-4" data-aos="fade-up" data-aos-delay={200}>
							Especialistas en <span className="fw-bold text-primary">Soluciones Tecnológicas</span> para el Turismo
						</h3>
						<p className="fs-5 text-600 mx-auto" style={{ maxWidth: '800px' }} data-aos="fade-up" data-aos-delay={300}>
							Somos un equipo de desarrolladores y diseñadores apasionados por crear herramientas que transforman 
							la forma en que las agencias de viajes gestionan sus operaciones y se conectan con sus clientes.
						</p>
					</div>

					<div className="row mt-8">
						<div className="col-lg-6 mb-5 mb-lg-0">
							<div className="h-100 p-5 rounded-4 bg-primary-soft position-relative overflow-hidden" data-aos="fade-right" data-aos-delay={200}>
								<div className="position-relative z-2">
									<div className="icon-shape icon-xxl rounded-3 bg-primary text-white mb-4 d-inline-flex">
										<svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none">
											<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</div>
									<h4 className="mb-3 fw-bold">Nuestra Misión</h4>
									<p className="fs-6 text-600 mb-4">
										Empoderar a las agencias de viajes con una página web profesional y un panel administrativo 
										autoadministrable que les permita gestionar destinos, paquetes, reservas y clientes de forma intuitiva y eficiente.
									</p>
									<ul className="list-unstyled">
										<li className="d-flex align-items-start mb-3">
											<svg className="me-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none">
												<path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#6D4DF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											<span className="fs-6 text-600">Desarrollo de software especializado en turismo</span>
										</li>
										<li className="d-flex align-items-start mb-3">
											<svg className="me-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none">
												<path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#6D4DF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											<span className="fs-6 text-600">Soporte técnico continuo y actualizaciones</span>
										</li>
										<li className="d-flex align-items-start">
											<svg className="me-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none">
												<path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#6D4DF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											<span className="fs-6 text-600">Capacitación y acompañamiento personalizado</span>
										</li>
									</ul>
								</div>
								<div className="position-absolute top-0 end-0 opacity-25">
									<svg width="200" height="200" viewBox="0 0 200 200" fill="none">
										<circle cx="100" cy="100" r="80" stroke="#6D4DF2" strokeWidth="2" strokeDasharray="5 5" />
									</svg>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="h-100 p-5 rounded-4 bg-white border border-2 position-relative overflow-hidden" data-aos="fade-left" data-aos-delay={300}>
								<div className="position-relative z-2">
									<div className="icon-shape icon-xxl rounded-3 bg-primary-soft mb-4 d-inline-flex">
										<svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none">
											<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#6D4DF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M12 6V12L16 14" stroke="#6D4DF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</div>
									<h4 className="mb-3 fw-bold">Cómo Trabajamos</h4>
									<p className="fs-6 text-600 mb-4">
										Nuestro proceso está diseñado para garantizar el éxito de tu implementación, 
										desde la configuración inicial de tu página y panel hasta la capacitación completa de tu equipo.
									</p>
									<div className="work-process">
										<div className="process-item mb-4" data-aos="fade-up" data-aos-delay={100}>
											<div className="d-flex align-items-start">
												<div className="process-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3 fw-bold">1</div>
												<div>
													<h6 className="fw-bold mb-2">Análisis y Consultoría</h6>
													<p className="fs-7 text-500 mb-0">Evaluamos tus necesidades específicas y diseñamos la solución ideal para tu agencia.</p>
												</div>
											</div>
										</div>
										<div className="process-item mb-4" data-aos="fade-up" data-aos-delay={200}>
											<div className="d-flex align-items-start">
												<div className="process-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3 fw-bold">2</div>
												<div>
													<h6 className="fw-bold mb-2">Implementación Personalizada</h6>
													<p className="fs-7 text-500 mb-0">Configuramos tu página web y panel administrativo según tus requerimientos, con diseño personalizado y funcionalidades adaptadas a tu negocio.</p>
												</div>
											</div>
										</div>
										<div className="process-item" data-aos="fade-up" data-aos-delay={300}>
											<div className="d-flex align-items-start">
												<div className="process-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3 fw-bold">3</div>
												<div>
													<h6 className="fw-bold mb-2">Capacitación y Soporte</h6>
													<p className="fs-7 text-500 mb-0">Entrenamos a tu equipo y proporcionamos soporte continuo para asegurar el éxito.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="position-absolute top-0 start-50 translate-middle-x z-0">
					<img src="/assets/imgs/service-2/bg-line.png" alt="Background" />
				</div>
			</section>
			<style jsx>{`
				.process-number {
					width: 40px;
					height: 40px;
					flex-shrink: 0;
					font-size: 18px;
				}
				.work-process {
					position: relative;
				}
				.work-process::before {
					content: '';
					position: absolute;
					left: 20px;
					top: 50px;
					bottom: 50px;
					width: 2px;
					background: linear-gradient(180deg, #6D4DF2 0%, rgba(109, 77, 242, 0.3) 100%);
				}
				.process-item:last-child .work-process::before {
					display: none;
				}
				@media (max-width: 768px) {
					.process-number {
						width: 36px;
						height: 36px;
						font-size: 16px;
					}
				}
			`}</style>
		</>
	)
}
