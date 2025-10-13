import Blog3 from "@/components/sections/Blog3";
import Cta2 from "@/components/sections/Cta2";
import Cta3 from "@/components/sections/Cta3";
import Contact1 from "@/components/sections/Contact1";
import Faqs2 from "@/components/sections/Faqs2";
import Features6 from "@/components/sections/Features6";
// import Features7 from "@/components/sections/Features7"
import Hero3 from "@/components/sections/Hero3";
import LogoCloud1 from "@/components/sections/LogoCloud1";
import Newsletter2 from "@/components/sections/Newsletter2";
// import Pricing3 from "@/components/sections/Pricing3"
import Services2 from "@/components/sections/Services2";
// import Static2 from "@/components/sections/Static2";

import Layout from "@/components/layout/Layout";
import StructuredData from "@/components/seo/StructuredData";
export default function Home3() {
  const faqData = [
    {
      question: "¿Qué servicios ofrece Tucs Digital?",
      answer: "Ofrecemos desarrollo web, aplicaciones móviles, e-commerce, marketing digital, sistemas de gestión y soluciones digitales personalizadas para empresas."
    },
    {
      question: "¿Cuánto tiempo toma desarrollar un sitio web?",
      answer: "El tiempo de desarrollo depende de la complejidad del proyecto. Un sitio web básico puede tomar 2-4 semanas, mientras que proyectos más complejos pueden requerir 2-3 meses."
    },
    {
      question: "¿Ofrecen soporte después del lanzamiento?",
      answer: "Sí, ofrecemos soporte técnico completo después del lanzamiento, incluyendo mantenimiento, actualizaciones y monitoreo 24/7."
    }
  ];

  return (
    <>
      <StructuredData type="faq" data={faqData} />
      <Layout headerStyle={3} footerStyle={2}>
        <Hero3 />
        <LogoCloud1 />
        <Services2 />
        <Cta2 />
        {/* <Static2 /> */}
        <Cta3 />
        <Features6 />
        {/* <Features7 />
				<Pricing3 /> */}
        <Faqs2 />
        {/* <Blog3 /> */}
        <Contact1 />
        <Newsletter2 />
      </Layout>
    </>
  );
}
