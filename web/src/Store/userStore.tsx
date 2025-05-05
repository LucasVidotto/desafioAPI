import { create } from "zustand";
import { persist } from "zustand/middleware";

type userState = {
  idPessoa : number,
  nome: string;
  cpf: string;
  dataNascimento: string;
  email: string;
  takeData: (idPessoa: number,nome: string, cpf: string, dataNascimento: string, email: string) => void;
};

export const useUserStore = create(
  persist<userState>(
    (set) => ({
      idPessoa:0,
      nome: "",
      cpf: "",
      dataNascimento: "",
      email: "",
      takeData: (idPessoa,nome, cpf, dataNascimento, email) => set({ idPessoa, nome, cpf, dataNascimento, email }),
      resetData: () => set({ nome: "", cpf: "", dataNascimento: "", email: "" }),
    }),
    {
      name: "user-storage", // nome da chave no localStorage
    }
  )
)
  
;
