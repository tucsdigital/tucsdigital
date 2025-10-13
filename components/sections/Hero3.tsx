'use client'
import Marquee from "react-fast-marquee";
import Link from "next/link"

export default function Hero3() {
	return (
		<>
			<section className="position-relative fix py-4 py-md-6 py-lg-8 py-xl-10">
				<div className="container">
					<div className="row align-items-center position-relative">
						<div className="col-lg-7 position-relative z-1 mb-lg-0 mb-3 mb-md-5">
							<div className="text-start mb-lg-0 mb-3 mb-md-5">
								<div className="border-linear-1 rounded-pill d-inline-block mb-3">
									<div className="text-primary bg-white px-4 py-2 rounded-pill fw-medium position-relative z-2">🚀 Soluciones web a medida</div>
								</div>
								
								{/* Título optimizado para responsividad */}
								<h1 className="hero-title mb-3 mb-md-4">
									<span className="d-block">Impulsa tu</span>
									<span className="d-block">negocio con</span>
									<span className="d-block">soluciones web</span>
									<span className="d-block text-primary">a medida</span>
								</h1>
								
								{/* Botón y estrella organizados horizontalmente */}
								<div className="hero-actions d-flex align-items-center justify-content-between mt-3 mt-md-4">
									<Link href="#" className="btn btn-gradient btn-lg d-inline-flex align-items-center">
										Comienza ahora
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none">
											<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
									
									{/* Estrella giratoria solo en móvil */}
									<div className="d-block d-lg-none">
										<img className="mobile-star" src="/assets/imgs/hero-3/star-rotate.png" alt="Decorativo" />
									</div>
								</div>
							</div>
						</div>
						
						{/* Imágenes reorganizadas para mejor responsividad */}
						<div className="col-lg-5 position-xl-absolute mb-lg-10 top-50 end-0 translate-middle-lg-y z-0 d-none d-lg-block">
							<div className="row g-3">
								<div className="col-6 align-self-end">
									<div className="border-5 border-white border rounded-4">
										<img className="rounded-4 w-100" src="/assets/imgs/hero-3/img3.jpg" alt="Proyecto 1" />
									</div>
								</div>
								<div className="col-6 align-self-end">
									<div className="border-5 border-white border rounded-4 mb-4">
										<img className="rounded-4 w-100" src="/assets/imgs/hero-3/img1.jpg" alt="Proyecto 2" />
									</div>
									<div className="border-5 border-white border rounded-4">
										<img className="rounded-4 w-100" src="/assets/imgs/hero-3/img2.jpg" alt="Proyecto 3" />
									</div>
								</div>
							</div>
							<div className="position-absolute top-50 start-50 translate-middle pb-10 pe-10">
								<img className="rotateme" src="/assets/imgs/hero-3/star-rotate.png" alt="Elemento decorativo" />
							</div>
							<div className="position-absolute top-50 start-50 translate-middle">
								<div className="ellipse-primary" />
							</div>
						</div>
					</div>
				</div>
				
				{/* Estilos CSS personalizados para mejor responsividad */}
				<style jsx>{`
					.hero-title {
						font-size: clamp(2rem, 8vw, 4rem);
						font-weight: 700;
						line-height: 1.1;
						margin-bottom: 1rem;
					}
					
					.hero-actions {
						gap: 1rem;
					}

					.mobile-star {
						width: 50px;
						height: 50px;
						animation: spin 12s linear infinite;
						opacity: 0.7;
					}

					@keyframes spin {
						from { transform: rotate(0deg); }
						to { transform: rotate(360deg); }
					}

					/* Responsive padding personalizado para casos específicos */
					@media (max-width: 575.98px) {
						.py-4 {
							padding-top: 1.5rem !important;
							padding-bottom: 1rem !important;
						}
					}
					
					@media (min-width: 576px) and (max-width: 767.98px) {
						.py-4 {
							padding-top: 2rem !important;
							padding-bottom: 1.5rem !important;
						}
					}
					
					@media (min-width: 768px) and (max-width: 991.98px) {
						.py-md-6 {
							padding-top: 4rem !important;
							padding-bottom: 4rem !important;
						}
					}
					
					@media (min-width: 992px) and (max-width: 1199.98px) {
						.py-lg-8 {
							padding-top: 5rem !important;
							padding-bottom: 5rem !important;
						}
					}
					
					@media (min-width: 1200px) {
						.py-xl-10 {
							padding-top: 7.5rem !important;
							padding-bottom: 7.5rem !important;
						}
					}
					
					@media (max-width: 768px) {
						.hero-title {
							font-size: clamp(1.75rem, 6vw, 2.5rem);
							line-height: 1.2;
							margin-bottom: 0.5rem !important;
						}
						
						.hero-title span {
							margin-bottom: 0.1rem;
						}
						
						.hero-actions {
							margin-top: 0.75rem !important;
							gap: 0.5rem;
						}
						
						.btn-lg {
							padding: 0.75rem 1.5rem;
							font-size: 1rem;
						}
						
						.mobile-star {
							width: 70px;
							height: 70px;
						}
						
						/* Reducir márgenes en elementos específicos */
						.mb-3 {
							margin-bottom: 0.75rem !important;
						}
						
						.mt-3 {
							margin-top: 0.75rem !important;
						}
					}
					
					@media (min-width: 769px) and (max-width: 1024px) {
						.hero-title {
							font-size: clamp(2.5rem, 5vw, 3.5rem);
						}
					}
					
					@media (min-width: 1025px) {
						.hero-title {
							font-size: clamp(3rem, 4vw, 4rem);
						}
					}
				`}</style>
			</section>
		</>
	)
}