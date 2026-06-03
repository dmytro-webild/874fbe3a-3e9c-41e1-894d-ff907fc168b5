"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="mediumSizeLargeTitles"
        background="grid"
        cardStyle="gradient-radial"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Team",
          id: "#team",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="NIMISHA TAYAL & ASSOCIATES"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Expert Company Secretarial Services for Your Business Growth"
      description="NIMISHA TAYAL & ASSOCIATES provides comprehensive compliance, governance, and legal advisory to empower your enterprise."
      testimonials={[
        {
          name: "Arjun Sharma",
          handle: "@TechInnovate",
          testimonial: "Nimisha Tayal & Associates streamlined our entire compliance process. Their expertise is unmatched!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/successful-senior-businessman-standing-window_1262-3120.jpg",
        },
        {
          name: "Priya Singh",
          handle: "@GlobalConnect",
          testimonial: "Exceptional guidance on corporate governance. They truly understand the nuances of business law.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-businessman-having-conversation-with-his-partner-workplace_23-2147899787.jpg",
        },
        {
          name: "Rajesh Kumar",
          handle: "@StartupSpark",
          testimonial: "Indispensable support for our startup. From incorporation to ongoing compliance, they've been phenomenal.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/blond-man-happy-expression_1194-2938.jpg",
        },
        {
          name: "Deepika Reddy",
          handle: "@FashionForward",
          testimonial: "Their proactive approach saved us time and resources. Highly recommend for any corporate secretarial needs.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-sitting-chair_23-2149007468.jpg",
        },
        {
          name: "Sanjay Kapoor",
          handle: "@InnovateLeap",
          testimonial: "The team at Nimisha Tayal & Associates is incredibly responsive and knowledgeable. A true asset!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-with-glasses-arms-folded_1098-44.jpg",
        },
      ]}
      testimonialRotationInterval={7000}
      tag="Trusted Advisors"
      buttons={[
        {
          text: "Explore Services",
          href: "#services",
        },
        {
          text: "Get a Consultation",
          href: "#contact",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-senior-man-holding-smart-phone_23-2147935571.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/closeup-smiling-middle-aged-business-leader_1262-4845.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-indian-man-black-shirt-tie-posed-outdoor_627829-1744.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/business-woman-office_1303-9736.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/indoor-shot-cheerful-positive-mixed-race-man-with-healthy-pure-skin-being-wet-after-going-sport_273609-8616.jpg",
          alt: "Client 5",
        },
      ]}
      avatarText="Trusted by over 100+ businesses"
      imageSrc="http://img.b2bpic.net/free-photo/business-people-meeting_53876-15137.jpg"
      imageAlt="Modern company secretary office interior"
      showBlur={true}
      textPosition="bottom"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Your Partner in Corporate Governance & Compliance"
      description={[
        "NIMISHA TAYAL & ASSOCIATES is a distinguished firm of Company Secretaries dedicated to providing top-tier corporate legal and secretarial services. With a commitment to excellence and integrity, we assist businesses across various sectors in navigating complex regulatory landscapes.",
        "Our proactive approach ensures that your company remains compliant, well-governed, and poised for sustainable growth. We are more than just service providers; we are strategic partners in your journey to corporate success.",
      ]}
      buttons={[
        {
          text: "Learn More About Us",
          href: "#team",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "service-1",
          title: "Company Incorporation & Setup",
          descriptions: [
            "Guiding you through the entire process of forming a new company, including name reservation, drafting of Memorandum and Articles of Association, and obtaining all necessary registrations.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/pen-document-folder_23-2148148379.jpg",
          imageAlt: "Legal documents for company incorporation",
        },
        {
          id: "service-2",
          title: "Regulatory Compliance Management",
          descriptions: [
            "Ensuring adherence to various corporate laws and regulations, including filings with the Registrar of Companies (ROC), SEBI, and other statutory bodies. We keep you updated on all regulatory changes.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/privacy-policy-information-principle-strategy-rules-concept_53876-132193.jpg",
          imageAlt: "Digital compliance management dashboard",
        },
        {
          id: "service-3",
          title: "Corporate Governance Advisory",
          descriptions: [
            "Providing strategic advice on best practices in corporate governance, board management, stakeholder relations, and ethical conduct to foster transparency and accountability within your organization.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/talk-financiers_1098-15804.jpg",
          imageAlt: "Board meeting discussion",
        },
      ]}
      title="Comprehensive Services for Corporate Excellence"
      description="Our expertise spans across critical areas of corporate law, ensuring your business adheres to the highest standards of governance and compliance."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "metric-1",
          value: "150+",
          title: "Satisfied Clients",
          description: "Serving a diverse portfolio of businesses, from startups to established enterprises.",
          imageSrc: "http://img.b2bpic.net/free-photo/colorful-padlocks_181624-26297.jpg",
          imageAlt: "Happy clients",
        },
        {
          id: "metric-2",
          value: "10+",
          title: "Years of Experience",
          description: "A decade of unwavering commitment to corporate legal and secretarial excellence.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-business-leader-talking-assistant-cafe_1262-1842.jpg",
          imageAlt: "Professional experience",
        },
        {
          id: "metric-3",
          value: "98%",
          title: "Success Rate",
          description: "Consistently achieving positive outcomes in compliance and regulatory matters.",
          imageSrc: "http://img.b2bpic.net/free-photo/goals-target-aspiration-perforated-paper-graph_53876-41397.jpg",
          imageAlt: "Success rate chart",
        },
      ]}
      title="Our Impact & Dedication"
      description="Discover the key milestones and achievements that define our commitment to client success and professional excellence."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      members={[
        {
          id: "nimisha",
          name: "Nimisha Tayal",
          role: "Founder & Principal CS",
          description: "A seasoned Company Secretary with extensive experience in corporate law, governance, and compliance. Nimisha leads the firm with a vision for client-centric service and ethical practice.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-happy-senior-expert-with-flipchart_1262-1745.jpg",
          imageAlt: "Nimisha Tayal",
        },
        {
          id: "associate-1",
          name: "Amit Kumar",
          role: "Senior Associate CS",
          description: "Specializing in mergers & acquisitions and regulatory advisory, Amit brings profound legal expertise to complex corporate transactions.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-working-business-with-computer_482257-20185.jpg",
          imageAlt: "Amit Kumar",
        },
        {
          id: "associate-2",
          name: "Sonia Sharma",
          role: "Associate CS",
          description: "Sonia focuses on company incorporation and ongoing compliance, ensuring meticulous attention to detail and timely filings.",
          imageSrc: "http://img.b2bpic.net/free-photo/professional-woman-stylish-suit-office_23-2150167727.jpg",
          imageAlt: "Sonia Sharma",
        },
      ]}
      title="Meet Our Dedicated Team of Experts"
      description="Our team comprises highly qualified and experienced Company Secretaries and legal professionals committed to delivering exceptional service."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t-1",
          name: "Karan Singhania",
          role: "CEO",
          company: "Horizon Tech Solutions",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-content-mature-business-man-office_1262-2979.jpg",
          imageAlt: "Karan Singhania",
        },
        {
          id: "t-2",
          name: "Aisha Khan",
          role: "Director",
          company: "Creative Hub India",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-grey-haired-businessman-standing_74855-10324.jpg",
          imageAlt: "Aisha Khan",
        },
        {
          id: "t-3",
          name: "Vikram Malhotra",
          role: "Founder",
          company: "Eco-Innovate Ventures",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1702.jpg",
          imageAlt: "Vikram Malhotra",
        },
        {
          id: "t-4",
          name: "Simran Kaur",
          role: "Managing Partner",
          company: "Legal Path Consultants",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-positive-executive-work_1098-519.jpg",
          imageAlt: "Simran Kaur",
        },
        {
          id: "t-5",
          name: "Rahul Kapoor",
          role: "CFO",
          company: "Apex Financial Group",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-successful-middle-aged-business-leader_1262-5690.jpg",
          imageAlt: "Rahul Kapoor",
        },
        {
          id: "t-6",
          name: "Ananya Gupta",
          role: "Operations Head",
          company: "Logistics Pro",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-confident-asian-man-with-arms-crossed_1262-884.jpg",
          imageAlt: "Ananya Gupta",
        },
      ]}
      title="What Our Valued Clients Say"
      description="Hear directly from business leaders who have experienced the difference of partnering with NIMISHA TAYAL & ASSOCIATES."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Global Corp",
        "Innovate Solutions",
        "Dynamic Enterprises",
        "Pioneer Holdings",
        "Summit Group",
        "Visionary Brands",
        "Elite Ventures",
      ]}
      title="Proudly Partnering with Leading Businesses"
      description="We are honored to serve a diverse range of clients, building strong, lasting relationships through trusted advisory and diligent service."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq-1",
          title: "What are the benefits of hiring a Company Secretary?",
          content: "A Company Secretary ensures legal compliance, mitigates risks, advises on corporate governance, and manages critical documentation, allowing your management to focus on core business operations.",
        },
        {
          id: "faq-2",
          title: "Do you offer services for startups?",
          content: "Yes, we have specialized services tailored for startups, including company incorporation, legal structure advisory, and initial compliance filings to set your business on a solid legal foundation.",
        },
        {
          id: "faq-3",
          title: "How do you stay updated with regulatory changes?",
          content: "Our team continuously monitors regulatory bodies (like MCA, SEBI) for updates and engages in ongoing professional development to ensure our advice and services are always current and compliant.",
        },
        {
          id: "faq-4",
          title: "What is the typical timeline for company incorporation?",
          content: "The timeline can vary based on factors like company type and documentation. We strive for efficient processing, and can provide a more accurate estimate after an initial consultation.",
        },
        {
          id: "faq-5",
          title: "Is a physical meeting required for all services?",
          content: "While we value personal interactions, many of our services can be managed remotely through digital communication and secure online platforms, offering flexibility to our clients.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to common queries about our services, processes, and corporate compliance."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      text="Ready to elevate your corporate compliance and governance? Reach out to NIMISHA TAYAL & ASSOCIATES today for a personalized consultation."
      buttons={[
        {
          text: "Call Us Now",
          href: "tel:+919876543210",
        },
        {
          text: "Email Us",
          href: "mailto:info@nimishatayalandassociates.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="NIMISHA TAYAL & ASSOCIATES"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
