    "use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Bell, Car, HelpCircle, MoreVertical, Plane, CarTaxiFrontIcon as Taxi, Map } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HotelDetailsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#003580] px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-white font-bold text-xl">Booking.com</div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white">
              VND
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

      <main className="flex-1 max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-start mb-8">
          <div className="text-sm">
            <Link href="#" className="text-blue-600 hover:underline">
              Đã chờ & Chuyến đi
            </Link>
          </div>
          <Link href="#" className="text-blue-600 hover:underline text-sm">
            Bạn không tìm thấy đặt phòng?
          </Link>
        </div>

        <Card className="p-6">
          <div className="flex gap-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0fZym3S7eKYB3O9Jk6caXv7ab3tI6p.png"
              alt="Pilgrimage Village Boutique Resort & Spa"
              width={120}
              height={80}
              className="rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-xl font-semibold">Pilgrimage Village Boutique Resort & Spa</h1>
                  <p className="text-sm text-gray-600 mt-1">12 tháng 2 - 13 tháng 2 · Huế · Chính sách hủy</p>
                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      Trạng thái: <span className="text-blue-600">Đã xác nhận</span>
                    </p>
                    <p>• Nhận phòng: Th 4, 12 thg 2 từ 14:00</p>
                    <p>• Trả phòng: Th 5, 13 thg 2 trước 11:00</p>
                    <p>• Chi tiết đặt phòng: 2 người lớn · 1 đêm</p>
                  </div>
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
        </Card>

        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Tiếp theo ta lên kế hoạch gì đây?</h2>
            <Button variant="ghost" size="sm">
              <HelpCircle className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <Card className="p-4">
              <div className="flex flex-col items-center text-center">
                <Map className="h-6 w-6 mb-2" />
                <h3 className="font-medium mb-1">Tìm trải nghiệm địa phương</h3>
                <p className="text-sm text-gray-600">Giá từ từ VND 51.583</p>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex flex-col items-center text-center">
                <Taxi className="h-6 w-6 mb-2" />
                <h3 className="font-medium mb-1">Đặt taxi sân bay riêng</h3>
                <div className="flex gap-1 mt-1">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">Mới</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded">Genius</span>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex flex-col items-center text-center">
                <Car className="h-6 w-6 mb-2" />
                <h3 className="font-medium mb-1">Thuê xe</h3>
                <p className="text-sm text-gray-600">Khám phá ô tô tại Huế</p>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex flex-col items-center text-center">
                <Plane className="h-6 w-6 mb-2" />
                <h3 className="font-medium mb-1">Đặt vé máy bay</h3>
                <p className="text-sm text-gray-600">Tìm chuyến bay tới Huế</p>
              </div>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#003580] text-white mt-12">
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
              </ul>
            </div>
            {/* Add other footer columns similarly */}
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm text-center">Bản quyền © 1996-2023 Booking.com™. Bảo lưu mọi quyền.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

