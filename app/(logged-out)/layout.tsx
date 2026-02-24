import { LightDarkToggle } from "@/components/ui/light-dark-toggle";

interface ComponentProps {
  children?: React.ReactNode;
}

export default function LoggedOutLayout({ children }: ComponentProps) {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen p-24 justify-center gap-y-4">
        {children}
      </div>
      <LightDarkToggle className="fixed right-2 top-1/2" />
    </>
  );
}
