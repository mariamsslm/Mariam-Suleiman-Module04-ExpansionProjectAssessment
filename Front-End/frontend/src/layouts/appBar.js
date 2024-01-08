import React from 'react';
import style from '../layouts/appBar.module.css'


const Header = () => {
  return (
    <header>
    <h1 className={style.h1}>PrOdUcT</h1>
    <nav className={style.nav}>
        <a className={style.a} href="/">Home</a>
        <a className={style.a} href="/d">Dashboard</a>
        <a className={style.a} href="/s">Signup</a>
    </nav>
</header>
  );
};

export default Header;
