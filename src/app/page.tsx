import Image from "next/image";
import Navbar from "./component/Navbar";
import Balancer from "react-wrap-balancer";

// images
import databiz from "@/assets/imgae/client-databiz.svg";
import audiophile from "@/assets/imgae/client-audiophile.svg";
import meet from "@/assets/imgae/client-meet.svg";
import maker from "@/assets/imgae/client-maker.svg";

import hremoImagedesktop from "@/assets/imgae/image-hero-desktop.png";
import hremoImageMobile from "@/assets/imgae/image-hero-mobile.png";
import Card from "./Card/page";
import Benefit from "./Benifactor/page";
import NewProduct from "./component/NewProduct";
import Footer from "./Footer/page";
import Banner from "./Banner/page";


export default function Home() {
  const bannerImages = [databiz, audiophile, meet, maker];
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <Navbar />
      {/* hero */}
      <section className="mx-auto flex max-w-6xl flex-col-reverse gap-2 px-4 pb-12 transition-all md:flex-row md:gap-4">
        {/* left div */}
        <div className="flex flex-col items-center gap-6 pt-8 text-center md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
          <Balancer className="text-4xl font-semibold md:text-6xl">
            Make remote work
          </Balancer>
          <Balancer className="text-neutral-400 md:max-w-[400px]">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </Balancer>
          <button className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2 text-white transition-all hover:border-black hover:bg-black hover:bg-transparent hover:text-black/90">
            Learn more
          </button>
          <div className="flex gap-2 md:gap-6">
            {bannerImages.map((img, i) => (
              <Image
                className="h-5 w-auto"
                key={i}
                src={img}
                alt="client-image"
              />
            ))}
          </div>
        </div>

        {/* right div */}
        <section className="md:w-1/2 ">
          <Image
            className="hidden h-auto max-w-[400px] md:block"
            src={hremoImagedesktop}
            alt="hreo-image"
          />
          <Image
            className="h-auto w-full md:hidden"
            src={hremoImageMobile}
            alt="hreo-image"
          />
        </section>
      </section>
      <div className="flex justify-center items-center">
        <Card />
      </div>
      <div className="flex justify-center items-center">
        <div className="hidden lg:block">
          <Benefit />
        </div>
      </div>
      <div className="flex justify-center items-center mb-12">
        <NewProduct />
      </div>
      <Footer/>
    </div>
  );
}
