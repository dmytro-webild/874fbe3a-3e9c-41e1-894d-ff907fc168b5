import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Raleway } from "next/font/google";



export const metadata: Metadata = {
  title: 'NIMISHA TAYAL & ASSOCIATES | Company Secretaries & Compliance',
  description: 'Expert Company Secretarial Services, Corporate Governance Advisory, and Regulatory Compliance for businesses. Partner with NIMISHA TAYAL & ASSOCIATES for seamless legal support.',
  keywords: ["company secretaries, corporate compliance, corporate governance, legal advisory, business registration, regulatory filings, company law, India"],
  openGraph: {
    "title": "NIMISHA TAYAL & ASSOCIATES | Company Secretaries & Compliance",
    "description": "Expert Company Secretarial Services, Corporate Governance Advisory, and Regulatory Compliance for businesses. Partner with NIMISHA TAYAL & ASSOCIATES for seamless legal support.",
    "url": "https://nimishatayalandassociates.com",
    "siteName": "NIMISHA TAYAL & ASSOCIATES",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/business-people-meeting_53876-15137.jpg",
        "alt": "Modern company secretary office"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "NIMISHA TAYAL & ASSOCIATES | Company Secretaries & Compliance",
    "description": "Expert Company Secretarial Services, Corporate Governance Advisory, and Regulatory Compliance for businesses. Partner with NIMISHA TAYAL & ASSOCIATES for seamless legal support.",
    "images": [
      "http://img.b2bpic.net/free-photo/business-people-meeting_53876-15137.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${raleway.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
