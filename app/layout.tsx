import "/public/assets/css/vendors/bootstrap.min.css"
import "/public/assets/css/vendors/swiper-bundle.min.css"
import "/public/assets/css/vendors/aos.css"
import "/public/assets/css/vendors/odometer.css"
import "/public/assets/css/vendors/carouselTicker.css"
import "/public/assets/css/vendors/magnific-popup.css"
import "/public/assets/fonts/bootstrap-icons/bootstrap-icons.min.css"
import "/public/assets/fonts/boxicons/boxicons.min.css"
import "/public/assets/fonts/satoshi/satoshi.css"
import "/public/assets/css/main.css"

import "@/node_modules/react-modal-video/css/modal-video.css"

import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Tucs Digital - Soluciones Digitales Profesionales | Desarrollo Web y Aplicaciones",
    description: "Tucs Digital es tu partner tecnológico especializado en desarrollo web, aplicaciones móviles, e-commerce y soluciones digitales personalizadas. Transformamos ideas en realidades digitales con tecnología de vanguardia y soporte experto.",
    keywords: "desarrollo web, aplicaciones móviles, e-commerce, soluciones digitales, diseño web, programación, Tucs Digital, tecnología, software, consultoría digital",
    authors: [{ name: "Tucs Digital" }],
    creator: "Tucs Digital",
    publisher: "Tucs Digital",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://tucsdigital.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: "Tucs Digital - Soluciones Digitales Profesionales",
        description: "Especialistas en desarrollo web, aplicaciones móviles y soluciones digitales personalizadas. Transformamos tu negocio con tecnología de vanguardia.",
        url: 'https://tucsdigital.com',
        siteName: 'Tucs Digital',
        images: [
            {
                url: '/assets/imgs/template/tucs-isotipo.png',
                width: 1200,
                height: 630,
                alt: 'Tucs Digital - Soluciones Digitales',
            },
        ],
        locale: 'es_AR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Tucs Digital - Soluciones Digitales Profesionales",
        description: "Especialistas en desarrollo web, aplicaciones móviles y soluciones digitales personalizadas.",
        images: ['/assets/imgs/template/tucs-isotipo.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'tu-codigo-de-verificacion-google',
        yandex: 'tu-codigo-de-verificacion-yandex',
        yahoo: 'tu-codigo-de-verificacion-yahoo',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es">
            <head>
                <link rel="icon" href="/assets/imgs/template/tucs-isotipo.png" />
                <link rel="apple-touch-icon" href="/assets/imgs/template/tucs-isotipo.png" />
                <meta name="theme-color" content="#6D4DF2" />
                <meta name="msapplication-TileColor" content="#6D4DF2" />
            </head>
            <body>{children}</body>
        </html>
    )
}
