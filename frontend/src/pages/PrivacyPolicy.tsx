import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-20">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold text-foreground mb-3">
            Privacy Policy
          </h1>

          <p className="text-sm text-muted-foreground mb-10">
            Last Updated: June 14, 2026
          </p>

          <div className="space-y-8 text-muted-foreground leading-7">

            <section>
              <p>
                At <strong className="text-foreground">Corehex Solutions</strong>,
                we value your privacy and are committed to protecting your
                personal information. This Privacy Policy explains how we
                collect, use, and safeguard information when you visit our
                website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Information We Collect
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, and phone number.</li>
                <li>Company information and project requirements.</li>
                <li>Information submitted through contact forms.</li>
                <li>Technical information such as IP address, browser type, and device information.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                How We Use Information
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to inquiries and support requests.</li>
                <li>Provide our services and project consultations.</li>
                <li>Improve website performance and user experience.</li>
                <li>Maintain website security and prevent misuse.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Cookies
              </h2>

              <p>
                Our website may use cookies and similar technologies to improve
                functionality and analyze website traffic. You can disable
                cookies through your browser settings if you prefer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Information Sharing
              </h2>

              <p>
                We do not sell, rent, or trade your personal information. We
                may share information with trusted service providers when
                necessary to operate our business or comply with legal
                requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Data Security
              </h2>

              <p>
                We implement reasonable security measures to protect your
                information. However, no method of electronic transmission or
                storage is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Third-Party Links
              </h2>

              <p>
                Our website may contain links to external websites. We are not
                responsible for the privacy practices of those websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Changes to This Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Contact Us
              </h2>

              <p>
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>

              <div className="mt-4 space-y-1">
                <p>
                  <strong className="text-foreground">Corehex Solutions</strong>
                </p>
                <p>contact@corehexsolutions.com</p>
                <p>+91 9879300929</p>
              </div>
            </section>

          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link
              to="/contact"
              className="text-primary hover:underline"
            >
              Contact Us →
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

