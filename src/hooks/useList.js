import { useState } from 'react';

const useList = (initialValue = []) => {

    const [value, setValue] = useState(initialValue);

};

export default useList;