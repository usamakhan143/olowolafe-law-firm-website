"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { cn } from "@/utils/cn";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "ambiguity-consent-search",
    title: "Ambiguity May Constitute a Voluntary Consent to Search",
    excerpt:
      "Affirming a district court's convictions for possession of methamphetamine and drug paraphernalia, the Nebraska Supreme Court held the defendant's consent to a search was neither a result of coercion nor ambiguity.",
    date: "October 20, 2023",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2F9a13c4335dee467598c6bdb3c74fcb36?format=webp&width=800",
    category: "Criminal Defense",
  },
  {
    id: "fellatio-sexual-assault",
    title: "Fellatio on Unconscious Man Results in Sexual Assault Conviction",
    excerpt:
      "Upholding a district court's conviction of first-degree sexual assault, the Nebraska Supreme Court concluded that there was sufficient evidence to support the sexual assault conviction for a defendant who voluntarily performed fellatio on a non-consenting person.",
    date: "May 27, 2022",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2F5af562b89d0642d6a484d701eb139364?format=webp&width=800",
    category: "Criminal Defense",
  },
  {
    id: "firearm-possession-conviction",
    title: "Firearm in Bag Brings Unlawful Possession Conviction",
    excerpt:
      "Affirming the district court's conviction of an unlawful possession of a firearm by a prohibited person, the Eighth Circuit Court of Appeals found there was sufficient evidence to support the unlawful possession of a firearm.",
    date: "April 22, 2022",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2Fc91f744857a1460eb34bd41161b29702?format=webp&width=800",
    category: "Federal Cases",
  },
  {
    id: "prescription-dui-conviction",
    title: "Prescription Medications Leads to DUI Conviction",
    excerpt:
      "Upholding a county court's conviction of driving under the influence of drugs, the Nebraska Supreme Court found there was sufficient evidence to support a DUI conviction for a person driving under the influence of prescription medications.",
    date: "November 12, 2021",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2F6a894a1f93e6439794bf26e3d353f1d2?format=webp&width=800",
    category: "Criminal Defense",
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-navy-900 text-white py-16">
          <div className="container-luxury text-center">
            <h1 className="heading-primary text-white mb-6">
              Legal Blog & Case Updates
            </h1>
            <p className="text-luxury text-white/80 max-w-3xl mx-auto">
              Stay informed with the latest legal developments, case studies,
              and insights from Olowolafe Law Firm.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-2 gap-12">
              {blogPosts.map((post, index) => (
                <article key={post.id} className="group">
                  <Link href={`/blog/${post.id}`}>
                    <div className="card-luxury h-full overflow-hidden">
                      {/* Image */}
                      <div className="aspect-video overflow-hidden mb-6">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={800}
                          height={450}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        {/* Category & Date */}
                        <div className="flex items-center justify-between text-sm">
                          <span className="px-3 py-1 bg-gold-100 text-gold-700 rounded-full font-medium">
                            {post.category}
                          </span>
                          <span className="text-gray-500">{post.date}</span>
                        </div>

                        {/* Title */}
                        <h2 className="heading-tertiary text-navy-800 group-hover:text-gold-600 transition-colors">
                          {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-gray-600 leading-relaxed">
                          {post.excerpt}
                        </p>

                        {/* Read More */}
                        <div className="flex items-center text-gold-600 font-medium group-hover:text-gold-700 transition-colors">
                          <span>Read Full Article</span>
                          <span className="ml-2 group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-navy-50 rounded-xl p-8">
                <h3 className="heading-tertiary text-navy-800 mb-4">
                  Have Questions About These Cases?
                </h3>
                <p className="text-luxury mb-6 max-w-2xl mx-auto">
                  Our legal team can help you understand how these precedents
                  might apply to your situation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/schedule-consultation" className="btn-primary">
                    Schedule Consultation
                  </Link>
                  <a href="tel:4029959554" className="btn-secondary">
                    Call (402) 995-9554
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
