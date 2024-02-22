import Banner from "@/components/Banner";
import giftBannerImage from "../../assets/images/call-to-action/gift.jpg";
import GiftBanner from "@/components/GiftBanner";
import SiteLayout from "@/components/Layouts/SiteLayout";
import TreatmentGrid from "@/components/TreatmentsGrid";

export default function Tratamientos() {
  return (
    <SiteLayout>
      <Banner title="TRATAMIENTOS" />
      <section className="container">
        <div className="lay">Tratamientos</div>

        <TreatmentGrid  />
       
        <GiftBanner
          title="REGALÁ RELAX, REGALA UN GIFT VOUCHER"
          image={giftBannerImage.src}
          url="http://wyndhamnordelta.giftsandvouchers.com/listado/"
          target="_blank"
          preTitle="PAQUETES PROMOCIONALES"
          buttonText="REGALÁ ONLINE"
        />
        {/* Render treatments here */}
      </section>
    </SiteLayout>
  );
}
