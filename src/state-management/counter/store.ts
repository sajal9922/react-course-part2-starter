import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface CounterStore{
    counter: number;
    max: number;
    increament: () => void;
    reset: () => void;
}

const useCounterStor = create<CounterStore>((set) => ({
    counter: 0,
    max: 10,
    increament: () => set((store) => ({ counter: store.counter + 1 })),
    reset: () => set(()=>({ max: 20 })),
}));
if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Counter Store', useCounterStor);
}
export default useCounterStor;