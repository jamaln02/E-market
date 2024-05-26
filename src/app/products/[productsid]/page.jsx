import ProductPage from "./productComponent/ProductPage";

export const metadata = {
  title: "Product Details",
  description: "know all the details about your product before purchasing it",
};

const Page = () => {
  return (
    <section className="container mx-auto p-3 md:p-8 lg:p-12">
      <ProductPage />
    </section>
  );
};

export default Page;
