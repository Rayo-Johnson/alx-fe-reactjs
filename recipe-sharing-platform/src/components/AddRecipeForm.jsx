import { useState } from 'react';

const AddRecipeForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: ''
  });

  // Validation errors state
  const [errors, setErrors] = useState({});

  // Submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle input changes - UPDATED to use e.target.value directly
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[e.target.name]) {
      setErrors(prev => ({
        ...prev,
        [e.target.name]: ''
      }));
    }
  };

  // Validate form
  const validate = () => {
    const newErrors = {};

    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required';
    } else if (formData.title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters long';
    }

    // Ingredients validation
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else {
      const ingredientsList = formData.ingredients.split('\n').filter(item => item.trim());
      if (ingredientsList.length < 2) {
        newErrors.ingredients = 'Please enter at least 2 ingredients (one per line)';
      }
    }

    // Steps validation
    if (!formData.steps.trim()) {
      newErrors.steps = 'Preparation steps are required';
    } else if (formData.steps.trim().length < 10) {
      newErrors.steps = 'Please provide more detailed preparation steps';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        console.log('Recipe submitted:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);

        // Reset form
        setFormData({
          title: '',
          ingredients: '',
          steps: ''
        });

        // Hide success message after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-orange-100 rounded-full mb-4">
            <span className="text-5xl">🍳</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
            Add Your Recipe
          </h1>
          <p className="text-lg text-gray-600">
            Share your culinary creation with the community!
          </p>
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <div className="mb-6 bg-green-500 text-white p-4 rounded-lg shadow-lg flex items-center gap-3 animate-bounce">
            <span className="text-2xl">✅</span>
            <div>
              <p className="font-bold">Recipe Added Successfully!</p>
              <p className="text-sm">Your recipe has been shared with the community.</p>
            </div>
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Recipe Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-bold text-gray-700 mb-2">
                Recipe Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Grandma's Chocolate Chip Cookies"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                  errors.title 
                    ? 'border-red-500 focus:border-red-600' 
                    : 'border-gray-300 focus:border-orange-500'
                }`}
              />
              {errors.title && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <span>⚠️</span> {errors.title}
                </p>
              )}
            </div>

            {/* Ingredients */}
            <div>
              <label htmlFor="ingredients" className="block text-sm font-bold text-gray-700 mb-2">
                Ingredients <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-500 mb-2">
                Enter each ingredient on a new line (minimum 2 ingredients)
              </p>
              <textarea
                id="ingredients"
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                rows="6"
                placeholder="2 cups all-purpose flour&#10;1 cup butter&#10;1 cup sugar&#10;2 eggs&#10;1 tsp vanilla extract"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors resize-y ${
                  errors.ingredients 
                    ? 'border-red-500 focus:border-red-600' 
                    : 'border-gray-300 focus:border-orange-500'
                }`}
              />
              {errors.ingredients && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <span>⚠️</span> {errors.ingredients}
                </p>
              )}
              {formData.ingredients && !errors.ingredients && (
                <p className="mt-2 text-sm text-green-600 flex items-center gap-1">
                  <span>✅</span> {formData.ingredients.split('\n').filter(i => i.trim()).length} ingredients added
                </p>
              )}
            </div>

            {/* Preparation Steps */}
            <div>
              <label htmlFor="steps" className="block text-sm font-bold text-gray-700 mb-2">
                Preparation Steps <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-500 mb-2">
                Describe the preparation process in detail
              </p>
              <textarea
                id="steps"
                name="steps"
                value={formData.steps}
                onChange={handleChange}
                rows="8"
                placeholder="1. Preheat the oven to 350°F&#10;2. In a large bowl, cream together butter and sugar&#10;3. Beat in eggs one at a time&#10;4. Stir in vanilla extract&#10;5. Combine flour and baking soda, then stir into the creamed mixture&#10;6. Drop rounded spoonfuls onto cookie sheets&#10;7. Bake for 10-12 minutes until golden brown"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors resize-y ${
                  errors.steps 
                    ? 'border-red-500 focus:border-red-600' 
                    : 'border-gray-300 focus:border-orange-500'
                }`}
              />
              {errors.steps && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <span>⚠️</span> {errors.steps}
                </p>
              )}
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">⏳</span>
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <span>✨</span>
                    Submit Recipe
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setFormData({ title: '', ingredients: '', steps: '' });
                  setErrors({});
                }}
                className="flex-1 sm:flex-none bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Clear Form
              </button>
            </div>
          </form>

          {/* Helper Tips */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              💡 Tips for a Great Recipe
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <span className="text-lg">📝</span>
                <p>Use a clear, descriptive title that tells what the dish is</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-lg">📏</span>
                <p>Include specific measurements for all ingredients</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-lg">🔢</span>
                <p>Number your steps for easy following</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-lg">⏱️</span>
                <p>Include cooking times and temperatures</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeForm;
