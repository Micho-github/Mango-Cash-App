import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function SignUpAlert(props) {

  function cancelHandler() {
    props.onCancel();
  }

  return (
    <div className="signup-alert-container">
      <div className="signup-alert-overlay"></div>
      <div className="signup-alert-content">
        <div className="signup-alert-message">
          {props.type ? (
            <>
              {/* Success message */}
              <div className="signup-alert-icon">
                <CheckCircleIcon color='lightgreen' className="h-6 w-6 text-red-600" aria-hidden="true" />
              </div>
              <div className="signup-alert-text">
                <h3>Signup Status</h3>
                <p>Account Created Successfully!</p>
              </div>
            </>
          ) : (
            <>
              {/* Error message */}
              <div className="signup-alert-icon">
                <ExclamationTriangleIcon color='red' className="h-6 w-6 text-red-600" aria-hidden="true" />
              </div>
              <div className="signup-alert-text">
                <h3>Signup Status</h3>
                <p>Email Already Exists!</p>
              </div>
            </>
          )}
        </div>
        <div className="signup-alert-buttons">
          {props.type ? (
            <Link to="/login">
              <button className="signup-alert-button">OK</button>
            </Link>
          ) : (
            <button className="signup-alert-button" onClick={cancelHandler}>
              OK
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
