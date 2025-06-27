'use client'
import Link from 'next/link'
import { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

interface MobileMenuProps {
	isMobileMenu: boolean
	handleMobileMenu: () => void
	onNavigate?: (section: string) => void
	pathname?: string
}

export default function MobileMenu({ isMobileMenu, handleMobileMenu, onNavigate, pathname }: MobileMenuProps) {
	const [isAccordion, setIsAccordion] = useState(0)

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}

	const handleMobileMenuClick = (section: string, e: React.MouseEvent) => {
		if (onNavigate) {
			e.preventDefault()
			onNavigate(section)
			// Cerrar el menú móvil después de la navegación
			handleMobileMenu()
		}
	}

	return (
		<>
			{/* Offcanvas search */}
			<div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${isMobileMenu ? 'sidebar-visible' : ''}`}>
				<div className="mobile-header-wrapper-inner">
					<div className="mobile-header-logo">
						<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
							<img className='w-auto' style={{maxHeight: '40px', width: 'auto'}} src="/assets/imgs/template/tucs-isotipo.png" alt="Tucs Digital" />
							<span>Tucs Digital</span>
						</Link>
						<div className={`burger-icon burger-icon-white border rounded-3 ${isMobileMenu ? 'burger-close' : ''}`} onClick={handleMobileMenu}>
							<span className="burger-icon-top" />
							<span className="burger-icon-mid" />
							<span className="burger-icon-bottom" />
						</div>
					</div>
					<div className="mobile-header-content-area">
						<div className="perfect-scroll">
							<div className="mobile-menu-wrap mobile-header-border">
								<nav>
									<ul className="mobile-menu font-heading ps-0">
										<li>
											<Link 
												href="#soluciones"
												onClick={(e) => handleMobileMenuClick('soluciones', e)}
											>
												Soluciones
											</Link>
										</li>
										<li>
											<Link 
												href="#nosotros"
												onClick={(e) => handleMobileMenuClick('nosotros', e)}
											>
												¿Por qué elegir Tucs Digital?
											</Link>
										</li>
										<li>
											<Link 
												href="#preguntas-frecuentes"
												onClick={(e) => handleMobileMenuClick('preguntas-frecuentes', e)}
											>
												Preguntas Frecuentes
											</Link>
										</li>
										<li className="nav-item">
											<Link 
												className="nav-link fw-bold" 
												href="/page-pricing-01"
											>
												Precios
											</Link>
										</li>
										<li>
											<Link 
												href="#contacto"
												onClick={(e) => handleMobileMenuClick('contacto', e)}
											>
												Contacto
											</Link>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
