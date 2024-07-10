import { create } from "zustand";

interface CounterStore{
    counter: number;
    increament: () => void;
    reset: () => void;
}

const useCounterStor = create<CounterStore>((set) => ({
    counter: 0,
    increament: () => set((store) => ({ counter: store.counter + 1 })),
    reset: () => set(()=>({ counter: 0 })),
}));
export default useCounterStor;