"use client";

import { useRouter } from "next/navigation"; // Sử dụng next/navigation thay vì next/router
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const router = useRouter();

  const navigateToLogin = () => {
    //router.push("/components/loginEmail"); // Đường dẫn tới trang login
    router.push("/profile/profileDetail"); // Đường dẫn tới trang profileDetail
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-center">Welcome to Booking.com</h1>
        <p className="text-center">To access our services, please log in.</p>
        <div className="flex justify-center">
          <Button onClick={navigateToLogin} className="bg-[#006CE4] hover:bg-[#005ECB]">
            Go to Login
          </Button>
        </div>
      </div>
    </div>
  );
}