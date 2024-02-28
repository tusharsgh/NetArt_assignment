
import './App.css';
import { FaFacebook } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";

function App() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-[#F5F5F2] to-[#F4F5AC] via-[#F4F5D7]">
     <div className="flex mmd:p-5">
      <div className="flex flex-1 basis-[40%] self-center ">

      <img src={require('./images/1.png') } className="max-w-[90%] max-h-[60%] md:h-[100%] md:w-[100%]"/>
      </div>
     
      <div className="flex flex-col gap-3 flex-wrap flex-1 basis-[60%] ">
      <img src={require('./images/logo.png')} className="max-w-[50%] max-h-[50%] md:max-w-[90%] md:max-h-[90%]"/>
      <div className="font-[600] md:text-[15px]">C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</div>
  <div className='p-3 '>
  <li className="md:text-[13px]">C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
  <li className="md:text-[13px]">C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
  </div>

     <img src={require('./images/2.png')} className="max-w-[100%] max-h-[100%] "/>
     <div className="md:text-[13px]">
	Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</div>
      </div>
      
      
     </div>
     <div className="flex flex-col p-5 gap-2">
    
      <div className="md:text-[14px]">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </div>
       
       <div className="flex flex-col items-center gap-4">
       <img src={require("./images/3.png")}className='w-[80%]'/>
       <div className="md:text-[14px]">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 
C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
</div>
       </div>
       <div className="border-b-[2.33px] border-[#9b422c] border-opacity-40 w-full"></div>
       <div className="flex flex-col items-center flex-wrap md:gap-2">
      <div className="font-[700] text-center ">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</div>
      <div className="text-center">CHEMICALS & PROCESS|POWER WATER & WASTE WATER|OILS & GAS PHARMA| SUGARS & DISTILLERIES|PAPER & PULP|MARINE & DEFENCE|METAL & MINING|FOOD & BEVERAGE|PETROCHEMICAL & REFINERIES|SOLAR|BUILDING HVAC|FIRE FIGHTING|AGRICULTURE & RESIDENTIAL</div>
       </div>
      </div>
      <div className=" bg-red-600 flex items-center justify-around pt-8 pb-10 flex-wrap md:gap-4">
      <div className="flex items-center gap-1 ">
      <FaPhoneSquareAlt color="white" size="1.6rem" />
     <div className="text-white">Toll free <b>1800 200 1234</b></div>
      </div>
      <div className="flex items-center gap-1">
      <FaFacebook color="white"size="1.6rem"/>
     <a className="text-white" href="https://www.facebook.com/cripumps">www.facebook.com/cripumps</a>
      </div>
      
      <div className="flex items-center gap-1">
      < FaGlobe color="white"size="1.6rem"/>
     <a className="text-white" href="https://www.crigroups.com">https://www.crigroups.coms</a>
      </div>
      </div>
    </div>
  );
}

export default App;
