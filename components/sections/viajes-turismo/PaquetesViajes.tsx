"use client"
import Link from "next/link"
import { useState } from "react"

export default function PaquetesViajes() {
	const [activePlan, setActivePlan] = useState('monthly')

	const handlePlanChange = (planType: string) => {
		setActivePlan(planType)
	}

	const getPrices = () => {
		if (activePlan === 'monthly') {
			return {
				start: { price: '299', type: '/ mes' },
				medium: { price: '599', type: '/ mes' },
				pro: { price: '999', type: '/ mes' }
			}
		} else {
			return {
				start: { price: '2,990', type: '/ año' },
				medium: { price: '5,990', type: '/ año' },
				pro: { price: '9,990', type: '/ año' }
			}
		}
	}

	const prices = getPrices()

	const packages = [
		{
			name: 'Start',
			description: 'Perfecto para agencias pequeñas que están comenzando',
			price: prices.start.price,
			type: prices.start.type,
			features: [
				{ text: 'Hasta 100 reservas mensuales', included: true },
				{ text: 'Panel administrativo básico', included: true },
				{ text: 'Gestión de clientes', included: true },
				{ text: 'Sistema de reservas online', included: true },
				{ text: 'Reportes básicos', included: true },
				{ text: 'Soporte por email', included: true },
				{ text: 'Integración con pasarelas de pago', included: false },
				{ text: 'Marketing automatizado', included: false },
				{ text: 'API personalizada', included: false },
				{ text: 'Soporte prioritario 24/7', included: false }
			],
			popular: false
		},
		{
			name: 'Medium',
			description: 'Ideal para agencias en crecimiento con mayor volumen',
			price: prices.medium.price,
			type: prices.medium.type,
			features: [
				{ text: 'Hasta 500 reservas mensuales', included: true },
				{ text: 'Panel administrativo avanzado', included: true },
				{ text: 'Gestión de clientes y CRM', included: true },
				{ text: 'Sistema de reservas online', included: true },
				{ text: 'Reportes avanzados y analytics', included: true },
				{ text: 'Soporte por email y chat', included: true },
				{ text: 'Integración con pasarelas de pago', included: true },
				{ text: 'Marketing automatizado básico', included: true },
				{ text: 'API personalizada', included: false },
				{ text: 'Soporte prioritario 24/7', included: false }
			],
			popular: true
		},
		{
			name: 'Pro',
			description: 'Solución completa para agencias grandes y corporativas',
			price: prices.pro.price,
			type: prices.pro.type,
			features: [
				{ text: 'Reservas ilimitadas', included: true },
				{ text: 'Panel administrativo completo', included: true },
				{ text: 'CRM avanzado y gestión de leads', included: true },
				{ text: 'Sistema de reservas multi-canal', included: true },
				{ text: 'Reportes personalizados y BI', included: true },
				{ text: 'Soporte prioritario 24/7', included: true },
				{ text: 'Integración con múltiples pasarelas', included: true },
				{ text: 'Marketing automatizado avanzado', included: true },
				{ text: 'API personalizada y webhooks', included: true },
				{ text: 'Gerente de cuenta dedicado', included: true }
			],
			popular: false
		}
	]

	return (
		<>
			<section id="paquetes" className="section-pricing-1 position-relative pb-120 overflow-hidden section-padding">
				<div className="container position-relative z-1">
					<div className="row pb-9 position-relative z-1">
						<div className="col-lg-auto me-lg-auto">
							<div className="text-start mb-lg-0 mb-5">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="Paquetes" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Nuestros Paquetes</span>
								</div>
								<h3 className="ds-3 my-3" data-aos="fade-zoom-in" data-aos-delay={200}>Planes que se Adaptan a tu Negocio</h3>
								<p className="fs-5 mb-0" data-aos="fade-zoom-in" data-aos-delay={300}>Elige el plan perfecto para tu agencia de viajes</p>
							</div>
						</div>
						<div className="col-lg-auto align-self-end">
							<div className="d-flex justify-content-lg-end">
								<ul className="list-unstyled d-flex align-items-center change-price-plan bg-white rounded-pill py-1 shadow-2">
									<li>
										<Link 
											href="#" 
											scroll={false} 
											className={`px-6 py-2 text-900 bg-transparent monthly rounded-pill text-white fs-5 fw-bold z-1 ${activePlan === 'monthly' ? 'active' : ''}`} 
											onClick={(e) => { e.preventDefault(); handlePlanChange('monthly') }} 
											data-type="monthly"
										>
											Mensual
										</Link>
									</li>
									<li>
										<Link 
											href="#" 
											scroll={false} 
											className={`yearly px-md-6 px-2 py-2 rounded-pill bg-transparent text-900 fs-5 fw-bold ${activePlan === 'yearly' ? 'active' : ''}`} 
											onClick={(e) => { e.preventDefault(); handlePlanChange('yearly') }} 
											data-type="yearly"
										>
											Anual (Ahorra 17%)
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row backdrop-filter-lg rounded-4 position-relative z-1">
						{packages.map((pkg, index) => (
							<div key={index} className={`col-lg-4 col-md-6 px-lg-0 mb-lg-0 mb-4 ${index === 1 ? 'mt-lg-0' : ''}`} data-aos="fade-up" data-aos-delay={index * 100}>
								<div className={`backdrop-filter-md h-100 p-6 position-relative border rounded-4 z-1 ${pkg.popular ? 'border-primary border-2 shadow-lg' : ''} ${index === 0 ? 'rounded-end-lg-0' : index === 2 ? 'rounded-start-lg-0' : 'rounded-start-lg-0 rounded-end-lg-0 border-start-lg-0'}`}>
									{pkg.popular && (
										<div className="position-absolute top-0 start-50 translate-middle-x">
											<span className="bg-primary text-white px-4 py-1 rounded-pill fs-8 fw-bold">Más Popular</span>
										</div>
									)}
									<div className={pkg.popular ? 'mt-4' : ''}>
										<h6 className="fw-bold mb-2">{pkg.name}</h6>
										<p className="fs-7 text-500 mb-4">{pkg.description}</p>
										<div className="d-flex align-items-baseline mb-2">
											<span className="fs-5 text-600 me-1">$</span>
											<h3 className="text-primary mb-0">{pkg.price}</h3>
											<span className="fs-5 text-600 ms-1 fw-bold align-self-end">{pkg.type}</span>
										</div>
										<p className="fs-8 text-500 mb-4">Sin tarjeta de crédito requerida</p>
										<Link 
											href="#contacto" 
											className={`btn w-100 d-flex justify-content-between my-5 ${pkg.popular ? 'btn-gradient' : 'btn-outline-secondary hover-up'}`}
										>
											Empezar Ahora
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path 
													className={pkg.popular ? "fill-white" : "fill-dark"} 
													d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" 
													fill={pkg.popular ? "white" : "#111827"} 
												/>
											</svg>
										</Link>
										<ul className="list-unstyled mb-0">
											{pkg.features.map((feature, idx) => (
												<li key={idx} className="d-flex align-items-center mb-3">
													{feature.included ? (
														<img src="/assets/imgs/pricing-1/check-primary.svg" alt="Incluido" className="flex-shrink-0" />
													) : (
														<img src="/assets/imgs/pricing-1/check-secondary.svg" alt="No incluido" className="flex-shrink-0" />
													)}
													<h6 className={`fs-6 mb-0 ms-2 ${feature.included ? '' : 'text-400'}`}>{feature.text}</h6>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
				<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
			</section>
		</>
	)
}
