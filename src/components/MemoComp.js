import { memo } from 'react'

const MemoComp = ({name}) => {
    console.log('Memo Component');
    return <div>Memo component {name}</div>;
};

export default memo(MemoComp);