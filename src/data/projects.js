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

export const projects = [
  {
    name: "amd_shop",
    type: "Full-stack · E-commerce",
    status: "LIVE",
    stack: ["React", "Tailwind CSS", "Node.js"],
    description:
      "Platform e-commerce dengan alur belanja lengkap mulai dari katalog produk, keranjang, hingga checkout serta dibangun dengan arsitektur full-stack yang rapi dan mudah dikembangkan. Website yang dibangun menggunakan library React untuk bagian frontend, Tailwind CSS untuk styling, dan Node.js untuk bagian backend. Dengan menggunakan teknologi ini, website dapat memberikan pengalaman pengguna yang responsif dan interaktif, serta dapat menangani permintaan pengguna dengan cepat dan efisien. Kedepannya saya akan menambahkan fitur payment gateway, history order & payment hingga API integrated dengan marketplace serta Dashboard admin untuk mengelola produk, pesanan, dan pelanggan.",
    images: [amdShopImage, amdMobile, amdTablet],
    link: "https://amdshop.vercel.app/",
  },

  {
    name: "CASHin",
    type: "Frontend · Finance",
    status: "LIVE",
    stack: ["React", "Tailwind CSS"],
    description:
      "CASHin adalah aplikasi mobile yang saya kembangkan berguna untuk pencatatan keuangan yang dirancang untuk mengatur pola pemasukan dan pengeluaran sehari-hari, agar pengguna dapat memantau pemasukan dan pengeluaran mereka dari transaksi sehari hari hingga transfer digital. CASHin memiliki fitur tracking pengeluaran, pengingat tagihan, dan laporan keuangan yang dapat membantu pengguna mengelola keuangan mereka dengan lebih baik. Dengan menggunakan CASHin, pengguna dapat lebih mudah mengatur keuangan mereka dan membuat keputusan finansial yang lebih bijak. Finance app ini menggunakan react untuk bagian frontend dan Tailwind CSS untuk styling, sehingga memberikan pengalaman pengguna yang responsif dan interaktif. Untuk bagian pengelolaan data pengguna disini saya menggunakan supabase untuk pengelolaan database pengguna.",
    images: [amdShopImage, amdMobile, amdTablet],
    link: "https://cashin.vercel.app/",
  },

  {
    name: "Coffeeshop Design",
    type: "UI Design · transactional",
    status: "Prototype",
    stack: ["Figma", "Adobe Illustrator"],
    description:
      "Sebuah UI design mobile app, yang dirancang untuk memudahkan penikmat kopi dalam memesan kopi di kedai kopi favorit mereka, di desain seminimalis mungkin agar ketika pengguna menggunakan mobile app tersebut mengerti workflow dari sistem aplikasi tersebut. CTA button yang jelas membuat aplikasi ini user friendly dari kalangan muda hingga kalangan tua. Kedepannya saya akan develop design ui yang lebih interaktif dengan system architecture yang lebih baik dari design sebelumnya.",
    images: [coffeeImage, coffeeProject, coffeeMockup],
    link: "https://www.figma.com/design/tJY7V2KoUVPlb1okU6AaDD/Design-Coffee-Shop?node-id=0-1&t=hSH4v13Xz2dDyEOR-1",
  },

  {
    name: "Nalar.",
    type: "AI Web App · Group Project",
    status: "LIVE",
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "Nalar. adalah Web berbasis AI yang membantu mendeteksi dan mengukur tingkat minat belajar terhadap anak-anak, dan dapat memberikan rekomendasi materi pembelajaran yang sesuai dengan minat mereka. Di web ini kita dapat ",
    images: [nalarImage, nalartablet, nalarMobile],
    link: "https://nalar.netlify.app/",
  },

  {
    name: "UI Design Fitness App",
    type: "Design UI · Sports & Fitness",
    status: "Prototype",
    stack: ["Figma", "Photoshop"],
    description:
      "Web berbasis AI yang membantu mendeteksi dan mengukur tingkat minat belajar terhadap anak-anak, dan dapat memberikan rekomendasi materi pembelajaran yang sesuai dengan minat mereka.",
    images: [FitnessImage, FitnessMockup, FitnessMobile],
    link: "https://www.figma.com/design/yscSqEgxlDzcSOQa2J6zS3/Fitness-App?node-id=0-1&t=1KR7daWrarg27Auy-1",
  },
];
