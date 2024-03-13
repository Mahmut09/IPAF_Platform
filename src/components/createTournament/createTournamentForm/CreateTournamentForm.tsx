import { FC } from 'react';
import {
    Button,
    DatePicker,
    Form,
    Input,
    Select,
    TimePicker,
} from 'antd';
import Styles from '../CreateTournament.module.css'

const CreateTournamentForm: FC = () => {
    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            // style={{ maxWidth: 600 }}
            className={Styles.form}
        >
            <div className={Styles.column}>
                <Form.Item>
                    <Input placeholder='Название турнира' required />
                </Form.Item>
                <Form.Item>
                    <Select placeholder='Дисциплина'>
                        <Select.Option value="powerlifting">Пауэрлифтинг</Select.Option>
                        <Select.Option value="demo">Тяжелая атлетика</Select.Option>
                        <Select.Option value="demo1">Легкая атлетика</Select.Option>
                        <Select.Option value="demo2">Бокс</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Input placeholder='Адрес взешивания' required />
                </Form.Item>
                <Form.Item>
                    <DatePicker placeholder='Дата взвешивания' style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item>
                    <TimePicker placeholder='Время начала взвешивания' style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item>
                    <Input.TextArea rows={3} placeholder='Описание турнира' />
                </Form.Item>
            </div>
            <div className={Styles.column}>
                <Form.Item>
                    <Input placeholder='Место проведения турнира' />
                </Form.Item>
                <Form.Item>
                    <Input placeholder='Адрес проведения турнира' />
                </Form.Item>
                <Form.Item>
                    <DatePicker placeholder='Дата проведения' style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item>
                    <TimePicker placeholder='Время начала турнира' style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item>
                    <Button>Создать турнир</Button>
                </Form.Item>
            </div>
        </Form>
    )
}

export default CreateTournamentForm