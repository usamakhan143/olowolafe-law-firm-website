"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    setIsLoading(true);
    setProgress(0);

    let progressValue = 0;

    // Progressive loading simulation
    const progressInterval = setInterval(() => {
      progressValue += Math.random() * 20 + 10;
      
      if (progressValue >= 100) {
        progressValue = 100;
        clearInterval(progressInterval);
      }
      
      setProgress(progressValue);
    }, 100);

    // Complete loading
    const completeLoading = () => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 300);
    };

    const loadingTimer = setTimeout(completeLoading, 1000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(loadingTimer);
    };
  }, [pathname, searchParams, mounted]);

  if (!mounted || !isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-navy-900">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 legal-pattern opacity-5"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center">
          
          {/* Simple Spinner */}
          <div className="w-16 h-16 mx-auto mb-8 relative">
            {/* Outer Ring */}
            <div className="absolute inset-0 border-4 border-transparent border-t-gold-400 rounded-full animate-spin"></div>
            {/* Inner Ring */}
            <div className="absolute inset-2 border-2 border-transparent border-b-gold-500 rounded-full animate-spin-reverse"></div>
          </div>

          {/* Progress Bar */}
          <div className="w-64 mx-auto">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-gold-600 to-gold-400 rounded-full transition-all duration-200 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PageLoader;
