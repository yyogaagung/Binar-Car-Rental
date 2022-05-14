import { Fragment } from 'react';
import './FooterComp.css';


function InfoFooter(props) {
    return (
        <Fragment>
            <ul className={props.class}>
                <li>{props.text1}</li>
                <li>{props.text2}</li>
                <li>{props.text3}</li>
                <li>{props.text4}</li>
            </ul>  
        </Fragment>
    );
}

export default InfoFooter;