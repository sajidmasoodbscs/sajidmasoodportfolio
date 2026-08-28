export function answerFromProfile(question: string): string {
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
  if (/(project|portfolio|mx|foremost|crm|pharmacy|van|ride|inspection|employee|hr)/.test(q)) {
    return "Recent work includes Integriti CRM (crm.integritistudio.us), Employee Management System (employees.integritistudio.us), Check My Ride, Nett/Oushk Pharmacy (Shopify), Call A Van, MX SoCal, Foremost (MERN on AWS), rewards platform, medical appointment system, and GreenMinds CRM.";
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
