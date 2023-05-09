import './index.scss';
import Users from './components/Users/Users';
import Success from './components/Success';
import { useEffect, useState } from 'react';


const App = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [invites, setInvites] = useState([]);
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(json => {
                setUsers(json.data)
            })
            .catch(err => {
                console.warn(err);
                alert('Ошибка при получении пользователей');
            })
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <div className="App">
            {
                success
                    ? <Success
                        count={invites.length}
                        setSuccess={setSuccess} />
                    : <Users
                        users={users}
                        isLoading={isLoading}
                        invites={invites}
                        setInvites={setInvites}
                        setSuccess={setSuccess} />
            }
        </div>
    );
};


export default App;