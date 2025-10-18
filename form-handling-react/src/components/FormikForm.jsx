import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    console.log("Submitting form with:", values);
    alert("User registered successfully!");
    resetForm();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            Formik Registration
          </h2>

          {/* Username */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Username</label>
            <Field
              name="username"
              type="text"
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 border-gray-300"
              placeholder="Enter username"
            />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Email</label>
            <Field
              name="email"
              type="email"
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 border-gray-300"
              placeholder="Enter email"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block font-medium mb-2">Password</label>
            <Field
              name="password"
              type="password"
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 border-gray-300"
              placeholder="Enter password"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
