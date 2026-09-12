import Container from "../ui/Container";
import WhatsAppButton from "../ui/WhatsAppButton";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-28 bg-linen">
      <Container>
        <div className="rounded-3xl bg-amethyst px-8 py-14 md:px-16 md:py-16 text-center relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, #c2410c, transparent 65%)" }}
          />
          <div className="relative">
            <h2 className="font-display font-semibold text-white text-3xl md:text-4xl max-w-2xl mx-auto leading-tight">
              Vamos tirar seu projeto do papel?
            </h2>
            <p className="mt-4 text-white/65 max-w-lg mx-auto text-[15.5px] leading-relaxed">
              Manda uma mensagem agora e conte o que você precisa. Em poucos
              minutos você já sabe os próximos passos.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppButton
                size="lg"
                message="Olá! Quero tirar meu projeto do papel com a Adjom."
              >
                Chamar no WhatsApp agora
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
