# 🩺 Doctorate — Online Healthcare Consultation Platform

A modern, scalable, and role-based doctor consultation web application built with Next.js App Router, designed to provide seamless digital healthcare services anytime, anywhere.

Doctorate enables patients to connect with verified doctors, book consultations, receive e-prescriptions, and manage their health — all from a single platform.


🔗 Live Demo: https://health-care-frontend-tshw.vercel.app/

---

## 🚀 Project Overview

Doctorate allows users to:
- Browse doctors by speciality
- Book consultations
- Receive e-prescriptions
- Manage appointments & health data
- Access role-based dashboards
- 🤖 AI-powered doctor search based on symptoms

---

## 🧱 Tech Stack

### ⚛️ Frontend Core
- Next.js 16 (App Router)
- React 19
- TypeScript

###  🎨 UI & Styling
- Tailwind CSS v4
- Radix UI
- Lucide Icons
- Framer Motion
- Sonner (Toast Notifications)

###  📋 Forms & Validation
- Zod

### 🔐 Authentication & Utilities
- JWT (jsonwebtoken)
- Cookie-based authentication
- Custom Middleware (proxy.ts)
- Date-fns


---


## 🔑 Features
- JWT-based authentication
- Access & refresh token system
- Secure cookie handling
- Auto token refresh
- Password reset with token verification
- Role-based route protection
- 🤖 AI Doctor Search (Symptom-based search system)


## 🤖 AI Doctor Search

Doctorate includes an AI-powered doctor search system that helps users find the right specialist based on symptoms.

### 🔍 How it works:
- User enters symptoms (e.g., chest pain, headache, fever)
- System analyzes the input
- Suggests relevant doctor specialities
- Displays matching doctors instantly

### 💡 Example:
- Input: Chest pain → Suggests Cardiologist
- Input: Headache → Suggests Neurologist

### 🎯 Benefits:
- Faster doctor discovery
- No need to manually select speciality
- Beginner-friendly for patients
- Improves user experience significantly

## Core file:
```ts
src/proxy.ts
```

### Handles:
- Token refresh flow
- Route protection
- Role validation
- Redirect logic
- Reset password validation

---

## 👥 User Roles

| Role    | Description                                      |
| ------- | ------------------------------------------------ |
| PATIENT | Book consultations, view doctors, manage records |
| DOCTOR  | Manage appointments, consult patients            |
| ADMIN   | Manage users, doctors, specialities, system      |


---

## 🗂 Folder Structure

```txt
src/
├── app/
│   ├── (commonLayout)
│   │   ├── login/
│   │   ├── register/
│   │   ├── forgot-password/
│   │   ├── reset-password/
│   │
│   ├── (dashboardLayout)
│   │   ├── (commonProtectedLayout)
│   │   │   ├── my-profile/
│   │   │   ├── settings/
│   │   │   ├── change-password/
│   │   │
│   │   ├── admin/
│   │   │   └── dashboard/
│   │   │        ├── specialities-management/
│   │   │        ├── users-management/
│   │   │        ├── doctors-management/
│   │   │        ├── layout.tsx
│   │   │        ├── loading.tsx
│   │   │        └── page.tsx
│   │   │
│   │   ├── doctor/
│   │   │   ├── dashboard/
│   │   │   ├── appointments/
│   │   │
│   │   ├── dashboard/ (patient)
│   │       ├── appointments/
│   │       ├── prescriptions/
│   │       ├── payments/
│   │
│   ├── about/
│   ├── doctors/
│   ├── consultation/
│   ├── blog/
│   ├── contact/
│   ├── layout.tsx
│   ├── error.tsx
│   ├── not-found.tsx
│
├── components/
│   ├── modules/
│   ├── shared/
│   └── ui/
│
├── hooks/
├── lib/
│   ├── auth-utils.ts
│   ├── jwtHandlers.ts
│   ├── serverFetch.ts
│   ├── navItems.config.ts
│
├── services/
│   ├── auth/
│   ├── doctor/
│   ├── patient/
│   ├── admin/
│
├── zod/
├── types/
└── proxy.ts
```

---

## 📦 Features

### 🌍 Public Features
- Homepage with healthcare overview
- Doctor listings & profiles
- AI-based doctor search
- About & contact pages
- Blog section

### 👤 Patient Dashboard
- Book doctor consultations
- View appointment history
- Manage profile & password
- Access prescriptions

### 👨‍⚕️ Doctor Dashboard
- Manage appointments
- View patient information
- Provide consultations

### 🛠 Admin Dashboard
- User management
- Doctor management
- Specialities management
- System control

---

## ⚙️ Scripts

- npm run dev
- npm run build
- npm run start
- npm run lint

---

## 👨‍💻 Author

Md. Nazmul Islam

---

## 📝 License

MIT License
