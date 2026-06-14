import { Link } from "react-router-dom";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-20">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold text-foreground mb-3">
            Terms & Conditions
          </h1>

          <p className="text-sm text-muted-foreground mb-10">
            Last Updated: June 14, 2026
          </p>

          <div className="space-y-8 text-muted-foreground leading-7">

            <section>
              <p>
                Welcome to Corehex Solutions. By accessing our website or
                using our services, you agree to be bound by these Terms &
                Conditions. If you do not agree with any part of these terms,
                please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Services
              </h2>

              <p>
                Corehex Solutions provides IT infrastructure services,
                cybersecurity solutions, software development, IT consulting,
                data management, cloud solutions, network services, and
                technical support. All services are subject to individual
                project agreements, quotations, or contracts where applicable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Use of Website
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>You agree to use this website only for lawful purposes.</li>
                <li>You must not attempt to disrupt or compromise website security.</li>
                <li>You must not copy, distribute, or reproduce website content without permission.</li>
                <li>You must not use the website in a way that may damage our reputation or services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Intellectual Property
              </h2>

              <p>
                All content on this website, including text, graphics,
                branding, logos, designs, software, and other materials,
                belongs to Corehex Solutions unless otherwise stated and is
                protected by applicable intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Project Engagements
              </h2>

              <p>
                Any software development, consulting, infrastructure, or
                cybersecurity project will be governed by separate project
                proposals, service agreements, statements of work, or contracts.
                Those documents will take precedence over these general terms
                where applicable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Payments
              </h2>

              <p>
                Payment terms for services will be specified in project
                quotations, invoices, or agreements. Failure to make payments
                may result in suspension, delay, or termination of services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Limitation of Liability
              </h2>

              <p>
                To the maximum extent permitted by law, Corehex Solutions shall
                not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising from the use of our
                website, services, or delivered solutions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Third-Party Services
              </h2>

              <p>
                Our services may involve third-party platforms, hosting
                providers, cloud services, software tools, or integrations.
                We are not responsible for outages, failures, or actions of
                third-party providers beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Confidentiality
              </h2>

              <p>
                We respect the confidentiality of client information and will
                take reasonable measures to protect sensitive business data
                shared during the course of a project.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Termination
              </h2>

              <p>
                We reserve the right to suspend or terminate access to our
                website or services if these Terms & Conditions are violated or
                if continued service is not reasonably possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Changes to These Terms
              </h2>

              <p>
                We may update these Terms & Conditions at any time. Changes
                will become effective once published on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Contact Us
              </h2>

              <p>
                If you have any questions regarding these Terms & Conditions,
                please contact us:
              </p>

              <div className="mt-4 space-y-1">
                <p>
                  <strong className="text-foreground">
                    Corehex Solutions
                  </strong>
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
