const router = require("express").Router() ; 
const Location_controller = require("../controllers/location_controller");
const User_controller = require("../controllers/user_controller");
const Auth_controller = require("../controllers/auth_controller");

//Location route
router.post('/new-location', Location_controller.newLocation ) ;
router.get('/all-location' , Location_controller.allLocation) ;
router.put('/update-location/:id' , Location_controller.updateLocation) ;
router.delete('remove-location/:id' , Location_controller.removeLocation) ;
router.get('/show-location/:id', Location_controller.showLocation);

//User route
router.post('/new-user', User_controller.newUser ) ;

//authentication routes
router.post('/auth', Auth_controller.auth ) ;

module.exports = router ;