import { useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Eyebrow } from './primitives';

type Props = { items: readonly (readonly [string, string])[]; className?: string };

const FaqSection = ({ items, className = 'bg-surface' }: Props) => {
  // Datos estructurados para resultados enriquecidos de Google
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map(([question, answer]) => ({
        '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, [items]);

  return (
    <section className={`w-full py-space-xl ${className}`}>
      <div className="w-full max-w-[900px] mx-auto px-margin-mobile md:px-margin">
        <div className="text-center mb-space-xl">
          <Eyebrow>RESOLVEMOS TUS DUDAS</Eyebrow>
          <h2 className="text-headline-lg md:text-headline-xl text-on-surface tracking-tight normal-case">Preguntas frecuentes</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-space-sm">
          {items.map(([q, a], i) => (
            <AccordionItem key={q} value={`faq-${i}`} className="bg-surface-container-low rounded-xl overflow-hidden border-0">
              <AccordionTrigger className="px-space-lg py-space-md text-left text-headline-sm text-on-surface hover:no-underline [&>svg]:text-primary">
                {q}
              </AccordionTrigger>
              <AccordionContent className="px-space-lg text-body-md text-on-surface-variant">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
