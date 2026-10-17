import { content } from "@/lib/content";
import { Icon, type IconName } from "@/lib/icons";

const { services } = content;

const SERVICE_ICONS: Record<string, IconName> = {
  diagnostics: "diagnostics",
  brakes: "brakes",
  maintenance: "maintenance",
};

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-paper py-[60px]"
    >
      <div className="container-site">
        <div className="mb-9 max-w-[620px]">
          <p className="eyebrow">{services.eyebrow}</p>
          <h2
            id="services-title"
            className="text-[clamp(28px,4.4vw,40px)] tracking-[.005em]"
          >
            {services.heading}
          </h2>
          <p className="mt-3.5 text-[16.5px] text-steel">
            {services.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 min-[720px]:grid-cols-3">
          {services.items.map((item) => (
            <article
              key={item.name}
              className="flex min-w-0 flex-col gap-3.5 rounded-[10px] border border-line bg-white px-[26px] py-7 transition-all duration-200 hover:-translate-y-1 hover:border-safety/60 hover:shadow-[0_14px_34px_rgba(21,26,34,.10)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-[9px] bg-safety-tint text-safety">
                <Icon
                  name={SERVICE_ICONS[item.icon] ?? "wrench"}
                  className="h-[25px] w-[25px]"
                />
              </div>
              <h3 className="text-[22px]">{item.name}</h3>
              <p className="text-[15.5px] text-steel">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
