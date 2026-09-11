import amdShopImage from "../assets/images/img1.png";
import coffeeImage from "../assets/images/img3.png";

export const projects = [
  {
    name: "amd_shop",
    type: "Full-stack · E-commerce",
    status: "LIVE",
    stack: ["React", "Tailwind CSS", "Node.js"],
    description:
      "Platform e-commerce dengan alur belanja lengkap — katalog produk, keranjang, hingga checkout — dibangun dengan arsitektur full-stack yang rapi dan mudah dikembangkan.",
    images: [amdShopImage, coffeeImage],
    link: "https://amdshop.vercel.app/",
  },

  {
    name: "CASHin",
    type: "Frontend · Finance",
    status: "LIVE",
    stack: ["React", "Tailwind CSS"],
    description:
      "Aplikasi pencatatan keuangan pribadi yang dirancang untuk pola pengeluaran sehari-hari ala Indonesia, dari jajan warung sampai transfer digital.",
  },

  {
    name: "Coffeeshop Design",
    type: "UI Design · transactional",
    status: "LIVE",
    stack: ["Figma", "Adobe Illustrator"],
    description:
      "Sebuah UI design mobile app, yang dirancang untuk memudahkan pelanggan dalam memesan kopi di kedai kopi favorit mereka, dengan fokus pada pengalaman pengguna yang intuitif dan visual yang menarik.",
    images: [coffeeImage],
    link: "https://www.figma.com/file/0Z7g1k5J3j3j3j3j3j3j3/Coffeeshop-Design?node-id=0%3A1&t=abc123",
  },

  {
    name: "Nalar.",
    type: "AI Web App · Group Project",
    status: "LIVE",
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "Web berbasis AI yang membantu mendeteksi dan mengukur tingkat minat belajar terhadap anak-anak, dan dapat memberikan rekomendasi materi pembelajaran yang sesuai dengan minat mereka.",
  },
];
