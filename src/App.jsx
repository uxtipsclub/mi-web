import { useState, useEffect, useRef } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)
  const [selectedLegalPage, setSelectedLegalPage] = useState(null)
  const [navVisible, setNavVisible] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [formStatus, setFormStatus] = useState('idle') // idle | submitting | success | error
  const lastScrollY = useRef(0)

  const heroWords = [
    { text: 'customer', color: '#a855f7' },
    { text: 'employee', color: '#4ade80' },
    { text: 'human', color: '#5eead4' },
  ]
  const [heroWordIndex, setHeroWordIndex] = useState(0)
  const [heroFading, setHeroFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroFading(true)
      setTimeout(() => {
        setHeroWordIndex(i => (i + 1) % heroWords.length)
        setHeroFading(false)
      }, 800)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < 10) {
        setNavVisible(true)
      } else if (currentScrollY < lastScrollY.current) {
        setNavVisible(true)
      } else {
        setNavVisible(false)
        setIsMenuOpen(false)
      }
      setShowScrollTop(currentScrollY > 400)
      lastScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Community', href: '#community' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact-form' },
  ]

  const speakingItems = [
    { label: "Leaders Exchange at Wegrow [en]", href: "https://www.linkedin.com/posts/wegrow-app_leadership-productivity-networking-activity-7268254989859373056-iAP2?utm_source=share&utm_medium=member_desktop" },
    { label: "World IA Day, Barcelona [en]", href: "https://www.linkedin.com/posts/eugeniajongewaard_worldiaday-employeeexperience-designleadership-activity-7169772541132095488-hmwV?utm_source=share&utm_medium=member_desktop" },
    { label: "UX Nordic Conference, Copenhagen [en]", href: "https://www.uxnordic.com/speaker/eugenia-jongewaard" },
    { label: "UX Maturity Workshop at Nestlé [en]", href: "https://www.linkedin.com/posts/eugeniajongewaard_userexperience-changemakers-designdriven-activity-7079879897229225984-s4hh?utm_source=share&utm_medium=member_desktop" },
    { label: "Human Experience of Work [en]", href: "https://events.zoom.us/ev/AhsnTtbVxXipXXKB-sRCMpwMs1UCfY8VEj-3Rzs2iCqVLy6B0vVN~AggLXsr32QYFjq8BlYLZ5I06Dg?lmt=1679691062000" },
    { label: "World Usability Day 22 at Nestlé [en]", href: "https://www.linkedin.com/posts/eugeniajongewaard_ux-event-worldusabilityday-activity-7000452766359814144-BBSY?utm_source=share&utm_medium=member_desktop" },
    { label: "Shiftseven Argentina [es]", href: "https://www.slideshare.net/eugeniaboer/transformando-experiencias-con-la-atencin-al-cliente" },
    { label: "WUD Córdoba, Argentina 2007 [es]", href: "https://worldusabilityday.org/" },
    { label: "Optimal Workshop Magazine [en]", href: "https://www.optimalworkshop.com/blog/crux-4-fresh-thinking-from-the-world-of-ux" },
    { label: "Featured in Torres Burriel Blog [es]", href: "https://www.torresburriel.com/weblog/2022/06/24/mujeres-referentes-en-ux-design/" },
  ]

  const interviewItems = [
    { label: "DesignOps Talk Adevinta [es]", href: "https://www.youtube.com/watch?v=lZ-won2qW_U&t=107s" },
    { label: "Hack tu Startup [es]", href: "https://www.youtube.com/watch?v=EHzAdPlpFXg&t=24s" },
    { label: "Service Design Show, Marc Fonteijn [en]", href: "https://www.servicedesignshow.com/circle/members/eugenia-jongewaard-de-boer/?utm_source=linkedin&utm_medium=social&utm_campaign=linkedin-post" },
    { label: "Podcast guest on UX Friends [es]", href: "https://www.youtube.com/watch?v=repN8aflIqo&t=4s" },
    { label: "UXtweak Blog [en]", href: "https://blog.uxtweak.com/women-in-ux-eugenia-jongewaard/?utm_source=linkedin&utm_medium=promo&utm_campaign=women-in-ux-eugenia-jongewaard" },
    { label: "IDA Chile [es]", href: "https://www.youtube.com/watch?v=G0zv1q48nNY&t=546s" },
    { label: "Anfisa Bogomolova [en]", href: "https://www.youtube.com/watch?v=XJE_2BMYnyo&t=312s" },
    { label: "Francisco Aguilera G. [es]", href: "https://www.youtube.com/watch?v=1edIKyzLuzA&t=114s" },
    { label: "Podcast guest on UXShot [es]", href: "https://medium.com/uxshot/14-compartir-conocimiento-e95e36a4efbe" },
  ]

  const caseStudies = [
    {
      id: 0,
      slug: '/case_lgt_advise',
      title: "Shaping the Future of Investment Advisory at LGT Bank",
      category: "Enterprise UX & Service Design",
      thumbnail: "/cases/case_lgt.png",
      year: "2024",
      client: "LGT Bank",
      overview: "I led UX strategy for a complex investment advisory platform, aligning stakeholders, scaling design operations, and shifting the organization toward data-driven decision-making.",
      challenge: "The platform suffered from fragmented workflows across trade execution, compliance, and client documentation, with two product teams working in silos and duplicating effort. Initial stakeholder resistance to user testing slowed evidence-based decision-making, and the organization lacked a shared standard for user research and design operations.",
      solution: "I drove strategic UX leadership alongside Product Management, introduced and scaled iterative usability testing within Agile sprints (with findings tracked directly in Jira), and championed the adoption of TheyDo to align two previously siloed product teams. I also led the first DesignOps initiatives at LGT Bank — standardizing processes and introducing AI-powered tools for interview synthesis and rapid prototyping — while mentoring a team of designers and contributing hands-on to UI delivery using the SAP Design System.",
      results: [
        { metric: "-50%", description: "Duplicated work across previously siloed product teams" },
        { metric: "1st", description: "Journey management framework at LGT, using TheyDo to align teams around user experience" },
      ],
      images: [
        { type: "bg-gradient-to-br from-slate-600 to-blue-800", label: "Platform Strategy" },
        { type: "bg-gradient-to-br from-blue-800 to-slate-700", label: "Journey Management" },
        { type: "bg-gradient-to-br from-slate-800 to-blue-700", label: "DesignOps & AI" }
      ],
      ndaNote: "Specific product visuals and detailed workflows are omitted in compliance with NDA."
    },
    {
      id: 6,
      slug: '/case_nestle_hr',
      title: "Empowering Nestlé Employees with a Self-Service HR Portal",
      category: "UX Strategy & Service Design",
      thumbnail: "/cases/case_nestle.png",
      year: "2023",
      client: "Nestlé",
      overview: "I led the UX redesign of an internal HR portal for over 275,000 employees, transforming a fragmented experience into a streamlined self-service platform across five global markets.",
      challenge: "The existing HR portal was fragmented and unintuitive, forcing employees to rely heavily on HR Business Partners and Customer Care agents for tasks they should have been able to handle independently. Navigation was misaligned with users' mental models, processes varied inconsistently across markets, and there was no shared design standard for the employee experience.",
      solution: "I applied a Lean UX Canvas to align stakeholder expectations, defined UX KPIs, and facilitated a co-creation workshop with 15 users to map personas, journeys, and pain points. I ran 19 card sorting sessions across 4 markets to restructure navigation around users' mental models, then led iterative usability testing rounds across regions. A UX ROI simulation demonstrated a +30% task completion improvement and a projected saving of $147,600 for a single task. I also contributed to the first design system at Nestlé for employee experience — covering foundations and a full component library across Desktop, Tablet, and Mobile — and led the team's transition from Sketch to Figma.",
      results: [
        { metric: "+80%", description: "Increase in self-service adoption post-launch" },
        { metric: "275K+", description: "Employees impacted across five Nestlé markets" },
      ],
      images: [
        { type: "bg-gradient-to-br from-red-600 to-red-800", label: "Portal Navigation & IA" },
        { type: "bg-gradient-to-br from-red-800 to-rose-700", label: "Component Library" },
        { type: "bg-gradient-to-br from-rose-700 to-red-900", label: "Usability Testing" }
      ]
    },
    /* Hidden case study — uncomment to re-enable:
    {
      id: 7,
      title: "Enhancing the Employee Transfer Journey at Nestlé",
      category: "Service Design",
      thumbnail: "bg-gradient-to-br from-rose-600 to-red-800",
      year: "2023",
      client: "Nestlé",
      overview: "As Service Designer at Nestlé, I led the end-to-end analysis and redesign strategy of the internal employee transfer process — a complex, cross-departmental challenge involving HR, IT, and multiple business units. Employees changing teams or roles faced delayed system access, unclear documentation, broken notifications, and a lack of standardized processes that significantly impacted their first day in a new role.",
      challenge: "The employee transfer process was fragmented across HR, IT, and business units with no shared ownership or visibility. Critical failures — from broken notification systems to access management gaps — went unaddressed because there was no unified view of the end-to-end experience, no structured prioritization of fixes, and no accountability for cross-functional issues.",
      solution: "I created an illustrative Employee National Transfer Journey map to surface pain points and align stakeholders around a shared understanding of the problem. I identified and classified 7 critical issues across the transfer process, rated by business impact (Medium to High severity). I then facilitated a MoSCoW workshop with key stakeholders to cluster 28 improvement initiatives into prioritized groups, providing quantitative scoring to guide decision-making. Priorities were translated into structured Work Packages with assigned owners, timelines, and budgets — enabling product teams to take immediate action.",
      results: [
        { metric: "7", description: "Critical issues identified and classified by business impact" },
        { metric: "28", description: "Improvement initiatives clustered and prioritized via MoSCoW workshop" },
        { metric: "Multi-dept", description: "Stakeholder alignment achieved across HR, IT, and business units" },
        { metric: "Action", description: "Product teams moved from problem awareness to structured execution" }
      ],
      images: [
        { type: "bg-gradient-to-br from-rose-500 to-red-700", label: "Transfer Journey Map" },
        { type: "bg-gradient-to-br from-red-700 to-rose-800", label: "Pain Point Analysis" },
        { type: "bg-gradient-to-br from-rose-800 to-red-600", label: "Work Package Definition" }
      ]
    },
    */
    {
      id: 8,
      slug: '/case_nestle_ux',
      title: "Growing UX Maturity & Embedding Service Design at Nestlé",
      category: "UX Consulting & Research",
      thumbnail: "/cases/cases_nestle_maturity.png",
      year: "2022",
      client: "Nestlé",
      overview: "I led a two-year initiative to establish UX as a core enterprise value at Nestlé IT — running assessments, building a community of practice, and integrating design into the Product Management curriculum.",
      challenge: "UX practice at Nestlé IT was fragmented and undervalued: no shared maturity baseline, no structured roadmap for growth, and no community connecting designers across regions. Design was rarely included early enough in product decisions, and accessibility was not yet a recognized service offering. Without organizational buy-in, user-centered design could not scale.",
      solution: "I applied the Nielsen Norman Group UX Maturity Framework to diagnose the organization across Culture, Strategy, Process, and Outcomes, then defined a structured growth roadmap. I established a cross-regional design community of practice through online and in-person events, developed UX Playbooks and guidelines, and integrated UX as a core pillar in Product Manager education across IT. I also facilitated a Design Hackathon — leading stakeholder workshops, creating Proto Personas and Service Blueprints, and introducing User Ecosystem Thinking to help teams design around the full employee experience.",
      results: [
        { metric: "+50%", description: "Increase in UX budget allocation secured" },
        { metric: "1st", description: "UX community of practice established across Nestlé regions" },
      ],
      images: [
        { type: "bg-gradient-to-br from-red-500 to-orange-600", label: "UX Maturity Roadmap" },
        { type: "bg-gradient-to-br from-orange-600 to-red-700", label: "Community of Practice" },
        { type: "bg-gradient-to-br from-red-700 to-orange-500", label: "Design Hackathon" }
      ]
    },
    {
      id: 9,
      slug: '/case_zendesk_latam',
      title: "Expanding Zendesk's Customer Base in Latin America",
      category: "CX Leadership & Market Expansion",
      thumbnail: "/cases/cases_zendesk.png",
      year: "2014",
      client: "Zendesk",
      overview: "As one of Zendesk's first employees, I spent 10 years shaping the company's presence across LATAM — leading support operations, launching community initiatives, and driving the company's growth to IPO.",
      challenge: "Zendesk had no established presence in Latin America — no local support infrastructure, no regional community, and no localized workflows for Spanish and Portuguese-speaking customers. Growing a market from scratch meant bridging CX operations, product localization, and on-the-ground relationship building simultaneously.",
      solution: "I streamlined multilingual support workflows and built reporting practices using Kibana, GoodData, Salesforce, and Jira to monitor CX metrics and surface trends. I synthesized customer insights to directly inform product decisions for LATAM markets, led and mentored a regional Tier 1 & 2 support team, and launched Zendesk's first LATAM social media channels. I organized customer meetups across São Paulo, Buenos Aires, Santiago de Chile, and Montevideo to reduce adoption barriers and build community. I also partnered with major accounts including LATAM Airlines, Twitter, and Groupon, and trained clients across LATAM and Spain to build custom reports and KPIs using MAQL within GoodData.",
      results: [
        { metric: "+80%", description: "Boost in customer experience through optimized support workflows" },
        { metric: "1 new office", description: "Opened in São Paulo as a result of LATAM market expansion. Clients: LATAM Airlines, Twitter, and Groupon" },
      ],
      images: [
        { type: "bg-gradient-to-br from-green-500 to-teal-700", label: "LATAM Market Expansion" },
        { type: "bg-gradient-to-br from-teal-600 to-green-800", label: "CX & Workflow Optimization" },
        { type: "bg-gradient-to-br from-green-700 to-teal-600", label: "Community & Account Management" }
      ]
    }
  ]

  const testimonials = [
    {
      text: "Eugenia instilled in me an appreciation for the value of maintaining a focus on User Experience, both in Support interactions and in the broader world of Design.",
      author: "James Peterson",
      role: "Technical Architect at Zendesk",
      linkedin: "https://www.linkedin.com/in/james-peterson-91655637/",
      photo: "/testimonials/james.png"
    },
    {
      text: "Eugenia is not just a true expert in CX and UX; she is an inspiring colleague whose insights and creativity elevate our projects.",
      author: "Sayaf Kofahi",
      role: "Head of Consumer Experience, Nestlé",
      linkedin: "https://www.linkedin.com/in/sayaf-kofahi/",
      photo: "/testimonials/Sayaf.png"
    },
    {
      text: "I recommend Eugenia as a team player with extraordinary attention to detail and I'm sure that she would add value to any initiative requiring design thinking knowledge and tools.",
      author: "Rafal Michalski",
      role: "Global EX at Nestlé",
      linkedin: "https://www.linkedin.com/in/rafal-m-michalski/",
      photo: "/testimonials/Rafal.jpeg"
    }
  ]

  const services = [
    {
      title: "Product & Experience Design",
      subtitle: "0→1",
      description: "Identifying product opportunities, prioritizing high-impact bets, and testing solutions through research and rapid experimentation.",
      features: ["Product Opportunity Mapping", "High-Impact Prioritization", "UX Research", "Rapid Prototyping & Testing"]
    },
    {
      title: "Product Adoption & Growth",
      subtitle: "Retention & Scale",
      description: "Designing onboarding, feedback loops, Voice of Customer programs, and customer insight systems to improve adoption and scale product value.",
      features: ["Onboarding Design", "Voice of Customer (VoC)", "Customer Insight Systems", "Feedback Loop Design"]
    },
    {
      title: "Service Design & Journey Management",
      subtitle: "Experience Operations",
      description: "Applying service design methods to align teams around customer journeys and enabling organizations to continuously monitor and improve experiences.",
      features: ["End-to-End Journey Mapping", "Service Blueprinting", "Experience Operations", "Cross-team Alignment"]
    },
    {
      title: "AI-Augmented Experience Strategy",
      subtitle: "Insight at Scale",
      description: "Helping organizations leverage AI to continuously understand customer behavior, generate insights from qualitative and quantitative data, and inform product decisions at scale.",
      features: ["AI-Powered Insight Generation", "Qualitative & Quantitative Synthesis at Scale", "Behavioral & Experience Intelligence", "AI-Enabled Design & Research Operations"]
    },
    {
      title: "Experience Strategy & Governance",
      subtitle: "Vision & Measurement",
      description: "Defining the experience vision, principles, and measurement frameworks that align product and business decisions around the customer.",
      features: ["Experience Vision & Principles", "Governance Frameworks", "Experience Measurement", "CX Metrics & KPIs"]
    },
    {
      title: "UX Capability Building & Maturity",
      subtitle: "Org Enablement",
      description: "Raising UX maturity across organizations through assessments, playbooks, design communities, and embedding user-centered thinking into product team education.",
      features: ["UX Maturity Assessment", "UX Playbooks & Guidelines", "Design Community of Practice", "Product Manager Education"]
    }
  ]

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Most projects take 4-12 weeks depending on scope and complexity. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you work with startups?",
      answer: "Absolutely! We love working with startups and have special packages designed for early-stage companies."
    },
    {
      question: "What is your design process?",
      answer: "We follow a proven 4-step process: Discovery, Design, Development, and Delivery. Each phase includes client collaboration and feedback."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we provide maintenance and support packages to ensure your product continues to perform optimally."
    }
  ]

  const getRelatedCaseStudies = (currentId) => {
    return caseStudies.filter(cs => cs.id !== currentId).slice(0, 2)
  }

  const selectCaseStudy = (caseStudy) => {
    setSelectedCaseStudy(caseStudy)
    window.history.pushState({ slug: caseStudy.slug }, '', caseStudy.slug)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const closeCaseStudy = () => {
    setSelectedCaseStudy(null)
    window.history.pushState({}, '', '/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const slug = window.location.pathname
    const match = caseStudies.find(cs => cs.slug === slug)
    if (match) setSelectedCaseStudy(match)

    const handlePopState = () => {
      const s = window.location.pathname
      const m = caseStudies.find(cs => cs.slug === s)
      setSelectedCaseStudy(m || null)
      if (m || s === '/') window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])


  if (selectedCaseStudy) {
    const relatedStudies = getRelatedCaseStudies(selectedCaseStudy.id)

    return (
      <div className="min-h-screen">
        {/* Header */}
        <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex items-center justify-between h-16">
              <button
                onClick={closeCaseStudy}
                className="text-xl font-black text-black tracking-widest hover:text-purple-700 transition-colors"
              >
                ← STUDIO
              </button>
              <button
                onClick={closeCaseStudy}
                className="bg-purple-700 text-white px-6 py-2.5 font-medium text-sm tracking-widest hover:bg-purple-800 transition-colors"
              >
                BACK TO HOME
              </button>
            </div>
          </div>
        </header>

        <div className="pt-16 pb-20">
          {/* Hero */}
          <section className="px-6 md:px-12 pt-16 pb-0 border-b border-gray-200">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200">
                <span className="text-xs font-bold tracking-widest text-purple-700">{selectedCaseStudy.category}</span>
                <span className="text-gray-300">|</span>
                <span className="text-xs font-bold tracking-widest text-gray-400">{selectedCaseStudy.year}</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black leading-none mb-8 text-black">{selectedCaseStudy.title}</h1>
              <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mb-12 font-light">{selectedCaseStudy.overview}</p>
              <div className="grid md:grid-cols-3 divide-x divide-gray-200 border-t border-gray-200 mb-0">
                <div className="py-8 md:pr-8">
                  <p className="text-xs font-bold tracking-widest mb-2 text-purple-700">CLIENT</p>
                  <p className="text-lg font-bold text-black">{selectedCaseStudy.client}</p>
                </div>
                <div className="py-8 md:px-8">
                  <p className="text-xs font-bold tracking-widest mb-2 text-purple-700">YEAR</p>
                  <p className="text-lg font-bold text-black">{selectedCaseStudy.year}</p>
                </div>
                <div className="py-8 md:pl-8">
                  <p className="text-xs font-bold tracking-widest mb-2 text-purple-700">CATEGORY</p>
                  <p className="text-lg font-bold text-black">{selectedCaseStudy.category}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Image */}
          <section className="px-6 md:px-12 py-12">
            <div className="max-w-7xl mx-auto">
              {selectedCaseStudy.thumbnail.startsWith('/')
                ? <img src={selectedCaseStudy.thumbnail} alt={selectedCaseStudy.title} className="w-full h-96 md:h-[600px] object-cover rounded-lg" />
                : <div className={`w-full h-96 md:h-[600px] rounded-lg ${selectedCaseStudy.thumbnail}`} />
              }
            </div>
          </section>

          {/* Challenge */}
          <section className="px-6 md:px-12 py-16 border-t border-gray-200">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
              <div>
                <p className="text-xs font-bold tracking-widest text-purple-700">THE CHALLENGE</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-black">{selectedCaseStudy.challenge}</p>
              </div>
            </div>
          </section>

          {/* Solution */}
          <section className="px-6 md:px-12 py-16 border-t border-gray-200">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
              <div>
                <p className="text-xs font-bold tracking-widest text-purple-700">OUR SOLUTION</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-xl leading-relaxed text-gray-700 mb-12">{selectedCaseStudy.solution}</p>
                <div className="grid md:grid-cols-3 gap-6">
                  {selectedCaseStudy.images.map((image, index) => (
                    <div key={index}>
                      <div className={`w-full h-72 rounded-lg ${image.type} mb-4`} />
                      <p className="text-xs font-bold tracking-widest text-gray-500">{image.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="px-6 md:px-12 py-16 bg-black text-white">
            <div className="max-w-7xl mx-auto">
              <p className="text-xs font-bold tracking-widest mb-12 text-purple-400">RESULTS</p>
              <div className="grid md:grid-cols-4 divide-x divide-gray-800 border border-gray-800">
                {selectedCaseStudy.results.map((result, index) => (
                  <div key={index} className="p-10">
                    <h3 className="text-5xl md:text-6xl font-black mb-4 text-purple-400">{result.metric}</h3>
                    <p className="text-sm text-gray-400 tracking-wide">{result.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* NDA Note */}
          {selectedCaseStudy.ndaNote && (
            <section className="px-6 md:px-12 py-8 bg-gray-50 border-t border-gray-200">
              <div className="max-w-7xl mx-auto flex items-start gap-3">
                <span className="text-xs font-bold tracking-widest text-gray-400 mt-0.5">NDA</span>
                <p className="text-sm text-gray-500 italic">{selectedCaseStudy.ndaNote}</p>
              </div>
            </section>
          )}

          {/* Related Case Studies */}
          <section className="px-6 md:px-12 py-16 border-t border-gray-200">
            <div className="max-w-7xl mx-auto">
              <p className="text-xs font-bold tracking-widest mb-12 text-purple-700">MORE WORK</p>
              <div className="grid md:grid-cols-2 gap-0 divide-x divide-gray-200 border border-gray-200">
                {relatedStudies.map((study) => (
                  <div
                    key={study.id}
                    onClick={() => selectCaseStudy(study)}
                    className="group cursor-pointer p-10 hover:bg-gray-50 transition-colors"
                  >
                    {study.thumbnail.startsWith('/')
                      ? <img src={study.thumbnail} alt={study.title} className="w-full h-64 object-cover mb-8 rounded-lg" />
                      : <div className={`w-full h-64 ${study.thumbnail} mb-8`} />
                    }
                    <p className="text-xs font-bold tracking-widest mb-3 text-purple-700">{study.category}</p>
                    <h3 className="text-2xl font-black mb-3 text-black group-hover:text-purple-700 transition-colors">{study.title}</h3>
                    <span className="text-sm font-bold tracking-widest text-black group-hover:text-purple-700 transition-colors">VIEW CASE STUDY →</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }

  // ─── Legal pages ────────────────────────────────────────────────────────────
  const legalPages = {
    'legal-notice': {
      title: 'Legal Notice',
      label: 'AVISO LEGAL — LSSI-CE',
      content: [
        {
          heading: 'Who runs this website',
          body: `In compliance with Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the following identifies the owner of this website:\n\n• Name: Eugenia Jongewaard\n• Activity: Independent UX/CX and Service Design consultant\n• NIF: [YOUR NIF/NIE]\n• Registered address: [YOUR FISCAL ADDRESS], Barcelona, Spain\n• Contact email: hola@eugeniajongewaard.com\n• Website: [YOUR DOMAIN]`
        },
        {
          heading: 'Terms of use',
          body: `By accessing and browsing this website, you agree to these terms. If you do not agree, please stop using the site.\n\nThis website provides information about professional services, content, and resources related to UX and service design. It is intended for professional and educational purposes.\n\nYou agree not to:\n• Attempt to damage, disrupt, or gain unauthorized access to the site or its systems\n• Use automated tools to scrape, copy, or distribute content without permission\n• Misrepresent your identity or affiliation when contacting through the site`
        },
        {
          heading: 'Intellectual property',
          body: `All content on this website — including texts, graphics, logos, images, videos, and design — is the exclusive property of Eugenia Jongewaard or used with proper authorization.\n\nYou may share links to this site and quote short excerpts with proper attribution. Reproducing, distributing, or adapting content for commercial purposes without written permission is not allowed.\n\nThe name, logo, and brand identity of Eugenia Jongewaard and UXTips are protected. Unauthorized use is prohibited.`
        },
        {
          heading: 'Liability disclaimer',
          body: `I make every effort to keep this website accurate and up to date, but I cannot guarantee that all information is complete or error-free at all times.\n\nI am not liable for:\n• Decisions made based on the content of this website\n• Technical issues beyond my control (outages, third-party failures)\n• Content on external websites linked from this site\n\nLinks to third-party websites are provided for reference only. I do not endorse or take responsibility for their content or practices.`
        },
        {
          heading: 'Applicable law and jurisdiction',
          body: `These terms are governed by Spanish law. Any disputes arising from the use of this website shall be subject to the jurisdiction of the courts of Barcelona, Spain, unless applicable consumer law provides otherwise.`
        },
      ]
    },
    'privacy-policy': {
      title: 'Privacy Policy',
      label: 'POLÍTICA DE PRIVACIDAD — GDPR',
      content: [
        {
          heading: 'Who is responsible for your data',
          body: `Data Controller: Eugenia Jongewaard\nNIF: [YOUR NIF/NIE]\nAddress: [YOUR FISCAL ADDRESS], Barcelona, Spain\nEmail: hola@eugeniajongewaard.com\n\nI take your privacy seriously. This policy explains what personal data I collect, why, and how I handle it — in plain language.`
        },
        {
          heading: 'Contact form',
          body: `When you fill out the contact form, I collect your name, email address, and any information you choose to share in your message.\n\nPurpose: To respond to your enquiry and assess whether we can work together.\nLegal basis: Your consent (Article 6.1.a GDPR) and, where applicable, pre-contractual measures (Article 6.1.b GDPR).\nRetention: I keep this data for up to [12/24] months, or until our conversation is resolved.`
        },
        {
          heading: 'Newsletter (customize if applicable)',
          body: `If you subscribe to receive updates or resources, I collect your email address.\n\nPurpose: To send you relevant content, resources, or updates about my work.\nLegal basis: Your explicit consent.\nRetention: Until you unsubscribe. You can do so at any time via the link in every email.`
        },
        {
          heading: 'Analytics (customize if applicable)',
          body: `I use [Google Analytics / Plausible / other] to understand how visitors use this website. This may collect anonymized data such as pages visited, time on site, and general location.\n\nPurpose: To improve the website experience.\nLegal basis: Your consent via the cookie banner.\nRetention: As defined by the analytics provider's settings (typically 14–26 months).`
        },
        {
          heading: 'Who I share your data with',
          body: `I do not sell or rent your personal data. I may share it with trusted service providers strictly to operate this website:\n\n• [Email provider, e.g. Gmail/Zoho] — Receiving contact form messages\n• [Newsletter tool, e.g. Mailchimp / ConvertKit] — Managing subscriptions\n• [Analytics tool] — Website analytics\n• [Hosting provider] — Website hosting\n\nWhere providers are based outside the EU, I ensure appropriate safeguards are in place (e.g. Standard Contractual Clauses).`
        },
        {
          heading: 'Your rights',
          body: `Under GDPR, you have the right to:\n\n• Access — request a copy of the data I hold about you\n• Rectification — ask me to correct inaccurate data\n• Erasure — ask me to delete your data ("right to be forgotten")\n• Restriction — ask me to limit how I use your data\n• Portability — receive your data in a structured, machine-readable format\n• Objection — object to processing based on legitimate interest\n• Withdraw consent — at any time, without affecting prior processing\n\nTo exercise any of these rights, email me at hola@eugeniajongewaard.com. I will respond within 30 days.\n\nIf you believe your rights have been violated, you can lodge a complaint with the Spanish Data Protection Authority (AEPD): www.aepd.es`
        },
        {
          heading: 'Security',
          body: `I apply reasonable technical and organizational measures to protect your personal data from unauthorized access, loss, or misuse. No transmission over the internet is 100% secure, but I take this responsibility seriously.`
        },
        {
          heading: 'Changes to this policy',
          body: `I may update this policy occasionally. If changes are significant, I will notify you.\n\nLast updated: March 2026`
        },
      ]
    },
    'cookie-policy': {
      title: 'Cookie Policy',
      label: 'POLÍTICA DE COOKIES',
      content: [
        {
          heading: 'What are cookies',
          body: `Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and understand how you use it.`
        },
        {
          heading: 'Strictly necessary cookies',
          body: `These are essential for the website to function. They cannot be disabled.\n\n• Session cookie — Maintains basic site functionality — Duration: Session\n• [Any framework cookies, e.g. CSRF protection if applicable] — Duration: Session`
        },
        {
          heading: 'Analytics cookies (customize if applicable)',
          body: `These help me understand how visitors interact with the site so I can improve it. They do not identify you personally.\n\n• _ga, _ga_* — Google Analytics — Tracks page views and sessions — Duration: 2 years\n\nThese cookies are only set after you give your consent.`
        },
        {
          heading: 'Functional cookies (customize if applicable)',
          body: `Used to remember your preferences (e.g. language, region). Not strictly necessary but improve your experience.`
        },
        {
          heading: 'How to manage cookies',
          body: `You can control and disable cookies at any time through your browser settings:\n\n• Chrome: support.google.com/chrome/answer/95647\n• Firefox: support.mozilla.org\n• Safari: support.apple.com\n• Edge: support.microsoft.com\n\nNote: disabling cookies may affect how some parts of this website work.\n\nYou can also opt out of Google Analytics specifically using the Google Analytics Opt-out Browser Add-on.`
        },
        {
          heading: 'Consent',
          body: `When you first visit this website, a cookie banner will ask for your consent before any non-essential cookies are set. You can change your preferences at any time.\n\nLast updated: March 2026`
        },
      ]
    }
  }

  if (selectedLegalPage) {
    const page = legalPages[selectedLegalPage]
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex items-center justify-between h-16">
              <button onClick={() => setSelectedLegalPage(null)} className="text-xl font-black text-black tracking-widest hover:text-purple-700 transition-colors">
                ← BACK
              </button>
              <button onClick={() => setSelectedLegalPage(null)} className="bg-purple-700 text-white px-6 py-2.5 font-medium text-sm tracking-widest hover:bg-purple-800 transition-colors">
                BACK TO HOME
              </button>
            </div>
          </div>
        </header>

        <div className="pt-16">
          <section className="px-6 md:px-12 pt-16 pb-12 border-b border-gray-200">
            <div className="max-w-4xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-purple-700 block mb-6">{page.label}</span>
              <h1 className="text-5xl md:text-7xl font-black leading-none text-black mb-4">{page.title}</h1>
              <p className="text-sm text-gray-400 tracking-wide">Last updated: March 2026 · Eugenia Jongewaard · hola@eugeniajongewaard.com</p>
            </div>
          </section>

          <section className="px-6 md:px-12 py-16">
            <div className="max-w-4xl mx-auto space-y-12">
              {page.content.map((section, i) => (
                <div key={i} className="border-t border-gray-100 pt-10">
                  <h2 className="text-xl font-black text-black mb-4">{section.heading}</h2>
                  {section.body.split('\n').map((line, j) => (
                    line.trim() === ''
                      ? <br key={j} />
                      : <p key={j} className="text-gray-600 leading-relaxed font-light mb-1">{line}</p>
                  ))}
                </div>
              ))}
            </div>
          </section>

          <footer className="px-6 md:px-12 py-10 border-t border-gray-200 bg-gray-50">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-gray-400 tracking-wide">© 2026 Eugenia Jongewaard. All rights reserved.</p>
              <div className="flex gap-6">
                {Object.entries(legalPages).filter(([key]) => key !== selectedLegalPage).map(([key, p]) => (
                  <button key={key} onClick={() => { setSelectedLegalPage(key); window.scrollTo({ top: 0 }) }} className="text-xs text-purple-700 hover:underline tracking-wide">
                    {p.title}
                  </button>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">

      {/* Header */}
      <header className={`fixed top-0 w-full bg-white z-50 border-b border-gray-200 transition-transform duration-300 ${navVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16">
            <a href="#" aria-label="Eugenia Jongewaard — Go to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="/eugenia_logo_main.png" alt="Eugenia Jongewaard - Home" className="h-8 w-auto" />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center divide-x divide-gray-300 border-x border-gray-300">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-6 py-[18px] text-black hover:text-purple-700 font-medium text-sm tracking-widest transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a href="https://uxtipsclub.beehiiv.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-[18px] text-black hover:text-purple-700 font-medium text-sm tracking-widest transition-colors">
                Newsletter ↗
              </a>
              <a href="https://calendar.app.google/66NHCC4gRmeURyKt8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-[18px] bg-purple-700 text-white font-bold text-sm tracking-widest hover:bg-purple-800 transition-colors">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Book a call ↗
              </a>
            </nav>

            {/* Mobile Burger */}
            <button
              onClick={toggleMenu}
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
            >
              <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>

          {/* Mobile Menu */}
          <nav id="mobile-nav" aria-label="Mobile navigation" className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="flex flex-col border-t border-gray-200">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMenuOpen(false)
                    setTimeout(() => {
                      const target = document.querySelector(item.href)
                      if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 64, behavior: 'smooth' })
                    }, 300)
                  }}
                  className="px-0 py-4 text-black hover:text-purple-700 font-medium text-sm tracking-widest transition-colors border-b border-gray-100"
                >
                  {item.name}
                </a>
              ))}
              <a href="https://uxtipsclub.beehiiv.com/" target="_blank" rel="noopener noreferrer" className="px-0 py-4 text-black hover:text-purple-700 font-medium text-sm tracking-widest transition-colors border-b border-gray-100 block">
                Newsletter ↗
              </a>
              <a href="https://calendar.app.google/66NHCC4gRmeURyKt8" target="_blank" rel="noopener noreferrer" className="my-4 flex items-center gap-2 bg-purple-700 text-white px-6 py-3 font-bold text-sm tracking-widest hover:bg-purple-800 transition-colors text-left">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Book a call ↗
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-16 text-white flex flex-col overflow-hidden bg-black" style={{ minHeight: '100dvh' }}>

        {/* Background video — YouTube embed scaled to cover full viewport */}
        <div className="absolute inset-0 overflow-hidden" style={{ pointerEvents: 'none' }}>
          <iframe
            src="https://www.youtube.com/embed/UE9q2qaW3Po?autoplay=1&mute=1&loop=1&playlist=UE9q2qaW3Po&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
            allow="autoplay; fullscreen"
            title="Hero background video"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 'max(100%, 177.78vh)',
              height: 'max(100%, 56.25vw)',
              transform: 'translate(-50%, -50%)',
              filter: 'blur(2px) brightness(0.45)',
              border: 'none',
            }}
          />
        </div>

        {/* Dark overlay for extra contrast */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.5)' }} />

        {/* Main hero content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 py-6 md:py-16">
          <div>
            <h1 className="text-6xl md:text-8xl lg:text-8xl font-black leading-none tracking-tight text-white mb-6 md:mb-12">
              Let's transform<br />
              <span
                style={{
                  color: heroWords[heroWordIndex].color,
                  display: 'inline-block',
                  fontFamily: '"pollen-web", serif',
                  fontSize: '1.4em',
                  fontStyle: 'italic',
                  opacity: heroFading ? 0 : 1,
                  transform: heroFading ? 'translateY(12px)' : 'translateY(0)',
                  transition: 'opacity 0.8s ease, transform 0.8s ease',
                }}
              >
                {heroWords[heroWordIndex].text}
              </span><br />
              experiences
            </h1>
            <div className="flex flex-col gap-6 border-t border-white/10 pt-6 md:pt-10">
              <p className="text-base text-gray-300 leading-relaxed font-light max-w-xl">
                Hi! My name is Eugenia and I help organizations craft customer-centered services and products while empowering teams to lead meaningful change.
              </p>
              <div>
                <a
                  href="#work"
                  onClick={(e) => {
                    e.preventDefault()
                    const target = document.querySelector('#work')
                    if (target) target.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-block border border-purple-500 text-purple-400 px-8 py-4 font-black text-sm tracking-widest hover:bg-purple-700 hover:text-white hover:border-purple-700 transition-colors"
                >
                  LEARN MORE ↓
                </a>
              </div>
            </div>

            {/* Trusted by — inline in hero */}
            <div className="mt-16 pt-10 border-t border-white/10">
              <p className="text-xs font-bold tracking-widest text-gray-500 mb-8">TRUSTED BY</p>
              <div className="flex flex-wrap items-center gap-6">
                {[
                  { name: "Zendesk", src: "/logos/zendesk.png" },
                  { name: "Nestlé", src: "/logos/nestle.png" },
                  { name: "Deloitte", src: "/logos/deloitte.png" },
                  { name: "LGT", src: "/logos/lgt.png" },
                ].map((brand) => (
                  <div key={brand.name} className="flex items-center justify-center h-10 px-5 bg-white/50 rounded">
                    <img src={brand.src} alt={brand.name} className="h-6 w-auto object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-12 bg-black text-white border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-gray-800 pb-6 mb-12 flex justify-between items-end">
            <span className="text-xs font-bold tracking-widest text-purple-400">001 / TESTIMONIALS</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black leading-none text-white mb-16">
            What clients<br />
            <span style={{ color: '#4ade80', fontFamily: '"pollen-web", serif', fontStyle: 'italic', fontSize: '1.2em' }}>say</span>
          </h2>
          <div className="grid md:grid-cols-3 divide-x divide-gray-800 border border-gray-800">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-10 border-t-2 border-t-purple-700">
                <p className="text-lg mb-8 leading-relaxed text-gray-300 font-light">"{testimonial.text}"</p>
                <div className="border-t border-gray-800 pt-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-purple-700 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    {testimonial.photo
                      ? <img src={testimonial.photo} alt={testimonial.author} className="w-full h-full object-cover" />
                      : <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    }
                  </div>
                  <div>
                    {testimonial.linkedin
                      ? <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer" className="font-black text-sm tracking-widest text-white hover:text-purple-400 transition-colors">{testimonial.author}</a>
                      : <p className="font-black text-sm tracking-widest text-white">{testimonial.author}</p>
                    }
                    <p className="text-xs text-purple-400 tracking-widest mt-1">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 border-t border-gray-800 pt-8">
            <a
              href="https://www.linkedin.com/in/eugeniajongewaard/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-gray-400 hover:text-purple-400 transition-colors"
            >
              Read more than 16 verified reviews on LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-gray-200 pb-6 mb-12 flex justify-between items-end">
            <span className="text-xs font-bold tracking-widest text-purple-700">002 / WORK</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black leading-none text-black mb-16">
            Latest<br />
            <span className="text-purple-700" style={{ fontFamily: '"pollen-web", serif', fontStyle: 'italic', fontSize: '1.2em' }}>projects</span>
          </h2>

          <div className="space-y-0">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`grid lg:grid-cols-2 gap-0 items-center border-b border-gray-200 py-16 ${index % 2 === 1 ? '' : ''}`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} px-0 lg:pr-12`}>
                  <div className="relative">
                    <span className="absolute top-4 left-4 z-10 text-xs font-black tracking-widest text-white bg-black px-3 py-1">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div
                      className={`w-full h-80 lg:h-[460px] rounded-lg ${study.thumbnail.startsWith('/') ? 'object-cover' : study.thumbnail}`}
                      style={study.thumbnail.startsWith('/') ? { backgroundImage: `url(${study.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1 lg:pr-12' : 'lg:pl-12'} mt-8 lg:mt-0`}>
                  <p className="text-xs font-bold tracking-widest mb-4 text-purple-700">{study.category} · {study.year}</p>
                  <h3 className="text-4xl md:text-5xl font-black mb-6 text-black leading-tight">{study.title}</h3>
                  <p className="text-base text-gray-500 mb-8 leading-relaxed font-light">{study.overview}</p>

                  <div className="grid grid-cols-2 gap-0 mb-8 border border-gray-200 divide-x divide-gray-200">
                    {study.results.slice(0, 2).map((result, rIndex) => (
                      <div key={rIndex} className="p-6">
                        <p className="text-3xl font-black text-purple-700 mb-1">{result.metric}</p>
                        <p className="text-xs text-gray-500 tracking-wide">{result.description}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <a
                      href="#contact-form"
                      className="inline-block border border-black text-black px-8 py-4 font-black text-sm tracking-widest hover:bg-black hover:text-white transition-colors"
                    >
                      REQUEST PORTFOLIO →
                    </a>
                    <p className="text-xs text-gray-400 tracking-wide mt-2">Case study coming soon</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-gray-200 pb-6 mb-12 flex justify-between items-end">
            <span className="text-xs font-bold tracking-widest text-purple-700">003 / SERVICES</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black leading-none text-black mb-16">
            How we can<br />
            <span className="text-purple-700" style={{ fontFamily: '"pollen-web", serif', fontStyle: 'italic', fontSize: '1.2em' }}>work together</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
            {services.map((service, index) => (
              <div key={index} className="group p-10 border border-gray-200 -mt-px -ml-px bg-white hover:bg-purple-700 transition-colors duration-300 cursor-default">
                <p className="text-xs font-bold tracking-widest mb-2 text-purple-700 group-hover:text-purple-200 transition-colors duration-300">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="text-2xl font-black mb-1 text-black group-hover:text-white transition-colors duration-300">{service.title}</h3>
                <p className="text-xs font-bold tracking-widest mb-6 text-gray-400 group-hover:text-purple-300 transition-colors duration-300">{service.subtitle}</p>
                <p className="text-sm leading-relaxed mb-8 text-gray-500 group-hover:text-purple-100 transition-colors duration-300">{service.description}</p>
                <ul className="space-y-0 divide-y divide-gray-100 group-hover:divide-purple-600">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="py-4 text-sm tracking-wide text-gray-600 group-hover:text-purple-100 transition-colors duration-300">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube / Community */}
      <section id="community" className="bg-black text-white overflow-hidden">
        <style>{`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .marquee-left { animation: marquee-left 35s linear infinite; }
          .marquee-right { animation: marquee-right 40s linear infinite; }
          .marquee-left:hover, .marquee-right:hover { animation-play-state: paused; }
        `}</style>

        {/* Text content */}
        <div className="max-w-7xl mx-auto px-12 md:px-16 pt-20 pb-16">
          <span className="text-xs font-bold tracking-widest text-purple-400 mb-8 block">004 / COMMUNITY</span>
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <h2 className="text-5xl md:text-7xl font-black leading-none text-white">
              Helping designers<br />
              <span style={{ color: '#5eead4', fontFamily: '"pollen-web", serif', fontStyle: 'italic', fontSize: '1.2em' }}>level up</span><br />
              their careers
            </h2>
            <div>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-6">
                In 2016 I created one of the first Spanish YouTube Channels about UX Design reaching today to more than 50k subscribers. I created this space to share my experiences, knowledge and help people from the spanish community transition to UX.
              </p>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                I've also built an exclusive community with 200+ members, helping designers evolve into strategy, AI, and design leadership.
              </p>
              <div className="flex flex-col lg:flex-row gap-4">
                <a href="https://www.youtube.com/@UXTips" target="_blank" rel="noopener noreferrer" className="border border-purple-500 text-purple-400 px-8 py-4 font-black text-xs tracking-widest hover:bg-purple-700 hover:text-white hover:border-purple-700 transition-colors text-center">
                  WATCH ON YOUTUBE ↗
                </a>
                <a href="https://uxtips.club" target="_blank" rel="noopener noreferrer" className="border border-gray-600 text-gray-400 px-8 py-4 font-black text-xs tracking-widest hover:border-white hover:text-white transition-colors text-center">
                  JOIN THE COMMUNITY ↗
                </a>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-800">
            <div className="p-8 border-r border-gray-800">
              <p className="text-4xl font-black text-purple-400 mb-1">50K+</p>
              <p className="text-xs font-bold tracking-widest text-gray-500">SUBSCRIBERS</p>
            </div>
            <div className="p-8 border-r border-gray-800">
              <p className="text-4xl font-black text-purple-400 mb-1">2016</p>
              <p className="text-xs font-bold tracking-widest text-gray-500">CHANNEL FOUNDED</p>
            </div>
            <div className="p-8 border-r border-gray-800">
              <p className="text-4xl font-black text-purple-400 mb-1">200+</p>
              <p className="text-xs font-bold tracking-widest text-gray-500">EXCLUSIVE COMMUNITY MEMBERS</p>
            </div>
            <div className="p-8">
              <p className="text-4xl font-black text-purple-400 mb-1">1:1</p>
              <p className="text-xs font-bold tracking-widest text-gray-500">PERSONALIZED COACHING</p>
            </div>
          </div>
        </div>

        {/* Carousel row 1 — scrolls left */}
        <div className="overflow-hidden mb-4 border-t border-gray-800">
          <div className="flex gap-4 marquee-left w-max py-4 px-2">
            {[
              { title: "Cómo crear Videos con IA para contar Historias en UX - Google Flow + Whisk (Primera Parte)", color: "from-purple-600 to-indigo-700", thumbnail: "https://i.ytimg.com/vi/DdjDPdILup0/hqdefault.jpg", url: "https://youtu.be/DdjDPdILup0" },
              { title: "Cursor - Tutorial para Principiantes (Vibe-coding)", color: "from-indigo-600 to-blue-700", thumbnail: "https://i.ytimg.com/vi/Wt4Nfza_v-U/hqdefault.jpg", url: "https://youtu.be/Wt4Nfza_v-U" },
              { title: "De Relume a Cursor en 5 minutos: Acelera tu Diseño sin perder Calidad", color: "from-violet-600 to-purple-700", thumbnail: "https://i.ytimg.com/vi/4fp3Tgo7itE/hqdefault.jpg", url: "https://youtu.be/4fp3Tgo7itE" },
              { title: "Convierte tu IDEA en un PROTOTIPO en minutos con UX Pilot + Figma 🚀", color: "from-blue-600 to-violet-700", thumbnail: "https://i.ytimg.com/vi/WhFGNrN7OOA/hqdefault.jpg", url: "https://youtu.be/WhFGNrN7OOA" },
              { title: "¿Qué es UX Design? - La historia", color: "from-purple-700 to-pink-700", thumbnail: "https://i.ytimg.com/vi/qIrON3eK38A/hqdefault.jpg", url: "https://youtu.be/qIrON3eK38A" },
              { title: "Ruined by Design [Reseña de Libro]", color: "from-fuchsia-600 to-purple-700", thumbnail: "https://i.ytimg.com/vi/VwjvaL2QtZQ/hqdefault.jpg", url: "https://youtu.be/VwjvaL2QtZQ" },
              { title: "Como una conferencia de UX cambió mi carrera + Sorteo!", color: "from-indigo-700 to-purple-600", thumbnail: "https://i.ytimg.com/vi/Fc1wkEoPIx8/hqdefault.jpg", url: "https://youtu.be/Fc1wkEoPIx8" },
              { title: "Cómo mejorar tus habilidades en UX Design con UXCel", color: "from-purple-600 to-violet-800", thumbnail: "https://i.ytimg.com/vi/dEvJ0L4PO80/hqdefault.jpg", url: "https://youtu.be/dEvJ0L4PO80" },
            ].concat([
              { title: "Cómo crear Videos con IA para contar Historias en UX - Google Flow + Whisk (Primera Parte)", color: "from-purple-600 to-indigo-700", thumbnail: "https://i.ytimg.com/vi/DdjDPdILup0/hqdefault.jpg", url: "https://youtu.be/DdjDPdILup0" },
              { title: "Cursor - Tutorial para Principiantes (Vibe-coding)", color: "from-indigo-600 to-blue-700", thumbnail: "https://i.ytimg.com/vi/Wt4Nfza_v-U/hqdefault.jpg", url: "https://youtu.be/Wt4Nfza_v-U" },
              { title: "De Relume a Cursor en 5 minutos: Acelera tu Diseño sin perder Calidad", color: "from-violet-600 to-purple-700", thumbnail: "https://i.ytimg.com/vi/4fp3Tgo7itE/hqdefault.jpg", url: "https://youtu.be/4fp3Tgo7itE" },
              { title: "Convierte tu IDEA en un PROTOTIPO en minutos con UX Pilot + Figma 🚀", color: "from-blue-600 to-violet-700", thumbnail: "https://i.ytimg.com/vi/WhFGNrN7OOA/hqdefault.jpg", url: "https://youtu.be/WhFGNrN7OOA" },
              { title: "¿Qué es UX Design? - La historia", color: "from-purple-700 to-pink-700", thumbnail: "https://i.ytimg.com/vi/qIrON3eK38A/hqdefault.jpg", url: "https://youtu.be/qIrON3eK38A" },
              { title: "Ruined by Design [Reseña de Libro]", color: "from-fuchsia-600 to-purple-700", thumbnail: "https://i.ytimg.com/vi/VwjvaL2QtZQ/hqdefault.jpg", url: "https://youtu.be/VwjvaL2QtZQ" },
              { title: "Como una conferencia de UX cambió mi carrera + Sorteo!", color: "from-indigo-700 to-purple-600", thumbnail: "https://i.ytimg.com/vi/Fc1wkEoPIx8/hqdefault.jpg", url: "https://youtu.be/Fc1wkEoPIx8" },
              { title: "Cómo mejorar tus habilidades en UX Design con UXCel", color: "from-purple-600 to-violet-800", thumbnail: "https://i.ytimg.com/vi/dEvJ0L4PO80/hqdefault.jpg", url: "https://youtu.be/dEvJ0L4PO80" },
            ]).map((video, i) => {
              const Card = (
                <div className="flex-shrink-0 w-56 cursor-pointer group">
                  <div className={`w-full h-32 bg-gradient-to-br ${video.color} relative mb-3 overflow-hidden rounded-lg`}>
                    {video.thumbnail && <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                      <div className="w-10 h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center">
                        <span className="text-white text-sm ml-1">▶</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs font-bold text-gray-300 leading-snug mb-1 group-hover:text-white transition-colors line-clamp-2">{video.title}</p>
                </div>
              )
              return video.url
                ? <a key={i} href={video.url} target="_blank" rel="noopener noreferrer">{Card}</a>
                : <div key={i}>{Card}</div>
            })}
          </div>
        </div>

        {/* Carousel row 2 — scrolls right */}
        <div className="overflow-hidden mb-6 border-b border-gray-800">
          <div className="flex gap-4 marquee-right w-max py-4 px-2">
            {[
              { title: "Rethinking Users [Reseña de Libro]", color: "from-pink-600 to-purple-700", thumbnail: "https://i.ytimg.com/vi/ROTM4cO-oBo/hqdefault.jpg", url: "https://youtu.be/ROTM4cO-oBo" },
              { title: "Cómo crear y presentar los flujos de usuario con Overflow", color: "from-purple-600 to-rose-700", thumbnail: "https://i.ytimg.com/vi/4JQJ-MVFvH4/hqdefault.jpg", url: "https://youtu.be/4JQJ-MVFvH4" },
              { title: "Colaborando con Desarrolladores [Entrevista a Michael de Optimal Workshop]", color: "from-violet-600 to-fuchsia-700", thumbnail: "https://i.ytimg.com/vi/jWi6BqMHc18/hqdefault.jpg", url: "https://youtu.be/jWi6BqMHc18" },
              { title: "¿Cómo saber qué método de investigación de usuario hacer y cuándo?", color: "from-indigo-600 to-purple-800", thumbnail: "https://i.ytimg.com/vi/sqG0Ch7mPKg/hqdefault.jpg", url: "https://youtu.be/sqG0Ch7mPKg" },
              { title: "Análisis de Prueba de Usabilidad con Reframer [Optimal Workshop]", color: "from-purple-800 to-blue-700", thumbnail: "https://i.ytimg.com/vi/KfcKYQgXQnA/hqdefault.jpg", url: "https://youtu.be/KfcKYQgXQnA" },
              { title: "Mi transición a Diseño de Servicios (te cuento mi proceso)", color: "from-blue-700 to-indigo-600", thumbnail: "https://i.ytimg.com/vi/UE9q2qaW3Po/hqdefault.jpg", url: "https://youtu.be/UE9q2qaW3Po" },
              { title: "Volver al verdadero UX", color: "from-fuchsia-700 to-violet-600", thumbnail: "https://i.ytimg.com/vi/7hUNbMU_ZYM/hqdefault.jpg", url: "https://youtu.be/7hUNbMU_ZYM" },
              { title: "5 libros para comenzar en Diseño de Servicios", color: "from-purple-700 to-indigo-800", thumbnail: "https://i.ytimg.com/vi/kBkdUzmz27w/hqdefault.jpg", url: "https://youtu.be/kBkdUzmz27w" },
            ].concat([
              { title: "Rethinking Users [Reseña de Libro]", color: "from-pink-600 to-purple-700", thumbnail: "https://i.ytimg.com/vi/ROTM4cO-oBo/hqdefault.jpg", url: "https://youtu.be/ROTM4cO-oBo" },
              { title: "Cómo crear y presentar los flujos de usuario con Overflow", color: "from-purple-600 to-rose-700", thumbnail: "https://i.ytimg.com/vi/4JQJ-MVFvH4/hqdefault.jpg", url: "https://youtu.be/4JQJ-MVFvH4" },
              { title: "Colaborando con Desarrolladores [Entrevista a Michael de Optimal Workshop]", color: "from-violet-600 to-fuchsia-700", thumbnail: "https://i.ytimg.com/vi/jWi6BqMHc18/hqdefault.jpg", url: "https://youtu.be/jWi6BqMHc18" },
              { title: "¿Cómo saber qué método de investigación de usuario hacer y cuándo?", color: "from-indigo-600 to-purple-800", thumbnail: "https://i.ytimg.com/vi/sqG0Ch7mPKg/hqdefault.jpg", url: "https://youtu.be/sqG0Ch7mPKg" },
              { title: "Análisis de Prueba de Usabilidad con Reframer [Optimal Workshop]", color: "from-purple-800 to-blue-700", thumbnail: "https://i.ytimg.com/vi/KfcKYQgXQnA/hqdefault.jpg", url: "https://youtu.be/KfcKYQgXQnA" },
              { title: "Mi transición a Diseño de Servicios (te cuento mi proceso)", color: "from-blue-700 to-indigo-600", thumbnail: "https://i.ytimg.com/vi/UE9q2qaW3Po/hqdefault.jpg", url: "https://youtu.be/UE9q2qaW3Po" },
              { title: "Volver al verdadero UX", color: "from-fuchsia-700 to-violet-600", thumbnail: "https://i.ytimg.com/vi/7hUNbMU_ZYM/hqdefault.jpg", url: "https://youtu.be/7hUNbMU_ZYM" },
              { title: "5 libros para comenzar en Diseño de Servicios", color: "from-purple-700 to-indigo-800", thumbnail: "https://i.ytimg.com/vi/kBkdUzmz27w/hqdefault.jpg", url: "https://youtu.be/kBkdUzmz27w" },
            ]).map((video, i) => {
              const Card = (
                <div className="flex-shrink-0 w-56 cursor-pointer group">
                  <div className={`w-full h-32 bg-gradient-to-br ${video.color} relative mb-3 overflow-hidden rounded-lg`}>
                    {video.thumbnail && <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                      <div className="w-10 h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center">
                        <span className="text-white text-sm ml-1">▶</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs font-bold text-gray-300 leading-snug mb-1 group-hover:text-white transition-colors line-clamp-2">{video.title}</p>
                </div>
              )
              return video.url
                ? <a key={i} href={video.url} target="_blank" rel="noopener noreferrer">{Card}</a>
                : <div key={i}>{Card}</div>
            })}
          </div>
        </div>
      </section>

      {/* FAQ — hidden, re-enable by uncommenting
      <section className="py-20 px-6 md:px-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="border-b border-gray-200 pb-6 mb-16 flex justify-between items-end">
            <span className="text-xs font-bold tracking-widest text-purple-700">008 / FAQ</span>
            <span className="text-xs text-gray-400 tracking-widest">FREQUENTLY ASKED</span>
          </div>
          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-8 text-left flex items-center justify-between group"
                >
                  <span className="font-black text-lg text-black tracking-tight group-hover:text-purple-700 transition-colors">{faq.question}</span>
                  <span className={`text-2xl font-light ml-4 flex-shrink-0 transition-colors ${openFaq === index ? 'text-purple-700' : 'text-black'}`}>
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="pb-8">
                    <p className="text-gray-500 leading-relaxed font-light border-l-2 border-purple-500 pl-6">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* About */}
      <section id="about" className="py-20 px-6 md:px-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-gray-200 pb-6 mb-12 flex justify-between items-end">
            <span className="text-xs font-bold tracking-widest text-purple-700">005 / ABOUT</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black leading-none text-black mb-16">
            About<br />
            <span className="text-purple-700" style={{ fontFamily: '"pollen-web", serif', fontStyle: 'italic', fontSize: '1.2em' }}>me</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 mb-16 items-stretch">
            {/* Bio text — full */}
            <div className="flex flex-col justify-between">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed font-light">Hi, I'm Eugenia, UX/CX and Design leader, community builder, and creator.</p>
                <p className="text-lg text-gray-700 leading-relaxed font-light">I help organizations design better products and services by bringing clarity, strategy, and user-centered thinking into complex systems.</p>
                <p className="text-lg text-gray-700 leading-relaxed font-light">After over 20 years across agencies, startups, and global companies—including Zendesk, Nestlé, and LGT Private Banking—I now work at the intersection of design, business, and organizational transformation, collaborating selectively with teams and partners.</p>
                <p className="text-lg text-gray-700 leading-relaxed font-light">Alongside my corporate work, I built one of the largest Spanish-speaking UX communities on YouTube and founded <a href="https://uxtips.club" className="text-purple-700 underline hover:text-purple-900 transition-colors">uxtips.club</a>, a platform helping designers grow beyond UI into strategic and product thinking.</p>
              </div>
            </div>

            {/* Photo — matches text column height */}
            <div className="flex flex-col">
              <img src="/eugenia_main.png" alt="Eugenia Jongewaard on stage at UX Nordic Conference" className="w-full flex-1 object-cover min-h-[400px] rounded-lg" />
              <div className="mt-4">
                <p className="text-xs font-bold tracking-widest text-purple-700">2023 — Speaker at UX Nordic Conference (Denmark), presenting to 900+ professionals.</p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 divide-x divide-gray-200 border border-gray-200">
            <div className="p-10 md:p-12">
              <h2 className="text-3xl md:text-4xl font-black text-black mb-10">Speaking &amp; Articles</h2>
              <ul className="space-y-0 divide-y divide-gray-100">
                {speakingItems.map((item, i) => (
                  <li key={i}><a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-4 text-purple-700 hover:text-purple-900 text-sm font-medium transition-colors hover:underline group">{item.label}<span className="text-gray-300 group-hover:text-purple-700 transition-colors ml-2">↗</span></a></li>
                ))}
              </ul>
            </div>
            <div className="p-10 md:p-12 border-t md:border-t-0 border-gray-200">
              <h2 className="text-3xl md:text-4xl font-black text-black mb-10">Interviews</h2>
              <ul className="space-y-0 divide-y divide-gray-100">
                {interviewItems.map((item, i) => (
                  <li key={i}><a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-4 text-purple-700 hover:text-purple-900 text-sm font-medium transition-colors hover:underline group">{item.label}<span className="text-gray-300 group-hover:text-purple-700 transition-colors ml-2">↗</span></a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact-form" className="py-20 px-6 md:px-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-gray-200 pb-6 mb-16 flex justify-between items-end">
            <span className="text-xs font-bold tracking-widest text-purple-700">006 / CONTACT</span>
            <span className="text-xs text-gray-400 tracking-widest">LET'S WORK TOGETHER</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-0 lg:divide-x lg:divide-gray-200">
            <div className="lg:pr-16">
              <h2 className="text-5xl md:text-7xl font-black leading-none tracking-tight text-black mb-4">Let's <span className="text-purple-700" style={{ fontFamily: '"pollen-web", serif', fontStyle: 'italic', fontSize: '1.2em' }}>talk</span></h2>
              <p className="text-xl text-gray-500 font-light max-w-xl mb-12">Have a project in mind or want to explore how we can work together? Drop me a message.</p>
              {formStatus === 'success' ? (
                <div className="border border-purple-200 bg-purple-50 px-8 py-12 text-center">
                  <p className="text-2xl font-black text-black mb-2">Message sent!</p>
                  <p className="text-gray-500 font-light mb-6">Thank you for reaching out. I'll get back to you soon.</p>
                  <button onClick={() => setFormStatus('idle')} className="text-sm font-bold tracking-widest text-purple-700 hover:text-purple-900 transition-colors">Send another message →</button>
                </div>
              ) : (
                <form className="space-y-0" onSubmit={async (e) => {
                  e.preventDefault()
                  setFormStatus('submitting')
                  try {
                    const res = await fetch('https://formspree.io/f/xjganqzq', {
                      method: 'POST',
                      body: new FormData(e.target),
                      headers: { Accept: 'application/json' }
                    })
                    setFormStatus(res.ok ? 'success' : 'error')
                  } catch {
                    setFormStatus('error')
                  }
                }}>
                  <div className="grid grid-cols-2 gap-0 border border-gray-200 border-b-0">
                    <div className="border-r border-gray-200"><input type="text" name="firstName" placeholder="First name" required className="w-full px-6 py-5 text-sm text-black placeholder-gray-400 focus:outline-none focus:bg-white border-b border-gray-200 bg-transparent" /></div>
                    <div><input type="text" name="lastName" placeholder="Last name" className="w-full px-6 py-5 text-sm text-black placeholder-gray-400 focus:outline-none focus:bg-white border-b border-gray-200 bg-transparent" /></div>
                  </div>
                  <div className="border border-gray-200 border-t-0">
                    <input type="email" name="email" placeholder="Email address" required className="w-full px-6 py-5 text-sm text-black placeholder-gray-400 focus:outline-none focus:bg-white border-b border-gray-200 bg-transparent" />
                    <input type="text" name="company" placeholder="Company (optional)" className="w-full px-6 py-5 text-sm text-black placeholder-gray-400 focus:outline-none focus:bg-white border-b border-gray-200 bg-transparent" />
                    <select name="service" defaultValue="" className="w-full px-6 py-5 text-sm text-gray-400 focus:outline-none focus:bg-white border-b border-gray-200 bg-transparent appearance-none">
                      <option value="" disabled>What are you looking for?</option>
                      <option>Product &amp; Experience Design (0→1)</option>
                      <option>Product Adoption &amp; Growth</option>
                      <option>Service Design &amp; Journey Management</option>
                      <option>AI-Augmented Experience Strategy</option>
                      <option>Experience Strategy &amp; Governance</option>
                      <option>UX Capability Building &amp; Maturity</option>
                      <option>Other</option>
                    </select>
                    <textarea rows={5} name="message" placeholder="Tell me about your project..." required className="w-full px-6 py-5 text-sm text-black placeholder-gray-400 focus:outline-none focus:bg-white resize-none bg-transparent" />
                  </div>
                  {formStatus === 'error' && (
                    <p className="text-sm text-red-600 px-1 py-3">Something went wrong. Please try again or email me directly at hola (@) eugeniajongewaard.com</p>
                  )}
                  <button type="submit" disabled={formStatus === 'submitting'} className="w-full bg-purple-700 text-white py-5 font-black text-sm tracking-widest hover:bg-purple-800 transition-colors border border-purple-700 disabled:opacity-60">
                    {formStatus === 'submitting' ? 'SENDING...' : 'SEND MESSAGE →'}
                  </button>
                </form>
              )}
            </div>
            <div className="lg:pl-16 pt-12 lg:pt-0">
              <p className="text-xs font-bold tracking-widest text-purple-700 mb-4">LOCATION</p>
              <p className="text-gray-700 text-base font-light mb-8 flex items-center gap-1.5">
                I
                <svg className="w-3.5 h-3.5 text-purple-700 inline flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                living in Barcelona, Spain
              </p>
              <div className="w-full border border-gray-200 overflow-hidden" style={{ height: '320px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.5!2d2.3200!3d41.3917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f85f4d7e3b%3A0x5a7e6d4f8e9c0a1b!2sPasseig%20de%20Gr%C3%A0cia%2C%20Barcelona!5e0!3m2!1sen!2ses!4v1700000000000!5m2!1sen!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Eugenia's location - Barcelona"
                />
              </div>

              {/* Socials */}
              <div className="mt-10 border-t border-gray-200 pt-8">
                <p className="text-xs font-bold tracking-widest text-purple-700 mb-6">COME SAY HI</p>
                <div className="flex gap-4">
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/eugeniajongewaard/" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 border border-purple-700 flex items-center justify-center text-purple-700 hover:bg-purple-700 hover:text-white transition-colors group"
                    aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a href="https://www.instagram.com/uxtipsonline/" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 border border-purple-700 flex items-center justify-center text-purple-700 hover:bg-purple-700 hover:text-white transition-colors group"
                    aria-label="Instagram">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  {/* YouTube */}
                  <a href="https://www.youtube.com/@UXTips" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 border border-purple-700 flex items-center justify-center text-purple-700 hover:bg-purple-700 hover:text-white transition-colors group"
                    aria-label="YouTube">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="mt-10 border-t border-gray-200 pt-8">
                <p className="text-xs font-bold tracking-widest text-purple-700 mb-3">LOOKING FOR MY EMAIL?</p>
                <p className="text-sm text-gray-600">Contact me at <span className="text-purple-700 font-medium">hola (@) eugeniajongewaard.com</span></p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 px-6 md:px-12 bg-black text-white border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-white leading-none">Designing change<br /><span style={{ color: '#4ade80', fontFamily: '"pollen-web", serif', fontStyle: 'italic', fontSize: '1.2em' }}>that matters</span></h2>
          </div>
          <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs tracking-wide text-center md:text-left flex flex-wrap items-center justify-center md:justify-start gap-x-1 gap-y-0.5">
              <span>Made with Cursor, Claude,</span>
              <span>and intentional human thinking with</span>
              <span className="inline-flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                from Barcelona
              </span>
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              {/* Legal links — uncomment to publish */}
              {/*
              <div className="flex gap-6">
                <button onClick={() => { setSelectedLegalPage('legal-notice'); window.scrollTo({ top: 0 }) }} className="text-gray-700 text-xs tracking-widest hover:text-purple-400 transition-colors">LEGAL NOTICE</button>
                <button onClick={() => { setSelectedLegalPage('privacy-policy'); window.scrollTo({ top: 0 }) }} className="text-gray-700 text-xs tracking-widest hover:text-purple-400 transition-colors">PRIVACY POLICY</button>
                <button onClick={() => { setSelectedLegalPage('cookie-policy'); window.scrollTo({ top: 0 }) }} className="text-gray-700 text-xs tracking-widest hover:text-purple-400 transition-colors">COOKIES</button>
              </div>
              */}
              <p className="text-gray-700 text-xs tracking-widest">© 2026 EUGENIA JONGEWAARD. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-purple-700 text-white flex items-center justify-center hover:bg-purple-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  )
}

export default App
