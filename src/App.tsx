import type { FC, ReactNode, ComponentType } from "react";
import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Network, Layers, Sparkles, Box, Globe, Github } from "lucide-react";

type SectionProps = { id?: string; className?: string; children: ReactNode };
const Section: FC<SectionProps> = ({ id, className = "", children }) => (
  <section id={id} className={`max-w-6xl mx-auto px-6 md:px-10 ${className}`}>{children}</section>
);

type CardProps = { className?: string; children: ReactNode };
const Card: FC<CardProps> = ({ className = "", children }) => (
  <div className={`rounded-2xl shadow-sm border border-slate-200/60 bg-white/80 backdrop-blur p-6 ${className}`}>{children}</div>
);

const Badge: FC<{ children: ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700">
    <Sparkles className="h-3.5 w-3.5" /> {children}
  </span>
);

const Feature: FC<{ icon: ComponentType<{ className?: string }>; title: string; children: ReactNode }> = ({ icon: Icon, title, children }) => (
  <Card className="h-full">
    <div className="flex items-start gap-4">
      <div className="mt-1 rounded-xl border border-slate-200 p-3">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-slate-600 leading-relaxed">{children}</p>
      </div>
    </div>
  </Card>
);

const Pill: FC<{ children: ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-slate-900 text-white text-xs px-3 py-1 font-medium">{children}</span>
);

const App: FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200/60">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-slate-900 text-white grid place-items-center font-bold">IU</div>
            <span className="font-semibold tracking-tight">IndependentlyUNITED</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#vision" className="hover:text-slate-900 text-slate-600">Vision</a>
            <a href="#box" className="hover:text-slate-900 text-slate-600">IU Box</a>
            <a href="#mesh" className="hover:text-slate-900 text-slate-600">Mesh</a>
            <a href="#how" className="hover:text-slate-900 text-slate-600">How it works</a>
            <a href="#cta" className="hover:text-slate-900 text-slate-600">Join</a>
          </div>
          <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-3.5 py-2 text-sm font-medium shadow-sm">Get Early Access</a>
        </nav>
      </header>

      {/* HERO */}
      <Section id="hero" className="pt-16 md:pt-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge>Digital Sovereignty in a Box</Badge>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Own your <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">internet</span> again
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              IU Web is a Unix-minded, Tibet-inspired architecture for a sovereign digital life. Your <strong>IU Box</strong> is a personal server, private sanctuary, and secure gateway that connects to others by <em>choice</em>—forming a voluntary, resilient mesh.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-5 py-3 font-medium shadow-sm">Join the Early Wave</a>
              <a href="#how" className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700">See how it works</a>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
              <Pill>Unix layers</Pill>
              <Pill>Tibetan cosmology motif</Pill>
              <Pill>Privacy-first</Pill>
              <Pill>Mesh-ready</Pill>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="p-0 overflow-hidden">
              <div className="relative aspect-[4/3] w-full bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.9),rgba(2,6,23,1))] text-white grid place-items-center">
                {/* Stylized IU Box */}
                <div className="relative">
                  <div className="w-64 h-36 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm shadow-2xl" />
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-56 h-2 bg-white/10 blur-md" />
                  <div className="absolute inset-0 grid place-items-center">
                    <Box className="w-10 h-10 opacity-90" />
                  </div>
                </div>
                {/* Constellation / mesh points */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(14)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white/80 rounded-full"
                      style={{ top: `${10 + ((i * 6) % 80)}%`, left: `${5 + ((i * 13) % 90)}%`, opacity: 0.6 }}
                    />
                  ))}
                </div>
                <div className="absolute bottom-3 right-3 text-[10px] opacity-60">Mount Meru — Omphalos — Layers of Trust</div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* VISION */}
      <Section id="vision" className="mt-20">
        <div className="grid md:grid-cols-3 gap-6">
          <Feature icon={ShieldCheck} title="Sovereign by design">
            Your data, keys, and identity live inside your box—not in someone else’s cloud. No ads. No data brokers.
          </Feature>
          <Feature icon={Layers} title="Built in layers">
            A disciplined Unix-style stack: capability registry, token verification, sandboxed apps, audit trails.
          </Feature>
          <Feature icon={Network} title="Voluntary mesh">
            Boxes link directly, forming a resilient network-of-networks where trust is a route you choose.
          </Feature>
        </div>
      </Section>

      {/* IU BOX */}
      <Section id="box" className="mt-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card>
            <h2 className="text-2xl md:text-3xl font-bold">The IU Box</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              A sleek personal server you physically own. Plug it in at home or office, pair with a small UPS/solar option, and you’ve got a private gateway that serves your identity, files, apps, and secure communications.
            </p>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm list-disc pl-5">
              <li>Private Digital Sanctuary (apps: Study, Media, Collections, Projects)</li>
              <li>Token-verified access, sandboxed workloads, audit log</li>
              <li>Optional off-grid pack (solar panel + submersible/flush control)</li>
            </ul>
          </Card>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card>
              <div className="flex items-center gap-3">
                <Cpu className="h-5 w-5" />
                <div className="font-semibold">Unix-minded core</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">Processes arranged in clean layers; you feel the system breathe.</p>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5" />
                <div className="font-semibold">Trust, proven</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">Ed25519 signatures, HMACs, and audit trails secure every action.</p>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <Network className="h-5 w-5" />
                <div className="font-semibold">Mesh-ready</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">Peer your box with friends, family, or communities—your routes, your rules.</p>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5" />
                <div className="font-semibold">Open & portable</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">Hardware-agnostic. Start on a NUC/Raspberry Pi; grow as you go.</p>
            </Card>
          </div>
        </div>
      </Section>

      {/* MESH EXPLAINER */}
      <Section id="mesh" className="mt-20">
        <Card>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Mesh as a choice, not a cage</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                IU Mesh connects boxes directly. Discovery is opt-in, services are scoped, and routes are signed. Think of it like forming your own constellation—aligning only with stars you trust.
              </p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-slate-900" /> Signed service discovery</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-slate-900" /> Capability-based access</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-slate-900" /> Local-first resilience</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-slate-900" /> Off-grid friendly</li>
              </ul>
            </div>
            <div>
              <div className="relative aspect-[4/3] rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 overflow-hidden">
                {[...Array(18)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-slate-900 rounded-full"
                    style={{ top: `${8 + ((i * 11) % 85)}%`, left: `${6 + ((i * 17) % 88)}%`, opacity: 0.9 }}
                  />
                ))}
                <svg className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {Array.from({ length: 22 }).map((_, i) => {
                    const x1 = (i * 13) % 100;
                    const y1 = (i * 29) % 100;
                    const x2 = (i * 37) % 100;
                    const y2 = (i * 61) % 100;
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0f172a" strokeOpacity="0.18" strokeWidth="0.6" />;
                  })}
                </svg>
                <div className="absolute bottom-2 right-3 text-[10px] text-slate-500">Your constellation, your routes</div>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how" className="mt-20">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <div className="text-sm font-semibold text-slate-500">01</div>
            <h3 className="mt-1 text-lg font-semibold">Unbox & pair</h3>
            <p className="mt-2 text-slate-600">Power on, pair with your keys, choose your private sanctuary layout, and set your off-grid options.</p>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-slate-500">02</div>
            <h3 className="mt-1 text-lg font-semibold">Claim your layers</h3>
            <p className="mt-2 text-slate-600">Enable capability registry, token verification, and sandboxed apps. Everything logged, nothing leaked.</p>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-slate-500">03</div>
            <h3 className="mt-1 text-lg font-semibold">Link your mesh</h3>
            <p className="mt-2 text-slate-600">Invite trusted peers. Share just the services you intend. Form a voluntary network-of-networks.</p>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section id="cta" className="mt-24 mb-20">
        <Card className="text-center p-10">
          <h2 className="text-2xl md:text-3xl font-bold">Be an early supporter</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            We're preparing a digital-perks crowdfunding launch (no hardware obligations at first). Get updates, early access, and a founders certificate.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-5 py-3 font-medium shadow-sm">Reserve my spot</a>
            <a href="#" className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700">Read the manifesto</a>
          </div>
          <div className="mt-4 text-xs text-slate-500 flex items-center justify-center gap-2">
            <Github className="h-4 w-4" />
            Code-curious? Community repos coming soon.
          </div>
        </Card>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200/60 py-10">
        <Section className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <div className="h-7 w-7 rounded-lg bg-slate-900 text-white grid place-items-center font-bold text-xs">IU</div>
            <span>IndependentlyUNITED</span>
            <span className="opacity-60">· IU Web</span>
          </div>
          <div className="text-xs text-slate-500">© {new Date().getFullYear()} IndependentlyUNITED — All rights reserved.</div>
        </Section>
      </footer>
    </div>
  );
};

export default App;
