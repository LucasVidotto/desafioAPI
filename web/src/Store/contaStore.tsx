import { create } from "zustand";
import { persist } from "zustand/middleware";

type contaState = {
  idConta: number;
  saldo: number;
  limiteSaqueDiario: number;
  tipoConta: number;
  takeConta: (idConta: number,saldo: number, limiteSaqueDiario: number, tipoConta: number) => void;
  resetConta: () => void;
};

export const useContaStore = create(
  persist<contaState>(
    (set) => ({
      idConta:0,
      saldo: 0,
      limiteSaqueDiario: 0,
      tipoConta: 0,
      takeConta: (idConta,saldo,limiteSaqueDiario,tipoConta) => set({idConta,saldo,limiteSaqueDiario,tipoConta }),
      resetConta: () => set({ idConta : 0,saldo : 0,limiteSaqueDiario : 0,tipoConta : 0 }),
    }),
    {
      name: "user-storage", // nome da chave no localStorage
    }
  )
)
  
;
