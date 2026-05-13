import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for ToolBox Online — How we handle your data and protect your privacy.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-indigo-600">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Home
        </Link>
      </div>

      <article className="prose prose-gray max-w-none dark:prose-invert">
        <h1>Privacy Policy</h1>
        <p className="text-gray-500"><em>Last updated: May 13, 2026</em></p>

        <p>
          At ToolBox Online (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), accessible at{" "}
          <strong>www.toolbox123.online</strong>, we are committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, and safeguard your information
          when you visit our website.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          <strong>We do not collect any personal data.</strong> All tools on our website
          process data entirely within your browser. No data you enter into any tool
          is sent to our servers or stored anywhere.
        </p>

        <h3>Automatically Collected Information</h3>
        <p>When you visit our website, we may automatically collect certain information, including:</p>
        <ul>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Referring website</li>
          <li>Pages visited and time spent</li>
          <li>IP address (anonymized)</li>
        </ul>
        <p>This information is collected through third-party analytics and advertising services and is used solely to improve our website.</p>

        <h2>2. How We Use Your Information</h2>
        <p>The limited information we collect is used to:</p>
        <ul>
          <li>Maintain and improve our website</li>
          <li>Understand how visitors use our tools</li>
          <li>Display relevant advertisements</li>
        </ul>

        <h2>3. Third-Party Services</h2>

        <h3>Google AdSense</h3>
        <p>
          We use Google AdSense to display advertisements. Google may use cookies and
          web beacons to serve ads based on your prior visits to our website or other
          websites. You can opt out of personalized advertising by visiting{" "}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a>.
        </p>

        <h3>Google Analytics</h3>
        <p>
          We may use Google Analytics to track and analyze website traffic.
          Google Analytics uses cookies to collect anonymous usage data.
          You can learn more about how Google uses data at{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Google Privacy Policy
          </a>.
        </p>

        <h2>4. Cookies</h2>
        <p>
          Our website may use cookies from third-party services (Google AdSense,
          Google Analytics). Cookies are small text files stored on your device.
          You can control cookie preferences through your browser settings.
        </p>

        <h2>5. Data Security</h2>
        <p>
          Since all our tools process data locally in your browser, your data never
          leaves your device. We do not have access to any content you enter into our tools.
        </p>

        <h2>6. Children&apos;s Privacy</h2>
        <p>
          Our website is not directed to children under 13. We do not knowingly
          collect personal information from children.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be
          posted on this page with an updated revision date.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please visit our{" "}
          <Link href="/contact">Contact page</Link>.
        </p>
      </article>
    </div>
  );
}
