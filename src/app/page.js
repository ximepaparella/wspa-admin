import styles from "./page.module.css";
import Title from "@/components/Title";
import Masonry from "@/components/Masonry";
import IconText from "@/components/IconText";

export default function Home() {
  return (
    <main>
      {/* Slider /> */}
      <section class="mod-intro">
        <div class="lay">
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

      <section class="mod-services">
        <div class="lay">
          <Title
            pretitle="CONOCÉ ALGUNOS DE"
            title="Nuestros Servicios Premium"
          />

          <div class="row row-gap-tablet-4">
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
    </main>
  );
}
