import Hero from "@/components/home/Hero";
import QuickAccess from "@/components/home/QuickAccess";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FeaturedCompanies from "@/components/home/FeaturedCompanies";
import BusinessSection from "@/components/home/BusinessSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickAccess />
      <Categories />
      <FeaturedProducts />
      <FeaturedCompanies />
      <BusinessSection />
    </>
  );
}
