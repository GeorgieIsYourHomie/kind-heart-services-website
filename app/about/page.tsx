import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, HomeIcon, Award } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We treat every resident with kindness, empathy, and genuine care.",
  },
  {
    icon: Users,
    title: "Family-Centered",
    description: "We maintain close relationships with families and encourage involvement.",
  },
  {
    icon: HomeIcon,
    title: "Home Environment",
    description: "Our residence feels like home, not an institution.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards of care and professionalism.",
  },
]

const team = [
  {
    name: "Linda Johnson",
    role: "Founder & Director",
    bio: "With over 20 years in senior care, Linda founded Kind Heart Services to provide the personalized attention she believes every senior deserves.",
  },
  {
    name: "Maria Garcia, RN",
    role: "Director of Nursing",
    bio: "Maria brings 15 years of nursing experience and a passion for creating individualized care plans that support both health and happiness.",
  },
  {
    name: "James Patterson",
    role: "Lead Caregiver",
    bio: "James has been with our team for 8 years, known for his patience, humor, and dedication to making every day special for our residents.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-accent/20 via-background to-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">About Kind Heart Services</h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                A family business dedicated to providing compassionate, personalized care in a warm and welcoming home
                environment.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center text-balance">Our Mission</h2>
              <Card className="border-2">
                <CardContent className="pt-8 pb-6">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    At Kind Heart Services, our mission is simple yet profound: to provide seniors with a dignified,
                    comfortable living experience where they feel valued, safe, and truly at home.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    We believe that quality care goes beyond meeting physical needs—it's about fostering connection,
                    maintaining independence, and honoring the unique story of each individual we serve.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">These principles guide everything we do</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="text-center">
                  <CardContent className="pt-8 pb-6">
                    <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dedicated professionals who care deeply about our residents
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member) => (
                <Card key={member.name}>
                  <CardContent className="pt-8 pb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
                    <p className="text-sm text-primary text-center mb-4">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed text-center">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
