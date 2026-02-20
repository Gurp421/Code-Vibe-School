import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get(api.messages.getWelcome.path, async (req, res) => {
    res.json({
      message: "Hello, VibeCode School!",
      user: "Gunner",
      github: "gurp421"
    });
  });

  return httpServer;
}
