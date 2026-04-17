const translations = {
  nav: {
    about: { en: "About", id: "Tentang" },
    skills: { en: "Skills", id: "Keahlian" },
    experience: { en: "Experience", id: "Pengalaman" },
    education: { en: "Education", id: "Pendidikan" },
    contact: { en: "Contact", id: "Kontak" },
  },
  hero: {
    title: {
      en: "Hi, I'm Moh. Arif Yahya 👋",
      id: "Halo, Saya Moh. Arif Yahya 👋",
    },
    subtitle: {
      en: "Experienced Back-End Developer",
      id: "Back-End Developer",
    },
    description: {
      en: "Microservices • 5+ years experience in building scalable APIs.",
      id: "Microservices • Pengalaman 5+ tahun dalam membangun API yang scalable.",
    },
    location: { en: "Bandung, Indonesia", id: "Bandung, Indonesia" },
    downloadResume: { en: "Download Resume", id: "Unduh Resume" },
    viewExperience: { en: "View Experience", id: "Lihat Pengalaman" },
    contactMe: { en: "Contact Me", id: "Hubungi Saya" },
  },
  about: {
    title: { en: "About Me", id: "Tentang Saya" },
    text: {
      en: "Back-End Developer with over 5 years of experience in the IT industry, specializing in building scalable systems with Laravel. Proven expertise in developing RESTful APIs within microservices architectures, integrating payment gateways, and automating business processes. Adept at collaborating in Agile environments and bridging the gap between product requirements and technical execution.",
      id: "Back-End Developer dengan pengalaman lebih dari 5 tahun di industri IT, spesialis dalam membangun sistem yang scalable menggunakan Laravel. Memiliki keahlian teruji dalam pengembangan RESTful API dengan arsitektur microservices, integrasi payment gateway, dan otomasi proses bisnis. Terbiasa bekerja dalam lingkungan Agile serta mampu menjembatani kebutuhan produk dengan eksekusi teknis yang efisien.",
    },
  },
  skills: {
    title: { en: "Skills", id: "Keahlian" },
    tags: [
      "PHP",
      "Laravel",
      "Python",
      "JavaScript",
      "Vue.js",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Nginx",
      "AWS (EC2, RDS, S3)",
      "Microservices",
      "RESTful API",
      "Swagger",
      "Jira",
      "Scrum",
      "PHPUnit",
      "Git",
    ],
  },
  experience: {
    title: { en: "Work Experience", id: "Pengalaman Kerja" },
    summaryTitle: { en: "Summary", id: "Ringkasan" },
    jobs: [
      {
        title: { en: "Back End Developer", id: "Back End Developer" },
        company: "PT Gajicermat Mandiri Digital Indonesia",
        location: "Bandung",
        period: { en: "June 2022 – Present", id: "Juni 2022 – Sekarang" },
        duties: [
          {
            en: "<b>API &amp; Microservices:</b> Developed and maintained robust RESTful APIs using PHP and Laravel within a microservices architecture to ensure high system scalability.",
            id: "<b>API &amp; Microservices:</b> Mengembangkan dan memelihara RESTful API yang kuat menggunakan PHP dan Laravel dalam arsitektur microservices untuk确保 skalabilitas sistem yang tinggi.",
          },
          {
            en: "<b>System Engineering:</b> Designed and implemented new backend services while debugging and enhancing existing ones to improve system performance.",
            id: "<b>System Engineering:</b> Merancang dan mengimplementasikan layanan backend baru sambil memperbaiki dan meningkatkan yang sudah ada untuk meningkatkan performa sistem.",
          },
          {
            en: "<b>Agile Execution:</b> Actively participated in Scrum ceremonies and translated Product Requirement Documents (PRD) into detailed, actionable technical tasks in Jira.",
            id: "<b>Agile Execution:</b> Aktif berpartisipasi dalam Scrum ceremonies dan menerjemahkan Product Requirement Documents (PRD) menjadi tugas teknis yang terperinci dan dapat ditindaklanjuti di Jira.",
          },
          {
            en: "<b>Quality &amp; Documentation:</b> Wrote unit tests to ensure code reliability and created interactive API documentation using Swagger for seamless cross-team integration.",
            id: "<b>Quality &amp; Documentation:</b> Menulis unit test untuk memastikan keandalan kode dan membuat dokumentasi API interaktif menggunakan Swagger untuk integrasi lintas tim yang mulus.",
          },
          {
            en: "<b>Collaboration:</b> Supported the product team through design reviews and assisted the QA team during the testing process to ensure smooth production releases.",
            id: "<b>Collaboration:</b> Mendukung tim produk melalui design review dan membantu tim QA selama proses pengujian untuk memastikan rilis production yang lancar.",
          },
        ],
        tags: [
          "PHP",
          "Laravel",
          "Microservices",
          "REST API",
          "Swagger",
          "Jira",
          "Scrum",
        ],
      },
      {
        title: {
          en: "Freelance Back End Developer",
          id: "Freelance Back End Developer",
        },
        company: "AELITE",
        location: "Cirebon",
        period: { en: "Nov 2020 – Sep 2021", id: "Nov 2020 – Sep 2021" },
        duties: [
          {
            en: "<b>System Design:</b> Contributed to the design of complex business flows and database architectures for various web applications.",
            id: "<b>System Design:</b> Berkontribusi dalam desain alur bisnis kompleks dan arsitektur database untuk berbagai aplikasi web.",
          },
          {
            en: "<b>Feature Implementation:</b> Developed REST APIs using Laravel and integrated Payment Gateway systems for secure transaction processing.",
            id: "<b>Feature Implementation:</b> Mengembangkan REST API menggunakan Laravel dan mengintegrasikan sistem Payment Gateway untuk pemrosesan transaksi yang aman.",
          },
          {
            en: "<b>Management Tools:</b> Built comprehensive web dashboards to provide management with real-time operational control.",
            id: "<b>Management Tools:</b> Membuat web dashboard yang komprehensif untuk memberikan kontrol operasional real-time kepada manajemen.",
          },
        ],
        tags: ["Laravel", "REST API", "Payment Gateway", "Dashboard"],
      },
      {
        title: { en: "Full Stack Developer", id: "Full Stack Developer" },
        company: "PT Toyamilindo",
        location: "Cirebon",
        period: { en: "Dec 2018 – May 2020", id: "Des 2018 – Mei 2020" },
        duties: [
          {
            en: "<b>System Modernization:</b> Led the migration of legacy PHP Native applications to the Laravel framework, enhancing security and maintainability.",
            id: "<b>System Modernization:</b> Memimpin migrasi aplikasi PHP Native lama ke framework Laravel, meningkatkan keamanan dan kemampuan pemeliharaan.",
          },
          {
            en: "<b>Automation:</b> Automated daily sales report generation and email delivery, significantly reducing manual work for the Marketing Division.",
            id: "<b>Automation:</b> Mengotomatiskan pembuatan laporan penjualan harian dan pengiriman email, secara signifikan mengurangi pekerjaan manual untuk Divisi Marketing.",
          },
          {
            en: "<b>Full-Cycle Development:</b> Managed the full development lifecycle, from payment gateway integration to application deployment in production environments.",
            id: "<b>Full-Cycle Development:</b> Mengelola seluruh siklus pengembangan, dari integrasi payment gateway hingga deployment aplikasi di lingkungan production.",
          },
        ],
        tags: [
          "PHP",
          "Laravel",
          "Vue.js",
          "Full Stack",
          "Payment Gateway",
          "Automation",
        ],
      },
      {
        title: { en: "IT Support", id: "IT Support" },
        company: "CRONOS ERP",
        location: "Cirebon",
        period: { en: "Dec 2017 – Aug 2018", id: "Des 2017 – Agu 2018" },
        duties: [
          {
            en: "<b>Implementation &amp; Training:</b> Introduced the Cronos ERP system to users, providing hands-on training and creating comprehensive user guides.",
            id: "<b>Implementation &amp; Training:</b> Memperkenalkan sistem Cronos ERP kepada pengguna, memberikan pelatihan langsung dan membuat panduan pengguna yang komprehensif.",
          },
          {
            en: "<b>Feedback Loop:</b> Collected user feedback and reported technical requirements to the development manager to drive system improvements.",
            id: "<b>Feedback Loop:</b> Mengumpulkan feedback pengguna dan melaporkan kebutuhan teknis kepada manajer pengembangan untuk mendorong peningkatan sistem.",
          },
          {
            en: "<b>Troubleshooting:</b> Resolved on-site application issues and ensured system stability for daily operations.",
            id: "<b>Troubleshooting:</b> Menyelesaikan masalah aplikasi di lokasi dan memastikan stabilitas sistem untuk operasi harian.",
          },
        ],
        tags: ["ERP", "IT Support", "Documentation", "User Training"],
      },
    ],
  },
  education: {
    title: { en: "Education", id: "Pendidikan" },
    school: { en: "STMIK IKMI CIREBON", id: "STMIK IKMI CIREBON" },
    degree: {
      en: "Bachelor of Informatics Engineering",
      id: "Sarjana Teknik Informatika",
    },
    info: { en: "Graduated February 2021", id: "Lulus Februari 2021" },
  },
  contact: {
    title: { en: "Contact", id: "Kontak" },
  },
  footer: {
    builtWith: { en: "Built with", id: "Dibuat dengan" },
  },
};
