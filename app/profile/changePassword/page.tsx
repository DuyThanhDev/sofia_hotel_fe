"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CreditCard, Key, Clock, User, Eye, EyeOff, Bell, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function ChangePassword() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const navigateToProfileDetail = () => {
    router.push("/profile/profileDetail"); // Đường dẫn tới trang profileDetail
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
                Cập nhật mật khẩu
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
            <Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg bg-blue-50 text-blue-600">
              <Key size={20} />
              Cập nhật mật khẩu
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100"
            >
              <CreditCard size={20} />
              Phương thức thanh toán
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100"
            >
              <Clock size={20} />
              Lịch sử giao dịch
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-2xl">
            <h1 className="text-2xl font-semibold mb-2">Thay đổi mật khẩu</h1>
            <p className="text-gray-600 mb-8">Đổi mật khẩu mới nếu bạn nghĩ có ai đó đã biết mật khẩu của bạn</p>

            <form className="space-y-6">
              {/* Current Password */}
              <div className="space-y-2">
                <label htmlFor="current-password" className="block text-sm font-medium">
                  Mật khẩu hiện tại
                </label>
                <div className="relative">
                  <Input id="current-password" type={showCurrentPassword ? "text" : "password"} className="pr-10" />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  >
                    {showCurrentPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
              </div>

              {/* New Password */}
              <div className="space-y-2">
                <label htmlFor="new-password" className="block text-sm font-medium">
                  Mật khẩu mới
                </label>
                <div className="relative">
                  <Input id="new-password" type={showNewPassword ? "text" : "password"} className="pr-10" />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Confirm New Password */}
              <div className="space-y-2">
                <label htmlFor="confirm-password" className="block text-sm font-medium">
                  Nhập lại mật khẩu mới
                </label>
                <div className="relative">
                  <Input id="confirm-password" type={showConfirmPassword ? "text" : "password"} className="pr-10" />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
                  Hủy
                </Button>
                <Button type="submit" className="bg-[#006CE4] hover:bg-[#005ECB]">
                  Lưu
                </Button>
              </div>
            </form>
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
  );
}