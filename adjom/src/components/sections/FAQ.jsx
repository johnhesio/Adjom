import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Accordion from "../ui/Accordion";

const FAQ_ITEMS = [
  {
    question: "Quanto tempo leva para desenvolver um site ou sistema?",
    answer:
      "Depende do escopo. Um site institucional costuma ficar pronto entre 2 e 4 semanas. Sistemas sob medida variam conforme a complexidade do processo automatizado — o prazo exato é definido na proposta, antes de começar.",
  },
  {
    question: "Vocês atendem só empresas de Fortaleza?",
    answer:
      "Fortaleza é nossa base, mas atendemos prestadores de serviço e startups em todo o Brasil. Todo o processo pode ser conduzido remotamente, com reuniões por vídeo e acompanhamento pelo WhatsApp.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Depois do diagnóstico, você recebe uma proposta com escopo e valores fechados. O pagamento costuma ser dividido em etapas, vinculadas às entregas do projeto.",
  },
  {
    question: "Vocês cuidam da hospedagem e do domínio depois de pronto?",
    answer:
      "Sim. Ajudamos a configurar hospedagem e domínio, e explicamos como tudo funciona para que você tenha autonomia — sem depender exclusivamente da Adjom para manter o site ou sistema no ar.",
  },
  {
    question: "É possível pedir ajustes depois que o projeto for entregue?",
    answer:
      "Sim. Após o lançamento seguimos disponíveis para ajustes, evoluções e novas funcionalidades, combinados conforme a necessidade do seu negócio.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <Container className="max-w-4xl">
        <SectionHeading
          kicker="perguntas frequentes"
          title="Antes de chamar no WhatsApp"
          description="Separamos as dúvidas mais comuns de quem está avaliando contratar a Adjom."
        />
        <div className="mt-14">
          <Accordion items={FAQ_ITEMS} />
        </div>
      </Container>
    </section>
  );
}
