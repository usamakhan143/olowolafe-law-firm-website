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
                  <span className="text-gray-500">November 12, 2021</span>
                </div>
                <h1 className="heading-primary text-navy-800 mb-6">
                  Prescription Medications Leads to DUI Conviction
                </h1>
              </header>

              {/* Featured Image */}
              <div className="aspect-video mb-8 rounded-xl overflow-hidden">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2F6a894a1f93e6439794bf26e3d353f1d2?format=webp&width=800"
                  alt="Prescription medications representing DUI case"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-luxury leading-relaxed mb-6">
                  Upholding a county court&apos;s conviction of driving under the
                  influence of drugs, the Nebraska Supreme Court found there was
                  sufficient evidence to support a DUI conviction for a person
                  driving under the influence of prescription medications. State
                  v. Taylor, 310 Neb. 376 (Neb. Nov. 12, 2021).
                </p>

                <p className="text-luxury leading-relaxed mb-6">
                  In Taylor, a traffic stop was initiated when police officers
                  saw a vehicle driving with its headlights off on a city street
                  in Lincoln, Nebraska. Prior to initiating the traffic stop,
                  the police officers followed the vehicle observing the vehicle
                  crossing the centerline and striking a curb. Upon asking the
                  driver why his headlights were not on and why he struck the
                  curb, the driver stated that he thought his headlights were on
                  and that he fell asleep while driving. The driver also
                  admitted that he had taken some prescription pills when he was
                  asked whether he had taken any medications or drugs recently.
                </p>

                <p className="text-luxury leading-relaxed mb-6">
                  After observing the driver having slurred speech, appearing
                  overtired, and not completely aware of what was going on, the
                  police officers conducted field sobriety tests to determine if
                  the driver was impaired. Although there was no smell of
                  alcohol on the driver&apos;s breath, and a preliminary breath test
                  did not detect any alcohol on the driver&apos;s breath, the
                  officers detained the driver to be evaluated by a drug
                  recognition expert. After receiving his Miranda rights and
                  agreeing to be interviewed, the driver again acknowledged
                  taking medications for mental and behavioral health reasons
                  that caused him to get sleepy.
                </p>

                <p className="text-luxury leading-relaxed mb-6">
                  As a result of the driver&apos;s statement, the performance on
                  field sobriety tests, and the multistep drug recognition
                  expert protocol, the driver was cited for violating driving
                  under the influence under Lincoln Mun. Code § 10.16.030
                  (2017). The county court found the driver guilty of unlawfully
                  operating a motor vehicle under the influence of any drug and
                  passed sentence. The district court affirmed the county
                  court&apos;s findings that there was sufficient evidence for the
                  conviction. Upon appealing to the appellate court, the
                  Nebraska Supreme Court upheld the driver&apos;s conviction of
                  driving under the influence of any drug.
                </p>

                <p className="text-luxury leading-relaxed mb-6">
                  The Nebraska Supreme Court found that the Lincoln Municipal
                  Ordinance that criminalizes the operation or actual physical
                  control of a motor vehicle while under the influence of
                  alcoholic liquor or of any drug encompasses prescription
                  medications. Specifically, the ordinance did not limit its
                  coverage to illegal or any other subcategory of drugs. Rather,
                  it makes it unlawful to drive under the influence of any drug.
                  Furthermore, driving at night with headlights off, crossing
                  the centerline of the road, striking a curb, and admitting to
                  falling asleep while driving was sufficient evidence to
                  demonstrate the driver&apos;s ability to drive safely was impaired
                  as a result of prescription medications.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-8">
                  <h3 className="heading-tertiary text-amber-800 mb-3">
                    Important Warning
                  </h3>
                  <p className="text-amber-700 leading-relaxed">
                    This decision demonstrates that driving under the influence
                    may not be limited to alcohol or illegal drugs but can also
                    include regularly used prescription medications.
                    Accordingly, taking any prescription medications that impair
                    your ability to operate a motor vehicle safely may subject
                    you to a DUI conviction.
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
                  Charged with Prescription Drug DUI?
                </h3>
                <p className="text-luxury mb-6">
                  Prescription drug DUI cases can be complex. Our criminal
                  defense team has experience handling these unique cases and
                  protecting your rights.
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
