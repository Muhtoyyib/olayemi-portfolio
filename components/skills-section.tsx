"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const skillCategories = {
  technical: [
    { name: "Library Management Systems", level: 90 },
    { name: "Digital Cataloging", level: 85 },
    { name: "Database Management", level: 80 },
    { name: "Information Retrieval", level: 88 },
    { name: "Digital Preservation", level: 75 },
    { name: "Web Research", level: 92 },
  ],
  professional: [
    { name: "Reference Services", level: 85 },
    { name: "Collection Development", level: 80 },
    { name: "User Education", level: 88 },
    { name: "Information Literacy Instruction", level: 82 },
    { name: "Records Management", level: 78 },
    { name: "Archival Practices", level: 75 },
  ],
  soft: [
    { name: "Communication", level: 90 },
    { name: "Research & Analysis", level: 88 },
    { name: "Problem Solving", level: 85 },
    { name: "Customer Service", level: 92 },
    { name: "Team Collaboration", level: 87 },
    { name: "Attention to Detail", level: 90 },
  ],
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills & Competencies</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground">
            A comprehensive set of skills developed through academic training and practical experience
          </p>
        </div>

        <Tabs defaultValue="technical" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="technical">Technical</TabsTrigger>
            <TabsTrigger value="professional">Professional</TabsTrigger>
            <TabsTrigger value="soft">Soft Skills</TabsTrigger>
          </TabsList>

          {Object.entries(skillCategories).map(([category, skills]) => (
            <TabsContent key={category} value={category}>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid gap-6">
                    {skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            "MARC Standards",
            "DDC",
            "LCSH",
            "Dublin Core",
            "OPAC",
            "Koha",
            "Microsoft Office",
            "EndNote",
            "Mendeley",
          ].map((tool) => (
            <Badge key={tool} variant="secondary" className="text-sm py-1 px-3">
              {tool}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
