1. sign up link not working ✅
2. booking routerlink got problem 

1. sign in - verify role (direct either to provider page OR user page)
1a. something must happen to Navbar... profile/booking/listing-by default sign in page, sigout page need to check if user is logged in - if yes, log out succesful page, if not direct to login page 
2. provider page - create listing, see all listings, see booking-timeslot-user
3. user page - create booking, see own booking, delete own booking, see all listings posted by provider 
4. Timeslot is the most important link between listing and booking
5. 

what's next?
1. logout feature ✅
2. Navbar not behaving well
3. Can refractor codes more Vue like
4. Create Listing form and card
5. API - Stripe, Google Calendar, Google Earth 

header X
navbar ✅
sidebar X
footer ✅


```
Health
GET http://localhost:8080/
GET http://localhost:8080/music-space

Auth
POST http://localhost:8080/auth/register
POST http://localhost:8080/auth/verify
POST http://localhost:8080/auth/login

Listing
POST http://localhost:8080/listings/
GET http://localhost:8080/listings/
GET http://localhost:8080/listings/listing/:id
PUT http://localhost:8080/listings/listing/:id
DELETE http://localhost:8080/listings/listing/:id

Timeslot
POST http://localhost:8080/timeslot/timeslot
GET http://localhost:8080/timeslot/timeslot
GET http://localhost:8080/timeslot/timeslot/:id
PUT http://localhost:8080/timeslot/timeslot/:id
DELETE http://localhost:8080/timeslot/timeslot/:id

Booking
POST http://localhost:8080/bookings/bookings
GET http://localhost:8080/bookings/bookings
GET http://localhost:8080/bookings/bookings/:id
PUT http://localhost:8080/bookings/bookings/:id
DELETE http://localhost:8080/bookings/bookings/:id

Payment
POST http://localhost:8080/payment/payment
GET http://localhost:8080/payment/payment
GET http://localhost:8080/payment/payment/:id
PUT http://localhost:8080/payment/payment/:id
DELETE http://localhost:8080/payment/payment/:id

Stripe
GET http://localhost:8080/check-stripe
POST http://localhost:8080/stripe/create-checkout-session/ (add ons and no add ons)
POST http://localhost:8080/stripe/webhook

Reviews and Rating
POST http://localhost:8080/reviews-ratings//reviews-ratings
GET http://localhost:8080/reviews-ratings//reviews-ratings
GET http://localhost:8080/reviews-ratings//reviews-ratings/:id
PUT http://localhost:8080/reviews-ratings//reviews-ratings/:id
DELETE http://localhost:8080/reviews-ratings//reviews-ratings/:id

User
POST http://localhost:8080/users
GET http://localhost:8080/users/users
GET http://localhost:8080/users/:id
PUT http://localhost:8080/users/:id
DELETE http://localhost:8080/users/:id
```
