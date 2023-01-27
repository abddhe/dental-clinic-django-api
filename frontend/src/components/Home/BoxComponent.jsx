import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Styles/box.css'

const BoxComponent = ({fontIcon,title,styleBootstrap}) =>{
    return(
        <div className="box col">
            <div className={`bg-${styleBootstrap || 'info'} box-icon`}>
                <FontAwesomeIcon icon={fontIcon} />
            </div>
            <div className="box-body">
                <div className="box-title">{title}</div>
                <p>2</p>
            </div>
        </div>
    );
}


export default BoxComponent;