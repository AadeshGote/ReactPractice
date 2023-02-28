import React from "react";

const Emp=(props)=>{
    let data=props.empDetails1;

    return(
        <div>
            <table cellPadding={"10px"} border={"2px"}>
                <tr>
                    <th>EMP ID</th>
                    <th>EMP NAME</th>
                    <th>EMP SAL</th>
                    <th>EMP DESIGNATION</th>
                    <th>EMP GENDER</th>
                    <th>EMP EDUCATION</th>
                    <th>EMP EXP</th>
                    <th>EMP COMPANIES</th>
                    <th>EMP IMG</th>
                    <th>EMP SKILLS</th>
                    <th>EMP CITY</th>
                </tr>
                    
                    <tr>{data.map((x)=>{
                        return(
                            <tr>
                                <td>{x.emp_id}</td>
                                <td>{x.emp_name}</td>
                                <td>{x.emp_sal}</td>
                                <td>{x.emp_des}</td>
                                <td>{x.emp_gender}</td>
                                <td>{x.emp_education}</td>
                                <td>{x.emp_exp}</td>
                                <td>
                                    <ul>
                                        <li>{x.emp_Companies.previous}</li>
                                        <li>{x.emp_companies.current}</li>
                                    </ul>
                                </td>
                                <td>{x.emp_img}</td>
                                <td>
                                    <ul>
                                    {x.emp_skills.map((x)=>{
                                        return <li>{x}</li>
                                    })}
                                    </ul>
                                </td>
                                <td>{x.emp_city}</td>
                            </tr>
                        )
                    })}</tr>
            </table>
        </div>
    )
}
export default Emp