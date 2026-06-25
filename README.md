# Dnyanu Portfolio

<p align="center">
  <img
    src="https://github.com/user-attachments/assets/787d8fb4-616a-4016-900f-e304e48b4a76"
    alt="Portfolio Preview"
    width="700"
    height="300"
  />
</p>

A professional, modern portfolio website showcasing full-stack academic projects, software engineering skills, and coding achievements. Designed for recruiters and technical managers at tech companies and startups.

🚀 **Live Demo:** https://dnyaneshwar-portfolio.vercel.app/

---

## About

This project is a high-performance, single-page web portfolio built using React, Vite, and Tailwind CSS. It is structured to serve as an interactive resume for recruiters, providing a complete overview of technical capabilities, background, and coding credentials.

It showcases:

* **Academic & Personal Projects** with live preview and source code access.
* **Core Technical Arsenal** in a custom interactive orbital layout.
* **Education & Certifications** mapped chronologically.
* **Coding Activity & Statistics** on platforms like LeetCode and HackerRank.
* **Interactive Contact Portal** connected directly to email.

---

## Features

* 📱 **Fully Responsive Layout** – Optimized for seamless experience on desktop, tablet, and mobile screens.
* 🎨 **Modern Dark Aesthetic** – Sleek terminal-inspired design using HSL tailored dark tones and neon green accents.
* ⚡ **Framer Motion Animations** – Micro-interactions, custom circular orbital spins, and enter/exit transition animations.
* 📧 **Harden API Contact Form** – Serverless contact form handling with input sanitization, trimming, and XSS safety controls.
* 🔔 **Toast System** – Lightweight, non-intrusive notifications for delivery loading, success, and error states using `react-hot-toast`.
* ♿ **Accessibility Compliant (a11y)** – Features screen reader friendly `aria-label` tags, `aria-expanded` toggle states, and clear keyboard focus styles.
* 🚀 **Search Engine Optimized** – Configured with descriptive meta titles, Open Graph (OG) tags, and Twitter Cards for social sharing.
* ⏱️ **Fast Load Times** – Built with Vite, utilizing code splitting, lazy animations, and optimized SVG vector elements.

---

## Tech Stack

| Category                     | Technologies Used                     |
| :--------------------------- | :------------------------------------ |
| **Frontend Framework** | React 19, Vite, JavaScript (ES6+)     |
| **Styling & CSS**      | Tailwind CSS v4, Vanilla CSS          |
| **Animations**         | Framer Motion                         |
| **Icon Libraries**     | Lucide React, React Icons             |
| **Backend / API**      | Vercel Serverless Functions (Node.js) |
| **Email Delivery**     | Resend API                            |
| **Hosting & Deploy**   | Vercel Cloud                          |

## Folder Structure

```text
portfolio/
├── api/
│   └── contact.js          # Vercel serverless contact form handler
├── public/
│   ├── certificates/       # Local credential attachments
│   ├── projects/           # Showcase screenshots
│   ├── favicon.svg         # Browser tab icon
│   ├── logo.png            # Main branding logo
│   └── resume.pdf          # Professional resume document
├── src/
│   ├── assets/             # Asset files
│   ├── components/         # Reusable presentation components
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   └── SectionTitle.jsx
│   ├── data/               # Static dataset configurations
│   │   ├── AboutData.js
│   │   ├── EducationAndCertification.js
│   │   ├── Profile.data.js
│   │   ├── ProjectList.js
│   │   └── SkillSet.js
│   ├── section/            # Page page layout sections
│   │   ├── About.jsx
│   │   ├── Activity.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Hero.jsx
│   │   ├── ProjectShowcase.jsx
│   │   └── Skills.jsx
│   ├── App.jsx             # Main router element
│   ├── index.css           # Global custom stylesheet
│   └── main.jsx            # DOM loader script
├── .env                    # System configurations (ignored)
├── .gitignore              # Ignored folder settings
├── index.html              # Document index frame
├── package.json            # Dependency manifest
├── vite.config.js          # Bundler setup script
└── README.md               # Repository documentation
```

---

## Installation & Local Setup

To run this project locally, clone the repository and run the dev server:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Dnyaneshwar-dnyanu/portfolio.git
   cd portfolio
   ```
2. **Install Project Dependencies**

   ```bash
   npm install
   ```
3. **Configure Environment Variables**
   Create a `.env` file in the root directory (refer to the **Environment Variables** section below).
4. **Launch Dev Server**

   ```bash
   npm run dev
   ```

   Open `http://localhost:5173` in your browser.
5. **Test Serverless Functions Locally**
   To test the serverless mail endpoint locally, run via the Vercel CLI:

   ```bash
   npx vercel dev
   ```

---

## Environment Variables

Create a `.env` file in the project root and add the following keys:

```ini
# --- Frontend (Client-side URL configs) ---
VITE_GITHUB_URL=https://github.com/your-username
VITE_LINKEDIN_URL=https://www.linkedin.com/in/your-profile
VITE_PHONE_NO=91XXXXXXXXXX
VITE_MY_EMAIL=your-public-email@domain.com

# --- Backend (Serverless keys, kept secret) ---
RESEND_API_KEY=re_your_resend_api_secret_key
EMAIL_TO=recipient-inbox@domain.com
EMAIL_FROM=onboarding@resend.dev
```

* **`VITE_GITHUB_URL`** / **`VITE_LINKEDIN_URL`**: Exposed to the browser to populate social links.
* **`VITE_PHONE_NO`**: Populates the direct WhatsApp redirect link.
* **`VITE_MY_EMAIL`**: Used for browser `mailto:` links.
* **`RESEND_API_KEY`**: Private token used by Vercel serverless function to communicate with Resend.
* **`EMAIL_TO`**: The destination mailbox that receives messages sent from the portfolio.
* **`EMAIL_FROM`**: The sender header address (must be a domain verified in Resend, or default `onboarding@resend.dev`).

---

## Deployment

The project is configured for deployment on **Vercel**:

1. Link your GitHub repository to Vercel.
2. In the Vercel Dashboard, go to **Settings -> Environment Variables** and add all variables listed in the `.env` file.
3. Vercel will automatically detect the Vite build configuration and the `/api/contact.js` function, deploying them concurrently.

---

## Future Improvements

Roadmap for future iterations:

- [ ] **Blog Integration** – MDX-based blogging platform to write dev tutorials.
- [ ] **Dynamic Analytics** – Private dashboard to monitor page view events.
- [ ] **Dark/Light Theme Toggle** – Support for accessible light-mode themes.
- [ ] **Project Categorization** – Quick tag filters to view frontend, full-stack, or python-specific repositories.
- [ ] **Visitor Counter** – Visual serverless badge counting visitor statistics.

---

## Contact

* **Email**: dnyaneshwarbhajantri18@gmail.com
* **LinkedIn**: [Dnyaneshwar Bhajantri](https://www.linkedin.com/in/dnyaneshwar-bhajantri-bb30832bb/)
* **GitHub**: [@Dnyaneshwar-dnyanu](https://github.com/Dnyaneshwar-dnyanu)

---

## License

This project is licensed under the [MIT License](LICENSE).
