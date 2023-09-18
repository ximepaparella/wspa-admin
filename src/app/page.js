import styles from "./page.module.css";
import Title from "@/components/Masonry";
import Masonry from "@/components/Masonry";

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

  
        </div>
      </section>
    </main>
  );
}
