"use client";
import Marquee from "react-fast-marquee";
export default function LogoCloud1() {
	return (
		<>
			<div className="section-logo-cloud container-fluid mt-8 mt-lg-0 border-top border-bottom">
				<div className="container">
					<div className="row mask-image">
						{/* Carausel Scroll */}
						<div className="carouselTicker carouselTicker-right my-7 position-relative z-1">
							<ul className="carouselTicker__list">
								<Marquee>
									<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
										<img className="logo-cloud-img" src="/assets/imgs/logo-cloud-3/logo-1.svg" alt="infinia" />
									</li>
									<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
										<img className="logo-cloud-img" src="/assets/imgs/logo-cloud-3/logo-2.svg" alt="infinia" />
									</li>
									<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
										<img className="logo-cloud-img" src="/assets/imgs/logo-cloud-3/logo-3.svg" alt="infinia" />
									</li>
									<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
										<img className="logo-cloud-img" src="/assets/imgs/logo-cloud-3/logo-4.svg" alt="infinia" />
									</li>
									<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
										<img className="logo-cloud-img" src="/assets/imgs/logo-cloud-3/logo-5.svg" alt="infinia" />
									</li>
									<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
										<img className="logo-cloud-img" src="/assets/imgs/logo-cloud-3/logo-6.svg" alt="infinia" />
									</li>
								</Marquee>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<style jsx global>{`
				.logo-cloud-img {
					width: 80px;
					height: 40px;
					object-fit: contain;
					display: block;
					margin-left: auto;
					margin-right: auto;
				}
				.carouselTicker__item {
					display: flex;
					align-items: center;
					justify-content: center;
					min-height: 56px;
				}
			`}</style>
		</>
	)
}
