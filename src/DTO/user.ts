// src/DTO/user.ts

export interface LoginDTO {
  username: string;
  password: string;
}

export interface RegisterDTO extends LoginDTO {
  isAdmin: boolean;
}

export interface ProfileDto {
  id: string;
}
