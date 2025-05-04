import { create } from "zustand";
import { persist } from "zustand/middleware";

type userState = {
  nome: string;
  cpf: string;
  dataNascimento: string;
  email: string;
  takeData: (nome: string, cpf: string, dataNascimento: string, email: string) => void;
};

export const useUserStore = create(
  persist<userState>(
    (set) => ({
      nome: "",
      cpf: "",
      dataNascimento: "",
      email: "",
      takeData: (nome, cpf, dataNascimento, email) => set({ nome, cpf, dataNascimento, email }),
    }),
    {
      name: "user-storage", // nome da chave no localStorage
    }
  )
);
