import {create} from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
    token: string,
    setToken: (token: string) => void,
}

export const useAuthStore = create(
    persist<State>((set)=>({
        token: '',
        setToken: (token: string) => {
            set({token});
        }
    }),{name: 'auth'}),
)

