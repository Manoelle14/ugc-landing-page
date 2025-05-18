import { Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PricingTable() {
  const plans = [
    {
      name: "Pack Starter",
      price: "99 €",
      description: "Pour les petites marques qui veulent tester l'UGC",
      features: [
        "1 vidéo témoignage (30-60s)",
        "1 vidéo unboxing",
        "photos lifestyle (produit utilisé dans un contexte réel)",
        "Format vertical (9:16) adapté à TikTok/Reels",
        "Livraison en 5 jours ouvrés",
      ],
      highlighted: false,
      cta: "Commencer",
      link: "https://buy.stripe.com/7sY4gz3UD17xceacaYeME00",
    },
    {
      name: "Pack Boost",
      price: "200 €",
      description: "Idéal pour les marques en croissance qui cherchent à développer leur stratégie UGC.",
      features: [
        "2 vidéos témoignages",
        "1 vidéo unboxing",
        "1 vidéo how to use / démonstration",
        "photos lifestyle",
        "Script et hook optimisés pour TikTok/Meta Ads",
        "Format 9:16 + 1:1 (carré) sur demande",
        "Livraison en 7 jours ouvrés",
      ],
      highlighted: true,
      cta: "Le Plus Populaire",
      link: "https://buy.stripe.com/00w9ATfDleYn5PM2AoeME01",
    },
    {
      name: "Pack Pro",
      price: "400 €",
      description: "Solution complète pour les marques établies.",
      features: [
        "5 vidéos variées (témoignage, demo, problème-solution, trend, etc.)",
        "6 photos lifestyle de haute qualité",
        "A/B testing : 2 hooks différents par vidéo",
        "Livraison rapide (5 jours)",
        "Option remake si besoin",
      ],
      highlighted: false,
      cta: "Commencer",
      link: "https://buy.stripe.com/cNiaEX0Ir6rR1zw1wkeME02",
    },
  ]

  return (
    <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
      {plans.map((plan, i) => (
        <div
          key={i}
          className={`flex flex-col rounded-xl border ${
            plan.highlighted ? "border-primary shadow-lg" : ""
          } bg-background p-6 sm:p-8`}
        >
          {plan.highlighted && (
            <div className="mb-4 -mt-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary w-fit">
              Le Plus Populaire
            </div>
          )}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold">{plan.price}</span>
              {plan.name !== "Entreprise" && <span className="text-muted-foreground"> </span>}
            </div>
            <p className="text-sm text-muted-foreground">{plan.description}</p>
          </div>
          <div className="mt-6 space-y-4">
            <ul className="space-y-2 text-sm">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto pt-8">
            <Button
              asChild
              className={`w-full ${plan.highlighted ? "" : "bg-muted text-foreground hover:bg-muted/80"}`}
              variant={plan.highlighted ? "default" : "outline"}
            >
              <Link href={plan.link} target="_blank" rel="noopener noreferrer">
                {plan.cta}
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
