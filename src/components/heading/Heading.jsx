import React from 'react'


const Heading = ({ mainHeading, subHeading }) => (
  <div className='text-2xl mb-2 text-white'>{mainHeading} <span className='text-teal-400 font-medium'>{subHeading}</span></div>
)

export default Heading;