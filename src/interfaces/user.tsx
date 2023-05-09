export interface IUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
    onClickInvite: Function;
    setInvites: Function
    invites: number[]
};