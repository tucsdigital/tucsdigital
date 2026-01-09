'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface MobileMenuProps {
	isMobileMenu: boolean
	handleMobileMenu: () => void
	onNavigate?: (section: string) => void
	pathname?: string
}

export default function MobileMenu({ isMobileMenu, handleMobileMenu, onNavigate, pathname }: MobileMenuProps) {
	const [isVisible, setIsVisible] = useState(false)
	const [isAnimating, setIsAnimating] = useState(false)

	useEffect(() => {
		if (isMobileMenu) {
			setIsVisible(true)
			setTimeout(() => setIsAnimating(true), 10)
		} else {
			setIsAnimating(false)
			setTimeout(() => setIsVisible(false), 300)
		}
	}, [isMobileMenu])

	const handleMobileMenuClick = (section: string, e: React.MouseEvent) => {
		if (onNavigate) {
			e.preventDefault()
			onNavigate(section)
			handleMobileMenu()
		}
	}

	// Iconos SVG profesionales
	const getIcon = (type: string) => {
		const icons = {
			soluciones: (
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
				</svg>
			),
			nosotros: (
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<circle cx="12" cy="12" r="3"/>
					<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
				</svg>
			),
			preguntas: (
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<circle cx="12" cy="12" r="10"/>
					<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
					<line x1="12" y1="17" x2="12.01" y2="17"/>
				</svg>
			),
			precios: (
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<line x1="12" y1="1" x2="12" y2="23"/>
					<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
				</svg>
			),
			contacto: (
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
				</svg>
			)
		}
		return icons[type as keyof typeof icons] || icons.soluciones
	}

	const menuItems = [
		{ href: '#soluciones', label: 'Soluciones', section: 'soluciones', icon: 'soluciones' },
		{ href: '#nosotros', label: '¿Por qué elegir Tucs Digital?', section: 'nosotros', icon: 'nosotros' },
		{ href: '#preguntas-frecuentes', label: 'Preguntas Frecuentes', section: 'preguntas-frecuentes', icon: 'preguntas' },
		{ href: '/page-pricing-01', label: 'Precios', section: null, icon: 'precios' },
		{ href: '#contacto', label: 'Contacto', section: 'contacto', icon: 'contacto' }
	]

	// Función para determinar si un item está activo
	const isActiveSection = (section: string | null) => {
		if (!section) return false
		return pathname?.includes(section)
	}

	if (!isVisible) return null

	return (
		<>
			{/* Overlay de fondo */}
			<div 
				className={`mobile-overlay ${isAnimating ? 'overlay-visible' : ''}`}
				onClick={handleMobileMenu}
			/>
			
			{/* Sidebar principal */}
			<div className={`mobile-sidebar ${isAnimating ? 'sidebar-open' : ''}`}>
				{/* Header del sidebar */}
				<div className="mobile-sidebar-header">
					<button 
						className="mobile-close-btn"
						onClick={handleMobileMenu}
						aria-label="Cerrar menú"
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M18 6L6 18M6 6L18 18"/>
						</svg>
					</button>
				</div>

				{/* Contenido del menú */}
				<div className="mobile-sidebar-content">
					<nav className="mobile-nav">
						<ul className="mobile-nav-list">
							{menuItems.map((item, index) => {
								const isActive = isActiveSection(item.section)
								return (
									<li 
										key={index}
										className={`mobile-nav-item ${isActive ? 'active' : ''}`}
										style={{ 
											animationDelay: `${index * 0.1}s`,
											opacity: isAnimating ? 1 : 0,
											transform: isAnimating ? 'translateX(0)' : 'translateX(-20px)'
										}}
									>
										{item.section ? (
											<Link 
												href={item.href}
												onClick={(e) => handleMobileMenuClick(item.section!, e)}
												className="mobile-nav-link"
											>
												<div className="mobile-nav-icon-wrapper">
													<div className={`mobile-nav-icon ${isActive ? 'active' : ''}`}>
														{getIcon(item.icon)}
													</div>
												</div>
												<div className="mobile-nav-content">
													<span className="mobile-nav-text">{item.label}</span>
													{isActive && <div className="active-indicator" />}
												</div>
												<div className="mobile-nav-arrow">
													<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
														<path d="M9 18L15 12L9 6"/>
													</svg>
												</div>
											</Link>
										) : (
											<Link 
												href={item.href}
												className="mobile-nav-link"
											>
												<div className="mobile-nav-icon-wrapper">
													<div className="mobile-nav-icon">
														{getIcon(item.icon)}
													</div>
												</div>
												<div className="mobile-nav-content">
													<span className="mobile-nav-text">{item.label}</span>
												</div>
												<div className="mobile-nav-arrow">
													<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
														<path d="M9 18L15 12L9 6"/>
													</svg>
												</div>
											</Link>
										)}
									</li>
								)
							})}
						</ul>
					</nav>
				</div>

				{/* Footer del sidebar */}
				<div className="mobile-sidebar-footer">
					<div className="mobile-contact-info">
						<p className="mobile-contact-text">¿Listo para comenzar?</p>
						<Link 
							href="#contacto"
							onClick={(e) => handleMobileMenuClick('contacto', e)}
							className="mobile-cta-btn"
						>
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
								<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
							</svg>
							Consulta Gratuita
						</Link>
					</div>
				</div>
			</div>

			{/* Estilos CSS personalizados */}
			<style jsx>{`
				.mobile-overlay {
					position: fixed;
					top: 0;
					left: 0;
					width: 100vw;
					height: 100vh;
					background: rgba(0, 0, 0, 0.5);
					backdrop-filter: blur(8px);
					z-index: 1040;
					opacity: 0;
					transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
				}

				.mobile-overlay.overlay-visible {
					opacity: 1;
				}

				.mobile-sidebar {
					position: fixed;
					top: 0;
					left: 0;
					width: 100vw;
					height: 100vh;
					background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
					z-index: 1050;
					transform: translateX(-100%);
					transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
					display: flex;
					flex-direction: column;
					box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
				}

				.mobile-sidebar.sidebar-open {
					transform: translateX(0);
				}

				.mobile-sidebar-header {
					padding: 1.5rem 2rem 1rem;
					display: flex;
					justify-content: flex-end;
					align-items: center;
					border-bottom: 1px solid rgba(109, 77, 242, 0.1);
				}

				.mobile-close-btn {
					background: rgba(109, 77, 242, 0.1);
					border: none;
					border-radius: 50%;
					width: 44px;
					height: 44px;
					display: flex;
					align-items: center;
					justify-content: center;
					color: #6D4DF2;
					cursor: pointer;
					transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
				}

				.mobile-close-btn:hover {
					background: rgba(109, 77, 242, 0.2);
					transform: scale(1.1);
				}

				.mobile-sidebar-content {
					flex: 1;
					padding: 2rem 0;
					overflow-y: auto;
				}

				.mobile-nav {
					width: 100%;
				}

				.mobile-nav-list {
					list-style: none;
					padding: 0;
					margin: 0;
				}

				.mobile-nav-item {
					margin: 0;
					border-bottom: 1px solid rgba(109, 77, 242, 0.05);
					transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
				}

				.mobile-nav-item:hover {
					background: rgba(109, 77, 242, 0.02);
				}

				.mobile-nav-link {
					display: flex;
					align-items: center;
					padding: 1.5rem 2rem;
					text-decoration: none;
					color: #1a1a1a;
					font-weight: 600;
					font-size: 1.2rem;
					transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
					position: relative;
					gap: 1rem;
					min-height: 72px;
				}

				.mobile-nav-link:hover {
					color: #6D4DF2;
					background: rgba(109, 77, 242, 0.05);
				}

				/* Estado activo */
				.mobile-nav-item.active .mobile-nav-link {
					color: #6D4DF2;
					background: rgba(109, 77, 242, 0.08);
					border-left: 4px solid #6D4DF2;
				}

				.mobile-nav-icon-wrapper {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 44px;
					height: 44px;
					border-radius: 10px;
					background: rgba(109, 77, 242, 0.1);
					transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
					flex-shrink: 0;
				}

				.mobile-nav-icon {
					color: #6D4DF2;
					transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
				}

				.mobile-nav-icon.active {
					color: #6D4DF2;
				}

				.mobile-nav-link:hover .mobile-nav-icon-wrapper {
					background: rgba(109, 77, 242, 0.15);
					transform: scale(1.05);
				}

				.mobile-nav-item.active .mobile-nav-icon-wrapper {
					background: rgba(109, 77, 242, 0.2);
				}

				.mobile-nav-content {
					display: flex;
					align-items: center;
					justify-content: flex-start;
					gap: 0.75rem;
					flex: 1;
					overflow: hidden;
				}

				.mobile-nav-text {
					font-size: 1.2rem;
					font-weight: 600;
					line-height: 1.4;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					flex: 1;
				}

				.active-indicator {
					width: 8px;
					height: 8px;
					background: #6D4DF2;
					border-radius: 50%;
					animation: pulse 2s infinite;
					flex-shrink: 0;
				}

				@keyframes pulse {
					0% {
						transform: scale(1);
						opacity: 1;
					}
					50% {
						transform: scale(1.2);
						opacity: 0.7;
					}
					100% {
						transform: scale(1);
						opacity: 1;
					}
				}

				.mobile-nav-arrow {
					color: #6D4DF2;
					transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
					flex-shrink: 0;
					opacity: 0.7;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.mobile-nav-link:hover .mobile-nav-arrow {
					transform: translateX(4px);
				}

				.mobile-sidebar-footer {
					padding: 2rem;
					border-top: 1px solid rgba(109, 77, 242, 0.1);
					background: rgba(109, 77, 242, 0.02);
				}

				.mobile-contact-info {
					text-align: center;
				}

				.mobile-contact-text {
					color: #666;
					margin-bottom: 1rem;
					font-size: 0.95rem;
				}

				.mobile-cta-btn {
					display: inline-flex;
					align-items: center;
					gap: 0.5rem;
					background: linear-gradient(135deg, #6D4DF2 0%, #9C27B0 100%);
					color: white;
					padding: 1rem 2rem;
					border-radius: 50px;
					text-decoration: none;
					font-weight: 600;
					font-size: 1rem;
					transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
					box-shadow: 0 4px 15px rgba(109, 77, 242, 0.3);
				}

				.mobile-cta-btn:hover {
					transform: translateY(-2px);
					box-shadow: 0 8px 25px rgba(109, 77, 242, 0.4);
					color: white;
				}

				.mobile-cta-btn svg {
					width: 16px;
					height: 16px;
				}

				/* Animaciones de entrada */
				@keyframes slideInFromLeft {
					from {
						opacity: 0;
						transform: translateX(-30px);
					}
					to {
						opacity: 1;
						transform: translateX(0);
					}
				}

				.mobile-nav-item {
					animation: slideInFromLeft 0.4s cubic-bezier(0.4, 0, 0.2, 1) both;
				}

				/* Responsive adjustments */
				@media (max-width: 480px) {
					.mobile-sidebar-header {
						padding: 1rem 1.5rem 0.5rem;
					}

					.mobile-sidebar-content {
						padding: 1.5rem 0;
					}

					.mobile-nav-link {
						padding: 1.25rem 1.5rem;
						font-size: 1.1rem;
						gap: 0.75rem;
						min-height: 64px;
						display: flex;
						align-items: center;
					}

					.mobile-nav-icon-wrapper {
						width: 40px;
						height: 40px;
						border-radius: 8px;
					}

					.mobile-nav-content {
						gap: 0.5rem;
					}

					.mobile-nav-text {
						font-size: 1.1rem;
					}

					.mobile-sidebar-footer {
						padding: 1.5rem;
					}

					.mobile-contact-text {
						font-size: 0.9rem;
					}

					.mobile-cta-btn {
						padding: 0.875rem 1.5rem;
						font-size: 0.95rem;
					}
				}

				/* Ajustes para pantallas muy pequeñas */
				@media (max-width: 360px) {
					.mobile-nav-link {
						padding: 1rem 1.25rem;
						gap: 0.5rem;
						min-height: 56px;
						display: flex;
						align-items: center;
					}

					.mobile-nav-icon-wrapper {
						width: 36px;
						height: 36px;
						border-radius: 6px;
					}

					.mobile-nav-content {
						gap: 0.375rem;
					}

					.mobile-nav-text {
						font-size: 1.05rem;
					}
				}

				/* Mejoras para tablets */
				@media (min-width: 481px) and (max-width: 768px) {
					.mobile-nav-link {
						padding: 1.75rem 2.5rem;
						gap: 1.25rem;
						min-height: 80px;
						display: flex;
						align-items: center;
					}

					.mobile-nav-icon-wrapper {
						width: 48px;
						height: 48px;
						border-radius: 12px;
					}

					.mobile-nav-content {
						gap: 1rem;
					}

					.mobile-nav-text {
						font-size: 1.3rem;
					}
				}
			`}</style>
		</>
	)
}