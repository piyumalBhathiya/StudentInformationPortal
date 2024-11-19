export default function Profile(props){
    return(
        <>
            <table>
                <tr>
                    <td rowspan={7}>
                        <img src={require('../Assets/img'+props.student.ProfilePic)} alt='Profile Picture' />
                    </td>
                    <td>ID: {props.student.studentId}</td>
                </tr>
            </table>
        </>
    );
}