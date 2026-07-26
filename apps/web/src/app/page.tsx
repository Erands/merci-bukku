import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import QuickAccess from "@/components/home/QuickAccess";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BusinessSection from "@/components/home/BusinessSection";

export default function Accueil() {
  return (
    <Layout>
      <Hero />
      <QuickAccess />
      <Categories />
      <FeaturedProducts />
      <BusinessSection />
    </Layout>
  );
}
