import type { FC, ReactNode, ComponentType } from "react";
import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Network, Layers, Sparkles, Box, Globe, Github, Lock, AlertTriangle, Cloud, Server, Database, TrendingDown, UserCheck, IdCard, Map, MapPin, Ethernet } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

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

const ReserveSpot: FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"ok"|"error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("ok");
        setMessage("Thanks — check your inbox for a confirmation from us.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 rounded-l-xl px-4 py-3 text-slate-900 border border-slate-300 focus:outline-none"
        aria-label="Email address"
      />
      <button
        type="submit"
        disabled={status==="loading"}
        className="inline-flex items-center justify-center rounded-r-xl bg-slate-900 text-white px-5 py-3 font-medium shadow-sm disabled:opacity-70"
      >
        {status==="loading" ? "Sending..." : "Reserve my spot"}
      </button>
      {message && (
        <p className={`ml-3 self-center text-sm ${status==="ok" ? "text-emerald-600" : "text-rose-600"}`}>
          {message}
        </p>
      )}
    </form>
  );
};

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
 	    <a href="#broken" className="hover:text-slate-900 text-slate-600">Broken Internet</a>
            <a href="#solution" className="hover:text-slate-900 text-slate-600">Solution</a>
            <a href="#box" className="hover:text-slate-900 text-slate-600">IU Box</a>
 	    <a href="#mission" className="hover:text-slate-900 text-slate-600">Mission</a>
            <a href="#reg" className="hover:text-slate-900 text-slate-600">Regulatory Fit</a>
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
            <Badge>Own your internet again</Badge>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Own a Piece of the <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">Sovereign</span> Internet 
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              IU Web is a Unix-minded, Tibet-inspired architecture for a sovereign digital life. Your <strong>IU Box</strong> is a personal server, private sanctuary, and secure gateway that connects to others by <em>choice</em>—forming a voluntary, resilient mesh. 
		</p>
	<p className="mt-5 text-lg text-slate-600 leading-relaxed">
<strong>IU Web = IU Box + IU Mesh</strong> deliver cryptographically enforced sovereignty—a people-owned, offline-first network where governance is code, not contracts.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
            {/* <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-5 py-3 font-medium shadow-sm">Join the Early Wave</a> */}
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
              
	<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
>
  <Card className="p-0 overflow-hidden">
    <img
      src="/Logo.png"
      alt="MeshSpace Box diagram"
      className="w-full h-auto object-contain"
    />
  </Card>
</motion.div>

              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

 {/* Broken Internet  */}
      <Section id="broken" className="mt-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card>
            <h2 className="text-2xl md:text-3xl font-bold">The Internet Is Broken</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
            Now imagine a world where your digital life is yours again.
Where you control your identity — and your space is sovereign.

Your IU Box is that space: private, secure, with off-grid AI at your side.
You decide what to share, with whom, and for how long.
You publish, connect, and collaborate on your own terms.

This isn’t a search engine ruled by ads.
It’s a local, living web — proximity empowered by people.
A human web, not a commercial one.

Open your IU Box, and your mesh view shows trusted, real-time knowledge nearby::
            </p>
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
              <p className="mt-2 text-sm text-slate-600">Instead of corporations harvesting your data, your IU Box makes you the steward of your digital life. What you share is yours to grant, not theirs to take. Your data isn’t a resource to be mined. It’s your life — and you hold the keys.</p>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <Network className="h-5 w-5" />
                <div className="font-semibold">From Fragile → To Sovereign</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">No more fragile cloud rules and shifting terms of service. Your IU Box is a private, sovereign space — rights by design, not policies after the fact. No rented clouds, no shifting terms. A private space that answers only to you.</p>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <UserCheck className="h-5 w-5" />
                <div className="font-semibold">From Algorithms → To Human Knowledge</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">Knowledge isn’t ads or rankings. It’s people nearby sharing trusted insight. IU Web turns data back into living, local knowledge. </p>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <Network className="h-5 w-5" />
                <div className="font-semibold">From Control → To Connection</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">Not their map of you — your web of us. Your IU Box is always under your control. Local when needed, global when invited — a network that reflects your life.</p>
            </Card>
          </div>
        </div>
      </Section>


{/* SOLUTION */}
       <Section id="solution" className="mt-20">
	<section className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">IU SOLUTION: A Unix‑Like Digital Universe</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            We build like Unix—modular, composable, sovereign—and we think like Indra’s Net—interconnected jewels reflecting one another.
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
                <td className="p-3">Tamper‑evident karma log</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-600">Cultural respect note: metaphors are used with reverence; the movement is non‑sectarian and inclusive.</p>
      </Section> </Section>


      {/* IU BOX */}
      <Section id="box" className="mt-20">
	<h2 className="text-2xl md:text-3xl font-bold mb-8">IU Web</h2>       
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

    <Section id="box2" className="mt-20">
        <div className="grid md:grid-cols-3 gap-6">
          <Feature icon={Box} title="Local AI, Private by Default">
            AI runs in a sandbox (TEE/WASM). Your data never leaves without consent.
          </Feature>
          <Feature icon={ShieldCheck} title="Governance by Math">
            Signed capability tokens replace ToS. No valid token → no action.
          </Feature>
          <Feature icon={IDCard} title="Community Quorum Trust">
           No single admin. Guardians use quorum to revoke abuse and recover keys.
          </Feature>
        </div>
      </Section>

      {/* MISSION */}
      <Section id="mission" className="mt-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card>
            <h2 className="text-2xl md:text-3xl font-bold">IU Web Mission Statement</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              What if your entire digital life lived in something you owned — like a cabin, a studio, a home? And what if you could walk into it, shape it, and decide who’s welcome, just like in real life? This is what the aim is; a new way to connect, a new way to own your digital world. Not just your data, your presence, your space, your power and your right to safely connect without surveillance. The future of the internet belongs to you. Join the movement. The internet should not be owned by large corporations, it should be ours. 
Every person should have easy and protected access to their own online space — a personal, sovereign space that securely stores your data, apps, and presence. From global mesh to offline tools, IU Web is a movement to return the internet to its people — one Box at a time.
 
            </p>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm list-disc pl-5">
              <li>Private Digital Sanctuary (apps: Study, Media, Collections, Projects)</li>
              <li>Token-verified access, sandboxed workloads, audit log</li>
              <li>You become part of a new kind of internet — local, global, sovereign</li>
            </ul>
          </Card>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card>
              <div className="flex items-center gap-3">
                <Cpu className="h-5 w-5" />
                <div className="font-semibold">Unix inspired</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">The IU Kernel is a modular core combines secure identity, private storage, and mesh connectivity. Runs on ordinary hardware — laptops, mini-servers (NUCs), or cloud VMs. No fragile logins. No hidden dependencies.</p>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5" />
                <div className="font-semibold">Trust, proven</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">Ed25519 signatures, HMACs, and audit trails secure every action. Policy compiles to a signed capability. No token → no action. Set who/what/when/where. Policy becomes intent.</p>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <Network className="h-5 w-5" />
                <div className="font-semibold">Mesh ready</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">These Boxes can connect freely, forming constellations, communities, or cosmic mesh networks. Mesh verifies, guardians can revoke via quorum.</p>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5" />
                <div className="font-semibold">Decentralized resilience</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">By design, IU Boxes carry their own core functions — no external servers required. When linked, they create a living web of mutual backup and trust.</p>
            </Card>
          </div>
        </div>
      </Section>

 {/* REGULATORY*/}
      <Section id="reg" className="mt-20">
       <h2 className="text-2xl md:text-3xl font-bold">Regulatory Fit</h2>
	 <div className="grid md:grid-cols-3 gap-6">
          <Card>
          
            <h3 className="mt-1 text-lg font-semibold">GDPR by Design</h3>
            <p className="mt-2 text-slate-600">Local‑first data, consent via signed tokens, real deletion.</p>
          </Card>
          <Card>
         
            <h3 className="mt-1 text-lg font-semibold">Geofenced Policies</h3>
            <p className="mt-2 text-slate-600">Enable capability registry, token verification, and sandboxed apps. Everything logged, nothing leaked.</p>
          </Card>
          <Card>
          
            <h3 className="mt-1 text-lg font-semibold">No Master Keys. No Backdoors.</h3>
            <p className="mt-2 text-slate-600">IU Box protects itself through quorum decisions, split secrets, and verifiable boot — so no one person or entity can seize control.</p>
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
            <div>
  <Card className="p-0 overflow-hidden">
    <img
      src="/MeshSpaceBox_AI.png"
      alt="Mesh network diagram"
      className="w-full h-auto object-contain"
    />
  </Card>
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
            Our internet space should be independent, united, decentralized and under our control. We, the people should protect our digital world. We should get together and prepare a DAO democratic-coop approach to build our common digital space, we should decide on the Mesh standards, like the greek Omfalos. If you feel our internet has been overtaken by couple big players, if you feel your data and private information is being hijacked, if you find our internet is broken, I invite you to this movement. We have work to do. We also have less than 12 months to get this patented and protected from the big corporations. This is about people not power.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">




export default function ReserveSpot() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"ok"|"error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("ok");
        setMessage("Thanks — check your inbox for a confirmation from us.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md">
      <input
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 rounded-l-xl px-4 py-3 text-slate-900 border border-slate-300 focus:outline-none"
        aria-label="Email address"
      />
      <button
        type="submit"
        disabled={status==="loading"}
        className="inline-flex items-center justify-center rounded-r-xl bg-slate-900 text-white px-5 py-3 font-medium shadow-sm disabled:opacity-70"
      >
        {status==="loading" ? "Sending..." : "Reserve my spot"}
      </button>
      {message && (
        <p className={`ml-3 self-center text-sm ${status==="ok" ? "text-emerald-600" : "text-rose-600"}`}>
          {message}
        </p>
      )}
    </form>
  );
}




            {/* <a href="#" className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-5 py-3 font-medium shadow-sm">Reserve my spot</a>
            <a href="#" className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700">Read the manifesto</a>    */}
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




