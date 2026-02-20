import { z } from 'zod';
import { insertMessageSchema, messages } from './schema';

export const errorSchemas = {
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  messages: {
    getWelcome: {
      method: 'GET' as const,
      path: '/api/welcome' as const,
      responses: {
        200: z.object({
          message: z.string(),
          user: z.string(),
          github: z.string()
        }),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
