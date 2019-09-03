import React from 'react';
import { Image, Button, DropdownButton, Dropdown, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';
import userSm from './img/user-1.png';
import passIcon from './img/password.png';
import circle from './img/circle-solid.svg';
import circle2 from './img/circle-solid (2).svg';
import { Scrollbars } from 'react-custom-scrollbars';
//
const InVoice = () => (
    <div className="invoiceMain">
        {/*user panel*/}
        <div className="userBanner">
            <div className="boxNum"><text className="boxTxt">B{"\n"}O{"\n"}X{"\n"}#</text></div>

                <div className="Section1">
                    <Image src={userSm} className="bannerImg" />
                    <div className="Section1Txt">
                        <text className="boldTxt">Selena Gomez</text>
                        <text className="greyTxt">CEO - Company</text>
                    </div>
                
                </div>
                <text className="divider1">|</text>
                <div className="Section2">
                    <span className="userInfo1"><i class="fas fa-envelope"></i>selenamail@mail.com</span>
                    <span className="userInfo2"><i class="fas fa-phone"></i>+123 456 789</span>
                    <span className="userInfo3"><i class="fas fa-map-marker-alt"></i>California, USA</span>
                    
                </div>
                <text className="divider2">|</text>
                <div className="Section3">
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-linkedin "></i>
                    <i class="fab fa-pinterest-square "></i>
                    <i class="fab fa-twitter-square "></i>
                    
                </div>
                <text className="divider3">|</text>
                <div className="Section4">
                    <Button className="bannerBtn" variant="success"><text>Contact</text></Button>
                    <text className="divider4">|</text>
                    <div>
                    <Image src={passIcon} className="bannerPasImg" />
                        <Link className="changePass">Change Password</Link>
                    </div>
                    </div>

            <div className="boxFilled"><text className="boxTxtEnd">unfulfilled</text></div>

            </div>
        <div className="dataDiv">

            {/*List panel*/}
            <div className="listMain">
                <div className="invoiceTitle">
                    <p>Invoice List</p>
                </div>
                <div className="invData">
                    
                        <li className="invTitles">
                        <span>
                            <input type="checkbox" disabled label="weight" />Weight
                            </span>
                            <span>
                                Freezer
                            </span>
                            <span>
                                Selection
                            </span>
                            <span>
                                Product
                            </span>
                            <span>
                                Total Packages
                            </span>
                    </li>
                    <Scrollbars thumbSize={20} width={10} style={{ width: '100%', height: '70vh' }}>
                    <ul className="scrollBar">
                        
                        

                        <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                            <span>
                                Freezer 1
                            </span>
                            <span>
                                July 12 2019
                            </span>
                            <span>
                                Product Name
                            </span>
                            <span>
                                10
                            </span>
                        </li>
                        <li className="invDataSet">
                            <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                            <span>
                                Freezer 1
                            </span>
                            <span>
                                July 12 2019
                            </span>
                            <span>
                                Product Name
                            </span>
                            <span>
                                10
                            </span>
                        </li>
                        <li className="invDataSet">
                            <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                            <span>
                                Freezer 1
                            </span>
                            <span>
                                July 12 2019
                            </span>
                            <span>
                                Product Name
                            </span>
                            <span>
                                10
                            </span>
                        </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                            <li className="invDataSet">
                                <span>
                                    <input type="checkbox" label="10kg" />10kg
                            </span>
                                <span>
                                    Freezer 1
                            </span>
                                <span>
                                    July 12 2019
                            </span>
                                <span>
                                    Product Name
                            </span>
                                <span>
                                    10
                            </span>
                            </li>
                                                
                        </ul>
                    </Scrollbars>
                </div>
            </div>

            {/*Note panel*/}

            <div className="noteMain">
                <div className="invoiceTitle">
                    <p>Notes</p>
                    <div className="addNote">
                        <i class="fas fa-plus-circle"></i>
                        <Link className="addNote">Add Note</Link>
                    </div>
                </div>
                <div className="btnDiv">
                    <Button className="packBtn" variant="success">Pack Box</Button>
                </div>
                <div className="notesDiv1">
                    <div className="noteTxt">
                        <span className="noteDate">26 July 2019</span>
                        <h6><Image src={circle} className="noteImg" />Note Title Goes Here

                                  <DropdownButton
                                drop={'left'}
                                variant="outline-secondary"
                                title={<i class="fas fa-ellipsis-v"></i>}
                                id={`dropdown-button-drop-left`}
                                className="dropleft"
                            >
                                <Dropdown.Item eventKey="1">NotReal</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Fale action</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4">delete link</Dropdown.Item>
                            </DropdownButton>

                        </h6>
                        <span className="note">The Quick Brown Fox Jumped over the lazy dogs, ipsum dolor sit amet.
                        Fill it up with dummy texts. Lorem Ipsum</span>
                        <ol className="noteList">
                            <li className="noteListI">List Text 1</li>
                            <li className="noteListI">Second List</li>
                        </ol>
                    </div>
                </div>
                <div className="notesDiv2">
                    <div className="noteTxt">
                        <span className="noteDate">26 July 2019</span>
                        <h6><Image src={circle2} className="noteImg2" />Note Title Goes Here

                                  <DropdownButton
                                drop={'left'}
                                variant="outline-secondary"
                                title={<i class="fas fa-ellipsis-v"></i>}
                                id={`dropdown-button-drop-left`}
                                className="dropleft"
                            >
                                <Dropdown.Item eventKey="1">NotReal</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Fale action</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4">delete link</Dropdown.Item>
                            </DropdownButton>
                            
                        </h6>
                        <span className="note">The Quick Brown Fox Jumped over the lazy dogs, ipsum dolor sit amet.
                        Fill it up with dummy texts. Lorem Ipsum</span>
                        <ol className="noteList">
                            <li className="noteListI">List Text 1</li>
                            <li className="noteListI">Second List</li>
                        </ol>
                    </div>
                </div>
                <div className="notesDiv1">
                    <div className="noteTxt">
                        <span className="noteDate">26 July 2019</span>
                        <h6><Image src={circle} className="noteImg" />Note Title Goes Here

                                  <DropdownButton
                                drop={'left'}
                                variant="outline-secondary"
                                title={<i class="fas fa-ellipsis-v"></i>}
                                id={`dropdown-button-drop-left`}
                                className="dropleft"
                            >
                                <Dropdown.Item eventKey="1">NotReal</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Fale action</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4">delete link</Dropdown.Item>
                            </DropdownButton>

                        </h6>
                        <span className="note">The Quick Brown Fox Jumped over the lazy dogs, ipsum dolor sit amet.
                        Fill it up with dummy texts. Lorem Ipsum</span>
                        <ol className="noteList">
                            <li className="noteListI">List Text 1</li>
                            <li className="noteListI">Second List</li>
                        </ol>
                    </div>
                </div>
                <div className="notesDiv2">
                    <div className="noteTxt">
                        <span className="noteDate">26 July 2019</span>
                        <h6><Image src={circle2} className="noteImg2" />Note Title Goes Here

                                  <DropdownButton
                                drop={'left'}
                                variant="outline-secondary"
                                title={<i class="fas fa-ellipsis-v"></i>}
                                id={`dropdown-button-drop-left`}
                                className="dropleft"
                            >
                                <Dropdown.Item eventKey="1">NotReal</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Fale action</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4">delete link</Dropdown.Item>
                            </DropdownButton>

                        </h6>
                        <span className="note">The Quick Brown Fox Jumped over the lazy dogs, ipsum dolor sit amet.
                        Fill it up with dummy texts. Lorem Ipsum</span>
                        <ol className="noteList">
                            <li className="noteListI">List Text 1</li>
                            <li className="noteListI">Second List</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default InVoice;