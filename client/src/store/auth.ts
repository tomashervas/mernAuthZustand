import {create} from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
    token: string,
    user: any,
    isAuth: boolean,
    setToken: (token: string) => void,
    setUser: (user: any) => void,
    logout: () => void
}

export const useAuthStore = create(
    persist<State>((set)=>({
        token: '',
        user: null,
        isAuth: false,
        setToken: (token: string) => set({token}),
        setUser: (user: any) => set({user, isAuth: true}),
        logout: () => set({token: '', user: null, isAuth: false})
    }),{name: 'auth'}),
)

