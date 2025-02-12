
import OrderDetailsTable from "@/components/DetailsOrder/OrderDetailsTable";
import FAQSection from "@/components/faq-accordion";
import Hero from "@/components/hero/Hero";
import PopularCategories from "@/components/PopularCategories/PopularCategories";
import { BillingDetails } from "@/components/shared/cards/orderDetails/BillingDetails";
import { ClientReviews } from "@/components/shared/clientReview/ClientReview";
import SearchBerCategories from "@/components/shared/searchBerCategories/searchBerCategories";
import AboutSection from "@/components/shared/sections/about-section";
import PopularBlogs from "@/components/shared/sections/popularBlogs/popularBlogs";

const Page = () => {
  const loggedin = false;

  return (
    <div>
      <div className="min-h-screen">
        <SearchBerCategories />

        <Hero />
        <PopularCategories loggedin={loggedin} />
        {!loggedin && (
          <AboutSection image="https://utfs.io/f/HkyicnKv4pLkKb11IfnzkrEA5LwVvWx2Fbfe7a6P94u0gcjZ" />
        )}
        {!loggedin && <FAQSection />}
        {loggedin && <PopularBlogs />}
        {loggedin && <ClientReviews />}
      </div>
    </div>
  );
};

export default Page;
