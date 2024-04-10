import React, { useState } from "react";
import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import "../styles/main.scss";
import user from "../assets/avatar.svg";
import {IoMdStar, IoMdStarOutline} from "react-icons/io";

import backarrow from "../assets/Vector.svg";
import Name from "../components/Name";
import { FaStar } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
type Props = {};

const UserDetails = (props: Props) => {
  const [activeItem, setActiveItem] = useState<number>(0); // State to keep track of the active item

  return (
    <div>
      <TopNav />
      <div className="dashboard-container">
        <SideNav />
        <div className="dashboard-box">
          <section className="users-box">
            <header>
              <div className="back">
                <img src={backarrow} alt="backarrow" />
                <p>Back to Users</p>
              </div>
              <div className="user-flex">
                <h2 className="userdetail-header">User Details</h2>
                <div>
                  <button className="blacklistbtn">blacklist user</button>
                  <button className="activatebtn">Activate user</button>
                </div>
              </div>
            </header>

            <div className="userdetail">
              <div className="users">
                <div className="username">
                  <div>
                    <img src={user} alt="user" />
                  </div>
                  <div>
                    <h3>Grace Effiom</h3>
                    <p>LSQFf587g90</p>
                  </div>
                </div>
                <div className="border"></div>
                <div className="usertier">
                  <p>User’s Tier</p>
                  <div className="staricon">
                  
                
                    <IoMdStar color="rgba(233, 178, 0, 1)" />
                    <IoMdStarOutline color="rgba(233, 178, 0, 1)" />
                    <IoMdStarOutline color="rgba(233, 178, 0, 1)"/>
                    
                  </div>
                </div>
                <div className="border"></div>
                <div className="">
                  <p className="usernumber">₦200,000.00</p>
                  <p className="userbank">9912345678/Providus Bank</p>
                </div>
              </div>
              <div className="userbar">
                <div className={activeItem === 1 ? 'active' : ''} onClick={() => setActiveItem(1)}>General Details</div>
                <div className={activeItem === 2 ? 'active' : ''} onClick={() => setActiveItem(2)}>Documents</div>
                <div className={activeItem === 3 ? 'active' : ''} onClick={() => setActiveItem(3)}>Bank Details</div>
                <div className={activeItem === 4 ? 'active' : ''} onClick={() => setActiveItem(4)}>Loans</div>
                <div className={activeItem === 5 ? 'active' : ''} onClick={() => setActiveItem(5)}>Savings</div>
                <div className={activeItem === 6 ? 'active' : ''} onClick={() => setActiveItem(6)}>App and System</div>
              </div>
            </div>

            <div className="personaldetail">
              <div className="personal-box">
                <div className="personal-info">
                  <h2>Personal Information</h2>
                  <div className="personal">
                    <div className="personal-name">
                      <Name fullName="Full Name" para="Grace Effiom" />
                      <div className="">
                        <Name fullName="Marital Status" para="Single" />
                      </div>
                    </div>

                    <div className="personal-name">
                      <div className="">
                        <Name fullName="Phone Number" para="07060780922" />
                      </div>

                      <div className="">
                        <Name fullName="Children" para="None" />
                      </div>
                    </div>

                    <div className="personal-name">
                      <div className="">
                        <Name
                          fullName="Email Address"
                          para="grace@gmail.com "
                        />
                      </div>

                      <div className="">
                        <Name
                          fullName="Type of residence"
                          para="Parent's Apartment"
                        />
                      </div>
                    </div>

                    <div className="personal-name">
                      <div className="">
                        <Name fullName="BVN" para="07060780922" />
                      </div>
                    </div>

                    <div className="personal-name">
                      <div className="">
                        <Name fullName="Gender" para="Female" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="personal-info">
                  <h2>Education and Employment</h2>
                  <div className="education">
                    <div className="personal-name">
                      <Name fullName="level of education" para="B.Sc" />
                      <div className="">
                        <Name
                          fullName="office email"
                          para="grace@lendsqr.com"
                        />
                      </div>
                    </div>

                    <div className="personal-name">
                      <div className="">
                        <Name fullName="employment status" para="Employed" />
                      </div>

                      <div className="">
                        <Name
                          fullName="Monthly income"
                          para="₦200,000.00 - ₦400,000.00"
                        />
                      </div>
                    </div>

                    <div className="personal-name">
                      <div className="">
                        <Name fullName="sector of employment" para="FinTech " />
                      </div>

                      <div className="">
                        <Name fullName="loan repayment" para="40,000" />
                      </div>
                    </div>

                    <div className="personal-name">
                      <div className="">
                        <Name
                          fullName="Duration of employment"
                          para="2 years"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="personal-info">
                  <h2>Socials</h2>
                  <div className="personal">
                    <div className="personal-name">
                      <Name fullName="Twitter" para="@grace_effiom" />
                    </div>

                    <div className="personal-name">
                      <div className="">
                        <Name fullName="Facebook" para="Grace Effiom" />
                      </div>
                    </div>

                    <div className="personal-name">
                      <div className="">
                        <Name fullName="instagram" para="@grace_effiom " />
                      </div>
                    </div>

                    <div className="personal-name"></div>
                    <div className="personal-name"></div>
                  </div>
                </div>

                <div className="personal-info">
                  <h2>Guarantor</h2>
                  <div className="personal">
                    <div className="personal-name">
                      <Name fullName="full Name" para="Debby Ogana" />
                    </div>

                    <div className="personal-name">
                      <div className="">
                        <Name fullName="Phone Number" para="07060780922" />
                      </div>
                    </div>

                    <div className="personal-name">
                      <div className="">
                        <Name
                          fullName="Email Address"
                          para="debby@gmail.com "
                        />
                      </div>
                    </div>

                    <div className="personal-name">
                      <div className="">
                        <Name fullName="Relationship" para="Sister" />
                      </div>
                    </div>

                    <div className="personal-name"></div>
                  </div>
                </div>
                <div className="personal-info">
                  <h2></h2>
                  <div className="personal">
                    <div className="personal-name">
                      <Name fullName="full Name" para="Debby Ogana" />
                    </div>

                    <div className="personal-name">
                      <div className="">
                        <Name fullName="Phone Number" para="07060780922" />
                      </div>
                    </div>

                    <div className="personal-name">
                      <div className="">
                        <Name
                          fullName="Email Address"
                          para="debby@gmail.com "
                        />
                      </div>
                    </div>

                    <div className="personal-name">
                      <div className="">
                        <Name fullName="Relationship" para="Sister" />
                      </div>
                    </div>

                    <div className="personal-name"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
