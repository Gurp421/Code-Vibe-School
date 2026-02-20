import { motion } from "framer-motion";
import { Github, Code2, Sparkles } from "lucide-react";

interface WelcomeCardProps {
  message: string;
  user: string;
  github: string;
}

export function WelcomeCard({ message, user, github }: WelcomeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-lg mx-auto"
    >
      <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden group">
        {/* Decorative background element */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500" />
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-6">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 rotate-3 group-hover:rotate-6 transition-transform duration-300"
          >
            <Code2 className="w-10 h-10 text-white" />
          </motion.div>

          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
              Welcome To
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient leading-tight">
              VibeCode School
            </h1>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="space-y-4 w-full">
            <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-border/50 hover:bg-background/80 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground font-medium">Student</p>
                  <p className="font-bold text-foreground">{user}</p>
                </div>
              </div>
            </div>

            <a 
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-border/50 hover:bg-background/80 transition-colors group/link cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-900/5 dark:bg-slate-100/10 rounded-lg text-foreground">
                  <Github className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground font-medium">GitHub</p>
                  <p className="font-mono text-sm font-medium text-foreground">@{github}</p>
                </div>
              </div>
              <div className="opacity-0 group-hover/link:opacity-100 transform translate-x-[-10px] group-hover/link:translate-x-0 transition-all duration-300">
                <span className="text-primary text-sm font-medium">Visit →</span>
              </div>
            </a>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            {message}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
