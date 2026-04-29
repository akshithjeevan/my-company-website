import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MapPin, Mail, Phone, Clock, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (

    <footer className="border-t border-black/5 dark:border-white/10 bg-background text-foreground pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-10">

        <div>
          <h2 className="text-2xl font-bold mb-4 tracking-tight text-foreground dark:text-white">Zyntrix</h2>
          <p className="text-muted-foreground dark:text-gray-400 font-light leading-relaxed mb-6">
            Empowering businesses with innovative digital solutions and creative expression.
            We transform ideas into impactful digital experiences from Kerala to the world.
          </p>
          <div className="flex gap-5">
            <a href="https://www.instagram.com/akshith_jeevan/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-black/5 dark:bg-white/5 text-muted-foreground dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 hover:-translate-y-1">
              <FaInstagram size={18} />
            </a>
            <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-black/5 dark:bg-white/5 text-muted-foreground dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 hover:-translate-y-1">
              <FaXTwitter size={18} />
            </a>
            <a href="https://www.facebook.com/akshith.jeevan" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-black/5 dark:bg-white/5 text-muted-foreground dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 hover:-translate-y-1">
              <FaFacebookF size={18} />
            </a>
            <a href="https://www.linkedin.com/in/akshith-jeevan-405144213" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-black/5 dark:bg-white/5 text-muted-foreground dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 hover:-translate-y-1">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-4 text-foreground dark:text-white">Quick Links</h3>
          <ul className="space-y-3 text-muted-foreground dark:text-gray-400 font-light">
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <a href="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</a>
            </li>
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <a href="/WhoWeAre" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Who We Are</a>
            </li>
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <a href="/services" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Services</a>
            </li>
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <a href="/portfolio" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Portfolio</a>
            </li>
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <a href="/Carrier" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Careers</a>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="md:col-span-2 lg:col-span-2">
          <h3 className="font-semibold mb-4 text-foreground dark:text-white">Services</h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-muted-foreground dark:text-gray-400 font-light">
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <Link href="/services#web-development" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Web Development</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <Link href="/services#app-development" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">App Development</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <Link href="/services#ecommerce-platform" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">E-Commerce Platform</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <Link href="/services#ai-chatbot" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">AI Chatbot Platform</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <Link href="/services#saas-development" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">SaaS Development</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <Link href="/services#ui-ux-design" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">UI / UX Design</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <Link href="/services#digital-marketing" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Digital Marketing</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <Link href="/services#logo-branding" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Logo & Branding</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <Link href="/services#iot-solutions" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">IoT Solutions</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="font-semibold mb-4 text-foreground dark:text-white">Contact Info</h3>
          <ul className="space-y-4 text-muted-foreground dark:text-gray-400 font-light">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-purple-600 dark:text-purple-400 shrink-0" />
              <span>Kerala, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-purple-600 dark:text-purple-400 shrink-0" />
              <a href="mailto:akshithjeevan2000@gmail.com" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors truncate">Email Us</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-purple-600 dark:text-purple-400 shrink-0" />
              <a href="tel:+919188426776" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">+91 9188426776</a>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={18} className="text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span>Monday - Friday</span>
                <span className="text-xs opacity-70">9:00 AM - 6:00 PM</span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="mt-16 border-t border-black/5 dark:border-white/5 pt-8 text-center text-muted-foreground/60 text-sm font-light">
        <p>© 2026 Zyntrix. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <Link href="/privacy-policy" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Terms of Service</Link>
        </div>
      </div>

    </footer>
  );
}
