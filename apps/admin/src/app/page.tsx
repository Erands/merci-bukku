import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BusinessSection from "@/components/home/BusinessSection";

export default function Accueil() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Categories />
      <FeaturedProducts />
      <BusinessSection />
    </Layout>
  );
}