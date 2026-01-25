import Link from 'next/link';

function PublicFooter() {

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#001133] text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xl font-bold mb-4 text-white">Doctorate</h4>
          <p className="text-gray-400 text-sm">Providing compassionate and state-of-the-art healthcare since 1998.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 border-b border-green-500 pb-1">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-green-400 transition">Home</Link></li>
            <li><Link href="/consultation" className="hover:text-green-400 transition"> Consultation</Link></li>
            <li><Link href="/health-plans" className="hover:text-green-400 transition">Health Plans</Link></li>
            <li><Link href="/doctors" className="hover:text-green-400 transition">Doctors</Link></li>
            <li><Link href="/aboutUs" className="hover:text-green-400 transition">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-green-400 transition">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-green-400 transition">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 border-b border-green-500 pb-1">Contact</h4>
          <p className="text-sm text-gray-400">Proshikha mor, Mawna chowrasta, Sreepur, Gazipur</p>
          <p className="text-sm text-gray-400 mt-2">Phone: 01711-677300</p>
          <p className="text-sm text-gray-400">Email: doctorateHealtCare@gmail.com</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 border-b border-green-500 pb-1">Opening Hours</h4>
          <p className="text-sm text-gray-400">Saturday - Friday: 24 hours</p>

        </div>
      </div>
      <div className="text-center text-gray-500 mt-12 pt-4 border-t border-gray-700 text-sm">
        &copy; {currentYear} Doctorate. All rights reserved.
      </div>
    </footer>
  );
}
export default PublicFooter;