import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

// Hook to fetch the welcome message
export function useWelcome() {
  return useQuery({
    queryKey: [api.messages.getWelcome.path],
    queryFn: async () => {
      const res = await fetch(api.messages.getWelcome.path, { 
        credentials: "include" 
      });
      
      if (!res.ok) {
        throw new Error("Failed to fetch welcome message");
      }
      
      // Parse with Zod schema from shared routes
      return api.messages.getWelcome.responses[200].parse(await res.json());
    },
  });
}
