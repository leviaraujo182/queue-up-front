"use client";

import { CreateUserDto } from "@/dtos/CreateUserDto";
import { LoginDto } from "@/dtos/LoginDto";
import { User } from "@/types/User";
import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { fetchWithAuth, fetchWithoutAuth } from "@/services/api";

type AuthContextType = {
  user: User | null;
  login: (loginDto: LoginDto) => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const getUserById = async (userId: string) => {
    try {
      const response = await fetchWithAuth(`/User/${userId}`, {
        method: "GET",
      });

      const userData = await response.json();
      return userData;
    } catch {
      console.error("Failed to fetch user data");
      setUser(null);
    }
  };

  const login = async (loginDto: LoginDto) => {
    try {
      setIsLoading(true);

      const response = await fetchWithoutAuth("/Auth/", {
        method: "POST",
        body: JSON.stringify(loginDto),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      localStorage.setItem("token", data.token);

      const userId = jwtDecode<{ userId: string }>(data.token).userId;
      const userData = await getUserById(userId);

      setUser(userData || null);

      localStorage.setItem("user", JSON.stringify(userData));

      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, isLoading }}>
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
