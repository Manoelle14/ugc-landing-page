import Link from "next/link"
import Image from "next/image"
import {
  CheckCircle,
  ArrowRight,
  Users,
  BarChart,
  Camera,
  Instagram,
  TwitterIcon as TikTok,
  Youtube,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TestimonialCarousel from "@/components/testimonial-carousel"
import PricingTable from "@/components/pricing-table"
import VideoCarousel from "@/components/video-carousel"
import FAQSection from "@/components/faq-section"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center">
              <Image
                src="https://l4ubh7zqrbc6rpki.public.blob.vercel-storage.com/Design_sans_titre__2_-removebg-preview-QzlijT4SAPpc9hpMNIkj59wNB3SFV8.png"
                alt="FlipSide Logo"
                width={58}
                height={58}
                className="h-10 w-10"
              />
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#services"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Services
              </Link>
              <Link
                href="#benefits"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Avantages
              </Link>
              <Link
                href="#pricing"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Tarifs
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </Link>
              <Link
                href="#faq"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                FAQ
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Button asChild variant="ghost" size="sm">
                <Link href="#faq">Questions fréquentes</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="#pricing">Voir les tarifs</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-violet-50 to-indigo-50 py-12 md:py-24 lg:py-32 xl:py-36">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm">
                  <span className="text-primary font-medium">Agence de Contenu UGC</span>
                  <div className="mx-2 h-1 w-1 rounded-full bg-border"></div>
                  <span className="text-muted-foreground">Pour les Marques qui Veulent Grandir</span>
                </div>
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Nous Créons du <span className="text-primary">Contenu UGC Authentique</span> qui Génère des
                    Résultats Concrets
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl">
                    Contenu généré par notre réseau de créateurs.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button asChild size="lg" className="rounded-full px-8">
                    <Link href="#pricing">
                      Commencer <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="rounded-full px-8">
                    <Link href="#pricing">Voir les Tarifs</Link>
                  </Button>
                </div>
              </div>
              <div className="relative flex items-center justify-center lg:justify-end">
                <div className="relative">
                  {/* Main image */}
                  <div className="overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src="https://l4ubh7zqrbc6rpki.public.blob.vercel-storage.com/IMG_4437-KUjN2QwDkNEi9RcIw1viBIv8tjQZ4z.webp"
                      alt="UGC Content Example"
                      width={500}
                      height={600}
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Floating stats card */}
                  <div className="absolute -left-12 -bottom-6 rounded-xl bg-white p-4 shadow-lg md:p-6">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <BarChart className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Augmentation Moyenne des Conversions</p>
                        <p className="text-2xl font-bold">+37%</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating review card */}
                  <div className="absolute -right-8 top-10 max-w-[200px] rounded-xl bg-white p-4 shadow-lg">
                    <div className="flex flex-col gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="#8b5cf6"
                            stroke="none"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm">
                        "Le contenu UGC a généré 3 fois plus d'engagement que nos séances photo professionnelles."
                      </p>
                      <p className="text-xs text-muted-foreground">Directeur Marketing, Marque E-commerce</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Purpose Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 text-center">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Notre Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Pourquoi le Contenu Généré par les Utilisateurs Est Important
                </h2>
                <p className="max-w-[900px] mx-auto text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dans le paysage numérique actuel, les consommateurs recherchent l'authenticité. L'UGC offre des
                  expériences authentiques qui résonnent avec votre audience et génèrent des résultats concrets.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <VideoCarousel />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold">Connexion Authentique</h3>
                      <p className="text-muted-foreground">
                        L'UGC crée des connexions authentiques avec votre audience grâce à un contenu auquel on peut
                        s'identifier, qui semble personnel et digne de confiance.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold">Taux de Conversion Plus Élevés</h3>
                      <p className="text-muted-foreground">
                        Les études montrent que l'UGC génère 29% de conversions web en plus par rapport aux campagnes ou
                        sites web qui n'en utilisent pas.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold">Preuve Sociale à Grande Échelle</h3>
                      <p className="text-muted-foreground">
                        Exploitez la puissance de la validation sociale pour établir la confiance et la crédibilité
                        auprès des clients potentiels.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 text-center">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Avantages
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Pourquoi Choisir l'UGC Plutôt que le Marketing Traditionnel
                </h2>
                <p className="max-w-[900px] mx-auto text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Le contenu généré par les utilisateurs surpasse le marketing traditionnel sur tous les indicateurs
                  clés, offrant de meilleurs résultats à une fraction du coût.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Users className="h-10 w-10 text-primary" />,
                  title: "Augmentation de Confiance de 93%",
                  description:
                    "Les consommateurs font 9,8 fois plus confiance à l'UGC qu'à la publicité traditionnelle, créant une crédibilité instantanée.",
                },
                {
                  icon: <BarChart className="h-10 w-10 text-primary" />,
                  title: "Engagement 4,5x Plus Élevé",
                  description:
                    "L'UGC génère des taux d'engagement significativement plus élevés sur toutes les plateformes sociales.",
                },
                {
                  icon: <Camera className="h-10 w-10 text-primary" />,
                  title: "Production Rentable",
                  description:
                    "Créez 10 fois plus de contenu à une fraction du coût des séances photo et vidéo traditionnelles.",
                },
                {
                  icon: <Instagram className="h-10 w-10 text-primary" />,
                  title: "Avantage Algorithmique",
                  description:
                    "Les plateformes sociales privilégient le contenu authentique, donnant à l'UGC un avantage naturel de portée.",
                },
                {
                  icon: <TikTok className="h-10 w-10 text-primary" />,
                  title: "Adaptabilité aux Tendances",
                  description:
                    "Capitalisez rapidement sur les tendances émergentes grâce à des processus de création de contenu agiles.",
                },
                {
                  icon: <Youtube className="h-10 w-10 text-primary" />,
                  title: "Polyvalence Multi-Plateforme",
                  description: "Créez du contenu qui fonctionne parfaitement sur tous vos canaux marketing.",
                },
              ].map((benefit, i) => (
                <Card key={i} className="flex flex-col items-center text-center">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center w-full">{benefit.icon}</div>
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 text-center">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Solutions UGC Complètes</h2>
                <p className="max-w-[900px] mx-auto text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  De la stratégie à l'exécution, nous gérons tous les aspects de vos campagnes UGC.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col gap-4 rounded-xl border bg-background p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Camera className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Création de Contenu</h3>
                </div>
                <p className="text-muted-foreground">
                  Notre réseau de créateurs produit du contenu authentique et de haute qualité adapté à votre marque et
                  à vos objectifs.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Avis et démonstrations de produits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Contenu d'intégration lifestyle</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Transformations avant/après</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Témoignages et histoires de réussite</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border bg-background p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Stratégie & Distribution</h3>
                </div>
                <p className="text-muted-foreground">
                  Nous développons des stratégies complètes pour maximiser l'impact de votre UGC sur tous les canaux.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Stratégies de contenu spécifiques aux plateformes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Gestion de campagnes sociales payantes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Intégration site web et email</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Suivi des performances et optimisation</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border bg-background p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Gestion des Créateurs</h3>
                </div>
                <p className="text-muted-foreground">
                  Accédez à notre réseau sélectionné de créateurs de contenu authentiques dans chaque niche et
                  industrie.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Recherche et vérification des créateurs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Briefing et direction créative</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Gestion des droits de contenu</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Relations à long terme avec les créateurs</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border bg-background p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <TikTok className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Expertise des Plateformes</h3>
                </div>
                <p className="text-muted-foreground">
                  Connaissance spécialisée de toutes les principales plateformes sociales pour maximiser l'impact de
                  votre contenu.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Contenu optimisé pour TikTok</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Instagram Reels et Stories</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>YouTube Shorts et format long</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Adaptation aux plateformes émergentes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 text-center">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Tarifs
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl"> Nos Tarifs</h2>
                <p className="max-w-[900px] mx-auto text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choisissez le forfait qui correspond aux besoins de votre entreprise et évoluez à mesure que vous
                  grandissez.
                </p>
              </div>
            </div>
            <PricingTable />
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 text-center">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Questions Fréquentes</h2>
                <p className="max-w-[900px] mx-auto text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tout ce que vous devez savoir sur nos services UGC et notre façon de travailler.
                </p>
              </div>
            </div>
            <div className="py-12">
              <FAQSection />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 text-center">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Témoignages
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ce que Disent Nos Clients</h2>
                <p className="max-w-[900px] mx-auto text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ne vous fiez pas seulement à notre parole. Voici ce que nos clients ont à dire sur leur collaboration
                  avec nous.
                </p>
              </div>
            </div>
            <TestimonialCarousel />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 text-center">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contactez-nous</h2>
                <p className="max-w-[900px] mx-auto text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Vous avez des questions ou vous souhaitez discuter de votre projet ? N'hésitez pas à nous contacter.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-md py-12">
              <div className="flex flex-col items-center justify-center space-y-6 text-center">
                <a
                  href="mailto:flipsideugcontact@gmail.com"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  flipsideugcontact@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row md:py-0">
          <div className="flex items-center gap-2">
            <Image src="/images/flipside-logo.png" alt="FlipSide Logo" width={24} height={24} className="h-6 w-6" />
            <p className="text-sm leading-loose text-center md:text-left">
              &copy; {new Date().getFullYear()} FlipSide. Tous droits réservés.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Conditions
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Confidentialité
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
