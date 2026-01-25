import AboutBanner from "@/components/modules/AboutUs/AboutBanner";
import ConsultationBanner from "@/components/modules/AboutUs/ConsultationBanner";
import OurProcess from "@/components/modules/AboutUs/OurProcess";
import WhyChooseUsModern from "@/components/modules/AboutUs/WhyChooseUsModern";
import AboutUs from "@/components/modules/Home/AboutUs";
import MeetDoctors from "@/components/modules/Home/MeetDoctors";

export default function AboutUsPage() {
    return (
        <div>
            <AboutBanner />
            <AboutUs />
            <WhyChooseUsModern />
            <MeetDoctors />
            <ConsultationBanner />
            <OurProcess />
        </div>
    );
}