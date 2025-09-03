import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | HealthCare Association",
  description: "Insights and updates from our healthcare network.",
};

const posts = [
  { slug: "patient-safety-week", title: "Patient Safety Week Highlights", excerpt: "Key takeaways to improve safety across departments." },
  { slug: "emr-integration", title: "EMR Integration Best Practices", excerpt: "Bridging data for better outcomes and efficiency." },
  { slug: "telemedicine-growth", title: "Telemedicine Growth in 2025", excerpt: "Trends shaping remote care and access." },
];

export default function BlogPage() {
  return (
    <section>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Blog</h1>
      <p className="mt-2 text-black/80 max-w-2xl">
        News, research, and practical guides from our hospitals and partners.
      </p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-lg border border-black/[.08] p-4">
            <h2 className="font-semibold text-lg">
              <Link href={`/blog/${post.slug}`} className="hover:underline underline-offset-4">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm mt-1 text-black/70">{post.excerpt}</p>
            <div className="mt-3">
              <Link href={`/blog/${post.slug}`} className="text-sm font-medium hover:underline underline-offset-4">
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


