import ZobrazitSeznamButton from './ZobrazitSeznamButton';
import SmazatSeznamButton from './SmazatSeznamButton';

import "./seznam.css"
const Seznam = (props) => {
  return (
    <div id="seznam">
      <h2 className="main-heading">{props.mytitle}</h2>
      <div className="d-flex justify-content-center">
        <ZobrazitSeznamButton onClick={props.onSeznamClick} />
      </div>
      <div className="d-flex justify-content-center">
        <SmazatSeznamButton />
      </div>
    </div>
  )
}

export default Seznam;
