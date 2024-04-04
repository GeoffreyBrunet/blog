import { cn } from "@/lib/utils";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className={cn("mt-auto w-full border-t bg-gray-100 p-4 text-xs")}>
      <div
        className={cn(
          "mx-auto flex w-full max-w-xl flex-wrap items-center justify-between gap-2 text-gray-500",
        )}
      >
        <p>© 2024 Geoffrey Brunet</p>
        <p>Made with love by me.</p>
      </div>
    </footer>
  );
};

export default Footer;
