"use client"
import Link from "next/link"

export default function PaquetesViajes() {
	const prices = {
		start: { price: '290.000', type: 'ARS' },
		medium: { price: '450.000', type: 'ARS' },
		pro: { price: '800.000', type: 'ARS' }
	}

	const whatsappNumber = '5491123456789' // Reemplazar con el número real de WhatsApp (formato: 549 + código de país + número sin espacios ni guiones)
	
	const packages = [
		{
			name: 'Start',
			description: 'Perfecto para agencias pequeñas que están comenzando',
			price: prices.start.price,
			type: prices.start.type,
			features: [
				{ text: 'Diseño Web Personalizado', included: true },
				{ text: 'Identidad de Marca (Logo/Colores)', included: true },
				{ text: 'Panel Administrativo Intuitivo', included: true },
				{ text: 'Carga Manual de Paquetes', included: true },
				{ text: 'Gestión Total de Destinos', included: true },
				{ text: 'Actualización Inmediata', included: true },
				{ text: 'Botones de WhatsApp Flotantes', included: true },
				{ text: 'Enlace Directo a Consultas', included: true },
				{ text: 'Galería de Imágenes en Alta Calidad', included: true },
				{ text: 'Diseño Adaptable a Celulares', included: true },
				{ text: 'Sección Institucional "Quiénes Somos"', included: true }
			],
			popular: false
		},
		{
			name: 'Medium',
			description: 'Ideal para agencias en crecimiento con mayor volumen',
			price: prices.medium.price,
			type: prices.medium.type,
			features: [
				{ text: 'Todo lo anterior, más el motor de búsqueda y la capacidad de cobrar', included: true },
				{ text: 'Buscador Avanzado de Viajes', included: true },
				{ text: 'Filtros por Fecha de Salida', included: true },
				{ text: 'Filtros por Ubicación/Destino', included: true },
				{ text: 'Pasarela de Pagos Integrada', included: true },
				{ text: 'Cobros con Tarjeta de Crédito/Débito', included: true },
				{ text: 'Sistema de Reservas Online', included: true },
				{ text: 'Carrito de Compras Seguro', included: true },
				{ text: 'Procesamiento de Pagos 24hs', included: true },
				{ text: 'Cierre de Ventas Automático', included: true },
				{ text: 'Panel de Control de Transacciones', included: true },
				{ text: 'Experiencia de Usuario Mejorada', included: true }
			],
			popular: true
		},
		{
			name: 'Pro',
			description: 'Solución completa para agencias grandes y corporativas',
			price: prices.pro.price,
			type: prices.pro.type,
			features: [
				{ text: 'Todo lo anterior, más la inteligencia para responder y ahorrar tiempo', included: true },
				{ text: 'Chatbot de Respuesta Automática', included: true },
				{ text: 'Atención al Cliente 24/7', included: true },
				{ text: 'Respuestas Inmediatas a Dudas', included: true },
				{ text: 'Solución de Preguntas Frecuentes', included: true },
				{ text: 'Asistente Virtual Siempre Activo', included: true },
				{ text: 'Filtrado de Consultas Reales', included: true },
				{ text: 'Captura de Clientes Fuera de Horario', included: true },
				{ text: 'Automatización del Primer Contacto', included: true },
				{ text: 'Reducción de Tiempos de Espera', included: true },
				{ text: 'Ahorro de Tiempo Operativo', included: true },
				{ text: 'Imagen Tecnológica de Vanguardia', included: true }
			],
			popular: false
		}
	]

	const getWhatsAppLink = (planName: string) => {
		const message = encodeURIComponent(`Hola, estoy interesado en el plan ${planName} para Web de Viajes y Turismo.`)
		return `https://wa.me/${whatsappNumber}?text=${message}`
	}

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
								<h3 className="fs-1 my-3" data-aos="fade-zoom-in" data-aos-delay={200}>Planes que se Adaptan a tu Negocio</h3>
								<p className="fs-5 mb-0" data-aos="fade-zoom-in" data-aos-delay={300}>Elige el plan perfecto para tu agencia de viajes</p>
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
										{pkg.name === 'Pro' && (
											<p className="fs-8 text-500 mb-2">+ Costo de Servicio de IA mensual</p>
										)}
										<p className="fs-8 text-500 mb-4">Pago único, sin costos mensuales</p>
										<a 
											href={getWhatsAppLink(pkg.name)}
											target="_blank"
											rel="noopener noreferrer"
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
										</a>
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
