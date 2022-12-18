type StudentsType = {
    students: Array<{
        id: number
        name: string
        age: number
        group: number
        titles: Array<titlesType>
    }>
}

type titlesType = {
    subject: string
    isDone: boolean
}

export const students = [
    {
        id: 0,
        name: "Jago Wormald1",
        age: 25,
        group: 1,
        titles: [
            {subject: "HTML&CSS2", isDone: true},
            {subject: "JS", isDone: true},
            {subject: "React", isDone: true}
        ]
    },
    {
        id: 1,
        name: "Saul Milne2",
        age: 21,
        group: 1,
        titles: [
            {subject: "HTML&CSS2", isDone: false},
            {subject: "JS", isDone: true},
            {subject: "React", isDone: false}
        ]
    },
    {
        id: 2,
        name: "Aariz Hester3",
        age: 22,
        group: 1,
        titles: [
            {subject: "HTML&CSS2", isDone: true},
            {subject: "JS", isDone: true},
            {subject: "React", isDone: false}
        ]
    },
    {
        id: 3,
        name: "Dion Reeve4",
        age: 27,
        group: 1,
        titles: [
            {subject: "HTML&CSS2", isDone: false},
            {subject: "JS", isDone: false},
            {subject: "React", isDone: false}
        ]
    },
    {
        id: 4,
        name: "Anisa Ortega5",
        age: 23,
        group: 1,
        titles: [
            {subject: "HTML&CSS2", isDone: true},
            {subject: "JS", isDone: true},
            {subject: "React", isDone: true}
        ]
    },
    {
        id: 5,
        name: "Blade Cisneros6",
        age: 26,
        group: 2,
        titles: [
            {subject: "HTML&CSS2", isDone: true},
            {subject: "JS", isDone: true},
            {subject: "React", isDone: true}
        ]
    },
    {
        id: 6,
        name: "Malaik Pelpsi",
        age: 25,
        group: 2,
        titles: [
            {subject: "HTML&CSS2", isDone: true},
            {subject: "JS", isDone: true},
            {subject: "React", isDone: true}
        ]
    },
    {
        id: 7,
        name: "Malaikah Phelps7",
        age: 23,
        group: 2,
        titles: [
            {subject: "HTML&CSS2", isDone: true},
            {subject: "JS", isDone: true},
            {subject: "React", isDone: false}
        ]
    },
    {
        id: 8,
        name: "Zeeshan Gallagher8",
        age: 24,
        group: 2,
        titles: [
            {subject: "HTML&CSS2", isDone: true},
            {subject: "JS", isDone: false},
            {subject: "React", isDone: false}
        ]
    },
    {
        id: 9,
        name: "Isobella Vo9",
        age: 20,
        group: 2,
        titles: [
            {subject: "HTML&CSS2", isDone: false},
            {subject: "JS", isDone: false},
            {subject: "React", isDone: false}
        ]
    },
    {
        id: 10,
        name: "Rizwan Mathis10",
        age: 27,
        group: 2,
        titles: [
            {subject: "HTML&CSS2", isDone: false},
            {subject: "JS", isDone: true},
            {subject: "React", isDone: false}
        ]
    },
    {
        id: 11,
        name: "Menaal Leach11",
        age: 24,
        group: 3,
        titles: [
            {subject: "HTML&CSS2", isDone: false},
            {subject: "JS", isDone: true},
            {subject: "React", isDone: false}
        ]
    },
    {
        id: 12,
        name: "Kian Walton12",
        age: 25,
        group: 3,
        titles: [
            {subject: "HTML&CSS2", isDone: true},
            {subject: "JS", isDone: false},
            {subject: "React", isDone: false}
        ]
    },
    {
        id: 13,
        name: "Orion Lamb13",
        age: 28,
        group: 3,
        titles: [
            {subject: "HTML&CSS2", isDone: false},
            {subject: "JS", isDone: false},
            {subject: "React", isDone: false}
        ]
    },
    {
        id: 14,
        name: "Faizah Huynh14",
        age: 24,
        group: 3,
        titles: [
            {subject: "HTML&CSS2", isDone: false},
            {subject: "JS", isDone: false},
            {subject: "React", isDone: true}
        ]
    },
    {
        id: 15,
        name: "Crystal Vaughan15",
        age: 23,
        group: 3,
        titles: [
            {subject: "HTML&CSS2", isDone: true},
            {subject: "JS", isDone: false},
            {subject: "React", isDone: true}
        ]
    },
    {
        id: 16,
        name: "Vivien Hickman16",
        age: 24,
        group: 3,
        titles: [
            {subject: "HTML&CSS2", isDone: false},
            {subject: "JS", isDone: true},
            {subject: "React", isDone: true}
        ]
    },
    {
        id: 17,
        name: "Stuart Lu17",
        age: 27,
        group: 3,
        titles: [
            {subject: "HTML&CSS2", isDone: false},
            {subject: "JS", isDone: true},
            {subject: "React", isDone: true}
        ]
    },
    {
        id: 18,
        name: "Karol Davison18",
        age: 27,
        group: 3,
        titles: [
            {subject: "HTML&CSS2", isDone: false},
            {subject: "JS", isDone: true},
            {subject: "React", isDone: true}
        ]
    },
    {
        id: 19,
        name: "Dario Burns19",
        age: 27,
        group: 3,
        titles: [
            {subject: "HTML&CSS2", isDone: false},
            {subject: "JS", isDone: false},
            {subject: "React", isDone: false}
        ]
    }
]