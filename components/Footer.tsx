import { content } from "@/lib/content";
import { Icon } from "@/lib/icons";

const { brand, nav, contact, footer } = content;

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="container-site">
        <div className="grid gap-[34px] pb-10 pt-14 min-[768px]:grid-cols-[1.5fr_.7fr_1fr] min-[768px]:gap-10">
          <div>
            <a
              className="mb-4 inline-flex items-center gap-[11px] no-underline"
              href="#hero"
              aria-label={`${brand.name} — home`}
            >
              <span
                className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-[7px] bg-safety text-white"
                aria-hidden="true"
              >
                <Icon name="wrench" className="h-[22px] w-[22px]" />
              </span>
              <span className="flex flex-col leading-none">
                <strong className="font-display text-[21px] font-bold tracking-[.04em] text-white">
                  {brand.wordmark}
                </strong>
                <small className="mt-[3px] text-[10px] font-semibold tracking-[.22em] text-safety">
                  {brand.wordmarkTail}
                </small>
              </span>
            </a>
            <p className="max-w-[330px] text-[14.5px] text-white/60">
              {footer.description}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-body text-[15px] font-bold text-white">
              {footer.navHeading}
            </h4>
            <nav aria-label="Footer">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block w-fit py-1.5 text-[14.5px] text-white/70 no-underline hover:text-safety"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-4 font-body text-[15px] font-bold text-white">
              {footer.contactHeading}
            </h4>
            <div className="mb-[13px] flex items-start gap-2.5 text-[14.5px]">
              <Icon
                name="mail"
                className="mt-[3px] h-[17px] w-[17px] shrink-0 text-safety"
              />
              <a
                href={`mailto:${contact.email}`}
                className="text-white/70 no-underline hover:text-safety"
              >
                {contact.email}
              </a>
            </div>
            <div className="mb-[13px] flex items-start gap-2.5 text-[14.5px]">
              <Icon
                name="phone"
                className="mt-[3px] h-[17px] w-[17px] shrink-0 text-safety"
              />
              <a
                href={`tel:${contact.phoneHref}`}
                className="text-white/70 no-underline hover:text-safety"
              >
                {contact.phone}
              </a>
            </div>
            <div className="flex items-start gap-2.5 text-[14.5px]">
              <Icon
                name="pin"
                className="mt-[3px] h-[17px] w-[17px] shrink-0 text-safety"
              />
              <span>{contact.location_label}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-5 text-[13.5px] text-white/50 min-[768px]:flex-row min-[768px]:items-center min-[768px]:justify-between">
          <span>{footer.copyright}</span>
          <span>{brand.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
