import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  CheckCircle,
  Globe,
  Package,
  ShieldCheck,
  Truck,
  Warehouse,
} from "lucide-react";
import { motion } from "motion/react";

const ACTIVITIES = [
  {
    icon: Truck,
    title: "Logistics Transport Operations",
    keywords:
      "transportation service South India, fleet outsourcing, feeder services logistics",
    desc: "Our core transport operations span South India with multi-type fleet support. We supply BP (Business Partner) vehicles, ad-hoc vehicles, feeder network vehicles, and micro-delivery solutions to logistics hubs operated by FMCG and 3PL companies.",
    points: [
      "BP vehicle supply for Rivigo Logistics, Stellar Innovative Logistics Solutions Pvt Ltd, Rahul Cargo Pvt Ltd operations",
      "Ad-hoc fleet mobilization on short notice",
      "Feeder route vehicles for inbound/outbound logistics",
      "Early micro-delivery support solutions",
      "Fleet: Tata Ace, Dost, 407, 16FT, 19FT, 20FT, 22FT, 32FT SXL, 32FT MXL",
    ],
  },
  {
    icon: Globe,
    title: "3PL & 4PL Logistics Management",
    keywords:
      "3PL services Bangalore, 4PL logistics India, supply chain partners India",
    desc: "We operate as a third-party and fourth-party logistics provider for leading FMCG and enterprise organizations. Our 3PL services cover planning, execution, partner coordination, and technology integration for full supply chain transparency.",
    points: [
      "3PL operations: transport coordination, hub management, manpower",
      "4PL strategy: supply chain design, vendor selection, performance monitoring",
      "FMCG distribution across 5 South Indian states",
      "ERP-backed operational transparency and reporting",
      "Past 3PL clients: ITC, Rivigo Logistics, Stellar Innovative Logistics Solutions Pvt Ltd, Rahul Cargo Pvt Ltd",
    ],
  },
  {
    icon: Warehouse,
    title: "Warehouse Management & Manpower",
    keywords:
      "warehouse operations Karnataka, manpower for warehouse, warehouse management company",
    desc: "Our warehouse operations division provides dedicated manpower, inventory management, and operational control services. We have managed large merchandising warehouses and continue to support FMCG clients with reliable manpower contracts.",
    points: [
      "Dedicated warehouse manpower contracts",
      "Inventory movement, segregation, and dispatch",
      "Merchandising warehouse management (ITC, Dabaspet)",
      "ERP-based inventory tracking and reporting",
      "Scalable manpower: 10+ workers",
    ],
  },
  {
    icon: BarChart3,
    title: "Business Development for 3PL Partners",
    keywords:
      "logistics business development, load generation, CRM for logistics",
    desc: "A unique service — we help logistics companies grow their business by generating new customers, identifying profitable routes, and managing CRM for load acquisition. This has helped our partners like Stellar Innovative Logistics Solutions Pvt Ltd, Rahul Cargo Pvt Ltd, and Rivigo Logistics expand regionally.",
    points: [
      "Customer acquisition for logistics network operators",
      "Load generation, negotiation, and booking",
      "Route feasibility analysis and expansion consulting",
      "Franchisee model operations (Belgaum for Rivigo Logistics)",
      "CRM support for ongoing logistics client management",
    ],
  },
  {
    icon: Package,
    title: "PET Granule & Bottle Distribution",
    keywords:
      "PET granule importers India, PET bottle wholesalers Bangalore, PET bottle suppliers India",
    desc: "Since November 2025, we have expanded into PET material trading. This includes importing PET granules from trusted international sources and distributing 20-litre PET bottles wholesale across the Bangalore region and beyond.",
    points: [
      "PET granule import from international suppliers",
      "Wholesale distribution of 20-litre PET bottles",
      "Regional PET material supply network",
      "Leveraging existing logistics network for distribution",
      "Serving water bottle manufacturers and refillers",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Retail Activation & Fabrication Infrastructure (RA & FI)",
    keywords: "retail activation South India, fabrication kiosk, shop setup",
    desc: "As an ITC RA & FI Vendor since November 2022, we handle the complete fabrication and installation of retail infrastructure for FMCG brands. This includes kiosks, counters, full shop setups, and merchandising infrastructure.",
    points: [
      "Kiosk design and fabrication",
      "Full shop setups for FMCG retail activation",
      "Counter and shelf infrastructure",
      "On-site installation and project management",
      "ITC RA & FI Vendor designation",
    ],
  },
];

export default function BusinessActivitiesPage() {
  return (
    <div data-ocid="business.page">
      <section className="gradient-hero py-16 lg:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-xs tracking-widest uppercase">
              Business Activities
            </Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
              Our Business Activities
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">
              Detailed overview of our logistics operations, 3PL/4PL services,
              warehouse management, PET distribution, and retail infrastructure
              activities.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="py-16 lg:py-20 bg-background"
        data-ocid="business.activities_section"
      >
        <div className="container max-w-5xl">
          <div className="flex flex-col gap-10">
            {ACTIVITIES.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                data-ocid={`business.activity.${i + 1}`}
              >
                <Card className="bg-card border-border shadow-subtle">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0">
                        <a.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="font-display font-bold text-xl text-foreground mb-1">
                          {a.title}
                        </h2>
                        <p className="text-xs text-muted-foreground italic">
                          {a.keywords}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-5">
                      {a.desc}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {a.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2 text-sm text-foreground"
                        >
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {p}
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

      <section
        className="py-14 bg-primary/5 border-t border-border"
        data-ocid="business.cta_section"
      >
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">
              Ready to Work With Us?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Get in touch to discuss your logistics, warehouse, or PET
              distribution requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                data-ocid="business.contact_button"
              >
                <a href="/contact">Contact Us</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                data-ocid="business.get_in_touch_button"
              >
                <a href="/contact">Get in Touch</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
