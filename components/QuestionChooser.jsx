import {
    Nav,
    Card,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMinus } from "@fortawesome/free-solid-svg-icons";

const Right = () =>  <i className="fa fas-check" />
const Wrong = () =>  <i className="fa fas-minus" />
function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}


export default function QuestionChooser(props) {

    return (
        <Card>
            <Card.Body>
                <Nav variant="pills" defaultActiveKey="1" className="flex-column">
                    {range(1, props.n).map(n => {
                        if(props.isFinished) {
                            return (
                                <Nav.Item key={n.toString()} className="navitem">
                                    <Nav.Link eventKey={n.toString()} onSelect={() => props.on_select(n)}>
                                        {n}. Soru
                                        {function() {
                                            let r = props.results[n-1];
                                            // == [true or false, rightanswer]
                                            if (r[0] === true) {
                                                return <Right/>
                                            } else {
                                                return (
                                                    <>
                                                        <Wrong/> {r[1].toUpperCase()}
                                                    </>
                                                )
                                            }
                                        }()}
                                    </Nav.Link>
                                </Nav.Item>
                            )
                        } else {
                            return (
                                <Nav.Item key={n.toString()}>
                                    <Nav.Link eventKey={n.toString()} onSelect={() => props.on_select(n)}>{n}. Soru</Nav.Link>
                                </Nav.Item>
                            )
                        }
                    })}
                </Nav>
            </Card.Body>
        </Card>
    )
}