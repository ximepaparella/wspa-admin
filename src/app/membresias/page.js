import Banner from "@/components/Banner";
import bannerImage from "../../assets/images/bg-membresias.jpg";
import giftBannerImage from "../../assets/images/call-to-action/gift.jpg";
import WatterCircuits from "@/components/WatterCircuits";
import SpaDayCard from "@/components/SpaDayCard";
import GiftBanner from "@/components/GiftBanner";
import SiteLayout from "@/components/Layouts/SiteLayout";

export default function Membresias() {
  return (
    <SiteLayout>
      <Banner title="MEMBRESIAS" image={bannerImage.src} />
      <section className="container">
        <div className="lay">
          <SpaDayCard/>
          <div className="row col-12">
            <WatterCircuits />
          </div>
        </div>
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
