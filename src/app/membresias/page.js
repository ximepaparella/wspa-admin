import styles from "../page.module.css";
import Banner from "@/components/Banner";
import bannerImage from '../../assets/images/bg-membresias.jpg'

export default function Membresias() {
  return (
    <main>
        <Banner title="MEMBRESIAS" image={bannerImage.src} />
    </main>
  );
}