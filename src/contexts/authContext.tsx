"use client";

import { CreateUserDto } from "@/dtos/CreateUserDto";
import { LoginDto } from "@/dtos/LoginDto";
import api from "@/services/api";
import { User } from "@/types/User";

import { createContext, useContext, useState } from "react";

type AuthContextType = {
  user: User | null;
  login: (loginDto: LoginDto) => void;
  createUser: (createUserDto: CreateUserDto) => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (loginDto: LoginDto) => {
    try {
      setIsLoading(true);
      const response = await api.post("/Auth/", loginDto);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const createUser = async (createUserDto: CreateUserDto) => {
    try {
      setIsLoading(true);
      const response = await api.post("/User/", createUserDto);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, createUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }
  return context;
}
