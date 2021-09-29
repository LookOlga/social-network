import React, {Suspense} from "react";

export const withAuthRedirect = (Component) => {
    return (props) => {
        return <Suspense>
                <Component {...props}/>
            </Suspense>
    }
}