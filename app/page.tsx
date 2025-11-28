"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Stock images from Unsplash (cement, construction, industrial)
const images = {
  hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
  hero2: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80",
  hero3: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80",
  concrete1: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=800&q=80",
  concrete2: "https://images.unsplash.com/photo-1590496793907-51d60c2372f7?w=800&q=80",
  construction1: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  construction2: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  truck: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
  factory: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
  building1: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80",
  building2: "https://images.unsplash.com/photo-1577320998560-df7bc7690723?w=800&q=80",
  building3: "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?w=800&q=80",
  team: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  cement: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80",
  mixer: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
};

// Counter animation hook
function useCounter(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: images.hero,
      title: "Nhà Phân Phối Xi Măng Rời",
      subtitle: "Hàng Đầu Miền Bắc",
    },
    {
      image: images.hero2,
      title: "Đối Tác Tin Cậy",
      subtitle: "Của Các Trạm Trộn Bê Tông",
    },
    {
      image: images.hero3,
      title: "Chất Lượng Đảm Bảo",
      subtitle: "Giao Hàng Nhanh Chóng",
    },
  ];

  // Counter values
  const yearsCount = useCounter(20, 2000, statsVisible);
  const revenueCount = useCounter(300, 2000, statsVisible);
  const partnersCount = useCounter(50, 2000, statsVisible);
  const tonsCount = useCounter(500, 2000, statsVisible);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Check if stats section is visible
      const statsSection = document.getElementById("stats");
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setStatsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-slide for hero
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                scrolled ? "bg-amber-500" : "bg-white/20 backdrop-blur-sm"
              }`}>
                <span className={`font-bold text-xl ${scrolled ? "text-white" : "text-white"}`}>PL</span>
              </div>
              <div>
                <span className={`font-bold text-lg ${scrolled ? "text-gray-900" : "text-white"}`}>
                  PHÚC LỢI
                </span>
                <span className={`block text-xs ${scrolled ? "text-gray-500" : "text-white/80"}`}>
                  Xi Măng Rời
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {[
                { href: "#home", label: "Trang chủ" },
                { href: "#products", label: "Sản phẩm" },
                { href: "#projects", label: "Dự án" },
                { href: "#about", label: "Về chúng tôi" },
                { href: "#blog", label: "Tin tức" },
                { href: "#contact", label: "Liên hệ" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    scrolled ? "text-gray-600 hover:text-amber-600" : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="tel:0969988888"
                className={`hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all ${
                  scrolled
                    ? "bg-amber-500 text-white hover:bg-amber-600"
                    : "bg-white text-gray-900 hover:bg-gray-100"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0969 988 888
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-gray-900" : "text-white"}`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white rounded-2xl shadow-xl p-6 mb-4">
              {[
                { href: "#home", label: "Trang chủ" },
                { href: "#products", label: "Sản phẩm" },
                { href: "#projects", label: "Dự án" },
                { href: "#about", label: "Về chúng tôi" },
                { href: "#blog", label: "Tin tức" },
                { href: "#contact", label: "Liên hệ" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-gray-700 hover:text-amber-600 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Slider */}
      <section id="home" className="relative h-screen">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent" />
          </div>
        ))}

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm text-amber-300 px-4 py-2 rounded-full text-sm mb-6 border border-amber-500/30">
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                Hơn 20 năm kinh nghiệm trong ngành
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                {heroSlides[currentSlide].title}
                <span className="block text-amber-400 mt-2">
                  {heroSlides[currentSlide].subtitle}
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                Công ty TNHH Phúc Lợi. Đối tác tin cậy của các trạm trộn bê tông tại Hải Phòng
                và các tỉnh phía Bắc. Cung cấp xi măng PCB40, PCB30, PC50 chất lượng cao.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40"
                >
                  Nhận báo giá
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
                >
                  Xem sản phẩm
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Slider dots */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-amber-500 w-8" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="relative -mt-20 z-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">
                {yearsCount}+
              </div>
              <div className="text-gray-600 font-medium">Năm kinh nghiệm</div>
              <div className="w-12 h-1 bg-amber-500 mx-auto mt-3 group-hover:w-20 transition-all" />
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">
                {revenueCount}+
              </div>
              <div className="text-gray-600 font-medium">Tỷ VND/năm</div>
              <div className="w-12 h-1 bg-amber-500 mx-auto mt-3 group-hover:w-20 transition-all" />
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">
                {partnersCount}+
              </div>
              <div className="text-gray-600 font-medium">Đối tác</div>
              <div className="w-12 h-1 bg-amber-500 mx-auto mt-3 group-hover:w-20 transition-all" />
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">
                {tonsCount}K+
              </div>
              <div className="text-gray-600 font-medium">Tấn/năm</div>
              <div className="w-12 h-1 bg-amber-500 mx-auto mt-3 group-hover:w-20 transition-all" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-600 font-semibold text-sm tracking-wider uppercase mb-4">
              Sản phẩm
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Xi Măng Chất Lượng Cao
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chúng tôi phân phối xi măng rời từ các nhà máy hàng đầu Việt Nam,
              đảm bảo chất lượng theo tiêu chuẩn TCVN
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* PCB40 */}
            <div className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={images.concrete1}
                  alt="Xi măng PCB40"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute top-4 left-4 bg-amber-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                  Bán chạy nhất
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="text-4xl font-bold text-white">PCB40</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Xi măng PCB40</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Xi măng Portland hỗn hợp PCB40, cường độ nén 40 N/mm² sau 28 ngày.
                  Phù hợp cho bê tông thương phẩm, móng, cột, dầm.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium">TCVN 6260:2020</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium">Nghi Sơn</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium">Hoàng Thạch</span>
                </div>
                <a href="#contact" className="inline-flex items-center gap-2 text-amber-600 font-semibold group-hover:gap-3 transition-all">
                  Liên hệ báo giá
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* PCB30 */}
            <div className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={images.concrete2}
                  alt="Xi măng PCB30"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-4xl font-bold text-white">PCB30</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Xi măng PCB30</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Xi măng Portland hỗn hợp PCB30, cường độ nén 30 N/mm² sau 28 ngày.
                  Phù hợp cho xây tô, sản xuất gạch block, bê tông nhẹ.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium">TCVN 6260:2020</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium">Bút Sơn</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium">Hoàng Mai</span>
                </div>
                <a href="#contact" className="inline-flex items-center gap-2 text-amber-600 font-semibold group-hover:gap-3 transition-all">
                  Liên hệ báo giá
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* PC50 */}
            <div className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={images.cement}
                  alt="Xi măng PC50"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                  Cao cấp
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="text-4xl font-bold text-white">PC50</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Xi măng PC50</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Xi măng Portland PC50 nguyên chất, cường độ cao 50 N/mm².
                  Dùng cho công trình đặc biệt, bê tông cường độ cao, cầu đường.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium">TCVN 2682:2020</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium">Nghi Sơn</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium">VICEM</span>
                </div>
                <a href="#contact" className="inline-flex items-center gap-2 text-amber-600 font-semibold group-hover:gap-3 transition-all">
                  Liên hệ báo giá
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Partner logos */}
          <div className="mt-20 text-center">
            <p className="text-gray-500 mb-8 text-sm uppercase tracking-wider">Đối tác cung cấp xi măng</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
              {["NGHI SƠN", "HOÀNG THẠCH", "BÚT SƠN", "VICEM", "HOÀNG MAI"].map((name) => (
                <div key={name} className="text-2xl font-bold text-gray-300 hover:text-amber-500 transition-colors cursor-pointer">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-amber-600 font-semibold text-sm tracking-wider uppercase mb-4">
                Tại sao chọn chúng tôi
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Đối tác tin cậy của
                <span className="text-amber-500"> các trạm trộn bê tông</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Với hơn 20 năm kinh nghiệm trong ngành phân phối xi măng rời, Phúc Lợi đã
                xây dựng được uy tín vững chắc với các trạm trộn bê tông tại miền Bắc.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    ),
                    title: "Giao hàng nhanh chóng",
                    desc: "Đội xe bồn chuyên dụng, giao hàng trong ngày tại Hải Phòng và các tỉnh lân cận",
                  },
                  {
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    ),
                    title: "Chất lượng đảm bảo",
                    desc: "Xi măng từ các nhà máy uy tín, có giấy chứng nhận chất lượng theo TCVN",
                  },
                  {
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    ),
                    title: "Chính sách công nợ linh hoạt",
                    desc: "Hạn mức tín dụng cao, thanh toán 15-60 ngày cho khách hàng thân thiết",
                  },
                  {
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    ),
                    title: "Hỗ trợ 24/7",
                    desc: "Đội ngũ tư vấn và hỗ trợ sẵn sàng giải đáp mọi thắc mắc",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-5 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center group-hover:bg-amber-500 group-hover:scale-110 transition-all">
                      <svg className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {item.icon}
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 text-lg">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[600px] rounded-3xl overflow-hidden">
                <Image
                  src={images.truck}
                  alt="Xe bồn xi măng"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-amber-500 text-white p-8 rounded-3xl shadow-2xl">
                <div className="text-5xl font-bold">500K+</div>
                <div className="text-amber-100 mt-1">Tấn xi măng giao mỗi năm</div>
              </div>
              <div className="absolute -top-8 -right-8 bg-gray-900 text-white p-6 rounded-3xl shadow-2xl">
                <div className="text-3xl font-bold">20+</div>
                <div className="text-gray-400 mt-1">Xe bồn chuyên dụng</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-400 font-semibold text-sm tracking-wider uppercase mb-4">
              Dự án tiêu biểu
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Các Công Trình Đã Cung Cấp
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Chúng tôi tự hào được đồng hành cùng các dự án lớn tại Hải Phòng và các tỉnh miền Bắc
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { image: images.building1, title: "Khu đô thị Vinhomes Imperia", location: "Hải Phòng", tons: "50,000 tấn" },
              { image: images.building2, title: "Cao ốc văn phòng Waterfront", location: "Hải Phòng", tons: "35,000 tấn" },
              { image: images.building3, title: "Cầu vượt Lạch Tray", location: "Hải Phòng", tons: "25,000 tấn" },
              { image: images.construction1, title: "KCN VSIP Hải Phòng", location: "Hải Phòng", tons: "80,000 tấn" },
              { image: images.construction2, title: "Nhà máy LG Display", location: "Hải Phòng", tons: "60,000 tấn" },
              { image: images.factory, title: "Cảng quốc tế Lạch Huyện", location: "Hải Phòng", tons: "100,000 tấn" },
            ].map((project, index) => (
              <div key={index} className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-amber-400 text-sm font-medium mb-2">{project.location}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-gray-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    {project.tons}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image src={images.factory} alt="Nhà máy" fill className="object-cover" />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image src={images.mixer} alt="Trạm trộn" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image src={images.construction1} alt="Công trình" fill className="object-cover" />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image src={images.truck} alt="Xe bồn" fill className="object-cover" />
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-2xl">
                <div className="text-3xl font-bold">2004</div>
                <div className="text-xs text-amber-100">Thành lập</div>
              </div>
            </div>

            <div>
              <span className="inline-block text-amber-600 font-semibold text-sm tracking-wider uppercase mb-4">
                Về chúng tôi
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Công ty TNHH
                <span className="text-amber-500"> Phúc Lợi</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Được thành lập năm 2004 tại Hải Phòng, Công ty TNHH Phúc Lợi đã trở thành
                một trong những nhà phân phối xi măng rời hàng đầu tại miền Bắc Việt Nam.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Chúng tôi chuyên cung cấp xi măng rời (bulk cement) cho các trạm trộn bê tông,
                nhà máy sản xuất bê tông thương phẩm và các dự án xây dựng lớn. Với đội ngũ
                xe bồn chuyên dụng và hệ thống kho bãi hiện đại, chúng tôi cam kết giao hàng
                nhanh chóng, đảm bảo chất lượng.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { number: "50+", label: "Nhân viên" },
                  { number: "20+", label: "Xe bồn" },
                  { number: "5+", label: "Kho hàng" },
                  { number: "50+", label: "Đối tác" },
                ].map((stat, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-5 text-center">
                    <div className="text-3xl font-bold text-amber-500">{stat.number}</div>
                    <div className="text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <a href="#contact" className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-600 transition-all shadow-lg">
                Tìm hiểu thêm
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="inline-block text-amber-600 font-semibold text-sm tracking-wider uppercase mb-4">
                Tin tức & Bài viết
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Kiến Thức Ngành Xi Măng
              </h2>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:gap-3 transition-all">
              Xem tất cả
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: images.concrete1,
                category: "Kiến thức",
                date: "25/11/2024",
                title: "Phân biệt các loại xi măng PCB30, PCB40 và PC50",
                excerpt: "Hướng dẫn chi tiết cách phân biệt và lựa chọn loại xi măng phù hợp cho từng công trình xây dựng.",
              },
              {
                image: images.mixer,
                category: "Kỹ thuật",
                date: "20/11/2024",
                title: "Quy trình bảo quản xi măng rời đúng cách",
                excerpt: "Các yếu tố ảnh hưởng đến chất lượng xi măng và cách bảo quản để đảm bảo chất lượng tốt nhất.",
              },
              {
                image: images.construction2,
                category: "Thị trường",
                date: "15/11/2024",
                title: "Xu hướng ngành xi măng Việt Nam 2024",
                excerpt: "Phân tích thị trường xi măng Việt Nam và dự báo xu hướng phát triển trong thời gian tới.",
              },
            ].map((post, index) => (
              <article key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-gray-500 text-sm mb-3">{post.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-amber-600 font-semibold group-hover:gap-3 transition-all">
                    Đọc thêm
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-600 font-semibold text-sm tracking-wider uppercase mb-4">
              Liên hệ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Liên Hệ Với Chúng Tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hãy liên hệ ngay để được tư vấn và báo giá tốt nhất
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: (
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </>
                ),
                title: "Địa chỉ",
                lines: ["Shophouse BH06-10 Vinhomes Imperia", "Số 1 Bạch Đằng, P. Thượng Lý", "Q. Hồng Bàng, TP. Hải Phòng"],
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                ),
                title: "Điện thoại",
                lines: ["Hotline: 0969 988 888", "Văn phòng: 0225 3888 888"],
                isPhone: true,
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ),
                title: "Email",
                lines: ["info@phucloi.vn", "sales@phucloi.vn"],
                isEmail: true,
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-3xl text-center hover:bg-amber-50 hover:shadow-lg transition-all group">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500 group-hover:scale-110 transition-all">
                  <svg className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                {item.lines.map((line, i) => (
                  <p key={i} className="text-gray-600 mb-1">
                    {item.isPhone ? (
                      <a href={`tel:${line.split(": ")[1]?.replace(/\s/g, "")}`} className="hover:text-amber-600 transition-colors">
                        {line}
                      </a>
                    ) : item.isEmail ? (
                      <a href={`mailto:${line}`} className="hover:text-amber-600 transition-colors">
                        {line}
                      </a>
                    ) : (
                      line
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.5!2d106.6847!3d20.8453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7a9c40d9c7b7%3A0x5b5b5b5b5b5b5b5b!2sVinhomes%20Imperia%20H%E1%BA%A3i%20Ph%C3%B2ng!5e0!3m2!1svi!2s!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Phúc Lợi location"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sẵn sàng hợp tác?
          </h2>
          <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
            Liên hệ ngay để được tư vấn và nhận báo giá tốt nhất cho nhu cầu xi măng của bạn
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0969988888"
              className="inline-flex items-center gap-3 bg-white text-amber-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Gọi ngay: 0969 988 888
            </a>
            <a
              href="https://zalo.me/0969988888"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              Chat Zalo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">PL</span>
                </div>
                <div>
                  <span className="font-bold text-white text-lg">PHÚC LỢI</span>
                  <span className="block text-xs text-gray-500">Xi Măng Rời</span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Nhà phân phối xi măng rời hàng đầu miền Bắc Việt Nam.
                Đối tác tin cậy của các trạm trộn bê tông.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Sản phẩm</h4>
              <ul className="space-y-3">
                {["Xi măng PCB40", "Xi măng PCB30", "Xi măng PC50", "Xi măng PC40"].map((item) => (
                  <li key={item}>
                    <a href="#products" className="hover:text-amber-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Liên kết</h4>
              <ul className="space-y-3">
                {[
                  { href: "#home", label: "Trang chủ" },
                  { href: "#about", label: "Về chúng tôi" },
                  { href: "#projects", label: "Dự án" },
                  { href: "#blog", label: "Tin tức" },
                  { href: "#contact", label: "Liên hệ" },
                ].map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="hover:text-amber-400 transition-colors">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Giờ làm việc</h4>
              <ul className="space-y-3">
                <li>Thứ 2 - Thứ 6: 7:00 - 17:30</li>
                <li>Thứ 7: 7:00 - 12:00</li>
                <li>Chủ nhật: Nghỉ</li>
                <li className="pt-4">
                  <span className="text-amber-400 font-semibold">Hotline 24/7</span>
                  <br />
                  <a href="tel:0969988888" className="text-white text-xl font-bold hover:text-amber-400 transition-colors">
                    0969 988 888
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © 2024 Công ty TNHH Phúc Lợi. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-amber-400 transition-colors">Chính sách bảo mật</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Điều khoản sử dụng</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
