import styles from "../page.module.css";
import Banner from "@/components/Banner";
import bannerImage from "../../assets/images/bg-membresias.jpg";
import giftBannerImage from "../../assets/images/call-to-action/gift.jpg";
import Map from "@/components/Map";
import Title from "@/components/Title";
import GiftBanner from "@/components/GiftBanner";
import SiteLayout from "@/components/Layouts/SiteLayout";

export default function Contacto() {
  return (
    <SiteLayout>
      <Banner title="CONTACTO" image={bannerImage.src} />

      <Map />
      <section className={styles["mod-policies"]}>
        <div className="lay row">
          <div className="col-12 col-tablet-12 col-deskxl-6">
            <Title
              contact
              title="Políticas del Spa"
              text="Los invitamos a disfrutar del relax que el Delta tiene para ofrecernos, con una vista única a Bahía Grande. El ingreso es exclusivamente para mayores de 18 años. Por razones de seguridad no permitimos el ingreso a mujeres embarazadas. En nuestras instalaciones no está permitido fumar. Se ruega avisar en recepción si tiene lesiones musculares o en las articulaciones, si sufre de presión arterial alta o si ha tenido recientemente cirugía plástica o con láser. Cualquiera de las condiciones anteriormente mencionadas descritas pueden limitar nuestra habilidad para realizar el tratamiento deseado. A continuación detallamos las principales normas del SPA."
            />

            <Title
              contact
              title="Reservas"
              text="Le solicitamos realizar su reserva con un mínimo de 48 hs. de anticipación para garantizar
                            disponibilidad por teléfono al +54 9 11 3420-9650 opcion 6. Si gusta reservar para fines de semana le aconsejamos
                            contactarnos con mayor anticipación. <br/>
                            Se ruega sea tan amable de llegar a su cita con al menos 15 minutos de anticipación y así
                            disponer de suficiente tiempo para la preparación de su tratamiento. En el caso de llegar
                            tarde, realizaremos todos nuestros esfuerzos para acomodarlo, pero esto no siempre es
                            posible. La duración de su servicio puede ser reducida para evitar retrasos con los demás
                            pacientes. Asimismo, los tratamientos serán cobrados en su totalidad. <br/>
                            En caso de poseer Bigbox, el día del servicio deberán traer un comprobante que poseen ese
                            código."
            />

            <Title
              contact
              title="Circuito de aguas"
              text="Consta de una piscina climatizada in/out, jets y cascadas cervicales, sala de relax y solárium perfectamente armonizados para su confort. El ingreso es exclusivamente para mayores de 18 años. Por razones de seguridad no permitimos el ingreso a mujeres embarazadas. El Circuito hídrico se encuentra abierto de martes a domingo de 10 a 21hs De no ser huésped del hotel, nosotros proveemos locker privado con bata y toallón. Bata es una por persona, si desea otra es con cargo adicional. No se puede ingresar alimentos y bebidas al Circuito de Aguas. Traer traje de baño y ojotas. Previo a utilizar las instalaciones se debe duchar para eliminar bacterias o excedentes de cremas."
            />

            <Title
              contact
              title="Formas de pago"
              text="En Recepción del SPA, se puede abonar en efectivo o tarjeta de débito o crédito en un solo pago, previo a utilizar el servicio. De haber realizado el servicio y no cumplir sus expectativas, no se realizan reembolsos."
            />

            <Title
              contact
              title="Regalar experiencias"
              text="Se realizan vouchers personalizados para agasajar a un ser querido, regale una experiencia inolvidable de relax puro en SPA Wyndham Nordelta-Tigre. El mismo, tiene una vigencia de tres meses a partir de su compra para utilizarlo"
            />
          </div>

          <div className="col-12 col-tablet-12 col-deskxl-6">
            <Title
              contact
              title="Cancelaciones"
              text="Para mantener eficientemente organizadas las agendas de nuestros profesionales, en caso de necesitar reprogramar un turno, se deberá realizar el cambio con 48hs de antelación. En caso contrario, se deberá abonar una reprogramación del 50% del valor del tratamiento. La reprogramación avisando con el debido tiempo es sin costo por única vez, en caso de solicitar una segunda reprogramación se deberá abonar el 50% del valor de/ los tratamiento/s sin excepción."
            />

            <Title
              contact
              title="Precios"
              text="Nos reservamos el derecho a modificar, discontinuar o aumentar los precios de los tratamientos sin notificación previa para asegurar que los estándares máximos de servicio y calidad son respetados. Ante cualquier duda, por favor comuníquese con nuestra recepción al momento de reservar su cita."
            />

            <Title
              contact
              title="Cuidados personales"
              text="Solicitamos antes de realizarse cualquier tipo de tratamiento su cuidado de higiene personal. Los celulares deben estar en silencio durante el tiempo que dure su tratamiento."
            />

            <Title
              contact
              title="Recomendaciones para embarazadas"
              text="» Sauna seco y húmedo: No ingresar
» Pileta climatizada: con recomendación de no más de 10 minutos debido a la temperatura y a posible baja de presión.
» Masajes o tratamientos: Recomendamos consultar con su médico de cabecera previamente. El servicio estará limitado a las posturas recomendadas por el terapeuta."
            />

            <Title
              contact
              title="Horarios de atención"
              text="Martes de 11 a 20hs y de Miercóles a domingo de 10 a 21hs"
            />
          </div>
        </div>
      </section>

      <GiftBanner
        title="REGALÁ RELAX, REGALA UN GIFT VOUCHER"
        image={giftBannerImage.src}
        url="http://wyndhamnordelta.giftsandvouchers.com/listado/"
        target="_blank"
        preTitle="PAQUETES PROMOCIONALES"
        buttonText="REGALÁ ONLINE"
      />
    </SiteLayout>
  );
}


