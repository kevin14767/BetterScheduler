// components/dashboard/popup.tsx
interface PopupProps {
    onClose: () => void;
    onConfirm: () => void;
  }
  
  export const Popup = ({ onClose, onConfirm }: PopupProps) => {
    return (
      <>
        <div 
          className="fixed inset-0 z-40"
          onClick={onClose} 
        />
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-50 w-200 h-96 justify-center">
          <h3 className="text-lg font-semibold mb-4 text-center">Select times and Employees for that Shift</h3>
          <p className="mb-6 text-center">Make sure it is in between Store Hours and Confirm</p>
          <div className="grid grid-cols-2 gap-4 text-center ml-20 mr-20 mb-10">
            {/* Times */}
            <div className='flex justify-center space-x-2' >
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
            <div>
                <input
                  type="number"
                  className={`border rounded px-2 py-1 w-14 ml-10 items-center`}
                  placeholder="0"
                />
            </div>
          </div>
          <div className='mb-5'>
            <button 
              className="px-4 py-1 rounded hover: bg-white ml-2"
            >
              <i className="text-gray"> Add More Times + </i>
            </button>
          </div>
          <div>
            <button 
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 ml-20"
              >
                Cancel
              </button>
              <button 
                onClick={onConfirm}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ml-20"
              > 
                Confirm
            </button>
          </div>
        </div>
      </>
    );
  };