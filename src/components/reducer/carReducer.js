import { TYPES } from "../action/carAction";

export const carInitialState = { car: [] }
export function reducer(state, action) {
    // console.log(setItem)
    switch (action.type) {
        case TYPES.ADDITEM: {
            return {
                ...state, car: [...state.car, action.payload]
            }

        }
        case TYPES.DELETEITEM:

            console.log(action.payload, "eliminar")
            let newCar;


            newCar = state.car.filter((el) => el.id !== parseInt(action.payload));

            return {
                ...state, car: newCar
            }

        case TYPES.UPDATEITEM:

            state.car = state.car.filter((el) => el.id !== parseInt(action.payload.id));

            console.log(state.car)
            return {
                ...state, car: [...state.car, action.payload]

            };
        // case TYPES.DELETEALLITEM:
        // return carInitialState;
        default:
            console.log("el defecto")
            break;
    }
}