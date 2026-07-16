const translations = {
  nav: {
    about: { en: "About", id: "Tentang" },
    skills: { en: "Skills", id: "Keahlian" },
    experience: { en: "Experience", id: "Pengalaman" },
    education: { en: "Education", id: "Pendidikan" },
    contact: { en: "Contact", id: "Kontak" },
    portfolio: { en: "Portfolio", id: "Portofolio" },
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
      en: "Building scalable and secure backends with 5+ years of experience in microservices and APIs.",
      id: "Membangun backend yang scalable dan aman dengan 5+ tahun pengalaman dalam microservices dan API.",
    },
    location: { en: "Bandung, Indonesia", id: "Bandung, Indonesia" },
    downloadResume: { en: "Download Resume", id: "Unduh Resume" },
    viewExperience: { en: "View Experience", id: "Lihat Pengalaman" },
    contactMe: { en: "Contact Me", id: "Hubungi Saya" },
  },
  about: {
    title: { en: "About Me", id: "Tentang Saya" },
    text: {
      en: "Back-End Developer with over 5 years of experience in the IT industry, specializing in building scalable systems with Laravel. Proven expertise in developing RESTful APIs within microservices architectures, integrating payment gateways, and automating business processes. Adept at collaborating in Agile environments and bridging the gap between product requirements and technical execution. Currently expanding expertise into Node.js and Golang, and capable of taking on front-end tasks when needed.",
      id: "Back-End Developer dengan pengalaman lebih dari 5 tahun di industri IT, spesialis dalam membangun sistem yang scalable menggunakan Laravel. Memiliki keahlian teruji dalam pengembangan RESTful API dengan arsitektur microservices, integrasi payment gateway, dan otomasi proses bisnis. Terbiasa bekerja dalam lingkungan Agile serta mampu menjembatani kebutuhan produk dengan eksekusi teknis yang efisien. Saat ini sedang memperluas keahlian ke Node.js dan Golang, serta siap mengerjakan tugas front-end jika dibutuhkan.",
    },
    seePortfolio: { en: "See My Portfolio", id: "Lihat Portofolio Saya" },
  },
  skills: {
    title: { en: "Skills", id: "Keahlian" },
    tags: [
      "PHP",
      "Laravel",
      "Python",
      "JavaScript",
      "Vue.js",
      "Go",
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
        company: "PT RAKSASA KINERJA DIGITAL INDONESIA",
        location: "Bandung",
        period: { en: "June 2022 – Present", id: "Juni 2022 – Sekarang" },
        duties: [
          {
            en: "<b>Technical &amp; Database Design:</b> Designed database schemas and technical logic flows (such as payment systems) to meet feature requirements from PRD.",
            id: "<b>Technical &amp; Database Design:</b> Merancang skema database dan alur logika teknis (seperti sistem pembayaran) untuk memenuhi kebutuhan fitur dari PRD.",
          },
          {
            en: "<b>API &amp; Microservices:</b> Developed and maintained robust RESTful APIs using PHP and Laravel within a microservices architecture to ensure high system scalability.",
            id: "<b>API &amp; Microservices:</b> Mengembangkan dan memelihara RESTful API yang kuat menggunakan PHP dan Laravel dalam arsitektur microservices untuk memastikan skalabilitas sistem yang tinggi.",
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
            en: "<b>Code Review:</b> Performed consistent Pull Request (PR) reviews to ensure code maintainability, adherence to best practices, and knowledge sharing across the development team.",
            id: "<b>Code Review:</b> Melakukan Pull Request (PR) reviews secara konsisten untuk memastikan maintainability kode, kepatuhan terhadap best practices, dan berbagi pengetahuan di seluruh tim pengembangan.",
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
  portfolio: {
    title: { en: "Portfolio", id: "Portofolio" },
    viewProject: { en: "View Project", id: "Lihat Proyek" },
    intro: {
      en: "A collection of projects I've built.",
      id: "Kumpulan proyek yang telah saya bangun.",
    },
    downloadPdf: { en: "Download Portofolio", id: "Unduh Portofolio" },
    projects: [
      {
        title: {
          en: "Car Rental Management System",
          id: "Car Rental Management System",
        },
        description: {
          en: "This school project helps manage daily car rental operations. It was built with CodeIgniter and MySQL, and includes a responsive admin dashboard to manage car data, customer information, and transactions.",
          id: "Proyek sekolah untuk mengelola operasional penyewaan kendaraan harian. Dibangun dengan CodeIgniter dan MySQL, mencakup dasbor admin responsif untuk manajemen data mobil, informasi pelanggan, dan transaksi.",
        },
        role: {
          en: "Full-Stack Developer",
          id: "Full-Stack Developer",
        },
        challenge: {
          en: "Use codeigniter for complete project.",
          id: "Menggunakan CodeIgniter untuk proyek lengkap pertama kali.",
        },
        tags: [
          "PHP",
          "CodeIgniter",
          "MySQL",
          "HTML",
          "CSS",
          "JavaScript",
          "Bootstrap",
          "jQuery",
        ],
        image: "images/projects/car-rental.png",
      },
      {
        title: {
          en: "Tukubuku - Online Book Store",
          id: "Tukubuku - Online Book Store",
        },
        description: {
          en: "A school project developing an e-commerce platform for online book sales. Includes an admin dashboard to manage products, customer orders, and transactions, designed to be user-friendly for both admins and customers.",
          id: "Proyek sekolah berupa platform e-commerce untuk penjualan buku online. Dilengkapi dasbor admin untuk mengelola produk, pesanan pelanggan, dan transaksi, dirancang agar mudah digunakan oleh admin maupun pelanggan.",
        },
        role: {
          en: "Full-Stack Developer",
          id: "Full-Stack Developer",
        },
        challenge: {
          en: "Implementing complete transaction process with advance sql query and security.",
          id: "Mengimplementasikan proses transaksi lengkap dengan query SQL tingkat lanjut dan keamanan data.",
        },
        tags: [
          "PHP",
          "CodeIgniter",
          "MySQL",
          "HTML",
          "CSS",
          "JavaScript",
          "Bootstrap",
          "jQuery",
        ],
        image: "images/projects/tukubuku.png",
      },
      {
        title: {
          en: "HIS - Health Information System",
          id: "HIS - Health Information System",
        },
        description: {
          en: "A Hospital Information System (HIS). Focused on enhancing the inpatient management module to improve hospital operations.",
          id: "Sistem Informasi Rumah Sakit (HIS). Berfokus pada pengembangan modul manajemen rawat inap untuk meningkatkan operasional rumah sakit.",
        },
        role: {
          en: "Full-Stack Developer",
          id: "Full-Stack Developer",
        },
        challenge: {
          en: "First time using Laravel and PostgreSQL.",
          id: "Pertama kali menggunakan Laravel dan PostgreSQL.",
        },
        tags: [
          "PHP",
          "Laravel",
          "PostgreSQL",
          "HTML",
          "CSS",
          "JavaScript",
          "Bootstrap",
          "jQuery",
        ],
        image: "images/projects/his.png",
      },
      {
        title: {
          en: "SIPPI",
          id: "SIPPI",
        },
        description: {
          en: "An Infection Prevention and Control (PPI) information system for hospitals, designed to manage and track hospital-acquired infection data.",
          id: "Sistem informasi Pencegahan dan Pengendalian Infeksi (PPI) untuk rumah sakit, dirancang untuk mengelola dan melacak data infeksi yang terjadi di lingkungan rumah sakit.",
        },
        role: {
          en: "Full-Stack Developer",
          id: "Full-Stack Developer",
        },
        challenge: {
          en: "First-time requirement design for hospital PPI needs, database schema design, and full feature implementation.",
          id: "Pertama kali merancang kebutuhan sistem PPI rumah sakit, desain skema database, dan implementasi fitur secara penuh.",
        },
        tags: [
          "PHP",
          "Laravel",
          "MySQL",
          "HTML",
          "CSS",
          "JavaScript",
          "Bootstrap",
          "jQuery",
        ],
        image: "images/projects/sippi.png",
      },
      {
        title: {
          en: "Mountoya B2B",
          id: "Mountoya B2B",
        },
        description: {
          en: "A B2B e-commerce platform for corporate vendor procurement and purchase order (PO) management. Features automated procurement workflows and Midtrans Payment Gateway integration for corporate transactions.",
          id: "Platform e-commerce B2B untuk pengadaan vendor korporat dan manajemen purchase order (PO). Dilengkapi alur pengadaan otomatis dan integrasi Payment Gateway Midtrans untuk transaksi bisnis.",
        },
        role: {
          en: "Backend Developer",
          id: "Backend Developer",
        },
        challenge: {
          en: "Implement Payment Gateway integration.",
          id: "Mengimplementasikan integrasi Payment Gateway.",
        },
        tags: [
          "PHP",
          "Lumen",
          "MySQL",
          "HTML",
          "CSS",
          "JavaScript",
          "Bootstrap",
          "jQuery",
          "AngularJS",
          "TypeScript",
        ],
        image: "images/projects/mountoya-b2b.png",
      },
      {
        title: {
          en: "Mountoya ToDo",
          id: "Mountoya ToDo",
        },
        description: {
          en: "A task management system for employees, used to monitor daily to-do lists and measure Key Performance Indicators (KPIs).",
          id: "Sistem manajemen tugas untuk karyawan, digunakan untuk memantau daftar tugas harian dan mengukur Key Performance Indicators (KPI).",
        },
        role: {
          en: "Frontend Developer",
          id: "Frontend Developer",
        },
        challenge: {
          en: "First Single Page Application (SPA) and first professional use of Vue.js.",
          id: "Pertama kali membangun Single Page Application (SPA) dan penggunaan Vue.js secara profesional.",
        },
        tags: ["JavaScript", "Vue.js", "Axios", "Bootstrap"],
        image: "images/projects/mountoya-todo.png",
      },
      {
        title: {
          en: "Mountoya CRM",
          id: "Mountoya CRM",
        },
        description: {
          en: "A customer complaint management system for receiving, tracking, and resolving feedback from both online and conventional retail channels.",
          id: "Sistem manajemen keluhan pelanggan untuk menerima, melacak, dan menyelesaikan masukan dari saluran penjualan online maupun konvensional.",
        },
        role: {
          en: "Frontend Developer",
          id: "Frontend Developer",
        },
        tags: ["JavaScript", "Vue.js", "Axios", "Bootstrap"],
        image: "images/projects/mountoya-crm.png",
      },
      {
        title: {
          en: "Mountoya Penjualan Online",
          id: "Mountoya Penjualan Online",
        },
        description: {
          en: "A dashboard to manage online sales, centralizing e-commerce transactions, financial tracking, and reporting. Includes vending machine monitoring and GIS-based territory mapping via Google Maps API.",
          id: "Dasbor untuk mengelola penjualan online, memusatkan transaksi e-commerce, pelacakan keuangan, dan pelaporan. Dilengkapi pemantauan vending machine dan pemetaan wilayah berbasis GIS melalui Google Maps API.",
        },
        role: {
          en: "Full-Stack Developer",
          id: "Full-Stack Developer",
        },
        challenge: {
          en: "Rewriting an existing native PHP application into Laravel.",
          id: "Menulis ulang aplikasi PHP native yang sudah ada ke dalam framework Laravel.",
        },
        tags: [
          "PHP",
          "Laravel",
          "MySQL",
          "HTML",
          "CSS",
          "JavaScript",
          "Bootstrap",
          "jQuery",
          "Google Maps API",
        ],
        image: "images/projects/mountoya-penjualan-online.png",
      },
      {
        title: {
          en: "Mountoya Penjualan Konvensional",
          id: "Mountoya Penjualan Konvensional",
        },
        description: {
          en: "An integrated Enterprise Resource Planning (ERP) system for managing conventional sales operations, inventory, and finance.",
          id: "Sistem Enterprise Resource Planning (ERP) terpadu untuk mengelola operasional penjualan konvensional, inventaris, dan keuangan.",
        },
        role: {
          en: "Full-Stack Developer",
          id: "Full-Stack Developer",
        },
        tags: [
          "PHP",
          "Laravel",
          "MySQL",
          "HTML",
          "CSS",
          "JavaScript",
          "Bootstrap",
          "jQuery",
          "Cronjob",
        ],
        image: "images/projects/mountoya-penjualan-konvensional.png",
      },
      {
        title: {
          en: "SITOYA",
          id: "SITOYA",
        },
        description: {
          en: "An internal business system for company finance, Human Resources (HR), and inventory management.",
          id: "Sistem bisnis internal perusahaan untuk manajemen keuangan, Sumber Daya Manusia (SDM), dan inventaris.",
        },
        role: {
          en: "Full-Stack Developer",
          id: "Full-Stack Developer",
        },
        challenge: {
          en: "First implementation of finance features and business logic design for a finance module.",
          id: "Pertama kali mengimplementasikan fitur keuangan dan merancang business logic untuk modul finance.",
        },
        tags: [
          "PHP",
          "Laravel",
          "MySQL",
          "HTML",
          "CSS",
          "JavaScript",
          "Bootstrap",
          "jQuery",
          "Cronjob",
        ],
        image: "images/projects/sitoya.png",
      },
      {
        title: {
          en: "Mountoya App",
          id: "Mountoya App",
        },
        description: {
          en: "A mobile app enabling users to browse and purchase Mountoya mineral water products. Automatically connects users to the nearest driver and storage based on location distance.",
          id: "Aplikasi mobile yang memungkinkan pengguna menelusuri dan membeli produk air mineral Mountoya. Secara otomatis menghubungkan pengguna ke driver dan gudang terdekat berdasarkan jarak lokasi.",
        },
        role: {
          en: "Backend Developer",
          id: "Backend Developer",
        },
        challenge: {
          en: "Calculating distance to dynamically connect users to the nearest driver and storage.",
          id: "Menghitung jarak untuk menghubungkan pengguna secara dinamis ke driver dan gudang terdekat.",
        },
        tags: ["PHP", "Laravel", "MySQL", "Flutter", "Payment Gateway"],
        image: "images/projects/mountoya-app.png",
        link: "https://play.google.com/store/apps/details?id=id.co.mountoya.delivery&hl=id",
      },
      {
        title: {
          en: "AELITE",
          id: "AELITE",
        },
        description: {
          en: "A large-scale application with multiple modules, including Order, Finance, and Report.",
          id: "Aplikasi skala besar dengan banyak modul, termasuk modul Order, Keuangan, dan Laporan.",
        },
        role: {
          en: "Full-Stack Developer",
          id: "Full-Stack Developer",
        },
        challenge: {
          en: "Designing the database schema across many modules and defining business logic for finance and reporting features.",
          id: "Merancang skema database untuk banyak modul dan mendefinisikan business logic untuk fitur keuangan dan pelaporan.",
        },
        tags: ["Laravel", "MySQL", "Redis", "GIS", "Payment Gateway"],
        image: "images/projects/aelite-web.png",
      },
      {
        title: {
          en: "AELITE Mobile App",
          id: "AELITE Mobile App",
        },
        description: {
          en: "Backend API services for the AELITE mobile application, supporting real-time features and complex integrations.",
          id: "Layanan backend API untuk aplikasi mobile AELITE, mendukung fitur real-time dan berbagai integrasi yang kompleks.",
        },
        role: {
          en: "Backend Developer",
          id: "Backend Developer",
        },
        challenge: {
          en: "Slow development pace due to frequent changes in business flow requirements.",
          id: "Kecepatan pengembangan terhambat akibat seringnya perubahan kebutuhan alur bisnis.",
        },
        tags: [
          "Laravel",
          "MySQL",
          "Redis",
          "Firebase",
          "GIS",
          "Socket.IO",
          "Elasticsearch",
          "Payment Gateway",
        ],
        image: "images/projects/aelite-app.png",
      },
      {
        title: {
          en: "School Management System",
          id: "School Management System",
        },
        description: {
          en: "A personal project for managing student data, digital report cards (E-Raport), and student attendance.",
          id: "Proyek pribadi untuk mengelola data siswa, rapor digital (E-Raport), dan kehadiran siswa.",
        },
        role: {
          en: "Full-Stack Developer",
          id: "Full-Stack Developer",
        },
        tags: [
          "Laravel",
          "MySQL",
          "HTML",
          "CSS",
          "JavaScript",
          "Bootstrap",
          "jQuery",
        ],
        image: "images/projects/school-management-system.png",
      },
      {
        title: {
          en: "Gajicermat",
          id: "Gajicermat",
        },
        description: {
          en: "An HR and payroll system designed to manage employee data, attendance, leave requests, and salary disbursements in one place.",
          id: "Sistem HR dan penggajian yang dirancang untuk mengelola data karyawan, kehadiran, pengajuan cuti, dan pencairan gaji dalam satu platform.",
        },
        role: {
          en: "Backend Developer",
          id: "Backend Developer",
        },
        challenge: {
          en: "Translate payroll calculation rules like tax, bpjs, etc into code",
          id: "Menerjemahkan aturan perhitungan penggajian seperti pajak, BPJS, dll ke dalam kode program.",
        },
        tags: [
          "PHP",
          "Laravel",
          "MySQL",
          "Redis",
          "Firebase",
          "Laravel Queue",
          "Cronjob",
          "Payment Gateway",
        ],
        image: "images/projects/gajicermat.png",
        link: "https://www.gajicermat.com",
      },
      {
        title: {
          en: "KerjaCermat",
          id: "KerjaCermat",
        },
        description: {
          en: "An employee application to view payslips, attendance records, and submit leave requests. Empowers employees with self-service access to payroll.",
          id: "Aplikasi karyawan untuk melihat slip gaji, rekap kehadiran, dan mengajukan cuti. Memberdayakan karyawan dengan akses mandiri ke sistem penggajian.",
        },
        role: {
          en: "Backend Developer",
          id: "Backend Developer",
        },
        challenge: {
          en: "Implement face recognition attendance, strict GPS tracking for attendance.",
          id: "Mengimplementasikan absensi berbasis pengenalan wajah dan pelacakan GPS ketat untuk kehadiran.",
        },
        tags: ["PHP", "Laravel", "MySQL", "Redis", "Firebase"],
        image: "images/projects/kerjacermat-app.png",
        link: "https://play.google.com/store/apps/details?id=com.uangcermat.kerjacermatess&hl=id",
      },
      {
        title: {
          en: "PeopleNote",
          id: "PeopleNote",
        },
        description: {
          en: "An enhanced version of Gajicermat, expanding HR and payroll capabilities with additional features and improved performance.",
          id: "Versi lanjutan dari Gajicermat, memperluas kemampuan HR dan penggajian dengan fitur tambahan dan peningkatan performa.",
        },
        role: {
          en: "Backend Developer",
          id: "Backend Developer",
        },
        tags: [
          "PHP",
          "Laravel",
          "MySQL",
          "Redis",
          "Laravel Queue",
          "Cronjob",
          "Payment Gateway",
        ],
        image: "images/projects/peoplenote.png",
      },
      {
        title: {
          en: "Agenku Web",
          id: "Agenku Web",
        },
        description: {
          en: "A web application for managing activity of an agent. User can view list of activity, assign to agent, and view agent activity with location tracking",
          id: "Aplikasi web untuk mengelola aktivitas agen. Pengguna dapat melihat daftar aktivitas, menugaskan ke agen, dan memantau aktivitas agen beserta pelacakan lokasi.",
        },
        role: {
          en: "Backend Developer",
          id: "Backend Developer",
        },
        tags: ["PHP", "Laravel", "MySQL", "Redis"],
        image: "images/projects/agenku-web.png",
      },
      {
        title: {
          en: "Agenku App",
          id: "Agenku App",
        },
        description: {
          en: "A mobile application for submit and track field activity of agents, sales team, and manager.",
          id: "Aplikasi mobile untuk melaporkan dan memantau aktivitas lapangan agen, tim sales, dan manajer.",
        },
        role: {
          en: "Backend Developer",
          id: "Backend Developer",
        },
        tags: ["PHP", "Laravel", "MySQL", "Redis"],
        image: "images/projects/agenku-app.png",
        link: "https://play.google.com/store/apps/details?id=com.uangcermat.agenku&hl=id",
      },
      {
        title: {
          en: "Rapiku Web",
          id: "Rapiku Web",
        },
        description: {
          en: "A web application for cleaning service providers. User can manage cleaning service activity.",
          id: "Aplikasi web untuk penyedia layanan kebersihan. Pengguna dapat mengelola aktivitas layanan kebersihan.",
        },
        role: {
          en: "Backend Developer",
          id: "Backend Developer",
        },
        tags: ["PHP", "Laravel", "MySQL", "Redis", "Firebase"],
        image: "images/projects/rapiku-web.png",
      },
      {
        title: {
          en: "Rapiku App",
          id: "Rapiku App",
        },
        description: {
          en: "A mobile application for user to submit cleaning service activity.",
          id: "Aplikasi mobile bagi pengguna untuk melaporkan aktivitas layanan kebersihan.",
        },
        role: {
          en: "Backend Developer",
          id: "Backend Developer",
        },
        tags: ["PHP", "Laravel", "MySQL", "Redis", "Firebase"],
        image: "images/projects/rapiku-app.png",
        link: "https://play.google.com/store/apps/details?id=com.uangcermat.rapiku&hl=id",
      },
      {
        title: {
          en: "Gardaku Web",
          id: "Gardaku Web",
        },
        description: {
          en: "A web application for managing security guard activity.",
          id: "Aplikasi web untuk mengelola aktivitas petugas keamanan.",
        },
        role: {
          en: "Backend Developer",
          id: "Backend Developer",
        },
        tags: ["PHP", "Laravel", "MySQL", "Redis", "Firebase"],
        image: "images/projects/gardaku-web.png",
      },
      {
        title: {
          en: "Gardaku App",
          id: "Gardaku App",
        },
        description: {
          en: "A mobile application for user to submit security guard request.",
          id: "Aplikasi mobile bagi pengguna untuk mengajukan permintaan petugas keamanan.",
        },
        role: {
          en: "Backend Developer",
          id: "Backend Developer",
        },
        tags: ["PHP", "Laravel", "MySQL", "Redis", "Firebase"],
        image: "images/projects/gardaku-app.png",
        link: "https://play.google.com/store/apps/details?id=com.uangcermat.rapiku.gardaku&hl=id",
      },
      {
        title: {
          en: "Notaku Web",
          id: "Notaku Web",
        },
        description: {
          en: "A web application for managing note.",
          id: "Aplikasi web untuk mengelola catatan.",
        },
        role: {
          en: "Backend Developer",
          id: "Backend Developer",
        },
        tags: ["PHP", "Laravel", "MySQL", "Redis", "Firebase"],
        image: "images/projects/notaku-web.png",
      },
      {
        title: {
          en: "Notaku App",
          id: "Notaku App",
        },
        description: {
          en: "A mobile application for user to submit note.",
          id: "Aplikasi mobile bagi pengguna untuk membuat dan mengelola catatan.",
        },
        role: {
          en: "Backend Developer",
          id: "Backend Developer",
        },
        tags: ["PHP", "Laravel", "MySQL", "Redis", "Firebase"],
        image: "images/projects/notaku-app.png",
        link: "https://play.google.com/store/apps/details?id=com.uangcermat.notaku&hl=id",
      },
      {
        title: {
          en: "Aksesku",
          id: "Aksesku",
        },
        description: {
          en: "A mobile app for employees to submit attendance and manage visitor records.",
          id: "Aplikasi mobile bagi karyawan untuk melakukan absensi dan mengelola data pengunjung.",
        },
        role: {
          en: "Backend Developer",
          id: "Backend Developer",
        },
        tags: ["PHP", "Laravel", "MySQL", "Redis"],
        image: "images/projects/aksesku-app.png",
        link: "https://play.google.com/store/apps/details?id=com.uangcermat.aksesku&hl=id",
      },
      {
        title: {
          en: "CollectCermat",
          id: "CollectCermat",
        },
        description: {
          en: "A web admin for managing collecting debt in several ways, like invoice, settlements, etc.",
          id: "Aplikasi web admin untuk mengelola penagihan piutang dengan berbagai metode seperti invoice, settlement, dan lainnya.",
        },
        role: {
          en: "Backend Developer",
          id: "Backend Developer",
        },
        tags: [
          "PHP",
          "Laravel",
          "MySQL",
          "Redis",
          "Laravel Queue",
          "Cronjob",
          "Payment Gateway",
        ],
        image: "images/projects/collectcermat.png",
      },
      {
        title: {
          en: "Sricandy Web",
          id: "Sricandy Web",
        },
        description: {
          en: "A web admin application for managing online sales, inventory, orders, shipments, and reports.",
          id: "Aplikasi web admin untuk mengelola penjualan online, inventaris, pesanan, pengiriman, dan laporan.",
        },
        role: {
          en: "Backend Developer",
          id: "Backend Developer",
        },
        tags: ["PHP", "Laravel", "MySQL", "Laravel Queue", "Firebase", "Redis"],
        image: "images/projects/sricandy-web.png",
      },
      {
        title: {
          en: "Sricandy App",
          id: "Sricandy App",
        },
        description: {
          en: "A mobile e-commerce application for purchasing products online.",
          id: "Aplikasi mobile e-commerce untuk pembelian produk secara online.",
        },
        role: {
          en: "Backend Developer",
          id: "Backend Developer",
        },
        challenge: {
          en: "Implement Algolia search integration, Paypal payment gateway",
          id: "Mengimplementasikan integrasi pencarian Algolia dan payment gateway PayPal.",
        },
        tags: [
          "PHP",
          "Laravel",
          "MySQL",
          "Redis",
          "Firebase",
          "Algolia",
          "Paypal",
        ],
        image: "images/projects/sricandy-app.png",
        link: "https://play.google.com/store/apps/details?id=com.sricandy.sricandy&hl=id",
      },
      {
        title: {
          en: "Event Management REST API",
          id: "Event Management REST API",
        },
        description: {
          en: "A complete REST API for event management, handling registrations, ticket payments, limited ticket slots, check-ins via QR code, and report generation.",
          id: "REST API lengkap untuk manajemen acara, menangani pendaftaran, pembayaran tiket, slot tiket terbatas, check-in via QR code, dan pembuatan laporan.",
        },
        role: {
          en: "Backend Developer",
          id: "Backend Developer",
        },
        challenge: {
          en: "Processing payments via Midtrans/Xendit Webhooks, generating PDF tickets, and background processing with BullMQ.",
          id: "Memproses pembayaran melalui Webhook Midtrans/Xendit, membuat tiket PDF, dan pemrosesan latar belakang dengan BullMQ.",
        },
        tags: [
          "Node.js",
          "Express.js",
          "TypeScript",
          "PostgreSQL",
          "Prisma",
          "Redis",
          "BullMQ",
          "Zod"
        ],
        image: "images/projects/event-restapi.png",
        link: "https://github.com/marifyahya/event-management-rest-api",
      },
    ],
  },
  contact: {
    title: { en: "Contact", id: "Kontak" },
  },
  footer: {
    builtWith: { en: "Built with", id: "Dibuat dengan" },
  },
};
