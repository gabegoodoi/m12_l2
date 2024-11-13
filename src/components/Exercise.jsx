import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Row, Col, Form, Alert } from 'react-bootstrap';
import { addExercise, removeExercise } from '../features/exercisesSlice';
import { useState } from 'react';

const Exercise = () => {
    const dispatch = useDispatch();
    const exercises = useSelector((state) => state.exercises.workouts);
    const [workout, setWorkout] = useState('');
    const [specs, setSpecs] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!workout || !specs || !date) {
            setError('Must fill all fields!');
            return;
        }

        const newExercise = { id: Date.now(), workout, specs, date};
        dispatch(addExercise(newExercise));

        setWorkout('');
        setSpecs('');
        setDate('');
        setError('');
    };

    const handleRemove = (id) => {
        dispatch(removeExercise({ id }));
    };

    return (
        <div>
            <h2>Exercises</h2>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit} className="mb-4">
                <Form.Group controlId="workout">
                    <Form.Label>Workout</Form.Label>
                    <Form.Control
                        type="text"
                        value={workout}
                        onChange={(event) => setWorkout(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="specs" className="mt-2">
                    <Form.Label>Specs</Form.Label>
                    <Form.Control
                        type="text"
                        value={specs}
                        onChange={(event) => setSpecs(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="date" className="mt-2">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        type="text"
                        value={date}
                        onChange={(event) => setDate(event.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                    Add Exercise
                </Button>
            </Form>

            <Row xs={1} md={4} className="g-4">
                {exercises.map((exercise) => (
                    <Col key={exercise.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{exercise.workout}</Card.Title>
                                <Card.Text>Specs: {exercise.specs}</Card.Text>
                                <Card.Text>Date: {exercise.date}</Card.Text>
                                <Button
                                    variant="danger"
                                    onClick={() => handleRemove(exercise.id)} 
                                >
                                    Remove
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Exercise;
