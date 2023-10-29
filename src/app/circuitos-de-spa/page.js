import styles from "../page.module.css";
import Banner from "@/components/Banner";
import bannerImage from '../../assets/images/bg-circuitos.jpg'

export default function CircuitosDeSpa() {
  return (
    <main>
        <Banner title="CIRCUITOS DE SPA" image={bannerImage.src} />
    </main>
  );
}