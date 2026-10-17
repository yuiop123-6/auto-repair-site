"use client";

import { useState } from "react";
import { content } from "@/lib/content";
import { Icon } from "@/lib/icons";

const { faq, contact } = content;

export function Faq() {
  // Each item toggles independently, matching the reference behavior.
  const [openItems, setOpenItems] = useState<boolean[]>(() =>
    faq.items.map(() => false),
  );

  const toggle = (index: number) =>
    setOpenItems((prev) => prev.map((v, i) => (i === index ? !v : v)));

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-paper py-[60px]"
    >
      <div className="container-site">
        <div className="mb-9 max-w-[620px]">
          <p className="eyebrow">{faq.eyebrow}</p>
          <h2
            id="faq-title"
            className="text-[clamp(28px,4.4vw,40px)] tracking-[.005em]"
          >
            {faq.heading}
          </h2>
        </div>

        <div className="grid gap-9 min-[900px]:grid-cols-[340px_1fr] min-[900px]:items-start min-[900px]:gap-[52px]">
          <aside className="self-start rounded-[10px] border border-line bg-white p-[26px]">
            <h3 className="text-[22px]">Still have a question?</h3>
            <p className="mt-2.5 text-[15px] text-steel">
              Send us your vehicle details and a preferred contact method, and
              we will reply with a straight answer.
            </p>
            <a
              className="btn btn-primary mt-5 w-full"
              href={`mailto:${contact.email}?subject=${encodeURIComponent(
                "General question",
              )}`}
            >
              <Icon name="mail" />
              Email the shop
            </a>
          </aside>

          <div>
            {faq.items.map((item, index) => {
              const open = openItems[index];
              return (
                <div
                  key={item.question}
                  className="mb-3 overflow-hidden rounded-[10px] border border-line bg-white"
                >
                  <button
                    type="button"
                    id={`faq-button-${index}`}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => toggle(index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent px-[22px] py-[19px] text-left font-display text-[19px] font-semibold text-ink transition-colors hover:text-safety-dark"
                  >
                    <span>{item.question}</span>
                    <span
                      className={`grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full transition-all duration-300 ${
                        open
                          ? "rotate-45 bg-safety text-white"
                          : "bg-safety-tint text-safety"
                      }`}
                    >
                      <Icon
                        name="plus"
                        strokeWidth={2.4}
                        className="h-[15px] w-[15px]"
                      />
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="px-[22px] pb-[21px] text-[15.5px] text-steel">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
