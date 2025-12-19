import Link from "next/link"
import { BookOpen, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">Olayemi A. Faruq</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Library and Information Science Professional dedicated to organizing, preserving, and disseminating
              knowledge for the benefit of society.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Skills", "Services", "Education", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="mailto:21-52hj150@students.unilorin.edu.ng" className="hover:text-primary transition-colors">
                  21-52hj150@students.unilorin.edu.ng
                </a>
              </li>
              <li>
                <a href="tel:+2349064229863" className="hover:text-primary transition-colors">
                  +234 906 422 9863
                </a>
              </li>
              <li>University of Ilorin, Kwara State</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center">
          <p className="text-sm text-background/70 flex items-center justify-center gap-1">
            © {currentYear} Olayemi Abimbola Faruq. Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" />{" "}
            for LIS 403
          </p>
        </div>
      </div>
    </footer>
  )
}
