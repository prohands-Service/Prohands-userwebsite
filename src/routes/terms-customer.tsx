import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import logoImg from "@/assets/prohands-logo.jpg";

export const Route = createFileRoute("/terms-customer")({
  component: TermsCustomer,
});

function TermsCustomer() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:py-3.5">
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-90">
            <img src={logoImg} alt="ProHands" className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-full object-cover shadow-sm" />
            <span className="font-display text-base sm:text-lg font-semibold tracking-tight text-silver">
              Pro<span className="text-gradient-neon">Hands</span>
            </span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-10 text-center">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-silver">
            Terms and <span className="text-gradient-neon">Conditions</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            For Customers
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <p>
            These Terms and Conditions govern your use of the ProHands platform to book home-based services. By using our Services, you agree to these terms.
          </p>

          <section className="space-y-4 pt-6 border-t border-border/40">
            <h2 className="text-2xl font-bold text-silver">1. Services Provided</h2>
            <p>
              ProHands enables you to book services with independent Service Professionals. We facilitate the booking and payments, but we do not provide the services ourselves. Service Professionals are solely responsible for the quality and execution of the work.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-border/40">
            <h2 className="text-2xl font-bold text-silver">2. Account Creation</h2>
            <p>
              You must be at least 18 years old to create an account. You are responsible for providing accurate contact information and keeping your account details secure.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-border/40">
            <h2 className="text-2xl font-bold text-silver">3. User Content & Privacy</h2>
            <p>
              We collect and use your personal data in accordance with our Privacy Policy to enhance your experience. We may request reviews from you about Service Professionals. You grant us permission to use your reviews and feedback for quality control and promotional purposes.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-border/40">
            <h2 className="text-2xl font-bold text-silver">4. Bookings & Cancellations</h2>
            <p>
              You can request services based on available slots. We will confirm your booking once a Service Professional is assigned. Bookings cancelled before confirmation are not charged, but cancellations after confirmation may incur a fee.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-border/40">
            <h2 className="text-2xl font-bold text-silver">5. Pricing & Payments</h2>
            <p>
              You are responsible for paying the service charges along with ProHands's convenience fees and any applicable taxes. Payments can be made via credit/debit cards, net banking, UPI, or cash upon completion. Prices are final and may be subject to surge pricing during periods of high demand.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
