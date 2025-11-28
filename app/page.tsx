import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">PL</span>
              </div>
              <div>
                <span className="font-bold text-gray-900">PHÚC LỢI</span>
                <span className="block text-xs text-gray-500">Xi măng rời</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-600 hover:text-amber-600 transition">Trang chủ</a>
              <a href="#products" className="text-gray-600 hover:text-amber-600 transition">Sản phẩm</a>
              <a href="#about" className="text-gray-600 hover:text-amber-600 transition">Về chúng tôi</a>
              <a href="#contact" className="text-gray-600 hover:text-amber-600 transition">Liên hệ</a>
            </div>
            <a href="tel:0969988888" className="hidden sm:flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0969 988 888
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="Cement factory"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
              Hơn 20 năm kinh nghiệm
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Nhà phân phối
              <span className="text-amber-400 block">Xi Măng Rời</span>
              hàng đầu miền Bắc
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Công ty TNHH Phúc Lợi - Đối tác tin cậy của các trạm trộn bê tông
              tại Hải Phòng và các tỉnh phía Bắc. Cung cấp xi măng PCB40, PCB30, PC50
              từ các thương hiệu uy tín nhất Việt Nam.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition shadow-lg shadow-amber-500/30">
                Liên hệ ngay
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#products" className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition backdrop-blur-sm border border-white/20">
                Xem sản phẩm
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-t-2xl p-6 shadow-xl">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-amber-500">20+</div>
                <div className="text-gray-600 text-sm">Năm kinh nghiệm</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-amber-500">300+</div>
                <div className="text-gray-600 text-sm">Tỷ VND doanh thu/năm</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-amber-500">50+</div>
                <div className="text-gray-600 text-sm">Trạm trộn đối tác</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-amber-500">500K+</div>
                <div className="text-gray-600 text-sm">Tấn xi măng/năm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold">SẢN PHẨM</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Các loại xi măng cung cấp
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Chúng tôi phân phối xi măng rời từ các nhà máy hàng đầu Việt Nam,
              đảm bảo chất lượng theo tiêu chuẩn TCVN
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* PCB40 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-amber-100 to-amber-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-amber-500/20">PCB40</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Bán chạy
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Xi măng PCB40</h3>
                <p className="text-gray-600 mb-4">
                  Xi măng Portland hỗn hợp PCB40, cường độ nén 40 N/mm² sau 28 ngày.
                  Phù hợp cho bê tông thương phẩm, móng, cột, dầm.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">TCVN 6260:2020</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Nghi Sơn</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Hoàng Thạch</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-600 font-bold">Liên hệ báo giá</span>
                  <a href="#contact" className="text-gray-500 hover:text-amber-600 transition">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* PCB30 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-gray-400/30">PCB30</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Xi măng PCB30</h3>
                <p className="text-gray-600 mb-4">
                  Xi măng Portland hỗn hợp PCB30, cường độ nén 30 N/mm² sau 28 ngày.
                  Phù hợp cho xây tô, sản xuất gạch block, bê tông nhẹ.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">TCVN 6260:2020</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Bút Sơn</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Hoàng Mai</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-600 font-bold">Liên hệ báo giá</span>
                  <a href="#contact" className="text-gray-500 hover:text-amber-600 transition">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* PC50 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-blue-400/30">PC50</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Cao cấp
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Xi măng PC50</h3>
                <p className="text-gray-600 mb-4">
                  Xi măng Portland PC50 nguyên chất, cường độ cao 50 N/mm².
                  Dùng cho công trình đặc biệt, bê tông cường độ cao, cầu đường.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">TCVN 2682:2020</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Nghi Sơn</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">VICEM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-600 font-bold">Liên hệ báo giá</span>
                  <a href="#contact" className="text-gray-500 hover:text-amber-600 transition">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Supplier logos */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-8">Đối tác cung cấp xi măng</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
              <div className="text-2xl font-bold text-gray-400">NGHI SƠN</div>
              <div className="text-2xl font-bold text-gray-400">HOÀNG THẠCH</div>
              <div className="text-2xl font-bold text-gray-400">BÚT SƠN</div>
              <div className="text-2xl font-bold text-gray-400">VICEM</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-600 font-semibold">TẠI SAO CHỌN CHÚNG TÔI</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Đối tác tin cậy của các trạm trộn bê tông
              </h2>
              <p className="text-gray-600 mb-8">
                Với hơn 20 năm kinh nghiệm trong ngành phân phối xi măng rời, Phúc Lợi đã
                xây dựng được uy tín vững chắc với các trạm trộn bê tông tại miền Bắc.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Giao hàng nhanh chóng</h3>
                    <p className="text-gray-600 text-sm">Đội xe bồn chuyên dụng, giao hàng trong ngày tại Hải Phòng và các tỉnh lân cận</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Chất lượng đảm bảo</h3>
                    <p className="text-gray-600 text-sm">Xi măng từ các nhà máy uy tín, có giấy chứng nhận chất lượng theo TCVN</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Chính sách công nợ linh hoạt</h3>
                    <p className="text-gray-600 text-sm">Hạn mức tín dụng cao, thanh toán linh hoạt 15-60 ngày cho khách hàng thân thiết</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hỗ trợ 24/7</h3>
                    <p className="text-gray-600 text-sm">Đội ngũ tư vấn và hỗ trợ sẵn sàng giải đáp mọi thắc mắc</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">🚛</div>
                  <p className="text-amber-800 font-semibold">Đội xe bồn chuyên dụng</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">500K+</div>
                <div className="text-amber-100">Tấn xi măng giao mỗi năm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className="text-6xl">🏭</div>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden mt-8 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className="text-6xl">🏗️</div>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className="text-6xl">🧱</div>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden mt-8 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className="text-6xl">🌉</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-amber-400 font-semibold">VỀ CHÚNG TÔI</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">
                Công ty TNHH Phúc Lợi
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Được thành lập và hoạt động tại Hải Phòng, Công ty TNHH Phúc Lợi đã trở thành
                một trong những nhà phân phối xi măng rời hàng đầu tại miền Bắc Việt Nam với
                hơn 20 năm kinh nghiệm trong ngành.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Chúng tôi chuyên cung cấp xi măng rời (bulk cement) cho các trạm trộn bê tông,
                nhà máy sản xuất bê tông thương phẩm và các dự án xây dựng lớn. Với đội ngũ
                xe bồn chuyên dụng và hệ thống kho bãi hiện đại, chúng tôi cam kết giao hàng
                nhanh chóng, đảm bảo chất lượng.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-amber-400">2004</div>
                  <div className="text-gray-400">Năm thành lập</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-400">50+</div>
                  <div className="text-gray-400">Nhân viên</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-400">20+</div>
                  <div className="text-gray-400">Xe bồn chuyên dụng</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-400">5+</div>
                  <div className="text-gray-400">Kho hàng tại miền Bắc</div>
                </div>
              </div>

              <a href="#contact" className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition">
                Tìm hiểu thêm
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold">LIÊN HỆ</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Liên hệ với chúng tôi
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Hãy liên hệ ngay để được tư vấn và báo giá tốt nhất
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Địa chỉ</h3>
              <p className="text-gray-600">
                Shophouse BH06-10 Vinhomes Imperia<br />
                Số 1 Bạch Đằng, P. Thượng Lý<br />
                Q. Hồng Bàng, TP. Hải Phòng
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Điện thoại</h3>
              <p className="text-gray-600 mb-2">Hotline: <a href="tel:0969988888" className="text-amber-600 font-semibold hover:underline">0969 988 888</a></p>
              <p className="text-gray-600">Văn phòng: <a href="tel:02253888888" className="text-amber-600 hover:underline">0225 3888 888</a></p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-2">
                <a href="mailto:info@phucloi.vn" className="text-amber-600 hover:underline">info@phucloi.vn</a>
              </p>
              <p className="text-gray-600">
                <a href="mailto:sales@phucloi.vn" className="text-amber-600 hover:underline">sales@phucloi.vn</a>
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.5!2d106.6847!3d20.8453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7a9c40d9c7b7%3A0x5b5b5b5b5b5b5b5b!2sVinhomes%20Imperia%20H%E1%BA%A3i%20Ph%C3%B2ng!5e0!3m2!1svi!2s!4v1700000000000"
              width="100%"
              height="400"
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
      <section className="py-16 bg-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sẵn sàng hợp tác?
          </h2>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
            Liên hệ ngay để được tư vấn và nhận báo giá tốt nhất cho nhu cầu xi măng của bạn
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:0969988888" className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Gọi ngay: 0969 988 888
            </a>
            <a href="https://zalo.me/0969988888" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition">
              Chat Zalo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">PL</span>
                </div>
                <div>
                  <span className="font-bold text-white">PHÚC LỢI</span>
                  <span className="block text-xs">Xi măng rời</span>
                </div>
              </div>
              <p className="text-sm">
                Nhà phân phối xi măng rời hàng đầu miền Bắc Việt Nam.
                Đối tác tin cậy của các trạm trộn bê tông.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Sản phẩm</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#products" className="hover:text-amber-400 transition">Xi măng PCB40</a></li>
                <li><a href="#products" className="hover:text-amber-400 transition">Xi măng PCB30</a></li>
                <li><a href="#products" className="hover:text-amber-400 transition">Xi măng PC50</a></li>
                <li><a href="#products" className="hover:text-amber-400 transition">Xi măng PC40</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Liên kết</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-amber-400 transition">Trang chủ</a></li>
                <li><a href="#about" className="hover:text-amber-400 transition">Về chúng tôi</a></li>
                <li><a href="#products" className="hover:text-amber-400 transition">Sản phẩm</a></li>
                <li><a href="#contact" className="hover:text-amber-400 transition">Liên hệ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Giờ làm việc</h4>
              <ul className="space-y-2 text-sm">
                <li>Thứ 2 - Thứ 6: 7:00 - 17:30</li>
                <li>Thứ 7: 7:00 - 12:00</li>
                <li>Chủ nhật: Nghỉ</li>
                <li className="text-amber-400 pt-2">Hotline 24/7: 0969 988 888</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © 2024 Công ty TNHH Phúc Lợi. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-400 transition">
                <span className="text-2xl">📘</span>
              </a>
              <a href="#" className="hover:text-amber-400 transition">
                <span className="text-2xl">📱</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
