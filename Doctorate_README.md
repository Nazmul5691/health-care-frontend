# 🩺 Doctorate — Online Healthcare Consultation Platform

A modern, scalable, and role-based doctor consultation web application built with Next.js App Router.

🔗 Live Demo: https://health-care-frontend-tshw.vercel.app/

---

## 🚀 Project Overview

Doctorate allows users to:
- Browse doctors by speciality
- Book consultations
- Receive e-prescriptions
- Manage appointments & health data
- Access role-based dashboards

---

## 🧱 Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Radix UI
- Framer Motion
- Zod
- JWT Authentication

---

## 🔐 Authentication & Security

- JWT-based authentication
- Access & refresh tokens
- Cookie-based auth
- Auto token refresh
- Role-based route protection

Core file:
src/proxy.ts

---

## 👥 User Roles

- PATIENT
- DOCTOR
- ADMIN

---

## 🗂 Folder Structure

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

---

## 📦 Features

### Public
- Homepage
- Doctor listing
- About & Contact pages

### Patient Dashboard
- Book appointments
- View prescriptions
- Manage profile

### Doctor Dashboard
- Manage appointments
- Patient consultations

### Admin Dashboard
- Manage users
- Manage doctors
- Manage specialities

---

## ⚙️ Scripts

npm run dev
npm run build
npm run start
npm run lint

---

## 👨‍💻 Author

Md. Nazmul Islam

---

## 📝 License

MIT License
