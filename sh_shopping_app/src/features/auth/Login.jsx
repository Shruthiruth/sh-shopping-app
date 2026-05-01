import { toast } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { useLoginMutation } from './authApi'
import { useAuth } from '../../app/authProvider'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
})

function Login() {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: 'all',
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const [login, { isLoading }] = useLoginMutation();
    const { refetch } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await login(data).unwrap();
            await refetch();
            navigate('/');
            toast.success(response.message || 'Login successful');
        } catch (error) {
            console.error('Login failed:', error);
            toast.error(error.data?.message || 'Login failed');
        }
    };

    if (errors?.status === 401) {
        toast.error('Unauthorized. Please check your credentials.');
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container-fuild">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" {...register('email')} />
                                <span style={{ color: 'sandybrown', fontFamily: 'cursive' }}>{errors.email?.message}</span>
                            </div>
                        </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter password" {...register('password')} />
                                <span style={{ color: 'sandybrown', fontFamily: 'cursive' }}>{errors.password?.message}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit" disabled={!isValid}>
                                {isLoading ? "Logging in..." : "Login"}
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </form>
            {errors && <h4 style={{ color: 'bisque' }}>{errors.data?.message || 'An error occurred'}</h4>}
        </>
    )
}

export default Login