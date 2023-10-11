type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Section(props: SectionProps) {
  return (
    <section className="flex flex-col gap-6">
      <h3
        className="text-h3 text-xl text-center font-bold"
        data-aos="fade-left"
      >
        {props.title}
      </h3>
      {props.children}
    </section>
  );
}
