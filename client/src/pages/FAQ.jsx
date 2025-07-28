import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Example placeholder FAQs (you can replace these or map from your data later)
  const faqs = [
    {
      question: "Was ist unser Ziel und unsere Vision?",
      answer:
        "Unser übergeordnetes Ziel ist es, die Forschungsbegeisterung zu fördern und Studierenden im Dissertationsprozess eine umfassende Übersicht über verschiedene Themen und Herangehensweisen zu bieten. Unsere Vision besteht darin, ein wegweisendes Portal für erfolgreiche Dissertationen zu sein, das Best-Practice-Beispiele präsentiert und einen inspirierenden Raum für den Austausch von Wissen und Erfahrungen schafft. Wir streben danach, eine unterstützende Gemeinschaft zu formen, die angehende Forscherinnen und Forscher auf ihrem Weg zu herausragenden Dissertationen begleitet.",
    },
    {
      question: "Wo speichert Ihr unsere Daten?",
      answer: "Alle Daten werden DSGVO-konform gespeichert und geschützt.",
    },
    {
      question: "Was bedeutet 'anonymes Kontaktformular'?",
      answer: "Sie können Fragen stellen, ohne persönliche Daten preiszugeben.",
    },
    {
      question: "Was darf ich in Beiträgen schreiben, was nicht?",
      answer:
        "Kritik ist erlaubt, aber keine beleidigenden oder sensiblen Inhalte.",
    },
    {
      question:
        "Ich bin noch nicht fertig mit meiner Dissertation. Soll ich trotzdem einen Erfahrungsbericht schreiben?",
      answer:
        "Ja! Auch Zwischenstände und laufende Erfahrungen sind sehr hilfreich für andere.",
    },
    {
      question: "Werden alle Beiträge automatisch veröffentlicht?",
      answer: "Nein, alle Beiträge werden zuerst redaktionell geprüft.",
    },
    {
      question: "Kann ich meine Beiträge noch rückwirkend bearbeiten?",
      answer: "Ja, über dein Profil kannst du deine Beiträge aktualisieren.",
    },
    {
      question:
        "Wie können die Erfahrungsberichte mir bei der Auswahl meines Dissertationsprojekts helfen?",
      answer:
        "Sie bieten Einblicke in realistische Erfahrungen und helfen dir, passende Themen und Betreuende zu finden.",
    },
    {
      question:
        "Sind Erfahrungsberichte von Dissertationsprojekten an anderen Fakultäten überhaupt interessant für mich?",
      answer:
        "Absolut! Du kannst dadurch neue Perspektiven entdecken und interdisziplinär denken.",
    },
    {
      question: "Wie gewährleistet ihr Anonymität?",
      answer:
        "Alle persönlichen Angaben werden pseudonymisiert und optional gemacht.",
    },
    {
      question:
        "Wie kann ich den/die Verfasser:in eines interessanten Berichts kontaktieren?",
      answer:
        "Über unser internes System kannst du eine Nachricht senden, ohne die Identität offenzulegen.",
    },
  ];

  return (
  <section className=" min-h-screen flex items-center justify-center p-10">
  <div className="w-full" style={{ maxWidth: '1200px' }}> {/* Increased max width */}
    <h1 className="text-6xl md:text-7xl font-bold mb-12 text-center text-blue-700">
      FAQ
    </h1>

    <div className="rounded-xl divide-y divide-gray-300 border-2 border-gray-300 bg-white shadow-xl overflow-hidden" 
         style={{ fontSize: '1.125rem' }}> {/* Larger rounded corners and explicit font size */}
      {faqs.map((faq) => (
        <div className="w-full" key={faq.answer}>
          <button
            className="w-full flex justify-between items-center text-left px-8 py-6 hover:bg-blue-100 transition-all duration-200"
            style={{ fontSize: '1.125rem' }} /* Larger text */
            onClick={() => toggle(faq.answer)}
          >
            <span className="font-semibold text-gray-900">
              {faq.question}
            </span>
            {openIndex === faq.answer ? (
              <ChevronUp size={28} className="ml-4" />
            ) : (
              <ChevronDown size={28} className="ml-4" /> 
            )}
          </button>

          {openIndex === faq.answer && (
            <div className="px-8 py-6 text-gray-700 bg-blue-50" 
                 style={{ fontSize: '1.125rem', lineHeight: '1.75' }}> 
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default FAQPage;
