import Container from "../ui/Container";
import WhatsAppButton from "../ui/WhatsAppButton";

export default function PageHero({
  kicker,
  title,
  description,
  ctaLabel = "Falar no WhatsApp",
  ctaMessage,
}) {
  return (
    <section className="relative bg-white pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(194,65,12,0.35), transparent 65%)",
        }}
      />
      <Container className="relative max-w-3xl text-center mx-auto">
        <p className="kicker mb-4 justify-center flex">{kicker}</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-amethyst leading-tight">
          {title}
        </h1>
        <p className="mt-5 text-lg text-slate leading-relaxed max-w-xl mx-auto">
          {description}
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton size="lg" message={ctaMessage}>
            {ctaLabel}
          </WhatsAppButton>
        </div>
      </Container>
    </section>
  );
}
