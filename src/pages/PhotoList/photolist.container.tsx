import React from 'react';

import useFetch from 'hooks/useFetch';

function PhotoList() {
  const { response, error }: any = useFetch(URL);

  if (error) {
    console.log(error);
  }

  return (
    <>
      <div>
        {response &&
          response.map((ele: any, idx: number) => (
            <img key={idx} src={ele.thumbnailUrl} />
          ))}
      </div>
    </>
  );
}

const URL = 'https://jsonplaceholder.typicode.com/users/1/photos';

export default PhotoList;
