"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-24">
        <article className="section-padding">
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto">
              {/* Back to Blog */}
              <Link
                href="/blog"
                className="inline-flex items-center text-gold-600 hover:text-gold-700 mb-8 transition-colors"
              >
                <span className="mr-2">←</span>
                Back to Blog
              </Link>

              {/* Header */}
              <header className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-sm font-medium">
                    Criminal Defense
                  </span>
                  <span className="text-gray-500">May 27, 2022</span>
                </div>
                <h1 className="heading-primary text-navy-800 mb-6">
                  Fellatio on Unconscious Man Results in Sexual Assault
                  Conviction
                </h1>
              </header>

              {/* Featured Image */}
              <div className="aspect-video mb-8 rounded-xl overflow-hidden">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2F5af562b89d0642d6a484d701eb139364?format=webp&width=800"
                  alt="Wine glass representing intoxication case"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-luxury leading-relaxed mb-6">
                  Upholding a district court&apos;s conviction of first-degree sexual
                  assault, the Nebraska Supreme Court concluded that there was
                  sufficient evidence to support the sexual assault conviction
                  for a defendant who voluntarily performed fellatio on a
                  non-consenting person. State v. Garcia, 311 Neb. 648 (May 27,
                  2022).
                </p>

                <p className="text-luxury leading-relaxed mb-6">
                  In Garcia, a couple had been invited over to the home of their
                  neighbor and co-worker. While at Garcia&apos;s home, after drinking
                  beer and rum, as well as smoking some marijuana, the victim
                  indicated that he was tired and wanted to go home. The victim
                  eventually fell asleep while waiting for his girlfriend to
                  finish her conversation with Garcia. After she was
                  unsuccessful in trying to wake him, the victim&apos;s girlfriend
                  returned to her home and retrieved a blanket to wrap him in
                  before leaving Garcia&apos;s home for the night. The victim woke up
                  hours later and shockingly realized he was completely naked,
                  and Garcia was performing fellatio on him. Upset, the victim
                  grabbed his clothes, dressed, and went home. Upon informing
                  his girlfriend what had occurred, the victim contacted the
                  police. During his interview with law enforcement, Garcia
                  eventually admitted that he had performed fellatio on the
                  victim.
                </p>

                <p className="text-luxury leading-relaxed mb-6">
                  As a result of the victim and Garcia&apos;s statements, Garcia was
                  charged with first degree sexual assault. The district court
                  found Garcia guilty of sexual assault and sentenced him to 2
                  to 4 years&apos; imprisonment. Upon appealing his conviction to the
                  appellate court, the Nebraska Supreme Court upheld his
                  conviction of first-degree sexual assault.
                </p>

                <p className="text-luxury leading-relaxed mb-6">
                  The Nebraska Supreme Court found the term sexual penetration
                  defined in the statute explicitly included fellatio, and
                  therefore Garcia had indeed admitted engaging in sexual
                  penetration. Specifically, the court had previously defined
                  fellatio as, &ldquo;the practice of obtaining sexual satisfaction by
                  oral stimulation of the penis.&rdquo; Moreover, the fact that the
                  victim testified that he did not consent to the fellatio by
                  Garcia, he was asleep and did not awake until he ejaculated,
                  realized it was Garcia who was fellating him, and objected and
                  left Garcia&apos;s home, was sufficient evidence to support that
                  the fellatio was nonconsensual.
                </p>

                <p className="text-luxury leading-relaxed mb-6">
                  Additionally, there was sufficient evidence that Garcia knew
                  or should have known the victim was not in a position to
                  comprehend the nature of Garcia&apos;s conduct based on the
                  victim&apos;s testimony that he was drinking alcohol, smoked
                  marijuana, fell asleep to the point that he could not be woke,
                  as well as that he urinated on himself, removed his clothing,
                  and switched locations from one couch to another, all without
                  any recollection of what had occurred.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-8">
                  <h3 className="heading-tertiary text-amber-800 mb-3">
                    Legal Precedent
                  </h3>
                  <p className="text-amber-700 leading-relaxed">
                    This Garcia decision confirms that sexual penetration, which
                    includes fellatio by definition, is not merely limited to
                    only the act of a victim being forced to perform fellatio
                    upon a defendant. Under Nebraska law, a person commits first
                    degree sexual assault by voluntarily performing fellatio on
                    a victim without the victim&apos;s consent, and knowing or should
                    have known that the victim was in no position to appraise
                    the nature of the defendant&apos;s conduct.
                  </p>
                </div>

                <p className="text-luxury leading-relaxed mb-8">
                  If you have any questions about this decision, please contact
                  us.
                </p>
              </div>

              {/* Contact CTA */}
              <div className="bg-navy-50 rounded-xl p-8 text-center mt-12">
                <h3 className="heading-tertiary text-navy-800 mb-4">
                  Facing Sexual Assault Charges?
                </h3>
                <p className="text-luxury mb-6">
                  Our experienced criminal defense attorneys understand the
                  serious nature of these charges and can provide the aggressive
                  defense you need.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-primary">
                    Schedule Consultation
                  </Link>
                  <a href="tel:4029959554" className="btn-secondary">
                    Call (402) 995-9554
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
