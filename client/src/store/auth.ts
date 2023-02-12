import {create} from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
    token: string,
    profile: any,
    setToken: (token: string) => void,
    setProfile: (profile: any) => void
}

export const useAuthStore = create(
    persist<State>((set)=>({
        token: '',
        profile: null,
        setToken: (token: string) => set({token}),
        setProfile: (profile: any) => set({profile})
    }),{name: 'auth'}),
)

