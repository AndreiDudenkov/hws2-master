const initState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType): {isLoading: boolean} => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING':
            let res = {...state}
            res.isLoading = !action.isLoading
            return res
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
