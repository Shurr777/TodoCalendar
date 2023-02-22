import {UserAPI} from "../../components/api/api";

const SET_GUESTS = 'SET_GUESTS'
const SET_EVENTS = 'SET_EVENTS'
const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
    isLoading: false,
    events: [],
    guests: []
}


export default function eventReducer(state = initialState, action) {
    switch (action.type) {
        case SET_GUESTS:
            return {
                ...state,
                guests: action.payload
            }
        case SET_EVENTS:
            return {
                ...state,
                events: action.payload
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}

/*---Action Creators*/

export const EventActionCreators = {
    setIsLoading: payload => ({type: SET_IS_LOADING, payload}),
    setGuests: payload => ({type: SET_GUESTS, payload}),
    setEvents: payload => ({type: SET_EVENTS, payload}),

    fetchGuests: () => async (dispatch) => {
        try {
            dispatch(EventActionCreators.setIsLoading(true))
            const response = await UserAPI.getUsers()
            dispatch(EventActionCreators.setGuests(response.data))
            dispatch(EventActionCreators.setIsLoading(false))
        } catch (e) {
            console.log(e)
        }
    },
    createEvent: (event) => async (dispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events)
            json.push(event)
            dispatch(EventActionCreators.setEvents(json))
            localStorage.setItem('events', JSON.stringify(json))
        } catch (e) {
            console.log(e)
        }
    },
    fetchEvents: (username) => async (dispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events)
            const currentUserEvents = json.filter(
                e => e.author === username || e.guest === username
            )
            dispatch(EventActionCreators.setEvents(currentUserEvents))
        }catch (e){
            console.log(e)
        }
    }
}