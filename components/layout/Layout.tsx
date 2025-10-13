'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import WhatsAppFloat from '../elements/WhatsAppFloat'
import { contactConfig } from '../../config/contact'
import Breadcrumb from './Breadcrumb'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Footer3 from './footer/Footer3'
import Footer4 from './footer/Footer4'
import Header1 from "./header/Header1"
import Header2 from './header/Header2'
import Header3 from './header/Header3'
import Header4 from './header/Header4'
import Header5 from './header/Header5'

interface LayoutProps {
	headerStyle?: Number
	footerStyle?: Number
	children?: React.ReactNode
	breadcrumbTitle?: string
}


export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }: LayoutProps) {
	const [scroll, setScroll] = useState<boolean>(false)
	// Mobile Menu
	const [isMobileMenu, setMobileMenu] = useState<boolean>(false)
	const handleMobileMenu = (): void => {
		setMobileMenu(!isMobileMenu)
		!isMobileMenu ? document.body.classList.add("mobile-menu-active") : document.body.classList.remove("mobile-menu-active")
	}

	// Search
	const [isSearch, setSearch] = useState<boolean>(false)
	const handleSearch = (): void => setSearch(!isSearch)

	// OffCanvas
	const [isOffCanvas, setOffCanvas] = useState<boolean>(false)
	const handleOffCanvas = (): void => setOffCanvas(!isOffCanvas)

	useEffect(() => {
		const WOW: any = require('wowjs');
		(window as any).wow = new WOW.WOW({
			live: false
		});

		// Initialize WOW.js
		(window as any).wow.init()

		AOS.init()

		const handleScroll = (): void => {
			const scrollCheck: boolean = window.scrollY > 80
			if (scrollCheck !== scroll) {
				setScroll(scrollCheck)
				// Agregar/quitar clase CSS al body cuando el navbar está fijo
				if (scrollCheck) {
					document.body.classList.add('navbar-sticky')
				} else {
					document.body.classList.remove('navbar-sticky')
				}
			}
		}

		document.addEventListener("scroll", handleScroll)

		return () => {
			document.removeEventListener("scroll", handleScroll)
			// Limpiar la clase cuando el componente se desmonte
			document.body.classList.remove('navbar-sticky')
		}
	}, [scroll])
	return (
		<><div id="top" />
			<style jsx global>{`
				/* Transición suave para el body cuando el navbar se vuelve sticky */
				body {
					transition: padding-top 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
				}
				
				body.navbar-sticky {
					padding-top: 80px !important;
				}
				
				@media (max-width: 992px) {
					body.navbar-sticky {
						padding-top: 70px !important;
					}
				}
				
				@media (max-width: 576px) {
					body.navbar-sticky {
						padding-top: 65px !important;
					}
				}
				
				/* Mejoras para el navbar sticky */
				.navbar-stick {
					box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08) !important;
					border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
				}
				
				/* Animación de entrada más suave */
				@keyframes slideDown {
					from {
						transform: translateY(-100%);
						opacity: 0;
					}
					to {
						transform: translateY(0);
						opacity: 1;
					}
				}
				
				.navbar-stick {
					animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
				}
				
				/* Mejora para el backdrop blur */
				.navbar-stick::before {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					background: rgba(255, 255, 255, 0.85);
					backdrop-filter: blur(20px);
					-webkit-backdrop-filter: blur(20px);
					z-index: -1;
					transition: all 0.3s ease;
				}
				
				/* Transición suave para el logo */
				.navbar-brand {
					transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
				}
				
				/* Transición para los elementos del navbar */
				.navbar-nav .nav-link {
					transition: all 0.3s ease !important;
				}
				
				/* Efecto hover mejorado */
				.navbar-nav .nav-link:hover {
					transform: translateY(-1px) !important;
				}
				
				/* Mejoras adicionales para el navbar */
				.navbar {
					will-change: transform, background-color, box-shadow;
				}
				
				/* Transición suave para el menú móvil */
				.mobile-header-wrapper-style {
					transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
				}
				
				/* Mejora para el botón hamburguesa */
				.burger-icon {
					transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
				}
				
				.burger-icon:hover {
					transform: scale(1.05) !important;
				}
				
				/* Transición para el tema switch */
				.dark-light-switcher {
					transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
				}
				
				/* Mejora para el botón de búsqueda */
				.cursor-pointer {
					transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
				}
				
				.cursor-pointer:hover {
					transform: scale(1.1) !important;
				}
			`}</style>
			<Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />

			<main>
				{breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

				{children}
			</main>

			<Footer2 />

			<BackToTop target="#top" />
			<WhatsAppFloat 
				phoneNumber={contactConfig.whatsapp.phoneNumber} 
				message={contactConfig.whatsapp.message} 
			/>
		</>
	)
}
