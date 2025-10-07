"use client"
import Link from "next/link"
import { contactConfig } from "@/config/contact"

export default function Cta3() {
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
									<a href="https://wa.me/5491144713445" target="_blank" rel="noopener noreferrer" className="wsp-btn">
										<svg className="wsp-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M27.2 4.8C24.4 2 20.8 0.5 17 0.5C8.9 0.5 2.3 7.1 2.3 15.2C2.3 17.8 3 20.2 4.3 22.3L2.1 29.7L9.7 27.6C11.7 28.8 14.2 29.5 16.9 29.5C25 29.5 31.6 22.9 31.6 14.8C31.5 11 30 7.4 27.2 4.8Z" fill="#25D366"/>
											<path d="M12.8 9.6C12.5 9.1 12 9 11.6 9C11.3 9 11 9.1 10.7 9.3C10.1 9.8 8.9 10.9 8.9 13.1C8.9 15.3 10.5 17.6 10.7 17.9C10.9 18.2 13.8 22.6 18.3 24.2C19.1 24.5 19.8 24.6 20.4 24.6C21.7 24.6 22.6 24 23 23.6C23.5 23.1 23.7 22.5 23.8 22.1C23.9 21.7 23.9 21.4 23.8 21.2C23.7 21 23.4 20.9 23 20.7C22.6 20.5 20.9 19.7 20.5 19.6C20.1 19.5 19.8 19.6 19.6 19.9C19.4 20.2 18.9 20.9 18.7 21.1C18.5 21.3 18.3 21.3 18 21.2C17.7 21.1 16.6 20.7 15.4 19.7C14.4 18.9 13.7 17.9 13.5 17.6C13.3 17.3 13.4 17.1 13.5 16.9C13.6 16.7 13.8 16.4 13.9 16.2C14.1 15.9 14.1 15.6 14 15.3C13.9 15.1 13.2 13.3 13 12.8C12.9 12.3 12.6 11.9 12.4 11.7C12.2 11.5 12 11.5 11.8 11.5C11.6 11.5 11.3 11.5 11.1 11.7Z" fill="white"/>
										</svg>
										<span className="ms-2 text-white">
											<span className="wsp-label d-block">WhatsApp</span>
											<span className="wsp-number d-block">+54 9 11 4471 3445</span>
										</span>
									</a>
									<style jsx>{`
										.wsp-btn { display: inline-flex; align-items: center; margin-top: 2rem; margin-bottom: 2rem; color: #fff; text-decoration: none; gap: .5rem; }
										.wsp-icon { width: 26px; height: 26px; flex: 0 0 auto; }
										.wsp-label { font-size: 1rem; opacity: 0.9; }
										.wsp-number { font-weight: 700; font-size: clamp(1.125rem, 2.5vw, 1.75rem); }
										@media (min-width: 768px) { .wsp-icon { width: 28px; height: 28px; } .wsp-label { font-size: 1.125rem; } }
									`}</style>
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
