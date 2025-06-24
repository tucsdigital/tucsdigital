import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import MobileMenu from '../MobileMenu'
import Search from '../Search'
import OffCanvas from '../OffCanvas'
import ThemeSwitch from '@/components/elements/ThemeSwitch'
import Menu from '../Menu'

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, isOffCanvas, handleOffCanvas }: any) {
	const router = useRouter()
	const pathname = usePathname()

	// Función para manejar la navegación dinámica
	const handleNavigation = (section: string) => {
		if (pathname === '/') {
			// Si estamos en la página principal, usar scroll suave a la sección
			const element = document.getElementById(section)
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' })
			}
		} else {
			// Si estamos en otra página, navegar a la principal y luego a la sección
			router.push(`/#${section}`)
		}
	}

	// Función para el botón de contacto
	const handleContactClick = () => {
		if (pathname === '/') {
			// Si estamos en la página principal, scroll a contacto
			const element = document.getElementById('contacto')
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' })
			}
		} else {
			// Si estamos en otra página, ir a la página de contacto
			router.push('/contact')
		}
	}

	return (
		<>
			<header>
				<nav className={`navbar navbar-expand-lg navbar-light w-100 z-999 ${scroll ? 'navbar-stick' : ''}`} style={{ position: `${scroll? "fixed" : "relative"}`, top: `${scroll? "0" : "auto"}`, bottom: `${scroll? "auto" : "0"}` }}>
					<div className="container-fluid px-md-8 px-2">
						<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
							<img className='w-auto' style={{maxHeight: '40px', width: 'auto'}} src="/assets/imgs/template/tucs-isotipo.png" alt="Tucs Digital" />
							<span>Tucs Digital</span>
						</Link>
						<Menu onNavigate={handleNavigation} pathname={pathname} />
						<div className="d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
							<Link href="javascript:void(0)" data-bs-toggle="offcanvas" data-bs-target=".offcanvasTop" onClick={handleSearch} className='cursor-pointer'>
								<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
									<path className="stroke-dark" d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</Link>
							<ThemeSwitch />
							<button onClick={handleContactClick} className="btn btn-gradient d-none d-md-block">
								Consulta Gratuita
							</button>
							<div className="burger-icon burger-icon-white border rounded-3" onClick={handleMobileMenu}>
								<span className="burger-icon-top" />
								<span className="burger-icon-mid" />
								<span className="burger-icon-bottom" />
							</div>
						</div>
					</div>
				</nav>
				
				<OffCanvas handleOffCanvas={handleOffCanvas} isOffCanvas={isOffCanvas} />
				<Search isSearch={isSearch} handleSearch={handleSearch} />
				<MobileMenu handleMobileMenu={handleMobileMenu} isMobileMenu={isMobileMenu} onNavigate={handleNavigation} pathname={pathname} />
			</header>

		</>
	)
}
