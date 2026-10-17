import { content } from "@/lib/content";
import { Icon } from "@/lib/icons";

const { reviews } = content;

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="bg-ink-2 py-[60px] text-white"
    >
      <div className="container-site">
        <div className="mb-9 max-w-[620px]">
          <p className="eyebrow">{reviews.eyebrow}</p>
          <h2
            id="reviews-title"
            className="text-[clamp(28px,4.4vw,40px)] tracking-[.005em] text-white"
          >
            {reviews.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 min-[720px]:grid-cols-3">
          {reviews.items.map((review) => (
            <article
              key={review.name}
              className="flex min-w-0 flex-col gap-[18px] rounded-[10px] border border-white/10 bg-ink-3 p-[26px]"
            >
              <div
                className="flex gap-[3px]"
                role="img"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {Array.from({ length: review.rating }, (_, i) => (
                  <Icon
                    key={i}
                    name="star"
                    className="h-[17px] w-[17px] text-safety"
                  />
                ))}
              </div>
              <p className="text-[15.5px] leading-[1.65] text-white/90">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="mt-auto flex items-center gap-[13px]">
                <div
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-safety font-display text-[19px] font-bold text-white"
                  aria-hidden="true"
                >
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="text-[15px] font-semibold">{review.name}</div>
                  <div className="text-[13px] text-steel-light">
                    {review.detail}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
