
// import PaymentSuccessContent from "@/components/modules/Payment/PaymentSuccessContent";
// import { handlePaymentSuccess } from "@/services/patient/appointment.service";

// interface PageProps {
//   searchParams: {
//     appointmentId?: string;
//   };
// }

// export default async function PaymentSuccessPage({ searchParams }: PageProps) {
//   const { appointmentId } = searchParams;

//   // Revalidate cache on the server side
//   if (appointmentId) {
//     await handlePaymentSuccess(appointmentId);
//   }

//   return <PaymentSuccessContent />;
// }






import PaymentSuccessContent from "@/components/modules/Payment/PaymentSuccessContent";
import { handlePaymentSuccess } from "@/services/patient/appointment.service";

interface PageProps {
  searchParams: Promise<{           // ✅ Next.js 16: Promise
    appointmentId?: string;
  }>;
}

export default async function PaymentSuccessPage({ searchParams }: PageProps) {
  const { appointmentId } = await searchParams;  // ✅ await

  if (appointmentId) {
    await handlePaymentSuccess(appointmentId);   // ✅ cache clear
  }

  return <PaymentSuccessContent />;
}