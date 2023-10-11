import clsx from "clsx";

type TimelineProps = {
  items: {
    period: string;
    title: string;
    description: string;
  }[];
};

export default function Timeline(props: TimelineProps) {
  return (
    <div className="relative">
      {props.items.map((item, itemIndex) => (
        <div className="flex">
          <div
            className={clsx(
              "px-10 py-2.5 relative bg-inherit w-1/2 m-0",
              itemIndex % 2 === 0
                ? "border-r-4 border-r-whiteAlmost"
                : "border-l-4 border-l-whiteAlmost"
            )}
          >
            <div
              data-aos={itemIndex % 2 === 0 ? "fade-right" : "fade-left"}
              className={clsx(
                "p-2.5 bg-white rounded-md ml-auto",
                itemIndex % 2 === 0 ? "text-right" : "text-left"
              )}
            >
              <p className="text-body text-sm">{item.period}</p>
              <h3 className="text-primary font-bold">{item.title}</h3>
              <p className="text-body">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
