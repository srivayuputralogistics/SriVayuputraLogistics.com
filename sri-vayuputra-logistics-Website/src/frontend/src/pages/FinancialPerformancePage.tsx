import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

const YEARLY_DATA = [
  { year: "2016–2017", total: 1097303 },
  { year: "2017–2018", total: 1268900 },
  { year: "2018–2019", total: 24583723 },
  { year: "2019–2020", total: 30276199 },
  { year: "2020–2021", total: 22005092 },
  { year: "2021–2022", total: 4556036 },
  { year: "2022–2023", total: 6871675 },
  { year: "2023–2024", total: 6225539 },
  { year: "2024–2025", total: 6438217 },
  { year: "2025–2026", total: 13751026.51 },
];

const CLIENT_TOTALS = [
  {
    client: "Rivigo Logistics (Consolidated)",
    total: 46691062,
    color: "bg-primary",
  },
  { client: "ITC Limited", total: 22353469, color: "bg-chart-2" },
  { client: "RCPL (Consolidated)", total: 18181767, color: "bg-accent" },
  { client: "Stellar Innovative Transportation Solution Pvt Ltd", total: 14492725, color: "bg-chart-3" },
];

function formatINR(n: number): string {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`;
  if (n >= 1000) return `₹${(n / 1000).toFixed(1)}K`;
  return `₹${n.toLocaleString("en-IN")}`;
}

function formatINRFull(n: number): string {
  return `₹${n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export default function FinancialPerformancePage() {
  const cumulativeTotal = YEARLY_DATA.reduce((sum, d) => sum + d.total, 0);
  const maxTotal = Math.max(...YEARLY_DATA.map((d) => d.total));

  return (
    <div data-ocid="financial.page">
      <section className="gradient-hero py-16 lg:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-xs tracking-widest uppercase">
              Financial Performance
            </Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
              Financial Performance 2016–2026
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">
              Gross turnover data across 9+ financial years demonstrating
              consistent growth and enterprise-scale operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Summary Cards */}
      <section
        className="py-12 bg-background"
        data-ocid="financial.summary_section"
      >
        <div className="container">
          {/* Cumulative Card */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="lg:col-span-1"
            >
              <Card className="bg-primary text-primary-foreground border-0 shadow-elevated h-full">
                <CardContent className="p-5 text-center flex flex-col items-center justify-center h-full">
                  <div className="font-display font-bold text-2xl mb-1">
                    ₹{(cumulativeTotal / 10000000).toFixed(2)} Cr
                  </div>
                  <div className="text-primary-foreground/80 text-xs">
                    Cumulative Gross Turnover (2016–2026)
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            {CLIENT_TOTALS.map((c, i) => (
              <motion.div
                key={c.client}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.1 }}
              >
                <Card className="bg-card border-border shadow-subtle h-full">
                  <CardContent className="p-5 text-center flex flex-col items-center justify-center h-full">
                    <div className="font-display font-bold text-xl text-foreground mb-1">
                      {formatINR(c.total)}
                    </div>
                    <div className="text-muted-foreground text-xs leading-tight">
                      {c.client}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bar Chart */}
          <div className="mb-10">
            <h2 className="font-display font-semibold text-lg text-foreground mb-6">
              Year-on-Year Gross Turnover
            </h2>
            <div className="flex flex-col gap-3">
              {YEARLY_DATA.map((d, i) => (
                <motion.div
                  key={d.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-4"
                  data-ocid={`financial.bar.${i + 1}`}
                >
                  <span className="text-sm font-mono text-muted-foreground w-24 flex-shrink-0">
                    {d.year}
                  </span>
                  <div className="flex-1 h-8 bg-muted/50 rounded overflow-hidden relative">
                    <div
                      className="h-full bg-primary rounded transition-smooth"
                      style={{ width: `${(d.total / maxTotal) * 100}%` }}
                    />
                    <span className="absolute inset-y-0 left-2 flex items-center text-xs font-semibold text-primary-foreground">
                      {formatINR(d.total)}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* YOY Summary Table */}
          <div data-ocid="financial.table">
            <h2 className="font-display font-semibold text-lg text-foreground mb-4">
              Year-on-Year Gross Turnover Summary
            </h2>
            <div className="overflow-x-auto rounded-xl border border-border shadow-subtle">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left px-4 py-3 font-semibold font-display">
                      Financial Year
                    </th>
                    <th className="text-right px-4 py-3 font-semibold font-display">
                      Gross Turnover
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {YEARLY_DATA.map((d, i) => (
                    <tr
                      key={d.year}
                      className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}
                      data-ocid={`financial.row.${i + 1}`}
                    >
                      <td className="px-4 py-3 font-semibold text-foreground">
                        {d.year}
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-foreground">
                        {formatINRFull(d.total)}
                      </td>
                    </tr>
                  ))}
                  {/* Grand Total */}
                  <tr className="bg-primary text-primary-foreground font-bold">
                    <td className="px-4 py-3 font-display font-bold">
                      Cumulative Gross Turnover (2016–2026)
                    </td>
                    <td className="px-4 py-3 text-right font-mono font-bold">
                      {formatINRFull(cumulativeTotal)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              * All figures represent Gross Turnover. Data period: FY 2016–17 to
              FY 2025–26.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
