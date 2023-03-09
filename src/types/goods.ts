export interface ListInt {
    userId: number
    id: number
    title: string
    introduce: string
}

interface selectDataInit {
    title: string
    introduce: string
    page: number
    count: number
    pagesize: number
}

export class InitData {
    selectData: selectDataInit = {
        title: "",
        introduce: "",
        page: 1,
        count: 0,
        pagesize: 10
    }
    list: ListInt[] = []
}