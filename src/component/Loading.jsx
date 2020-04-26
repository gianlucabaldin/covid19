import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Loading = ({ loading = true }) => (
  <ClipLoader
    // css={override}
    color="#303f9f"
    loading={loading}
    size={40}
    // style={{ display: 'block', margin: '0 auto', height: 30, width: 30 }}
  />
);

export default Loading;
