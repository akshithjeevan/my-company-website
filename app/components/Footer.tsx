export default function Footer() {
  return (

    <footer className="border-t border-black/5 dark:border-white/10 bg-background text-foreground pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* LOGO + DESCRIPTION */}
        <div>
          <h2 className="text-2xl font-bold mb-4 tracking-tight text-foreground dark:text-white">Zyntrix</h2>
          <p className="text-muted-foreground dark:text-gray-400 font-light leading-relaxed">
            Empowering businesses with innovative digital solutions and creative expression.
            We transform ideas into impactful digital experiences from Kerala to the world.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-4 text-foreground dark:text-white">Quick Links</h3>
          <ul className="space-y-3 text-muted-foreground dark:text-gray-400 font-light">
            <li><a href="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</a></li>
            <li><a href="/WhoWeAre" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Who We Are</a></li>
            <li><a href="/services" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Services</a></li>
            <li><a href="/portfolio" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Portfolio</a></li>
            <li><a href="/Carrier" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Careers</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold mb-4 text-foreground dark:text-white">Services</h3>
          <ul className="space-y-3 text-muted-foreground dark:text-gray-400 font-light">
            <li className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">Creative Designing</li>
            <li className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">Website Development</li>
            <li className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">Digital Marketing</li>
            <li className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">App Development</li>
            <li className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">Technology Consulting</li>
            <li className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">Product Innovation</li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="font-semibold mb-4 text-foreground dark:text-white">Contact Info</h3>
          <ul className="space-y-3 text-muted-foreground dark:text-gray-400 font-light">
            <li>Kerala, India</li>
            <li><a href="mailto:akshithjeevan2000@gmail.com" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">akshithjeevan2000@gmail.com</a></li>
            <li><a href="tel:+919188426776" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">+91 9188426776</a></li>
            <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="mt-16 border-t border-black/5 dark:border-white/5 pt-8 text-center text-muted-foreground/60 text-sm font-light">
        <p>© 2026 Zyntrix. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Terms of Service</a>
        </div>
      </div>

    </footer>
  );
}
