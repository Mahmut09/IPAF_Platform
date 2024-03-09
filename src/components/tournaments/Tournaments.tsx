import { FC, useState } from 'react'
import { Segmented } from 'antd'
import { Card } from 'antd'
import Styles from './Tournaments.module.css'

const { Meta } = Card;

const data = [
    {
        id: 1,
        title: "Открытый чемпионат города Астаны, февраль 2024",
        description: "www.instagram.com",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzVayB9ezqNqwniJA5lssNNfzL7Pb9kn0dQ&usqp=CAU",
        segment: "Пауэрлифтинг",
    },
    {
        id: 2,
        title: "Открытый чемпионат города Астаны, февраль 2024",
        description: "www.instagram.com",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzVayB9ezqNqwniJA5lssNNfzL7Pb9kn0dQ&usqp=CAU",
        segment: "Бокс",
    },
    {
        id: 3,
        title: "Открытый чемпионат города Астаны, февраль 2024",
        description: "www.instagram.com",
        image: "https://img.freepik.com/premium-vector/powerlifting-logo-with-muscle-man-hold-the-barbell_9645-2693.jpg",
        segment: "Дзюдо",
    },
    {
        id: 4,
        title: "Открытый чемпионат города Астаны, февраль 2024",
        description: "www.instagram.com",
        image: "https://m.media-amazon.com/images/I/61NlpUEWlGL._UF1000,1000_QL80_.jpg",
        segment: "Тяжелая атлетика",
    },
    {
        id: 5,
        title: "Открытый чемпионат города Астаны, февраль 2024",
        description: "www.instagram.com",
        image: "https://m.media-amazon.com/images/I/61NlpUEWlGL._UF1000,1000_QL80_.jpg",
        segment: "Пауэрлифтинг",
    },
    {
        id: 6,
        title: "Открытый чемпионат города Астаны, февраль 2024",
        description: "www.instagram.com",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzVayB9ezqNqwniJA5lssNNfzL7Pb9kn0dQ&usqp=CAU",
        segment: "Бокс",
    },
    {
        id: 7,
        title: "Открытый чемпионат города Астаны, февраль 2024",
        description: "www.instagram.com",
        image: "https://img.freepik.com/premium-vector/powerlifting-logo-with-muscle-man-hold-the-barbell_9645-2693.jpg",
        segment: "Дзюдо",
    },
    {
        id: 8,
        title: "Открытый чемпионат города Астаны, февраль 2024",
        description: "www.instagram.com",
        image: "https://m.media-amazon.com/images/I/61NlpUEWlGL._UF1000,1000_QL80_.jpg",
        segment: "Тяжелая атлетика",
    },
    {
        id: 9,
        title: "Открытый чемпионат города Астаны, февраль 2024",
        description: "www.instagram.com",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzVayB9ezqNqwniJA5lssNNfzL7Pb9kn0dQ&usqp=CAU",
        segment: "Тяжелая атлетика",
    },
    {
        id: 10,
        title: "Открытый чемпионат города Астаны, февраль 2024",
        description: "www.instagram.com",
        image: "https://m.media-amazon.com/images/I/61NlpUEWlGL._UF1000,1000_QL80_.jpg",
        segment: "Тяжелая атлетика",
    },
];

const Tournaments: FC = () => {
    const [currentSegment, setCurrentSegment] = useState("Пауэрлифтинг");

    return (
        <div>
            <Segmented<string>
                options={['Пауэрлифтинг', 'Легкая атлетика', 'Тяжелая атлетика', 'Бокс', 'Дзюдо']}
                onChange={(value) => {
                    setCurrentSegment(value)
                }}
                className={Styles.segment}
            />
            <div className={Styles.cards}>
                {data.map((tournament) => (
                    currentSegment === tournament.segment ?
                    <Card
                        key={tournament.id}
                        hoverable
                        cover={<img alt="example" src={tournament.image} />}
                    >
                        <Meta title={tournament.title} description={tournament.description} />
                    </Card>
                    : ""
                ))}
            </div>
        </div>
    )
}

export default Tournaments