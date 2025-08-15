// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://2h3ph3rd.github.io/ceh-practical-guide",
  integrations: [
    starlight({
      title: "CEH Practical Guide",
      logo: {
        src: "./src/assets/logo.webp",
      },
      favicon: "/favicon.ico",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/2h3ph3rd/ceh-practical-guide",
        },
      ],
      sidebar: [
        {
          label: "About this guide",
          slug: "guide/about",
        },
        {
          label: "1. Introduction to Ethical Hacking",
          slug: "guide/intro-hacking",
        },
        {
          label: "2. Footprinting and Reconnaissance",
          slug: "guide/footprinting",
        },
        {
          label: "3. Scanning Networks",
          slug: "guide/scanning",
        },
        {
          label: "4. Enumeration",
          slug: "guide/enumeration",
        },
        {
          label: "5. Vulnerability Analysis",
          slug: "guide/vuln",
        },
        {
          label: "6. System Hacking",
          slug: "guide/system",
        },
        {
          label: "7. Malware Threats",
          slug: "guide/malware",
        },
        {
          label: "8. Sniffing",
          slug: "guide/sniffing",
        },
        {
          label: "9. Social Engineering",
          slug: "guide/social",
        },
        {
          label: "10. Denial-of-Service",
          slug: "guide/dos",
        },
        {
          label: "11. Session Hijacking",
          slug: "guide/session",
        },
        {
          label: "12. Evading IDS, Firewalls, and Honeypots",
          slug: "guide/evading",
        },
        {
          label: "13. Hacking Web Servers",
          slug: "guide/servers",
        },
        {
          label: "14. Hacking Web Applications",
          slug: "guide/apps",
        },
        {
          label: "15. SQL Injection",
          slug: "guide/sqli",
        },
        {
          label: "16. Hacking Wireless Networks",
          slug: "guide/wifi",
        },
        {
          label: "17. Hacking Mobile Platforms",
          slug: "guide/mobile",
        },
        {
          label: "18. IoT and OT Hacking",
          slug: "guide/iot",
        },
        {
          label: "19. Cloud Computing",
          slug: "guide/cloud",
        },
        {
          label: "20. Cryptography",
          slug: "guide/crypto",
        },
        {
          label: "Credits",
          slug: "guide/credits",
        },
      ],
    }),
  ],
});
