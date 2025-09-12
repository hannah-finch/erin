import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full px-6 py-1 flex items-center justify-between shadow-md shadow-soft text-sm">
        <div className="flex items-center gap-4 text-xl font-extrabold">
          <Link to="/" className="self-center mt-2">
            <img src="src/assets/logo-sm-color.png" className="w-20"></img>
          </Link>

        </div>

        {/* <div className="flex items-center gap-4">
          <Link to="/services" class="btn-nav caps">
            Services
          </Link>
          <Link to="/pricing" class="btn-nav caps">
            Pricing
          </Link>
          <Link to="/contact" class="btn-nav caps">
            Contact
          </Link>

          <Link class="btn btn-blue">Call Me</Link>
        </div> */}

        <div>
          Text or call
          <span className="text-green text-lg font-extrabold">
            &nbsp;(517) 215-5106
          </span>
        </div>
      </div>
    </>
  );
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <header className="mb-10 text-center">
      {eyebrow && <p className="h3 text-gray-dark">{eyebrow}</p>}
      <h2 className="mt-2 h2">{title}</h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl mx-auto text-gray-dark text-lg">
          {subtitle}
        </p>
      )}
    </header>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white p-6 ${className}`}
    >
      {children}
    </div>
  );
}

// ---- Hero ----
function HeroSection() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto gap-8 py-20 px-4">
        <div className="flex flex-col items-center text-center">
          <h3 className="h3 text-gray-dark">Servicing Loch Erin Residents</h3>
          <h1 className="h1 mt-2">Title about how I clean stuff</h1>
          <p className="py-7 text-gray-dark">
            Paragraph about how I clean stuff. Paragraph about asdf asdfas dfI
            clean stuff. Paragraph about how I clean stuff. Paragraph about how
            I clean stuff. Paragraph about how I clean stuff. Paragraph about
            how I clean stuff.
          </p>

          <Link
            to="#contact"
            className="w-50 rounded-xl bg-accent hover:bg-accent-dark disabled:opacity-60 text-white font-semibold py-3"
          >
            Call to Action
          </Link>
        </div>
        <img src="src/assets/vacuum-color.png" alt="Vacuum cleaner" />
      </section>
      {/* <section className="h-50 bg-navy w-full"></section> */}
    </>
  );
}

function ServicesSection() {
  const services = [
    {
      title: "Standard Cleaning",
      desc: "Weekly or bi-weekly upkeep for kitchens, baths, and living areas.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8"
          fill="currentColor"
          aria-hidden
        >
          <path d="M6 3h12v2H6zM5 7h14a2 2 0 0 1 2 2v4H3V9a2 2 0 0 1 2-2zm-2 8h18v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3z" />
        </svg>
      ),
    },
    {
      title: "Deep Cleaning",
      desc: "Top-to-bottom refresh: baseboards, vents, behind appliances, detail dusting.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8"
          fill="currentColor"
          aria-hidden
        >
          <path d="M4 4h16v2H4zm1 4h14l-2 12H7L5 8zm5 2v8h2v-8H10z" />
        </svg>
      ),
    },
    {
      title: "Move-In / Move-Out",
      desc: "Make your old place spotless and your new home sparkling.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 3l9 6-9 6-9-6 9-6zm-7 9l7 4.667L19 12v7H5v-7z" />
        </svg>
      ),
    },
    {
      title: "Post‑Renovation",
      desc: "Construction dust removal and detailed wipe‑down so you can enjoy it sooner.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8"
          fill="currentColor"
          aria-hidden
        >
          <path d="M3 3h18v2H3zm2 4h14v6H5zM3 15h18v2H3zm2 4h14v2H5z" />
        </svg>
      ),
    },
    {
      title: "Eco‑Friendly",
      desc: "Green products by default upon request, kid & pet considerate.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2C8 5 5 8 5 12a7 7 0 1 0 14 0c0-4-3-7-7-10zm0 6c3 0 5 2 5 4.5S15 17 12 17 7 14.5 7 12s2-4 5-4z" />
        </svg>
      ),
    },
    {
      title: "Add‑Ons",
      desc: "Inside fridge/oven, windows, laundry fold, organization sprints.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8"
          fill="currentColor"
          aria-hidden
        >
          <path d="M6 2h12v6H6zM4 10h16v12H4z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeader
          eyebrow="Services"
          title="Everything you need to feel at home"
          subtitle="Pick the plan that fits your space and schedule. We’ll tailor every clean to your priorities."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent-light text-accent">
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-slate-600 text-sm">{s.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Pricing ----
function PricingSection() {
  const tiers = [
    {
      name: "Starter",
      price: "$99",
      cadence: "/visit",
      highlight: false,
      features: [
        "Kitchen & bath reset",
        "Floors vacuum & mop",
        "General dusting",
        "Trash removal",
      ],
    },
    {
      name: "Most Popular",
      price: "$149",
      cadence: "/visit",
      highlight: true,
      features: [
        "Everything in Starter",
        "Appliance fronts & baseboards",
        "Detail dusting",
        "Bed change (1)",
      ],
    },
    {
      name: "Premium",
      price: "$219",
      cadence: "/visit",
      highlight: false,
      features: [
        "Everything in Most Popular",
        "Inside microwave & windows (select)",
        "Extra bathroom",
        "Priority booking",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          subtitle="Homes vary—prices listed are typical for 1–2 bed spaces. Get a custom quote in minutes."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <Card
              key={t.name}
              className={`${
                t.highlight
                  ? "ring-2 ring-accent-light relative"
                  : "border border-slate-200"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-accent text-white px-3 py-1 rounded-full">
                  Best Value
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-800">{t.name}</h3>
              <p className="mt-4 text-4xl font-extrabold text-slate-900">
                {t.price}{" "}
                <span className="text-base font-medium text-slate-500">
                  {t.cadence}
                </span>
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 inline-block w-2 h-2 rounded-full bg-accent"></span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-block w-full text-center rounded-xl bg-accent hover:bg-accent-dark text-white font-semibold py-3"
              >
                Book this plan
              </a>
            </Card>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          *Recurring discounts available. One‑time deep cleans quoted
          separately.
        </p>
      </div>
    </section>
  );
}

// ---- About / Why Choose Us ----
function AboutSection() {
  const points = [
    {
      title: "Local & insured",
      text: "We’re your neighbors and we treat your home with care.",
    },
    {
      title: "Consistent cleaners",
      text: "The same friendly pro whenever possible—no roulette.",
    },
    {
      title: "Supplies included",
      text: "We bring everything needed. Eco products available.",
    },
    {
      title: "Clear communication",
      text: "Text updates, reminders, and easy rescheduling.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Friendly faces. Sparkling spaces."
            subtitle="Family‑run and detail‑obsessed, we clean like it’s our own home."
          />
          <dl className="grid sm:grid-cols-2 gap-4">
            {points.map((p) => (
              <Card key={p.title} className="bg-white">
                <dt className="font-semibold text-slate-800">{p.title}</dt>
                <dd className="mt-1 text-sm text-slate-600">{p.text}</dd>
              </Card>
            ))}
          </dl>
        </div>
        <div className="order-1 md:order-2">
          {/* Illustration block – replace with your own image if desired */}
          <div className="relative aspect-[4/3] rounded-3xl bg-accent-light">
            <div className="absolute inset-6 rounded-2xl bg-white shadow-xl flex items-center justify-center">
              <div className="text-center p-6">
                <span className="text-6xl" role="img" aria-label="sparkles">
                  ✨
                </span>
                <p className="mt-4 text-slate-700">
                  Trusted by Loch Erin families
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Testimonials ----
function TestimonialsSection() {
  const quotes = [
    {
      name: "Megan R.",
      text: "So professional and kind. My house has never looked better!",
    },
    {
      name: "Liam D.",
      text: "Booking was easy and the attention to detail was next level.",
    },
    {
      name: "Priya S.",
      text: "Reliable, communicative, and great with our two dogs.",
    },
  ];

  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeader
          eyebrow="Testimonials"
          title="Loved by tidy people everywhere"
          subtitle="Real words from local clients."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <Card key={q.name}>
              <div
                className="flex items-center gap-2 text-amber-500"
                aria-hidden
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path d="M12 17.3l6.18 3.7-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="mt-3 text-slate-700">“{q.text}”</p>
              <p className="mt-4 font-semibold text-slate-900">{q.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Contact / CTA ----
function ContactSection() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    // Replace with your real submission logic or API call
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-10 items-start">
        <div>
          <SectionHeader
            eyebrow="Get a Quote"
            title="Ready for a sparkling home?"
            subtitle="Tell us a bit about your place and we’ll text or email a quick estimate."
          />
          <ul className="space-y-3 text-slate-700">
            <li>
              📞{" "}
              <a
                className="underline decoration-accent decoration-2 underline-offset-2"
                href="tel:+15555551234"
              >
                (555) 555‑1234
              </a>
            </li>
            <li>
              ✉️{" "}
              <a
                className="underline decoration-accent decoration-2 underline-offset-2"
                href="mailto:hello@erincleans.com"
              >
                hello@erincleans.com
              </a>
            </li>
            <li>🕒 Mon–Sat, 8am–6pm</li>
          </ul>
        </div>

        <Card className="bg-white">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  required
                  className="mt-1 w-full rounded-xl border-slate-300 focus:ring-accent focus:border-accent"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border-slate-300 focus:ring-accent focus:border-accent"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Phone
                </label>
                <input
                  className="mt-1 w-full rounded-xl border-slate-300 focus:ring-accent focus:border-accent"
                  placeholder="(555) 555‑1234"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Service Type
                </label>
                <select className="mt-1 w-full rounded-xl border-slate-300 focus:ring-accent focus:border-accent">
                  <option>Standard Cleaning</option>
                  <option>Deep Cleaning</option>
                  <option>Move‑In / Move‑Out</option>
                  <option>Post‑Renovation</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Address / Notes
              </label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-xl border-slate-300 focus:ring-accent focus:border-accent"
                placeholder="Beds, baths, pets, special requests…"
              />
            </div>
            <button
              type="submit"
              disabled={status !== "idle"}
              className="w-full rounded-xl bg-accent hover:bg-accent-dark disabled:opacity-60 text-white font-semibold py-3"
            >
              {status === "idle" && "Get my estimate"}
              {status === "sending" && "Sending…"}
              {status === "sent" && "Thanks! We’ll be in touch."}
            </button>
            <p className="text-xs text-slate-500">
              By submitting, you agree to be contacted about your quote.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
}

// ---- Footer ----
function Footer() {
  return (
    <footer className="bg-accent-light text-accent-dark">
      <div className="container mx-auto px-4 max-w-6xl py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="text-2xl font-extrabold tracking-tight">
            <img
              src="src/assets/logo-sm-color.png"
              className="w-20 inline "
            ></img>
            <span className="text-green"> •</span> Home Cleaning
          </div>
          <p className="mt-2 text-slate-400 max-w-md">
            Serving Loch Erin with friendly, reliable, and detail‑oriented home
            cleaning.
          </p>
        </div>
        <nav>
          <h4 className="font-semibold mb-3">Links</h4>
          <ul className="space-y-2 text-slate-400">
            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-white">
                Reviews
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <h4 className="font-semibold mb-3">Get in touch</h4>
          <ul className="space-y-2 text-slate-400">
            <li>hello@erincleans.com</li>
            <li>(555) 555‑1234</li>
            <li>Mon–Sat, 8am–6pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Erin Home Cleaning. All rights reserved.
      </div>
    </footer>
  );
}

export default function CleaningWebsite() {
  return (
    <main className="font-sans">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
