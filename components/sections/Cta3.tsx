"use client"
import Link from "next/link"
import { contactConfig } from "@/config/contact"

export default function Cta3() {
	const handleWhatsAppClick = () => {
		const url = `https://wa.me/${contactConfig.whatsapp.phoneNumber}?text=${encodeURIComponent(contactConfig.whatsapp.message)}`
		window.open(url, '_blank')
	}
	return (
		<>
			<section className="section-cta-3 position-relative py-150 section-padding fix">
				<div className="container">
					<div className="row">
						<div className="col-auto ms-auto">
							<div className="bg-primary rounded-4">
								<div className="p-7">
									<h3 className="text-white">
										Brindamos la <br />
										Mejor Experiencia <br />
										en Soluciones Digitales
									</h3>
									<button 
										onClick={handleWhatsAppClick}
										className="d-flex align-items-center mt-8 mb-9 border-0 bg-transparent text-white p-0"
										style={{ cursor: 'pointer' }}
									>
										<img src="/assets/imgs/cta-3/icon-contact.svg" alt="Tu Marca" />
										<span className="ms-3">
											<span className="text-white mb-0 fs-4">Contáctanos</span>
											<span className="text-white fs-4 d-block">+54 9 11 4471 3445</span>
										</span>
									</button>
									{/* <Link href="#" className="fw-bold btn text-start bg-white-keep d-flex align-items-center justify-content-between text-primary hover-up w-100">
										<span>Obtén 15 Días de Prueba Gratis</span>
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
											<path className="fill-primary" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
										</svg>
									</Link> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
