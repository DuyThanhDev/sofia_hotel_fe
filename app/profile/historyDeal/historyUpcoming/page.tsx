"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CreditCard, Key, Clock, User, Bell, HelpCircle, MessageCircleQuestion, MoreVertical } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation";

export default function HistoryUpcoming() {
  const router = useRouter();

  const navigateToProfileDetail = () => {
    router.push("/profile/profileDetail"); // Đường dẫn tới trang profileDetail
  };

  const navigateToChangePassword = () => {
    router.push("/profile/changePassword"); // Đường dẫn tới trang changePassword
  };

  const navigateToPaymentMethod = () => {
    router.push("/profile/paymentMethod"); // Đường dẫn tới trang paymentMethod
  };

  const handleTabChange = (value: string) => {
    if (value === "cancel") {
      router.push("/profile/historyDeal/historyCancel");
    }
    if (value === "past") {
      router.push("/profile/historyDeal/historyPast");
    }
  };

  const navigateToDealDetail = () => {
    router.push("/profile/dealDetail"); // Đường dẫn tới trang dealDetail
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#003580] px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-white font-bold text-xl">Booking.com</div>
            <nav className="flex items-center gap-4 text-white/80 text-sm">
              <Link href="#" className="hover:text-white">
                Tài khoản
              </Link>
              <Link href="#" className="hover:text-white">
                Lịch sử giao dịch
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white p-2">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="text-white p-2">
              <HelpCircle className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 bg-gray-300 rounded-full" />
              <div>
                <div className="text-sm">Tài khoản của bạn</div>
                <div className="text-xs text-white/80">Online Cấp 1</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="w-64 border-r p-4">
          <nav className="space-y-1">
            <div
              onClick={navigateToProfileDetail}
              className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              <User size={20} />
              Thông tin cá nhân
            </div>
            <div
              onClick={navigateToChangePassword}
              className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              <Key size={20} />
              Cập nhật mật khẩu
            </div>
            <div
              onClick={navigateToPaymentMethod}
              className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              <CreditCard size={20} />
              Phương thức thanh toán
            </div>
            <Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg bg-blue-50 text-blue-600">
              <Clock size={20} />
              Lịch sử giao dịch
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <Tabs defaultValue="upcoming" className="w-full" onValueChange={handleTabChange}>
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="past">Đã qua</TabsTrigger>
                  <TabsTrigger value="cancel">Đã hủy</TabsTrigger>
                  <TabsTrigger value="upcoming">Sắp tới</TabsTrigger>
                </TabsList>
                <Link href="#" className="text-blue-600 text-sm hover:underline flex items-center gap-1">
                  <MessageCircleQuestion className="h-4 w-4" />
                  Bạn không tìm thấy đặt phòng?
                </Link>
              </div>

              <TabsContent value="upcoming" className="space-y-4">
                {[1, 2, 3].map((booking) => (
                  <div
                    key={booking}
                    className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                    onClick={navigateToDealDetail}
                  >
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-j6eLZkwcYtlQx68EhUNEXx2NVqRtZJ.png"
                      alt="Pilgrimage Village Boutique Resort & Spa"
                      width={120}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div className="mr-40">
                          <h3 className="font-medium">Pilgrimage Village Boutique Resort & Spa</h3>
                          <p className="text-sm text-gray-600">12 tháng 2 - 13 tháng 2 · Huế · Chính sách hủy</p>
                          <p className="text-sm mt-1">
                            Trạng thái: <span className="text-blue-600">Đã xác nhận</span>
                          </p>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="text-right">
                            <div className="font-medium">VND 2,386,761</div>
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Hủy đặt chỗ</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#003580] text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-5 gap-8">
            <div>
              <h3 className="font-medium mb-4">Phẩm bản & dịch vụ</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Các quốc gia
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Khu vực
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Thành phố
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Quận
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Sân bay
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Khách sạn
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Quản lý các đặt phòng của bạn</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Nhà
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Căn hộ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Căn resort
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Căn biệt thự
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Căn hostel
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Dịch vụ khách hàng</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Trung tâm trợ giúp
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Đối tác của chúng tôi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Du lịch bền vững
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Truyền thông
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Dành cho chủ nhà</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Đăng ký cho thuê nhà
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Trung tâm tài nguyên
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Diễn đàn cộng đồng
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Trách nhiệm kinh doanh
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Booking.com for Business</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Giải pháp du lịch
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Chương trình đối tác
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Tích hợp nội dung
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm text-center">Bản quyền © 1996-2023 Booking.com™. Bảo lưu mọi quyền.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}