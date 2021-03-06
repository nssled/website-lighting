const express = require('express');
const navController = require('../controllers/navController');
const productController = require('../controllers/productController');
const projectController = require('../controllers/projectController');
const certificateController = require('../controllers/certificateController');
const newsController = require('../controllers/newsController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const { catchErrors } = require('../handlers/errorHandlers');

const router = express.Router();

// home
router.get('/', navController.home);
router.get('/home', catchErrors(navController.home));

// about us
router.get('/about-us', navController.aboutUs);

// products
router.get(
  '/add-product',
  authController.isLoggedIn,
  productController.addProduct
);
router.post(
  '/add-product',
  productController.multer,
  catchErrors(productController.save),
  catchErrors(productController.createProduct)
);
router.get('/products', catchErrors(productController.getProductsByType));
router.get('/products/:type', catchErrors(productController.getProductsByType));
router.get('/product/:slug', catchErrors(productController.getProductBySlug));
router.get('/download/:brochure', productController.downloadBrochure);
router.get('/products/:id/edit', catchErrors(productController.editProduct));
router.post(
  '/add-product/:id',
  productController.multer,
  catchErrors(productController.save),
  catchErrors(productController.updateProduct)
);

// projects
router.get(
  '/add-project',
  authController.isLoggedIn,
  projectController.addProject
);
router.post(
  '/add-project',
  projectController.multer,
  catchErrors(projectController.save),
  catchErrors(projectController.createProject)
);
router.get('/projects', catchErrors(projectController.getProjectsByType));
router.get('/projects/:type', catchErrors(projectController.getProjectsByType));
router.get('/projects/:id/edit', catchErrors(projectController.editProject));
router.post(
  '/add-project/:id',
  projectController.multer,
  catchErrors(projectController.save),
  catchErrors(projectController.updateProject)
);

// news
router.get('/add-news', authController.isLoggedIn, newsController.addNews);
router.post('/add-news', newsController.createNews);
router.get('/news', catchErrors(newsController.getNewsByType));
router.get('/news/:type', catchErrors(newsController.getNewsByType));
router.get('/news/:type/:slug', catchErrors(newsController.getNewsBySlug));

// support
router.get('/support/payment', navController.payment);
router.get('/support/team', navController.team);
router.get('/support/certificates', certificateController.getCertificates);
router.get(
  '/add-certificate',
  authController.isLoggedIn,
  certificateController.addCertificate
);
router.post(
  '/add-certificate',
  certificateController.multer,
  catchErrors(certificateController.save),
  catchErrors(certificateController.createCertificate)
);
router.get(
  '/certificates/:id/edit',
  catchErrors(certificateController.editCertificate)
);
router.post(
  '/add-certificate/:id',
  certificateController.multer,
  catchErrors(certificateController.save),
  catchErrors(certificateController.updateCertificate)
);

// contact
router.get('/contact', navController.contact);

// query
router.post(
  '/query',
  catchErrors(navController.queryValidate),
  catchErrors(navController.query)
);

// user
// router.get('/register', userController.registerForm);
// router.post(
//   '/register',
//   userController.validateRegister, // 1. Validate the registration data
//   catchErrors(userController.register), // 2. Register the user
//   authController.login // 3. Log them in
// );
router.get('/login', userController.loginForm);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
// router.get('/account', userController.account);
// router.post('/account', catchErrors(userController.updateAccount));
// router.post('/account/forgot', catchErrors(authController.forgot));
// router.get('/account/reset/:token', catchErrors(authController.reset));
// router.post(
//   '/account/reset/:token',
//   authController.confirmPasswords,
//   catchErrors(authController.update)
// );

/*
  API
*/
router.get('/api/get/news', catchErrors(newsController.renderNews));

module.exports = router;
