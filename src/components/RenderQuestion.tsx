import React from 'react'

interface prop
{
   names:string
}

export const RenderQuestion:React.FC <prop>= ({names})=>
{
    return(
        <>
           the value is {names}
        </>
    )

}