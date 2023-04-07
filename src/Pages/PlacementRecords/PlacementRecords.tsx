import { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CommonPlacements } from "../../Assets/Assets";
import { PageLocation } from "../../Common/Components/Components";
import { PagedDiv } from "../../Utils/js/Utils";
import "./PlacementRecords.scss";

const TableOne = () => {
    return (
        <>
            <div className={"table-one"}>
                <table className="">
                    <tbody>
                        <tr>
                    
                            <td>NAME OF THE STUDENTS
                            </td>
                            <td>SPECIALIZATION</td>
                            <td>NAME OF THE COMPANIES
                            </td>
                        </tr>
                        <tr>
                    
                            <td>ABHISHEK PRAKASH</td>
                            <td>HUMAN RESOURCE MANAGEMENT
                            </td>
                            <td>L&amp; T</td>
                        </tr>
                        <tr>
                        
                            <td>ABYSON THOMAS&nbsp;</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>AON</td>
                        </tr>
                        <tr>
                                    <td>AJMAL KHAN S</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>GEOJIT FINANCIAL SERVICES
                            </td>
                        </tr>
                        <tr>
                    
                            <td>AKRITI SINGH</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>ZOMATO</td>
                        </tr>
                        <tr>
                    
                            <td>AMIT SHARMA</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>FITNESS CAFE</td>
                        </tr>
                        <tr>
            
                            <td>ANSHUL BHATNAGAR</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>PROPTIGER.COM</td>
                        </tr>
                        <tr>
                    
                            <td>ANSU DEVASIA</td>
                            <td>HUMAN RESOURCE MANAGEMENT
                            </td>
                            <td>PADDY HR SOLUTIONS</td>
                        </tr>
                        <tr>
                    
                            <td>B NARENDRA REDDY</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>HDFC SALES PVT LTD</td>
                        </tr>
                        <tr>
                    
                            <td>BHARAT KISHORE SAHU</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>FABHOTEL&nbsp;</td>
                        </tr>
                        <tr>

                            <td>CH V S L SAIKIRAN</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>GET CAPITAL</td>
                        </tr>
                        <tr>
                
                            <td>CHANDRIMA SUR&nbsp;</td>
                            <td>HUMAN RESOURCE MANAGEMENT
                            </td>
                            <td>AXIS BANK&nbsp;</td>
                        </tr>
                        <tr>
                    
                            <td>CHARUGUNDLA HARIKRISHNA
                            </td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>SIMPLILEARN</td>
                        </tr>
                        <tr>
                    
                            <td>CHINTAN SANDEEP GOYAL</td>
                            <td>RETAIL &amp; SUPPLY CHAIN MANAGEMENT</td>
                            <td>TVS LOGISTICS</td>
                        </tr>
                        <tr>
                
                            <td>DEVARAJA D</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>COCA COLA</td>
                        </tr>
                        <tr>
                    
                            <td>DEVIVARAPRASAD</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>TERRAH TECHNOLOGIES</td>
                        </tr>
                        <tr>
                    
                            <td>FEBA VARGHESE&nbsp;</td>
                            <td>HUMAN RESOURCE MANAGEMENT
                            </td>
                            <td>EMMANUEL MISSION SENIOUR SECONDARY SCHOOL&nbsp;</td>
                        </tr>
                        <tr>
                
                            <td>GADDAM THRISHANK REDDY
                            </td>
                            <td>RETAIL &amp; SUPPLY CHAIN MANAGEMENT</td>
                            <td>CRESC DATASOFT PRIVATE LTD</td>
                        </tr>
                        <tr>
                    
                            <td>GARIMA SINGH</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>ALLEGIS GROUP</td>
                        </tr>
                        <tr>
                
                            <td>GEORGE ZACHARIA</td>
                            <td>HUMAN RESOURCE MANAGEMENT
                            </td>
                            <td>THOMAS COOK</td>
                        </tr>
                        <tr>
                    
                            <td>GIRISH BABU CV</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>STATE STREET</td>
                        </tr>
                        <tr>
                    
                            <td>H K VAJRARJUN</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>CAS2STAY PRIVATE LIMITED
                            </td>
                        </tr>
                        <tr>
                    
                            <td>HAMSA M</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>REFINITIV</td>
                        </tr>
                        <tr>
                    
                            <td>JAGADEESH KELLAMPALLI
                            </td>
                            <td>RETAIL &amp; SUPPLY CHAIN MANAGEMENT</td>
                            <td>ABNER WORKSPACE SOLUTIONS INC</td>
                        </tr>
                        <tr>
                    
                            <td>JAYAWARDENE REDDY</td>
                            <td>RETAIL &amp; SUPPLY CHAIN MANAGEMENT</td>
                            <td>GROFERS</td>
                        </tr>
                        <tr>
                    
                            <td>JISHNU BHASKER</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>LULU GROUP INTERNATIONAL
                            </td>
                        </tr>
                        <tr>
                        
                            <td>KAVYA SHREE&nbsp; R</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>PRICEWATERHOUSECOOPERS LLP
                            </td>
                        </tr>
                        <tr>
                        
                            <td>KESIYA VARGHESE&nbsp;</td>
                            <td>HUMAN RESOURCE MANAGEMENT
                            </td>
                            <td>EMMANUEL MISSION SENIOUR SECONDARY SCHOOL</td>
                        </tr>
                        <tr>
                    
                            <td>L VISWESHWAR REDDY</td>
                            <td>RETAIL &amp; SUPPLY CHAIN MANAGEMENT</td>
                            <td>GROFERS</td>
                        </tr>
                        <tr>
                    
                            <td>M DEVENDER YADAV</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>PWC</td>
                        </tr>
                        <tr>
                        
                            <td>MEGHA SHARMA</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>NEENOPAL INTELLIGENT SOLUTIONS PVT. LTD.</td>
                        </tr>
                        <tr>
                        
                            <td>MITESH&nbsp;</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>INDIA BULLS</td>
                        </tr>
                        <tr>
                        
                            <td>MOHAMMED ARSHAD ALI</td>
                            <td>HUMAN RESOURCE MANAGEMENT
                            </td>
                            <td>SLK SOFTWARE</td>
                        </tr>
                        <tr>
                        
                            <td>MRINAL PRAMOD NIKALJE</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>FABHOTELS&nbsp;</td>
                        </tr>
                        <tr>
                        
                            <td>MULENTI VAMSIDHAR REDDY
                            </td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>REFINITIV</td>
                        </tr>
                        <tr>
                        
                            <td>MUNNANGI RAGINI</td>
                            <td>RETAIL &amp; SUPPLY CHAIN MANAGEMENT</td>
                            <td>WIPRO</td>
                        </tr>
                        <tr>
                        
                            <td>N.V.S. ANIRUDH</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>YES BANK</td>
                        </tr>
                        <tr>
                        
                            <td>NAGARJUN S</td>
                            <td>RETAIL &amp; SUPPLY CHAIN MANAGEMENT</td>
                            <td>CARGILL BUSINESS SERVICES
                            </td>
                        </tr>
                        <tr>
                        
                            <td>NANDINI S</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>AEGIES</td>
                        </tr>
                        <tr>
                        
                            <td>NEELAKANTAM LOKESH</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>IIFL HOME LOANS&nbsp;</td>
                        </tr>
                        <tr>
                        
                            <td>P.VISHNU TEJ</td>
                            <td>HUMAN RESOURCE MANAGEMENT
                            </td>
                            <td>WIPRO&nbsp;</td>
                        </tr>
                        <tr>
                        
                            <td>PALLA VENKATA MADHUSUDHAN
                            </td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>STATE STREET</td>
                        </tr>
                        <tr>
                        
                            <td>PALLAVI S</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>HGS</td>
                        </tr>
                        <tr>

                            <td>PARVEEN SHARMA</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>CARS24</td>
                        </tr>
                        <tr>
                        
                            <td>PRATIKSHA GHODKE&nbsp;</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>JEWELEX INDIA PVT LTD</td>
                        </tr>
                        <tr>
                        
                            <td>PRAVEEN KUMAR S</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>SOCIETE GENERALE CORPORATE INVESTMENT BANK</td>
                        </tr>
                        <tr>
                        
                            <td>PRIYADARSHINI S</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>PWC KSDC</td>
                        </tr>
                        <tr>
                    
                            <td>PUNITH K R</td>
                            <td>RETAIL &amp; SUPPLY CHAIN MANAGEMENT</td>
                            <td>ICICI BANK LTD</td>
                        </tr>
                        <tr>
                        
                            <td>RAGHAVENDRA KG</td>
                            <td>RETAIL &amp; SUPPLY CHAIN MANAGEMENT</td>
                            <td>GOODWILL COMMODITY</td>
                        </tr>
                        <tr>

                            <td>RAJESHWAR.L.N</td>
                            <td>RETAIL &amp; SUPPLY CHAIN MANAGEMENT</td>
                            <td>ZOMATO&nbsp;</td>
                        </tr>
                        <tr>
                        
                            <td>RAJLAXMI HUBLIKAR</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>NAUKRI.COM</td>
                        </tr>
                        <tr>
                        
                            <td>RAVIPATI SRI VIRINCHI</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>THOMSON REUTERS</td>
                        </tr>
                        <tr>
                        
                            <td>RIMA DAS</td>
                            <td>HUMAN RESOURCE MANAGEMENT
                            </td>
                            <td>SRST PRIVATE LIMITED</td>
                        </tr>
                        <tr>
                    
                            <td>SAGAR IG</td>
                            <td>RETAIL &amp; SUPPLY CHAIN MANAGEMENT</td>
                            <td>MARKET ONE INTERNATIONAL
                            </td>
                        </tr>
                        <tr>
                        
                            <td>SAURABH DHAR</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>VIP INDUSTRIES LTD</td>
                        </tr>
                        <tr>

                            <td>SHAIK IMRAN BASHA</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>CK BIRLA GROUPS</td>
                        </tr>
                        <tr>
                        
                            <td>SHAMEER BASHA S</td>
                            <td>HUMAN RESOURCE MANAGEMENT
                            </td>
                            <td>DNC FINANCIAL SERVICES PVT LIMITED</td>
                        </tr>
                        <tr>
                        
                            <td>SHIVA KUMAR CM</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>COGNIZANT</td>
                        </tr>
                        <tr>
                        
                            <td>SHIVA SHANKAR&nbsp; G</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>ICICI BANK</td>
                        </tr>
                        <tr>
                        
                            <td>SHIVANI YADAV</td>
                            <td>HUMAN RESOURCE MANAGEMENT
                            </td>
                            <td>ANZY CAREERS</td>
                        </tr>
                        <tr>
                        
                            <td>SIDDHARTH JAIN</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>NAVDEEP PUBLICATIONS PVT LTD</td>
                        </tr>
                        <tr>

                            <td>SRIDEVI NU</td>
                            <td>RETAIL &amp; SUPPLY CHAIN MANAGEMENT</td>
                            <td>FUTURE GROUP</td>
                        </tr>
                        <tr>
                
                            <td>SRINATH N U</td>
                            <td>RETAIL &amp; SUPPLY CHAIN MANAGEMENT</td>
                            <td>ANGEL BROKING</td>
                        </tr>
                        <tr>
                            
                            <td>SRIVATSA P</td>
                            <td>RETAIL &amp; SUPPLY CHAIN MANAGEMENT</td>
                            <td>NOVO NORDISK</td>
                        </tr>
                        <tr>
                            
                            <td>SUCHITH BJ</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>TRANSACT GLOBAL</td>
                        </tr>
                        <tr>
                            
                            <td>SUMATI GOWDA</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>NANDI TOYOTA</td>
                        </tr>
                        <tr>
                        
                            <td>SUMITA MUKHERJEE</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>OMIT</td>
                        </tr>
                        <tr>
                        
                            <td>SUNIL T N</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>GODREJ&amp;BOYCE MFG CO LTD</td>
                        </tr>
                        <tr>
                        
                            <td>SUNITHA JAMES</td>
                            <td>HUMAN RESOURCE MANAGEMENT
                            </td>
                            <td>CG-VAK SOFTWARE AND EXPORTS
                            </td>
                        </tr>
                        <tr>
                        
                            <td>SUSWETA CHAKRABORTY</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>OYO</td>
                        </tr>
                        <tr>
                            
                            <td>VARSHINI R</td>
                            <td>RETAIL &amp; SUPPLY CHAIN MANAGEMENT</td>
                            <td>GROFERS&nbsp;</td>
                        </tr>
                        <tr>
                        
                            <td>VIDYA S</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>RELIGARE</td>
                        </tr>
                        <tr>
                        
                            <td>VINAMRA P BAFNA&nbsp;</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>JK CEMENTS</td>
                        </tr>
                        <tr>
                        
                            <td>VISHWANATH D K</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>RP CLAN</td>
                        </tr>
                        <tr>
                        
                            <td>Y SAI SANDEEP</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>PWC</td>
                        </tr>
                        <tr>
                        
                            <td>YAGNESHWAR SOMA</td>
                            <td>HUMAN RESOURCE MANAGEMENT
                            </td>
                            <td>DTDC EXPRESS LTD</td>
                        </tr>
                        <tr>
                            
                            <td>YASHASWINI P</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>GROUPON</td>
                        </tr>
                        <tr>
                
                            <td>YUVA SAIKUMAR D</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>STATE STREET</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

const TableTwo = () => {
    return (
        <>
            <div className={"table-two"}>
                <table className="">
                    <tbody>
                        <tr>
                        
                            <td>NAME OF THE STUDENT</td>
                            <td>SPECIALIZATION</td>
                            <td>COMPANY NAME</td>
                        </tr>
                        <tr>
                        
                            <td>ABDUL SAJEED</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>BAJAJ FINANCE&nbsp;</td>
                        </tr>
                        <tr>
                        
                            <td>ADESH TETE</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>SLK SOFTWARES</td>
                        </tr>
                        <tr>
                        
                            <td>ADWAITH NAIR</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>BIG BASKET</td>
                        </tr>
                        <tr>
                        
                            <td>ALLADA MOHAN KUMAR</td>
                            <td>MARKETING</td>
                            <td>NEIL PATEL DIGITAL INDIA</td>
                        </tr>
                        <tr>
                        
                            <td>AMIYA DHAR</td>
                            <td>RETAIL &amp;SUPPLY CHAIN MANAGEMENT
                            </td>
                            <td>ITECH WORKSHOP BENGALORE</td>
                        </tr>
                        <tr>
                        
                            <td>ANUP H.N</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>STANDARD CHARTERED</td>
                        </tr>
                        <tr>
                    
                            <td>ARUNIMA SABU&nbsp;</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>COGNIZANT</td>
                        </tr>
                        <tr>
                            
                            <td>B R UTHRA</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>COGNIZANT "(GOOGLE) PROJECT</td>
                        </tr>
                        <tr>
                        
                            <td>BALJEET KUMAR</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>AIR INDIA ASSISTANT AIRPORT MANAGER</td>
                        </tr>
                        <tr>
                        
                            <td>BHARATH KUMAR B H</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>SOBHA CONSTRUCTIONS</td>
                        </tr>
                        <tr>
                        
                            <td>BHARATH V</td>
                            <td>HEALTH CARE MANAGEMENT</td>
                            <td>RAINBOW CHILDREN'S HOSPITAL</td>
                        </tr>
                        <tr>
                        
                            <td>BIJAYLAXMI GHADEI</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>WELLS FARGO</td>
                        </tr>
                        <tr>
                        
                            <td>CHAKRAVARTHI VIJAYAMANI</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>NINJA CART</td>
                        </tr>
                        <tr>
                        
                            <td>CHIYYAVARAM VASUNDHARA</td>
                            <td>HEALTH CARE MANAGEMENT</td>
                            <td>ASTER CMI HOSPITAL</td>
                        </tr>
                        <tr>
                        
                            <td>D.MANJUNATH REDDY</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>DEV I LOGIC</td>
                        </tr>
                        <tr>
                        
                            <td>EBIN K ABRAHAM</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>DECATHLON</td>
                        </tr>
                        <tr>
                        
                            <td>G.SANDHYA</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>TESCO BENGALURU</td>
                        </tr>
                        <tr>
                        
                            <td>GAIKWAD VEDANTIKA</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>AMAZON</td>
                        </tr>
                        <tr>
                        
                            <td>GAJENDRA SHARMA</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>ITC MUGHAL AGRA&nbsp;</td>
                        </tr>
                        <tr>
                            
                            <td>GUDLA SRILAYA</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>STATE STREET</td>
                        </tr>
                        <tr>
                        
                            <td>HARIPRASAD A</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>99ACRES.COM</td>
                        </tr>
                        <tr>
                        
                            <td>HEMANTH REDDY A</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>LIVE UP SOLUTIONS</td>
                        </tr>
                        <tr>
                            
                            <td>RASHMI. R</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>GOOGLE</td>
                        </tr>
                        <tr>
                            
                            <td>K. KOUSHIK KUMAR SINGH&nbsp;</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>REFINITIV (FORMERLY KNOWN AS THOMSON REUTERS)&nbsp;</td>
                        </tr>
                        <tr>
                        
                            <td>KAJA SAI SRAVAN</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>STANDARD CHARTERED&nbsp;</td>
                        </tr>
                        <tr>
                        
                            <td>KAMALDEEP SINGH</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>NINJACART</td>
                        </tr>
                        <tr>
                        
                            <td>KAUSHIKKUMAR VITTHALBHAI PATEL</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>ACCUMAX LAB DEVICES PVT LTD</td>
                        </tr>
                        <tr>
                        
                            <td>KUMARI NICKY BAGH</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>AMAZON</td>
                        </tr>
                        <tr>
                        
                            <td>MADHU B N</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>NOT YET</td>
                        </tr>
                        <tr>
                    
                            <td>MADHU SMITHA</td>
                            <td>HEALTH CARE MANAGEMENT</td>
                            <td>HEALTHIFYME</td>
                        </tr>
                        <tr>
                        
                            <td>MANISH PANDEY</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>TATA CROMA&nbsp;</td>
                        </tr>
                        <tr>
                            <td>MD EJAJ AHMED&nbsp;</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>NESTAWAY&nbsp;</td>
                        </tr>
                        <tr>
                        
                            <td>MEDAPPA C B</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>STANDARD CHARTERED GBS</td>
                        </tr>
                        <tr>
                        
                            <td>MOHAN G</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>MEDVERVE FINTECH SOLUTIONS&nbsp;</td>
                        </tr>
                        <tr>
                    
                            <td>MUKKA SURESH KUMAR REDDY</td>
                            <td>RETAIL &amp;SUPPLY CHAIN MANAGEMENT
                            </td>
                            <td>WAKEFIT MATTRESSES</td>
                        </tr>
                        <tr>
                        
                            <td>MUNESHA NS&nbsp;</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>JK CEMENT LTD&nbsp;</td>
                        </tr>
                        <tr>
                        
                            <td>N.CHANDAN</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>TESCO&nbsp;</td>
                        </tr>
                        <tr>
                    
                            <td>NARESHA K R&nbsp;</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>STANDARD CHARTERED&nbsp;</td>
                        </tr>
                        <tr>
                        
                            <td>PALAK PANDEY</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>TESCO</td>
                        </tr>
                        <tr>
                    
                            <td>PALLAVI SHARMA</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>MERCK GROUP</td>
                        </tr>
                        <tr>
                        
                            <td>PANKAJ PAWAR H</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>NARAYANA MULTI-SPECIALITY HOSPITAL</td>
                        </tr>
                        <tr>
                        
                            <td>PAVITHRA M</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>ORACLE</td>
                        </tr>
                        <tr>
                            
                            <td>POLINA JASWANTH KUMAR</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>BAJAJ FINANCE</td>
                        </tr>
                        <tr>
                        
                            <td>PRADEEPA.M</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>ASCENT HR</td>
                        </tr>
                        <tr>
                        
                            <td>PRANAV NAUTIYAL</td>
                            <td>INFORMATION TECHNOLOGY</td>
                            <td>DELUXE</td>
                        </tr>
                        <tr>
                        
                            <td>PRANJALI MISAL</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>KARNATAKA</td>
                        </tr>
                        <tr>
                
                            <td>PRAVEEN KUMAR</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>QNESS SOFTWARE</td>
                        </tr>
                        <tr>
                    
                            <td>PRAVEEN KUMAR R</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>TEASPOT&nbsp;</td>
                        </tr>
                        <tr>
                        
                            <td>PRAVEEN S N&nbsp;</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>LIMPKIN&nbsp;</td>
                        </tr>
                        <tr>
                        
                            <td>RAVI REDDY M</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>NARAYANA MULTI-SPECIALITY HOSPITAL</td>
                        </tr>
                        <tr>
                        
                            <td>RUCHIKA&nbsp;</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>OYO-WEDDING’S</td>
                        </tr>
                        <tr>
                        
                            <td>S.BHAVANI</td>
                            <td>HEALTH CARE MANAGEMENT</td>
                            <td>P&amp;G SOFTWARE SOLUTIONS</td>
                        </tr>
                        <tr>
                        
                            <td>SAGAR SEN</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>OPPO</td>
                        </tr>
                        <tr>
                        
                            <td>SAJID RAHMAN</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>BYJU'S</td>
                        </tr>
                        <tr>
                        
                            <td>SAMUDRALA PRASANNA KUMAR</td>
                            <td>INFORMATION TECHNOLOGY</td>
                            <td>MAHARASHTRA KNOWLEDGE CORPORATION LIMITED (MKCL)</td>
                        </tr>
                        <tr>
                        
                            <td>SAMUEL NISHANTH ROSHAN KATARI&nbsp;</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>DECATHLON</td>
                        </tr>
                        <tr>
                        
                            <td>SANDEEP DADWAL</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>ANAROCK PROPERTY CONSULTANTS PVT.LTD.</td>
                        </tr>
                        <tr>
                        
                            <td>SANDRA LAVANYA</td>
                            <td>HEALTH CARE MANAGEMENT</td>
                            <td>MEDVERVE FINTECH</td>
                        </tr>
                        <tr>
                        
                            <td>SAYED SHOAIB&nbsp;</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>INTELLIPAAT&nbsp;</td>
                        </tr>
                        <tr>
                        
                            <td>SHABODDIN JAKATI</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>BAJAJ FINANCE LIMITED</td>
                        </tr>
                        <tr>
                            
                            <td>SHARADHI KULKARNI</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>SISA: PAYMENT SECURITY SPECIALIST</td>
                        </tr>
                        <tr>
                        
                            <td>SHARAN S RAI</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>TOYOTA</td>
                        </tr>
                        <tr>
                        
                            <td>SHARATH KUMAR S</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>CARGILL BUSINESS SERVICES</td>
                        </tr>
                        <tr>
                        
                            <td>SHASHANK SHARMA</td>
                            <td>INFORMATION TECHNOLOGY</td>
                            <td>IZMO LTD</td>
                        </tr>
                        <tr>
                        
                            <td>SHAWN DERICK PAIS</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>NINJACART</td>
                        </tr>
                        <tr>
                        
                            <td>SHAZER ASKARI</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>VEDANTU</td>
                        </tr>
                        <tr>
                        
                            <td>SHIKHA PURWAR</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>APAR TECHNOLOGY</td>
                        </tr>
                        <tr>
                        
                            <td>SHIVANI</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>INDICOM.COM</td>
                        </tr>
                        <tr>
                        
                            <td>SHUBHAM RAWAL</td>
                            <td>INFORMATION TECHNOLOGY</td>
                            <td>IZMO LTD</td>
                        </tr>
                        <tr>
                        
                            <td>SHUBHO NATH CHAKRABORTY</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>SWIGGY</td>
                        </tr>
                        <tr>
                        
                            <td>SIMON BENJAMIN SAMUEL</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>NINJACRT</td>
                        </tr>
                        <tr>
                            
                            <td>SMRITI GUPTA</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>SHOPPER STOP</td>
                        </tr>
                        <tr>
                            
                            <td>SOLOMON DAVID</td>
                            <td>INFORMATION TECHNOLOGY</td>
                            <td>FRESHER</td>
                        </tr>
                        <tr>
                        
                            <td>SREEDHAR REDDY.V&nbsp;</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>HERITAGE&nbsp;</td>
                        </tr>
                        <tr>
                        
                            <td>SUMAN BT</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>BAJAJ FIN SERVE</td>
                        </tr>
                        <tr>
                            
                            <td>SUMITHA SOMAN</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>GOOGLE</td>
                        </tr>
                        <tr>
                            
                            <td>SUNIL KUMAR PS</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>FINCART</td>
                        </tr>
                        <tr>
                        
                            <td>SURJIT GHOSH&nbsp;</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>ANAROCK&nbsp;</td>
                        </tr>
                        <tr>
                        
                            <td>SUSHMITA DAS</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>OPPO</td>
                        </tr>
                        <tr>
                        
                            <td>TANUJA.M</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>DE MOZA</td>
                        </tr>
                        <tr>
                    
                            <td>TEJA KOTAPATI</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>STANDARD CHARTERED</td>
                        </tr>
                        <tr>
                        
                            <td>THEJASWINI K M</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>THOUGHTWORKS</td>
                        </tr>
                        <tr>
                        
                            <td>UJNA A</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>ALCHEMY SOFTWARE SOLUTIONS</td>
                        </tr>
                        <tr>
                        
                            <td>USHA P(BHU)</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>ALCHEMY SOFTWARE SOLUTIONS&nbsp;</td>
                        </tr>
                        <tr>
                        
                            <td>V PRAVEEN RAJ</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>SWIGGY</td>
                        </tr>
                        <tr>
                        
                            <td>VAISHNAVI INDUPURU</td>
                            <td>HEALTH CARE MANAGEMENT</td>
                            <td>OMICS INTERNATIONAL PVT LTD</td>
                        </tr>
                        <tr>
                        
                            <td>VARSHA K V&nbsp;</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>HP</td>
                        </tr>
                        <tr>
            
                            <td>VATSAL P JANI</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>TESCO</td>
                        </tr>
                        <tr>
                    
                            <td>VEDANTIKA GAIKWAD</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>AMAZON</td>
                        </tr>
                        <tr>
                    
                            <td>VEMULA AJAY</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>ADITYA BIRLA CAPITAL</td>
                        </tr>
                        <tr>
                    
                            <td>VENU V&nbsp;</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>ADTIY BIRLA CAPITAL PVT LTD.</td>
                        </tr>
                        <tr>
                        
                            <td>VINAY G</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>BHADRA TATPAULIN INDUSTRIES&nbsp;</td>
                        </tr>
                        <tr>
                        
                            <td>VINAY KUMAR T</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>CONNEQT BUSINESS SOLUTIONS&nbsp; LIMITED
                            </td>
                        </tr>
                        <tr>
                        
                            <td>WUNTHAKALLU BHARGAVA SANTHOSH KUMAR
                            </td>
                            <td>RETAIL &amp;SUPPLY CHAIN MANAGEMENT
                            </td>
                            <td>LEVTECH CONSULTING SERVICES&nbsp;</td>
                        </tr>
                        <tr>
                        
                            <td>VISHNUVARDHAN. B</td>
                            <td>RETAIL &amp;SUPPLY CHAIN MANAGEMENT
                            </td>
                            <td>OPPO</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

const PlacementRecordTable = () => {

    const [pagedDivInstance, setPagedDivInstance] = useState<PagedDiv | null>(null);

    useEffect( () => {
        let _pagedDivInstance = new PagedDiv({_name: ".placement-record-table-slides", initialPos: 0, _fitToChild: true, fitWidthToParent: true});
        setPagedDivInstance(_pagedDivInstance);
        _pagedDivInstance.addWindowResizeListener();

        window.addEventListener("resize", _pagedDivInstance.fitHeightToCurrentPos);
        return () => {
            _pagedDivInstance.removeWindowResizeListener();
            window.removeEventListener("resize", _pagedDivInstance.fitHeightToCurrentPos);
        };
    }, []);

    const gotoPage = useCallback((event: React.MouseEvent<HTMLButtonElement>, index: number) => {
        if (!pagedDivInstance)
            return
        let activeElem = document.querySelector(".placement-record-table-buttons .active");
        if (!activeElem) return;
        activeElem.classList.remove("active");
        let targetElem = event.target as HTMLButtonElement;
        targetElem.classList.add("active");
        pagedDivInstance.goto(index);
    }, [pagedDivInstance])

    return (
        <>
            <div className={"placement-record-table"}>
                <div className={"placement-record-table-buttons"}>
                    <button className={"button bg-deep-orange-600  active"} onClick={(e) => gotoPage(e, 0)}>Placement Record-2016-18 Batch</button>
                    <button className={"button bg-deep-orange-600"} onClick={(e) => gotoPage(e, 1)}>Placement Record 2017-19 Batch</button>
                </div>
                <div className={"paged placement-record-table-slides"}>
                    <div>
                        <div className={"card-panel"}>
                            <TableOne />
                        </div>
                    </div>
                    <div>
                        <div className={"card-panel"}>
                            <TableTwo />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


const PlacementRecords = () => {
    return (
        <>
            <Helmet>
                <title>Placement Records - AIMS IBS</title>
                <meta name="description" content="Placement Records"/>
            </Helmet>
            <PageLocation img={CommonPlacements} locations={["HOME", "PLACEMENT RECORDS"]} title={"PLACEMENT RECORDS"}/>
            <div className={"placement-records"}>
                <PlacementRecordTable />
            </div>
        </>
    )
}

export default PlacementRecords;