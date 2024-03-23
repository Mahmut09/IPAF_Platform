import { ChangeEvent, FC, useState } from 'react';
import {
    Button,
    DatePicker,
    Form,
    Input,
    Select,
    TimePicker,
} from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import Styles from '../CreateTournament.module.css'
import { useSelector } from 'react-redux';
import { MyRootState } from '../../../store/store';
import axios from 'axios';
import { ICompetition } from '../../../types/types';`
`

const CreateTournamentForm: FC = () => {
    const hostURL = useSelector((state: MyRootState) => state.serverURL);

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

        // axios.post(`${hostURL}/competitions`, JSON.stringify(tournamentData))
        //     .then(res => {
        //         console.log(res);
        //     })
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            // Если name содержит точку, это указывает на путь вложенности объекта
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

    // const handleSelectChange = (value: string, option: number) => {
    //     console.log(value);
    //     console.log(tournamentData);

    //     setTournamentData({ ...tournamentData, category_id: +option });
    // };

    // const handleDateTimeChange = (value: Dayjs | null, dateString: string, fieldName: string) => {
    //     if (!value) return;

    //     const [field, type] = fieldName.split('_');
    //     const currentData = tournamentData[field];

    //     let newDateTime;
    //     if (type === 'date') {
    //         const time = currentData.split(' ')[1] || '00:00';
    //         newDateTime = `${dateString} ${time}`;
    //     } else {
    //         const date = currentData.split(' ')[0] || dayjs().format('YYYY-MM-DD');
    //         newDateTime = `${date} ${dateString}`;
    //     }

    //     setTournamentData({ ...tournamentData, [field]: newDateTime });
    // }

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
                    // onChange={(value, option) => handleSelectChange(value, option)}
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
                        name='event_location.street'
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item>
                    <DatePicker
                        placeholder='Дата взвешивания'
                        style={{ width: "100%" }}
                        name='date_weight'
                    // onChange={(value, dateString) => handleDateTimeChange(value, dateString, 'date_weight')}
                    />
                </Form.Item>
                <Form.Item>
                    <TimePicker
                        placeholder='Время начала взвешивания'
                        showHour
                        showMinute
                        style={{ width: "100%" }}
                        name='date_weight_time'
                    // onChange={(value, timeString) => handleDateTimeChange(value, timeString, 'date_weight_time')}
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
                        name='event_location'
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item>
                    <DatePicker
                        placeholder='Дата проведения'
                        style={{ width: "100%" }}
                        name='event_date'
                    // onChange={(value, dateString) => handleDateTimeChange(value, dateString, 'event_date')}
                    />
                </Form.Item>
                <Form.Item>
                    <TimePicker
                        placeholder='Время начала турнира'
                        showHour
                        showMinute
                        style={{ width: "100%" }}
                        name='event_date_time'
                    // onChange={(value, timeString) => handleDateTimeChange(value, timeString, 'event_date_time')}
                    />
                </Form.Item>
                <Form.Item>
                    <Button className={Styles.btn} type='primary'>Создать турнир</Button>
                </Form.Item>
            </div>
        </Form>
    )
}

export default CreateTournamentForm