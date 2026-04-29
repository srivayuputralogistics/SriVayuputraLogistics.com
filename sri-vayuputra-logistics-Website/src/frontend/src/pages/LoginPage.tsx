import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Lock, Monitor } from "lucide-react";
import { motion } from "motion/react";

export default function LoginPage() {
  return (
    <div
      data-ocid="login.page"
      className="min-h-[80vh] flex items-center justify-center py-16"
    >
      <div className="container max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-card border-border shadow-elevated">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mx-auto mb-5">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <Badge className="mb-3 text-xs tracking-widest uppercase bg-primary/10 text-primary border-primary/20">
                ERP Portal
              </Badge>
              <h1 className="font-display font-bold text-2xl text-foreground mb-3">
                Access Your Dashboard
              </h1>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                The Sri Vayuputra Logistics ERP system provides operational
                management for transportation, warehouse, billing, and
                monitoring.
              </p>
              <div className="flex flex-col gap-3">
                <Button
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
                  onClick={() =>
                    window.open(
                      "https://erp.srivayuputra.in",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                  data-ocid="login.erp_button"
                >
                  <Monitor className="w-4 h-4 mr-2" />
                  Login to ERP System
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-xs text-muted-foreground">
                  Authorized personnel only. Contact your administrator for
                  access credentials.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
