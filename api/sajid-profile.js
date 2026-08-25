export const SAJID_PROFILE = `
Sajid Masood is a Senior Full-Stack Software Engineer with 7+ years of experience.
Headline: Senior Full-Stack Software Engineer.
Location: available worldwide (Pakistan-based, remote-friendly).
Email: sajidmasood351@gmail.com
Phone: +92 305 5860230
LinkedIn: https://www.linkedin.com/in/sajid-masood-380707112/
GitHub: https://github.com/sajidmasoodbscs
Education: Bachelor of Science in Computer Science, University of Sargodha, 2014–2018.
Certifications: Shopify Foundation Certified, MongoDB Certification, MySQL Certification.

Stacks: Node.js, TypeScript, JavaScript, React, Next.js, Express, NestJS, C#, .NET, Razor Pages.
Shopify: custom Shopify apps, Admin API, Storefront API, Liquid, Polaris, webhooks, Klaviyo.
Data: PostgreSQL, MySQL, MongoDB, Redis, Prisma, TypeORM, Sequelize, Mongoose.
Cloud: AWS, Azure, GCP, Vercel, Heroku, Docker, Jenkins, GitHub Actions, Nginx, CI/CD.
CMS: Shopify, Webflow, WordPress/Elementor.
Automation: n8n, Zapier, Make.com, webhooks.

Experience:
- Senior Software Engineer at Integriti, April 2023 – Present. Enterprise .NET/Razor Pages billing and claims UI; Shopify apps with Node, Express, React, PostgreSQL, Polaris; REST APIs, React/Next.js, Webflow and WordPress.
- Associate Node.js Developer at Alfain Technologies, April 2021 – April 2023. Node/Express APIs, MongoDB, MySQL, bulk processing, AWS QuickSight and RDS, Jenkins CI/CD.
- Backend Developer / Intern at Alfain Technologies, January 2019 – April 2021. Company website HTML/CSS/JS and MySQL-backed features.

Selected projects:
- MX SoCal (https://www.mxsocal.com/): motocross landing page live; upcoming MERN bike rental system.
- Foremost (https://www.foremost.ca/): corporate MERN site on AWS with admin CMS.
- Reward Platform: points from bus/train tickets, partner + admin portals, Node/Express/MongoDB.
- Medical Appointment System: doctor/admin/patient portals, EHR integrations.
- Integriti CRM and GreenMinds CRM (MERN/Next.js).
- Check My Ride: automated vehicle inspection bookings, mechanic matching, reports, Stripe Connect.
- Nett Pharmacy, Oushk Pharmacy, Skin and Hair Center: Shopify storefronts (Liquid/JS).
- Call A Van (callavan.live): on-demand van drivers, real-time map, Webflow, Node, Supabase, Flutter.

Availability: open to full-stack, Shopify, CRM, and cloud work. Visitors can email through the chatbot or the contact form.
`.trim();

export function answerFromProfile(question) {
  const q = question.toLowerCase();

  if (/(email|mail|contact|hire|reach)/.test(q)) {
    return "You can email Sajid at sajidmasood351@gmail.com, call +92 305 5860230, or use the Email option in this chat to send a message from the site.";
  }
  if (/(linkedin|github|social)/.test(q)) {
    return "LinkedIn: https://www.linkedin.com/in/sajid-masood-380707112/\nGitHub: https://github.com/sajidmasoodbscs";
  }
  if (/(experience|job|work history|company|integriti|alfain)/.test(q)) {
    return "Sajid is Senior Software Engineer at Integriti (Apr 2023–present). Before that he was Associate Node.js Developer at Alfain Technologies (2021–2023) and started there as Backend Developer/Intern (2019–2021).";
  }
  if (/(shopify)/.test(q)) {
    return "He builds custom Shopify apps with Node.js, Express, React, PostgreSQL, and Polaris, plus Liquid themes and Klaviyo tracking. He is Shopify Foundation Certified.";
  }
  if (/(skill|stack|tech|mern|react|node)/.test(q)) {
    return "Core stack: MERN (MongoDB, Express, React, Node.js), TypeScript, Next.js, plus .NET/Razor Pages, Shopify, PostgreSQL/MySQL, and AWS/Vercel deployments. He also works with n8n, Zapier, and Make.com.";
  }
  if (/(project|portfolio|mx|foremost|crm)/.test(q)) {
    return "Recent work includes MX SoCal (mxsocal.com), Foremost (foremost.ca, MERN on AWS), a rewards platform, a medical appointment system, Integriti CRM, GreenMinds CRM, and Shopify/WordPress sites.";
  }
  if (/(educat|degree|university|certif)/.test(q)) {
    return "BS Computer Science from University of Sargodha (2014–2018). Certifications: Shopify Foundation, MongoDB, and MySQL.";
  }
  if (/(year|how long|experience years)/.test(q)) {
    return "Sajid has 7+ years of professional software engineering experience, from 2019 to present.";
  }
  if (/(where|location|pakistan|remote)/.test(q)) {
    return "He is available worldwide for remote work and can be reached by email or the contact form on this site.";
  }

  return "Sajid Masood is a Senior Full-Stack Engineer (7+ years) at Integriti, specializing in MERN, Shopify apps, CRMs, and AWS. Ask about skills, experience, projects, or use Email in this chat to send him a message.";
}
