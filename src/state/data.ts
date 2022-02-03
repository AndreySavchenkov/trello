type CommentT = {
    id: number,
    writer: string,
    text: string,
}
export type CommentsT = CommentT[]

type CardT = {
    id: number,
    writer: string,
    title: string,
    description: string,
    comments: CommentsT,
}

export type CardsT = CardT[]

type ColumnT = {
    id: number,
    title: string,
    cards: CardsT,
}

type ColumnsT = ColumnT[]

export type DataT = {
    columns: ColumnsT,
}

export const data: DataT = {
    columns: [
        {
            id: 1,
            title: 'TODO',
            cards: [{
                id: 1,
                writer: 'Жека',
                title: 'прочитать книгу',
                description: '',
                comments: [
                    {id: 1, writer: 'Андрей', text: 'кто какую читал?'},
                    {id: 2, writer: 'Клим', text: 'Я не умею читать('}
                ]
            },
                {
                    id: 2,
                    writer: 'Жека',
                    title: 'списать с ментором',
                    description: '',
                    comments: [
                        {id: 1, writer: 'Андрей', text: 'когда напишешь?'},
                    ]
                },
                {
                    id: 3,
                    writer: 'Рома',
                    title: 'позвонить Маше',
                    description: '',
                    comments: [
                        {id: 1, writer: 'Андрей', text: 'передай привет'},
                    ]
                }
            ]
        },
        {
            id: 2,
            title: 'In Progress',
            cards: [{
                id: 1,
                writer: 'Андрей',
                title: 'зделать Trello',
                description: '',
                comments: [
                    {id: 1, writer: 'Коля', text: 'они не новые'},
                    {id: 2, writer: 'Аня', text: 'не осуждаю'}
                ]
            },

                {
                    id: 2,
                    writer: 'Жека',
                    title: 'изменить размер главного блока',
                    description: '',
                    comments: [
                        {id: 1, writer: 'Андрей', text: 'как успехи?'},
                    ]
                },
                {
                    id: 3,
                    writer: 'Рома',
                    title: 'посмотреть курс о react native',
                    description: '',
                    comments: [
                        {id: 1, writer: 'Андрей', text: 'передай привет'},
                    ]
                }
            ]
        },
        {
            id: 3,
            title: 'Testing',
            cards: [{
                id: 1,
                writer: 'Алиса',
                title: 'пишу тесты',
                description: '',
                comments: [
                    {id: 1, writer: 'Михаил', text: 'тестов много не бывает'},
                    {id: 2, writer: 'Аня', text: 'не осуждаю'}
                ]
            },

                {
                    id: 2,
                    writer: 'Жека',
                    title: 'переписать на styled components',
                    description: '',
                    comments: [
                        {id: 1, writer: 'Жека', text: 'почему не module?'},
                    ]
                }
            ]
        },
        {
            id: 4,
            title: 'Done',
            cards: [{
                id: 1,
                writer: 'Марат',
                title: 'почитать о Redux',
                description: '',
                comments: [
                    {id: 1, writer: 'Клим', text: 'не забудь про redux-toolkit'},
                    {id: 2, writer: 'Аня', text: 'I enjoy props'},
                    {id: 1, writer: 'Клим', text: 'не забудь про redux-toolkit'},
                ]
            },

                {
                    id: 2,
                    writer: 'Жека',
                    title: 'разобраться с redux-toolkit',
                    description: '',
                    comments: [
                        {id: 1, writer: 'Глеб', text: 'крутая штука!'},
                        {id: 2, writer: 'Аня', text: 'хочу-хочу'},
                        {id: 3, writer: 'Лиля', text: 'и я'},
                    ]
                },
                {
                    id: 3,
                    writer: 'Рома',
                    title: 'почитать о redux-ducks',
                    description: '',
                    comments: [
                        {id: 1, writer: 'Лёня', text: 'утка?'},
                        {id: 2, writer: 'Катя', text: 'кря)'},
                    ]
                }
            ]
        },

    ]
}