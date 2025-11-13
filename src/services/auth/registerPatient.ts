/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { loginUser } from "./loginUser";
import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { registerPatientValidationZodSchema } from "@/zod/auth.validation";




export const registerPatient = async (_currentState: any, formData: any): Promise<any> => {
    try {
        console.log(formData.get("address"));

        // const validationData = {
        //     name: formData.get('name'),
        //     address: formData.get('address'),
        //     email: formData.get('email'),
        //     password: formData.get('password'),
        //     confirmPassword: formData.get('confirmPassword'),
        // }

        // const validatedFields = registerValidationZodSchema.safeParse(validationData);

        // console.log(validatedFields, "val");

        // if (!validatedFields.success) {
        //     return {
        //         success: false,
        //         errors: validatedFields.error.issues.map(issue => {
        //             return {
        //                 field: issue.path[0],
        //                 message: issue.message,
        //             }
        //         }
        //         )
        //     }
        // }

        // const registerData = {
        //     password: formData.get('password'),
        //     patient: {
        //         name: formData.get('name'),
        //         address: formData.get('address'),
        //         email: formData.get('email'),
        //     }
        // }

        // const newFormData = new FormData();

        // newFormData.append("data", JSON.stringify(registerData));

        // const res = await fetch("http://localhost:5000/api/v1/user/create-patient", {
        //     method: "POST",
        //     body: newFormData,
        // })

        const payload = {
            name: formData.get('name'),
            address: formData.get('address'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
        }

        if (zodValidator(payload, registerPatientValidationZodSchema).success === false) {
            return zodValidator(payload, registerPatientValidationZodSchema);
        }

        const validatedPayload: any = zodValidator(payload, registerPatientValidationZodSchema).data;
        const registerData = {
            password: validatedPayload.password,
            patient: {
                name: validatedPayload.name,
                address: validatedPayload.address,
                email: validatedPayload.email,
            }
        }

        const newFormData = new FormData();

        newFormData.append("data", JSON.stringify(registerData));

        if (formData.get("file")) {
            newFormData.append("file", formData.get("file") as Blob);
        }

        const res = await serverFetch.post("/user/create-patient", {
            body: newFormData,
        })


        const result = await res.json();

        console.log(result, "result");

        if (result.success) {
            await loginUser(_currentState, formData);
        }

        return result;



    } catch (error: any) {
        // Re-throw NEXT_REDIRECT errors so Next.js can handle them
        if (error?.digest?.startsWith('NEXT_REDIRECT')) {
            throw error;
        }
        console.log(error);
        return { success: false, message: `${process.env.NODE_ENV === 'development' ? error.message : "Registration Failed. Please try again."}` };
    }
}