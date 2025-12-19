import { Search, BookMarked, GraduationCap, FileText, Archive, Presentation } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Search,
    title: "Research Assistance",
    description:
      "Comprehensive support in locating, evaluating, and utilizing academic resources for research projects and assignments.",
  },
  {
    icon: BookMarked,
    title: "Information Literacy Training",
    description:
      "Educational workshops and tutorials on effective information searching, evaluation, and ethical use of resources.",
  },
  {
    icon: GraduationCap,
    title: "Academic Support",
    description:
      "Guidance on citation styles, bibliography creation, and academic writing assistance for students and researchers.",
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Professional organization, classification, and indexing of documents for easy retrieval and access.",
  },
  {
    icon: Archive,
    title: "Digital Archiving",
    description:
      "Preservation and digitization services for valuable documents, photographs, and historical materials.",
  },
  {
    icon: Presentation,
    title: "Library Consultancy",
    description:
      "Expert advice on setting up personal, school, or organizational libraries with optimal organization systems.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Services Offered</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground">
            Professional library and information services to meet your knowledge needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow border-border hover:border-primary/50">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
