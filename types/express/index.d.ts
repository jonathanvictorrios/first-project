import { Request } from "express";

declare module "express-serve-static-core" {
  interface Request {
    user?: any; // Puedes reemplazar 'any' por el tipo de usuario que uses
  }
}