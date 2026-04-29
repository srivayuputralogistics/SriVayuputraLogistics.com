import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

const TIMELINE = [
  {
    year: "2016",
    title: "Company Founded & ITC Contract",
    desc: "Sri Vayuputra Logistics founded on 11 November 2016 by Mr. Srinivas Murthy A. ITC Ltd transportation contract (South Karnataka) started. Entered 3PL operations with Rivigo Logistics, invited by Mr. Munish Garg.",
    milestones: [
      "Company Registration",
      "ITC Transport Contract",
    ],
  },
  {
    year: "2016",
    title: "Started Journey with Rivigo Logistics As BP ",
    desc: "Entered 3PL operations with Rivigo Logistics, invited by Mr. Munish Garg.",
    milestones: [
      "Rivigo BP Operations Start",
    ],
  },
  {
    year: "2017–2018",
    title: "Rivigo Network - Expansion Phase 1",
    desc: "Expanded Rivigo operations across Bengaluru. Added Whitefield, Mahadevapura, Central (Mysore Road), Jigani, and Anugondanahalli routes. Gross turnover: ₹23.66 Lakhs.",
    milestones: [
      "Whitefield Hub",
      "Mahadevapura Hub",
      "Jigani Operations",
      "₹23.66L Turnover",
    ],
  },
  {
    year: "2018–2019",
    title: "Rivigo Network - Expansion Phase 2 - Peak Operations",
    desc: "Highest Rivigo year — operations expanded to Malur, Hosur, Mangalore, Manipal, and Mysore. Peak turnover year of ₹2.45 Crores with Rivigo as primary client.",
    milestones: [
      "Mangalore Hub",
      "Mysore Hub",
      "Manipal Operations",
      "₹2.45 Cr Peak Turnover",
    ],
  },
  {
    year: "2019",
    title: "Rivigo Network - Belgaum Franchise.",
    desc: "Rivigo Logistics Franchisee operations launched at Belgaum.",
    milestones: [
      "Belgaum Franchise",
    ],
  },
  {
    year: "2019",
    title: "Stellar Innovative Transportation Solution Pvt Ltd - BA Operations",
    desc: "Stellar operations started as BA from Chennai and later in 2020 it was expanded to Tirpur-Coimbatore. Along with the feeders for Chennai - Bangalore  & Chennai - Puducherry and Warehouse Labour's contract for the duration 2019 to 2022. Streamlined operations and maintained services through COVID-19. - Invited by Mr. Narendra Tiwari - Stellar Innovative Logistics Solutions Pvt Ltd (Oct 2019) contracts commenced ",
    milestones: [
      "Chennai Operations",
      "Chennai Warehouse Labour Contract",
      "Tirupur Hub",
      "Feeder Operations",
      "COVID-19 Continuity",
    ],
  },
  {
    year: "2019",
    title: "Rahul Cargo Pvt Ltd",
    desc: "Started the Operations of RCPL from Hyderabad in support and extended to Hoskote, Yeshwanthpur, Bommasandra Branches. Streamlined operations and maintained services through COVID-19. - Invited by Mr.Amarender Singh - Rahul Cargo Pvt Ltd (Nov 2019) contracts commenced",
    milestones: [
      "Hyderabad Operations - In Support",
      "Hoskote Operations",
      "Yeshwanthpur Operations",
      "Bommasandra Operations",
      "COVID-19 Continuity",
    ],
  },

  {
    year: "2020",
    title: "Stellar Innovative Transportation Solution Pvt Ltd - BA Operations - Expanded in Bangalore",
    desc: "Stellar operations expanded as BA at Hoskote & Nelmangala in 2020, with continuation of reverse freeder from Bangalore (Nelmangala) to Chennai. Streamlined operations and maintained services through COVID-19. - Invited by Roopesh Shetty",
    milestones: [
      "Hoskote Operations",
      "Nelmangala Operations",
      "Reverse Feeder",
      "COVID-19 Continuity",
    ],
  },
  {
    year: "2020",
    title: "RCPL Multi-State Expansion",
    desc: "RCPL Operations from Hoskote, Yeshwanthpur, Bommasandra were terminated and single location of Makali was started and operations expanding to Hosur and Chennai. Along with the Feeder for Makali to Hosur and reverse feeder operation from Hosur to Makali. Streamlined operations and maintained services through COVID-19.",
    milestones: [
      "Makali Operations",
      "Hosur Operations",
      "Chennai Operations",
      "Feeder - Reverse Feeder Operations",
      "COVID-19 Continuity",
    ],
  },
  {
    year: "2022 ",
    title: "ITC RA & FI Vendor Appointment",
    desc: "Appointed as ITC Retail Activation & Fabrication Infrastructure (RA & FI) vendor. Began fabrication of kiosks, full shop setups, counters, and retail activation infrastructure for ITC across South Karnataka. -Invited by Mr. Chetan SM -  Vendorship commenced from November 2022.",
    milestones: [
      "ITC RA & FI Vendor",
      "Kiosk Fabrication",
      "Retail Activation",
      "Shop Fitouts",
    ],
  },
  {
    year: "2022–2025",
    title: "ITC Merchandising Warehouse",
    desc: "Managed ITC's merchandising warehouse operations from Dabaspet Industrial Area, Bengaluru from November 2022 to February 2025. Led warehouse manpower, inventory management, and operational control. - Offered by Mr. Sanil Bhadran",
    milestones: [
      "Dabaspet Warehouse",
      "Merchandising Ops",
      "40+ Manpower",
      "2.5 Year Contract",
    ],
  },
  {
    year: "2025",
    title: "PET Trading Division Launch",
    desc: "Diversified into PET material business from November 2025 — importing PET granules from international sources and building a wholesale distribution network for 20-litre PET bottles across the Bangalore region.",
    milestones: [
      "PET Granule Import",
      "20L Bottle Distribution",
      "New Revenue Stream",
      "Business Diversification",
    ],
  },
];

export default function TimelinePage() {
  return (
    <div data-ocid="timeline.page">
      <section className="gradient-hero py-16 lg:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-xs tracking-widest uppercase">
              Timeline
            </Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
              Our Journey
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">
              From founding in 2016 to a multi-state, multi-service logistics
              organization — a story of growth, resilience, and trusted
              partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="py-16 lg:py-20 bg-background"
        data-ocid="timeline.events_section"
      >
        <div className="container max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[88px] top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="flex flex-col gap-8">
              {TIMELINE.map((event, i) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex flex-col md:flex-row gap-4"
                  data-ocid={`timeline.event.${i + 1}`}
                >
                  {/* Year marker */}
                  <div className="flex md:flex-col items-center gap-3 md:gap-0 md:w-24 flex-shrink-0">
                    <span className="font-display font-bold text-sm text-primary bg-primary/10 rounded-md px-2.5 py-1.5 whitespace-nowrap md:text-right md:w-full text-center">
                      {event.year}
                    </span>
                    <div className="hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-primary border-4 border-background mt-2 -ml-1.5 relative z-10" />
                  </div>

                  {/* Content */}
                  <Card className="flex-1 bg-card border-border shadow-subtle hover-lift">
                    <CardContent className="p-5">
                      <h3 className="font-display font-semibold text-base text-foreground mb-2">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        {event.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {event.milestones.map((m) => (
                          <Badge
                            key={m}
                            variant="secondary"
                            className="text-xs"
                          >
                            {m}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
