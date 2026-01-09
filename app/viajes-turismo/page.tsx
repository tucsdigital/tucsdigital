import Layout from "@/components/layout/Layout";
import HeroViajes from "@/components/sections/viajes-turismo/HeroViajes";
import InfoViajes from "@/components/sections/viajes-turismo/InfoViajes";
import PaquetesViajes from "@/components/sections/viajes-turismo/PaquetesViajes";
import PanelAdminViajes from "@/components/sections/viajes-turismo/PanelAdminViajes";
import BeneficiosViajes from "@/components/sections/viajes-turismo/BeneficiosViajes";
import Contact1 from "@/components/sections/Contact1";

export default function ViajesTurismoPage() {
  return (
    <Layout headerStyle={3} footerStyle={2}>
      <HeroViajes />
      <InfoViajes />
      <PaquetesViajes />
      <PanelAdminViajes />
      <BeneficiosViajes />
      <Contact1 />
    </Layout>
  );
}
