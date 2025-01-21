//(main dashboard overview)
// src/app/(dashboard)/employer/page.tsx
'use client' //added by Luis
import { useState } from 'react';
import Checkbox from '@/components/dashboard/checkbox_State'; //added by Luis
import { Popup } from '@/components/dashboard/popup';

/* import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Employer Dashboard',
  description: 'Manage your business schedules and employees',
}
*/


/*Creates an object type that only allows these values Sun-Sat as strings*/
type DayOfWeek = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';

/* Creates a fuction that sets the sattes of the checkboxes as false and is used as a dictionary*/
export default function EmployerDashboard() {
  const [dayStates, setDayStates] = useState({
    Sunday: false,
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false
  });

  /*Updates the states of the days when the checkbox is clicked*/
  const handleCheckboxChange = (day: string, isChecked: boolean) => {
    setDayStates(prev => ({
      ...prev,
      [day]: isChecked
    }));
    console.log(`${day} is checked:`, isChecked);
  };
  /*Creates an array of the days of the week so we can use the functions*/
  const days: DayOfWeek[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


/*PopUp Checkbox Code*/
const [isChecked, setIsChecked] = useState(true);
const [showPopup, setShowPopup] = useState(false);

const handleCheckboxChangePopup = (checked: boolean) => {
  if (!checked) {
    setShowPopup(true);
    console.log(`Not checked and Popup is up!:`, isChecked);
  } else {
    setIsChecked(true);
  }
};

const handleClosePopup = () => {
  setShowPopup(false);
  setIsChecked(true);
};

const handleConfirmPopup = () => {
  setShowPopup(false);
  setIsChecked(false);
};

  return (
    <div className="flex h-screen bg-gray-50">
      <main className="flex-1 overflow-y-auto p-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold">Schedule Management</h1>
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              {/* Schedule Form Section */}
              <div className="mb-6">
                <h2 className="text-xl font-medium mb-4">Schedule 1</h2>
                <div className="space-y-4">
                  {/* Days of Week Grid */}
                  <div className="grid grid-cols-4 gap-4 mb-4 items-center">
                    <div className="font-medium">Days</div>
                    <div className="font-medium">Business Hours</div>
                    <div className="font-medium">Employees Per Shift</div>
                    <div className="font-medium">All Day?</div>
                  </div>

                  {/* Example Day Row */}
                  {days.map((day) => (

                  <div className="grid grid-cols-4 gap-4 items-center" key={day}>
                    <div className="flex items-center space-x-2">
                      {/*New CheckBoxwithState component*/}
                      <Checkbox onChange={(checked) => handleCheckboxChange(day, checked)} />
                      {/*<input type="checkbox" className="rounded" />*/}
                      <span>{day}</span>
                    </div>
                    {/*Business Hour Employer Time Selection*/}
                    {/*Makes the heading unclickable if checkbox is not clicked */}
                    <div className={`flex items-center space-x-2  ml-2 ${!dayStates[day] ? 'line-through opacity-50 pointer-events-none' : ''}`}>
                      <input
                        type="time"
                        className="border rounded px-2 py-1"
                        placeholder="Open"
                        defaultValue="08:00"
                      />
                      <span>to</span>
                      <input
                        type="time"
                        className="border rounded px-2 py-1"
                        placeholder="Close"
                        defaultValue="22:00"
                      />
                    </div>
                    {/*Employer Employee Number Selection per shift*/}
                    <div className='ml-5'>
                      <input
                        type="number"
                        className={`border rounded px-2 py-1 w-14 ml-10 ${!dayStates[day] ? 'line-through opacity-50 pointer-events-none' : ''}`}
                        placeholder="0"
                      />
                    </div>
                    {/*Employer Number of shifts section*/}
                    <div>
                      <Checkbox 
              
                          initialState = {true}
                          onChange={handleCheckboxChangePopup}
                          input_className =  {`rounded ${!dayStates[day] ? 'line-through opacity-50 pointer-events-none' : ''}`}
                      />
                       {showPopup && (
                        <Popup 
                          onClose={handleClosePopup}
                          onConfirm={handleConfirmPopup}
                        />
                      )}
                      {/*<input type="checkbox" className={`rounded ${!dayStates[day] ? 'line-through opacity-50 pointer-events-none' : ''}`} 
                      defaultChecked={true}*/}
                    
                    </div>
                  </div>
                  ))}
                  </div>
              </div>

              {/* Generate Schedule Button */}
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
                GENERATE SCHEDULE
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
