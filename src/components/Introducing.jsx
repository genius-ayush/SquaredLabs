import React from 'react'

function Introducing() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 p-52">
        <div className="col-span-2 row-span-2 bg-[#171717] rounded-lg h-[800px] border-[0.01px] border-gray-600">Box 1</div>
        <div className="col-span-2 bg-[#171717] rounded-lg border-[0.01px] border-gray-600">Box 2</div>
        <div className="col-span-2 bg-[#171717] rounded-lg border-[0.01px] border-gray-600">Box 3</div>
        <div className="col-span-4 bg-[#171717] rounded-lg h-[400px] border-[0.01px] border-gray-600">Box 4</div>
      </div>
    </div>
  )
}

export default Introducing