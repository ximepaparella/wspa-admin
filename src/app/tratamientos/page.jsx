import Banner from "@/components/Banner";
import bannerImage from "../../assets/images/bg-tratamientos-2.jpg";
import giftBannerImage from "../../assets/images/call-to-action/gift.jpg";
import GiftBanner from "@/components/GiftBanner";
import SiteLayout from "@/components/Layouts/SiteLayout";

export default function Tratamientos() {
  return (
    <SiteLayout>
      <Banner title="TRATAMIENTOS" image={bannerImage.src} />
      <section className="container">
        <div className="lay">Tratamientos</div>
        <GiftBanner
          title="REGALÁ RELAX, REGALA UN GIFT VOUCHER"
          image={giftBannerImage.src}
          url="http://wyndhamnordelta.giftsandvouchers.com/listado/"
          target="_blank"
          preTitle="PAQUETES PROMOCIONALES"
          buttonText="REGALÁ ONLINE"
        />
      </section>
   </SiteLayout>
  );
}
