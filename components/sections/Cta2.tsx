'use client'
import Link from "next/link"
import { useState } from 'react'
import CountUp from 'react-countup'
import ModalVideo from 'react-modal-video'
export default function Cta2() {

	const [isOpen, setOpen] = useState(false)

	return (
		<>
			<section id="nosotros" className="section-cta-2 bg-3 position-relative section-padding fix">
				<div className="container">
					<div className="text-center mb-8">
						<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
							<img src="/assets/imgs/features-1/dots.png" alt="Tu Marca" />
							<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">¿Por qué elegir Tu Marca?</span>
						</div>
						<h3 className="ds-3 my-3 fw-regular">Brindamos <span className=" fw-bold">soluciones digitales</span> para organizaciones de todos los tamaños</h3>
					</div>
					<div className="row">
						<div className="col-lg-5 pe-lg-0">
							<div className="bg-linear-1 text-center rounded-4 position-relative">
								<img className="rounded-4 border border-2 border-white mb-10 mt-5" src="/assets/imgs/cta-2/soluciones.jpg" alt="Tu Marca" style={{maxWidth: '400px', width: '100%', height: 'auto'}} />
								<div className="position-absolute bottom-0 left-0 mb-3 w-100">
									<Link href="#" onClick={() => setOpen(true)} scroll={false} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter px-3 py-2 popup-video hover-up me-3 shadow-1">
										<span className="backdrop-filter me-2 icon-shape icon-md rounded-circle">
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<path className="stroke-dark" d="M3.5 2.5C3.5 2.22386 3.72386 2 4 2H6C6.27614 2 6.5 2.22386 6.5 2.5V3.5C6.5 3.77614 6.27614 4 6 4H5.5C5.22386 4 5 4.22386 5 4.5V5.5C5 5.77614 5.22386 6 5.5 6H6C8.20914 6 10 7.79086 10 10V10.5C10 10.7761 10.2239 11 10.5 11H11.5C11.7761 11 12 10.7761 12 10.5V8C12 4.68629 9.31371 2 6 2H4C3.72386 2 3.5 2.22386 3.5 2.5Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
											</svg>
										</span>
										<span className="fw-bold fs-7 text-900">
											Contactanos
										</span>
									</Link>
									<ModalVideo channel='youtube' isOpen={isOpen} videoId="gXFATcwrO-U" onClose={() => setOpen(false)} />
								</div>
								<div className="position-absolute top-0 end-0">
									<img className="flickering" src="/assets/imgs/cta-2/star-2.png" alt="Tu Marca" />
								</div>
								<div className="position-absolute bottom-0 start-0">
									<img className="alltuchtopdown" src="/assets/imgs/cta-2/star-1.png" alt="Tu Marca" />
								</div>
							</div>
						</div>
						<div className="col-lg-6 offset-lg-1 ps-lg-0 pe-lg-5 mt-lg-0 mt-6">
							<h5 className="ds-5">Donde tus proyectos digitales se hacen realidad</h5>
							<p className="fs-5 text-500">Ofrecemos a tu equipo soluciones innovadoras, soporte personalizado y resultados excepcionales.</p>
							<div className="d-md-flex align-items-center mt-4 mb-5">
								<ul className="list-unstyled phase-items mb-0">
									<li className="d-flex align-items-center mt-3">
										<img src="/assets/imgs/cta-2/check.svg" alt="Tu Marca" />
										<span className="ms-2 text-900 fw-medium fs-6">Especialistas en consultoría digital</span>
									</li>
									<li className="d-flex align-items-center mt-3">
										<img src="/assets/imgs/cta-2/check.svg" alt="Tu Marca" />
										<span className="ms-2 text-900 fw-medium fs-6">Ahorra tiempo y dinero</span>
									</li>
								</ul>
								<ul className="list-unstyled phase-items ms-md-5 mb-0">
									<li className="d-flex align-items-center mt-3">
										<img src="/assets/imgs/cta-2/check.svg" alt="Tu Marca" />
										<span className="ms-2 text-900 fw-medium fs-6">Enfoques innovadores</span>
									</li>
									<li className="d-flex align-items-center mt-3">
										<img src="/assets/imgs/cta-2/check.svg" alt="Tu Marca" />
										<span className="ms-2 text-900 fw-medium fs-6">Satisfacción garantizada</span>
									</li>
								</ul>
							</div>
							<div className="row position-relative mt-5 mt-md-0">
								{/* <div className="col-md-6 d-flex align-items-center">
									<div className="rounded-circle">
										<img className="rounded-circle border border-5 border-primary-light" src=" assets/imgs/cta-2/avatar-1.png" alt="Tu Marca" />
									</div>
									<div className="ms-3">
										<img className="filter-invert" src="/assets/imgs/cta-2/name-ad.svg" alt="Tu Marca" />
										<h6 className="mt-1">Lautaro Damian <span className="text-500 fs-6">, CEO</span></h6>
									</div>
								</div> */}
								<div className="col-md-6 d-flex align-items-center">
									<span className="line-verticarl border-start h-50 pe-8 position-absolute top-50 start-50 translate-middle d-none d-md-block" />
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<h2 className="count ds-2 fw-black text-primary">+<span className="odometer" />
												<CountUp end={3} enableScrollSpy={true} />
											</h2>
										</div>
									</div>
									<p className="ms-3 fs-5">Años de experiencia</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
