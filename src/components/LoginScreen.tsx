import { Formik, FormikHelpers, FormikProps } from 'formik'
import { observer } from 'mobx-react'
import React from 'react'
import { IoIosLogIn } from 'react-icons/io'
import styled from 'styled-components'
import { object as yupObj, string as yupString } from 'yup'
import { onSubmit } from '../components/helper_functions'
import daviesLogo from '../img/davies-hires.png'
import ftLogo from '../img/ft-hires.png'
import logInBackground from '../img/login-graphics.png'
import potsLogo from '../img/pots-hires.png'

export interface IProps {
  setQuery?: any
  rootStore?: any
  title?: any
}

interface FormikValues {
  user: string
  password: string
}

const Login = (props: IProps) => {
  const { setQuery, rootStore, title } = props
  const handleSubmit = (
    values: FormikValues,
    formikBag: FormikHelpers<FormikValues>,
  ) => {
    formikBag.setSubmitting(true)
    console.log('NAGSUBMIT')
    onSubmit(setQuery, rootStore, {
      username: values.user,
      password: values.password,
    })
    // setQuery(store.login({ username: values.user, password: values.password }))
  }

  const renderForm = ({
    values,
    handleSubmit,
    setFieldValue,
    touched,
    errors,
    setFieldTouched,
    isSubmitting,
    isValid,
  }: FormikProps<FormikValues>) => {
    // isSubmitting = loading
    return (
      <FormContainer>
        <div className="brand-wrapper">
          <div className="brand-header">
            {' '}
            <img src={daviesLogo} alt="company logo" className="company-logo" />
          </div>
        </div>

        <div className="log-in-holder">
          <div className="directives-container">
            <h1 className="welcome">Welcome to your</h1>
            <img src={potsLogo} alt="login logo" className="login-logo" />
            <h2 className="h2-mod">Purchase Order Tracking System</h2>
            <ul>
              <li>Manage your orders anywhere.</li>
              <li>
                Manage your suppliers and maintain stable logistics anywhere.
              </li>
              <li>
                Keep track of your purchases with real-time updates from your
                supplier.
              </li>
            </ul>
            <br /> <br />
          </div>
          <div
            className="form-container"
            style={{
              backgroundImage: `url(${logInBackground})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: '440px',
            }}>
            <form className="login-form">
              <div className="input-container">
                <label> Username/Email</label>
                <input
                  className="input-empty"
                  value={values.user}
                  onChange={(e: any) => setFieldValue('user', e.target.value)}
                  // onChange={(e: any) => {
                  //   setInfo({ ...userinfo, username: e.target.value })
                  // }}
                  onBlur={() => setFieldTouched('user')}
                  contentEditable={!isSubmitting}
                />
              </div>
              <div className="input-container">
                <label>Password</label>
                <input
                  className="input-empty"
                  value={values.password}
                  onChange={(e: any) =>
                    setFieldValue('password', e.target.value)
                  }
                  onBlur={() => setFieldTouched('password')}
                  contentEditable={!isSubmitting}
                />
                {/* <Link to="/" className="forgot-pass">
                Trouble logging in?
              </Link> */}
              </div>
              <div className="input-container">
                <button
                  className="login-btn"
                  // onClick={() => onSubmit(setQuery, rootStore, userinfo)}>
                  onClick={() => handleSubmit()}>
                  Log In <IoIosLogIn></IoIosLogIn>
                </button>
              </div>
            </form>
          </div>
          <div className="ft-credit">
            <span>Powered by: </span>
            <img src={ftLogo} alt="company logo" className="ft-logo" />
          </div>
        </div>
      </FormContainer>
    )
  }
  return (
    <Formik
      initialValues={{
        user: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      render={(formikBag: FormikProps<FormikValues>) => renderForm(formikBag)}
      validationSchema={yupObj().shape({
        user: yupString().required('Username is Required'),
        password: yupString().required('Password is Required'),
      })}></Formik>
  )
}

export default observer(Login)

const FormContainer = styled.div`
  justify-content: center;
  position: relative;
  z-index: 5;
  width: 100vw;
  height: 100vh;
  ::placeholder {
    color: white !important;
  }
  .log-in-holder {
    margin: 40px auto;
    width: 900px;
    height: 600px;
    background: #fff;
    border-radius: 10px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 60px 30px 33px 52px;
    border: 1px solid #eaeced;
    border-radius: 5px;
  }
  @media (max-width: 900px) {
    .log-in-holder {
      padding: 10px;
      width: 85%;
    }
  }
  .directives-container {
    position: relative;
    width: 400px;
    height: 100%;
    padding: 20px;
    flex: 50%;
  }
  @media (max-width: 900px) {
    .directives-container {
      flex: 100%;
      height: 30vh;
    }
  }
  .form-container {
    width: 350px;
    height: 100%;
    padding: 10px;
    flex: 50%;

    overflow: visible;
  }
  @media (max-width: 900px) {
    .form-container {
      flex: 100%;
      height: 30vh;
    }
  }
  //branding header
  .company-logo {
    width: 100px;
    top: 14px;
    left: 25px;
    position: relative;
  }
  @media (max-width: 900px) {
    .company-logo {
    }
  }
  .brand-wrapper {
    width: 100vw;
    background-color: #f1f1f1;
    box-shadow: 0 1px 6px rgba(57, 73, 76, 0.35);
  }
  .brand-header {
    margin: 0 auto;

    min-height: 80px;
    width: 1000px;
  }
  .login-logo {
    width: 200px;
  }
  @media (max-width: 900px) {
    .login-logo {
      display: block;
      margin: 0 auto;
    }
  }
  .ft-logo {
    width: 70px;
  }
  .welcome {
    font-size: 2.5rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-stretch: semi-condensed;
  }
  @media (max-width: 900px) {
    .welcome {
      text-align: center;
    }
  }
  .h2-mod {
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-stretch: semi-condensed;
  }
  @media (max-width: 900px) {
    .h2-mod {
      text-align: center;
    }
  }
  ul li {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-stretch: semi-condensed;
  }
  @media (max-width: 900px) {
    ul li {
      visibility: hidden;
    }
  }
  span {
    font-size: 0.7rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-stretch: semi-condensed;
  }
  @media (max-width: 900px) {
    .form-container {
      background-image: none !important;
    }
  }
  .login-form {
    margin: 80px auto 0;
  }
  @media (max-width: 900px) {
    .login-form {
      margin: -50px auto;
    }
  }

  .input-container {
    display: grid;
    grid-template-columns: 0.95fr;
    margin: 20px auto 0;
  }
  @media (max-width: 900px) {
    .input-container {
      grid-template-columns: none;
      height: 30px;
      margin-top: 40px;
    }
  }
  /* .input-empty {
    margin: 0 auto;
    color: #fffff;
    background: #00000;
    border: 1px solid #9da3a6;
    border-radius: 4px;
    outline: none;
    height: 2.5rem;
    width: 60%;
    padding: 0.8rem 1.15rem 0;
  } */

  @media (max-width: 900px) {
    .input-empty {
      width: 100%;
    }
  }
  form div label {
    position: relative;
    color: #ffffff;
    top: 0.5rem;
    left: 5.15rem;
    pointer-events: none;
    font-size: 1.5rem;
    margin-bottom: 15px;
    transition: transform 150ms ease-out, font-size 150ms ease-out;

    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-stretch: semi-condensed;
  }
  @media (max-width: 900px) {
    form div label {
      text-align: center;
      color: #000000;
      left: 0;
    }
  }
  @media (max-width: 900px) {
    input:focus ~ label {
      top: 0.43rem;
      font-size: 0rem;
    }
  }
  .forgot-pass {
    position: relative;
    color: #ffffff;
    top: 0.5rem;
    left: 5.15rem;
    text-decoration: underline;
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
  @media (max-width: 900px) {
    .forgot-pass {
      color: #000000;
      text-align: center;
      top: 0;
      left: 0;
      margin-top: 20px;
    }
  }
  .login-btn {
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-stretch: condensed;
    font-size: 1.5rem;
    color: white;
    border: none;
    background-color: transparent;
    width: 60%;
    margin-top: 70px;
    margin: 50px auto;
  }
  @media (max-width: 900px) {
    .login-btn {
      background-color: #097bd8;
      width: 100%;
      border-radius: 4px;
      height: 2.5rem;
    }
  }
  form div {
    position: relative;
  }
  .ft-credit {
    margin: -20px auto 5%;
    height: 5px;
  }
`
