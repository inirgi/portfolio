import Section from "../components/Section";

type ProjectProps = {
  image: string;
  name: string;
  description: string;
};

function Project(props: ProjectProps) {
  return (
    <article
      data-aos="flip-left"
      className="basis-1/3 flex flex-col items-center rounded-xl bg-card overflow-hidden"
    >
      <img src={props.image} alt={`${props.name}'s Image`} />
      <div className="p-4">
        <h1 className="text-primary">{props.name}</h1>
        <p className="text-p">{props.description}</p>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <div className="flex flex-col gap-9">
      <Section title="Projects">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <Project
            name="Web RPL"
            image="/WebRPL.png"
            description="One of my school assignments and my first web, where I was directed to create a web for my school department."
          />
        </div>
      </Section>
    </div>
  );
}
