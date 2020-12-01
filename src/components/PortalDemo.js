import { createPortal } from 'react-dom';
import RegularComponent from './RegularComponent';

const PortalDemo = () => {

    return createPortal(
        <RegularComponent />, document.getElementById('portal-root')
    );
};

export default PortalDemo;