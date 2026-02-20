import { useWelcome } from "@/hooks/use-welcome";
import { WelcomeCard } from "@/components/WelcomeCard";
import { Loader2, AlertCircle } from "lucide-react";

export default function Home() {
  const { data, isLoading, error } = useWelcome();

  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="w-full max-w-4xl mx-auto z-10">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center gap-4 text-muted-foreground animate-pulse">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p>Loading application data...</p>
          </div>
        ) : error ? (
          <div className="w-full max-w-md mx-auto p-6 bg-destructive/10 border border-destructive/20 rounded-2xl flex flex-col items-center text-center gap-4">
            <div className="p-3 bg-destructive/20 rounded-full text-destructive">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-destructive mb-1">Failed to load</h3>
              <p className="text-sm text-muted-foreground">
                {(error as Error).message || "Could not connect to the server."}
              </p>
            </div>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium hover:bg-accent transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : data ? (
          <WelcomeCard 
            message={data.message} 
            user={data.user} 
            github={data.github} 
          />
        ) : null}
      </div>
    </div>
  );
}
