"use client";

import { registerPatient } from "@/services/auth/registerPatient";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";
import InputFieldError from "./shared/InputFieldError";
import { Button } from "./ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";

const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(registerPatient, null);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [fields, setFields] = useState({
    name: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form action={formAction}>
      <FieldGroup>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <Field>
            <FieldLabel htmlFor="name">Full Name</FieldLabel>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={fields.name}
              onChange={handleChange}
            />
            <InputFieldError field="name" state={state} />
          </Field>

          {/* Address */}
          <Field>
            <FieldLabel htmlFor="address">Address</FieldLabel>
            <Input
              id="address"
              name="address"
              type="text"
              placeholder="123 Main St"
              value={fields.address}
              onChange={handleChange}
            />
            <InputFieldError field="address" state={state} />
          </Field>

          {/* Email */}
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              value={fields.email}
              onChange={handleChange}
            />
            <InputFieldError field="email" state={state} />
          </Field>

          {/* Password */}
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="pr-10"
                value={fields.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            <InputFieldError field="password" state={state} />
          </Field>

          {/* Confirm Password */}
          <Field className="md:col-span-2">
            <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
            <div className="relative">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter your password"
                className="pr-10"
                value={fields.confirmPassword}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={
                  showConfirmPassword
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            <InputFieldError field="confirmPassword" state={state} />
          </Field>
        </div>

        <FieldGroup className="mt-4">
          <Field>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Creating Account..." : "Create Account"}
            </Button>
            <FieldDescription className="px-6 text-center">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Sign in
              </a>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
};

export default RegisterForm;




// "use client";

// import { registerPatient } from "@/services/auth/registerPatient";
// import { useActionState, useEffect } from "react";
// import { toast } from "sonner";
// import InputFieldError from "./shared/InputFieldError";
// import { Button } from "./ui/button";
// import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
// import { Input } from "./ui/input";

// const RegisterForm = () => {
//   const [state, formAction, isPending] = useActionState(registerPatient, null);

//   useEffect(() => {
//     if (state && !state.success && state.message) {
//       toast.error(state.message);
//     }
//   }, [state]);
//   return (
//     <form action={formAction}>
//       <FieldGroup>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* Name */}
//           <Field>
//             <FieldLabel htmlFor="name">Full Name</FieldLabel>
//             <Input id="name" name="name" type="text" placeholder="John Doe" />
//             <InputFieldError field="name" state={state} />
//           </Field>
//           {/* Address */}
//           <Field>
//             <FieldLabel htmlFor="address">Address</FieldLabel>
//             <Input
//               id="address"
//               name="address"
//               type="text"
//               placeholder="123 Main St"
//             />
//             <InputFieldError field="address" state={state} />
//           </Field>
//           {/* Email */}
//           <Field>
//             <FieldLabel htmlFor="email">Email</FieldLabel>
//             <Input
//               id="email"
//               name="email"
//               type="email"
//               placeholder="m@example.com"
//             />
//             <InputFieldError field="email" state={state} />
//           </Field>
//           {/* Password */}
//           <Field>
//             <FieldLabel htmlFor="password">Password</FieldLabel>
//             <Input id="password" name="password" type="password" />

//             <InputFieldError field="password" state={state} />
//           </Field>
//           {/* Confirm Password */}
//           <Field className="md:col-span-2">
//             <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
//             <Input
//               id="confirmPassword"
//               name="confirmPassword"
//               type="password"
//             />

//             <InputFieldError field="confirmPassword" state={state} />
//           </Field>
//         </div>
//         <FieldGroup className="mt-4">
//           <Field>
//             <Button type="submit" disabled={isPending}>
//               {isPending ? "Creating Account..." : "Create Account"}
//             </Button>

//             <FieldDescription className="px-6 text-center">
//               Already have an account?{" "}
//               <a href="/login" className="text-blue-600 hover:underline">
//                 Sign in
//               </a>
//             </FieldDescription>
//           </Field>
//         </FieldGroup>
//       </FieldGroup>
//     </form>
//   );
// };

// export default RegisterForm;
