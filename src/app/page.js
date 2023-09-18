import styles from "./page.module.css";
import Title from "@/components/Title";
import Masonry from "@/components/Masonry";
import IconText from "@/components/IconText";
import Info from "@/components/Info";
import SpaDayCard from "@/components/SpaDayCard";

export default function Home() {
  return (
    <main>
      {/* Slider /> */}
      <section className={styles["mod-section"]}>
        <div className="lay">
          <Title
            pretitle="BIENVENIDOS A"
            title="WYNDHAM SPA"
            text="W Spa te brinda la posibilidad de complementar tu viaje de placer o negocios con una serie de
                    tratamientos pensados para encontrar el equilibrio perfecto entre descanso y salud. 

                    Wyndham Nordelta es un hotel 5 estrellas ubicado en la Bahía Grande de Nordelta, Tigre, Buenos
                    Aires. Cuenta con 141 habitaciones, spa con circuito de aguas, piscina descubierta, restaurant con
                    cocina de autor y salones para eventos y reuniones."
          />
          <Masonry />
        </div>
      </section>

      <section className={styles["mod-section"]}>
        <div className="lay">
          <Title
            pretitle="CONOCÉ ALGUNOS DE"
            title="Nuestros Servicios Premium"
          />

          <div className={styles.services}>
            <IconText
              icon="icon-pool"
              title="Piscina In/Out"
              text="Piscinas climatizadas internas para disfrutar con temperaturas
                  ideales para el relax. Piscinas externas con vista a la Bahía
                  de Nordelta."
            />

            <IconText
              icon="icon-plant"
              title="Sala de Relax"
              text="  Sala exclusiva de relax corporal y mental. Disfrutá de un
                  espacio único para alcanzar una relajación completa."
            />

            <IconText
              icon="icon-sauna"
              title="Sauna Seco y Húmedo"
              text="Te proponemos dos propuestas de sauna para que puedas
                  disfrutar de dos experiencias diferentes."
            />

            <IconText
              icon="icon-sun"
              title="Terraza con Solarium"
              text="Las vistas de nuestra terraza te ofrecerán una experiencia
                  completa y agradable para disfrutar."
            />
          </div>
        </div>
      </section>

      <section className={styles["mod-section"]}>
        <div className="lay">
          <Title pretitle="CONOCÉ NUESTRAS" title="PROMOCIONES" />

          <SpaDayCard />
        </div>
      
      </section>

      <section className={styles["mod-section"]}>
        <div className="lay">
          <Title title="CONTACTANOS" pretitle="¿Tenés alguna duda?" />
        </div>

        <div className="row no-gap">
          <div className="col-12 col-tablet-6">
            <div className={styles["com-map"]}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.183404258393!2d-58.649995684775746!3d-34.3966839805137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca6b54f25ed31%3A0xd6ce5ee554e496af!2sWyndham%20Nordelta%20Tigre%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1581286690639!5m2!1ses!2sar" width="100%" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
          </div>

          <div className="col-12 col-tablet-6">
           <Info />
          </div>
        </div>
      </section>
    </main>
  );
}
