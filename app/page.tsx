import Topbar from "../src/components/layout/topbar";
import Navbar from "../src/components/layout/navbar";

import HeroSection from "../src/components/layout/home/hero-section";
import BrandStrip from "../src/components/layout/home/brand-strip";
import FeaturedCollections from "../src/components/layout/home/featured-products";
import EditorialShowcase from "../src/components/layout/home/editorial-showcase";
import NewArrivals from "../src/components/layout/home/new-arrivals";
import Footer from "../src/components/layout/footer";
import CartDrawer from "../src/components/cart/cart-drawer";

export default function Home() {
  return (
    <main>
      <Topbar />

      <Navbar />

      <HeroSection />

      <BrandStrip />

      <NewArrivals />

      <FeaturedCollections />

      <EditorialShowcase />

      <Footer />
      <CartDrawer />
    </main>
  );
}
