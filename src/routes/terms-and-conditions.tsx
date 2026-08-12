import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Download } from "lucide-react";
import logoImg from "@/assets/prohands-logo.jpg";
import { useRef, useState, useEffect } from "react";
import jsPDF from "jspdf";

export const Route = createFileRoute("/terms-and-conditions")({
  component: TermsAndConditions,
});

const serviceProviderTerms = [
  {
    title: "1. Acceptance of Terms",
    content: "By registering as a Service Provider on our platform, you agree to comply with these Terms & Conditions. These terms govern your access to and use of the platform and the services offered through it. If you do not agree with any part of these Terms, you should not register or continue using the platform."
  },
  {
    title: "2. Registration & Eligibility",
    content: "To register as a Service Provider, you must:\n• Be at least 18 years of age.\n• Provide accurate, complete, and up-to-date personal information.\n• Submit valid identification and any documents required for verification.\n• Hold all licences, certifications, or permits required to perform your services, where applicable.\nThe platform reserves the right to verify your information and reject, suspend, or terminate any account that fails to meet our verification requirements."
  },
  {
    title: "3. Account Responsibility",
    content: "You are responsible for maintaining the confidentiality of your account credentials.\nYou agree to:\n• Keep your login details secure.\n• Not share your account with any other individual.\n• Notify the platform immediately if you suspect any unauthorized use of your account.\nYou are responsible for all activities carried out using your account."
  },
  {
    title: "4. Service Obligations",
    content: "As a Service Provider, you agree to:\n• Deliver services professionally and safely.\n• Arrive at the customer's location on time.\n• Complete the assigned work with reasonable care and skill.\n• Use proper tools, equipment, and materials.\n• Follow all applicable laws and safety regulations while performing services.\nYou are solely responsible for the quality and completion of the services you provide."
  },
  {
    title: "5. Booking & Job Acceptance",
    content: "Service requests are assigned based on availability.\nOnce you accept a booking, you agree to:\n• Perform the service at the scheduled date and time.\n• Communicate promptly with the customer if delays occur.\n• Complete the service unless prevented by unavoidable circumstances.\nRepeated cancellations, no-shows, or failure to complete accepted jobs may result in suspension or termination of your account."
  },
  {
    title: "6. Pricing & Payments",
    content: "The service charges displayed on the platform shall apply unless additional work is requested and approved by the customer before commencement.\nPayments will be processed according to the platform's payment policy.\nThe platform may deduct applicable commissions, service charges, or other agreed fees before releasing payments.\nService Providers must not request or accept unauthorized additional payments from customers."
  },
  {
    title: "7. Professional Conduct",
    content: "While using the platform, Service Providers must:\n• Treat customers respectfully.\n• Maintain professional behaviour at all times.\n• Respect customer privacy and property.\n• Avoid abusive, threatening, discriminatory, or inappropriate conduct.\n• Avoid any fraudulent or illegal activities.\nFailure to maintain professional standards may result in immediate suspension or permanent removal from the platform."
  },
  {
    title: "8. Customer Complaints",
    content: "Customers may report complaints regarding:\n• Poor workmanship\n• Unprofessional behaviour\n• Delayed arrival\n• Failure to complete services\n• Damage to property\n• Safety concerns\nThe platform reserves the right to investigate complaints and take appropriate action, including warnings, temporary suspension, or permanent account termination."
  },
  {
    title: "9. Liability",
    content: "The platform acts only as an intermediary connecting customers with independent Service Providers.\nEach Service Provider is solely responsible for:\n• The quality of work performed.\n• Compliance with applicable laws.\n• Safety while performing services.\n• Any damage or loss caused by negligence or misconduct."
  },
  {
    title: "10. Suspension & Termination",
    content: "The platform may suspend or permanently terminate your account without prior notice if you:\n• Provide false information.\n• Violate these Terms & Conditions.\n• Receive repeated verified customer complaints.\n• Engage in fraudulent, illegal, or unethical activities.\n• Misuse the platform."
  },
  {
    title: "11. Privacy & Confidentiality",
    content: "Customer information received through the platform must be used solely for completing booked services.\nYou must not:\n• Share customer information with third parties.\n• Store customer information for personal use.\n• Contact customers for unrelated purposes without their consent."
  },
  {
    title: "12. Amendments",
    content: "The platform reserves the right to update these Terms & Conditions at any time.\nContinued use of the platform after any updates constitutes acceptance of the revised Terms."
  }
];

const customerTerms = [
  {
    title: "1. Acceptance of Terms",
    content: "By accessing or using our platform, you agree to comply with these Terms & Conditions.\nIf you do not agree with these Terms, please discontinue the use of the platform."
  },
  {
    title: "2. Account Registration",
    content: "To use certain features of the platform, you may be required to create an account.\nYou agree to:\n• Provide accurate and complete information.\n• Keep your account credentials confidential.\n• Update your information whenever necessary.\n• Notify the platform immediately of any unauthorized access.\nYou are responsible for all activities performed through your account."
  },
  {
    title: "3. Booking Services",
    content: "Customers may browse and book services available on the platform.\nBookings are subject to Service Provider availability.\nThe platform reserves the right to reschedule or cancel bookings if a Service Provider becomes unavailable or due to unforeseen circumstances.\nBooking confirmation will be provided through the platform."
  },
  {
    title: "4. Pricing & Payments",
    content: "Service charges displayed during booking are applicable to the selected service.\nIf additional work is required after the service has commenced, the Service Provider must obtain your approval before proceeding.\nPayments may be made using the payment methods available on the platform.\nAll payments should be completed according to the platform's payment policy."
  },
  {
    title: "5. Cancellation & Rescheduling",
    content: "Customers may cancel or reschedule bookings through the platform.\nCancellation charges may apply depending on the timing of the cancellation and the status of the booking.\nEligible refunds, if any, will be processed in accordance with the platform's refund policy."
  },
  {
    title: "6. Customer Responsibilities",
    content: "Customers agree to:\n• Provide accurate address and contact information.\n• Ensure safe access to the service location.\n• Maintain a safe environment for the Service Provider.\n• Treat Service Providers with courtesy and respect.\n• Secure valuable belongings before the service begins.\nThe platform or Service Provider may refuse service if the working environment is considered unsafe."
  },
  {
    title: "7. Service Completion & Complaints",
    content: "Customers are encouraged to inspect the completed service before confirming completion.\nIf you experience any issues with the service, you should report them through the platform within a reasonable time.\nThe platform will review complaints and may assist in resolving disputes between customers and Service Providers."
  },
  {
    title: "8. Prohibited Activities",
    content: "Customers must not:\n• Provide false or misleading information.\n• Make fraudulent bookings.\n• Harass, threaten, or abuse Service Providers.\n• Use the platform for unlawful purposes.\n• Attempt to misuse or interfere with the operation of the platform.\nViolation of these Terms may result in suspension or permanent termination of your account."
  },
  {
    title: "9. Privacy",
    content: "Your personal information will be collected and processed in accordance with our Privacy Policy.\nInformation is used only for:\n• Booking services\n• Processing payments\n• Customer support\n• Improving platform services\n• Legal or regulatory compliance\nYour information will not be shared except as required for providing the requested services or as required by law."
  },
  {
    title: "10. Limitation of Liability",
    content: "The platform serves as an online marketplace connecting customers with independent Service Providers.\nWhile we make reasonable efforts to maintain service quality, we do not guarantee the performance of individual Service Providers and shall not be liable for any direct or indirect losses arising from services performed by them, except where required under applicable law."
  },
  {
    title: "11. Dispute Resolution",
    content: "In the event of any dispute between a Customer and a Service Provider, the platform may assist in facilitating communication and resolving the matter where possible.\nHowever, the final responsibility for the services performed rests with the respective Service Provider."
  },
  {
    title: "12. Amendments",
    content: "The platform reserves the right to modify these Terms & Conditions at any time.\nAny updates will become effective immediately upon publication on the platform. Continued use of the platform after such updates constitutes acceptance of the revised Terms."
  }
];

function TermsAndConditions() {
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString());
  }, []);

  const downloadPDF = (title: string, termsArray: typeof serviceProviderTerms, filename: string) => {
    try {
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4",
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 50;
      let y = margin;

      pdf.setFontSize(22);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(0, 0, 0);
      pdf.text("PreHands", margin, y);
      y += 20;

      pdf.setFontSize(10);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(100, 100, 100);
      pdf.text(title.toUpperCase(), margin, y);
      y += 40;

      pdf.setTextColor(0, 0, 0);

      termsArray.forEach((item) => {
        if (y > pageHeight - margin - 40) {
          pdf.addPage();
          y = margin;
        }

        pdf.setFontSize(12);
        pdf.setFont("helvetica", "bold");
        pdf.text(item.title, margin, y);
        y += 20;

        pdf.setFontSize(10);
        pdf.setFont("helvetica", "normal");
        
        const lines = pdf.splitTextToSize(item.content, pageWidth - margin * 2);
        
        lines.forEach((line: string) => {
          if (y > pageHeight - margin) {
            pdf.addPage();
            y = margin;
          }
          pdf.text(line, margin, y);
          y += 14;
        });

        y += 12;
      });

      pdf.save(filename);
    } catch (error) {
      console.error("Error generating PDF", error);
    }
  };

  const renderContent = (contentList: typeof serviceProviderTerms) => {
    return (
      <div className="space-y-4 text-[13px] leading-relaxed text-justify text-muted-foreground">
        {contentList.map((item, index) => (
          <div key={index} className="space-y-1.5">
            <h3 className="font-semibold text-foreground/90">{item.title}</h3>
            <div className="whitespace-pre-wrap">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:py-3.5">
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-90">
            <img src={logoImg} alt="PreHands" className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-full object-cover shadow-sm" />
            <span className="font-display text-base sm:text-lg font-semibold tracking-tight text-silver">
              Pre<span className="text-gradient-neon">Hands</span>
            </span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-10 text-center">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-silver">
            Terms and <span className="text-gradient-neon">Conditions</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            Please read the terms applicable to you carefully.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Service Provider Card */}
          <div className="flex flex-col rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-foreground">For Service Providers</h2>
                <p className="text-xs text-muted-foreground mt-1">Last updated: {currentDate}</p>
              </div>
              <button 
                onClick={() => downloadPDF('Terms & Conditions for Service Providers', serviceProviderTerms, 'PreHands_Terms_Service_Providers.pdf')}
                className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
              >
                <Download className="h-3.5 w-3.5" />
                Download PDF
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar" style={{ maxHeight: '600px' }}>
              <div className="pb-4">
                <div className="mb-6 flex items-center gap-3 border-b border-border/30 pb-4">
                  <img src={logoImg} alt="PreHands" className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <h1 className="font-display text-lg font-bold text-foreground">
                      Pre<span className="text-gradient-neon">Hands</span>
                    </h1>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Terms & Conditions for Service Providers</p>
                  </div>
                </div>
                {renderContent(serviceProviderTerms)}
              </div>
            </div>
          </div>

          {/* Customer Card */}
          <div className="flex flex-col rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-foreground">For Customers</h2>
                <p className="text-xs text-muted-foreground mt-1">Last updated: {currentDate}</p>
              </div>
              <button 
                onClick={() => downloadPDF('Terms & Conditions for Customers', customerTerms, 'PreHands_Terms_Customers.pdf')}
                className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
              >
                <Download className="h-3.5 w-3.5" />
                Download PDF
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar" style={{ maxHeight: '600px' }}>
              <div className="pb-4">
                <div className="mb-6 flex items-center gap-3 border-b border-border/30 pb-4">
                  <img src={logoImg} alt="PreHands" className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <h1 className="font-display text-lg font-bold text-foreground">
                      Pre<span className="text-gradient-neon">Hands</span>
                    </h1>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Terms & Conditions for Customers</p>
                  </div>
                </div>
                {renderContent(customerTerms)}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

