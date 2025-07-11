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
                  <span className="text-gray-500">October 20, 2023</span>
                </div>
                <h1 className="heading-primary text-navy-800 mb-6">
                  Ambiguity May Constitute a Voluntary Consent to Search
                </h1>
              </header>

              {/* Featured Image */}
              <div className="aspect-video mb-8 rounded-xl overflow-hidden">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2F9a13c4335dee467598c6bdb3c74fcb36?format=webp&width=800"
                  alt="Police officer conducting search"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-luxury leading-relaxed mb-6">
                  Affirming a district court's convictions for possession of
                  methamphetamine and drug paraphernalia, the Nebraska Supreme
                  Court held the defendant's consent to a search was neither a
                  result of coercion nor ambiguity. State v. Hammond, 315 Neb.
                  362 (Oct. 20, 2023).
                </p>

                <p className="text-luxury leading-relaxed mb-6">
                  In Hammond, the defendant was stopped by law enforcement in
                  response to a call complaining about a possible intoxicated
                  driver. Upon contacting the Defendant, the law enforcement
                  officer observed that the Defendant might have been under the
                  influence of a drug. As such, law enforcement officers asked
                  the defendant if she would perform field sobriety maneuvers,
                  to which she did not object. Although the officer did not
                  conclude the Defendant was under the influence of alcohol, the
                  Defendant did show signs consistent with being under the
                  influence of a CNS stimulant.
                </p>

                <p className="text-luxury leading-relaxed mb-6">
                  When the Defendant was asked whether she would mind if law
                  enforcement looked in her vehicle, she replied, "If you
                  absolutely need to…" Law enforcement officers asked a second
                  time to "take a look," and the Defendant replied, "If you
                  really need to go look, more power to you." Additionally,
                  while law enforcement officers were preparing to search the
                  vehicle, the Defendant asked if they would retrieve her
                  cigarettes from the vehicle. After receiving her cigarettes,
                  the Defendant stood by the vehicle and made a call on her cell
                  phone. During the search, law enforcement officers located a
                  folded-up receipt stuffed in the steering wheel cover that
                  contained a white crystalline substance that the officers
                  recognized as possible methamphetamine. The Defendant was
                  subsequently handcuffed, taken into custody, and arrested.
                </p>

                <p className="text-luxury leading-relaxed mb-6">
                  As a result of the methamphetamine located in her vehicle, the
                  Defendant was ultimately charged with possession of
                  methamphetamine and drug paraphernalia. The district court
                  found the Defendant guilty following a bench trial and
                  sentenced the Defendant to 36 months' probation. Upon
                  appealing her conviction to the appellate Court, the Nebraska
                  Supreme Court upheld the conviction.
                </p>

                <p className="text-luxury leading-relaxed mb-6">
                  The Nebraska Supreme Court found the law enforcement officer
                  did not use coercion when he asked to look in the vehicle.
                  There were no threatening gestures or a threatening tone of
                  voice during the encounter. Rather, the conversation between
                  law enforcement officers and the Defendant was casual and
                  cordial. The Defendant was allowed to refuse consent, but she
                  allowed the search to proceed without hesitation or protest.
                  Furthermore, in addition to her statements, the Court found
                  the Defendant had made a hand gesture toward the vehicle,
                  stood nearby, and had a conversation on her cell phone without
                  doing anything to manifest refusal. Therefore, the Court
                  concluded the Defendant's consent was voluntary through her
                  statements and actions.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-8">
                  <h3 className="heading-tertiary text-amber-800 mb-3">
                    Key Takeaway
                  </h3>
                  <p className="text-amber-700 leading-relaxed">
                    This Hammond decision fully demonstrates that consent to
                    search does not require direct words of affirming consent
                    but may also be given through actions whether expressed or
                    impliedly. Under Nebraska law, although mere submission to
                    authority is insufficient to establish consent to a search,
                    a consent to search may be implied by action rather than
                    words. Therefore, do not mistakenly give voluntary consent
                    to search by not expressing a clear, direct, and unambiguous
                    refusal through words and/or actions.
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
                  Need Legal Advice on Search and Seizure Issues?
                </h3>
                <p className="text-luxury mb-6">
                  Our criminal defense team can help protect your constitutional
                  rights and provide guidance on search and seizure matters.
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
