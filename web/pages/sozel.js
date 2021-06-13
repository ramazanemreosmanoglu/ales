import HeadSection from "../components/HeadSection"; // Header
import NavbarAles from "../components/NavbarAles";
import {
    Table,
    Container,
} from "react-bootstrap";
import Link from "next/link";


const example_api = [
    {
        title: "Test 1",
        id: "3ur9j928fj2",
        hardness: 1,
    },

    {
        title: "Test 2",
        id: "krio4roj",
        hardness: 2,

    },

    {
        title: "Test 3",
        id: "ok4r048jf93",
        hardness: 3,

    },
]

const hardness_levels = {
    1: "Kolay",
    2: "Orta",
    3: "Zor",
}

function table_generator(data) {
    const hardness = (lev) => hardness_levels[lev];
    return (
        <Link href={"/test/" + data.id}>
            <tr key={data.id}>
                <td>{data.title}</td>
                <td>{hardness(data.hardness)}</td>
            </tr>
        </Link>
    )
}

export default function Sozel() {
    return (
        <>  
            <HeadSection title="Ales Test - Sozel"/>
            <NavbarAles/>

            <main className="center">
                <Container>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Test Ismi</th>
                                <th>Zorluk</th>
                            </tr>
                        </thead>

                        <tbody>
                            {example_api.map(table_generator)}
                        </tbody>
                    </Table>
                </Container>
            </main>
        </>
    )
}