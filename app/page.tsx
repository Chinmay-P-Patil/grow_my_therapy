"use client"
import { useState } from "react";
import RevealObserver from "../components/fadeupobserver";
import Image from "next/image";

export default function Home() {
  const specialties = [
    { id: 1, title: "Anxiety & Panic", description: "Support for constant worry, overthinking, physical tension, and anxiety that feels difficult to shut off—even when life looks fine on the outside.", image: "/download (4).jpg" },
    { id: 2, title: "Trauma & EMDR Therapy", description: "Carefully paced trauma therapy for both single-incident and long-standing experiences, with an emphasis on safety, regulation, and stability.", image: "/download (3).jpg" },
    { id: 3, title: "Burnout & Chronic Stress", description: "Therapy for professionals and high-achievers navigating burnout, perfectionism, and the emotional toll of sustained pressure.", image: "/download (2).jpg" },
  ]
  const faqs = [
    { q: "Do you take insurance?", a: "I do not accept insurance directly. I can provide a superbill upon request for out-of-network reimbursement" },
    { q: "What are your rates?", a: "Session fees vary depending on the type and length of service. I'm happy to discuss current rates during an initial consultation" },
    { q: "Are you currently accepting new clients?", a: "Availability can change over time. The best way to find out is to reach out to schedule a consultation" },
    {
      q: "Do you offer in-person or virtual sessions?", a: "I offer in-person therapy at my Santa Monica office, as well as secure telehealth sessions for clients across California"
    }
  ]
  const professionalqual = [
    { q: "Education", a: "Doctor of Psychology (PsyD) in Clinical Psychology" },
    { q: "Licensure", a: "Licensed Clinical Psychologist, California" },
    { q: "Certifications", a: "Trained in evidence-based approaches including EMDR and trauma-informed care" }
  ]
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="">
      {/* section one */}
      <div className="flex pt-20 text-(--color-text) bg-(--color-primary) lg:h-210 justify-between px-15 max-sm:flex-col max-sm:px-4 max-sm:h-full sm:h-145 sm:px-10">
        <div className="w-150  overflow-hidden max-sm:w-full">
          <RevealObserver animation="fade-up">
            <Image src="/download (1).jpg" width={570} height={600} alt="" className="rounded-t-full delay-500 dur-1600 "></Image>
          </RevealObserver>
        </div>
        <div className="lg:w-200 h-full flex flex-col items-center gap-12 lg:pt-50 max-sm:w-full max-sm:pt-2 max-sm:pb-30 sm:pt-20 sm:w-150">
          <RevealObserver animation="fade-up">
            <div className="lg:w-140 lg:text-5xl lg:font-normal text-center max-sm:w-full max-sm:text-3xl sm:text-2xl sm:font-bold">Anxiety & Trauma Therapy in Santa Monica, California</div>
          </RevealObserver>
          <div className="lg:w-120 text-center  max-sm:w-full max-sm:text-xl max-sm:font-light">
            Find calm, clarity, and balance with compassionate therapy for adults navigating anxiety, trauma, and burnout.
          </div>
          <RevealObserver animation="fade-up">
            <button className="border-2 py-3 px-5 btn-anim ">
              CONNECT WITH ME →
            </button>
          </RevealObserver>
        </div>
      </div>
      {/* sectio two*/}
      <div className="lg:h-170 overflow-hidden max-sm:h-full bg-(--color-secondary)">
        <div className=" h-full flex justify-between max-sm:flex-col">
          <div className="flex flex-col w-200 justify-between max-sm:w-full max-sm:order-2 ">
            <div className="pl-15 flex flex-col gap-10 pt-20 max-sm:pt-4 max-sm:pl-4 max-sm:gap-5 sm:pl-10 sm:pt-10">
              <RevealObserver animation="fade-up">
                <div className="lg:w-130 lg:text-5xl lg:font-normal max-sm:text-3xl max-sm:w-full max-sm:text-center sm:text-2xl sm:font-bold">You Don't Have to Do This Alone
                </div>
              </RevealObserver >
              <div className="flex flex-col gap-5 lg:text-xl lg:w-150 max-sm:w-full max-sm:font-light max-sm:text-[15px] sm:text-lg">
                <p>Many people I work with are thoughtful, capable, and high-achieving, yet feel exhausted by constant worry, overthinking, or emotional tension beneath the surface.  </p>
                <p>You may appear “fine” on the outside while quietly struggling to keep up.</p>
                <p>Therapy can be a space to slow down, understand what's happening within, and begin feeling more grounded in everyday life.</p>
              </div>
            </div>
            <RevealObserver animation="fade-up">
              <button className="border-t p-5 w-full btn-anim">
                SCHEDULE YOUR THERAPY →
              </button>
            </RevealObserver>
          </div>
          <div className="lg:w-200 flex items-center max-sm:w-full max-sm:order-1">
            <RevealObserver animation="fade-up">
              <Image src="/Psychiatrist Near Me.jpg" width={800} height={500} alt="" className="max-sm:h-100 "></Image>
            </RevealObserver>
          </div>
        </div>
      </div>
      {/*section three */}
      <div className=" lg:h-195 flex flex-col items-center max-sm:h-full max-sm:pb-10 sm:h-140">
        <RevealObserver animation="fade">
          <div className="lg:text-5xl lg:font-normal lg:py-20 fade delay-700 max-sm:text-3xl max-sm:py-10 sm:text-3xl sm:font-bold sm:py-10">
            My Specialties
          </div>
        </RevealObserver>
        <div className="flex justify-between w-full lg:px-15 max-sm:flex-col max-sm:px-4 max-sm:gap-10 sm:px-10">
          {specialties.map((item) => (
            <div key={item.id} className="border lg:w-110 lg:h-130 p-5 flex flex-col items-center justify-between bg-(--color-primary) max-sm:w-full max-sm:h-full max-sm:gap-5 sm:h-100 sm:w-55 border-(--color-text)">
              <div className="w-full text-xl">{item.title}</div>
              <div className="font-light w-full text-[13px]">{item.description}</div>
              <RevealObserver animation="fade-up">
                <Image src={item.image} width={360} height={360} alt="" className="object-cover lg:h-80 lg:w-80 rounded-full max-sm:h-50 max-sm:w-50 sm:h-40 sm:w-40" ></Image>
              </RevealObserver>
            </div>
          ))}
        </div>
      </div>
      {/* section four */}
      <div className="lg:h-170 overflow-hidden max-sm:h-full bg-(--color-accent)">
        <div className=" h-full flex justify-between max-sm:flex-col">
          <div className="lg:w-200 flex overflow-hidden max-sm:w-full max-sm:h-100">
            <RevealObserver animation="fade-up">
              <Image src="/overh.jpg" width={500} height={900} alt="" className=" h-full lg:w-190 object-cover max-sm:h-100 sm:w-130"></Image>
            </RevealObserver>
          </div>
          <div className="flex flex-col lg:w-200 justify-between max-sm:w-full sm:w-150">
            <div className="lg:pl-15 flex flex-col lg:gap-10 pt-10 max-sm:pl-2 sm:px-5 sm:gap-5">
              <RevealObserver animation="fade-up">
                <div className="lg:w-130 lg:text-5xl lg:font-normal max-sm:text-3xl max-sm:w-full max-sm:text-center sm:text-2xl sm:font-bold">When Life Feels Overwhelming
                </div>
              </RevealObserver>
              <div className="flex flex-col gap-10 text-xl lg:w-150 max-sm:w-full max-sm:font-light">
                <p>If you've been noticing any of the following:</p>
                <ul className="list-disc list-inside text-[17px] pl-5 ">
                  <li>Constant worry or overthinking</li>
                  <li>Feeling tense or emotionally on edge</li>
                  <li>Burnout or ongoing exhaustion</li>
                  <li>Trouble sleeping or slowing your mind</li>
                  <li>Feeling “fine” on the outside, but struggling inside</li>
                </ul>
                <p>Therapy can offer a steady, supportive space to slow down and begin feeling more grounded.</p>
              </div>
            </div>
            <RevealObserver animation="fade-up">
              <button className="border-t p-5 w-full btn-anim">
                CONNECT WITH ME →
              </button>
            </RevealObserver>
          </div>
        </div>
      </div>
      {/* section five */}
      <div className="lg:h-190 overflow-hidden max-sm:h-full sm:h-130">
        <div className=" h-full flex justify-between max-sm:flex-col">
          <div className="flex flex-col lg:w-200 justify-between max-sm:w-full max-sm:order-1">
            <div className="lg:pl-15 flex flex-col gap-10 lg:pt-50 max-sm:pt-10 max-sm:pl-2 max-sm:items-center max-sm:h-full max-sm:pb-4 sm:pl-10 sm:pt-10">
              <RevealObserver animation="fade-up">
                <div className="w-full lg:text-5xl lg:font-normal max-sm:text-3xl max-sm:text-center sm:text-2xl sm:font-bold">Hi, I'm Dr. Maya Reynolds.
                </div>
              </RevealObserver >
              <div className="flex flex-col gap-5 lg:w-150 max-sm:w-full sm:w-80">
                <p>I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults experiencing anxiety, trauma, or burnout. My approach is warm, collaborative, and grounded, creating a supportive space to slow down and work toward lasting change.</p>
                <p>I integrate evidence-based approaches including cognitive-behavioral therapy &#10088;CBT&#10089;, EMDR, mindfulness-based practices, and body-oriented techniques.</p>
              </div>
              <button className="border-2 py-3 px-5 btn-anim align-middle w-50">Let's Connect →</button>
            </div>
          </div>
          <div className="lg:w-200 lg:flex lg:h-auto  lg:justify-center lg:items-center max-sm:w-full max-sm:p-4 sm:h-80 sm:w-80 lg:pt-0 sm:pt-10 lg:pr-0 sm:pr-10">
            <RevealObserver animation="fade-up">
              <Image src="/Dr. Maya Reynolds.png" width={400} height={400} alt="" className="rounded-4xl max-sm:rounded-full"></Image>
            </RevealObserver>
          </div>
        </div>
      </div>

      {/* section six office section */}
      <div className="lg:h-170 overflow-hidden max-sm:h-full sm:h-130 bg-(--color-secondary)">
        <div className=" h-full flex justify-between max-sm:flex-col">
          <div className="lg:w-200 flex overflow-hidden max-sm:w-full sm:w-150">
            <RevealObserver animation="fade-up">
              <Image src="/office2.jpeg" width={500} height={900} alt="" className=" h-full w-full object-cover"></Image>
            </RevealObserver>
          </div>
          <div className="flex flex-col lg:w-200 justify-between max-sm:w-full sm:w-170">
            <div className="lg:pl-15 flex flex-col gap-10 pt-10 pb-0 max-sm:pl-4 max-sm:pt-4 sm:pl-10 max-sm:pb-10">
              <RevealObserver animation="fade-up">
                <div className="lg:w-130 lg:text-5xl lg:font-normal max-sm:text-3xl max-sm:w-full max-sm:text-center sm:font-bold sm:text-2xl">Our Office
                </div>
              </RevealObserver>
              <div className="flex flex-col gap-10 text-xl lg:w-150 max-sm:w-full max-sm:gap-5 max-sm:pb-10">
                <p>📍Santa Monica, California,CA 90401</p>
                <p>A quiet, private space designed to feel calm and grounding—offering a sense of ease and privacy from the moment you arrive.</p>
              </div>
            </div>
            <RevealObserver animation="fade-up">
              <button className="border-t p-5 w-full btn-anim">
               SCHEDULE IN PERSON THERAPY →
              </button>
            </RevealObserver>
          </div>
        </div>
      </div>
      {/* section seven office section */}
      <div className="lg:h-170 overflow-hidden max-sm:h-full sm:h-130">
        <div className=" h-full flex justify-between max-sm:flex-col">
          <div className="flex flex-col lg:w-200 justify-between max-sm:w-full max-sm:order-1">
            <div className="lg:pl-15 lg:pt-20 max-sm:pt-4 max-sm:pl-4 sm:pl-10 am:pt-10">
              <div className="flex flex-col text-xl lg:w-150 lg:gap-10 max-sm:w-full sm:w-80 sm:gap-5">
                <p>My Santa Monica office is intentionally designed to feel simple, comfortable, and uncluttered, with natural light and a sense of privacy.</p>
                <p> Many clients share that the space itself helps them feel more at ease when they arrive. I offer in-person therapy at this location, along with secure telehealth sessions for clients across California.</p>
                <p>In-person & Telehealth sessions available</p>
              </div>
            </div>
            <RevealObserver animation="fade-up">
              <button className="border-t p-5 w-full btn-anim">
                SCHEDULE IN PERSON THERAPY →
              </button>
            </RevealObserver>
          </div>
          <div className="lg:w-200 flex overflow-hidden ">
            <RevealObserver animation="fade-up">
              <Image src="/office1.jpeg" width={500} height={900} alt="" className=" h-full w-full object-cover"></Image>
            </RevealObserver>
          </div>
        </div>
      </div>

      {/* section eight */}
      <div className="lg:h-190 overflow-hidden max-sm:h-full sm:h-130 bg-(--color-secondary)">
        <div className=" h-full flex justify-between max-sm:flex-col">
          <div className="lg:w-200 flex justify-center items-center max-sm:w-full max-sm:pt-10 sm:w-150 lg:pl-0 sm:pl-10">
            <RevealObserver animation="fade-up">
              <Image src="/Boho Home Office — A Dreamy Space to Get Inspired.jpg" width={400} height={400} alt="" className="rounded-4xl max-sm:h-70 max-sm:w-70"></Image>
            </RevealObserver>
          </div>
          <div className="flex flex-col lg:w-200 justify-between max-sm:w-full">
            <div className="pl-15 flex flex-col gap-10 lg:pt-50 max-sm:pl-4 max-sm:pt-10 max-sm:pb-10 sm:pt-10">
              <RevealObserver animation="fade-up">
                <div className="w-full lg:text-5xl lg:font-normal max-sm:text-3xl max-sm:text-center sm:text-2xl sm:font-bold">FAQ's
                </div>
              </RevealObserver >
              <div className="flex flex-col lg:gap-5 lg:w-150 max-sm:w-full max-sm:gap-2 sm:gap-2 lg:pr-0 sm:pr-10">
                {faqs.map((item, index) => (
                  <div key={index} className="border-t last:border-b py-4">
                    <button onClick={() => setOpen(open === index ? null : index)} className="flex w-full items-center">
                      <span className="relative w-4 h-4 ">
                        <span className="absolute top-1/2 left-0 w-full h-0.5 bg-black -translate-y-1/2" />
                        <span className={`absolute left-1/2 top-0 h-full w-0.5 bg-black transition-transform duration-300 origin-center ${open === index ? "rotate-90" : "rotate-0"}`} />
                      </span>
                      <RevealObserver animation="fade-up">
                        <p className="lg:text-2xl pl-5 max-sm:text-xl max-sm:text-left sm:text-xl">{item.q}</p>
                      </RevealObserver>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${open === index ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                      <p className="text-sm">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="lg:pl-15 flex flex-col gap-10 lg:pt-30 lg:h-140 items-center max-sm:pl-4 max-sm:h-full max-sm:pt-10 sm:pt-10 sm:pl-10 sm:h-100">
        <RevealObserver animation="fade-up">
          <div className="w-full lg:text-5xl lg:font-normal max-sm:text-3xl max-sm:text-center sm:font-bold sm:text-4xl">My Professional Background
          </div>
        </RevealObserver >
        <div className="lg:w-190 flex flex-col max-sm:w-full max-sm:pb-15">
          {professionalqual.map((item, index) => (
            <div key={index} className="border-t last:border-b">
              <button onClick={() => setOpen(open === index ? null : index)} className="flex w-full items-center justify-between p-5">
                <RevealObserver animation="fade-up">
                  <p className="text-2xl pl-5">{item.q}</p>
                </RevealObserver>
                <span className="relative w-4 h-4">
                  <span className="absolute top-1/2 left-0 w-full h-0.5 bg-black -translate-y-1/2" />
                  <span className={`absolute left-1/2 top-0 h-full w-0.5 bg-black transition-transform duration-300 origin-center ${open === index ? "rotate-90" : "rotate-0"}`} />
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === index ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                <p className="text-sm pb-5">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:h-140 bg-(--color-primary) flex flex-col justify-center items-center gap-10  max-sm:h-full max-sm:py-10 sm:h-100">
        <RevealObserver animation="fade-up">
        <div className="lg:text-5xl lg:font-normal max-sm:text-3xl sm:text-4xl sm:font-bold">Get started today.</div>
        </RevealObserver>
        <div className="text-xl lg:w-200 max-sm:w-full max-sm:px-4 max-sm:text-center sm:w-100 sm:text-center">Ready to take the first step toward feeling more grounded and supported?Reach out to schedule a consultation and see if working together feels like the right fit.
        </div>
        <RevealObserver animation="fade-up"><button className="border p-2 font-light btn-anim">GET IN TOUCH →</button></RevealObserver>
      </div>

      <div className="flex h-100 p-15 justify-between max-sm:flex-col max-sm:h-full max-sm:p-4 max-sm:text-center max-sm:gap-10">
        <div className="flex flex-col gap-10">
          <RevealObserver animation="fade-up">
            <div className="lg:text-4xl max-sm:text-3xl sm:text-2xl">Dr. Maya Reynolds. &#10088; Phyd &#10089;</div>
          </RevealObserver>
          <div className="text-xl">123th Street 45 W, Santa Monica, CA 90401</div>
          <div className="flex flex-col text-xl underline">
            <a href="/">email@example.com</a>
            <a href="/">(555) 555-5555</a>
          </div>
        </div>
        <div className="flex justify-between lg:gap-60 max-sm:flex-col max-sm:gap-10 sm:gap-10">
          <div className="flex flex-col gap-10">
            <RevealObserver animation="fade-up"><div className="lg:text-4xl sm:text-2xl">Hours </div></RevealObserver>
            <div className="text-xl">
              <div>Monday - Friday</div>
              <div>10am - 6pm</div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <RevealObserver animation="fade-up"><div className="lg:text-4xl sm:text-2xl">Find</div></RevealObserver>
            <div className="flex flex-col text-xl underline">
              <a href="/">Home</a>
              <a href="/">Contact</a>
              <a href="/">Blog</a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center h-60 gap-5 justify-around pt-5 max-sm:text-center bg-gray-200">
        <div className="max-sm:flex max-sm:flex-col">
          <a href="/" className="underline">Privacy & Cookies Policy</a>
          <a href="/" className="underline"> Good Faith Estimate</a>
          <a href="/" className="underline">Website Terms & Conditions</a>
          <a href="/" className="underline">Disclaimer</a>
        </div>
        <div>Website Template Credits: <a href="/" className="underline">Go Bloom Creative</a></div>
        <div>All Rights Reserved © 2024 Your Business Name Here, LLC.</div>
      </div>
    </div>
  );
}