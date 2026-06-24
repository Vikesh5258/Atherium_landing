import { useEffect } from "react";

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto" style={{ color: "#1F2937", fontFamily: "Inter, sans-serif" }}>
      <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#111827" }}>Privacy Policy</h1>
      
      <div className="mb-12 text-sm text-gray-500 flex flex-col gap-1">
        <p><strong>OPERATOR:</strong> Athereum Investment Consultant L.L.C-FZ</p>
        <p><strong>PLATFORM:</strong> athcoins.in</p>
        <p><strong>REGISTERED ADDRESS:</strong> Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, United Arab Emirates</p>
        <p><strong>EFFECTIVE DATE:</strong> 22 June 2026</p>
        <p><strong>CONTACT:</strong> [email.protected]</p>
      </div>

      <div className="space-y-8 leading-relaxed">
        <p>
          This Privacy Policy explains how Athereum Investment Consultant L.L.C-FZ (“Atherium,” “we,” “us,” or “our”) collects, uses, discloses, and safeguards personal data when you access the Atherium platform, the ATH utility token, and related ecosystem services made available through athcoins.in (collectively, the “Services”). By using the Services, you acknowledge that you have read and understood this Policy.
        </p>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">1. Who We Are</h2>
          <p>
            Atherium is operated by Athereum Investment Consultant L.L.C-FZ, a free-zone company registered in Dubai, United Arab Emirates, with its registered office at Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E. For the purposes of applicable data protection law, including UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (the “PDPL”), we act as the controller of the personal data described in this Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">2. Scope of This Policy</h2>
          <p>
            This Policy applies to personal data we process in connection with the Services, including the Atherium website, staking and reward interfaces, KYC/AML onboarding, and support channels. It does not apply to third-party websites, wallets, exchanges, or blockchain networks that we do not control. The ATH token is a utility token; this Policy governs personal data only and does not alter the legal nature of the token as described in our Terms and Conditions and Whitepaper.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">3. Information We Collect</h2>
          <p className="mb-3">
            We collect the categories of personal data set out below. The specific data collected depends on how you interact with the Services and which features require verification.
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="min-w-full text-left text-sm text-gray-600 border-collapse border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 border border-gray-200 font-semibold text-gray-800">CATEGORY</th>
                  <th className="px-4 py-2 border border-gray-200 font-semibold text-gray-800">EXAMPLES</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border border-gray-200 font-medium">Blockchain & wallet data</td>
                  <td className="px-4 py-2 border border-gray-200">Public wallet addresses, transaction hashes, staking positions, reward claims, and other on-chain activity associated with your use of the Services.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-200 font-medium">Identity & KYC/AML data</td>
                  <td className="px-4 py-2 border border-gray-200">Full name, date of birth, nationality, residential address, government-issued identification, proof of address, and verification imagery, where verification is required for a feature.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-200 font-medium">Account & contact data</td>
                  <td className="px-4 py-2 border border-gray-200">Email address, username, password credentials, and communication preferences.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-200 font-medium">Usage & device data</td>
                  <td className="px-4 py-2 border border-gray-200">IP address, browser type, device identifiers, operating system, pages viewed, and timestamps.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-200 font-medium">Cookies & analytics</td>
                  <td className="px-4 py-2 border border-gray-200">Cookie identifiers and analytics events used to operate, secure, and improve the Services.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-200 font-medium">Support communications</td>
                  <td className="px-4 py-2 border border-gray-200">Messages, enquiries, and records of correspondence you send to us.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            We do not knowingly collect special categories of personal data beyond identity documentation required for regulatory compliance, and we ask that you do not submit sensitive data that is not requested.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">4. How We Collect Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Directly from you</strong> — when you create an account, complete KYC/AML verification, contact support, or otherwise submit information.</li>
            <li><strong>Automatically</strong> — through cookies, analytics tools, and server logs when you interact with the Services.</li>
            <li><strong>From the blockchain</strong> — publicly available on-chain data generated when you transact, stake, or claim rewards with ATH.</li>
            <li><strong>From third parties</strong> — identity verification providers, analytics partners, and fraud-prevention services that support compliance and security.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">5. How We Use Your Information</h2>
          <p className="mb-2">We process personal data to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide, operate, and maintain the Services, including staking, rewards, and ecosystem access;</li>
            <li>Verify identity and conduct KYC, AML, and sanctions screening where required by law;</li>
            <li>Authenticate users, secure accounts, and prevent fraud, abuse, and unauthorised access;</li>
            <li>Communicate with you about your account, service updates, and support requests;</li>
            <li>Monitor, analyse, and improve the performance, reliability, and usability of the Services;</li>
            <li>Comply with legal, regulatory, audit, and reporting obligations; and</li>
            <li>Enforce our Terms and Conditions and protect our rights, users, and ecosystem.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">6. Legal Bases for Processing</h2>
          <p className="mb-2">Where the PDPL or other applicable law requires a legal basis, we rely on one or more of the following:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>your consent;</li>
            <li>the performance of a contract with you;</li>
            <li>compliance with a legal obligation;</li>
            <li>the protection of vital interests; and</li>
            <li>our legitimate interests in operating, securing, and improving the Services, provided those interests are not overridden by your rights.</li>
          </ul>
          <p className="mt-2">You may withdraw consent at any time where processing is based on consent, without affecting prior processing.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">7. KYC, AML & Compliance Processing</h2>
          <p>
            Certain ecosystem features are subject to identity verification. Where required, we and our verification partners process identity data to satisfy applicable anti-money-laundering, counter-terrorist-financing, and sanctions obligations. We may decline, suspend, or restrict access where verification cannot be completed or where activity presents a compliance risk. Verification records are retained for the periods mandated by applicable regulation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">8. How We Share Information</h2>
          <p className="mb-2">We do not sell personal data. We may share personal data with:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Service providers</strong> — cloud hosting, analytics, identity verification, communications, and security vendors acting on our instructions under appropriate confidentiality and data-processing terms;</li>
            <li><strong>Regulators and authorities</strong> — where disclosure is required by law, regulation, court order, or a lawful request;</li>
            <li><strong>Professional advisers</strong> — auditors, legal counsel, and consultants bound by confidentiality; and</li>
            <li><strong>Successors</strong> — in connection with a merger, reorganisation, or transfer of assets, subject to this Policy.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">9. Blockchain Transparency & Immutability</h2>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">IMPORTANT — ON-CHAIN DATA</h3>
          <p>
            Transactions involving ATH are recorded on the BNB Smart Chain, a public and decentralised ledger. On-chain data — including wallet addresses, transaction amounts, and staking activity — is publicly visible, permanent, and cannot be altered, deleted, or erased by us. You should consider this before transacting. Rights to erasure or rectification under applicable law cannot extend to data already written to a public blockchain.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">10. Cookies & Tracking Technologies</h2>
          <p>
            We use cookies and similar technologies to operate the Services, remember preferences, maintain security, and measure usage. Strictly necessary cookies are required for the Services to function; analytics and preference cookies are used subject to your choices where applicable. You can control cookies through your browser settings, though disabling certain cookies may affect functionality.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">11. Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary to fulfil the purposes described in this Policy, including to provide the Services, comply with legal and regulatory obligations (such as AML record-keeping), resolve disputes, and enforce our agreements. When data is no longer required, we delete or anonymise it in accordance with our retention practices. On-chain data persists on the blockchain independently of our retention schedule.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">12. Data Security</h2>
          <p>
            We implement administrative, technical, and organisational measures designed to protect personal data against unauthorised access, loss, misuse, or disclosure, including encryption in transit, access controls, and monitoring. No system is completely secure, and we cannot guarantee absolute security. You are responsible for safeguarding your account credentials, wallet keys, and recovery phrases, which we never request and cannot recover.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">13. International Data Transfers</h2>
          <p>
            We are based in the United Arab Emirates and may process and store personal data in the UAE and other jurisdictions where we or our service providers operate. Where personal data is transferred across borders, we take steps to ensure an adequate level of protection consistent with the PDPL and applicable law, including contractual safeguards with recipients.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">14. Your Rights</h2>
          <p className="mb-2">Subject to applicable law and to limitations arising from blockchain immutability and regulatory record-keeping, you may have the right to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Access the personal data we hold about you;</li>
            <li>Request correction of inaccurate or incomplete data;</li>
            <li>Request erasure of data where there is no overriding legal basis to retain it;</li>
            <li>Object to or restrict certain processing;</li>
            <li>Withdraw consent where processing relies on consent; and</li>
            <li>Request a copy of certain data in a portable format.</li>
          </ul>
          <p className="mt-2">To exercise these rights, contact us at contact@athcoins.in. We may need to verify your identity before responding and will reply within the timeframes required by applicable law.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">15. Children’s Privacy</h2>
          <p>
            The Services are not directed to, and are not intended for, individuals under the age of 18 (or the age of majority in their jurisdiction). We do not knowingly collect personal data from minors. If we learn that we have collected such data, we will take steps to delete it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">16. Third-Party Links & Services</h2>
          <p>
            The Services may contain links to third-party websites, wallets, exchanges, or applications that we do not operate or control. This Policy does not apply to those third parties, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third party you interact with.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">17. Changes to This Policy</h2>
          <p>
            We may update this Policy from time to time to reflect changes in our practices, technology, or legal requirements. The “Effective date” above indicates when the Policy was last revised. Material changes will be communicated through the Services or by other appropriate means. Your continued use of the Services after an update constitutes acceptance of the revised Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">18. Contact Us</h2>
          <p className="mb-1"><strong>Athereum Investment Consultant L.L.C-FZ</strong></p>
          <p>Email: [email.protected]</p>
          <p className="mb-1">Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, United Arab Emirates</p>
          <p className="mb-1">Platform: athcoins.in</p>
        </section>

      </div>
    </main>
  );
}
