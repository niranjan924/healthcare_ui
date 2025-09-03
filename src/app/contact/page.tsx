import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | HealthCare Association",
  description: "Reach out to our team for appointments or inquiries.",
};

export default function ContactPage() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="text-black/80">
          Have a question or need assistance? Send us a message and our team will get back to you shortly.
        </p>
        <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-1">
            <label className="text-sm font-medium" htmlFor="name">Full name</label>
            <input id="name" name="name" type="text" placeholder="Jane Doe" className="mt-1 w-full h-11 rounded-md border border-black/[.12] bg-transparent px-3" />
          </div>
          <div className="sm:col-span-1">
            <label className="text-sm font-medium" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="jane@email.com" className="mt-1 w-full h-11 rounded-md border border-black/[.12] bg-transparent px-3" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm font-medium" htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" placeholder="Appointment request" className="mt-1 w-full h-11 rounded-md border border-black/[.12] bg-transparent px-3" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm font-medium" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} placeholder="How can we help?" className="mt-1 w-full rounded-md border border-black/[.12] bg-transparent px-3 py-2" />
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-foreground text-background font-medium hover:opacity-90 w-full sm:w-auto">Send message</button>
          </div>
        </form>
      </div>
      <aside className="space-y-3 rounded-lg border border-black/[.08] p-4 h-fit">
        <h2 className="font-semibold text-lg">General Inquiries</h2>
        <p className="text-sm text-black/70">Mon-Fri, 9am-5pm</p>
        <p className="text-sm">Phone: (555) 123-4567</p>
        <p className="text-sm">Email: info@healthcare.org</p>
        <p className="text-sm">Address: 123 Wellness Ave, Suite 100</p>
      </aside>
    </section>
  );
}


