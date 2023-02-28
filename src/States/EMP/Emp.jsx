import React,{Component} from "react";

class Emp extends Component
{
    constructor()
    {
        super()
        this.state={
            Ename:"Aadesh",
            Empid:1,
            Salary:50000,
            Profile:"DEV"
        }
    }

    render()
    {
        return(
            <table border={"2px"} cellPadding={"10px"}>
               <tr>
               <th>EMP NAME</th>
               <th>EMP ID</th>
               <th>Salary</th>
               <th>Profile</th>
               </tr>

               <tr>
                <td>{this.state.Ename}</td>
                <td>{this.state.Empid}</td>
                <td>{this.state.Salary}</td>
                <td>{this.state.Profile}</td>
               </tr>
            </table>
        )
    }
}
export default Emp