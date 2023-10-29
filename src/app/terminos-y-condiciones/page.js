import styles from "../page.module.css";
import Banner from "@/components/Banner";
import bannerImage from '../../assets/images/bg-membresias.jpg'

export default function Terms() {
  return (
    <main>
        <Banner title="TÉRMINOS Y CONDICIONES" image={bannerImage.src} />
    </main>
  );
}