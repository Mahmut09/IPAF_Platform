import { FC } from 'react'
import { Segmented } from 'antd'
import { Card } from 'antd'
import Styles from './Tournaments.module.css'

const { Meta } = Card;

const data = [
    {
        title: "Открытый чемпионат города Астаны, февраль 2024",
        description: "www.instagram.com",
    },
    {
        title: "Открытый чемпионат города Астаны, февраль 2024",
        description: "www.instagram.com",
    },
    {
        title: "Открытый чемпионат города Астаны, февраль 2024",
        description: "www.instagram.com",
    },
    {
        title: "Открытый чемпионат города Астаны, февраль 2024",
        description: "www.instagram.com",
    },
    {
        title: "Открытый чемпионат города Астаны, февраль 2024",
        description: "www.instagram.com",
    },
    {
        title: "Открытый чемпионат города Астаны, февраль 2024",
        description: "www.instagram.com",
    },
    {
        title: "Открытый чемпионат города Астаны, февраль 2024",
        description: "www.instagram.com",
    },
    {
        title: "Открытый чемпионат города Астаны, февраль 2024",
        description: "www.instagram.com",
    },
];

const Tournaments: FC = () => {
    return (
        <div>
            <Segmented<string>
                options={['Пауэрлифтинг', 'Легкая атлетика', 'Тяжелая атлетика', 'Бокс', 'Дзюдо']}
                onChange={(value) => {
                    console.log(value);
                }}
            />
            <div className={Styles.cards}>
                {data.map((tournament) => (
                    <Card
                        hoverable
                        // style={{ width: 240 }}
                        cover={<img alt="example" src="https://img.freepik.com/premium-vector/powerlifting-logo-with-muscle-man-hold-the-barbell_9645-2693.jpg" />}
                    >
                        <Meta title={tournament.title} description={tournament.description} />
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Tournaments