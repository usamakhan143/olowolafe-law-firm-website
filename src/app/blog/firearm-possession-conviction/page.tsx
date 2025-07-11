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
                    Federal Cases
                  </span>
                  <span className="text-gray-500">April 22, 2022</span>
                </div>
                <h1 className="heading-primary text-navy-800 mb-6">
                  Firearm in Bag Brings Unlawful Possession Conviction
                </h1>
              </header>

              {/* Featured Image */}
              <div className="aspect-video mb-8 rounded-xl overflow-hidden">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2Fc91f744857a1460eb34bd41161b29702?format=webp&width=800"
                  alt="Firearm silhouette representing unlawful possession case"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-luxury leading-relaxed mb-6">
                  Affirming the district court's conviction of an unlawful
                  possession of a firearm by a prohibited person, the Eighth
                  Circuit Court of Appeals found there was sufficient evidence
                  to support the unlawful possession of a firearm, in violation
                  of 18 U.S.C. § 922(g). United States v. Two Hearts, 2022 WL
                  1207731 (8th Cir. 2022).
                </p>

                <p className="text-luxury leading-relaxed mb-6">
                  In Two Hearts, after an arrest warrant was issued for his
                  arrest, law enforcement officers located Two Hearts on a city
                  street. Prior to apprehending Two Hearts, law enforcement
                  officers observed him removing bags from a vehicle and
                  recorded him carrying the bags away from the vehicle. After
                  arresting him, Two Hearts was questioned by law enforcement
                  officers about the location of a gun since he was suspected of
                  being armed. In response, Two Hearts denied knowing what the
                  officer was talking about. Two Hearts was then asked if the
                  bags belonged to him, for which he acknowledged that they were
                  his bags. Two Hearts further stated that his mother could come
                  pick up the bags for him.
                </p>

                <p className="text-luxury leading-relaxed mb-6">
                  After searching Two Hearts, the law enforcement officer found
                  no weapon or contraband on his person. However, upon searching
                  the bags that Two Hearts was seen carrying, a loaded black
                  handgun, with a round in the chamber, and a black holster were
                  found. Law enforcement officers also found a Crown Royal bag
                  that contained an empty cigar pouch with a rolled-up rubber
                  glove. Within the rubber glove, a small plastic bag was found
                  that contained a white crystal-like substance that ultimately
                  tested positive for 0.26 grams of methamphetamine.
                </p>

                <p className="text-luxury leading-relaxed mb-6">
                  As a result of the finding of a gun, Two Hearts was charged
                  with the unlawful possession of a firearm by a prohibited
                  person. The Northern District of South Dakota found Two Hearts
                  guilty of unlawful possession of a firearm on two alternative
                  theories. First, the jury concluded that Two Hearts possessed
                  methamphetamine at the time of his arrest, and that he was an
                  unlawful user of a controlled substance under 18 U.S.C. §
                  922(g)(3). Secondly, the jury concluded Two Hearts knew his
                  status as a convicted felon because Two Hearts signed a
                  stipulation that he had been convicted of a crime punishable
                  by a term of imprisonment exceeding one year for purposes of
                  18 18 U.S.C. § 922(g)(1). Upon appealing his conviction to the
                  appellate court, the Eighth Circuit Court of Appeals upheld
                  his conviction of unlawful possession of a firearm by a
                  prohibited person.
                </p>

                <p className="text-luxury leading-relaxed mb-6">
                  The Eighth Circuit Court of Appeals found there was ample
                  evidence from which a reasonable jury could conclude that Two
                  Hearts was in constructive possession of a firearm from his
                  physical control over the bags and his admission that the bags
                  belonged to him. Specifically, law enforcement officers
                  observed Two Hearts removing the bags from a vehicle. Two
                  Hearts was observed carrying the bags before he was
                  apprehended. Lastly, Two Hearts told law enforcement officers
                  that the bags belonged to him, and that his mother could pick
                  them up.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-8">
                  <h3 className="heading-tertiary text-amber-800 mb-3">
                    Federal Law Implications
                  </h3>
                  <p className="text-amber-700 leading-relaxed">
                    This decision illustrates that a prohibited person can be in
                    constructive possession of a firearm if the person has
                    physical control over a bag belonging to them that contains
                    a firearm. Thereby, under federal law a prohibited person
                    may be convicted of unlawful possession of any firearm or
                    ammunition if the firearm or ammunition is on their person,
                    or they have a firearm or ammunition in their belongings
                    that they are controlling at a given time.
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
                  Facing Federal Firearm Charges?
                </h3>
                <p className="text-luxury mb-6">
                  Federal firearm charges carry serious penalties. Our
                  experienced team understands federal law and can provide the
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
