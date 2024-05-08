import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function HomeAlert(props) {

  function cancelHandler() {
    props.onCancel();
  }

  return (
    <div className="signup-alert-container">
      <div className="signup-alert-overlay"></div>
      <div className="signup-alert-content">
        <div className="signup-alert-message">
              <div className="signup-alert-icon">
                <ExclamationTriangleIcon color='orange' className="h-6 w-6 text-red-600" aria-hidden="true" />
              </div>
              <div className="signup-alert-text">
                <h3>User not found!</h3>
                <p>Please Proceed to Login page...</p>
              </div>
        </div>
        <div className="signup-alert-buttons">
            <Link to="/login">
              <button className="signup-alert-button">OK</button>
            </Link>
        </div>
      </div>
    </div>
  );
}
