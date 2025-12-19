import Image from "next/image"
import Link from "next/link"
import { ArrowDown, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-primary font-medium mb-2">Welcome to my portfolio</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Aolayemi Abimbola Faruq
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">Library & Information Science Professional</p>
            <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Passionate about organizing, preserving, and disseminating knowledge to empower individuals and
              communities. Currently pursuing a degree in Library and Information Science at the University of Ilorin.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#about">
                  Learn More
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                <Image
                  src="/images/image.png"
                  alt="Aolayemi Abimbola Faruq - Library and Information Science Professional"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
