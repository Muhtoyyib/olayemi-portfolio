import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground">Academic journey and qualifications</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="relative overflow-hidden border-l-4 border-l-primary">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl text-foreground">
                    Bachelor of Science in Library and Information Science
                  </CardTitle>
                  <p className="text-primary font-medium mt-1">University of Ilorin</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  2021 - Present
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Ilorin, Kwara State, Nigeria
                </span>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span>Matric Number: 21/52HJ150</span>
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <h4 className="font-medium text-foreground mb-2">Key Coursework:</h4>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <li>• Information Organization</li>
                  <li>• Digital Libraries</li>
                  <li>• Research Methods</li>
                  <li>• Collection Development</li>
                  <li>• Information Retrieval</li>
                  <li>• Records Management</li>
                  <li>• Knowledge Management</li>
                  <li>• ICT in Libraries</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
