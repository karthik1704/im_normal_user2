import { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CommonInternshipMotors } from "../../Assets/Assets";
import { PageLocation } from "../../Common/Components/Components";
import { PagedDiv } from "../../Utils/js/Utils";
import "./InternshipRecords.scss";

const TableOne = () => {
    return (
        <>
            <div className={"table-one"}>
                <table className={""}>
                    <tbody>
                        <tr>
                            
                            <td>NAME OF THE STUDENT</td>
                            <td>SPECIALIZATION</td>
                            <td>COMPANIES</td>
                        </tr>
                        <tr></tr>
                        <tr>
                        
                            <td>ABDUL SAJEED</td>
                            <td>MARKETING</td>
                            <td>METRO -CASH &amp; CARRY</td>
                        </tr>
                        <tr>
                        
                            <td>ABHISHEK B A</td>
                            <td>MARKETING</td>
                            <td>FAB HOTELS</td>
                        </tr>
                        <tr>
                        
                            <td>BRIJENDRA SINGH</td>
                            <td>MARKETING</td>
                            <td>FAB HOTELS</td>
                        </tr>
                        <tr>
                        
                            <td>HEMANTH REDDY A</td>
                            <td>MARKETING</td>
                            <td>FAB HOTELS</td>
                        </tr>
                        <tr>
                        
                            <td>PALLAVI SHARMA</td>
                            <td>MARKETING</td>
                            <td>MERCK</td>
                        </tr>
                        <tr>
                        
                            <td>PRAKASH REDDY</td>
                            <td>MARKETING</td>
                            <td>PNB HOUSING FINANCE
                            </td>
                        </tr>
                        <tr>
                            <td>DAS DEEPAK GAURAV</td>
                            <td>MARKETING</td>
                            <td>PINK BLUE</td>
                        </tr>
                        <tr>
                        
                            <td>EBIN K ABRAHAM</td>
                            <td>MARKETING</td>
                            <td>FAB HOTELS</td>
                        </tr>
                        <tr>
                    
                            <td>MUNESHA.N.S</td>
                            <td>MARKETING</td>
                            <td>FAB HOTELS</td>
                        </tr>
                        <tr>
                        
                            <td>GONEPATI PAVAN KONDA REDDY
                            </td>
                            <td>MARKETING</td>
                            <td>FAB HOTELS</td>
                        </tr>
                        <tr>
                        
                            <td>PAVITHRA M</td>
                            <td>MARKETING</td>
                            <td>FAB HOTELS</td>
                        </tr>
                        <tr>
                        
                            <td>PRAVEEN S N</td>
                            <td>MARKETING</td>
                            <td>FAB HOTELS</td>
                        </tr>
                        <tr>
                        
                            <td>SUSHMITHA DAS</td>
                            <td>MARKETING</td>
                            <td>METRO -CASH &amp; CARRY</td>
                        </tr>
                        <tr>
                        
                            <td>VENU V</td>
                            <td>MARKETING</td>
                            <td>METRO -CASH &amp; CARRY</td>
                        </tr>
                        <tr>
                        
                            <td>MANISH KUMAR</td>
                            <td>MARKETING</td>
                            <td>SPORT INDIA</td>
                        </tr>
                        <tr>
                        
                            <td>ADESH RAMESH TETE</td>
                            <td>MARKETING</td>
                            <td>METRO -CASH &amp; CARRY</td>
                        </tr>
                        <tr>
                        
                            <td>BALJEET KUMAR</td>
                            <td>MARKETING</td>
                            <td>FREEDOM CLUB</td>
                        </tr>
                        <tr>
                        
                            <td>MANISH KUMAR PANDEY</td>
                            <td>MARKETING</td>
                            <td>FAB HOTELS</td>
                        </tr>
                        <tr>
                            
                            <td>SANDEEP DADWAL</td>
                            <td>MARKETING</td>
                            <td>BARBIQUE NATION</td>
                        </tr>
                        <tr>
                        
                            <td>SAYED SHOAIB H</td>
                            <td>MARKETING</td>
                            <td>MISTAY</td>
                        </tr>
                        <tr>
                        
                            <td>SHABODDIN JAKATI</td>
                            <td>MARKETING</td>
                            <td>METRO -CASH &amp; CARRY</td>
                        </tr>
                        <tr>
                        
                            <td>SHARADHI KULKARNI</td>
                            <td>MARKETING</td>
                            <td>METRO -CASH &amp; CARRY</td>
                        </tr>
                        <tr>
                        
                            <td>SHAZER ASKARI</td>
                            <td>MARKETING</td>
                            <td>GRAPHITE INDIA LTD.
                            </td>
                        </tr>
                        <tr>
                        
                            <td>SMRITI GUPTA</td>
                            <td>MARKETING</td>
                            <td>METRO -CASH &amp; CARRY</td>
                        </tr>
                        <tr>
                        
                            <td>SUMAN B T</td>
                            <td>MARKETING</td>
                            <td>FAB HOTELS</td>
                        </tr>
                        <tr>
                            
                            <td>TANUJA M</td>
                            <td>MARKETING</td>
                            <td>DE MOZA</td>
                        </tr>
                        <tr>
                        
                            <td>PRAVEEN RAJ V</td>
                            <td>MARKETING</td>
                            <td>CLUB MAHINDRA</td>
                        </tr>
                        <tr>
                        
                            <td>VEMULA AJAY</td>
                            <td>MARKETING</td>
                            <td>METRO -CASH &amp; CARRY</td>
                        </tr>
                        <tr>
                        
                            <td>VIKRANTH D M</td>
                            <td>MARKETING</td>
                            <td>FAB HOTELS</td>
                        </tr>
                        <tr>
                        
                            <td>VINAY G</td>
                            <td>MARKETING</td>
                            <td>METRO -CASH &amp; CARRY</td>
                        </tr>
                        <tr>
                        
                            <td>ALLADA MOHAN KUMAR</td>
                            <td>MARKETING</td>
                            <td>SOCIAL ORANGE</td>
                        </tr>
                        <tr>
                        
                            <td>GAURAV SARKAR</td>
                            <td>MARKETING</td>
                            <td>FAB HOTELS</td>
                        </tr>
                        <tr>
                        
                            <td>HARI PRASAD A</td>
                            <td>MARKETING</td>
                            <td>METRO -CASH &amp; CARRY</td>
                        </tr>
                        <tr>
                        
                            <td>POLINA JASWANTH KUMAR</td>
                            <td>MARKETING</td>
                            <td>METRO -CASH &amp; CARRY</td>
                        </tr>
                        <tr>
                            
                            <td>RAVI REDDY M</td>
                            <td>MARKETING</td>
                            <td>METRO -CASH &amp; CARRY</td>
                        </tr>
                        <tr>
                        
                            <td>SAGAR SEN</td>
                            <td>MARKETING</td>
                            <td>PNB HOUSING FINANCE
                            </td>
                        </tr>
                        <tr>
                        
                            <td>SHARAN S RAI</td>
                            <td>MARKETING</td>
                            <td>FAB HOTELS</td>
                        </tr>
                        <tr>
                        
                            <td>SHUBHO NATH CHAKRABORTY
                            </td>
                            <td>MARKETING</td>
                            <td>METRO -CASH &amp; CARRY</td>
                        </tr>
                        <tr>
                        
                            <td>PRANJALI PRAMOD MISAL</td>
                            <td>MARKETING</td>
                            <td>METRO -CASH &amp; CARRY</td>
                        </tr>
                        <tr>
                        
                            <td>SAJID RAHMAN</td>
                            <td>MARKETING</td>
                            <td>BARBIQUE NATION</td>
                        </tr>
                        <tr>
                            
                            <td>SURJIT GHOSH</td>
                            <td>MARKETING</td>
                            <td>METRO -CASH &amp; CARRY</td>
                        </tr>
                        <tr>
                        
                            <td>VATSAL P JANI</td>
                            <td>MARKETING</td>
                            <td>MISTAY</td>
                        </tr>
                        <tr>
                        
                            <td>JERIN MATHEW JOHN
                            </td>
                            <td>MARKETING</td>
                            <td>FAB HOTELS</td>
                        </tr>
                        <tr>
                        
                            <td>MAMTHA S&nbsp;&nbsp;</td>
                            <td>MARKETING</td>
                            <td>METRO -CASH &amp; CARRY</td>
                        </tr>
                        <tr>
                        
                            <td>BHANU TEJA GIRAKALA</td>
                            <td>MARKETING</td>
                            <td>BHASH</td>
                        </tr>
                        <tr>
                            <td>RUCHIKA</td>
                            <td>MARKETING</td>
                            <td>FAB HOTELS</td>
                        </tr>
                        <tr>
                        
                            <td>MD EJAJ AHMED</td>
                            <td>MARKETING</td>
                            <td>METRO -CASH &amp; CARRY</td>
                        </tr>
                        <tr>
                        
                            <td>ADITI SHRIVAS</td>
                            <td>FINANCE</td>
                            <td>SMART STOREY</td>
                        </tr>
                        <tr>
                            <td>AMBIKA K M</td>
                            <td>FINANCE</td>
                            <td>MAHINDRA FINANCE</td>
                        </tr>
                        <tr>
                            <td>CHAITANYA N</td>
                            <td>FINANCE</td>
                            <td>HDFC HOME LOANS</td>
                        </tr>
                        <tr>
            
                            <td>CHANDAN N</td>
                            <td>FINANCE</td>
                            <td>RIGHT HORIZORNS</td>
                        </tr>
                        <tr>
                        
                            <td>SRITEJA GUDLA</td>
                            <td>FINANCE</td>
                            <td>ANSR SOURCE</td>
                        </tr>
                        <tr>
                        
                            <td>MANJUNATH REDDY D</td>
                            <td>FINANCE</td>
                            <td>TEAMELEASE/PHONE PAY
                            </td>
                        </tr>
                        <tr>
                        
                            <td>USHA P</td>
                            <td>FINANCE</td>
                            <td>J WINGS</td>
                        </tr>
                        <tr>
                        
                            <td>VARSHA K V</td>
                            <td>FINANCE</td>
                            <td>J WINGS</td>
                        </tr>
                        <tr>
                            
                            <td>GUDLA SRI LAYA</td>
                            <td>FINANCE</td>
                            <td>HDFC SECURITIES</td>
                        </tr>
                        <tr>
                        
                            <td>SHREEDHAR REDDY V</td>
                            <td>FINANCE</td>
                            <td>J WINGS</td>
                        </tr>
                        <tr>
                        
                            <td>ANUP H N</td>
                            <td>FINANCE</td>
                            <td>MAHINDRA FINANCE</td>
                        </tr>
                        <tr>
                        
                            <td>GOWTHAM H R</td>
                            <td>FINANCE</td>
                            <td>ZOOMCAR</td>
                        </tr>
                        <tr>
                        
                            <td>K KOUSHIK KUMAR SINGH</td>
                            <td>FINANCE</td>
                            <td>J WINGS</td>
                        </tr>
                        <tr>

                            <td>KOMAL JAIN</td>
                            <td>FINANCE</td>
                            <td>HDFC SECURITIES</td>
                        </tr>
                        <tr>
                        
                            <td>MEDAPPA C B</td>
                            <td>FINANCE</td>
                            <td>ZOOM CAR</td>
                        </tr>
                        <tr>
                        
                            <td>MOHAN G</td>
                            <td>FINANCE</td>
                            <td>ZOOM CAR</td>
                        </tr>
                        <tr>
                        
                            <td>NARESHA K R</td>
                            <td>FINANCE</td>
                            <td>J WINGS</td>
                        </tr>
                        <tr>
                        
                            <td>PALAK PANDEY</td>
                            <td>FINANCE</td>
                            <td>HDFC SECURITIES</td>
                        </tr>
                        <tr>
                    
                            <td>PRAVEEN KUMAR&nbsp;</td>
                            <td>FINANCE</td>
                            <td>LKP</td>
                        </tr>
                        <tr>

                            <td>SAMUEL NISHANTH ROSHAN KATARI</td>
                            <td>FINANCE</td>
                            <td>INDIAN MONEY</td>
                        </tr>
                        <tr>
                            <td>SHARATH KUMAR S</td>
                            <td>FINANCE</td>
                            <td>MAHINDRA FINANCE</td>
                        </tr>
                        <tr>
                        
                            <td>TANUJA KATHAYAT</td>
                            <td>FINANCE</td>
                            <td>J WINGS</td>
                        </tr>
                        <tr>
                        
                            <td>BHARATH KUMAR B H</td>
                            <td>FINANCE</td>
                            <td>J WINGS</td>
                        </tr>
                        <tr>
                        
                            <td>BIJAYLAXMI GHADEI</td>
                            <td>FINANCE</td>
                            <td>SMART STOREY</td>
                        </tr>
                        <tr>
                        
                            <td>GUMMAGATTU SIVAPRASAD</td>
                            <td>FINANCE</td>
                            <td>SMART STOREY</td>
                        </tr>
                        <tr>
                    
                            <td>KAJA SAI SRAVAN</td>
                            <td>FINANCE</td>
                            <td>J WINGS</td>
                        </tr>
                        <tr>
                        
                            <td>KOTAPATI TEJA</td>
                            <td>FINANCE</td>
                            <td>J WINGS</td>
                        </tr>
                        <tr>
                            
                            <td>MADHU B N</td>
                            <td>FINANCE</td>
                            <td>HDFC SECURITIES</td>
                        </tr>
                        <tr>
                        
                            <td>NAGESH K</td>
                            <td>FINANCE</td>
                            <td>LKP</td>
                        </tr>
                        <tr>
                        
                            <td>RASHMI RAJAN THIYANA</td>
                            <td>FINANCE</td>
                            <td>HDFC SECURITIES</td>
                        </tr>
                        <tr>
                        
                            <td>SHIVANI</td>
                            <td>FINANCE</td>
                            <td>HDFC SECURITIES</td>
                        </tr>
                        <tr>
                    
                            <td>VINAY KUMAR T</td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>QCONNEQT CORP</td>
                        </tr>
                        <tr>
                        
                            <td>PRADEEPA M</td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>QUIKR</td>
                        </tr>
                        <tr>
                        
                            <td>SIMON BENJAMIN SAMUEL</td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>CIEL HR</td>
                        </tr>
                        <tr>
                        
                            <td>STANLEY VARGHESE</td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>FUTURE GENRALI
                            </td>
                        </tr>
                        <tr>
                    
                            <td>SUMITHA SOMAN</td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>KELLY SERVICES</td>
                        </tr>
                        <tr>
                        
                            <td>ADWAITH NAIR K</td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>L&amp;T TECHNOLOGY SERVICES</td>
                        </tr>
                        <tr>
                            
                            <td>B R UTHRA</td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>CLUB MAHINDRA</td>
                        </tr>
                        <tr>
                        
                            <td>BASINENI MEGHANA NAIDU
                            </td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>SODEXO</td>
                        </tr>
                        <tr>
                        
                            <td>G SANDHYA</td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>CLUB MAHINDRA</td>
                        </tr>
                        <tr>
                            
                            <td>PRASANTH HV</td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>SODEXO</td>
                        </tr>
                        <tr>
                            
                            <td>KAUSHIKKUMAR VITTHALBHAI PATEL</td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>CIEL HR</td>
                        </tr>
                        <tr>
                        
                            <td>KUMARI NICKY BAGH</td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>VOGO&nbsp;</td>
                        </tr>
                        <tr>
                        
                            <td>MEGHANA K</td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>CAREER NET</td>
                        </tr>
                        <tr>
                        
                            <td>SHAWN DERICK PAIS</td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>DELHIVERY</td>
                        </tr>
                        <tr>
                            
                            <td>ARUNIMA SABU</td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>L&amp;T INFOTECH</td>
                        </tr>
                        <tr>
                        
                            <td>CHAKRAVARTHI V</td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>HEALTH &amp; GLOW
                            </td>
                        </tr>
                        <tr>
                        
                            <td>GAIKWAD VEDANTIKA RAMACHANDRA
                            </td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>L&amp;T INFOTECH</td>
                        </tr>
                        <tr>
                        
                            <td>GAJENDRAPRASAD OMPRAKASH SHARMA</td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>ITC GARDENIA</td>
                        </tr>
                        <tr>
                        
                            <td>KAMALDEEP SINGH</td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>QCONNEQT CORP</td>
                        </tr>
                        <tr>
                            
                            <td>MONICA SHARMA</td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>L&amp;T INFOTECH</td>
                        </tr>
                        <tr>
                
                            <td>PANKAJ PAWAR H</td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>FUTURE GENRALI
                            </td>
                        </tr>
                        <tr>
                            
                            <td>PAVITHRA R</td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>VOGO&nbsp;</td>
                        </tr>
                        <tr>
                    
                            <td>PRAVEENKUMAR R</td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>SODEXO</td>
                        </tr>
                        <tr>
                        
                            <td>SHIKHA PURWAR</td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>CAREERNET</td>
                        </tr>
                        <tr>
                            
                            <td>THEJASWINI K M</td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>92.7 BIG FM</td>
                        </tr>
                        <tr>
                        
                            <td>UJNA A</td>
                            <td>HUMAN RESOURCE MGMT</td>
                            <td>VOGO&nbsp;</td>
                        </tr>
                        <tr>
                        
                            <td>AMIYA DHAR</td>
                            <td>SCM</td>
                            <td>AKASA LABS</td>
                        </tr>
                        <tr>
                        
                            <td>G VIDEESH REDDY&nbsp;</td>
                            <td>SCM</td>
                            <td>DTDC</td>
                        </tr>
                        <tr>
                
                            <td>WUNTHAKALLU BHARGAVA SANTHOSH KUMAR</td>
                            <td>SCM</td>
                            <td>FUTURE RETAIL</td>
                        </tr>
                        <tr>
                
                            <td>MUKKA SURESH KUMAR REDDY
                            </td>
                            <td>SCM</td>
                            <td>ZOOMCAR</td>
                        </tr>
                        <tr>
                
                            <td>VISHNU VARDHAN B</td>
                            <td>SCM</td>
                            <td>LOTTRUCKS</td>
                        </tr>
                        <tr>
                
                            <td>MADHAVA REDDY GOLLA</td>
                            <td>SCM</td>
                            <td>ZOOMCAR</td>
                        </tr>
                        <tr>

                            <td>SACHIN DCRUZ</td>
                            <td>SCM</td>
                            <td>LOTTRUCKS</td>
                        </tr>
                        <tr>
            
                            <td>BHARATH V</td>
                            <td>HEALTH CARE MGMT</td>
                            <td>RAINBOW CHILD SPECIALITY HOSPITAL</td>
                        </tr>

                            <tr><td>CHIYYAVARAM VASUNDHARA
                            </td>
                            <td>HEALTH CARE MGMT</td>
                            <td>SAKRA WORLD HOSPITAL
                            </td>
                        </tr>
                        <tr>
            
                            <td>MADHU SMITHA</td>
                            <td>HEALTH CARE MGMT</td>
                            <td>SAKRA WORLD HOSPITAL
                            </td>
                        </tr>
                        <tr>

                            <td>SANDRA LAVANYA</td>
                            <td>HEALTH CARE MGMT</td>
                            <td>RAINBOW CHILD SPECIALITY HOSPITAL</td>
                        </tr>
                        <tr>

                            <td>SANNAREDDY BHAVANI</td>
                            <td>HEALTH CARE MGMT</td>
                            <td>SAKRA WORLD HOSPITAL
                            </td>
                        </tr>
                        <tr>
            
                            <td>VAISHNAVI INDUPURU</td>
                            <td>HEALTH CARE MGMT</td>
                            <td>SAKRA WORLD HOSPITAL
                            </td>
                        </tr>
                        <tr>
                    
                            <td>SOLOMON DAVID&nbsp;</td>
                            <td>IT</td>
                            <td>AKASA LABS</td>
                        </tr>
                        <tr>
            
                            <td>SHASHANK SHARMA</td>
                            <td>IT</td>
                            <td>ABSENTIA</td>
                        </tr>
                        <tr>
            
                            <td>SHUBHAM RAWAL</td>
                            <td>IT</td>
                            <td>ABSENTIA</td>
                        </tr>
                        <tr>
                    
                            <td>PRANAV NAUTIYAL</td>
                            <td>IT</td>
                            <td>GETMYUNI</td>
                        </tr>
                        <tr>
            
                            <td>SAMUDRALA PRASANNA KUMAR
                            </td>
                            <td>IT</td>
                            <td>GETMYUNI</td>
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
                        
                            <td>NEHA CHECHANI</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>FLIPKART PHONE PE</td>
                        </tr>
                        <tr>
                        
                            <td>SIMRAN SHIEKH</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>FLIPKART PHONE PE</td>
                        </tr>
                        <tr>
                        
                            <td>ADARSH P</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>DELHIVERY</td>
                        </tr>
                        <tr>
                        
                            <td>ANAND S</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>BAJAJ FINSERV</td>
                        </tr>
                        <tr>
                        
                            <td>BASVARAJ KIRAN PALKI</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>URBAN CLAP</td>
                        </tr>
                        <tr>
                        
                            <td>ABHILASH.G</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>BAJAJ FINSERV</td>
                        </tr>
                        <tr>
                            
                            <td>MD MOIZ</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>CLUB MAHINDRA HOLIDAYS</td>
                        </tr>
                        <tr>
                        
                            <td>M.VINEETH KUMAR</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>BAJAJ FINSERV</td>
                        </tr>
                        <tr>
                        
                            <td>VAISHNAVI U SHRIYAN</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>CINEPOLIS</td>
                        </tr>
                        <tr>
                        
                            <td>HARIPRIYANGA K</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>99 ACRES.COM</td>
                        </tr>
                        <tr>
                        
                            <td>KRISHNA BABU A</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>BAJAJ FINSERV</td>
                        </tr>
                        <tr>
                        
                            <td>R BHARGAVI</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>SISA- INFORMATION &amp; SECURITY</td>
                        </tr>
                        <tr>
                        
                            <td>MOURYA VANDANA</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>CEASEFIRE</td>
                        </tr>
                        <tr>
                            
                            <td>ROHAN V CHANDGADKAR</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>INTELLIPAAT</td>
                        </tr>
                        <tr>
                        
                            <td>SACHIN S APPAJI</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>SUPR DAIRY</td>
                        </tr>
                        <tr>
                        
                            <td>SHASHANK KM</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>CLUB MAHINDRA HOLIDAYS</td>
                        </tr>
                        <tr>
                        
                            <td>TERESA SHIRLEY SURESH</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>INTELLIPAAT</td>
                        </tr>
                        <tr>
                        
                            <td>VINAY BABU</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>NIPPON PAINTS</td>
                        </tr>
                        <tr>
                            
                            <td>VISHAL SINGH</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>LANDMARK GROUP (MAX)</td>
                        </tr>
                        <tr>
                        
                            <td>VENKATA ANIRUDH P</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>CLUB MAHINDRA HOLIDAYS</td>
                        </tr>
                        <tr>
                        
                            <td>K NAVYA</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>SISA- INFORMATION &amp; SECURITY</td>
                        </tr>
                        <tr>
                        
                            <td>LVN SAI CHARAN&nbsp;</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>SISA- INFORMATION &amp; SECURITY</td>
                        </tr>
                        <tr>
                        
                            <td>PUVVADA SUPRIYA</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>BAJAJ FINSERV</td>
                        </tr>
                        <tr>
                        
                            <td>GOUTHAM G</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>BIOCON</td>
                        </tr>
                        <tr>
                    
                            <td>NISHA OJHA</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>CIEL HR</td>
                        </tr>
                        <tr>
                        
                            <td>SUPREETH.D</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>BIOCON</td>
                        </tr>
                        <tr>
                        
                            <td>SUHAS D</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>TOYOTA KIRLOSKAR</td>
                        </tr>
                        <tr>
                        
                            <td>DARSHAN A</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>TOYOTA KIRLOSKAR</td>
                        </tr>
                        <tr>
                        
                            <td>DIVYASHREE KU</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>SISA- INFORMATION &amp; SECURITY</td>
                        </tr>
                        <tr>
                            
                            <td>SAMRAIN MIDHAT KHAN</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>L&amp;T INFOTECH</td>
                        </tr>
                        <tr>
                        
                            <td>PUSPALATA SHARMA</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>INTELLIPAAT</td>
                        </tr>
                        <tr>
                        
                            <td>VAMSI RAM. V</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>TESCRA</td>
                        </tr>
                        <tr>
                    
                            <td>VARSHINI R</td>
                            <td>HUMAN RESOURCE MANAGEMENT</td>
                            <td>L&amp;T INFOTECH</td>
                        </tr>
                        <tr>
                        
                            <td>DEEPAK BK</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>LANDMARK GROUP (MAX)</td>
                        </tr>
                        <tr>
                        
                            <td>JAGDEESH R</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>LANDMARK GROUP (MAX)</td>
                        </tr>
                        <tr>
                        
                            <td>KOPPANA RAJESH</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>ZOOMCAR</td>
                        </tr>
                        <tr>
                    
                            <td>SRINVAS T</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>LANDMARK GROUP (MAX)</td>
                        </tr>
                        <tr>
                        
                            <td>LINGANANDA M</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>ZOOMCAR</td>
                        </tr>
                        <tr>
                    
                            <td>PRIYANKA SINGH</td>
                            <td>FINANCIAL MANAGEMENT</td>
                            <td>ZOOMCAR</td>
                        </tr>
                        <tr>
                
                            <td>SRIKANTH</td>
                            <td>MARKETING MANAGEMENT</td>
                            <td>BAJAJ FINSERV</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

const InternshipRecordTable = () => {

    const [pagedDivInstance, setPagedDivInstance] = useState<PagedDiv | null>(null);

    useEffect( () => {
        let _pagedDivInstance = new PagedDiv({_name: ".internship-record-table-slides", initialPos: 0, _fitToChild: true, fitWidthToParent: true});
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
        let activeElem = document.querySelector(".internship-record-table-buttons .active");
        if (!activeElem) return;
        activeElem.classList.remove("active");
        let targetElem = event.target as HTMLButtonElement;
        targetElem.classList.add("active");
        pagedDivInstance.goto(index);
    }, [pagedDivInstance])

    return (
        <>
            <div className={"internship-record-table"}>
                <div className={"internship-record-table-buttons"}>
                    <button className={"button bg-deep-orange-600  active"} onClick={(e) => gotoPage(e, 0)}>Internship Record 2017-19 Batch</button>
                    <button className={"button bg-deep-orange-600"} onClick={(e) => gotoPage(e, 1)}>Internship Record 2018-20 Batch</button>
                </div>
                <div className={"paged internship-record-table-slides"}>
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


const InternshipRecords = () => {
    return (
        <>
            <Helmet>
                <title>Internship Records - AIMS IBS</title>
                <meta name="description" content="Internship Records"/>
            </Helmet>
            <PageLocation img={CommonInternshipMotors} locations={["HOME", "INTERNSHIP RECORDS"]} title={"INTERNSHIP RECORDS"}/>
            <div className={"internship-records"}>
                <InternshipRecordTable />
            </div>
        </>
    )
}

export default InternshipRecords;