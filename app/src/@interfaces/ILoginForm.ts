export enum userRole {
  Admin = "admin",
  Veterinarian = "veterinarian",
}

export interface ILoginUser {
  CRMV: string;
  Email: string;
  Password: string;
  userRole?: userRole;
}
