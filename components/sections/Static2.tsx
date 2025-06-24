'use client'
import CountUp from 'react-countup'

export default function Static2() {
	return (
		<>
			<section className="section-static-1 position-relative fix z-0 section-padding">
				<div className="container">
					<div className="inner">
						<div className="row justify-content-between">
							<div className="col-xl-3 col-lg-4 col-sm-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto">
										<h6>Crecimiento <br /> constante</h6>
										<span className="h1 count fw-black text-primary my-0">+<span className="odometer" /><CountUp end={24} enableScrollSpy={true} /><span>k</span></span>
										<p className="fs-5">Nuevos clientes confían en nuestras soluciones</p>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto">
										<h6>Proyectos <br /> exitosos</h6>
										<span className="h1 count fw-black text-primary my-0">+<span className="odometer" /><CountUp end={1024} enableScrollSpy={true} /></span>
										<p className="fs-5">Soluciones digitales implementadas</p>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto">
										<h6>Equipo <br /> especializado</h6>
										<span className="h1 count fw-black text-primary my-0">+<span className="odometer" /><CountUp end={865} enableScrollSpy={true} /></span>
										<p className="fs-5">Expertos en tecnología y desarrollos</p>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto">
										<h6>Mayor <br /> presencia online</h6>
										<span className="h1 count fw-black text-primary my-0">+<span className="odometer" /><CountUp end={168} enableScrollSpy={true} /><span>k</span></span>
										<p className="fs-5">Casos de éxito usando nuestras plataformas</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
