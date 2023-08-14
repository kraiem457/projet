import { useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useFormik } from 'formik';
import * as  Yup from 'yup';

const validationSchema = Yup.object().shape({
  name:Yup.string()
  .max(10, 'Le nom  ne peut pas  dépasser 10 caractères')
  .matches(/\s/, 'Le mot de passe doit contenir au moins un espace')
  .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/, 'Le mot de passe doit contenir à la fois des lettres, des chiffres et au moins un caractère spécial')

  .required('Champ requis'),

  email: Yup.string().email('Adresse e-mail invalide').required('Champ requis'),
  password: Yup.string().required('Champ requis') 
  .matches(/\s/, 'Le mot de passe doit contenir au moins un espace')
  .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/, 'Le mot de passe doit contenir à la fois des lettres, des chiffres et au moins un caractère spécial'),

  repeat: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Les mots de passe doivent correspondre')
    .required('Champ requis'),

});

const Signup = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);
      const { name, email, password } = values;
      const res = await fetch('http://localhost:3000/api/Signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const res2 = await res.json();
      if (res2.error) {
        toast.error(res2.error);

      } else {
       
        router.push('/');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('Une erreur est survenue lors de la soumission du formulaire.');
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" />

      <div className="container">
        <br />
        <hr />

        <div className="card bg-light">
          <article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
            <h4 className="card-title mt-3 text-center">Create Account</h4>

            <form onSubmit={formik.handleSubmit}>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <input
                  name="name"
                  className="form-control"
                  placeholder="Full name"
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.name && formik.errors.name && (
                <div className="text-danger">{formik.errors.name}</div>
              )}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-envelope"></i>
                  </span>
                </div>
                <input
                  name="email"
                  className="form-control"
                  placeholder="Email address"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            
              {formik.touched.email && formik.errors.email && (
  <div className="text-danger">{formik.errors.email}</div>
              )}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  name="password"
                  className="form-control"
                  placeholder="Create password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className="text-danger">{formik.errors.password}</div>
              )}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>

                <input
              name="repeat"
             className="form-control"
    placeholder="Repeat password"
  type="password"
  value={formik.values.repeat}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
/>
{formik.touched.repeat && formik.errors.repeat && (
  <div  className="text-danger">{formik.errors.repeat}</div>
)}
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block" disabled={isLoading}>
                  {isLoading ? 'Loading...' : 'Create Account'}
                </button>
              </div>
              <p className="text-center">
                Have an  account? <a href="/">Log In</a>
              </p>
              <ToastContainer  />
            </form>
          </article>
        </div>
      </div>

      <br />
      <br />
    </>
  );
};

export default  Signup;