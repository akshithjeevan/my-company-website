"use client";

import Link from "next/link";
import {
  Mail,
  MessageSquare,
  Phone,
  Calendar,
  MapPin,
  Clock,
  Zap,
  CheckCircle2,
  Star
} from "lucide-react";
import Footer from "../components/Footer";

export default function ContactUsPage() {
  return (
    <main className="bg-background text-foreground min-h-screen transition-colors duration-300">

      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden pt-36 pb-20">
        {/* Ambient Backgrounds */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-400/20 dark:bg-purple-600/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-400/10 dark:bg-indigo-600/5 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="animate-hero-badge inline-flex items-center gap-2 rounded-full border border-purple-200 dark:border-purple-500/30 bg-purple-50/50 dark:bg-black px-4 py-2 text-sm text-purple-700 dark:text-purple-300 backdrop-blur-sm mb-6 transition-colors">
            <MessageSquare className="h-4 w-4" />
            Contact Us
          </div>

          <h1 className="animate-hero-title text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl tracking-tight mb-6">
            <span className="bg-gradient-to-br from-purple-950 to-purple-800 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              Let's Build Something
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>

          <p className="animate-hero-body mx-auto max-w-2xl text-lg leading-8 text-purple-900/70 dark:text-gray-400">
            Ready to transform your business with innovative digital solutions? We&apos;re here to help you navigate your digital journey.
          </p>

          {/* Stats Bar */}
          <div className="animate-hero-cta mt-12 flex flex-wrap justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2 rounded-2xl border border-violet-300/60 dark:border-white/[0.08] bg-white/70 dark:bg-black px-6 py-3 backdrop-blur-md shadow-sm dark:shadow-none">
              <Zap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-semibold text-purple-950 dark:text-white">24hr Response Time</span>
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-violet-300/60 dark:border-white/[0.08] bg-white/70 dark:bg-black px-6 py-3 backdrop-blur-md shadow-sm dark:shadow-none">
              <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-semibold text-purple-950 dark:text-white">25+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-violet-300/60 dark:border-white/[0.08] bg-white/70 dark:bg-black px-6 py-3 backdrop-blur-md shadow-sm dark:shadow-none">
              <Star className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-semibold text-purple-950 dark:text-white">5★ Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PREFERRED WAY TO CONNECT ── */}
      <section id="connect" className="py-20 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-purple-950 dark:text-white sm:text-4xl mb-4">
              Choose Your Preferred Way to Connect
            </h2>
            <p className="text-lg text-purple-900/70 dark:text-gray-400">
              We're flexible and available through multiple channels to make it easy for you to reach us
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Email Card */}
            <div className="group relative flex flex-col rounded-[2rem] border border-violet-200/70 dark:border-purple-500/24 bg-white/75 dark:bg-black p-8 shadow-[0_4px_24px_rgba(139,92,246,0.08)] dark:shadow-[0_4px_36px_rgba(109,40,217,0.20)] hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(139,92,246,0.15)] dark:hover:shadow-[0_0_50px_rgba(109,40,217,0.38)] transition-all duration-500 overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 left-0 right-0 h-[2px] dark:h-[2px] bg-gradient-to-r from-transparent via-purple-500/80 dark:via-purple-400/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-600/10 dark:bg-black border border-purple-500/20 dark:border-purple-500/38 text-purple-600 dark:text-purple-300 group-hover:bg-purple-600/20 dark:group-hover:bg-purple-600/35 transition-colors duration-300 mb-6">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-purple-950 dark:text-white mb-2 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">Email Us</h3>
              <p className="text-sm leading-6 text-purple-900/70 dark:text-gray-400 mb-6 flex-grow">
                Send us a detailed message and we'll get back to you within 24 hours
              </p>
              <Link href="mailto:akshithjeevan2000@gmail.com" className="text-purple-600 dark:text-purple-400 font-semibold text-sm inline-flex items-center gap-1 hover:text-purple-800 dark:hover:text-purple-300 transition-colors">
                akshithjeevan2000@gmail.com
              </Link>
            </div>

            {/* WhatsApp Card */}
            <div className="group relative flex flex-col rounded-[2rem] border border-violet-200/70 dark:border-purple-500/24 bg-white/75 dark:bg-black p-8 shadow-[0_4px_24px_rgba(139,92,246,0.08)] dark:shadow-[0_4px_36px_rgba(109,40,217,0.20)] hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(139,92,246,0.15)] dark:hover:shadow-[0_0_50px_rgba(109,40,217,0.38)] transition-all duration-500 overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 left-0 right-0 h-[2px] dark:h-[2px] bg-gradient-to-r from-transparent via-purple-500/80 dark:via-purple-400/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-600/10 dark:bg-black border border-purple-500/20 dark:border-purple-500/38 text-purple-600 dark:text-purple-300 group-hover:bg-purple-600/20 dark:group-hover:bg-purple-600/35 transition-colors duration-300 mb-6">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-purple-950 dark:text-white mb-2 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">WhatsApp</h3>
              <p className="text-sm leading-6 text-purple-900/70 dark:text-gray-400 mb-6 flex-grow">
                Quick questions? Chat with us on WhatsApp for instant responses
              </p>
              <Link href="https://wa.me/+919188426776" className="text-purple-600 dark:text-purple-400 font-semibold text-sm inline-flex items-center gap-1 hover:text-purple-800 dark:hover:text-purple-300 transition-colors">
                Start Chat
              </Link>
            </div>

            {/* Call Card */}
            <div className="group relative flex flex-col rounded-[2rem] border border-violet-200/70 dark:border-purple-500/24 bg-white/75 dark:bg-black p-8 shadow-[0_4px_24px_rgba(139,92,246,0.08)] dark:shadow-[0_4px_36px_rgba(109,40,217,0.20)] hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(139,92,246,0.15)] dark:hover:shadow-[0_0_50px_rgba(109,40,217,0.38)] transition-all duration-500 overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 left-0 right-0 h-[2px] dark:h-[2px] bg-gradient-to-r from-transparent via-purple-500/80 dark:via-purple-400/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-600/10 dark:bg-black border border-purple-500/20 dark:border-purple-500/38 text-purple-600 dark:text-purple-300 group-hover:bg-purple-600/20 dark:group-hover:bg-purple-600/35 transition-colors duration-300 mb-6">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-purple-950 dark:text-white mb-2 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">Call Us</h3>
              <p className="text-sm leading-6 text-purple-900/70 dark:text-gray-400 mb-6 flex-grow">
                Speak directly with our team during business hours
              </p>
              <Link href="#" className="text-purple-600 dark:text-purple-400 font-semibold text-sm inline-flex items-center gap-1 hover:text-purple-800 dark:hover:text-purple-300 transition-colors">
                +91 (Available 9 AM - 6 PM IST)
              </Link>
            </div>

            {/* Schedule Card */}
            <div className="group relative flex flex-col rounded-[2rem] border border-violet-200/70 dark:border-purple-500/24 bg-white/75 dark:bg-black p-8 shadow-[0_4px_24px_rgba(139,92,246,0.08)] dark:shadow-[0_4px_36px_rgba(109,40,217,0.20)] hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(139,92,246,0.15)] dark:hover:shadow-[0_0_50px_rgba(109,40,217,0.38)] transition-all duration-500 overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 left-0 right-0 h-[2px] dark:h-[2px] bg-gradient-to-r from-transparent via-purple-500/80 dark:via-purple-400/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-600/10 dark:bg-black border border-purple-500/20 dark:border-purple-500/38 text-purple-600 dark:text-purple-300 group-hover:bg-purple-600/20 dark:group-hover:bg-purple-600/35 transition-colors duration-300 mb-6">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-purple-950 dark:text-white mb-2 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">Schedule Meeting</h3>
              <p className="text-sm leading-6 text-purple-900/70 dark:text-gray-400 mb-6 flex-grow">
                Book a free consultation call to discuss your project
              </p>
              <Link href="#" className="text-purple-600 dark:text-purple-400 font-semibold text-sm inline-flex items-center gap-1 hover:text-purple-800 dark:hover:text-purple-300 transition-colors">
                Book Consultation
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── GET IN TOUCH INFO ── */}
      <section className="py-24 border-t border-purple-100 dark:border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left Info */}
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-purple-600 dark:text-purple-500 font-bold mb-4">Contact Info</p>
              <h2 className="text-3xl font-extrabold sm:text-4xl bg-gradient-to-br from-purple-950 to-purple-800 dark:from-white dark:to-gray-500 bg-clip-text text-transparent mb-6">
                Get in Touch
              </h2>
              <p className="text-lg leading-8 text-purple-900/70 dark:text-gray-400 mb-10 max-w-lg">
                We're here to help you succeed with your digital transformation journey. Connect with us through any of these channels.
              </p>

              <div className="rounded-[2rem] border border-violet-200/70 dark:border-purple-500/26 bg-white/75 dark:bg-black p-8 shadow-[0_4px_24px_rgba(139,92,246,0.08)] dark:shadow-[0_4px_36px_rgba(109,40,217,0.18)] backdrop-blur-md">
                <h3 className="text-xl font-bold text-purple-950 dark:text-white mb-4">Fast Response Time</h3>
                <p className="text-sm leading-6 text-purple-900/70 dark:text-gray-400">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, WhatsApp is your best option.
                </p>
              </div>
            </div>

            {/* Right Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-[1.5rem] border border-violet-200/70 dark:border-purple-500/22 bg-white/80 dark:bg-black p-6 group hover:-translate-y-1 transition-all duration-300 shadow-sm dark:shadow-[0_4px_24px_rgba(109,40,217,0.15)] dark:hover:shadow-[0_0_32px_rgba(109,40,217,0.30)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 mb-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-purple-950 dark:text-white mb-1">Our Location</h4>
                <p className="text-sm text-purple-900/70 dark:text-gray-400">Kerala, India</p>
              </div>

              <div className="rounded-[1.5rem] border border-violet-200/70 dark:border-purple-500/22 bg-white/80 dark:bg-black p-6 group hover:-translate-y-1 transition-all duration-300 shadow-sm dark:shadow-[0_4px_24px_rgba(109,40,217,0.15)] dark:hover:shadow-[0_0_32px_rgba(109,40,217,0.30)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 mb-4">
                  <Clock className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-purple-950 dark:text-white mb-1">Business Hours</h4>
                <p className="text-sm text-purple-900/70 dark:text-gray-400">Monday - Friday<br />9:00 AM - 6:00 PM</p>
              </div>

              <div className="rounded-[1.5rem] border border-violet-200/70 dark:border-purple-500/22 bg-white/80 dark:bg-black p-6 group hover:-translate-y-1 transition-all duration-300 shadow-sm dark:shadow-[0_4px_24px_rgba(109,40,217,0.15)] dark:hover:shadow-[0_0_32px_rgba(109,40,217,0.30)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 mb-4">
                  <Mail className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-purple-950 dark:text-white mb-1">Email Us</h4>
                <p className="text-sm text-purple-900/70 dark:text-gray-400">info@Zyntrix.co.in</p>
              </div>

              <div className="rounded-[1.5rem] border border-violet-200/70 dark:border-purple-500/22 bg-white/80 dark:bg-black p-6 group hover:-translate-y-1 transition-all duration-300 shadow-sm dark:shadow-[0_4px_24px_rgba(109,40,217,0.15)] dark:hover:shadow-[0_0_32px_rgba(109,40,217,0.30)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 mb-4">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-purple-950 dark:text-white mb-1">WhatsApp</h4>
                <p className="text-sm text-purple-900/70 dark:text-gray-400">Available Now</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-purple-100 dark:border-border py-24 text-center relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-purple-300/20 dark:bg-[radial-gradient(ellipse_at_center,rgba(109,40,217,0.28),transparent_65%)] blur-[80px] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-600 dark:text-purple-500 font-bold mb-4">Next Steps</p>
          <h2 className="text-4xl font-extrabold sm:text-5xl bg-gradient-to-br from-purple-950 to-purple-800 dark:from-white dark:to-gray-500 bg-clip-text text-transparent mb-6">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-purple-900/70 dark:text-gray-400 mb-10">
            Join hundreds of businesses that trust us to deliver exceptional digital solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ContactUs"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-8 py-4 text-base font-bold text-white transition hover:bg-purple-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.45)]"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-purple-200 dark:border-white/10 bg-white dark:bg-black px-8 py-4 text-base font-semibold text-purple-700 dark:text-gray-300 transition-all duration-300 hover:border-purple-400 dark:hover:border-purple-500/40 hover:text-purple-800 dark:hover:text-white hover:shadow-[0_10px_20px_rgba(168,85,247,0.15)] dark:hover:shadow-none hover:-translate-y-1 dark:hover:translate-y-0"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
