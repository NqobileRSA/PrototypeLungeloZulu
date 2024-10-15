'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from '@/components/ui/SectionTitle';

type Props = {};

const About = (props: Props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div id="about" className="bg-[#0a0000]">
      <SectionTitle title="About Me" />
      <section className="container flex items-center justify-center mx-auto">
        <div className="text-center lg:w-[70vw]">
          <p data-aos="fade-up" data-aos-delay="100">
            I am Lungelo Zulu (known to many as Smile/Smiles)
          </p>
          <br />
          <p data-aos="fade-up" data-aos-delay="200">
            A tall Zulu boy who was born in August of &apos;96 in Dundee,
            Kwa-Zulu Natal, but raised by the grimy streets of Katlehong –
            &quot;the far East&quot; they say.
          </p>
          <br />
          <p data-aos="fade-up" data-aos-delay="300">
            His writing experience stems from 2015 with the establishment of his
            Tumblr blog www.smileythevisionaire.tumblr.com where he wrote music
            reviews, event reviews, as well as artist & brand profiles. Prior to
            that, Lungelo was a Rapper and Songwriter since his early teens, so
            make no mistake; that boy can write. Soon after dropping out of
            College, Lungelo Zulu started his own content production agency
            called HIP Daily Media Works. The agency&apos;s first target was
            Sunday Kos & Chill, a gala dinner with friends &apos;cause, of
            course, Lu is friends with many, many artists, across various
            mediums, so best believe, this bloke knows every-one. This gala
            dinner was the official launch of the company HIP Daily Media Works,
            a company that would soon launch Sithi No More Femicide: A War
            Against A War, a short socio-commentary piece written and produced
            by Lungelo Zulu himself. This project, as Lungelo&apos;s first
            attempt at a documentary probed the intricate effects of patriarchy
            in modern society through the understanding of five young women
            majoring in Rugby, Beauty, Art and Student Relations.
          </p>
          <br />
          <p data-aos="fade-up" data-aos-delay="400">
            Word on the street has it that Lungelo is returning fully to his
            initial duties at HIP Daily Media Works as Creative Director & Head
            of Content and has a possible docuseries in the pipelines. The first
            installation is set to premiere on the 5th of August via HIP Daily
            TV on YouTube.
          </p>
          <br />
          <p data-aos="fade-up" data-aos-delay="500">
            A tall Zulu boy who was born in August of &apos;96 in Dundee,
            Kwa-Zulu Natal, but raised by the grimy streets of Katlehong &quot;
            &quot;the far East&quot; they say.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
