import api from "@/lib/axios";

interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    company_name?: string;
  };
}

// REGISTER COMPANY
export async function register(data: {
  email: string;
  company_name: string;
  password: string;
}): Promise<AuthResponse> {
  const res = await api.post("/auth/register", data);
  // Save token to localStorage
  localStorage.setItem("token", res.data.token);
  return res.data;
}

// LOGIN COMPANY
export async function login(data: {
  email: string;
  password: string;
}): Promise<AuthResponse> {
  const res = await api.post("/auth/login", data);
  localStorage.setItem("token", res.data.token);
  return res.data;
}

// LOGOUT
export function logout() {
  localStorage.removeItem("token");
}

// GET CURRENT USER (Mock protected call)
export async function getCurrentUser() {
  const res = await api.get("/auth/me");
  return res.data;
}
