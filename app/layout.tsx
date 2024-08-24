"use client";
import Loader from "@/components/common/Loader";
import "@/css/font_style.css";
import "@/css/style.css";
import ReactQueryProvider from "@/hooks/reactQueryProvider";
import React, { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ReactQueryProvider>
          <div className="dark:bg-boxdark-2 dark:text-bodydark">
            {loading ? <Loader /> : children}
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
