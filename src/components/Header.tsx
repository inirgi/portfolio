import { TypeAnimation } from "react-type-animation";
import { Envelope, Instagram, Whatsapp } from "react-bootstrap-icons";

export default function Header() {
  return (
    <header className="px-12 py-5 xl:px-32 flex flex-col gap-2 items-center justify-center text-center">
      <img
        data-aos="flip-left"
        src="/Irgi.jpg"
        alt="Foto Gwejh"
        width={144}
        height={144}
        className="shadow rounded-full"
      />

      <TypeAnimation
        wrapper="h1"
        className="uppercase text-h1 text-4xl font-bold"
        data-aos="fade-right"
        sequence={[
          1000,
          "Irgi",
          1000,
          "Irgi Surya",
          1000,
          "Irgi Surya Putra",
          1000,
          "Irgi Surya",
          1000,
          "Irgi",
          1000,
          "",
        ]}
        speed={50}
        repeat={Infinity}
      />
      <div className="bg-white m-auto w-fit flex gap-10 px-10 py-1">
        <a
          href="https://api.whatsapp.com/send?phone=62895360948768"
          target="_blank"
        >
          <Whatsapp />
        </a>
        <a href="https://instagram.com/irgis.p_03" target="_blank">
          <Instagram />
        </a>
        <a href="mailto:irgisuryaputra663@gmail.com" target="_blank">
          <Envelope />
        </a>
      </div>
    </header>
  );
}
