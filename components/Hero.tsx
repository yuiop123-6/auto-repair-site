import Image from "next/image";
import { content } from "@/lib/content";
import { Icon } from "@/lib/icons";

const { hero } = content;

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-ink pb-14 pt-[112px] text-white min-[900px]:pb-[84px] min-[900px]:pt-[144px]"
    >
      <div className="hero-backdrop pointer-events-none absolute inset-0" />
      <div className="container-site relative z-10">
        <div className="grid gap-[38px] min-[900px]:grid-cols-[1.04fr_.96fr] min-[900px]:items-center min-[900px]:gap-14">
          <div>
            <p className="eyebrow on-dark">{hero.eyebrow}</p>
            <h1
              id="hero-title"
              className="max-w-[13em] text-[clamp(38px,7vw,58px)] tracking-[.01em] text-white"
            >
              {hero.headline}
            </h1>
            <p className="mt-5 max-w-[540px] text-[17px] text-white/80">
              {hero.subheading}
            </p>
            <div className="mt-[30px] flex flex-wrap gap-3.5">
              <a className="btn btn-primary" href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <Icon name="arrow" />
              </a>
              <a className="btn btn-ghost" href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          <div className="relative">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={2730}
              height={1536}
              priority
              sizes="(min-width: 900px) 50vw, 100vw"
              className="w-full rounded-[10px] border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,.4)]"
            />
            <div className="absolute bottom-3.5 left-3.5 flex items-center gap-2.5 rounded-lg border border-safety/50 bg-[#11161d]/95 px-[15px] py-2.5 text-sm font-semibold">
              <Icon
                name="calendar"
                className="h-[18px] w-[18px] shrink-0 text-safety"
              />
              <span>{hero.badge}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
