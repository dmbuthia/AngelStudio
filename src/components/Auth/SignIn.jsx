import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../contexts/UserContext';
import useTitle from '../../Hooks/useTitle';

const SignIn = () => {
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useTitle('PhotoLab | SignIn')

    const { signin, resetPassword, signInWithGoogle, signInWithFacebook, signInWithGithub } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signin(email, password)
            .then(result => {
                toast.success('Login Success!')
                navigate(from, { replace: true })
                console.log(result.user)
            })
            .catch(error => toast.error(error.message))
    }

    // Google Signin
    const handleGoogleSignin = () => {
        signInWithGoogle().then(result => {
            console.log(result.user)
            navigate(from, { replace: true })
        })
    }

    //GitHub Signin
    const handleGithubSignin = () => {
        signInWithGithub().then(result => {
            console.log(result.user);
            navigate(from, { replace: true })
        })
    }
    //Facebook Signin
    const handleFacebookSignin = () => {
        signInWithFacebook().then(result => {
            console.log(result.user);
            navigate(from, { replace: true })
        })
    }

    //Reset Pass
    const handleReset = () => {
        resetPassword(userEmail)
            .then(() => {
                toast.success('Reset link has been sent, please check email')
            })
            .catch(error => toast.error(error.message))
    }

    return (
        <div className='flex justify-center items-center pt-8 mb-20 '>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900 dark:text-white dark:bg-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Sign in</h1>
                    <p className='text-sm text-gray-400'>
                        Sign in to access your account
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                onBlur={event => setUserEmail(event.target.value)}
                                type='email'
                                name='email'
                                id='email'
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
                            />


                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='w-full px-8 py-3 font-semibold rounded-md bg-deep-purple-accent-400 hover:bg-gray-700 hover:text-white text-gray-100'
                        >
                            Sign in
                        </button>
                    </div>
                </form>
                <div className='space-y-1'>
                    <button
                        onClick={handleReset}
                        className='text-xs hover:underline text-deep-purple-accent-400'
                    >
                        Forgot password?
                    </button>
                </div>
                {/* <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-deep-purple-accent-400'></div>
                    <p className='px-3 text-sm dark:text-deep-purple-accent-400'>
                        Login with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-deep-purple-accent-400'></div>
                </div> */}
            
                <p className='px-6 text-sm text-center text-gray-400'>
                    Don't have an account yet?{' '}
                    <Link to='/signup' className='hover:underline text-deep-purple-accent-400'>
                        Sign up
                    </Link>
                    .
                </p>
            </div>
        </div>
    )
}

export default SignIn