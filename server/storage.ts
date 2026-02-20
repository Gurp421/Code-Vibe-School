import { db } from "./db";
import { messages, type InsertMessage, type Message } from "@shared/schema";

export interface IStorage {
  // Minimal storage interface as we don't have complex requirements yet
}

export class DatabaseStorage implements IStorage {
  // Implement methods if needed
}

export const storage = new DatabaseStorage();
