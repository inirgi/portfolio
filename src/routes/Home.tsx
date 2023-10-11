import Section from "../components/Section";
import Timeline from "../components/Timeline";

type SkillProps = {
  image: string;
  name: string;
  percentages: {
    name: string;
    percentage: number;
  }[];
};

function Skill(props: SkillProps) {
  return (
    <article
      data-aos="flip-left"
      className="basis-1/3 flex flex-col items-center rounded-xl p-4 bg-card"
    >
      <img src={props.image} alt={`${props.name}'s Image`} width={250} />
      <h3 className="text-center text-h3 mb-8 font-bold text-xl uppercase">
        {props.name}
      </h3>
      {props.percentages.map((percentage) => (
        <div className="w-full flex flex-col self-start mb-3">
          <p className="text-p uppercase">{percentage.name}</p>
          <progress value={percentage.percentage} max={100}></progress>
        </div>
      ))}
    </article>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col gap-9">
      <Section title="About Me">
        <p className="text-p" data-aos="fade-right">
          I'm Irgi, a student software developer from Indonesia, I love to
          explore new things in technology development. During my study, I have
          the ability to work on aspects of software development: web, mobile,
          desktop and database.
        </p>
        <p className="text-p" data-aos="fade-left">
          I believe that technology is meant to make human life easier, and as
          developers, it is our responsibility to achieve this goal!
        </p>
        <p className="text-p" data-aos="fade-right">
          Feel free to contact me for small projects and collaborations.
        </p>
      </Section>
      <Section title="My Journey">
        <Timeline
          items={[
            {
              period: "July 2022 - current",
              title: "Vocational High School 4 Tangerang City",
              description: "Software Engineer",
            },
          ]}
        />
      </Section>
      <Section title="Skills">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <Skill
            name="Frontend"
            image="/Frontend.webp"
            percentages={[
              { name: "HTML", percentage: 80 },
              { name: "CSS", percentage: 65 },
              { name: "JS", percentage: 40 },
            ]}
          />
        </div>
      </Section>
    </div>
  );
}
