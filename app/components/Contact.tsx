export default function Contact() {
  return (
    <section className="w-full py-24 bg-background transition-colors duration-300 border-t border-black/5 dark:border-white/5">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="mb-6 text-4xl md:text-5xl font-bold tracking-tight text-foreground dark:text-white">
          Ready to Scale Your Business Digitally?
        </h2>

        <p className="mb-10 text-lg text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
          Join businesses across industries that trust Zyntrix to deliver
          impactful digital solutions and innovative products.
        </p>

        <button className="rounded-full bg-foreground dark:bg-white px-8 py-3.5 text-background dark:text-black font-semibold transition-all duration-300 hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white dark:hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-105">
          Let&apos;s Work Together
        </button>
      </div>
    </section>
  );
}
