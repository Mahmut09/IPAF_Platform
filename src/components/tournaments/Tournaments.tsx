import { FC, useEffect, useState } from 'react'
import { Segmented } from 'antd'
import { Card } from 'antd'
import Styles from './Tournaments.module.css'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { MyRootState } from '../../store/store';
import { ICompetition } from '../../types/types';
const { Meta } = Card;


interface ICompetitionsResponse {
    competitions: ICompetition[];
}

// const data = [
//     {
//         id: 1,
//         title: "Открытый чемпионат города Астаны, февраль 2024",
//         description: "www.instagram.com",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzVayB9ezqNqwniJA5lssNNfzL7Pb9kn0dQ&usqp=CAU",
//         segment: "Пауэрлифтинг",
//     },
//     {
//         id: 2,
//         title: "Открытый чемпионат города Астаны, февраль 2024",
//         description: "www.instagram.com",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzVayB9ezqNqwniJA5lssNNfzL7Pb9kn0dQ&usqp=CAU",
//         segment: "Бокс",
//     },
//     {
//         id: 3,
//         title: "Открытый чемпионат города Астаны, февраль 2024",
//         description: "www.instagram.com",
//         image: "https://img.freepik.com/premium-vector/powerlifting-logo-with-muscle-man-hold-the-barbell_9645-2693.jpg",
//         segment: "Дзюдо",
//     },
//     {
//         id: 4,
//         title: "Открытый чемпионат города Астаны, февраль 2024",
//         description: "www.instagram.com",
//         image: "https://m.media-amazon.com/images/I/61NlpUEWlGL._UF1000,1000_QL80_.jpg",
//         segment: "Тяжелая атлетика",
//     },
//     {
//         id: 5,
//         title: "Открытый чемпионат города Астаны, февраль 2024",
//         description: "www.instagram.com",
//         image: "https://m.media-amazon.com/images/I/61NlpUEWlGL._UF1000,1000_QL80_.jpg",
//         segment: "Пауэрлифтинг",
//     },
//     {
//         id: 6,
//         title: "Открытый чемпионат города Астаны, февраль 2024",
//         description: "www.instagram.com",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzVayB9ezqNqwniJA5lssNNfzL7Pb9kn0dQ&usqp=CAU",
//         segment: "Бокс",
//     },
//     {
//         id: 7,
//         title: "Открытый чемпионат города Астаны, февраль 2024",
//         description: "www.instagram.com",
//         image: "https://img.freepik.com/premium-vector/powerlifting-logo-with-muscle-man-hold-the-barbell_9645-2693.jpg",
//         segment: "Дзюдо",
//     },
//     {
//         id: 8,
//         title: "Открытый чемпионат города Астаны, февраль 2024",
//         description: "www.instagram.com",
//         image: "https://m.media-amazon.com/images/I/61NlpUEWlGL._UF1000,1000_QL80_.jpg",
//         segment: "Тяжелая атлетика",
//     },
//     {
//         id: 9,
//         title: "Открытый чемпионат города Астаны, февраль 2024",
//         description: "www.instagram.com",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzVayB9ezqNqwniJA5lssNNfzL7Pb9kn0dQ&usqp=CAU",
//         segment: "Тяжелая атлетика",
//     },
//     {
//         id: 10,
//         title: "Открытый чемпионат города Астаны, февраль 2024",
//         description: "www.instagram.com",
//         image: "https://m.media-amazon.com/images/I/61NlpUEWlGL._UF1000,1000_QL80_.jpg",
//         segment: "Тяжелая атлетика",
//     },
// ];

const Tournaments: FC = () => {
    const [currentSegment, setCurrentSegment] = useState("1");
    const [competitionsArr, setCompetitionsArr] = useState<ICompetition[]>([]);

    const serverURL = useSelector((state: MyRootState) => state.serverURL.value);

    useEffect(() => {
        axios.get<ICompetitionsResponse>(`${serverURL}/competitions`)
            .then(res => {
                console.log(res.data);
                setCompetitionsArr(res.data.competitions);
            })
    }, [serverURL]);

    return (
        <div>
            <Segmented<string>
                options={competitionsArr
                    .map(competition => competition.category_id.toString())
                    .filter((value, index, self) => self.indexOf(value) === index)}
                onChange={(value) => {
                    setCurrentSegment(value)
                }}
                className={Styles.segment}
            />
            <div className={Styles.cards}>
                {competitionsArr.map((tournament, i) => (
                    currentSegment === tournament.category_id.toString() ?
                        <Card
                            key={i}
                            hoverable
                            cover={<img alt={tournament.name} src={"data:image/jpeg;base64,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"} />}
                        >
                            <Meta title={tournament.name} description={tournament.description} />
                        </Card>
                        : ""
                ))}
            </div>
        </div>
    )
}

export default Tournaments