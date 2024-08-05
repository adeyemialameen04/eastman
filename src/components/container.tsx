import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("px-4 md:px-8 mx-auto max-w-[1200px]", className)}>
      {children}
    </div>
  );
};
export default Container;
