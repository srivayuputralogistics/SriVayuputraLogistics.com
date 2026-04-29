import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const CLIENTS = [
  {
    name: "ITC Limited",
    category: "FMCG Giant",
    period: "2016 – Present",
    desc: "Long-term transportation services across South Karnataka. Managed merchandising warehouse at Dabaspet (Nov 2022 – Feb 2025). Certified RA & FI vendor since Nov 2022 for kiosk fabrication, shop setups, and retail activation.",
    services: ["Transportation", "Warehouse Management", "RA & FI Fabrication"],
    highlight: "₹2.23 Cr+ Revenue",
  },
  {
    name: "Rivigo Logistics",
    category: "Logistics Major",
    period: "Dec 2016 – 2020",
    desc: "Key BP vehicle supplier for South India logistics network. Operations spanning Whitefield, Mahadevapura, Jigani, Hosur, Mangalore, Manipal, Mysore, and Belgaum (franchisee).",
    services: [
      "BP Vehicles",
      "Feeder Routes",
      "Micro-Delivery",
      "Belgaum Franchise",
    ],
    highlight: "₹4.66 Cr+ Revenue",
  },
  {
    name: "Stellar Innovative Logistics Solutions Pvt Ltd",
    category: "Logistics Provider",
    period: "Oct 2019 – 2022",
    desc: "Business Associate vehicles, feeder transport, and warehouse manpower contracts. Operations from Bangalore expanded to Chennai, Tirupur, and Coimbatore with sister concerns.",
    services: ["BA Vehicles", "Feeder Routes", "Warehouse Manpower"],
    highlight: "₹1.44 Cr+ Revenue",
  },
  {
    name: "Rahul Cargo Pvt Ltd",
    category: "Cargo Logistics",
    period: "Nov 2019 – 2022",
    desc: "BA vehicles and feeder vehicles across Hyderabad, Hoskote, Yeshwanthpur, Bommasandra, Makali, and Hosur hubs.",
    services: ["BA Vehicles", "Feeder Network", "Multi-Hub Operations"],
    highlight: "₹1.81 Cr+ Revenue",
  },
  {
    name: "Sical Logistics",
    category: "Logistics Company",
    period: "2019–2020",
    desc: "Interstate operations support during peak periods. Provided specialized vehicle capacity and route coverage.",
    services: ["Interstate Transport", "Emergency Support"],
    highlight: "₹21.75 L Revenue",
  },
  {
    name: "GATI-Kintetsu Express",
    category: "Express Logistics",
    period: "Occasional",
    desc: "Emergency and peak-demand logistics support including vehicles and routing assistance.",
    services: ["Emergency Support", "Vehicle Supply"],
    highlight: "Route Support",
  },
  {
    name: "Snapdeal",
    category: "E-Commerce",
    period: "2021–2022",
    desc: "Last-mile delivery support for e-commerce order fulfillment in South Karnataka.",
    services: ["Last-Mile Delivery"],
    highlight: "Route Support",
  },
  {
    name: "Nasit Logistics",
    category: "Regional Logistics",
    period: "2019–2020",
    desc: "Emergency and specialized vehicle support during operational surges.",
    services: ["Emergency Vehicle Supply"],
    highlight: "Route Support",
  },
  {
    name: "Reach Logistics",
    category: "Logistics Partner",
    period: "Occasional",
    desc: "Provided route support and vehicle deployment for critical delivery corridors across South India.",
    services: ["Route Support", "Vehicle Deployment"],
    highlight: "Route Support",
  },
  {
    name: "Tech Route Logistics",
    category: "Logistics Partner",
    period: "Occasional",
    desc: "Emergency vehicle deployment and route support for time-sensitive freight movements.",
    services: ["Emergency Support", "Route Support"],
    highlight: "Route Support",
  },
];

export default function ClientsPage() {
  return (
    <div data-ocid="clients.page">
      <section className="gradient-hero py-16 lg:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-xs tracking-widest uppercase">
              Clients & Partners
            </Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
              Our Clients &amp; Partners
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">
              Trusted by leading FMCG companies, major logistics providers, and
              e-commerce platforms across South India.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="py-16 lg:py-20 bg-background"
        data-ocid="clients.list_section"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CLIENTS.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-ocid={`clients.item.${i + 1}`}
              >
                <Card className="h-full bg-card border-border shadow-subtle hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0">
                          <Building2 className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-base text-foreground">
                            {client.name}
                          </h3>
                          <div className="flex items-center gap-2 mt-0.5">
                            <Badge variant="secondary" className="text-xs">
                              {client.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {client.period}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-primary/10 text-primary border-primary/20 text-xs flex-shrink-0 ml-2">
                        {client.highlight}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {client.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {client.services.map((s) => (
                        <div
                          key={s}
                          className="flex items-center gap-1 text-xs text-foreground bg-muted/60 rounded px-2 py-1"
                        >
                          <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                          {s}
                        </div>
                      ))}
                    </div>
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
