import Image from "next/image";
import { content } from "@/lib/content";
import { Icon, type IconName } from "@/lib/icons";

const { about } = content;

const ADVANTAGE_ICONS: Record<string, IconName> = {
  quote: "quote",
  updates: "updates",
  scheduling: "scheduling",
};

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-white py-[60px]"
    >
      <div className="container-site">
        <div className="grid gap-10 min-[900px]:grid-cols-[.96fr_1.04fr] min-[900px]:items-center min-[900px]:gap-[58px]">
          <div className="relative">
            <Image
              src={about.image.src}
              alt={about.image.alt}
              width={2508}
              height={1672}
              sizes="(min-width: 900px) 48vw, 100vw"
              className="w-full rounded-[10px] border border-line"
            />
          </div>

          <div>
            <p className="eyebrow">{about.eyebrow}</p>
            <h2
              id="about-title"
              className="text-[clamp(28px,4.4vw,40px)] tracking-[.005em]"
            >
              {about.heading}
            </h2>
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="mt-4 text-base text-steel"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-[26px]">
              {about.advantages.map((advantage, index) => (
                <div
                  key={advantage.title}
                  className={`flex min-w-0 gap-4 py-[18px] ${
                    index > 0 ? "border-t border-line" : ""
                  }`}
                >
                  <div className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-lg bg-safety-tint text-safety">
                    <Icon
                      name={ADVANTAGE_ICONS[advantage.icon] ?? "quote"}
                      className="h-[22px] w-[22px]"
                    />
                  </div>
                  <div>
                    <h3 className="text-[19px]">{advantage.title}</h3>
                    <p className="mt-1 text-[14.5px] text-steel">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
