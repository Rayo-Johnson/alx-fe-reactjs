import { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm.jsx';

function App() {
  const [currentForm, setCurrentForm] = useState('controlled');

  return (
    <div>
      {/* Form Switcher */}
      <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg p-3">
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentForm('controlled')}
            className={`px-4 py-2 rounded font-bold transition-colors ${
              currentForm === 'controlled'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Controlled Components
          </button>
          <button
            onClick={() => setCurrentForm('formik')}
            className={`px-4 py-2 rounded font-bold transition-colors ${
              currentForm === 'formik'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Formik
          </button>
        </div>
      </div>

      {/* Render selected form */}
      {currentForm === 'controlled' ? <RegistrationForm /> : <FormikForm />}
    </div>
  );
}

export default App;
