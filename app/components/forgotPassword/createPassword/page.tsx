"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function CreatePassword() {
  const [showPassword1, setShowPassword1] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#003580] px-4 py-3 flex items-center justify-between">
        <div className="text-white font-bold text-xl">Booking.com</div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:text-white/90">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RbYGe2CbxMnMnUIdpfamtY5FkhTdtQ.png"
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
            <h1 className="text-2xl font-semibold">You can now create a new password</h1>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="password1" className="block text-sm font-medium">
                Create a new password
              </label>
              <div className="relative">
                <Input
                  id="password1"
                  type={showPassword1 ? "text" : "password"}
                  placeholder="Enter your new password"
                  className="w-full pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowPassword1(!showPassword1)}
                >
                  {showPassword1 ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password2" className="block text-sm font-medium">
                Enter your new password
              </label>
              <div className="relative">
                <Input
                  id="password2"
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Enter your new password"
                  className="w-full pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowPassword2(!showPassword2)}
                >
                  {showPassword2 ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                </Button>
              </div>
            </div>

            <Button className="w-full bg-[#006CE4] hover:bg-[#005ECB]">Save</Button>
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

