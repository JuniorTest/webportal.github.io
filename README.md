# webportal.github.io

##### RUN SERVER ######
# cd webportal
# run server: npm run server

#### RUN CLIENT ######
# develop in the future

####### API ########
### Save User in event A ###
+ POST /api/events/eventA
+ Body: firstname, lastname, email, event_name
+ Event Type base event_id in DATABASE with event A we have event_id = 1
+ Description: registered an event A
### Save User in event B ###
+ POST /api/events/eventB
+ Body: firstname, lastname, email, event_name
+ Event Type base event_id in DATABASE with event A we have event_id = 2
+ Description: registered an event B
### List User of Event by [event_id] ###
+ GET /api/events/{id}
+ ID: 1 or 2
+ Description: lis user of event base event id
### Update User of Event A (role Admin) ###
+ PUT /api/events/eventA
+ Description: update User of Event A
+ Body: firstname, lastname, email, event_name
+ Description: update user of event A
### Update User of Event B (role Admin) ###
+ PUT /api/events/eventB
+ Description: update User of Event B
+ Body: firstname, lastname, email, event_name
### Unscribe Event ###
+ DELETE /api/events/{user_id}
+ Description: user will unsubscribe an event
## Login ####
+ POST /api/users
+ Body: email, password
+ Description: login user (admin) and get token
