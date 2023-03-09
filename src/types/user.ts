export interface ListInt {
    id: number
    nickName: string
    role: RoleInt[]
    userName: string
}

interface RoleInt {
    role: number
    roleName: string
}

interface selectDataInt {
    role: number
    nickName: string
}

interface roleListInt {
    authority: number[]
    roleId: number
    roleName: string
}

interface ActiveInt {
    id: number
    nickName: string
    role: number[]
    userName: string
}

export class IntData {
    selectData: selectDataInt = {
        role: 0,
        nickName: ""
    }
    list: ListInt[] = [] // 接受用户信息列表
    roleList: roleListInt[] = []
    isShow = false
    active: ActiveInt = {

        id: 0,
        nickName: "",
        role: [],
        userName: "",
    }
}