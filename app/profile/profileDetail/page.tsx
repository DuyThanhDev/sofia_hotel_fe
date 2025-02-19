"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Key, Clock, User, Check, HelpCircle, Bell } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function ProfileDetail() {

    const router = useRouter();

    const navigateToChangePassword = () => {
        router.push("/profile/changePassword"); // Đường dẫn tới trang changePassword
    };

    const navigateToPaymentMethod = () => {
        router.push("/profile/paymentMethod"); // Đường dẫn tới trang paymentMethod
    };

    const navigateToHistoryPast = () => {
        router.push("/profile/historyDeal/historyPast"); // Đường dẫn tới trang historyPast
    }

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
                Thông tin cá nhân
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:text-white/90">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TTTkeeiOGpeRy389MuxgHRh8nkwfbt.png"
                alt="VN Flag"
                width={20}
                height={20}
                className="mr-2"
              />
              Tiếng Việt
            </Button>
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
            <Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg bg-blue-50 text-blue-600">
              <User size={20} />
              Thông tin cá nhân
            </Link>
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
            <div
              onClick={navigateToHistoryPast}
              className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              <Clock size={20} />
              Lịch sử giao dịch
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-3xl">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-2xl font-semibold">Thông tin cá nhân</h1>
                <p className="text-gray-600 mt-1">
                  Cập nhật thông tin của bạn và tìm hiểu các thông tin này được sử dụng ra sao.
                </p>
              </div>
              <div className="w-16 h-16 bg-gray-200 rounded-full" />
            </div>

            <div className="space-y-6">
              {/* Name */}
              <div className="flex items-start justify-between pb-4 border-b">
                <div className="space-y-1">
                  <div className="font-medium">Tên</div>
                  <div className="text-gray-600">Hãy cho chúng tôi biết tên gọi của bạn</div>
                </div>
                <Button variant="link" className="text-blue-600">
                  Chỉnh sửa
                </Button>
              </div>

              {/* Display Name */}
              <div className="flex items-start justify-between pb-4 border-b">
                <div className="space-y-1">
                  <div className="font-medium">Tên hiển thị</div>
                  <div className="text-gray-600">Chọn tên hiển thị</div>
                </div>
                <Button variant="link" className="text-blue-600">
                  Chỉnh sửa
                </Button>
              </div>

              {/* Email */}
              <div className="flex items-start justify-between pb-4 border-b">
                <div className="space-y-1">
                  <div className="font-medium">Địa chỉ email</div>
                  <div className="flex items-center gap-2">
                    <span></span>
                    {/* <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">
                      <Check className="w-3 h-3 mr-1" />
                      Đã xác minh
                    </Badge> */}
                  </div>
                  <div className="text-gray-600 text-sm">
                    Đây là địa chỉ email bạn dùng để đăng nhập. Chúng tôi cũng sẽ gửi các xác nhận đặt chỗ tới địa chỉ
                    này.
                  </div>
                </div>
                <Button variant="link" className="text-blue-600">
                  Chỉnh sửa
                </Button>
              </div>

              {/* Phone */}
              <div className="flex items-start justify-between pb-4 border-b">
                <div className="space-y-1">
                  <div className="font-medium">Số điện thoại</div>
                  <div className="text-gray-600">Thêm số điện thoại của bạn</div>
                  <div className="text-gray-600 text-sm">
                    Chỉ nghỉ hoặc địa điểm tham quan bạn đặt sẽ lấy lại số liên lạc này của quý khách nếu cần.
                  </div>
                </div>
                <Button variant="link" className="text-blue-600">
                  Chỉnh sửa
                </Button>
              </div>

              {/* Birthday */}
              <div className="flex items-start justify-between pb-4 border-b">
                <div className="space-y-1">
                  <div className="font-medium">Ngày sinh</div>
                  <div className="text-gray-600">Nhập ngày sinh của bạn</div>
                </div>
                <Button variant="link" className="text-blue-600">
                  Chỉnh sửa
                </Button>
              </div>

              {/* Gender */}
              <div className="flex items-start justify-between pb-4 border-b">
                <div className="space-y-1">
                  <div className="font-medium">Giới tính</div>
                  <div className="text-gray-600">Chọn giới tính</div>
                </div>
                <Button variant="link" className="text-blue-600">
                  Chỉnh sửa
                </Button>
              </div>

              {/* Address */}
              <div className="flex items-start justify-between pb-4 border-b">
                <div className="space-y-1">
                  <div className="font-medium">Địa chỉ</div>
                  <div className="text-gray-600">Nhập địa chỉ</div>
                </div>
                <Button variant="link" className="text-blue-600">
                  Chỉnh sửa
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-4 text-sm text-gray-600">
            <Link href="#" className="hover:underline">
              Về Booking.com
            </Link>
            <Link href="#" className="hover:underline">
              Điều khoản và điều kiện
            </Link>
            <Link href="#" className="hover:underline">
              Chúng tôi hoạt động như thế nào
            </Link>
            <Link href="#" className="hover:underline">
              Chính sách Bảo mật & Cookie
            </Link>
            <Link href="#" className="hover:underline">
              Trung tâm Trợ giúp
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">Bản quyền © 1996-2023 Booking.com™. Bảo lưu mọi quyền.</p>
        </div>
      </footer>
    </div>
  )
}

