export interface ILocation {
    street: string;
    city: string;
    country: string;
}

export interface ICompetition {
    name: string;
    category_id: number;
    date_weight: string;
    description: string;
    event_date: string;
    event_location: ILocation;
    weighing_location: ILocation;
}