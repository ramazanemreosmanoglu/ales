import { useRouter } from 'next/router';
import { useState } from 'react';
import HeadSection from "../../components/HeadSection";
import NavbarAles from "../../components/NavbarAles";
import Question from "../../components/Question";
import QuestionChooser from "../../components/QuestionChooser";
import {
    Row,
    Col,
    Container,
    Button,
    Modal,
} from "react-bootstrap";
import axios from 'axios';

const EMPTY_VALUE = "x";


const empty_data = {
    "title": "Yukleniyor...",
    "questions": [
        {
            no: 1,
            description: "...",
            options: [
                ["a", "..."],
                ["b", "..."],
                ["c", "..."],
                ["d", "..."],
                ["e", "..."],
            ],
            true_answer: "a",
        },
    ]
}

function fillArray(value, len) {
    if (len == 0) return [];
    var a = [value];
    while (a.length * 2 <= len) a = a.concat(a);
    if (a.length < len) a = a.concat(a.slice(0, len - a.length));
    return a;
}

const ConfirmModal = (props) => {
    return (
        <Modal show={props.show} onHide={() => props.handleClose(false)}>

        <Modal.Body>Emin misiniz?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.handleClose(false)}>
            Vazgec
          </Button>
          <Button variant="primary" onClick={() => props.handleClose(true)}>
            Testi Bitir
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

const collect_right_answers = (questions) => {
    var result = [];

    for(var q of questions) {
        result.push(q.true_answer)
    }
    return result;
}

const compare_answers = (q1, q2) => {
    var results = [];

    for(var i=0; i<q1.length; i++) {
        if(q1[i] === q2[i]) {
            results.push([true]);
        } else {
            results.push([false, q2[i]]);
        }
    }

    return results;
}

export default function Test () {
    const router = useRouter();
    const {id} = router.query;
    // TODO: API requests

    const [notFound, setNotFound] = useState(false);
    const [data, setData] = useState(empty_data);

    axios.get("http://127.0.0.1:8000/get_test/?id="+id)
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            setNotFound(true)
        })


    const [count, setCount] = useState(1);
    const [answers, setAnswers] = useState(fillArray(EMPTY_VALUE, data.questions.length));
    const [finished, setFinished] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    const handleClose = (res) => {
        if(res) {
            setFinished(true)
        }
        setModalShow(false);
    }

    const on_select = n => setCount(n);

    const right_answers = collect_right_answers(data.questions);
    const results = compare_answers(answers, right_answers); // Compare answers and get results as an array.

    if(notFound) {
        return (<>
                    <HeadSection title={"Test Bulunamadi - Ales"}/>
                    <NavbarAles/>
                    <Container>
                        <h1>Test Bulunamadi.</h1>
                    </Container>
            </>
        )
    }

    return (<>
        <HeadSection title={data.title + " - Ales Test"}/>
        <NavbarAles/>

        <Container>
            {/* Title Section */}
            <h1>{data.title}</h1> 

            <Row>
                <Col xs={10}>
                    {/* Question */}
                    <Question
                        question={data.questions[count-1]}
                        answer={answers[count-1]}
                        setAnswer={(a) => {
                            let new_answers = [...answers];
                            new_answers[count-1] = a;
                            setAnswers(new_answers);
                        }}
                        isFinished={finished}
                    />
                </Col>

                <Col>
                    {/* Question Chooser */}
                    <QuestionChooser n={data.questions.length} isFinished={finished} on_select={on_select} results={results} />
                    <Button variant="primary" onClick={() => setModalShow(true)} disabled={finished}>Testi Bitir</Button>
                </Col>
            </Row>
        </Container>
        
        {/* Confirmation Modal */}
        <ConfirmModal show={modalShow} handleClose={handleClose} />
    </>)
}