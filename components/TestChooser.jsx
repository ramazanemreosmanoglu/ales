import {
    Table,
    Container,
} from "react-bootstrap";
import Link from "next/link";


export default function TestChooser(props) {
    return (
        <main className="center">
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Test Ismi</th>
                            <th>Alan</th>
                        </tr>
                    </thead>

                    <tbody>
                        {props.data.tests.map(
                            (data) => {
                                return (
                                    <Link href={"/test/" + data.id} key={data.id}>
                                        <tr key={data.id}>
                                            <td>{data.title}</td>
                                            <td>{props.branch}</td>
                                        </tr>
                                    </Link>
                                )
                            }
                        )}
                    </tbody>
                </Table>
            </Container>
        </main>

    )
}