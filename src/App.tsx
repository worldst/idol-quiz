import { Analytics } from "@vercel/analytics/react";

import { Toaster } from "@/components/ui/sonner"
import RootRoutes from "@/routes/RootRoutes";

export default function App() {
  return (
    <div className="mx-auto w-full max-w-[1000px] min-w-[400px]">
      <RootRoutes />
      <Toaster />
      <Analytics />
    </div>
  );
}
