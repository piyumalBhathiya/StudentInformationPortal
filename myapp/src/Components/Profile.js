export default function Profile(props){
    return(
        <>
            <table>
                <tr>
                    <td rowspan={7}>
                        <img className='profile' src={require('../Assets/img'+props.stu.ProfilePic)} alt="Profile Picture" />
                    </td>
                    <td>ID: {props.stu.studentId}</td>
                </tr>
                <tr>
                    <td>Full Name: {props.stu.firstName + ' ' + props.stu.lastName}</td>
                </tr>
                <tr>
                    <td>Age: {props.stu.age}</td>
                </tr>
                <tr>
                    <td>Course: {props.stu.course}</td>
                </tr>
                <tr>
                    <td>Gender: {props.stu.gender}</td>
                </tr>
                <tr>
                    <td>Adderss: {props.stu.address.city + ' ' + props.stu.address.country}</td>
                </tr>
                <tr>
                    <td>Skills: {props.stu.address.city.map(skill=>skill+=', ')}</td>
                </tr>

            </table>
        </>
    );
}