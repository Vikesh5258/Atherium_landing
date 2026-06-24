import { useEffect } from "react";

export function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto" style={{ color: "#1F2937", fontFamily: "Inter, sans-serif" }}>
      <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#111827" }}>Terms & Conditions</h1>
      
      <div className="mb-12 text-sm text-gray-500 flex flex-col gap-1">
        <p><strong>OPERATOR:</strong> Athereum Investment Consultant L.L.C-FZ</p>
        <p><strong>PLATFORM:</strong> athcoins.in</p>
        <p><strong>REGISTERED ADDRESS:</strong> Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, United Arab Emirates</p>
        <p><strong>EFFECTIVE DATE:</strong> 22 June 2026</p>
        <p><strong>CONTACT:</strong> contact@athcoins.in</p>
      </div>

      <div className="space-y-8 leading-relaxed">
        <p>
          These Terms and Conditions (the “Terms”) govern your access to and use of the Atherium platform, the ATH utility token, and all related ecosystem services provided by Athereum Investment Consultant L.L.C-FZ (“Atherium,” “we,” “us,” or “our”) through athcoins.in (collectively, the “Services”). By accessing or using the Services, you agree to be bound by these Terms. If you do not agree, you must not use the Services.
        </p>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">1. Acceptance of Terms</h2>
          <p>
            By accessing, browsing, acquiring, holding, staking, or otherwise using ATH or the Services, you confirm that you have read, understood, and agreed to these Terms, together with our Privacy Policy and Whitepaper, which are incorporated by reference. These Terms constitute a binding agreement between you and Atherium.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">2. Definitions</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>ATH / Token:</strong> The Atherium utility token, a BEP-20 token issued on the BNB Smart Chain with a fixed total supply of 50,000,000 ATH.</li>
            <li><strong>Services:</strong> The Atherium platform, website, staking and reward modules, ecosystem features, and related interfaces available through athcoins.in.</li>
            <li><strong>User / you:</strong> Any individual or entity that accesses or uses the Services.</li>
            <li><strong>Wallet:</strong> A compatible non-custodial blockchain wallet used to hold and transact ATH.</li>
            <li><strong>Staking:</strong> Locking ATH within audited smart contracts to earn rule-based rewards as described in the Whitepaper.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">3. Eligibility</h2>
          <p>
            To use the Services, you must be at least 18 years old (or the age of majority in your jurisdiction) and have the legal capacity to enter into these Terms. The Services are not available to persons or entities in jurisdictions where participation in utility tokens, staking, or related activities is restricted or prohibited, or who are subject to applicable sanctions. You are responsible for ensuring that your use of the Services is lawful in your jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">4. Nature of the ATH Token</h2>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">UTILITY TOKEN — NOT A SECURITY OR INVESTMENT</h3>
          <p>
            ATH is a utility token designed strictly for functional use within the Atherium ecosystem. It does not represent or confer equity, shares, ownership, proprietary rights, profit-sharing, dividends, interest, revenue claims, debt obligations, governance or voting rights, or any claim over any external or real-world asset. ATH is not offered as, and must not be construed as, a security, financial instrument, investment contract, or collective investment scheme. No expectation of profit should reasonably arise solely from the ownership or use of ATH. The value and utility of ATH depend on ecosystem usage and may change. References to future real-world asset (RWA) frameworks are forward-looking and subject to development progress, regulatory clarity, and market conditions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">5. No Investment, Legal, or Tax Advice</h2>
          <p>
            Nothing in the Services, the Whitepaper, or these Terms constitutes investment, financial, legal, accounting, or tax advice. You are solely responsible for evaluating the merits and risks of using ATH and the Services, and you should obtain independent professional advice before participating.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">6. Account Registration, KYC & AML</h2>
          <p>
            Certain features require account registration and identity verification. You agree to provide accurate, current, and complete information and to keep it updated. Where required, you must complete KYC and AML verification, and we may screen against sanctions and watchlists. We may refuse, suspend, or restrict access where verification is incomplete or where activity presents a compliance or security risk. You are responsible for maintaining the confidentiality of your credentials and for all activity under your account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">7. Staking & Rewards</h2>
          <p className="mb-2">Staking allows you to lock ATH within audited smart contracts to earn rule-based rewards. By staking, you acknowledge that:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Staking parameters, lock periods, and reward logic are governed by predefined on-chain rules and may not be individually negotiated;</li>
            <li>Rewards are funded from the designated allocation and distributed on structured schedules; we do not guarantee any specific rate of return, yield, or profit;</li>
            <li>Early withdrawal or other conditions may carry penalties where defined by the applicable contract; and</li>
            <li>Reward mechanisms, emission schedules, and participation criteria may evolve, expand, or be reduced over time.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">8. Token Acquisition & Payments</h2>
          <p>
            Where ATH is made available for acquisition, transactions may be settled using BNB or USDT on the BNB Smart Chain. You are responsible for network gas fees and for ensuring that transactions are sent to the correct addresses. Blockchain transactions are irreversible; we cannot reverse, cancel, or refund completed on-chain transactions. You bear all risk associated with errors in addresses, amounts, or network selection.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">9. Smart Contracts & Blockchain Risk</h2>
          <p>
            The Services rely on smart contracts deployed on the BNB Smart Chain. While contracts are audited and incorporate protective controls, they operate according to predefined logic and may contain vulnerabilities, bugs, or be subject to external exploits. The immutability of blockchain means that errors, once executed, generally cannot be reversed. You acknowledge and accept the technical risks inherent in interacting with blockchain networks and smart contracts.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">10. Acceptable Use & Prohibited Conduct</h2>
          <p className="mb-2">You agree not to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Use the Services for money laundering, terrorist financing, fraud, or any unlawful purpose;</li>
            <li>Circumvent KYC/AML controls, sanctions screening, or jurisdictional restrictions;</li>
            <li>Engage in market manipulation, exploit vulnerabilities, or interfere with the integrity or operation of the Services;</li>
            <li>Use bots, scrapers, or automated means to access the Services without authorisation;</li>
            <li>Infringe intellectual property or other rights; or</li>
            <li>Misrepresent your identity or provide false verification information.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">11. Intellectual Property</h2>
          <p>
            All content, trademarks, logos, software, and materials within the Services are owned by or licensed to Atherium and are protected by applicable intellectual property laws. Except as expressly permitted, you may not copy, modify, distribute, or create derivative works from the Services without our prior written consent. No rights are granted other than the limited right to use the Services in accordance with these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">12. Third-Party Services</h2>
          <p>
            The Services may integrate with or link to third-party wallets, exchanges, networks, and tools that we do not control. Your use of such third-party services is governed by their own terms, and we are not responsible for their availability, security, or conduct. The BNB Smart Chain is an independent, decentralised network operated by third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">13. Risk Disclosures</h2>
          <p className="mb-2">Participation in the Services involves significant risk. Without limitation, you acknowledge the risks of:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>market volatility and changes in token value;</li>
            <li>limited or no liquidity in secondary markets;</li>
            <li>regulatory change that may alter or restrict participation;</li>
            <li>smart-contract vulnerabilities and operational disruptions;</li>
            <li>dependence on platform adoption and continuity; and</li>
            <li>uncertainty relating to any future RWA frameworks.</li>
          </ul>
          <p className="mt-2">There is no guarantee of return, yield, or capital appreciation. You should not participate with funds you cannot afford to lose.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">14. Disclaimers & No Warranties</h2>
          <p>
            The Services and ATH are provided “as is” and “as available” without warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, title, non-infringement, availability, accuracy, or uninterrupted operation. We do not warrant that the Services will be secure, error-free, or continuously available, or that defects will be corrected.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">15. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Atherium and its affiliates, officers, contributors, and agents shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, tokens, data, goodwill, or opportunity, arising out of or relating to your use of the Services, ATH, smart-contract limitations, downtime, or any matter described in these Terms, whether based on contract, tort, or otherwise, even if advised of the possibility of such damages.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">16. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Atherium and its affiliates, officers, contributors, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or related to your use of the Services, your violation of these Terms, or your violation of any applicable law or third-party right.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">17. Suspension & Termination</h2>
          <p>
            We may suspend, restrict, or terminate your access to the Services, in whole or in part, at any time and without prior notice where required for legal, regulatory, security, or operational reasons, or where you breach these Terms. We may also amend, halt, or retire components of the ecosystem, including token mechanisms, platform functions, and smart-contract features, to maintain compliance, security, and integrity. Termination does not affect rights or obligations accrued prior to termination.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">18. Forward-Looking Statements</h2>
          <p>
            The Services and related materials may contain forward-looking statements regarding development, utility, RWA progression, regulatory alignment, or market conditions. These statements involve uncertainties and may differ materially from actual outcomes. We do not commit to updating such statements and do not guarantee that planned features, timelines, or mechanisms will materialise as described.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">19. Taxes</h2>
          <p>
            You are solely responsible for determining and satisfying any tax obligations arising from your use of the Services, including taxes related to staking rewards, reward-program payouts, token allocations, transfers, disposals, or conversions. We do not provide tax advice and are not responsible for your tax compliance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">20. Amendments to These Terms</h2>
          <p>
            We may revise these Terms from time to time. The “Effective date” above indicates when the Terms were last updated. Material changes will be communicated through the Services or by other appropriate means. Your continued use of the Services after an update constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">21. Governing Law & Dispute Resolution</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of the United Arab Emirates, as applicable to the operatorʼs registered jurisdiction in Dubai, without regard to conflict-of-laws principles. Any dispute, controversy, or claim arising out of or relating to these Terms or the Services shall be subject to the exclusive jurisdiction of the competent courts of the United Arab Emirates, save where mandatory law provides otherwise. You agree to first attempt to resolve any dispute informally by contacting us before commencing formal proceedings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">22. General Provisions</h2>
          <p>
            If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect. Our failure to enforce any right or provision is not a waiver. These Terms, together with the Privacy Policy and Whitepaper, constitute the entire agreement between you and Atherium regarding the Services. You may not assign these Terms without our consent; we may assign them in connection with a reorganisation or transfer of assets. Headings are for convenience only.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">23. Contact Us</h2>
          <p className="mb-1"><strong>Athereum Investment Consultant L.L.C-FZ</strong></p>
          <p className="mb-1">Platform: athcoins.in</p>
          <p className="mb-1">Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, United Arab Emirates</p>
          <p>Email: contact@athcoins.in</p>
        </section>

      </div>
    </main>
  );
}
