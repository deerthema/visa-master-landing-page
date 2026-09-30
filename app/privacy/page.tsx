import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy — Visa Master",
  description: "How Visa Master collects, uses, stores, and shares personal information.",
};

const sections = [
  { id: "scope", label: "Scope and current beta" },
  { id: "data", label: "Information we process" },
  { id: "local-data", label: "Browser storage and downloads" },
  { id: "use", label: "How we use information" },
  { id: "google", label: "Google sign-in data" },
  { id: "ai", label: "Document processing and AI" },
  { id: "bases", label: "Legal bases" },
  { id: "sharing", label: "How information is shared" },
  { id: "retention", label: "Retention and security" },
  { id: "rights", label: "Your rights and choices" },
  { id: "children", label: "Children and other applicants" },
  { id: "changes", label: "Changes and contact" },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="PRIVACY POLICY"
      title="Privacy Policy"
      summary="This policy explains what information Visa Master processes, what stays in your browser, what reaches our service providers, and how to exercise your choices. It covers our website, private beta, accounts, demo Workspace, and support."
      sections={sections}
    >
      <section id="scope">
        <h2>1. Scope and current beta</h2>
        <p>Visa Master is a personal visa-preparation product. In this policy, “Visa Master,” “we,” and “us” mean the team operating Visa Master, a Lüya product. You can contact us at <a href="mailto:askluya@gmail.com">askluya@gmail.com</a>.</p>
        <p>The current website offers a route demonstration, waitlist and invitations, sign-in, display-name onboarding, and a demo Workspace. The Workspace lets you enter application-form answers and create a draft PDF in your browser. Account and early-access records reach our service providers; demo answers are stored separately in your browser. The demo does not upload passport scans or supporting files, run passport recognition, call an AI model, collect payments, book appointments, or submit applications.</p>
        <div className="legal-note"><strong>Feature-specific notice:</strong> before enabling server-side Case storage, document uploads, AI processing, or external submissions, we will explain the relevant data flow and update this policy where needed. A description of a planned feature does not mean it is active.</div>
      </section>

      <section id="data">
        <h2>2. Information we process</h2>
        <h3>Information you provide now</h3>
        <ul>
          <li><strong>Account information:</strong> your email address, password credentials handled by our authentication provider, display name, and sign-in method.</li>
          <li><strong>Early-access information:</strong> your email address, waitlist status, invite redemption status, and the invite phrase you submit for validation.</li>
          <li><strong>Communications:</strong> information you include when you contact us, report a problem, or send feedback.</li>
          <li><strong>Demo information:</strong> your intake answers, form answers, and demo conversation history. Depending on what you enter, this can include your name, passport details, residence, travel plans, employment, and host or family details. The current demo processes these in your browser as described below.</li>
        </ul>
        <h3>Information collected automatically</h3>
        <p>Hosting and authentication providers receive request information such as IP address, browser or device information, timestamps, session data, and security events. Our invite-abuse control stores a keyed digest derived from your IP address, together with failed-attempt timestamps. This does not prevent hosting providers from receiving the original IP address. Destination photographs also load from third-party image hosts, which receive ordinary request metadata.</p>
        <h3>Information future Case features may require</h3>
        <p>A visa workflow may require identity and contact details; passport and nationality information; travel history and plans; family, education, and employment information; financial evidence; photographs; application answers; and supporting documents. Some destinations may require information that local law treats as sensitive. We will collect only what the selected workflow needs and will explain any materially different use at the point of collection.</p>
      </section>

      <section id="local-data">
        <h2>3. Browser storage and downloads</h2>
        <p>The demo keeps intake answers, application-form answers, and conversation state in this tab’s session storage. The current implementation does not send those answers or the filled PDF to our backend, Supabase, or an AI provider. It still makes network requests to load the site, sign you in, and retrieve resources. Language and theme preferences use longer-lived local storage.</p>
        <p>Draft PDFs are generated in the browser. A downloaded copy remains wherever you save it, including any cloud-synced downloads folder you use. Sharing that file or opening an external website is a separate action under your control.</p>
        <p>Signing out or requesting account deletion does not clear local demo answers or delete downloaded files. Session storage normally ends with a browser-tab session, but browser restore features may retain it. To remove local information, clear this site’s browser data and separately delete downloaded copies you no longer need. Clearing site data may also sign you out and remove preferences. We cannot recover a local draft after it is cleared.</p>
      </section>

      <section id="use">
        <h2>4. How we use information</h2>
        <p>We use personal information to provide and secure accounts; operate the waitlist and invitation system; remember authenticated sessions; personalize the workspace; respond to support requests; diagnose failures; prevent fraud and abuse; comply with law; and improve the reliability and usability of Visa Master.</p>
        <p>Demo answers determine the displayed route, questions, and draft PDF. If additional Case features become available, their stated purposes may include researching requirements, organizing evidence, preparing materials, and checking consistency. We will not submit an application, make a payment, book an appointment, or send your information to an authority unless the feature explains that action and you authorize it.</p>
        <p>Contacting support sends the information you include to us and the email services handling that message. Share only what is needed to explain the issue; avoid sending passport scans, passwords, or payment details by email.</p>
      </section>

      <section id="google">
        <h2>5. Google sign-in data</h2>
        <p>If you choose “Sign in with Google,” Google provides Visa Master with the basic account information you approve, currently your email address, name, profile image, and identifiers needed to connect the sign-in to your Visa Master account. We use this information only to authenticate you, protect your session, create or connect your account, and display your chosen name.</p>
        <p>Visa Master does not request access to your Gmail, Google Drive, contacts, calendar, or other Google content. We do not sell Google user data, use it for advertising, or use it to train AI models. You can remove Visa Master’s access from your Google Account settings; doing so does not automatically delete information already stored in your Visa Master account, so contact us if you also want that information deleted.</p>
      </section>

      <section id="ai">
        <h2>6. Document processing and AI</h2>
        <p>Visa Master is being designed to use automated and AI-assisted tools to research requirements, organize information, and draft application materials. These tools support your work; they do not decide whether you receive a visa and they do not replace your review or a visa-issuing authority’s decision.</p>
        <p>The current demo uses predefined replies and browser-based form processing; it does not send your answers or documents to an AI provider for inference or model training. Before introducing hosted AI or document recognition, we will explain which information leaves your device, its purpose, the provider or recipient category, retention and training use, and any human access needed for support or review. Where required, we will request separate consent before processing sensitive information.</p>
        <p>Any future passport recognition will produce proposed values for you to check. Extracting text, checking a date, or matching a document field does not establish that a document is genuine or that its holder qualifies for a visa. Visa Master does not decide visa or entry applications.</p>
      </section>

      <section id="bases">
        <h2>7. Legal bases for processing</h2>
        <p>Where laws such as the UK GDPR or EU GDPR apply, our legal basis depends on the activity:</p>
        <ul>
          <li><strong>Contract:</strong> to create your account and provide features you request.</li>
          <li><strong>Legitimate interests:</strong> to secure, maintain, troubleshoot, and improve the service, provided those interests are not overridden by your rights.</li>
          <li><strong>Consent:</strong> where we ask for an optional use or where the law requires consent. You may withdraw it at any time.</li>
          <li><strong>Legal obligation:</strong> where we must retain or disclose information to comply with law.</li>
        </ul>
        <p>If information is required to provide an account or requested feature, not providing it may mean that feature cannot work. Reading or accepting this policy is not, by itself, consent to every possible use of sensitive information.</p>
      </section>

      <section id="sharing">
        <h2>8. How information is shared</h2>
        <p>We share information only as needed to operate Visa Master, follow your instructions, protect the service, or comply with law. Current service providers include <strong>Vercel</strong> for website hosting and delivery, <strong>Supabase</strong> for authentication and database services, and <strong>Google</strong> when you choose Google sign-in. These providers process information under their own terms and privacy commitments.</p>
        <p>Destination photographs are currently delivered by third-party image hosts, including Unsplash and Tourist Travel Tips. As Case features are introduced, we may use carefully selected infrastructure, document-processing, email-delivery, security, and AI service providers. We will update this policy before using providers in a materially different way. We may also disclose information if reasonably necessary to comply with legal process, protect people or the service, investigate abuse, or complete a corporate transaction subject to appropriate safeguards.</p>
        <p>We do not sell personal information or share it for cross-context behavioral advertising. The current beta does not disclose visa information to embassies, consulates, or visa-issuing authorities because it does not submit applications.</p>
        <p>If you later authorize a feature to send information to an official portal, appointment provider, or another independent recipient, that recipient’s own notice and rules will apply to its handling of the information. Deleting your Visa Master account cannot withdraw an application or erase records held independently by an authority.</p>
        <h3>International processing</h3>
        <p>Our providers may process information in countries other than your own. Where required, we use recognized transfer mechanisms or other appropriate safeguards. You may contact us for information about safeguards relevant to your data.</p>
      </section>

      <section id="retention">
        <h2>9. Retention and security</h2>
        <ul>
          <li><strong>Accounts and early access:</strong> we retain account information while providing your account and waitlist information while managing access, or until a deletion request is fulfilled, subject to necessary legal and security retention.</li>
          <li><strong>Support and operational records:</strong> retention depends on resolving your request, investigating abuse or incidents, maintaining the service, and any applicable legal obligations.</li>
          <li><strong>Local drafts and PDFs:</strong> these follow the browser and file behavior in section 3, independently of your account.</li>
        </ul>
        <p>Deletion requests cover information we control. Records that must be kept for a legal obligation, an unresolved dispute, or a necessary security purpose may be retained for that purpose. Removal from active systems and expiry of provider backup copies may occur at different times; we will explain relevant limitations when handling your request.</p>
        <p>We use reasonable technical and organizational measures, including provider-managed authentication and restricted database access for early-access records. Browser storage and downloaded PDFs are not a secure document vault; protect access to your device and browser profile. No service can guarantee absolute security. Contact us promptly about suspected unauthorized access. We will give any incident notifications required by applicable law.</p>
      </section>

      <section id="rights">
        <h2>10. Your rights and choices</h2>
        <p>Depending on where you live, you may have rights to access, correct, delete, or receive a copy of personal information; restrict or object to certain processing; withdraw consent; and appeal or complain to a data-protection authority. We will not discriminate against you for exercising an applicable privacy right.</p>
        <div className="legal-note"><strong>Your right to object:</strong> where we rely on legitimate interests, you may object to that processing by emailing <a href="mailto:askluya@gmail.com">askluya@gmail.com</a>. We will review the request under applicable law.</div>
        <p>To request access, correction, deletion, or a copy of information we hold, email <a href="mailto:askluya@gmail.com">askluya@gmail.com</a> from your account or waitlist address and describe your request. We may ask for proportionate verification; do not include a passport copy or password in the initial email. We will respond within the time required by applicable law and explain any lawful exception. You may also complain to the relevant privacy regulator. Information kept only in your browser must be managed on your device.</p>
        <h3>Cookies and similar technology</h3>
        <p>Visa Master currently uses authentication cookies and similar storage that are necessary to keep you signed in, remember limited interface choices, and protect the service. We do not currently use third-party advertising cookies. If we introduce optional analytics or advertising technology, we will provide any notice and choice required by law.</p>
      </section>

      <section id="children">
        <h2>11. Children and other applicants</h2>
        <p>Visa Master accounts are intended for people who are at least 18 years old. A future workflow may allow an adult to prepare a Case for a minor or another applicant. In that situation, you must be legally authorized to provide their information and use the service for them. We will add appropriate notices and controls before enabling such a workflow.</p>
        <p>If your form answers mention a host, sponsor, relative, or employer, provide only the details the form needs and make sure you have a lawful basis to use them. Contact us if you believe a child has created an account or someone has provided another person’s information without authority.</p>
      </section>

      <section id="changes">
        <h2>12. Changes and contact</h2>
        <p>We may update this policy as Visa Master develops. If a change materially affects how we use personal information, we will provide reasonable notice through the service, by email, or both. The effective date at the top shows when this version began to apply.</p>
        <p>Questions, privacy requests, and concerns can be sent to <a href="mailto:askluya@gmail.com">askluya@gmail.com</a>. Please do not email passport copies or other sensitive visa documents.</p>
      </section>
    </LegalPage>
  );
}
