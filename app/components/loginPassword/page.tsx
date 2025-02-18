"use client"

import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Apple, Eye, EyeOff, Facebook } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function LoginPassword() {
  const [showPassword, setShowPassword] = useState(false)

  const router = useRouter();
  const navigateToOtp = () => {
    router.push("/components/forgotPassword/otp");
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#003580] px-4 py-3 flex items-center justify-between">
        <div className="text-white font-bold text-xl">Booking.com</div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:text-white/90">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0Z5Ad8kcyMne5DxWl1kIpP1Vlm2vKv.png"
              alt="US Flag"
              width={20}
              height={20}
              className="mr-2"
            />
            English
          </Button>
          <Button variant="ghost" className="text-white hover:text-white/90">
            $ USD
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-6">
          <div>
            <h1 className="text-2xl font-semibold">Enter password</h1>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                </Button>
              </div>
            </div>

            <Button className="w-full bg-[#006CE4] hover:bg-[#005ECB]">Log in</Button>

            <div className="text-center">
              <div onClick={navigateToOtp} className="text-[#006CE4] hover:underline text-sm cursor-pointer">
                Forgot password?
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or use one of these options</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <Button variant="outline" className="w-full">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </Button>
              <Button variant="outline" className="w-full">
                <Apple className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="w-full">
                <Facebook className="w-5 h-5 text-[#1877f2]" />
              </Button>
            </div>
          </div>

          <div className="text-center text-sm text-gray-600">
            <p>
              By signing in or creating an account, you agree with our{" "}
              <Link href="#" className="text-[#006CE4] hover:underline">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-[#006CE4] hover:underline">
                Privacy Statement
              </Link>
            </p>
            <div className="mt-4 space-y-1 text-xs">
              <p>All rights reserved.</p>
              <p>Copyright (2006-2023) - Booking.com™</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

