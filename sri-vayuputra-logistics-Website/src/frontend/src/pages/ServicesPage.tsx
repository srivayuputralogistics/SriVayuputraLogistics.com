import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  CheckCircle,
  ChevronRight,
  Globe,
  Package,
  ShieldCheck,
  Truck,
  Warehouse,
} from "lucide-react";
import { motion } from "motion/react";

const SERVICES = [
  {
    icon: Truck,
    title: "Transportation Services",
    desc: "Reliable and scalable transport solutions across South India.",
    details: [
      "Feeder vehicle operations and last-mile delivery",
      "Urgent & ad-hoc vehicle deployment",
      "Business Partner (BP) vehicle supply",
      "Fleet types: Tata Ace, Dost, 407, 16FT, 19FT, 20FT, 22FT, 32FT SXL & MXL",
      "Interstate and intra-city route coverage",
    ],
    badge: "Core Service",
  },
  {
    icon: Globe,
    title: "3PL & 4PL Operations",
    desc: "Complete logistics coordination including planning, execution, and partner support.",
    details: [
      "Third-party logistics (3PL) management",
      "Fourth-party logistics (4PL) strategic oversight",
      "Supply chain planning and vendor coordination",
      "FMCG distribution network support",
      "Multi-hub operations management",
    ],
    badge: "Core Service",
  },
  {
    icon: Warehouse,
    title: "Warehouse Operations",
    desc: "Professional manpower supply, inventory movement, and operational control.",
    details: [
      "Warehouse manpower supply (dedicated contracts)",
      "Inventory movement and control",
      "Merchandising warehouse management",
      "Operational monitoring via ERP",
      "Past operations: ITC Merchandising Warehouse, Dabaspet",
    ],
    badge: "Core Service",
  },
  {
    icon: BarChart3,
    title: "Business Development for 3PL",
    desc: "We generate customers, loads, and operational growth for partnered logistics companies.",
    details: [
      "Customer acquisition for logistics firms",
      "Load generation and route optimization",
      "Partner network expansion",
      "CRM for logistics clients",
      "Franchisee model management (e.g., Belgaum)",
    ],
    badge: "Growth Service",
  },
  {
    icon: Package,
    title: "PET Trading & Distribution",
    desc: "Import and supply of PET granules and 20-litre PET bottles. (Since Nov 2025)",
    details: [
      "Import of PET granules from trusted sources",
      "Wholesale distribution of 20-litre PET bottles",
      "Regional PET material distribution network",
      "Bangalore-based supply hub",
      "Complementary to logistics expertise",
    ],
    badge: "New Service",
  },
  {
    icon: ShieldCheck,
    title: "Retail Activation & Fabrication (RA & FI)",
    desc: "Kiosks, counters, and retail infrastructure setups for FMCG brands.",
    details: [
      "Fabrication of retail kiosks and counters",
      "Full shop setups and store fitouts",
      "Retail activation works",
      "ITC RA & FI vendor since 10 Nov 2022",
      "Merchandising infrastructure needs",
    ],
    badge: "Specialized Service",
  },
];

export default function ServicesPage() {
  return (
    <div data-ocid="services.page">
      <section className="gradient-hero py-16 lg:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-xs tracking-widest uppercase">
              Services
            </Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
              Our Service Portfolio
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">
              From transportation to PET trading — a full spectrum of logistics
              and operational services for FMCG, 3PL, and enterprise clients.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="py-16 lg:py-20 bg-background"
        data-ocid="services.list_section"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-ocid={`services.item.${i + 1}`}
              >
                <Card className="h-full bg-card border-border shadow-subtle hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <Badge variant="secondary" className="text-xs mb-1">
                            {service.badge}
                          </Badge>
                          <h3 className="font-display font-semibold text-base text-foreground">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {service.details.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-hero py-14" data-ocid="services.cta_section">
        <div className="container text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">
            Need a Custom Logistics Solution?
          </h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            Contact our team to discuss tailored transport, 3PL, or PET supply
            requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-smooth"
              data-ocid="services.contact_button"
            >
              <Link to="/contact">
                Get in Touch <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10 transition-smooth"
              data-ocid="services.business_button"
            >
              <Link to="/business-activities">Business Activities</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
