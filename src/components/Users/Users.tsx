import { FC, Fragment, useState } from 'react';
import Skeleton from './Skeleton';
import User from './User';
import { IUser } from '../../interfaces/user';


type UsersProps = {
    isLoading: boolean;
    users: Array<IUser>;
    invites: number[];
    setInvites: Function;
    setSuccess: Function
};


const Users: FC<UsersProps> = ({ users, isLoading, invites, setInvites, setSuccess }) => {
    
    const [searchValue, setSearchValue] = useState('');
    
    const onChangeSearchValue = (event:any) => {
        setSearchValue(event.target.value)
    };

    return (
        <Fragment>
            <div className="search">
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
                <input type="text" placeholder="Найти пользователя..." value={searchValue} onChange={onChangeSearchValue}/>
            </div>
            {isLoading ? (
                <div className="skeleton-list">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            ) : (
                <ul className="users-list">
                    {users.filter((user) => {
                        const fullName = (user.first_name + user.last_name).toLowerCase();
                        return fullName.includes(searchValue.toLowerCase()) || 
                        user.email.includes(searchValue.toLowerCase())
                    })
                        .map((user: IUser) => <User
                            key={user.id}
                            id={user.id}
                            email={user.email}
                            first_name={user.first_name}
                            last_name={user.last_name}
                            avatar={user.avatar} 
                            setInvites={setInvites} 
                            invites={invites} />)}
                </ul>
            )}
            {
                invites.length !== 0 
                ? <button className="send-invite-btn" onClick={() => setSuccess(true)}>Отправить приглашение</button>
                : <button className="send-invite-btn"> Добавьте пользователей</button>
            }
        </Fragment>
    );
};


export default Users;