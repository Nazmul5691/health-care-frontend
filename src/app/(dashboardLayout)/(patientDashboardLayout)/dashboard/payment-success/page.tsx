
import PaymentSuccessContent from "@/components/modules/Payment/PaymentSuccessContent";
import { handlePaymentSuccess } from "@/services/patient/appointment.service";

interface PageProps {
  searchParams: {
    appointmentId?: string;
  };
}

export default async function PaymentSuccessPage({ searchParams }: PageProps) {
  const { appointmentId } = searchParams;

  // Revalidate cache on the server side
  if (appointmentId) {
    await handlePaymentSuccess(appointmentId);
  }

  return <PaymentSuccessContent />;
}