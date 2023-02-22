import moment from "moment";

export const rules = {
    reqired: (message = "") =>({
        required: true,
        message
    }),
    isDateAfter: (message) => () =>({
        validator(_, value){
            console.log("DateVqalue", value)
            if(value.isSameOrAfter(moment())){
                return Promise.resolve()
            }
            return Promise.reject(new Error(message))
        }
    })
}