import type { FC, ReactNode, ComponentType } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  ShieldCheck,
  Network,
  Layers,
  Sparkles,
  Box,
  Globe,
  Github,
  UserCheck,
  IdCard,
} from "lucide-react";

/* ---------- Primitives ---------- */

type SectionProps = { id?: string; className?: string; children: ReactNode };
const Section: FC<SectionProps> = ({ id, className = "", children }) => (
  <section id={id} className={`max-w-6xl mx-auto px-6 md:px-10 ${className}`}>
    {children}
  </section>
);

type CardProps = { className?: string; children: ReactNode };
const Card: FC<CardProps> = ({ className = "", children }) => (
  <div className={`rounded-2xl shadow-sm border border-slate-200/60 bg-white/80 backdrop-blur p-6 ${className}`}>
    {children}
  </div>
);

const Badge: FC<{ children: ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700">
    <Sparkles className="h-3.5 w-3.5" /> {children}
  </span>
);

const Feature: FC<{ icon: ComponentType<{ className?: string }>; title: string; children: ReactNode }> = ({
  icon: Icon,
  title,
  children,
}) => (
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
  <span className="inline-flex items-center rounded-full bg-slate-900 text-white text-xs px-3 py-1 font-medium">
    {children}
  </span>
);

/* ---------- App ---------- */

const App: FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200/60">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-slate-900 text-white grid place-items-center font-bold">IU</div>
            <span className="font-semibold tracking-tight">IndependentlyUNITED</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#broken" className="hover:text-slate-900 text-slate-600">Broken Internet</a>
            <a href="#solution" className="hover:text-slate-900 text-slate-600">Solution</a>
            <a href="#box" className="hover:text-slate-900 text-slate-600">IU Box</a>
            <a href="#mission" className="hover:text-slate-900 text-slate-600">Mission</a>
            <a href="#reg" className="hover:text-slate-900 text-slate-600">Regulatory Fit</a>
            <a href="#how" className="hover:text-slate-900 text-slate-600">How it works</a>
            <a href="#faq" className="hover:text-slate-900 text-slate-600">FAQ</a>
            <a href="#cta" className="hover:text-slate-900 text-slate-600">Join</a>
          </div>
          <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-3.5 py-2 text-sm font-medium shadow-sm">
            Get Early Access
          </a>
        </nav>
      </header>

      {/* HERO */}
      <Section id="hero" className="pt-16 md:pt-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge>Own your internet again</Badge>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Own a Piece of the{" "}
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">Sovereign</span>{" "}
              Internet
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              The IU Box is your personal server and private digital sanctuary. Connect into a voluntary mesh when you choose.
              Own your data. Run private AI locally. Be sovereign. IU Web is a Unix-minded, Tibet-inspired architecture for a
              sovereign digital life.
            </p>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              <strong>IU Web = IU Box + IU Mesh</strong> deliver cryptographically enforced sovereignty; a people-owned,
              offline-first network where governance is code, not contracts.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#how" className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700">
                See how it works
              </a>
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
                <Card className="p-0 overflow-hidden">
                  <img src="/Logo.png" alt="IU Box Logo" className="w-full max-w-full h-auto object-contain" />
                </Card>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Broken Internet */}
      <Section id="broken" className="mt-20 break-words">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card>
            <h2 className="text-2xl md:text-3xl font-bold">The Internet is Broken: Centralized and Fragile</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Now imagine a world where your digital life is yours again. Where you control your identity; and your space is sovereign.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Your IU Box is that space: private, secure, with off-grid AI at your side. You decide what to share, with whom, and for how long.
              You publish, connect, and collaborate on your own terms.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              This isn’t a search engine ruled by ads. It’s a local, living web, proximity empowered by people. A human web, not a commercial one.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">Open your IU Box, and your mesh view shows trusted, real-time knowledge nearby:</p>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm list-disc pl-5">
              <li>A pharmacy that’s still open</li>
              <li>A mom-and-pop shop with lights on late</li>
              <li>A local event posted by someone like you</li>
              <li>Why the alarm is sounding, right now</li>
            </ul>
          </Card>

          <div className="grid sm:grid-cols-2 gap-4">
            <Card>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5" />
                <div className="font-semibold">From Extraction → To Ownership</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Your IU Box makes you the steward of your digital life. What you share is yours to grant, not theirs to take. Your data isn’t a resource to be mined.
              </p>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <Network className="h-5 w-5" />
                <div className="font-semibold">From Fragile → To Sovereign</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">Rights by design, not policies after the fact. No rented clouds, no shifting terms.</p>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <UserCheck className="h-5 w-5" />
                <div className="font-semibold">From Algorithms → To Human Knowledge</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">Knowledge isn’t ads or rankings. It’s people nearby sharing trusted insight.</p>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <Network className="h-5 w-5" />
                <div className="font-semibold">From Control → To Connection</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">Local when needed, global when invited; a network that reflects your life.</p>
            </Card>
          </div>
        </div>
      </Section>

      {/* SOLUTION */}
      <Section id="solution" className="mt-20">
        <section className="mx-auto max-w-6xl px-6 py-14 overflow-x-hidden">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">IU SOLUTION: A Personal Server + Voluntary Mesh</h2>
            <p className="mt-3 text-slate-600 max-w-3xl">
              We build like Unix: modular, composable, sovereign and we think like Indra’s net, interconnected jewels reflecting one another.
              Each Box is a universe: AI sandbox, data vault, and governance core; together, they form a cooperative cosmos.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-800/80 bg-white/80">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/80 text-slate-600">
                <tr>
                  <th className="p-3">Technology</th>
                  <th className="p-3">Unix Analogy</th>
                  <th className="p-3">Buddhist Analogy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                <tr>
                  <td className="p-3">IU Box (personal node)</td>
                  <td className="p-3">Standalone Unix machine</td>
                  <td className="p-3">Jewel in Indra’s Net</td>
                </tr>
                <tr>
                  <td className="p-3">Mesh networking</td>
                  <td className="p-3">Pipes between processes</td>
                  <td className="p-3">Interconnection of beings</td>
                </tr>
                <tr>
                  <td className="p-3">Capability tokens</td>
                  <td className="p-3">File permissions / keys</td>
                  <td className="p-3">Vows / karmic contracts</td>
                </tr>
                <tr>
                  <td className="p-3">Quorum revocation</td>
                  <td className="p-3">sudo with group control</td>
                  <td className="p-3">Sangha consensus</td>
                </tr>
                <tr>
                  <td className="p-3">Sandboxed AI (TEE/WASM)</td>
                  <td className="p-3">chroot / process isolation</td>
                  <td className="p-3">Protected meditation cell</td>
                </tr>
                <tr>
                  <td className="p-3">Family inheritance trees</td>
                  <td className="p-3">Unix groups / ownership</td>
                  <td className="p-3">Dharma lineage (guardian→child)</td>
                </tr>
                <tr>
                  <td className="p-3">Distributed ledgers</td>
                  <td className="p-3">syslog audit trail</td>
                  <td className="p-3">Tamper-evident karma log</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-600">
            Cultural respect note: metaphors are used with reverence; the movement is non-sectarian and inclusive.
          </p>
        </section>
      </Section>

      {/* IU BOX */}
      <Section id="box" className="mt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">IU Web</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Feature icon={ShieldCheck} title="Sovereign by design">
            Your data, keys, and identity live inside your box, not in someone else’s cloud. No ads. No data brokers.
          </Feature>
          <Feature icon={Layers} title="Built in layers">
            A disciplined Unix-style stack: capability registry, token verification, sandboxed apps, audit trails.
          </Feature>
          <Feature icon={Network} title="Voluntary mesh">
            Boxes link directly, forming a resilient network-of-networks where trust is a route you choose.
          </Feature>
        </div>
      </Section>

      <Section id="box2" className="mt-20">
        <div className="grid md:grid-cols-3 gap-6">
          <Feature icon={Box} title="Local AI, Private by Default">
            AI runs in a sandbox (TEE/WASM). Your data never leaves without consent.
          </Feature>
          <Feature icon={ShieldCheck} title="Governance by Math">
            Signed capability tokens replace ToS. No valid token → no action.
          </Feature>
          <Feature icon={IdCard} title="Community Quorum Trust">
            No single admin. Guardians use quorum to revoke abuse and recover keys.
          </Feature>
        </div>
      </Section>

      {/* MISSION */}
      <Section id="mission" className="mt-20 break-words">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card>
            <h2 className="text-2xl md:text-3xl font-bold">Our Mission: A Sovereign, People-Owned Internet</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              What if your entire digital life lived in something you owned: like a cabin, a studio, a home? And what if you could
              walk into it, shape it, and decide who’s welcome, just like in real life? This is the aim: a new way to connect and
              own your digital world.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Every person should have easy and protected access to their own online space: a personal, sovereign space that securely
              stores your data, apps, and presence. From global internet to local mesh to offline tools, IU Web is a movement to
              return the internet to its people, one Box at a time.
            </p>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm list-disc pl-5">
              <li>Private Digital Sanctuary (apps: Study, Media, Collections, Projects)</li>
              <li>Token-verified access, sandboxed workloads, audit log</li>
              <li>You become part of a new kind of internet: local, global, sovereign</li>
            </ul>
          </Card>

          <div className="grid sm:grid-cols-2 gap-4">
            <Card>
              <div className="flex items-center gap-3">
                <Cpu className="h-5 w-5" />
                <div className="font-semibold">Unix inspired</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Modular core combining secure identity, private storage, and mesh connectivity. Runs on everyday hardware.
              </p>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5" />
                <div className="font-semibold">Trust, proven</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Ed25519 signatures, HMACs, and audit trails secure every action. Policy compiles to a signed capability.
              </p>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <Network className="h-5 w-5" />
                <div className="font-semibold">Mesh ready</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Boxes connect freely, forming constellations and communities. Quorum guardians can revoke abuse.
              </p>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5" />
                <div className="font-semibold">Decentralized resilience</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                IU Boxes carry core functions: no external servers required. Linked boxes form a living web of mutual backup.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* REGULATORY */}
      <Section id="reg" className="mt-20">
        <h2 className="text-2xl md:text-3xl font-bold">Regulatory Fit</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h3 className="mt-1 text-lg font-semibold">GDPR by Design</h3>
            <p className="mt-2 text-slate-600">Local-first data, consent via signed tokens, real deletion.</p>
          </Card>
          <Card>
            <h3 className="mt-1 text-lg font-semibold">Geofenced Policies</h3>
            <p className="mt-2 text-slate-600">Capability registry, token verification, sandboxed apps. Logged and scoped.</p>
          </Card>
          <Card>
            <h3 className="mt-1 text-lg font-semibold">No Master Keys. No Backdoors.</h3>
            <p className="mt-2 text-slate-600">Quorum decisions, split secrets, verifiable boot. No single actor can seize control.</p>
          </Card>
        </div>
      </Section>

      {/* MESH EXPLAINER */}
      <Section id="mesh" className="mt-20">
        <Card>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Mesh as a choice, not a cage</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                IU Mesh connects boxes directly. Discovery is opt-in, services are scoped, and routes are signed: align only with
                stars you trust.
              </p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-900" /> Signed service discovery
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-900" /> Capability-based access
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-900" /> Local-first resilience
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-900" /> Off-grid friendly
                </li>
              </ul>
            </div>
            <div>
              <Card className="p-0 overflow-hidden">
                <img
                  src="/MeshSpaceBox_AI.png"
                  alt="Mesh network diagram"
                  className="w-full max-w-full h-auto object-contain"
                />
              </Card>
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
            <p className="mt-2 text-slate-600">Power on, pair with your keys, choose your private sanctuary layout, set off-grid options.</p>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-slate-500">02</div>
            <h3 className="mt-1 text-lg font-semibold">Claim your layers</h3>
            <p className="mt-2 text-slate-600">Enable capability registry, token verification, sandboxed apps. Everything logged.</p>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-slate-500">03</div>
            <h3 className="mt-1 text-lg font-semibold">Link your mesh</h3>
            <p className="mt-2 text-slate-600">Invite trusted peers. Share just the services you intend. Form a voluntary network-of-networks.</p>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="mt-20">
        <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <Card>
            <h3 className="mt-1 text-lg font-semibold">Do I need special hardware?</h3>
            <p className="mt-2 text-slate-600">No. It runs on laptops, mini-servers, even Raspberry Pi.</p>
          </Card>
          <Card>
            <h3 className="mt-1 text-lg font-semibold">Is my data private?</h3>
            <p className="mt-2 text-slate-600">Yes. Keys and data never leave your Box without explicit consent.</p>
          </Card>
          <Card>
            <h3 className="mt-1 text-lg font-semibold">Can I still use the normal internet?</h3>
            <p className="mt-2 text-slate-600">Yes. IU Web works alongside it seamlessly.</p>
          </Card>
        </div>
      </Section>

           {/* CTA */}
      <Section id="cta" className="mt-24 mb-20 break-words">
        <Card className="text-center p-10">
          <h2 className="text-2xl md:text-3xl font-bold">Be an early supporter</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            The internet should belong to people, not platforms. With IndependentlyUNITED, you own your space: your data, your keys,
            your presence online. The IU Box is the foundation of a sovereign internet; local-first, private by design, and ready to mesh.
          </p>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            We are building a movement and a product: real hardware and software that anyone can own, run, and trust. The community
            (via a DAO) will help shape standards and shared governance, while the core invention and IP remain protected so it can
            grow, scale, and stay independent.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              disabled
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-5 py-3 font-medium shadow-sm opacity-70 cursor-not-allowed"
            >
              Sign-ups coming soon
            </button>
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
            <span className="opacity-60">· IU Web · contact: sunsawa@proton.me</span>
          </div>
          <div className="text-xs text-slate-500">© {new Date().getFullYear()} IndependentlyUNITED — All rights reserved.</div>
        </Section>
      </footer>
    </div>
  );
};

export default App;
