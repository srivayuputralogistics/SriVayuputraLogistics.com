import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContact } from "../hooks/useBackend";

const REQUIREMENTS = [
  "Transportation Services",
  "3PL & 4PL Operations",
  "Warehouse Manpower",
  "PET Granules / PET Bottles",
  "Retail Activation / Fabrication",
  "Business Development / Load Generation",
  "Emergency Logistics Support",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { mutate: submitContact, isPending } = useSubmitContact();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.requirement) {
      toast.error(
        "Please fill in required fields: Name, Phone, and Requirement.",
      );
      return;
    }
    submitContact(form, {
      onSuccess: () => {
        setSubmitted(true);
        toast.success(
          "Your enquiry has been submitted! We'll be in touch shortly.",
        );
      },
      onError: () => {
        toast.error(
          "Submission failed. Please try WhatsApp or call us directly.",
        );
      },
    });
  };

  return (
    <div data-ocid="contact.page">
      <section className="gradient-hero py-16 lg:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-xs tracking-widest uppercase">
              Contact Us
            </Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
              Get in Touch
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">
              Ready to discuss your logistics requirements? Reach out to our
              team and we'll respond promptly.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="py-16 lg:py-20 bg-background"
        data-ocid="contact.main_section"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-display font-semibold text-xl text-foreground mb-6">
                Contact Information
              </h2>
              <div className="flex flex-col gap-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground mb-0.5">
                      Address
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Kumarswamy Layout, Rayaradoddi,
                      <br />
                      Ramanagara – 562159
                      <br />
                      Bangalore South, Karnataka, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground mb-0.5">
                      Phone
                    </div>
                    <a
                      href="tel:+918310008008"
                      className="text-muted-foreground text-sm hover:text-primary transition-smooth"
                    >
                      +91 831 000 8008
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground mb-0.5">
                      Email
                    </div>
                    <span className="text-muted-foreground text-sm">
                      info@srivayuputra.in
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground mb-0.5">
                      Business Hours
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Mon – Sat: 9:00 AM – 6:00 PM
                      <br />
                      Emergency support available 24/7
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/40 rounded-xl p-4 border border-border">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Quick Connect
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://wa.me/918310008008?text=Hello%2C%20I%20would%20like%20to%20discuss%20logistics%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="contact.whatsapp_button"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-smooth bg-[var(--whatsapp)] hover:opacity-90"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-white flex-shrink-0"
                      role="img"
                      aria-label="WhatsApp"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                  <a
                    href="tel:+918310008008"
                    data-ocid="contact.call_button"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                  data-ocid="contact.success_state"
                >
                  <CheckCircle className="w-14 h-14 text-primary mb-4" />
                  <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                    Enquiry Submitted!
                  </h3>
                  <p className="text-muted-foreground max-w-sm">
                    Thank you for reaching out. Our team will contact you within
                    24 hours. For urgent needs, please call or WhatsApp us
                    directly.
                  </p>
                  <Button
                    className="mt-6 bg-primary text-primary-foreground"
                    onClick={() => setSubmitted(false)}
                    data-ocid="contact.new_enquiry_button"
                  >
                    Submit Another Enquiry
                  </Button>
                </motion.div>
              ) : (
                <Card className="bg-card border-border shadow-subtle">
                  <CardContent className="p-6 lg:p-8">
                    <h2 className="font-display font-semibold text-xl text-foreground mb-6">
                      Send an Enquiry
                    </h2>
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-5"
                      data-ocid="contact.form"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <Label htmlFor="name" className="text-sm font-medium">
                            Full Name{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="name"
                            placeholder="Rajesh Kumar"
                            value={form.name}
                            onChange={(e) =>
                              setForm((f) => ({ ...f, name: e.target.value }))
                            }
                            required
                            data-ocid="contact.name_input"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <Label
                            htmlFor="phone"
                            className="text-sm font-medium"
                          >
                            Phone Number{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={form.phone}
                            onChange={(e) =>
                              setForm((f) => ({ ...f, phone: e.target.value }))
                            }
                            required
                            data-ocid="contact.phone_input"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="rajesh@company.com"
                          value={form.email}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, email: e.target.value }))
                          }
                          data-ocid="contact.email_input"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <Label
                          htmlFor="requirement"
                          className="text-sm font-medium"
                        >
                          Service Required{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Select
                          value={form.requirement}
                          onValueChange={(v) =>
                            setForm((f) => ({ ...f, requirement: v }))
                          }
                          required
                        >
                          <SelectTrigger
                            id="requirement"
                            data-ocid="contact.requirement_select"
                          >
                            <SelectValue placeholder="Select a service..." />
                          </SelectTrigger>
                          <SelectContent>
                            {REQUIREMENTS.map((r) => (
                              <SelectItem key={r} value={r}>
                                {r}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <Label
                          htmlFor="message"
                          className="text-sm font-medium"
                        >
                          Message / Details
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Describe your logistics requirement — routes, volumes, timelines, or any specific needs..."
                          value={form.message}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, message: e.target.value }))
                          }
                          rows={4}
                          data-ocid="contact.message_textarea"
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isPending}
                        className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
                        data-ocid="contact.submit_button"
                      >
                        {isPending ? "Submitting..." : "Submit Enquiry"}
                      </Button>
                      {isPending && (
                        <div
                          className="text-sm text-muted-foreground text-center"
                          data-ocid="contact.loading_state"
                        >
                          Submitting your enquiry...
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
