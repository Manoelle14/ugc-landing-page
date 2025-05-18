"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      question: "Qu'est-ce que l'UGC (User Generated Content) ?",
      answer:
        "L'UGC, ou « contenu généré par les utilisateurs », est un format de contenu authentique, filmé par de vrais consommateurs ou créateurs, utilisé pour promouvoir des marques. Il est particulièrement efficace sur TikTok, Instagram Reels, YouTube Shorts et les publicités Meta.",
    },
    {
      question: "En quoi FlipSide UGC est différent ?",
      answer:
        "Chez FlipSide, on mise sur l'authenticité, la rapidité et la performance. On travaille avec des créateurs qui comprennent les codes des réseaux sociaux et savent comment capter l'attention dès la première seconde. Tu veux du contenu qui convertit ? C'est notre spécialité.",
    },
    {
      question: "Pour qui sont faits vos packs UGC ?",
      answer:
        "Nos packs sont conçus pour :\n• Des marques en lancement\n• Des e-commerçants (Shopify, dropshipping, marques D2C…)\n• Des entreprises établies qui veulent booster leurs ads ou réseaux",
    },
    {
      question: "Comment ça fonctionne ?",
      answer:
        "Tu choisis ton pack\nOn te contacte pour récupérer les infos sur ta marque + ton produit,\nTu nous envoies ton produit (si besoin),\nOn crée le contenu (tournage, montage, optimisation),\nTu reçois les fichiers prêts à poster ou à sponsoriser,",
    },
    {
      question: "En combien de temps vais-je recevoir mes vidéos ?",
      answer:
        "Les délais varient selon le pack :\n• Pack Starter : 5 jours ouvrés\n• Pack Boost : 5-7 jours ouvrés\n• Pack Pro : 5 jours ouvrés\n• Pack sur-mesure : à définir ensemble",
    },
    {
      question: "Est-ce que je peux choisir le créateur ou la créatrice ?",
      answer:
        "Oui ! Si tu as une préférence (âge, genre, style, ambiance), on peut te proposer un ou plusieurs profils. Sinon, on sélectionne nous-mêmes le meilleur créateur en fonction de ta cible.",
    },
    {
      question: "Puis-je utiliser les vidéos en publicité ?",
      answer:
        "Oui, tous nos packs incluent un droit d'usage organique. Pour de la publicité (Meta, TikTok Ads), le droit est inclus pendant 30 jours dans les packs Boost et Pro. Tu peux prolonger ce droit facilement si besoin.",
    },
    {
      question: "Proposez-vous du contenu en anglais ?",
      answer:
        "Oui, nous pouvons produire du contenu en anglais ou bilingue pour les marques internationales. Indique-le simplement lors de ta commande.",
    },
    {
      question: "Offrez-vous des remakes si je ne suis pas satisfait ?",
      answer:
        "Oui, un remake partiel est inclus dans les packs Boost et Pro (si le brief a bien été respecté). On veut que tu sois 100 % satisfait !",
    },
    {
      question: "Quels types de vidéos puis-je commander ?",
      answer:
        "• Témoignages clients\n• Unboxing\n• Vidéo tendance TikTok\n• Démonstration produit\n• Problème/Solution\n• Storytelling\n• Vlog lifestyle",
    },
  ]

  return (
    <div className="mx-auto max-w-3xl">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground whitespace-pre-line">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
