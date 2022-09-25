import React from 'react'
import Buttons from './Buttons'
import histogramIcon from '../assets/svg/histogramIcon.svg'
import horlogeIcon from '../assets/svg/horlogeIcon.svg'
import parameterIcon from '../assets/svg/parameterIcon.svg'
import loupe from '../assets/svg/loupeIcon.svg'
import arrowIcon from '../assets/svg/arrowIcon.svg'
import refreshIcon from '../assets/svg/refreshIcon.svg'
import dashboardIcon from '../assets/svg/dashboardIcon.svg'

export default function Header() {
    const histogram = <img src={histogramIcon} alt='histogram icon' />;
    const arrow = <img src={arrowIcon} alt='histogram icon' className='px-0'/>;
  return (
    <header>
              <nav className="navbar navbar-expand-lg shadow-md  relative flex items-center w-full justify-between">
                  <div className="px-1 py-3  w-full flex flex-wrap items-center justify-between">
                     <div className="absolute left-0 flex flex-wrap items-center justify-between">
                        <img src={dashboardIcon} alt='histogram icon' class="px-[0.025rem]" /> <h5 class="text-sm font-medium text-gray-200 "> Dashboard/[Cameroun/Douala/Laquintinie/001]</h5>
                     </div>
                    
                     <div className="absolute right-0 flex flex-wrap items-center justify-between">                       
                        <Buttons  padding="py-[0.2rem] px-2 mx-[0.05rem]"  radius="rounded-sm">
                            {histogram} 
                        </Buttons>
                        <Buttons padding="py-[0.4rem] px-2 mx-2" radius="rounded-sm">
                            <img src={parameterIcon} alt='histogram icon' />
                        </Buttons>
                        <div class="flex flex-wrap items-center" role="group">
                            <Buttons padding="py-1 px-2" radius="rounded-l-sm" text="Derniers 6 heures " utc=" UTC"  icon={arrow} color="text-[#eb7b18]">
                                <img src={horlogeIcon} alt='histogram icon' className='px-1'/>                               
                            </Buttons>
                            <Buttons padding="py-1 px-2" radius="rounded-r-sm">
                                <img src={loupe} alt='histogram icon' class="py-0.5"/>
                            </Buttons>
                        </div>
                        <div class="flex flex-wrap items-center mx-2" role="group">
                            <Buttons padding="py-1 px-2" radius="rounded-l-sm" >
                                <img src={refreshIcon} alt='histogram icon' class="py-0.5"/>                              
                            </Buttons>
                            <Buttons padding="py-1 px-1" radius="rounded-r-sm">
                                <img src={arrowIcon} alt='histogram icon' />
                            </Buttons>
                        </div>
                        <Buttons padding="py-[0.35rem] px-2 mx-1" radius="rounded-sm">
                            <img src={horlogeIcon} alt='histogram icon' />
                        </Buttons>                      
                     </div>
                  </div>
              </nav>
    </header>
  )
}
