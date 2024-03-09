import { FC } from 'react'
import { Tabs } from 'antd';
import Styles from '../CreateTournament.module.css'

import type { TabsProps } from 'antd';

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Общие',
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam libero, in cupiditate magni modi incidunt debitis vel fugit odit voluptate eaque. In temporibus atque autem accusantium molestiae reprehenderit dicta quo.',
    },
    {
        key: '2',
        label: 'Доп информация',
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam libero, in cupiditate magni modi incidunt debitis vel fugit odit voluptate eaque. In temporibus atque autem accusantium molestiae reprehenderit dicta quo.',
    },
    {
        key: '3',
        label: 'Lorem ipsum',
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
];

const CreateTournamentsRules: FC = () => {
    return (
        <div className={Styles.info}>
            <h3>Ознакомьтесь перед созданием турнира: </h3>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    )
}

export default CreateTournamentsRules