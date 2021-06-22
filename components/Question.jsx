import {
    Form,
    Card,
} from "react-bootstrap"


export default function Question(props) {
    const handleChange = (e) => {
        props.setAnswer(e.target.value);
    }


    return (
        <Card>
            <Card.Body>
                <strong className="q-num">{props.question.no}. Soru</strong>
                <p>{props.question.description}</p>

                <Form>
                    {props.question.options.map(x => {
                        return (
                            <Form.Check
                                type="radio"
                                id={`${x[0]}-${props.question.no.toString()}`}
                                label={x[0].toUpperCase() + ": " + x[1]}
                                key={x[0]}
                                name={`options-group-${props.question.no.toString()}`}
                                onChange={handleChange}
                                value={x[0]}
                                checked={(props.answer === x[0]) ? true : false}
                                disabled={props.isFinished}
                            />
                        )
                    })}
                </Form>
            </Card.Body>
        </Card>
    )
}