const express = require("express"); // require express module
const app = express(); // calls express function to start new Express app
const ejs = require("ejs");
const mongoose = require("mongoose");
const expressSession = require("express-session");
const flash = require("connect-flash");

const g2data = require("./models/G2PersonalInfo");

const signupauthcontroller = require("./controllers/signupauth");
const validationMiddleware = require("./middleware/validationmiddleware");
const g2postcontroller = require("./controllers/g2_post");
const loginauthController = require("./controllers/loginauth");
const authMiddleware = require("./middleware/authmiddleware");
const adminMiddleware = require("./middleware/adminmiddleware");
const examinerMiddleware = require("./middleware/examinermiddleware");
const examimerpageController = require("./controllers/examiner");
const gpageController = require("./controllers/g_page");
const dashboardController = require("./controllers/dashboard");
const loginController = require("./controllers/login");
const g2pageController = require("./controllers/g2_page");
const updateinfoController = require("./controllers/updateinfo");
const signupController = require("./controllers/signup");
const redirectIfAuthenticatedMiddleware = require("./middleware/redirectIfAuthenticatedMiddleware");
const logoutController = require("./controllers/logout");
const appointmentController = require("./controllers/appointment");
const saveaptController = require("./controllers/saveAppointment");
const checkdateController = require("./controllers/availabledate");
const g2dateController = require("./controllers/g2_datebook");
const examimerreportController = require("./controllers/examinerreport");

mongoose.connect(
  "mongodb+srv://gauravrana1998:Qwerty%4012@cluster0.6x17dm2.mongodb.net/",
  { useNewUrlParser: true }
);

app.listen(3000, () => {
  console.log("App listening on port 3000");
});

const path = require("path");
const authmiddleware = require("./middleware/authmiddleware");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());
app.use(flash());
app.use(
  expressSession({
    secret: "keyboard cat",
  })
);

global.loggedIn = null;
global.userType = null;
app.use("*", (req, res, next) => {
  loggedIn = req.session.userId;
  userType = req.session.userType;
  next();
});

app.set("view engine", "ejs");

app.get("/", dashboardController);

app.get("/dashboard", dashboardController);

app.get("/login", redirectIfAuthenticatedMiddleware, loginController);

app.get("/g_page", authMiddleware, gpageController);

app.get("/g2_page", authMiddleware, g2pageController);

app.get("/appointment", adminMiddleware, appointmentController);

app.post("/saveApt", adminMiddleware, saveaptController);

app.post("/updateinfoGTwo/:id", authMiddleware, g2postcontroller);

app.get("/availableDate", adminMiddleware, checkdateController);

app.get("/g2_date", authMiddleware, g2dateController);

app.get("/examiner", examinerMiddleware, examimerpageController);

app.post("/updateinfo/:_id", authmiddleware, updateinfoController);

app.get("/register", redirectIfAuthenticatedMiddleware, signupController);

app.post(
  "/users/login",
  redirectIfAuthenticatedMiddleware,
  loginauthController
);

app.post(
  "/register/cardetails",
  redirectIfAuthenticatedMiddleware,
  validationMiddleware,
  signupauthcontroller
);

app.post("/appointments/:_id", examinerMiddleware, examimerreportController);

app.get("/auth/logout", logoutController);

app.use((req, res) => res.render("notfound"));
