import React from 'react'
import { Oval } from "react-loader-spinner";

const Loader = ({h = 80, w = 80}) => {
  return (
    //You can pass the size you need(on pixels)
    <div className="w-full h-screen pt-36">
      <Oval
        height={h}
        width={w}
        color="black"
        wrapperStyle={{}}
        wrapperClass='justify-center'
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="gray"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </div>
  )
}

export default Loader