/* eslint-disable react-hooks/set-state-in-effect */

"use client";
import { loginUser } from "@/services/auth/loginUser";
import { useActionState, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Eye, EyeOff, ChevronDown, Stethoscope, ShieldCheck, User } from "lucide-react";
import InputFieldError from "./shared/InputFieldError";
import { Button } from "./ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";

const DEMO_ACCOUNTS = [
  {
    role: "Patient",
    email: "user1@gmail.com",
    password: "12345678",
    icon: User,
    color: "text-blue-600",
    bg: "hover:bg-blue-50",
  },
  {
    role: "Doctor",
    email: "drarifhossain@gmail.com",
    password: "12345678",
    icon: Stethoscope,
    color: "text-emerald-600",
    bg: "hover:bg-emerald-50",
  },
  {
    role: "Admin",
    email: "admin1@gmail.com",
    password: "12345678",
    icon: ShieldCheck,
    color: "text-rose-600",
    bg: "hover:bg-rose-50",
  },
];

const LoginForm = ({ redirect }: { redirect?: string }) => {
  const [state, formAction, isPending] = useActionState(loginUser, null);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showDemo, setShowDemo] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
    if (state?.fields?.email) setEmail(state.fields.email);
    if (state?.fields?.password) setPassword(state.fields.password);
  }, [state]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDemo(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const fillDemo = (account: (typeof DEMO_ACCOUNTS)[0]) => {
    setEmail(account.email);
    setPassword(account.password);
    setShowDemo(false);
  };

  return (
    <form action={formAction}>
      {redirect && <input type="hidden" name="redirect" value={redirect} />}
      <FieldGroup>
        <div className="grid grid-cols-1 gap-4">
          {/* Email */}
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            <InputFieldError field="password" state={state} />
          </Field>
        </div>

        <FieldGroup className="mt-4">
          <Field>
            {/* Action buttons row */}
            <div className="flex items-center gap-2">
              <Button type="submit" disabled={isPending}>
                {isPending ? "Logging in..." : "Login"}
              </Button>

              {/* Demo dropdown */}
              <div className="relative" ref={dropdownRef}>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowDemo((prev) => !prev)}
                  className="flex items-center gap-1"
                >
                  Demo
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${showDemo ? "rotate-180" : ""}`}
                  />
                </Button>

                {showDemo && (
                  <div className="absolute left-0 top-full mt-1 z-50 w-52 rounded-lg border bg-white shadow-lg py-1 animate-in fade-in slide-in-from-top-1 duration-150">
                    {DEMO_ACCOUNTS.map((account) => {
                      const Icon = account.icon;
                      return (
                        <button
                          key={account.role}
                          type="button"
                          onClick={() => fillDemo(account)}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${account.bg}`}
                        >
                          <Icon className={`h-4 w-4 ${account.color}`} />
                          <span className="font-medium text-gray-700">
                            Login as {account.role}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            <FieldDescription className="px-6 text-center">
              Don&apos;t have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </FieldDescription>
            <FieldDescription className="px-6 text-center">
              <a href="/forgot-password" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
};

export default LoginForm;








// /* eslint-disable react-hooks/set-state-in-effect */
// "use client";
// import { loginUser } from "@/services/auth/loginUser";
// import { useActionState, useEffect, useState } from "react";
// import { toast } from "sonner";
// import { Eye, EyeOff } from "lucide-react";
// import InputFieldError from "./shared/InputFieldError";
// import { Button } from "./ui/button";
// import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
// import { Input } from "./ui/input";

// const LoginForm = ({ redirect }: { redirect?: string }) => {
//   const [state, formAction, isPending] = useActionState(loginUser, null);
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   useEffect(() => {
//     if (state && !state.success && state.message) {
//       toast.error(state.message);
//     }
//     // state এ fields থাকলে সেটা দিয়ে restore করো
//     if (state?.fields?.email) setEmail(state.fields.email);
//     if (state?.fields?.password) setPassword(state.fields.password);
//   }, [state]);

//   return (
//     <form action={formAction}>
//       {redirect && <input type="hidden" name="redirect" value={redirect} />}
//       <FieldGroup>
//         <div className="grid grid-cols-1 gap-4">
//           {/* Email */}
//           <Field>
//             <FieldLabel htmlFor="email">Email</FieldLabel>
//             <Input
//               id="email"
//               name="email"
//               type="email"
//               placeholder="m@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <InputFieldError field="email" state={state} />
//           </Field>

//           {/* Password */}
//           <Field>
//             <FieldLabel htmlFor="password">Password</FieldLabel>
//             <div className="relative">
//               <Input
//                 id="password"
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 className="pr-10"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword((prev) => !prev)}
//                 className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground transition-colors"
//                 aria-label={showPassword ? "Hide password" : "Show password"}
//               >
//                 {showPassword ? (
//                   <EyeOff className="h-4 w-4" />
//                 ) : (
//                   <Eye className="h-4 w-4" />
//                 )}
//               </button>
//             </div>
//             <InputFieldError field="password" state={state} />
//           </Field>
//         </div>

//         <FieldGroup className="mt-4">
//           <Field>
//             <Button type="submit" disabled={isPending}>
//               {isPending ? "Logging in..." : "Login"}
//             </Button>

//             <FieldDescription className="px-6 text-center">
//               Don&apos;t have an account?{" "}
//               <a href="/register" className="text-blue-600 hover:underline">
//                 Sign up
//               </a>
//             </FieldDescription>
//             <FieldDescription className="px-6 text-center">
//               <a
//                 href="/forgot-password"
//                 className="text-blue-600 hover:underline"
//               >
//                 Forgot password?
//               </a>
//             </FieldDescription>
//           </Field>
//         </FieldGroup>
//       </FieldGroup>
//     </form>
//   );
// };

// export default LoginForm;




// "use client";
// import { loginUser } from "@/services/auth/loginUser";
// import { useActionState, useEffect, useState } from "react";
// import { toast } from "sonner";
// import { Eye, EyeOff } from "lucide-react";
// import InputFieldError from "./shared/InputFieldError";
// import { Button } from "./ui/button";
// import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
// import { Input } from "./ui/input";

// const LoginForm = ({ redirect }: { redirect?: string }) => {
//   const [state, formAction, isPending] = useActionState(loginUser, null);
//   const [showPassword, setShowPassword] = useState(false);

//   useEffect(() => {
//     if (state && !state.success && state.message) {
//       toast.error(state.message);
//     }
//   }, [state]);

//   return (
//     <form action={formAction}>
//       {redirect && <input type="hidden" name="redirect" value={redirect} />}
//       <FieldGroup>
//         <div className="grid grid-cols-1 gap-4">
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
//             <div className="relative">
//               <Input
//                 id="password"
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 className="pr-10"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword((prev) => !prev)}
//                 className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground transition-colors"
//                 aria-label={showPassword ? "Hide password" : "Show password"}
//               >
//                 {showPassword ? (
//                   <EyeOff className="h-4 w-4" />
//                 ) : (
//                   <Eye className="h-4 w-4" />
//                 )}
//               </button>
//             </div>
//             <InputFieldError field="password" state={state} />
//           </Field>
//         </div>

//         <FieldGroup className="mt-4">
//           <Field>
//             <Button type="submit" disabled={isPending}>
//               {isPending ? "Logging in..." : "Login"}
//             </Button>

//             <FieldDescription className="px-6 text-center">
//               Don&apos;t have an account?{" "}
//               <a href="/register" className="text-blue-600 hover:underline">
//                 Sign up
//               </a>
//             </FieldDescription>
//             <FieldDescription className="px-6 text-center">
//               <a
//                 href="/forgot-password"
//                 className="text-blue-600 hover:underline"
//               >
//                 Forgot password?
//               </a>
//             </FieldDescription>
//           </Field>
//         </FieldGroup>
//       </FieldGroup>
//     </form>
//   );
// };

// export default LoginForm;












// "use client";
// import { loginUser } from "@/services/auth/loginUser";
// import { useActionState, useEffect } from "react";
// import { toast } from "sonner";
// import InputFieldError from "./shared/InputFieldError";
// import { Button } from "./ui/button";
// import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
// import { Input } from "./ui/input";

// const LoginForm = ({ redirect }: { redirect?: string }) => {
//   const [state, formAction, isPending] = useActionState(loginUser, null);

//   useEffect(() => {
//     if (state && !state.success && state.message) {
//       toast.error(state.message);
//     }
//   }, [state]);

//   return (
//     <form action={formAction}>
//       {redirect && <input type="hidden" name="redirect" value={redirect} />}
//       <FieldGroup>
//         <div className="grid grid-cols-1 gap-4">
//           {/* Email */}
//           <Field>
//             <FieldLabel htmlFor="email">Email</FieldLabel>
//             <Input
//               id="email"
//               name="email"
//               type="email"
//               placeholder="m@example.com"
//               //   required
//             />

//             <InputFieldError field="email" state={state} />
//           </Field>

//           {/* Password */}
//           <Field>
//             <FieldLabel htmlFor="password">Password</FieldLabel>
//             <Input
//               id="password"
//               name="password"
//               type="password"
//               placeholder="Enter your password"
//               //   required
//             />
//             <InputFieldError field="password" state={state} />
//           </Field>
//         </div>
//         <FieldGroup className="mt-4">
//           <Field>
//             <Button type="submit" disabled={isPending}>
//               {isPending ? "Logging in..." : "Login"}
//             </Button>

//             <FieldDescription className="px-6 text-center">
//               Don&apos;t have an account?{" "}
//               <a href="/register" className="text-blue-600 hover:underline">
//                 Sign up
//               </a>
//             </FieldDescription>
//             <FieldDescription className="px-6 text-center">
//               <a
//                 href="/forgot-password"
//                 className="text-blue-600 hover:underline"
//               >
//                 Forgot password?
//               </a>
//             </FieldDescription>
//           </Field>
//         </FieldGroup>
//       </FieldGroup>
//     </form>
//   );
// };

// export default LoginForm;
