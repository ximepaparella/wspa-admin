import styles from "../page.module.css";
import Banner from "@/components/Banner";
import bannerImage from '../../assets/images/bg-tratamientos-2.jpg'

export default function Tratamientos() {
  return (
    <main>
        <Banner title="TRATAMIENTOS" image={bannerImage.src} />
    </main>
  );
}