
"use client";
import { useState, useEffect } from "react";
import { Cookie, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = sessionStorage.getItem("cookieConsent");
    
    if (!consent) {
      // Show banner only if no previous choice
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = (accepted: boolean) => {
    setVisible(false);
    
    // Save choice in sessionStorage
    sessionStorage.setItem("cookieConsent", accepted ? "accepted" : "rejected");

    if (accepted) {
      toast.success("Cookies accepted.");
    } else {
      toast.info("Cookies rejected.");
    }
  };

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 pb-6 lg:px-4 px-4 z-50 transition-all duration-500"
      )}
    >
      <div className="bg-background rounded-xl px-5 py-6 md:p-8 max-w-7xl mx-auto shadow-lg border">
        <div className="flex items-center justify-between md:flex-nowrap flex-wrap sm:gap-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 items-center px-3 rounded-full bg-secondary shrink-0">
              <Cookie className="w-4 h-4 text-secondary-foreground" />
            </div>
            <p className="text-muted-foreground md:text-lg text-base">
              By clicking accept, you consent to our use of cookies.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button variant="ghost" className="h-10 transition-colors rounded-full cursor-pointer">
              <Settings2 className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="h-10 px-6 rounded-full font-medium cursor-pointer"
              onClick={() => dismiss(false)}
            >
              Reject all
            </Button>
            <Button
              className="h-10 px-6 rounded-full font-medium cursor-pointer hover:bg-primary/80 transition-colors duration-200"
              onClick={() => dismiss(true)}
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;