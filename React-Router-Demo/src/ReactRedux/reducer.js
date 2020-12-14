export default function reducer(state={nun:0},action) {

    switch(action.type) {
        case 'add':
            state.nun++ ;
        break;
        case 'sub':
            state.nun-- ;
        break;
        default:
            break
    }
    return {...state}

}