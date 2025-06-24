import Link from "next/link"

interface MenuProps {
	onNavigate?: (section: string) => void
	pathname?: string
}

export default function Menu({ onNavigate, pathname }: MenuProps) {

	const handleMenuClick = (section: string, e: React.MouseEvent) => {
		if (onNavigate) {
			e.preventDefault()
			onNavigate(section)
		}
	}

	return (
		<>
			<div className="d-none d-lg-flex">
				<ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
					<li className="nav-item">
						<Link 
							className="nav-link fw-bold" 
							href="#soluciones"
							onClick={(e) => handleMenuClick('soluciones', e)}
						>
							Soluciones
						</Link>
					</li>
					<li className="nav-item">
						<Link 
							className="nav-link fw-bold" 
							href="#nosotros"
							onClick={(e) => handleMenuClick('nosotros', e)}
						>
							¿Por qué elegir Tucs Digital?
						</Link>
					</li>
					<li className="nav-item">
						<Link 
							className="nav-link fw-bold" 
							href="#preguntas-frecuentes"
							onClick={(e) => handleMenuClick('preguntas-frecuentes', e)}
						>
							Preguntas Frecuentes
						</Link>
					</li>
					<li className="nav-item">
						<Link 
							className="nav-link fw-bold" 
							href="#contacto"
							onClick={(e) => handleMenuClick('contacto', e)}
						>
							Contacto
						</Link>
					</li>
				</ul>
			</div>
		</>
	)
}
