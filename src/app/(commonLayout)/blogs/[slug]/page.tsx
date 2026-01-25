import Image from "next/image";
import Link from "next/link";
import { FaUser, FaArrowLeft, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

// Your data source translated to English
const articles = [
    {
        id: 1,
        slug: 'al-hera-medical-center-history',
        image: 'https://i.ibb.co.com/LXdCCvQ4/al-Hera-Medical-History.png',
        title: 'History and Journey of Al-Hera Medical Center',
        category: 'History & Heritage',
        description: 'The story of the visionary dream and 28 years of relentless hard work by the pioneer who started the journey of modern healthcare in Maona Chowrasta.',
        full_content: 'Al-Hera Medical Center is a unique name in modern healthcare in the heart of Maona. This institution is not just a hospital, but the result of the sacrifice and dedication of a promising visionary, Dr. Md. Humayun Kabir Khan. Twenty-eight years ago, when modern medical facilities were extremely limited in this region, he started his journey with a firm determination to bring modern services to people\'s doorsteps. Since then, today\'s Al-Hera Medical Center has been built bit by bit through relentless hard work, professional commitment, and immense love for people. In this long journey, Al-Hera has become a name of trust by being a companion to thousands of people\'s joys and sorrows. The indomitable willpower of Dr. Md. Humayun Kabir Khan still inspires us in every service we provide.',
        author: 'Admin',
        date: '20 October 2024',
    },
    {
        id: 2,
        slug: 'free-medical-camp-for-helpless-people',
        image: 'https://i.ibb.co.com/gFRx7QRX/free-medical-camp.png',
        title: 'Al-Hera Free Medical Camp in Service of Helpless People',
        category: 'Social Initiative',
        description: 'Out of social responsibility, Al-Hera Medical Center regularly conducts free medical camps. Our goal is to deliver expert services to the doorsteps of marginalized people.',
        full_content: 'Al-Hera Medical Center is not just a business institution, but dedicated to the welfare of humanity. In continuation of this, we regularly organize free medical camps for the underprivileged and helpless people of the area. In these camps, experienced doctors diagnose various complex diseases and provide necessary health advice and free medicines to patients. We give special importance to the check-up of pregnant mothers and child health in particular. Our goal is to ensure that no one is deprived of primary healthcare due to lack of money and that good health is ensured at every level of society.',
        author: 'Admin',
        date: '12 November 2024',
    },
    {
        id: 3,
        slug: 'emergency-ambulance-service-maona',
        image: 'https://i.ibb.co.com/7hn8nxN/ambulane.png',
        title: 'Al-Hera Ambulance Service: Your Trusted Companion in Emergencies',
        category: 'Emergency Service',
        description: 'Al-Hera ensures 24-hour uninterrupted ambulance service. Reaching the hospital quickly in emergencies is now easier and safer through high-tech ambulances and skilled drivers.',
        full_content: 'Time is extremely valuable in emergency medical care. Reaching the hospital on time is essential to save a patient\'s life. Al-Hera Medical Center has been providing 24-hour ambulance service in Maona and its surrounding areas. Our ambulances are well-equipped with modern oxygen support, pulse oximeters, and life-saving first aid equipment. Through experienced and trained drivers, we ensure the transfer of patients with great speed to any major hospital in Sreepur, Gazipur, or Dhaka. Just call our helpline number, and an ambulance will reach your door within a few minutes.',
        author: 'Admin',
        date: '05 December 2024',
    },
    {
        id: 4,
        slug: 'al-hera-modern-pharmacy-service',
        image: 'https://i.ibb.co.com/TDqbfbrm/pharmecy.png',
        title: 'Al-Hera Pharmacy: Guarantee of Quality Medicine and Correct Advice',
        category: 'Pharmacy & Medicine',
        description: 'There is no substitute for the right medicine to cure diseases. Get 100% authentic medicine and advice from experienced pharmacists at Al-Hera Medical Center\'s own pharmacy.',
        full_content: 'Taking quality medicine at the right time is extremely important for health. To meet this need of patients, we have our well-equipped modern pharmacy within the Al-Hera Medical Center premises. From life-saving insulin to all kinds of authentic local and foreign medicines are always in stock here. Advanced refrigeration systems are used in our pharmacy to maintain the quality of medicines. In addition, experienced pharmacists explain the correct rules and regulations for taking medicine so that patients do not get confused. This 24-hour pharmacy service has become a place of trust for the people of the Maona area.',
        author: 'Pharmacy In-charge',
        date: '10 December 2024',
    },
    {
        id: 5,
        slug: 'maternal-and-child-healthcare-tips',
        image: 'https://i.ibb.co.com/RG7Sr1kz/gynee-seba.png',
        title: 'Specialized Services of Al-Hera Medical Center in Maternal and Child Care',
        category: 'Gynae & Child',
        description: 'Healthy mothers and children are essential for a healthy nation. Our expert team works 24 hours to ensure special prenatal care and proper growth of children.',
        full_content: 'Proper prenatal nutrition and regular check-ups of the mother are very necessary for the birth of a healthy child. Al-Hera Medical Center has experienced gynecology specialists and advanced facilities for safe normal delivery and cesarean sections. We have a special care unit to deal with any complications of the mother and newborn in the postnatal period. Also, our pediatrics department is always active in providing regular vaccination programs and nutritional advice for children. Ensuring the smiling faces of mothers and children is the main goal of our Gynae and Child department.',
        author: 'Dr. Mahmuda Yasmin',
        date: '15 December 2024',
    },
    {
        id: 6,
        slug: 'modern-diagnostic-lab-facilities',
        image: 'https://i.ibb.co.com/3mV9PTDH/lab.png',
        title: 'The Role of Modern Diagnostic Laboratory in Ensuring Accurate Reports',
        category: 'Diagnostic Lab',
        description: 'Accurate diagnostic reports are the foundation of correct treatment. Our state-of-the-art lab equipment and skilled technicians are committed to providing 100% accurate results.',
        full_content: 'The diagnostic department of Al-Hera Medical Center is equipped with all the world\'s modern auto-analyzer machines. We perform all types of tests including Biochemistry, Hematology, Hormone Profile, and Serology with extreme accuracy. Through digital X-ray and high-resolution ultrasonography machines, we can perfectly identify complex internal problems of the body. Every report is verified in several steps under the supervision of our skilled pathologists, which plays a unique role in the selection of correct treatment and medicine by doctors.',
        author: 'Lab In-charge',
        date: '18 December 2024',
    },
    {
        id: 7,
        slug: 'diabetes-awareness-and-control',
        image: 'https://i.ibb.co.com/jvwZsf2m/diabetis.png',
        title: 'Diabetes Control and Awareness: Easy Guidelines for a Healthy Life',
        category: 'Health Awareness',
        description: 'Diabetes is not a deadly disease but a manageable lifestyle. It is possible to lead a long and healthy life even with diabetes if you have proper eating habits and awareness.',
        full_content: 'Due to uncontrolled lifestyle, diabetes is spreading like an epidemic in current times. Diabetes specialist doctors of Al-Hera Medical Center provide regular guidelines to patients. You can keep diabetes under control by avoiding sugary foods, walking at least 30 minutes regularly, and checking blood sugar levels regularly. Our center has special discount cards and counseling facilities for diabetes patients so that patients can deal with the disease without mental worry.',
        author: 'Dr. Abdullah Al Juma',
        date: '20 December 2024',
    },
    {
        id: 8,
        slug: 'modern-and-safe-circumcision-service',
        image: 'https://i.ibb.co.com/WNPq9Ksy/circumcision.png',
        title: 'Safe Circumcision in Modern and Scientific Methods',
        category: 'Surgery & Circumcision',
        description: 'Al-Hera Medical Center is ensuring safe circumcision in modern and scientific methods for newborns, children, and adolescents.',
        full_content: 'Circumcision is an important matter in the lives of children. Al-Hera Medical Center has excellent facilities for completely safe and painless circumcision in a very modern and scientific way. This service is being provided by Dr. Md. Humayun Kabir Khan, a specialist surgeon in newborn, child, and adolescent diseases. Through his long 28 years of experience and modern surgical methods (FMAS, India), circumcision is performed without any risk to children. Guardians are trusting us especially because of the bloodless and fast-healing method. For serials and detailed information about your child\'s circumcision, you can contact our hotline number.',
        author: 'Dr. Md. Humayun Kabir Khan',
        date: '22 December 2024',
    },
    {
        id: 9,
        slug: 'emergency-medical-service-24-hours',
        image: 'https://i.ibb.co.com/hxj2t0jd/emergency.png',
        title: '24-Hour Emergency Medical Service: We Are Always Ready to Save Lives',
        category: 'Emergency Service',
        description: 'The emergency department of Al-Hera Medical Center is open 24 hours a day to ensure rapid medical service in any accident or sudden illness.',
        full_content: 'The importance of time at the junction of life and death is immense. To provide immediate service to patients in any emergency situation such as—heart disease, severe respiratory distress, road accidents, or any sudden illness, Al-Hera Medical Center has a well-equipped Emergency Department. Life-saving treatment is provided here 24 hours a day under the supervision of experienced doctors and skilled nursing teams. Our emergency department has all facilities for oxygen support, nebulization, and primary surgical treatment. Al-Hera Medical Center is always by your side for advanced treatment at any time in Maona Chowrasta.',
        author: 'Admin',
        date: '25 December 2024',
    }
];

export default async function BlogsDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    // Finding the article by slug
    const article = articles.find((a) => a.slug === slug) || articles[0];

    return (
        <main className="bg-gray-50 min-h-screen pb-10 md:pb-20">
            {/* Header / Navigation */}
            <div className="bg-white border-b sticky top-0 z-50 py-3 md:py-4">
                <div className="max-w-5xl mx-auto px-4 md:px-5 flex justify-between items-center">
                    <Link href="/blogs" className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-all text-sm md:text-base">
                        <FaArrowLeft /> All Blogs
                    </Link>
                    <div className="flex gap-3 md:gap-4 text-gray-500">
                        <Link href="https://www.facebook.com/AHMC97" target="_blank">
                            <FaFacebook className="cursor-pointer h-6 w-6 md:h-8 md:w-8 text-blue-600 hover:text-blue-900 transition-colors" />
                        </Link>
                        <Link href="https://wa.me/01711677309" target="_blank">
                            <FaWhatsapp className="cursor-pointer h-6 w-6 md:h-8 md:w-8 text-emerald-600 hover:text-emerald-800 transition-colors" />
                        </Link>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 md:px-5 pt-6 md:pt-12">
                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-5 md:mb-6 text-[12px] md:text-sm text-gray-500 font-medium">
                    <span className="bg-blue-600 text-white px-3 md:px-4 py-1 rounded-full text-[10px] md:text-xs uppercase tracking-wider shadow-sm">
                        {article.category || "Medical"}
                    </span>
                    <div className="flex items-center gap-1.5 border-l pl-3 md:pl-4 border-gray-300">
                        <FaCalendarDays className="text-blue-500" />
                        <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 border-l pl-3 md:pl-4 border-gray-300">
                        <FaUser className="text-blue-500" />
                        <span>{article.author}</span>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight md:leading-[1.15] mb-6 md:mb-8">
                    {article.title}
                </h1>

                {/* Feature Image */}
                <div className="relative h-[220px] sm:h-[350px] md:h-[500px] w-full mb-8 md:mb-12 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                    <Image
                        fill
                        src={article.image}
                        alt={article.title}
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Content Section */}
                <div className="max-w-3xl mx-auto">
                    {/* 1. Highlighted Description */}
                    <div className="relative mb-8 md:mb-12 p-5 md:p-8 bg-white border-l-4 border-blue-600 rounded-r-xl md:rounded-r-2xl shadow-sm italic">
                        <p className="text-lg md:text-2xl text-gray-700 leading-relaxed font-medium">
                            {article.description}
                        </p>
                        <div className="absolute -top-3 -left-1 text-4xl md:text-6xl text-blue-100 -z-10 font-serif">“</div>
                    </div>

                    {/* Divider */}
                    <div className="flex justify-center mb-8 md:mb-12">
                        <span className="inline-block w-20 md:w-24 h-1 bg-linear-to-r from-transparent via-blue-200 to-transparent rounded-full"></span>
                    </div>

                    {/* 2. Main Content (Enhanced Typography) */}
                    <div className="prose prose-blue prose-base md:prose-xl max-w-none text-gray-800">
                        {article.full_content.split('\n').map((paragraph, index) => (
                            <p
                                key={index}
                                className={`mb-5 md:mb-6 leading-relaxed text-justify md:text-left text-sm md:text-lg ${index === 0
                                    ? "first-letter:text-4xl md:first-letter:text-5xl first-letter:font-bold first-letter:text-blue-700 first-letter:mr-2 md:first-letter:mr-3 first-letter:float-left"
                                    : ""
                                    }`}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Support Card */}
                    <div className="mt-12 md:mt-20 bg-linear-to-br from-blue-600 to-blue-800 p-6 md:p-12 rounded-3xl md:rounded-4xl text-white shadow-xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 leading-tight">Do you need any emergency consultation?</h3>
                            <p className="text-blue-100 mb-6 md:mb-8 text-sm md:text-lg">Our expert doctors are always ready to provide you with the right guidelines.</p>
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                                <Link href="tel:01711677309" className="bg-white text-blue-700 px-6 md:px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg flex items-center justify-center gap-2 text-sm md:text-base">
                                    Call Directly
                                </Link>
                                <Link href="/doctors" className="bg-blue-500/30 backdrop-blur-md border border-blue-400 text-white px-6 md:px-8 py-3 rounded-xl font-bold hover:bg-blue-500/50 transition-all text-center text-sm md:text-base">
                                    See Doctors
                                </Link>
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 md:w-64 md:h-64 bg-blue-500 rounded-full opacity-20"></div>
                    </div>
                </div>
            </article>

            {/* Recommended Posts */}
            <section className="max-w-5xl mx-auto px-4 md:px-5 mt-16 md:mt-24">
                <div className="flex items-center justify-between mb-8 md:mb-10">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900">Read More</h2>
                    <div className="h-0.5 md:h-1 grow ml-4 md:ml-6 bg-gray-200 rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {articles.slice(0, 2).map((item) => (
                        <Link href={`/blogs/${item.slug}`} key={item.id} className="group flex gap-3 md:gap-5 bg-white p-3 md:p-5 rounded-xl md:rounded-2xl shadow-sm border border-transparent hover:border-blue-200 hover:shadow-xl transition-all">
                            <div className="relative w-20 h-20 md:w-28 md:h-28 shrink-0 overflow-hidden rounded-lg md:rounded-xl">
                                <Image fill src={item.image} alt={item.title} className="object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-[9px] md:text-[10px] font-bold text-blue-600 uppercase mb-1 tracking-widest">{item.category}</span>
                                <h4 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2 text-sm md:text-lg leading-snug">
                                    {item.title}
                                </h4>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}