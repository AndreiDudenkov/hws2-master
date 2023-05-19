import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortedUsers = [...state]
            action.payload === 'up'
                ? sortedUsers.sort((a,b)=>a.name > b.name?1:-1)
                : sortedUsers.sort((a,b)=>a.name > b.name?-1:1)

            return sortedUsers // need to fix
        }
        case 'check': {

            return [...state.filter(el=>el.age>= action.payload) ]// need to fix
        }
        default:
            return state
    }
}
