import React from 'react';

const Connection = () => {
    return (
        <div className='mt-5 mb-5'>
        <div className="hero lg:w-[98%] mx-auto">
          <div className="hero-content flex-col lg:gap-16 lg:flex-row-reverse bg-[#FFFFFF]  rounded-lg shadow-lg lg:px-20">
        
          <img

          style={{width:"490px",borderRadius:"10px"}}
              src="https://i.ibb.co/d6mLQsg/download.jpg"
              className=" w-full"
            />

            <div>
              <p className=" mb-3">Join With US</p>
              <h1 className="lg:text-5xl text-xl font-semibold text-[#0D0D0D] mb-7">
                Start sharing another delicious recipe.
              </h1>
  
              <button style={{backgroundColor:"#FFB01F"}} className="btn-main p-2 rounded font-bold text-white">Join Now</button>
            </div>

            
          </div>
        </div>
      </div>
    );
};

export default Connection;