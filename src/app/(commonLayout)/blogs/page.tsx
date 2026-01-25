import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

const articles = [
  {
    id: 1,
    slug: "al-hera-medical-center-history",
    image: "https://i.ibb.co.com/LXdCCvQ4/al-Hera-Medical-History.png",
    title: "The History and Journey of Al Hera Medical Center",
    description:
      "The inspiring story of a vision that began with a dream to deliver modern healthcare services and has grown through 28 years of dedication and commitment.",
    full_content:
      "Al Hera Medical Center is a trusted name in modern healthcare. More than just a hospital, it represents the vision, dedication, and lifelong commitment of its founder, Dr. Md. Humayun Kabir Khan...",
    author: "Admin",
    date: "20 October 2024",
  },
  {
    id: 2,
    slug: "free-medical-camp-for-helpless-people",
    image: "https://i.ibb.co.com/gFRx7QRX/free-medical-camp.png",
    title: "Al Hera Free Medical Camp for Underprivileged Communities",
    description:
      "As part of our social responsibility, Al Hera Medical Center regularly organizes free medical camps to deliver essential healthcare services to underserved people.",
    full_content:
      "Al Hera Medical Center is not just a business organization; it is deeply committed to humanitarian service. With this mission, we regularly arrange free medical camps for disadvantaged communities...",
    author: "Admin",
    date: "12 November 2024",
  },
  {
    id: 3,
    slug: "emergency-ambulance-service-maona",
    image: "https://i.ibb.co.com/7hn8nxN/ambulane.png",
    title: "24/7 Emergency Ambulance Service: Your Trusted Lifeline",
    description:
      "Al Hera Medical Center ensures round-the-clock ambulance services equipped with modern facilities and trained drivers for rapid and safe emergency response.",
    full_content:
      "In emergency medical situations, every minute counts. Al Hera Medical Center provides 24-hour ambulance services across Maona and nearby areas to ensure timely hospital access...",
    author: "Admin",
    date: "05 December 2024",
  },
  {
    id: 4,
    slug: "al-hera-modern-pharmacy-service",
    image: "https://i.ibb.co.com/TDqbfbrm/pharmecy.png",
    title: "Al Hera Pharmacy: Quality Medicines with Professional Guidance",
    description:
      "Authentic medicines and expert guidance are essential for effective treatment. Our in-house pharmacy ensures quality, safety, and proper counseling.",
    full_content:
      "Timely access to genuine medicines plays a vital role in recovery. Al Hera Medical Center operates a modern, well-equipped pharmacy managed by experienced pharmacists...",
    author: "Pharmacy In-Charge",
    date: "10 December 2024",
  },
  {
    id: 5,
    slug: "maternal-and-child-healthcare-tips",
    image: "https://i.ibb.co.com/RG7Sr1kz/gynee-seba.png",
    title: "Specialized Maternal and Child Healthcare Services",
    description:
      "Healthy mothers and children are the foundation of a healthy nation. Our specialized team provides comprehensive care for mothers and children around the clock.",
    full_content:
      "Proper prenatal care and regular checkups are essential for safe childbirth. Al Hera Medical Center offers expert gynecological services and safe delivery facilities...",
    author: "Dr. Mahmuda Yasmin",
    date: "15 December 2024",
  },
  {
    id: 6,
    slug: "modern-diagnostic-lab-facilities",
    image: "https://i.ibb.co.com/3mV9PTDH/lab.png",
    title: "The Importance of Modern Diagnostic Laboratory Services",
    description:
      "Accurate diagnosis is the foundation of effective treatment. Our advanced diagnostic lab ensures reliable and precise test results.",
    full_content:
      "Al Hera Medical Center’s diagnostic department is equipped with modern auto-analyzer machines supporting biochemistry, hematology, hormone profiling, and serology tests...",
    author: "Lab In-Charge",
    date: "18 December 2024",
  },
  {
    id: 7,
    slug: "diabetes-awareness-and-control",
    image: "https://i.ibb.co.com/jvwZsf2m/diabetis.png",
    title: "Diabetes Awareness and Control: A Simple Guide to Healthy Living",
    description:
      "Diabetes is a manageable lifestyle condition. With proper awareness, diet control, and medical guidance, a healthy life is achievable.",
    full_content:
      "Due to modern lifestyle habits, diabetes is becoming increasingly common. Our specialist doctors provide regular guidance and personalized treatment plans...",
    author: "Dr. Abdullah Al Juma",
    date: "20 December 2024",
  },
  {
    id: 8,
    slug: "modern-and-safe-circumcision-service",
    image: "https://i.ibb.co.com/WNPq9Ksy/circumcision.png",
    title: "Safe and Modern Circumcision Using Scientific Methods",
    description:
      "Al Hera Medical Center offers safe, hygienic, and painless circumcision services for newborns, children, and adolescents using modern techniques.",
    full_content:
      "Circumcision is an important procedure in a child’s early life. Our medical center provides modern, safe, and pain-free circumcision services under expert supervision...",
    author: "Dr. Md. Humayun Kabir Khan",
    date: "22 December 2024",
  },
  {
    id: 9,
    slug: "emergency-medical-service-24-hours",
    image: "https://i.ibb.co.com/hxj2t0jd/emergency.png",
    title: "24-Hour Emergency Medical Services: Always Ready to Save Lives",
    description:
      "Our emergency department remains open 24/7 to provide immediate medical care during accidents or sudden health complications.",
    full_content:
      "In critical moments, time is life. Our emergency team is fully prepared to handle heart attacks, breathing difficulties, road accidents, and other urgent conditions...",
    author: "Admin",
    date: "25 December 2024",
  },
];

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[#F2F2F8]">
      {/* Page Title / Hero Section */}
      <div className="bg-[#001133] py-16 px-5 text-center text-white">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Our Blogs & Health Insights
        </h1>
        <p className="max-w-2xl mx-auto text-blue-100 text-sm md:text-base">
          Stay updated with reliable health information, expert medical advice,
          and the latest news and activities from our online doctor consultation
          platform.
        </p>
      </div>

      {/* All Blogs Content */}
      <div className="max-w-7xl mx-auto py-12 px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  fill
                  src={article.image}
                  alt={article.title}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full shadow-lg">
                    Medical
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col grow">
                {/* Meta Info */}
                <div className="flex gap-4 items-center text-gray-500 text-xs mb-4">
                  <div className="flex items-center gap-1.5">
                    <FaUser className="text-blue-600" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaCalendarDays className="text-blue-600" />
                    <span>{article.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold mb-3 text-gray-800 leading-snug group-hover:text-blue-700 transition-colors">
                  {article.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {article.description}
                </p>

                {/* Action Button */}
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <Link
                    href={`/blogs/${article.slug}`}
                    className="inline-flex items-center gap-2 text-blue-700 font-bold text-sm hover:gap-3 transition-all"
                  >
                    Read More
                    <span>➔</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Call to Action */}
      <div className="pb-20 pt-10 text-center">
        <p className="text-gray-500 italic">
          New blogs and health articles are published regularly.
        </p>
      </div>
    </main>
  );
}
