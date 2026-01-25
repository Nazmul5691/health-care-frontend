
import AboutUs from "@/components/modules/Home/AboutUs";
import AISuggestionSection from "@/components/modules/Home/AISuggestionSection";
import BlogPost from "@/components/modules/Home/BlogPost";
import HealthcareServices from "@/components/modules/Home/HealthcareServices";
import Hero from "@/components/modules/Home/Hero";
import MeetDoctors from "@/components/modules/Home/MeetDoctors";
import ReasonChoosingUs from "@/components/modules/Home/ReasonChoosingUs";
import Specialization from "@/components/modules/Home/Specialization";
import Testimonials from "@/components/modules/Home/Testimonials";
import WorkingProcess from "@/components/modules/Home/WorkingProcess";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>AI-Powered Healthcare - Find Your Perfect Doctor</title>
        <meta
          name="description"
          content="Discover top-rated doctors tailored to your needs with our AI-powered healthcare platform. Get personalized recommendations and book appointments effortlessly."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo.png"
        />
      </Head>


      <main>
        <Hero />
        <AISuggestionSection />
        <AboutUs />
        <Specialization />
        <MeetDoctors />
        <HealthcareServices />
        <WorkingProcess />
        <ReasonChoosingUs />
        <BlogPost />
        <Testimonials />
      </main>
    </>
  );
}
