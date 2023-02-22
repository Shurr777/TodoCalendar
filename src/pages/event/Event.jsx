import React, {useEffect, useState} from 'react';
import EventCalendar from "../../components/EventCalendar";
import {Button, Layout, Modal, Row} from "antd";
import EventForm from "../../components/EventForm";
import {useActions} from "../../hooks/useActions";
import {useSelector} from "react-redux";

const Event = () => {

    const [modal, setModal] = useState(false)
    const {fetchGuests, createEvent, fetchEvents} = useActions()
    const {guests, events} = useSelector(state => state.eventsReducer)
    const {user} = useSelector(state => state.authReducer)


    useEffect(() =>{
        fetchGuests()
        fetchEvents(user.username)
    },[])

    const addNewEvent = (event) =>{
        setModal(false)
        createEvent(event)

    }

    return (
        <Layout>
            <EventCalendar events={events}/>
            <Row justify="center">
                <Button
                    onClick={() => setModal(true)}
                >
                    Добавить событие
                </Button>
            </Row>
            <Modal
                title="Добавить событие"
                open={modal}
                footer={null}
                onCancel={() => setModal(false)}
            >
                <EventForm
                    guests={guests}
                    submit={addNewEvent}
                />
            </Modal>
        </Layout>
    );
};

export default Event;