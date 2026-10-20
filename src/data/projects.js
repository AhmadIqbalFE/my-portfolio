import amdShopImage from "../assets/images/img1.png";
import coffeeImage from "../assets/images/img3.png";
import amdTablet from "../assets/images/img5.jpg";
import amdMobile from "../assets/images/img4.jpg";
import nalarImage from "../assets/images/img6.jpg";
import nalartablet from "../assets/images/img7.jpg";
import nalarMobile from "../assets/images/img8.jpg";
import coffeeProject from "../assets/images/img9.jpg";
import coffeeMockup from "../assets/images/img10.jpg";
import FitnessImage from "../assets/images/img11.jpg";
import FitnessMockup from "../assets/images/img12.jpg";
import FitnessMobile from "../assets/images/img13.jpg";
import Dirganmock from "../assets/images/img14.jpg";
import DirganUI from "../assets/images/img15.jpg";
import DirganDesign from "../assets/images/img16.jpg";

export const projects = [
  {
    name: "amd_shop",
    type: {
      id: "Full-stack · Komersial",
      en: "Full-stack · E-commerce",
    },
    status: "LIVE",
    stack: ["React", "Tailwind CSS", "Node.js"],
    description: {
      id: "Platform e-commerce dengan alur belanja lengkap mulai dari katalog produk, keranjang, hingga checkout serta dibangun dengan arsitektur full-stack yang rapi dan mudah dikembangkan. Website yang dibangun menggunakan library React untuk bagian frontend, Tailwind CSS untuk styling, dan Node.js untuk bagian backend. Dengan menggunakan teknologi ini, website dapat memberikan pengalaman pengguna yang responsif dan interaktif, serta dapat menangani permintaan pengguna dengan cepat dan efisien. Kedepannya saya akan menambahkan fitur payment gateway, history order & payment hingga API integrated dengan marketplace serta Dashboard admin untuk mengelola produk, pesanan, dan pelanggan.",
      en: "E-commerce platform with a complete shopping flow from product catalog, cart, to checkout and built with a clean and easy-to-develop full-stack architecture. The website is built using the React library for the frontend, Tailwind CSS for styling, and Node.js for the backend. By using this technology, the website can provide a responsive and interactive user experience, as well as handle user requests quickly and efficiently. In the future, I will add payment gateway features, order & payment history, API integration with marketplaces, and an admin dashboard to manage products, orders, and customers.",
    },
    images: [amdShopImage, amdMobile, amdTablet],
    link: "https://amdshop.vercel.app/",
  },

  {
    name: "CASHin",
    type: {
      id: "Frontend · Keuangan",
      en: "Frontend · Finance",
    },
    status: "LIVE",
    stack: ["React", "Tailwind CSS"],
    description: {
      id: "CASHin adalah aplikasi mobile yang saya kembangkan berguna untuk pencatatan keuangan yang dirancang untuk mengatur pola pemasukan dan pengeluaran sehari-hari, agar pengguna dapat memantau pemasukan dan pengeluaran mereka dari transaksi sehari hari hingga transfer digital. CASHin memiliki fitur tracking pengeluaran, pengingat tagihan, dan laporan keuangan yang dapat membantu pengguna mengelola keuangan mereka dengan lebih baik. Dengan menggunakan CASHin, pengguna dapat lebih mudah mengatur keuangan mereka dan membuat keputusan finansial yang lebih bijak. Finance app ini menggunakan react untuk bagian frontend dan Tailwind CSS untuk styling, sehingga memberikan pengalaman pengguna yang responsif dan interaktif. Untuk bagian pengelolaan data pengguna disini saya menggunakan supabase untuk pengelolaan database pengguna.",
      en: "CASHin is a mobile application I developed useful for financial tracking, designed to manage daily income and expense patterns, allowing users to monitor their income and expenses from daily transactions to digital transfers. CASHin has features for expense tracking, bill reminders, and financial reports that can help users better manage their finances. With CASHin, users can more easily manage their finances and make more informed financial decisions. This finance app uses React for the frontend and Tailwind CSS for styling, providing a responsive and interactive user experience. For user data management, I use Supabase for database management.",
    },
    images: [amdShopImage, amdMobile, amdTablet],
    link: "https://cashin.vercel.app/",
  },

  {
    name: "Coffeeshop Design",
    type: {
      id: "Desain UI · Transaksional",
      en: "UI Design · Transactional",
    },
    status: "Prototype",
    stack: ["Figma", "Adobe Illustrator"],
    description: {
      id: "Sebuah UI design mobile app, yang dirancang untuk memudahkan penikmat kopi dalam memesan kopi di kedai kopi favorit mereka, di desain seminimalis mungkin agar ketika pengguna menggunakan mobile app tersebut mengerti workflow dari sistem aplikasi tersebut. CTA button yang jelas membuat aplikasi ini user friendly dari kalangan muda hingga kalangan tua. Kedepannya saya akan develop design ui yang lebih interaktif dengan system architecture yang lebih baik dari design sebelumnya.",
      en: "A mobile app UI design that aims to make it easier for coffee lovers to order coffee at their favorite coffee shops. The design is kept as minimal as possible so that users can easily understand the workflow of the application. Clear CTA buttons make this app user-friendly for both young and older users. In the future, I will develop a more interactive UI design with a better system architecture than the previous design.",
    },
    images: [coffeeImage, coffeeProject, coffeeMockup],
    link: "https://www.figma.com/design/tJY7V2KoUVPlb1okU6AaDD/Design-Coffee-Shop?node-id=0-1&t=hSH4v13Xz2dDyEOR-1",
  },

  {
    name: "Nalar.",
    type: {
      id: "Aplikasi Web AI · Proyek Kelompok",
      en: "AI Web App · Group Project",
    },
    status: "LIVE",
    stack: ["HTML", "CSS", "JavaScript"],
    description: {
      id: "Nalar. adalah Web berbasis AI yang membantu mendeteksi dan mengukur tingkat minat belajar terhadap anak-anak, dan dapat memberikan rekomendasi materi pembelajaran yang sesuai dengan minat mereka. Di web ini kita dapat melakukan tes yang berguna untuk mengukur tingkat minat belajar anak anak. Dengan adanya hasil score yang dihasilkan saat menjalankan tes tersebut, maka AI akan membuat panduan sampai metode pembelajaran yang cocok dari individu setiap anak. Setiap anak akan mendapatkan metode pembelajaran yang berbeda beda dengan dasar dari hasil score tes dan AI akan mengakumulasikan hasil score tersebut dengan data yang telah dikumpulkan oleh AI tentang berbagai macam metode pembelajaran yang efektif. Web ini merupakan tugas group project yang dikerjakan saat kuliah.",
      en: "Nalar. is an AI-based web application that helps detect and measure the learning interest level of children and provides suitable learning material recommendations. On this website, we can conduct useful tests to measure children's learning interest. With the results generated from these tests, the AI will create guidelines and suitable learning methods for each child. Each child will receive a different learning approach based on their test scores, and the AI will accumulate these scores with data collected about various effective learning methods. This website is a group project task completed during college.",
    },
    images: [nalarImage, nalartablet, nalarMobile],
    link: "https://nalar.netlify.app/",
  },

  {
    name: "UI Design Fitness App",
    type: {
      id: "Desain UI · Olahraga & Kebugaran",
      en: "UI Design · Sports & Fitness",
    },
    status: "Prototype",
    stack: ["Figma", "Photoshop", "React Native"],
    description: {
      id: "Merupakan model design fitness app yang akan saya bangun kedepannya. Untuk saat ini masih dalam tahap model UI design, fitness app ini akan menampilkan fitur tracking training daily, rekomendasi latihan harian, challenge daily hingga fitur monitoring kalori dan mineral yang dibutuhkan tubuh. Dengan adanya fitur login, homepage, schedule page, training page, dan report page membuat pengalaman pengguna dalam menggunakan aplikasi tersebut terasa nyaman dan interaktif.",
      en: "This is a prototype design for a fitness app that I plan to develop in the future. Currently, it is in the UI design phase, and this fitness app will display features such as daily training tracking, daily exercise recommendations, daily challenges, and calorie and mineral monitoring. With features like login, homepage, schedule page, training page, and report page, the user experience when using this application will be comfortable and interactive.",
    },
    images: [FitnessImage, FitnessMockup, FitnessMobile],
    link: "https://www.figma.com/design/yscSqEgxlDzcSOQa2J6zS3/Fitness-App?node-id=0-1&t=1KR7daWrarg27Auy-1",
  },

  {
    name: "Re-modelling UI Design Website Dirgantara",
    type: {
      id: "Desain UI · Website Pemerintah",
      en: "UI Design · Government Website",
    },
    status: "Prototype",
    stack: ["Figma", "Corel Draw"],
    description: {
      id: "Merupakan hasil re-design dari website dirgantara, yang dimana saya re-modelling seperti navigation bar, layout modal box content, hingga warna dan font yang digunakan dalam website dirgantara, yang bertujuan agar pengunjung website lebih mengerti dan paham apa yang disampaikan dalam website tersebut dengan peletakan CTA button yang jelas dan optimal. Re-design ini merupakan tes ketika melamar intern UI/UX Designer di suatu perusahaan, yaitu salah satu tes nya adalah re-design website dan saya memutuskan untuk mengambil website dirgantara sebagai website yang akan re-design. Di website sebelumnya navigation bar yang kurang jelas, layout images hingga box container yang masig berantakan dan CTA button yang masih kurang jelas menjadi salah satu alasan saya untuk memilih website dirgantara menjadi objek UI redesign saya.",
      en: "This is a prototype design for a government website that I have redesigned. The redesign includes modifications to the navigation bar, modal box content layout, and the colors and fonts used on the website. The goal is to make it easier for visitors to understand and comprehend the information presented on the site with clear and optimal CTA button placement. This redesign was part of a test when applying for an intern position as a UI/UX Designer at a company. The test involved redesigning a website, and I chose the Dirgantara website for this task. In the previous version of the site, the navigation bar was unclear, the image layout and box containers were messy, and the CTA buttons were not clearly defined, which led me to select the Dirgantara website as my UI redesign project.",
    },
    images: [Dirganmock, DirganUI, DirganDesign],
    link: "https://www.figma.com/design/waMux9RfgS2ADPE1dUI64h/Redesign-PT-Dirgantara-Indonesia?node-id=0-1&t=4OjrQqYk3SlzZiJS-1",
  },
];
