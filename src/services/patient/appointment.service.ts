// "use server"
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { serverFetch } from "@/lib/server-fetch";
// import { IAppointmentFormData } from "@/types/appointments.interface";
// import { revalidateTag } from "next/cache";

// export async function createAppointment(data: IAppointmentFormData) {
//     try {
//         const response = await serverFetch.post("/appointment", {
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });

//         const result = await response.json();
//         if (result.success) {
//             revalidateTag('my-appointments', { expire: 0 });
//             revalidateTag('appointments-list', { expire: 0 });
//             revalidateTag('patient-dashboard-meta', { expire: 0 });
//             revalidateTag('admin-dashboard-meta', { expire: 0 });
//             revalidateTag('doctor-dashboard-meta', { expire: 0 });
//         }

//         return result;
//     } catch (error: any) {
//         console.error("Error creating appointment:", error);
//         return {
//             success: false,
//             message:
//                 process.env.NODE_ENV === "development"
//                     ? error.message
//                     : "Failed to book appointment",
//         };
//     }
// }

// export async function createAppointmentWithPayLater(data: IAppointmentFormData) {
//     try {
//         const response = await serverFetch.post("/appointment/pay-later", {
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });

//         const result = await response.json();
//         if (result.success) {
//             revalidateTag('my-appointments', { expire: 0 });
//             revalidateTag('appointments-list', { expire: 0 });
//             revalidateTag('patient-dashboard-meta', { expire: 0 });
//             revalidateTag('admin-dashboard-meta', { expire: 0 });
//             revalidateTag('doctor-dashboard-meta', { expire: 0 });
//         }
//         return result;
//     } catch (error: any) {
//         console.error("Error creating appointment with pay later:", error);
//         return {
//             success: false,
//             message:
//                 process.env.NODE_ENV === "development"
//                     ? error.message
//                     : "Failed to book appointment",
//         };
//     }
// }

// export async function getMyAppointments(queryString?: string) {
//     try {
//         const response = await serverFetch.get(
//             `/appointment/my-appointment${queryString ? `?${queryString}` : "?sortBy=createdAt&sortOrder=desc"}`, {
//             next: {
//                 tags: ["my-appointments"],
//                 revalidate: 120,
//             },
//         }
//         );
//         const result = await response.json();
//         return result;
//     } catch (error: any) {
//         console.error("Error fetching appointments:", error);
//         return {
//             success: false,
//             data: [],
//             message:
//                 process.env.NODE_ENV === "development"
//                     ? error.message
//                     : "Failed to fetch appointments",
//         };
//     }
// }

// export async function getAppointmentById(appointmentId: string) {
//     try {
//         const response = await serverFetch.get('/appointment/my-appointment', {
//             next: {
//                 tags: ["my-appointments", `appointment-${appointmentId}`],
//                 revalidate: 180,
//             },
//         });
//         const result = await response.json();

//         if (result.success && result.data) {
//             // Find the appointment by ID from the list
//             const appointment = result.data.find((apt: any) => apt.id === appointmentId);

//             if (appointment) {
//                 return {
//                     success: true,
//                     data: appointment,
//                 };
//             } else {
//                 return {
//                     success: false,
//                     data: null,
//                     message: "Appointment not found",
//                 };
//             }
//         }

//         return {
//             success: false,
//             data: null,
//             message: result.message || "Failed to fetch appointment",
//         };
//     } catch (error: any) {
//         console.error("Error fetching appointment:", error);
//         return {
//             success: false,
//             data: null,
//             message:
//                 process.env.NODE_ENV === "development"
//                     ? error.message
//                     : "Failed to fetch appointment",
//         };
//     }
// }

// export async function changeAppointmentStatus(
//     appointmentId: string,
//     status: string
// ) {
//     try {
//         const response = await serverFetch.patch(
//             `/appointment/status/${appointmentId}`,
//             {
//                 body: JSON.stringify({ status }),
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             }
//         );

//         const result = await response.json();

//         if (result.success) {
//             // Invalidate appointment caches
//             revalidateTag('my-appointments', { expire: 0 });
//             revalidateTag('appointments-list', { expire: 0 });
//             revalidateTag(`appointment-${appointmentId}`, { expire: 0 });
//             // Update dashboard for immediate status reflection
//             revalidateTag('patient-dashboard-meta', { expire: 0 });
//             revalidateTag('dashboard-meta', { expire: 0 });
//         }
//         return result;
//     } catch (error: any) {
//         console.error("Error changing appointment status:", error);
//         return {
//             success: false,
//             message:
//                 process.env.NODE_ENV === "development"
//                     ? error.message
//                     : "Failed to change appointment status",
//         };
//     }
// }



"use server"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { serverFetch } from "@/lib/server-fetch";
import { IAppointmentFormData } from "@/types/appointments.interface";
import { revalidateTag, revalidatePath } from "next/cache";

export async function createAppointment(data: IAppointmentFormData) {
    try {
        const response = await serverFetch.post("/appointment", {
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();
        if (result.success) {
            revalidateTag('my-appointments', 'default');
            revalidateTag('appointments-list', 'default');
            revalidateTag('patient-dashboard-meta', 'default');
            revalidateTag('admin-dashboard-meta', 'default');
            revalidateTag('doctor-dashboard-meta', 'default');
            // revalidatePath('/patient/appointments');
            revalidatePath('/dashboard/my-appointments');
        }

        return result;
    } catch (error: any) {
        console.error("Error creating appointment:", error);
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Failed to book appointment",
        };
    }
}

export async function createAppointmentWithPayLater(data: IAppointmentFormData) {
    try {
        const response = await serverFetch.post("/appointment/pay-later", {
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();
        if (result.success) {
            revalidateTag('my-appointments', 'default');
            revalidateTag('appointments-list', 'default');
            revalidateTag('patient-dashboard-meta', 'default');
            revalidateTag('admin-dashboard-meta', 'default');
            revalidateTag('doctor-dashboard-meta', 'default');
            // revalidatePath('/patient/appointments');
            revalidatePath('/dashboard/my-appointments');
        }
        return result;
    } catch (error: any) {
        console.error("Error creating appointment with pay later:", error);
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Failed to book appointment",
        };
    }
}

export async function getMyAppointments(queryString?: string) {
    try {
        const response = await serverFetch.get(
            `/appointment/my-appointment${queryString ? `?${queryString}` : "?sortBy=createdAt&sortOrder=desc"}`, {
            next: {
                tags: ["my-appointments"],
                // revalidate: 120,
                revalidate: 0,
            },
        }
        );
        const result = await response.json();
        return result;
    } catch (error: any) {
        console.error("Error fetching appointments:", error);
        return {
            success: false,
            data: [],
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Failed to fetch appointments",
        };
    }
}

export async function getAppointmentById(appointmentId: string) {
    try {
        const response = await serverFetch.get('/appointment/my-appointment', {
            next: {
                tags: ["my-appointments", `appointment-${appointmentId}`],
                revalidate: 180,
            },
        });
        const result = await response.json();

        if (result.success && result.data) {
            // Find the appointment by ID from the list
            const appointment = result.data.find((apt: any) => apt.id === appointmentId);

            if (appointment) {
                return {
                    success: true,
                    data: appointment,
                };
            } else {
                return {
                    success: false,
                    data: null,
                    message: "Appointment not found",
                };
            }
        }

        return {
            success: false,
            data: null,
            message: result.message || "Failed to fetch appointment",
        };
    } catch (error: any) {
        console.error("Error fetching appointment:", error);
        return {
            success: false,
            data: null,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Failed to fetch appointment",
        };
    }
}

export async function changeAppointmentStatus(
    appointmentId: string,
    status: string
) {
    try {
        const response = await serverFetch.patch(
            `/appointment/status/${appointmentId}`,
            {
                body: JSON.stringify({ status }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const result = await response.json();

        if (result.success) {
            // Invalidate appointment caches
            revalidateTag('my-appointments', 'default');
            revalidateTag('appointments-list', 'default');
            revalidateTag(`appointment-${appointmentId}`, 'default');
            // Update dashboard for immediate status reflection
            revalidateTag('patient-dashboard-meta', 'default');
            revalidateTag('dashboard-meta', 'default');
            // Revalidate the appointments page path
            // revalidatePath('/patient/appointments');
            revalidatePath('/dashboard/my-appointments');
            revalidatePath(`/dashboard/my-appointments/${appointmentId}`);
        }
        return result;
    } catch (error: any) {
        console.error("Error changing appointment status:", error);
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Failed to change appointment status",
        };
    }
}

// Add this new function to handle payment success
export async function handlePaymentSuccess(appointmentId: string) {
    try {
        // Invalidate all relevant caches immediately
        revalidateTag('my-appointments', 'default');
        revalidateTag('appointments-list', 'default');
        revalidateTag(`appointment-${appointmentId}`, 'default');
        revalidateTag('patient-dashboard-meta', 'default');
        revalidateTag('admin-dashboard-meta', 'default');
        revalidateTag('doctor-dashboard-meta', 'default');

        // Force revalidate the appointments page
        // revalidatePath('/patient/appointments');
        revalidatePath('/dashboard/my-appointments');
        revalidatePath(`/dashboard/my-appointments/${appointmentId}`);
        revalidatePath('/dashboard/payment-success');

        return { success: true };
    } catch (error: any) {
        console.error("Error handling payment success:", error);
        return {
            success: false,
            message: "Failed to refresh appointment data",
        };
    }
}