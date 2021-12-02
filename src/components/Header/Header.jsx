import React from 'react';
import "./header.scss";

import Logo from "../../assets/images/logo.svg";

import Button from "../Button/Button"

const header = () => {

    return (

        <header className="main--app--header">

            <div className="main--header--display">

                <div className="header--logo--container">

                    <div className="header--logo--display">

                        <img src={Logo} alt="logo" />

                    </div>

                </div>


                <div className="header--link--container">

                    <nav className="header--link--nav">

                        <ul className="header--link--ul">

                            <li className="header--link--li">
                                
                                <a href="" className="header--link">Home</a>
                                
                            </li>

                            <li className="header--link--li">
                                
                                <a href="" className="header--link">Businesses</a>
                            
                            </li>

                            <li className="header--link--li">
                                
                                <a href="" className="header--link">Trade</a>
                            
                            </li>

                            <li className="header--link--li">
                                
                                <a href="" className="header--link">Market</a>
                                
                            </li>

                            <li className="header--link--li">
                                
                                <a href="" className="header--link">Learn</a>
                                
                            </li>

                        </ul>

                    </nav>

                </div>

                <div className="header--auth--container">

                    <div className="header--auth--display">

                        <div className="auth--container language--select--container">

                            <div className="language--select--display">

                                <span className="language--select--span">

                                    <div className="language--select--main--text--container">

                                        <div className="">

                                            <span>

                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                    <path d="M2.252 8C2.08416 8.6534 1.99949 9.32538 2 10C2 10.69 2.088 11.36 2.252 12H5.1C4.96518 10.6701 4.96518 9.32993 5.1 8H2.252ZM3.07 6H5.416C5.682 4.783 6.066 3.693 6.537 2.786C5.08518 3.48542 3.87722 4.60523 3.07 6ZM17.748 8H14.9C15.0348 9.32993 15.0348 10.6701 14.9 12H17.748C18.0847 10.6879 18.0847 9.31208 17.748 8ZM16.93 6C16.1228 4.60523 14.9148 3.48542 13.463 2.786C13.935 3.693 14.318 4.783 14.584 6H16.93ZM7.112 8C7.03708 8.66403 6.99968 9.33176 7 10C7 10.685 7.038 11.355 7.112 12H12.888C13.0386 10.6709 13.0386 9.32908 12.888 8H7.112ZM7.47 6H12.53C12.348 5.2483 12.0855 4.51841 11.747 3.823C11.119 2.568 10.447 2 10 2C9.552 2 8.881 2.568 8.253 3.823C7.938 4.455 7.673 5.19 7.47 6ZM3.07 14C3.87722 15.3948 5.08518 16.5146 6.537 17.214C6.065 16.307 5.682 15.217 5.416 14H3.07ZM16.93 14H14.584C14.318 15.217 13.934 16.307 13.463 17.214C14.9148 16.5146 16.1228 15.3948 16.93 14ZM7.47 14C7.673 14.81 7.938 15.545 8.253 16.177C8.881 17.432 9.553 18 10 18C10.448 18 11.119 17.432 11.747 16.177C12.062 15.545 12.327 14.81 12.53 14H7.47ZM10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20Z" fill="#C6C6C6"/>

                                                </svg>

                                            </span>

                                        </div>

                                        <span className="language--select--main--text">English</span>

                                        <div className="">

                                            <span>

                                                <svg aria-label="Down Chevron Icon" className="" color="#8e8e8e" fill="#C6C6C6" height="20" role="img" viewBox="0 0 48 48" width="20"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg>

                                            </span>

                                        </div>

                                    </div>

                                    <select aria-label="Switch Display Language" className="language--select--main--container">
                                        <option value="af">Afrikaans</option>
                                        <option value="cs">Čeština</option>
                                        <option value="da">Dansk</option>
                                        <option value="de">Deutsch</option>
                                        <option value="el">Ελληνικά</option>
                                        <option value="en">English</option>
                                        <option value="en-gb">English (UK)</option>
                                        <option value="es">Español (España)</option>
                                        <option value="es-la">Español</option>
                                        <option value="fi">Suomi</option>
                                        <option value="fr">Français</option>
                                        <option value="id">Bahasa Indonesia</option>
                                        <option value="it">Italiano</option>
                                        <option value="ja">日本語</option>
                                        <option value="ko">한국어</option>
                                        <option value="ms">Bahasa Melayu</option>
                                        <option value="nb">Norsk</option>
                                        <option value="nl">Nederlands</option>
                                        <option value="pl">Polski</option>
                                        <option value="pt-br">Português (Brasil)</option>
                                        <option value="pt">Português (Portugal)</option>
                                        <option value="ru">Русский</option>
                                        <option value="sv">Svenska</option>
                                        <option value="th">ภาษาไทย</option>
                                        <option value="tl">Filipino</option>
                                        <option value="tr">Türkçe</option>
                                        <option value="zh-cn">中文(简体)</option>
                                        <option value="zh-tw">中文(台灣)</option>
                                        <option value="bn">বাংলা</option>
                                        <option value="gu">ગુજરાતી</option>
                                        <option value="hi">हिन्दी</option>
                                        <option value="hr">Hrvatski</option>
                                        <option value="hu">Magyar</option>
                                        <option value="kn">ಕನ್ನಡ</option>
                                        <option value="ml">മലയാളം</option>
                                        <option value="mr">मराठी</option>
                                        <option value="ne">नेपाली</option>
                                        <option value="pa">ਪੰਜਾਬੀ</option>
                                        <option value="si">සිංහල</option>
                                        <option value="sk">Slovenčina</option>
                                        <option value="ta">தமிழ்</option>
                                        <option value="te">తెలుగు</option>
                                        <option value="vi">Tiếng Việt</option>
                                        <option value="zh-hk">中文(香港)</option>
                                        <option value="bg">Български</option>
                                        <option value="fr-ca">Français (Canada)</option>
                                        <option value="ro">Română</option>
                                        <option value="sr">Српски</option>
                                        <option value="uk">Українська</option>
                                    </select>

                                </span>

                            </div>
                        </div>

                        <div className="auth--container login--container">

                            <Button child="Login" />
                            
                        </div>

                        {/* <div className="auth--container signup--container">

                            <Button child="signup" />

                        </div> */}

                    </div>
                    
                </div>

            </div>

        </header>

    )

}

export default header
