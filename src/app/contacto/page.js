import styles from "../page.module.css";
import Banner from "@/components/Banner";
import bannerImage from '../../assets/images/bg-membresias.jpg'

export default function Contacto() {
  return (
    <main>
        <Banner title="CONTACTO" image={bannerImage.src} />
    </main>
  );
}