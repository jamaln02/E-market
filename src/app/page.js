import HomeBody from "../component/Home/HomeBody";
import HomeSlider from "../component/Home/HomeSlider";

export default function Home() {
  return (
    <main className="">
      <section className="z-0">
        <HomeSlider />
        <HomeBody />
      </section>
    </main>
  );
}
