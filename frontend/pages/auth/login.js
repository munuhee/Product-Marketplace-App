import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PersonIcon from '@mui/icons-material/Person';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../../context/AuthContext';
import GlobalContext from '../../context/GlobalContext';
import styles from '../../styles/authForm.module.css';


export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { login, checkUserLoggedInState } = useContext(AuthContext);
    const { error, user } = useContext(GlobalContext);

    useEffect(() => {
        checkUserLoggedInState();
      },
      []
    )

    useEffect(() => {
        if (user) router.push('/products');
      },
      [user]
    )

    useEffect(async () => {
        error && toast.error(error);
      },
      [error]
    )

    const handleSubmit = evt => {
        evt.preventDefault();
        if (user) return;
        login({ username, password });
    }

    return (
        <>
            {/* <ToastContainer /> */}
            <div className={styles.auth}>
                <h1>
                    <PersonIcon/> Login
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input
                            type='text'
                            id='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type='password'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <input type='submit' value='Login' className='btn' />
                </form>
                <p>
                    Don't have an account? <Link href='/auth/register'>Register</Link>
                </p>
            </div>
        </>
    )
}