import { createContext, useState } from "react"


export enum Time {
    monthly = "Monthly",
    annually = "Annually"
}


export const priceContext = createContext({})


export function PriceContextData (props: any) {

    const [time , setTime] = useState(Time.monthly)

    return (
        <priceContext.Provider value={{time , setTime}}>
            {props.children}
        </priceContext.Provider>
    )
}

