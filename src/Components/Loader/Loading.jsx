import React from 'react';
import './loading.css';
import { Triangle} from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="Loader">
      <div className="LoaderContent">
      <Triangle
  visible={true}
  height="90"
  width="90"
  color="#05446E"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
/>


      </div>
    </div>
  );
}

export default Loading;
