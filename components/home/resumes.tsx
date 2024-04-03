import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Resumes: React.FC = () => {
  return (
    <div className={cn("pb-2")}>
      <h2 className={cn("pb-2")}>Mon curriculum vitae</h2>
      <div className="flex justify-start">
        <Link
          href="https://github.com/GeoffreyBrunet/cv/blob/main/cv-brunet-geoffrey.pdf"
          target="_blank"
          className={cn(`${buttonVariants({ variant: "outline" })} mr-4`)}
        >
          CV.pdf
        </Link>
        <Link
          href="https://github.com/GeoffreyBrunet/cv/blob/main/cv-brunet-geoffrey.tex"
          target="_blank"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          CV.tex
        </Link>
      </div>
    </div>
  );
};

export default Resumes;
