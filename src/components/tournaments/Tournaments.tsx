import { FC, useEffect, useState } from 'react'
import { Segmented } from 'antd'
import { Card } from 'antd'
import Styles from './Tournaments.module.css'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { MyRootState } from '../../store/store';
import { ICompetition } from '../../types/types';
import { Link } from 'react-router-dom'

interface ICompetitionsResponse {
    competitions: ICompetition[];
}

const { Meta } = Card;

const Tournaments: FC = () => {
    const [currentSegment, setCurrentSegment] = useState("1");
    const [competitionsArr, setCompetitionsArr] = useState<ICompetition[]>([]);

    const serverURL = useSelector((state: MyRootState) => state.serverURL.value);

    useEffect(() => {
        axios.get<ICompetitionsResponse>(`${serverURL}/competitions`)
            .then(res => {
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
                        <Link to={`/tournaments/${encodeURIComponent(tournament.name)}`} key={i} >
                            <Card
                                hoverable
                                cover={<img alt={tournament.name} src={"https://img.freepik.com/premium-vector/powerlifting-logo-with-muscle-man-hold-barbell_9645-2693.jpg"} />}
                            >
                                <Meta title={tournament.name} description={tournament.description} />
                            </Card>
                        </Link>
                        : ""
                ))}
            </div>
        </div>
    )
}

export default Tournaments