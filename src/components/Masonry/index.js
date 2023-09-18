import styles from './masonry.module.scss'
import Image from 'next/image';
import imageFaciales from '../../assets/images/tratamientos-faciales-grilla.jpg'
import imageSpa from '../../assets/images/tratamientos-spa-premium-grilla.jpg'
import imageCircuitos from '../../assets/images/circuitos-de-spa-grilla.jpg'
import imageCorporales from '../../assets/images/tratamientos-corporales-grilla.jpg'
import imageMembresias from '../../assets/images/membresias-de-spa-grilla.jpg'


const Masonry = () => (
    <div className={styles["mod-img-grid"]}>
    <div className="col-12 col-tablet-3">
        <div className={styles["com-grid-item"]}>
            <a href="tratamientos.html#tratamientos-faciales" className={styles["--description"]}>
                <h3>FACIALES</h3>
            </a>
           <Image objectFit='cover' className={styles["com-image"]} alt="image" src={imageFaciales} />
        </div>
        <div className={styles["com-grid-item"]}>
            <a href="tratamientos.html#tratamientos-premium" className={styles["--description"]}>
                <h3>TRATAMIENTOS PREMIUM</h3>
            </a>
           <Image objectFit='cover'  className={styles["com-image"]} alt="image" src={imageSpa} />
        </div>
    </div>

    <div className="col-12 col-tablet-6">
        <div className={styles["com-grid-item"]}>
            <a href="circuitos-de-spa.html" className={styles["--description"]}>
                <h3>CIRCUITOS DE SPA</h3>
            </a>
           <Image objectFit='cover'  className={styles["com-image"]} alt="image" src={imageCircuitos} />
        </div>
    </div>

    <div className="col-12 col-tablet-3">
        <div className={styles["com-grid-item"]}>
            <a href="tratamientos.html#tratamientos-corporales" className={styles["--description"]}>
                <h3>CORPORALES</h3>
            </a>
           <Image className={styles["com-image"]} alt="image" src={imageCorporales} />
        </div>
        <div className={styles["com-grid-item"]}>
            <a href="membresias.html" className={styles["--description"]}>
                <h3>MEMBRESIAS</h3>
            </a>
           <Image className={styles["com-image"]} alt="image" src={imageMembresias} />
        </div>
    </div>
</div>
);

export default Masonry;