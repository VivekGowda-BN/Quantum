/**
 * PageHero — home uses the tall photo hero. Other pages use the compact
 * variant: the same photo banner, but roughly half the height so the page
 * title block is not a full screen.
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imagePosition = "center",
  attribution,
  align = "left",
  height = "tall",
  variant = "photo",
  children,
  belowTitle,
  testId = "page-hero",
}) {
  if (variant === "compact") {
    return (
      <section
        data-testid={testId}
        className="relative w-full h-[38vh] min-h-[300px] max-h-[400px] overflow-hidden bg-black"
      >
        <div
          className="hero-image"
          style={{ backgroundImage: `url(${image})`, backgroundPosition: imagePosition }}
          aria-hidden="true"
        />
        <div className="hero-vignette-strong" aria-hidden="true" />

        <div className="relative z-10 h-full flex items-center px-6 md:px-10 pt-20 md:pt-24 pb-8">
          <div className="w-full max-w-6xl mx-auto md:pl-3">
            {eyebrow && (
              <div className="mb-3 inline-flex items-center gap-3 text-eyebrow text-white/85">
                <span className="h-px w-8 bg-white/60" />
                <span>{eyebrow}</span>
              </div>
            )}
            <h1
              data-testid={`${testId}-title`}
              className="title-block rise font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.08] max-w-3xl"
            >
              {title}
            </h1>
            {belowTitle && <div className="mt-3 rise-2">{belowTitle}</div>}
            {subtitle && (
              <p
                className="mt-3 max-w-2xl text-sm md:text-base text-white leading-relaxed rise-2"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.75)" }}
              >
                {subtitle}
              </p>
            )}
            {children && <div className="mt-5 rise-3">{children}</div>}
          </div>
        </div>
      </section>
    );
  }

  // Clamp between a comfortable min and the viewport height so the hero
  // fits inside the user's screen on both laptops and desktops.
  const heightClass =
    height === "short"
      ? "h-[min(88vh,720px)] min-h-[520px]"
      : "h-[min(100vh,860px)] min-h-[580px]";

  const alignClass =
    align === "center" ? "items-center text-center" : "items-center justify-start";

  return (
    <section
      data-testid={testId}
      className={`relative w-full ${heightClass} overflow-hidden bg-black`}
    >
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${image})`, backgroundPosition: imagePosition }}
        aria-hidden="true"
      />
      <div className="hero-vignette-strong" aria-hidden="true" />

      <div
        className={`relative z-10 h-full flex ${alignClass} px-6 md:px-10 pt-20 md:pt-24 pb-14`}
      >
        <div className={`w-full max-w-6xl mx-auto ${align === "center" ? "" : "md:ml-0"}`}>
          {eyebrow && (
            <div className="mb-6 inline-flex items-center gap-3 text-eyebrow text-white/85">
              <span className="h-px w-10 bg-white/60" />
              <span>{eyebrow}</span>
            </div>
          )}
          <div className={align === "center" ? "flex justify-center" : ""}>
            <h1
              data-testid={`${testId}-title`}
              className="title-block rise font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-4xl"
            >
              {title}
            </h1>
          </div>
          {belowTitle && <div className="mt-5 rise-2">{belowTitle}</div>}
          {subtitle && (
            <p
              className="mt-6 max-w-2xl text-white text-base md:text-lg leading-relaxed rise-2"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.75)" }}
            >
              {subtitle}
            </p>
          )}
          {children && <div className="mt-7 rise-3">{children}</div>}
        </div>
      </div>

      {attribution && (
        <div className="absolute bottom-3 right-4 z-10 text-[10px] font-mono text-white/60 tracking-wide">
          {attribution}
        </div>
      )}
    </section>
  );
}
