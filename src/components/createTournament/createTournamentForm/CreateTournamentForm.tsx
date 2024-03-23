import { ChangeEvent, FC, useState } from 'react';
import {
    Button,
    DatePicker,
    Form,
    Input,
    Select,
} from 'antd';
import Styles from '../CreateTournament.module.css'
import { useSelector } from 'react-redux';
import { MyRootState } from '../../../store/store';
import { ICompetition } from '../../../types/types';
import { Dayjs } from 'dayjs';
import axios from 'axios';

const CreateTournamentForm: FC = () => {
    const hostURL = useSelector((state: MyRootState) => state.serverURL.value);

    const [tournamentData, setTournamentData] = useState<ICompetition>({
        name: "",
        category_id: 1,
        date_weight: "",
        description: "",
        event_date: "",
        event_location: {
            street: "",
            city: "Karaganda",
            country: "KZ",
        },
        weighing_location: {
            street: "",
            city: "Karaganda",
            country: "KZ",
        },
    })

    const handleCreateTournament = () => {
        console.log(tournamentData);

        axios.post(`${hostURL}/competitions`, JSON.stringify(tournamentData))
            .then(res => {
                console.log(res);
            })
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const keys = name.split('.');
            setTournamentData(prevState => ({
                ...prevState,
                [keys[0]]: {
                    ...prevState[keys[0]],
                    [keys[1]]: value,
                },
            }));
        } else {
            setTournamentData({ ...tournamentData, [name]: value });
        }
    };


    const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTournamentData({ ...tournamentData, "description": e.target.value })
    }

    const handleSelectChange = (value: string) => {
        setTournamentData({ ...tournamentData, category_id: +value });
    };

    const handleDateChange = (_: Dayjs, dateString: string | string[], name: string | string[]) => {
        setTournamentData(prevState => ({
            ...prevState,
            [name]: dateString,
        }));
    };

    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            className={Styles.form}
            onFinish={handleCreateTournament}
        >
            <div className={Styles.column}>
                <Form.Item>
                    <Input
                        placeholder='Название турнира'
                        required
                        name='name'
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item>
                    <Select placeholder='Дисциплина'
                        onChange={(value) => handleSelectChange(value)}
                    >
                        <Select.Option value="1">Пауэрлифтинг</Select.Option>
                        <Select.Option value="2">Тяжелая атлетика</Select.Option>
                        <Select.Option value="3">Легкая атлетика</Select.Option>
                        <Select.Option value="4">Бокс</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Input
                        placeholder='Адрес взешивания'
                        required
                        name='weighing_location.street'
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item>
                    <DatePicker
                        placeholder='Дата взвешивания'
                        style={{ width: "100%" }}
                        name='date_weight'
                        showTime={{ format: 'HH:mm' }}
                        onChange={(value, dateString) => handleDateChange(value, dateString, 'date_weight')}
                    />
                </Form.Item>
                <Form.Item>
                    <Input.TextArea
                        rows={3}
                        placeholder='Описание турнира'
                        name='description'
                        onChange={handleTextareaChange}
                    />
                </Form.Item>
            </div>
            <div className={Styles.column}>
                <Form.Item>
                    <Input
                        placeholder='Адрес проведения турнира'
                        name='event_location.street'
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item>
                    <DatePicker
                        placeholder='Дата проведения'
                        style={{ width: "100%" }}
                        name='event_date'
                        showTime={{ format: "HH:mm" }}
                        onChange={(value, dateString) => handleDateChange(value, dateString, 'event_date')}
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        className={Styles.btn}
                        type='primary'
                        htmlType='submit'
                    >
                        Создать турнир
                    </Button>
                </Form.Item>
            </div>
        </Form>
    )
}

export default CreateTournamentForm