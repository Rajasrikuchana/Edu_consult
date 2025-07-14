# 🎓 Edu_Consult — A Modern Platform for Educational Guidance

**Edu_Consult** is a full-stack, scalable web platform that empowers students to connect with education consultants, explore career opportunities, access valuable resources, and make well-informed academic decisions — all in one place.

## 🔍 Key Features

- 👥 **User Roles & Authentication**  
  Role-based access for students, consultants, and admins with secure login and personalized dashboards.

- 📘 **Educational Blogs**  
  Access curated articles for study tips, career advice, and industry insights.

- 🧭 **Course Directory**  
  Browse a wide range of academic programs and offerings.

- 💳 **Payment Integration**  
  Subscription and service payments powered by **Razorpay**.

- 📬 **Email Notifications**  
  Integrated with **Resend** to deliver promotional and transactional emails.

- 🖥️ **Responsive UI**  
  Built with Tailwind CSS and shadcn/ui for a clean, modern experience.

- ⚙️ **Microservice Architecture**  
  Backend built with Spring Boot and Spring Cloud for scalability and maintainability.


## 🧱 Tech Stack

### 🚀 Frontend
- **React.js** – Component-based frontend framework
- **TanStack Query** – Optimized data fetching with caching
- **TanStack Router** – File-based routing
- **Tailwind CSS** – Utility-first responsive design
- **shadcn/ui** – Reusable UI components

### 🛠️ Backend
- **Spring Boot** – Backend microservices
- **Spring Cloud Gateway** – Centralized API routing
- **Spring Security** – Authentication & Authorization
- **Spring Data JPA** – ORM with MySQL
- **Eureka** – Service discovery
- **Kafka** – Asynchronous messaging for notifications

### 💾 Database
- **MySQL**
  - `UserDB`, `CourseDB`, `BlogDB`, `PaymentDB`, `EngagementDB`

### 🔌 Third-Party Integrations
- **Razorpay** – Payment gateway
- **Resend** – Email delivery service


## 📁 Folder Structure 
Edu_Consult/<br>
├── .idea/           # IDE settings (from IntelliJ IDEA) <br>
├── backend/         # Backend Spring Boot microservices <br>
├── frontend/        # Frontend React application <br>
├── .gitattributes   # Git settings  <br>
├── LICENSE          # Project license <br>
└── README.md        # Project documentation <br>

---

## 🖼️ UI Preview

- Home
<img width="1822" height="881" alt="image" src="https://github.com/user-attachments/assets/7b448a68-ea66-4ad8-819b-d73ac1a36881" />


- Admin Portal
  <img width="1823" height="878" alt="image" src="https://github.com/user-attachments/assets/05e2f5fa-52f1-4058-a3e7-c861797478e5" />

- User portal
  <img width="1828" height="878" alt="image" src="https://github.com/user-attachments/assets/0b45894b-2562-4d60-b977-b220db6f3980" />



  
- Registration/Login
  <img width="1918" height="1008" alt="image" src="https://github.com/user-attachments/assets/915cb8a8-b39f-412f-9d3f-547250415499" />
  <img width="1910" height="1002" alt="image" src="https://github.com/user-attachments/assets/0ddf247b-6c9d-4065-80bc-f512e298d9b6" />


- Course Page
  <img width="1823" height="878" alt="image" src="https://github.com/user-attachments/assets/a9dc40d5-b46b-4785-84a6-18a0aff41e2d" />



## ⚙️ Getting Started

### 📦 Prerequisites
- Node.js + npm
- Java 17+ and Maven
- MySQL Server
- IntelliJ / VS Code

### 🔧 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Rajasrikuchana/Edu_consult.git
   cd Edu_consult

2. **Start the Backend Services**

   Open each service inside the `backend/` folder (e.g., `user-service`, `course-service`, `gateway-service`, etc.) and start them using Maven:

   ```bash
   cd backend/<service-name>
   mvn spring-boot:run
   
3. **Set Up MySQL Databases**
   
   Create a database schema
   ```bash
   CREATE DATABASE database_name;

4. **Start the Frontend**

   Navigate to the frontend folder and run:
   ```bash
   cd frontend
   npm install
   npm run dev

5. **Test the application**

   ✅ Register as student / consultant / admin

   🛒 Browse dashboard and test course/enrollment flows

   💳 Test payments using Razorpay test keys

   ✉️ Trigger email notifications with Resend

6. **📌 Future Enhancements**

   
   🔎 AI-driven course and consultant recommendations

   🌙 Dark/light mode toggle

   📊 Analytics for admins and consultants

   📂 Resume upload & document management

   🔍 Advanced search and filter across blogs/courses



## 👩‍💻 Developed By

**Rajasri Kuchana**  
Final Year Computer Science Engineering Student  
Passionate about full-stack development, scalable systems, and education technology.  

🔗 [GitHub](https://github.com/Rajasrikuchana)  
🔗 [LinkedIn](https://www.linkedin.com/in/rajasrikuchana/) 




## 📜 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and distribute for personal or educational purposes.

```text
MIT License

Copyright (c) 2024 Rajasri

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions...
