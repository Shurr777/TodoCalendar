import React, {useState} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {useSelector} from "react-redux";
import {formatDate} from "../utils/formatDate";
import {rules} from "../utils/rules";

const EventForm = (props) => {

    const user = useSelector(state => state.authReducer.user)

    const [event, setEvent] = useState({
        author: '',
        date: '',
        description: '',
        guest: '',
    })



    const selectDate = (date) => {
       if(date){
           setEvent({...event, date: formatDate(date.toDate())})
       }
    }

    const onSubmitForm = () =>{
        props.submit({...event, author: user.username})
    }

    return (
        <Form onFinish={onSubmitForm}>
            <Form.Item
                label="Описание события"
                name="description"
                rules={[{required: true, message: ''}]}
            >
                <Input value={event.description}
                       onChange={e => setEvent({...event, description: e.target.value})}
                />
            </Form.Item>
            <Form.Item
                label="Дата события"
                name="date"
                rules={[{required: true, message: ''}]}
            >
                <DatePicker
                    onChange={(date) => selectDate(date)}
                />
            </Form.Item>
            <Form.Item
                label="Выберите гостя"
                name="guest"
                rules={[{required: true, message: ''}]}
            >
                <Select
                    onChange={(guest) => setEvent({...event, guest})}
                >
                    {props.guests.map(guest =>
                        <Select.Option
                            value={guest.username}
                            key={guest.username}
                        >
                            {guest.username}
                        </Select.Option>
                    )}
                </Select>
            </Form.Item>
            <Row justify="end">
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        Добавить событие
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;