export type StudentType = {
    id: number,
    name: string
}

export type StateType = {
    student: Array<StudentType>
}

export const State: StateType = {
    student: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]
}



