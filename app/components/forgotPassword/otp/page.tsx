"use client";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function VerifyOTP() {
  const router = useRouter();

  const navigateToCreatePassword = () => {
    router.push("/components/forgotPassword/createPassword"); // Đường dẫn tới trang createPassword
  };


  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#003580] px-4 py-3 flex items-center justify-between">
        <div className="text-white font-bold text-xl">Booking.com</div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:text-white/90">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3dcT51VfAKXX5V6q7Kghjzb2j200VT.png"
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
            <h1 className="text-2xl font-semibold">Please enter verification code</h1>
            <p className="mt-2 text-gray-600">Enter the verification code</p>
          </div>

          <div className="space-y-4">
            <Input type="text" placeholder="Enter your code" className="w-full" />

            <Button onClick={navigateToCreatePassword} className="w-full bg-[#006CE4] hover:bg-[#005ECB]">
              Verify account
            </Button>

            <div className="flex flex-col items-center gap-2 text-sm">
              <Link href="#" className="text-[#006CE4] hover:underline">
                Request new code
              </Link>
              <Link href="#" className="text-[#006CE4] hover:underline">
                Return to the login page
              </Link>
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

