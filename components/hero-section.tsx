import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent/20 via-background to-muted/30">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-balance mb-6 leading-tight">
            Personalized Assisted Living in a Cozy Home
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Experience compassionate care in a warm, family-run environment. We provide individualized support that
            honors dignity, independence, and wellbeing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Schedule a Tour
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">Learn About Our Services</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
    </section>
  )
}
