import React from 'react';
import './loading.css';
import { Audio, DNA } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="Loader">
      <div className="LoaderContent">
        <DNA
          height="80"
          width="80"
          radius="9"
          color="#05446E"
          ariaLabel="loading"
        />
      </div>
    </div>
  );
}

export default Loading;
