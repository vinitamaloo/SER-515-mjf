import Table from 'react-bootstrap/Table'

export default function RefereeList() {

    return (
        <body>
        <div style={{marginTop:60}} className="referees">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Application Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>mark.otto@gmail.com</td>
                    <td>In progress</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>jacob.thornton@gmail.com</td>
                    <td>In progress</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>Goldberg</td>
                    <td>larry.goldberg@gmail.com</td>
                    <td>In progress</td>
                    </tr>
                </tbody>
            </Table>
        </div>
        </body>
    );

}