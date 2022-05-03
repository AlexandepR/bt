

export const initState = {
    isSignIn: false,
    isInitialized: false,
    profile: {} as LoginResponseType,
    error: '',
}

export const signInReducer = (state: InitStateType = initState, action: ActionType) : InitStateType => {
    switch (action.type) {
        case 'APP/SET-LOGIN-IN' :
            return {...state, isSignIn: action.value}
        return state;
    }
}