"use client"
import { useState } from "react"

export default function PanelAdminViajes() {
	const [activeTab, setActiveTab] = useState(0)

	const tabs = [
		{
			title: 'Dashboard Principal',
			description: 'Vista general de todas tus operaciones en un solo lugar',
			image: '/assets/imgs/viajes-turismo/dashboard.jpg',
			features: [
				'Métricas en tiempo real',
				'Gráficos interactivos de ventas',
				'Resumen de reservas del día',
				'Alertas y notificaciones importantes'
			]
		},
		{
			title: 'Gestión de Reservas',
			description: 'Administra todas tus reservas de forma eficiente',
			image: '/assets/imgs/viajes-turismo/reservas.jpg',
			features: [
				'Calendario de reservas interactivo',
				'Filtros avanzados de búsqueda',
				'Gestión de estados y confirmaciones',
				'Historial completo de transacciones'
			]
		},
		{
			title: 'Clientes y CRM',
			description: 'Gestiona tu base de clientes y mejora las relaciones',
			image: '/assets/imgs/viajes-turismo/clientes.jpg',
			features: [
				'Base de datos de clientes completa',
				'Segmentación automática',
				'Historial de interacciones',
				'Programas de fidelización'
			]
		},
		{
			title: 'Reportes y Analytics',
			description: 'Analiza el rendimiento de tu agencia con datos precisos',
			image: '/assets/imgs/viajes-turismo/reportes.jpg',
			features: [
				'Reportes personalizables',
				'Exportación a Excel y PDF',
				'Análisis de tendencias',
				'Proyecciones y forecasting'
			]
		}
	]

	return (
		<>
			<section className="section-padding position-relative overflow-hidden bg-primary-soft">
				<div className="container position-relative z-2">
					<div className="text-center mb-8">
						<div className="d-flex align-items-center justify-content-center bg-white border border-2 border-primary-soft d-inline-flex rounded-pill px-4 py-2 mb-4" data-aos="zoom-in" data-aos-delay={100}>
							<img src="/assets/imgs/features-1/dots.png" alt="Panel" />
							<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Panel Administrativo</span>
						</div>
						<h3 className="ds-3 mb-4" data-aos="fade-up" data-aos-delay={200}>
							Control Total de tu <span className="fw-bold text-primary">Agencia de Viajes</span>
						</h3>
						<p className="fs-5 text-600 mx-auto" style={{ maxWidth: '700px' }} data-aos="fade-up" data-aos-delay={300}>
							Descubre cómo nuestro panel administrativo te permite gestionar todas las operaciones 
							de tu agencia desde una interfaz intuitiva y poderosa.
						</p>
					</div>

					<div className="row mt-8">
						<div className="col-lg-4 mb-4 mb-lg-0">
							<div className="tabs-nav">
								{tabs.map((tab, index) => (
									<button
										key={index}
										onClick={() => setActiveTab(index)}
										className={`tab-button w-100 text-start p-4 mb-3 rounded-3 border-0 transition-all ${
											activeTab === index ? 'active bg-white shadow-lg' : 'bg-transparent'
										}`}
										data-aos="fade-right"
										data-aos-delay={index * 100}
									>
										<h6 className={`fw-bold mb-2 ${activeTab === index ? 'text-primary' : 'text-600'}`}>
											{tab.title}
										</h6>
										<p className="fs-7 mb-0 text-500">{tab.description}</p>
									</button>
								))}
							</div>
						</div>
						<div className="col-lg-8">
							<div className="tab-content-wrapper position-relative">
								<div className="tab-content-item" data-aos="fade-left" data-aos-delay={200}>
									<div className="bg-white rounded-4 p-4 shadow-lg position-relative overflow-hidden">
										<div className="panel-image-wrapper rounded-3 overflow-hidden mb-4">
											<div className="panel-placeholder bg-gradient-primary d-flex align-items-center justify-content-center" style={{ minHeight: '400px' }}>
												<div className="text-center text-white">
													<svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 24 24" fill="none" className="mb-3">
														<path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
														<path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
													<h5 className="text-white mb-2">{tabs[activeTab].title}</h5>
													<p className="text-white-50 mb-0">Vista previa del panel administrativo</p>
												</div>
											</div>
										</div>
										<div className="features-list">
											<h6 className="fw-bold mb-3">Características principales:</h6>
											<div className="row">
												{tabs[activeTab].features.map((feature, idx) => (
													<div key={idx} className="col-md-6 mb-3">
														<div className="d-flex align-items-center">
															<div className="icon-shape icon-sm rounded-circle bg-primary-soft me-3">
																<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none">
																	<path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#6D4DF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
																</svg>
															</div>
															<span className="fs-6 text-600">{feature}</span>
														</div>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="position-absolute top-0 start-50 translate-middle-x z-0 opacity-25">
					<img src="/assets/imgs/service-2/bg-line.png" alt="Background" />
				</div>
			</section>
			<style jsx>{`
				.tab-button {
					transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
					cursor: pointer;
				}
				.tab-button:hover {
					background: rgba(255, 255, 255, 0.5) !important;
					transform: translateX(5px);
				}
				.tab-button.active {
					border-left: 4px solid #6D4DF2 !important;
				}
				.panel-image-wrapper {
					position: relative;
					background: linear-gradient(135deg, #6D4DF2 0%, #9C27B0 100%);
				}
				.bg-gradient-primary {
					background: linear-gradient(135deg, rgba(109, 77, 242, 0.9) 0%, rgba(156, 39, 176, 0.9) 100%);
				}
				.tab-content-item {
					animation: fadeIn 0.5s ease-in-out;
				}
				@keyframes fadeIn {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				@media (max-width: 992px) {
					.tabs-nav {
						display: flex;
						overflow-x: auto;
						gap: 1rem;
						padding-bottom: 1rem;
					}
					.tab-button {
						min-width: 250px;
						margin-bottom: 0 !important;
					}
				}
			`}</style>
		</>
	)
}
