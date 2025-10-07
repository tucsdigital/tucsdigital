"use client";
export default function Loading() {
	return (
		<section className="section-padding">
			<div className="container">
				{/* Header / breadcrumb skeleton */}
				<div className="mb-6">
					<div className="skeleton skeleton-breadcrumb mb-3" />
					<div className="skeleton skeleton-page-title" />
				</div>

				<div className="row g-4 g-lg-5">
					{/* Left content */}
					<div className="col-lg-8 order-2 order-lg-1">
						{/* Hero image 16:9 */}
						<div className="skeleton ratio-16x9 rounded-3 mb-4" />

						{/* Main title and paragraph */}
						<div className="skeleton skeleton-section-title mb-3" />
						<div className="skeleton skeleton-text mb-2" />
						<div className="skeleton skeleton-text mb-2" />
						<div className="skeleton skeleton-text w-75 mb-4" />

						{/* Bullet grid like puntos_clave */}
						<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
							{Array.from({ length: 6 }).map((_, i) => (
								<div className="col" key={i}>
									<div className="d-flex align-items-center">
										<div className="skeleton circle-28 me-2" />
										<div className="skeleton skeleton-text" />
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Sidebar */}
					<div className="col-lg-4 order-1 order-lg-2">
						<div className="card p-4 rounded-4 border-0 shadow-sm mb-4">
							<div className="skeleton skeleton-subtitle mb-3" />
							{Array.from({ length: 5 }).map((_, i) => (
								<div className="skeleton skeleton-chip mb-2" key={`chip-${i}`} />
							))}
						</div>
						<div className="card p-4 rounded-4 border-0 shadow-sm">
							<div className="skeleton skeleton-subtitle mb-3" />
							{Array.from({ length: 3 }).map((_, i) => (
								<div className="skeleton skeleton-doc mb-2" key={`doc-${i}`} />
							))}
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.skeleton { position: relative; overflow: hidden; background: #f2f3f5; border-radius: 8px; }
				.skeleton::after { content: ""; position: absolute; inset: 0; transform: translateX(-100%); background: linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent); animation: shimmer 1.25s infinite; }
				.ratio-16x9 { width: 100%; padding-top: 56.25%; }
				.circle-28 { width: 28px; height: 28px; border-radius: 50%; }
				.skeleton-breadcrumb { height: 16px; width: 140px; border-radius: 4px; }
				.skeleton-page-title { height: 40px; width: min(680px, 90%); }
				.skeleton-section-title { height: 26px; width: 70%; }
				.skeleton-subtitle { height: 20px; width: 60%; }
				.skeleton-text { height: 14px; width: 100%; border-radius: 6px; }
				.skeleton-chip { height: 44px; width: 100%; border-radius: 12px; }
				.skeleton-doc { height: 56px; width: 100%; border-radius: 12px; }
				.w-75 { width: 75% !important; }
				@keyframes shimmer { 100% { transform: translateX(100%); } }

				/* Responsive tweaks */
				@media (max-width: 991.98px) {
					.skeleton-page-title { height: 34px; }
					.skeleton-chip { height: 40px; }
				}
				@media (max-width: 575.98px) {
					.skeleton-page-title { width: 100%; }
				}
			`}</style>
		</section>
	)
}


