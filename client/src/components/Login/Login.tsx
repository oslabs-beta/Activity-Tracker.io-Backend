import React, { useState,useEffect } from 'react';
import styles from './Login.module.css';
import axios from 'axios';
import { useAtom } from 'jotai';
import { loadingAtom, activeUserAtom} from '../../state/Atoms';
import Navbar from '../Navbar/Navbar';
import NavMobile from '../Navbar/NavMobile';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';




export default function Login() {
  const [, setActiveUser] = useAtom(activeUserAtom)
  const [isLoading, setLoading] = useAtom(loadingAtom)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [pageLoading, setPageLoading] = useState(true);


  

  function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  



  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true)
    try{
    const response = await axios.post ('/api/auth/login', formData)
    console.log(response.data);
    setActiveUser(response.data.email);
    }

    catch (err: any){
      console.log(err.message)
    }finally {
      setLoading(false)
    }
    // const content = formData;
    // console.log(content);
  }
  // if (isLoading || pageLoading) {
  //   return <Loading />;
  // }

  return (
    <>
      <Navbar />
      <NavMobile />
      {/* {isLoading && <Loading />} */}
      <div className={styles.login}>
        <h2>Welcome back</h2>
        <div className={styles.oathButtons}>
          <button className={`${styles.loginBtn} ${styles.google}`}
            onClick = {(() => window.location.href = 'http://loclahost:8080/api/google/oauth')}>
            Continue with Google
          </button>
          <button className={`${styles.loginBtn} ${styles.github}`}>
            Continue with GitHub
          </button>
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className={styles.loginCredentials}
        >
          <input
            type="email"
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={(e) => {
              handleChange(e);
            }}
            required
          ></input>
          <input
            type="password"
            minLength={6}
            placeholder="password"
            value={formData.password}
            name="password"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          ></input>
          <button type="submit" className={`btn-primary`}>
            Sign in
          </button>
        </form>
        <div className={styles.createAccountQuery}>
          <p className="white-secondary">Don't have an account?</p>
          <p><Link to="/signup">
            Sign up now
          </Link></p>
        </div>
      </div>
    </>
  );
}
