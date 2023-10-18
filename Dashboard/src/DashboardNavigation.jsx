import styles from "./DashboardNavigation.module.css";


const DashboardNavigation = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.earning}>
        <div className={styles.groupParent}>
          <div className={styles.earningParent}>
            <img
              className={styles.earningChild}
              alt=""
              src="./images/Rectangle 15.png"
            />
             <div className={styles.e}>     
            <div className={styles.balance}>Earning</div>
            <div className={styles.k}>$198k</div>
            <img className={styles.ear1} src="./images/earning1.png" />
            <img className={styles.ear2} src="./images/earning2.png" />
            <img className={styles.ear3} src="./images/earning3.png" />
            <img className={styles.ear4} src="./images/earning4.png" />
            <img className={styles.ear5} src="./images/earning5.png" />
            <img className={styles.ear6} src="./images/earning6.png" />

            <div className={styles.thisMonthParent}>
              <div className={styles.thisMonth}>
                <b>37.8%</b>
                <span className={styles.thisMonth1}> this month</span>
              </div>
              <img
                className={styles.arrowUp1Icon}
                alt=""
                src="./images/ear7.png"
              />
              <img
                className={styles.arrowUp1Icon2}
                alt=""
                src="./images/ear8.png"
              />
            </div>
            </div>  
          </div>
         
        
          

          <div className={styles.balanceParent}>
            <img
              className={styles.earningChild2}
              alt=""
              src="./images/Rectangle 15.png"
            />
             <div className={styles.bal}> 
            <div className={styles.balance}>Balance</div>
            <div className={styles.k}>$2.4k</div>
            <img
              className={styles.groupChild}
              alt=""
              src="./images/balance1.png"
            />
            <img className={styles.bal2} alt="" src="./images/bal2.png" />
            <img className={styles.bal3} alt="" src="./images/bal3.png" />
            <img className={styles.bal5} alt="" src="./images/bal5.png" />
            <img className={styles.bal6} alt="" src="./images/bal6.png" />
            <div className={styles.thisMonthGroup}>
              <div className={styles.thisMonth}>
                <b>2%</b>
                <span className={styles.thisMonth1}> this month</span>
              </div>
              <img
                className={styles.arrowUp1Icon5}
                alt=""
                src="./images/ear9.png"
              />
               <img
                className={styles.arrowUp1Icon6}
                alt=""
                src="./images/ear10.png"
              />
            </div>
          </div>
          </div>


          <div className={styles.totalSalesParent}>
            <img
              className={styles.earningChild3}
              alt=""
              src="./images/Rectangle 15.png"
            />
            <div className={styles.total}> 
            <div className={styles.balance}>Total Sales</div>
            <div className={styles.k}>$89k</div>
            <img
              className={styles.groupChild}
              alt=""
              src="./images/total.png"
            />

            <img className={styles.ts1} alt="" src="./images/ts1.png" />
            <img className={styles.ts2} alt="" src="./images/ts2.png" />
            <img className={styles.ts3} alt="" src="./images/ts3.png" />
            <img className={styles.ts4} alt="" src="./images/ts3.png" />
            <div className={styles.thisWeekParent}>
              <div className={styles.thisMonth}>
                <b>11%</b>
                <span className={styles.thisMonth1}> this week</span>
              </div>
              <img
                className={styles.arrowUp1Icon3}
                alt=""
                src="./images/ear7.png" 
              />
               <img
                className={styles.arrowUp1Icon4}
                alt=""
                src="./images/ear8.png"
              />
            </div>
            </div>
          </div>

          <div className={styles.orderParent}>
        
        <img className={styles.earningChild4} src="./images/Rectangle 15.png" />
        <div className={styles.order}> 
        <img
              className={styles.groupChild}
              alt=""
              src="./images/total.png"
            />
       </div>
       <div className={styles.order1}> 
       <img
              className={styles.groupChildo1}
              alt=""
              src="./images/order.png"
            />
       </div>
        <div className={styles.o}> 
      
        <div className={styles.balance}>Balance</div>
            <div className={styles.k}>$2.4k</div>
            
           
          
            <div className={styles.thisMonthGroup}>
            <img
                className={styles.arrowUp1Icon7}
                alt=""
                src="./images/ear9.png"
              />
               <img
                className={styles.arrowUp1Icon8}
                alt=""
                src="./images/ear10.png"
              />
              <div className={styles.thisMonth}>
                <b>2%</b>
                <span className={styles.thisMonth1}> this month</span>
              </div>
             
            </div>
        </div>
      </div>













          <div className={styles.lineDiv} />
          <div className={styles.groupChild1} />
        </div>
      </div>

      <div className={styles.overview}>
        <img
          className={styles.overviewChild}
          alt=""
          src="./images/Rectangle16.png"
        />
        <div className={styles.rectangleParent}>
          <div className={styles.rectangleDiv} />
          <img
            className={styles.chevronDown1Icono}
            alt=""
            src="./images/chdown.png"
          />
          <div className={styles.quarterly}>Quarterly</div>
        </div>
        <div className={styles.overview1}>Overview</div>
        <div className={styles.monthlyEarning}>Monthly Earning</div>
        <div className={styles.jan}>Jan</div>
        <div className={styles.feb}>Feb</div>
        <div className={styles.mar}>Mar</div>
        <div className={styles.apr}>Apr</div>
        <div className={styles.may}>May</div>
        <div className={styles.jun}>Jun</div>
        <div className={styles.jul}>Jul</div>
        <b className={styles.aug}>Aug</b>
        <div className={styles.sep}>Sep</div>
        <div className={styles.oct}>Oct</div>
        <div className={styles.nov}>Nov</div>
        <div className={styles.dec}>Dec</div>
        <div className={styles.overviewItem} />
        <div className={styles.overviewInner} />
        <div className={styles.overviewChild1} />
        <div className={styles.overviewChild2} />
        <div className={styles.overviewChild3} />
        <div className={styles.overviewChild4} />
        <div className={styles.overviewChild5} />
        <div className={styles.overviewChild6} />
        <div className={styles.overviewChild7} />
        <div className={styles.overviewChild8} />
        <div className={styles.overviewChild9} />
        <div className={styles.overviewChild10} />
      </div>
      <div className={styles.customers}>
        <img
          className={styles.customersChild}
          alt=""
          src="./images/Rectangle29.png"
        />
        <div className={styles.customers1}>Customers</div>
        <div className={styles.customersThatBuy}>
          Customers that buy products
        </div>
        <div className={styles.customersItem} />
        <div className={styles.customersInner} />
        <div className={styles.ellipseDiv}>
          <img className={styles.golla1} alt="" src="./images/golla3.png" />
          <img className={styles.golla2} alt="" src="./images/golla4.png" />
        </div>
        <div className={styles.customersChild1} />
        <div className={styles.totalNewCustomersContainer}>
          <p className={styles.p}>
            <b>65%</b>
          </p>
          <p className={styles.totalNewCustomers}>Total New Customers</p>
        </div>
      </div>
      <div className={styles.product}>
        <img
          className={styles.productChild}
          alt=""
          src="./images/Rectangle 30.png"
        />
        <div className={styles.productSell}>Product Sell</div>
        <div className={styles.inStockParent}>
          <div className={styles.inStock}>32 in stock</div>
          <div className={styles.div1}>$ 45.99</div>
          <div className={styles.div2}>20</div>
          <div className={styles.abstract3dParent}>
            <div className={styles.abstract3d}>Abstract 3D</div>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <img
              className={styles.unsplashwh2fhl0vEoIcon}
              alt=""
              src="./images/unsplash_Wh2FhL0v_eo.png"
            />
          </div>
        </div>
        <div className={styles.sarphensIllustrationParent}>
          <div className={styles.sarphensIllustration}>
            Sarphens Illustration
          </div>
          <div className={styles.inStock1}>32 in stock</div>
          <div className={styles.div3}>$ 45.99</div>
          <div className={styles.div4}>20</div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <img
            className={styles.unsplashwh2fhl0vEoIcon}
            alt=""
            src="./images/unsplash2.png"
          />
        </div>

        <div className={styles.groupContainer}>
          <div className={styles.productNameParent}>
            <div className={styles.productName}>Product Name</div>
            <div className={styles.stock}>Stock</div>
            <div className={styles.price}>Price</div>
            <div className={styles.totalSales1}>Total Sales</div>
          </div>
          <div className={styles.groupChild2} />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild3} />
          <div className={styles.search}>Search</div>
          <img
            className={styles.search1Iconps}
            alt=""
            src="./images/searcho.png"
          />
          <img
            className={styles.search1Iconps2}
            alt=""
            src="./images/searchi.png"
          />
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild4} />
          <img
            className={styles.chevronDown1Icon1}
            alt=""
            src="./images/chdown.png"
          />
          <div className={styles.last30Days}>Last 30 days</div>
        </div>
      </div>
      <div className={styles.search1}>
        <div className={styles.searchChild} />
        <div className={styles.search}>Search</div>
        <img className={styles.search1Icon1} alt="" src="./images/sear1.png" />
        <img className={styles.search1Icon2} alt="" src="./images/sear2.png" />
      </div>
      <div className={styles.sideMenu}>
        <div className={styles.sideMenuChild} />
        <div className={styles.sideMenuItem} />
        <div className={styles.listMenu}>
          <img
            className={styles.icon24OutlineKeySqua}
            src="./images/das1.png"
          />
          <img
            className={styles.icon24OutlineKeySqua1}
            src="./images/das2.png"
          />
          <img
            className={styles.icon24OutlineKeySqua2}
            src="./images/das3.png"
          />
          <img
            className={styles.icon24OutlineKeySqua3}
            src="./images/das4.png"
          />
          <div className={styles.dashboard1}>Dashboard</div>
        </div>
        <div className={styles.listMenu1}>
          <img
            className={styles.icon24OutlineKeySqua}
            alt=""
            src="./images/das1.png"
          />
          <img className={styles.pro1} src="./images/pro1.png" />
          <img className={styles.pro2} src="./images/pro2.png" />
          <img className={styles.pro3} src="./images/pro3.png" />
          <div className={styles.income}>Product</div>
          <img
            className={styles.chevronRight2Icon}
            alt=""
            src="./images/chevr.png"
          />
        </div>
        <div className={styles.listMenu2}>
          <img className={styles.cust1} alt="" src="./images/cust1.png" />

          <div className={styles.income}>Customers</div>
          <img
            className={styles.chevronRight2Icon}
            alt=""
            src="./images/chevr.png"
          />
        </div>
        <div className={styles.listMenu3}>
          <img className={styles.inc1} alt="" src="./images/inc1.png" />
          <img className={styles.inc2} alt="" src="./images/inc2.png" />
          <img className={styles.inc3} alt="" src="./images/inc3.png" />
          <img className={styles.inc4} alt="" src="./images/inc4.png" />
          <img className={styles.inc5} alt="" src="./images/inc5.png" />
          <div className={styles.income}>Income</div>
          <img
            className={styles.chevronRight2Icon}
            alt=""
            src="./images/chevr.png"
          />
        </div>
        <div className={styles.listMenu4}>
          <img className={styles.prom1} src="./images/prom1.png" />
          <img className={styles.prom2} src="./images/prom2.png" />
          <img className={styles.prom3} src="./images/prom3.png" />
          <img className={styles.prom4} src="./images/prom4.png" />
          <div className={styles.income}>Promote</div>
          <img
            className={styles.chevronRight2Icon}
            alt=""
            src="./images/chevr.png"
          />
        </div>
        <div className={styles.listMenu5}>
          <img className={styles.help1} alt="" src="./images/help1.png" />
          <img className={styles.help2} alt="" src="./images/help2.png" />
          <img className={styles.help3} alt="" src="./images/help3.png" />
          <div className={styles.income}>Help</div>
          <img className={styles.chevronRight2Icon} src="./images/chevr.png" />
        </div>
      
        <img
          className={styles.sideMenuInner}
          alt=""
          src="./images/evanoimg.png"
        />
        <div className={styles.evanoParent}>
          <div className={styles.evano}>Evano</div>
          <div className={styles.projectManager}>Project Manager</div>
        </div>
        <img
          className={styles.chevronDown2Icon}
          alt=""
          src="./images/chdown.png"
        />

        <div className={styles.dashboardParent}>
          <div className={styles.dashboard2}>Dashboard</div>
          <img
            className={styles.setting1Icon}
            alt=""
            src="./images/Vectoro.png"
          />
          <img
            className={styles.setting1Icon1}
            alt=""
            src="./images/Vectori.png"
          />
        </div>
      
      </div>
      <div className={styles.helloEvano}>Hello Shahrukh 👋🏼,</div>
    </div>
  );
};

export default DashboardNavigation;
