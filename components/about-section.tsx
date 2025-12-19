import { BookOpen, Users, Database, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  {
    icon: BookOpen,
    title: "Information Organization",
    description: "Expert in cataloging, classification, and metadata standards",
  },
  {
    icon: Database,
    title: "Digital Resources",
    description: "Skilled in managing electronic databases and digital archives",
  },
  {
    icon: Users,
    title: "User Services",
    description: "Dedicated to helping patrons access information effectively",
  },
  {
    icon: Lightbulb,
    title: "Research Support",
    description: "Assisting researchers with information retrieval and literacy",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground leading-relaxed mb-6">
            I am <strong className="text-foreground">Aolayemi Abimbola Faruq</strong>, a dedicated Library and
            Information Science student at the prestigious{" "}
            <strong className="text-foreground">University of Ilorin</strong>. My passion lies in bridging the gap
            between information resources and those who need them.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With a strong foundation in information management, digital literacy, and research methodologies, I am
            committed to advancing the field of library science in the digital age. I believe that well-organized
            information is the cornerstone of an enlightened society.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
