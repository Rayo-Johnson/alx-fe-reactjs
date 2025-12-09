import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters'),
  email: Yup.string().required
    .email('Email is invalid')
    .required('Email is required'),
  password: Yup.string().required
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
});

const FormikForm = () => {
  // Initial form values
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  // Handle form submission
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted with Formik:', values);
      alert('Registration successful with Formik!');
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          User Registration
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Formik Approach
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="space-y-6">
              {/* Username Field */}
              <div>
                <label 
                  htmlFor="username" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Username
                </label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.username && touched.username
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-purple-500'
                  }`}
                />
                <ErrorMessage 
                  name="username" 
                  component="p" 
                  className="mt-1 text-sm text-red-600" 
                />
              </div>

              {/* Email Field */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.email && touched.email
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-purple-500'
                  }`}
                />
                <ErrorMessage 
                  name="email" 
                  component="p" 
                  className="mt-1 text-sm text-red-600" 
                />
              </div>

              {/* Password Field */}
              <div>
                <label 
                  htmlFor="password" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.password && touched.password
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-purple-500'
                  }`}
                />
                <ErrorMessage 
                  name="password" 
                  component="p" 
                  className="mt-1 text-sm text-red-600" 
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-bold py-3 px-4 rounded-lg transition-colors duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-purple-600 hover:bg-purple-700 text-white'
                }`}
              >
                {isSubmitting ? 'Registering...' : 'Register'}
              </button>
            </Form>
          )}
        </Formik>

        {/* Info Box */}
        <div className="mt-6 p-4 bg-purple-50 rounded-lg">
          <p className="text-sm text-purple-800">
            <strong>✨ Formik Benefits:</strong>
          </p>
          <ul className="text-sm text-purple-700 mt-2 space-y-1">
            <li>• Built-in state management</li>
            <li>• Yup validation schema</li>
            <li>• Less boilerplate code</li>
            <li>• Easy error handling</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FormikForm;
