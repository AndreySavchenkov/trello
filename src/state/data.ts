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
            }]
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
            }]
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
            }]
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
                    {id: 1, writer: 'Клим', text: 'я забыл, что такое пропсы'},
                    {id: 2, writer: 'Аня', text: 'I enjoy props'}
                ]
            }]
        },

    ]
}