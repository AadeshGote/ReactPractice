import React from "react";

const Nav=(props)=>{

    let Data=props.data
    return(
        <div>
            <table border={"2px"} cellPadding={"2px"}>
                <tr>
                    <th>NAME</th>
                    <th>ID</th>
                    <th>PHONE</th>
                </tr>
                <tr>
                    <th>{Data[0].name}</th>
                    <th>{Data[0].ID}</th>
                    <th>{Data[0].phone}</th>
                </tr>
                <tr>
                    <th>{Data[1].name}</th>
                    <th>{Data[1].ID}</th>
                    <th>{Data[1].phone}</th>
                </tr>
                <tr>
                    <th>{Data[2].name}</th>
                    <th>{Data[2].ID}</th>
                    <th>{Data[2].phone}</th>
                </tr>
            </table>
        </div>
    )
}
export default Nav