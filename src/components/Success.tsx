import { FC } from 'react';
import success from '../assets/img/success.svg'


type SuccessProps = {
    count: number;
    setSuccess: Function
}


const Success: FC<SuccessProps> = ({count, setSuccess}) => {

    return (
        <div className="success-block">
            <img src={success} alt="Success" />
            <h3>Успешно!</h3>
            <p>Всем {count} пользователям отправлено приглашение.</p>
            <button className="send-invite-btn" onClick={() => setSuccess(false)}>Назад</button>
        </div>
    );
};


export default Success;