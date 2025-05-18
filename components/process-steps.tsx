import { CheckCircle, FileText, Users, Camera, BarChart, ArrowRight } from "lucide-react"

export default function ProcessSteps() {
  const steps = [
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Découverte & Stratégie",
      description:
        "Nous commençons par comprendre votre marque, votre audience et vos objectifs pour développer une stratégie UGC sur mesure.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Sélection des Créateurs",
      description:
        "Nous associons votre marque aux créateurs parfaits de notre réseau en fonction de vos exigences spécifiques.",
    },
    {
      icon: <Camera className="h-8 w-8 text-primary" />,
      title: "Production de Contenu",
      description:
        "Nos créateurs produisent du contenu authentique et de haute qualité suivant des briefs créatifs détaillés.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Révision & Approbation",
      description:
        "Vous examinez et approuvez tout le contenu avant qu'il ne soit finalisé, garantissant qu'il répond à vos standards.",
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Distribution & Analyse",
      description:
        "Nous aidons à distribuer votre contenu sur tous les canaux et fournissons des analyses de performance détaillées.",
    },
  ]

  return (
    <div className="mx-auto max-w-4xl py-12">
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {index < steps.length - 1 && (
              <div className="absolute left-6 top-10 h-full w-px bg-border" aria-hidden="true" />
            )}
            <div className="flex gap-6">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                {step.icon}
              </div>
              <div className="flex flex-col gap-2 pb-8">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="pt-4 flex items-center text-sm text-primary">
                    <span>Étape suivante</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
