"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CreditCard, Key, Clock, User, Bell, HelpCircle, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function PaymentMethod() {


  const router = useRouter();
  
    const navigateToProfileDetail = () => {
      router.push("/profile/profileDetail"); // Đường dẫn tới trang profileDetail
    };
  

  const navigateToChangePassword = () => {
    router.push("/profile/changePassword"); // Đường dẫn tới trang changePassword
  };
  
  const navigateToHistory = () => {
    router.push("/profile/historyDeal/historyPast"); // Đường dẫn tới trang history
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
                Phương thức thanh toán
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
            <Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg bg-blue-50 text-blue-600">
              <CreditCard size={20} />
              Phương thức thanh toán
            </Link>
            <div
              onClick={navigateToHistory}
              className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
              <Clock size={20} />
              Lịch sử giao dịch
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-2xl">
            <h1 className="text-2xl font-semibold mb-2">Phương thức thanh toán</h1>
            <p className="text-gray-600 mb-8">
              Thêm hoặc tối các phương thức thanh toán một cách bảo mật để dễ đặt hơn.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-sm font-medium">Thẻ thanh toán</div>
                <div className="flex items-center gap-2">
                  <Image src="/mastercard.svg" alt="Mastercard" width={32} height={20} />
                  <Image src="/visa.svg" alt="Visa" width={32} height={20} />
                  <Image src="/paypal.svg" alt="PayPal" width={32} height={20} />
                  <Image src="/apple-pay.svg" alt="Apple Pay" width={32} height={20} />
                  <Image src="/amex.svg" alt="American Express" width={32} height={20} />
                  <Image src="/amazon.svg" alt="Amazon" width={32} height={20} />
                </div>
              </div>

              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="card-name" className="block text-sm font-medium">
                    Name on card:
                  </label>
                  <Input id="card-name" className="max-w-md" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="card-number" className="block text-sm font-medium">
                    Card number:
                  </label>
                  <Input id="card-number" className="max-w-md" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="expiry" className="block text-sm font-medium">
                    Expiry date:
                  </label>
                  <div className="relative max-w-[120px]">
                    <Input id="expiry" placeholder="MM / YY" />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  </div>
                </div>

                <div className="flex justify-end gap-4 mt-4">
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