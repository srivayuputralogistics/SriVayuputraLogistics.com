import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const FAQS = [
  {
    q: "What logistics services does Sri Vayuputra Logistics provide?",
    a: "We provide a comprehensive range of logistics services including transportation (feeder, last-mile, urgent), 3PL & 4PL operations, warehouse management and manpower, business development for logistics partners, PET granule and bottle distribution, and retail activation & fabrication infrastructure (RA & FI) for FMCG brands.",
  },
  {
    q: "Do you support 3PL companies as a logistics partner?",
    a: "Yes. We specialize in supporting 3PL and 4PL companies by providing BP (Business Partner) vehicles, ad-hoc fleet, feeder route vehicles, warehouse manpower, and load generation services. We have worked with Rivigo (Mahindra Logistics), Stellar ITS, and RCPL in this capacity.",
  },
  {
    q: "Which regions and states do you operate in?",
    a: "We operate primarily across South India — Karnataka (primary hub), Tamil Nadu, Andhra Pradesh, and Telangana (strong presence). We also have selective operational capability in Kerala for project-based assignments. Key hubs include Bengaluru, Whitefield, Jigani, Hosur, Mangalore, Mysore, Belgaum, Chennai, Tirupur, and Hyderabad.",
  },
  {
    q: "Do you provide warehouse manpower services?",
    a: "Yes. We have provided dedicated warehouse manpower under specific contracts. Notably, we managed ITC's merchandising warehouse operations at Dabaspet Industrial Area, Bengaluru from November 2022 to February 2025 with a team of 40+ workers at peak.",
  },
  {
    q: "Do you supply PET granules and 20-litre PET bottles?",
    a: "Yes, since November 2025 we have diversified into PET trading. We import PET granules from trusted sources and distribute 20-litre PET bottles wholesale across the Bangalore region and South India. This complements our existing logistics expertise and supply network.",
  },
  {
    q: "What types of vehicles do you operate?",
    a: "We operate and supply all vehicle types including Tata Ace, Dost, 407, 16FT containers, 19FT, 20FT, 22FT, 32FT SXL (Small Extra Long), and 32FT MXL (Medium Extra Long) trucks. We handle both own and associate vehicles for different load types and routes.",
  },
  {
    q: "Can you handle emergency or urgent logistics requirements?",
    a: "Absolutely. Emergency logistics support is a key strength of our organization. We have maintained round-the-clock vehicle availability, used alternate routes during blockages, and supported supply chains during the COVID-19 pandemic without interruption. We are available for urgent deployments.",
  },
  {
    q: "How long has Sri Vayuputra Logistics been operating?",
    a: "Sri Vayuputra Logistics was founded on 11 November 2016 by Mr. Srinivas Murthy. We have been in continuous operation since then, achieving a cumulative gross turnover of ₹9.74 Crores across our first 8 financial years (FY 2017–18 to FY 2024–25).",
  },
  {
    q: "Are you MSME and GST registered?",
    a: "Yes. Sri Vayuputra Logistics is registered under MSME (Udyam Registration) and holds valid GST registration. Our certificates are available for download from the Downloads section of this website.",
  },
  {
    q: "What is your ERP system used for?",
    a: "Our in-house ERP system is designed to manage warehousing operations, transport planning and scheduling, billing, and operational monitoring. It provides real-time transparency for our clients and ensures accurate, accountable service delivery.",
  },
];

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div data-ocid="faq.page">
      <section className="gradient-hero py-16 lg:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-xs tracking-widest uppercase">
              FAQ
            </Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">
              Answers to common questions about our logistics services,
              operations, and capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="py-16 lg:py-20 bg-background"
        data-ocid="faq.list_section"
      >
        <div className="container max-w-3xl">
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <motion.div
                key={faq.q.slice(0, 30)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                data-ocid={`faq.item.${i + 1}`}
              >
                <Card
                  className={`bg-card border-border shadow-subtle transition-smooth ${open === i ? "ring-1 ring-primary/30" : ""}`}
                >
                  <CardContent className="p-0">
                    <button
                      type="button"
                      className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                      onClick={() => setOpen(open === i ? null : i)}
                      aria-expanded={open === i}
                      data-ocid={`faq.toggle.${i + 1}`}
                    >
                      <span className="font-semibold text-sm text-foreground leading-snug">
                        {faq.q}
                      </span>
                      {open === i ? (
                        <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      )}
                    </button>
                    {open === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-6 pb-5"
                        data-ocid={`faq.answer.${i + 1}`}
                      >
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
