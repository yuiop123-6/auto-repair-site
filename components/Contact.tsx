import { content } from "@/lib/content";
import { Icon, type IconName } from "@/lib/icons";
import { ContactForm } from "./ContactForm";

const { contact } = content;

type ContactItem = {
  icon: IconName;
  title: string;
  body: React.ReactNode;
};

const items: ContactItem[] = [
  {
    icon: "mail",
    title: "Email",
    body: (
      <a
        href={`mailto:${contact.email}`}
        className="text-[15px] text-steel no-underline hover:text-safety-dark"
      >
        {contact.email}
      </a>
    ),
  },
  {
    icon: "phone",
    title: "Phone",
    body: (
      <a
        href={`tel:${contact.phoneHref}`}
        className="text-[15px] text-steel no-underline hover:text-safety-dark"
      >
        {contact.phone}
      </a>
    ),
  },
  {
    icon: "pin",
    title: "Workshop",
    body: <p className="text-[15px] text-steel">{contact.location_label}</p>,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-white py-[60px]"
    >
      <div className="container-site">
        <div className="grid gap-10 min-[900px]:grid-cols-[.95fr_1.05fr] min-[900px]:items-start min-[900px]:gap-[58px]">
          <div>
            <p className="eyebrow">{contact.eyebrow}</p>
            <h2
              id="contact-title"
              className="text-[clamp(28px,4.4vw,40px)] tracking-[.005em]"
            >
              {contact.heading}
            </h2>
            <p className="mt-3.5 max-w-[520px] text-base text-steel">
              {contact.intro}
            </p>

            <div className="mt-[30px] grid gap-[22px]">
              {items.map((item) => (
                <div key={item.title} className="flex min-w-0 gap-[15px]">
                  <div className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-lg bg-ink text-safety">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-body text-base font-bold">
                      {item.title}
                    </h3>
                    {item.body}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
