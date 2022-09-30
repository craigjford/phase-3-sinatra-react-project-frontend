# The Vineyard Application

## Overview
The project will enable users to keep a repository of vineyards and the wines available for each vineyard.  The front end is written in React and is a single page application.  The front end will display Vineyard information and their associated Wines information.  It will also interact with the back end to send CRUD requests via Sinatra API.  The back end is written in Ruby and utilizes Sinatra and Ruby with active record.  The back end will be called by the front end to perform CRUD actions on both the Vineyards and its associated Wines.  The back end will utilize SQL Lite to persist the data and send back the necessay information in JSON format to allow the front end to display and perform necssary actions.

![](public/project.drawio)  

## React Front end

The front end will initially display a Home page with a Navigation bar of Home and Vineyards upon invocation.  The front end utilizes React's Router functionality to navigate throughout the single page application.  Following is a list of Components and how to navigate to each:

App
|_ NavBar
    |_Home
    |_Vineyards
        |_VineyardList
            |_VineyardForm
            |_Vineyard  
                |_WineForm
                |_WineDelete
                |_WineUpdate  

## React Component Functions

App - is the top-level component of the application.  It is called from index.js.  The component connects to the back end to get all the vineyards including their associated wines and sets it to State.  The component uses Routes to navigate to each component with the exception of Vineyard List.  It passes props to each component which includes callbacks.  The App also provides the final processing for every CRUD action to keep the Vineyards/Wines State in sync with the what back end has persisted to the database.  

NavBar - is called from App and is displayed on each page.  The navigation bar will have two options - Home and Vineyards.  Home will navigate to the home page and Vineyards will navigate to the vineyards page.  

Home - is routed from App.  The Home page contains a brief synopsis of the purpose of the application. 

Vineyards - get passed all the vineyards and their associated wines.  The component maps through the vineyards and create separate Vineyards which are displayed on the Vineyard List component.

Vineyard List - is passed all vineyards and their associated wines for each individual component.  Each vineyard has the name and a image of the vineyard, a delete button, a link to add a vineyard and a link to the Vineyard details.  If a user clicks on the delete button, this component will call the back end to delete the vineyard and its associated wines and than utilize the callback prop to App to keep Vineyards state is sync with the database. If the user clicks on the add vineyard link, this component will use Link to proceed to the provided route which the App component directs application traffic.  In the same manner, if the user clicks Details link, this component will navigate throgh App's Route to the Vineyard component.

Vineyard - this component will display all the details relating to a vineyard which includes the name, image, address, city, state and its associated wines.  If no wines exist, it will display the a "No Wines Exist" header.  It is passed vineyards.  Components utilize useParams to get the vineyard to filter through vineyards.  It also contains a Add Wines, Delete Wines and Update Wines link which again uses the App Routes to go to the appriopriate component.  The Add Wines link will route to the WineForm component.  The Delete Wines link will route to the WineDelete component.  The Update Wines link will route to the WineUpdate component.  The Add, Delete and Update will be passed the vineyards prop and the appropriate callback to navaigate to App to keep Vineyards and their associated Wines state in sync.

VineyardForm - provides a form that contains input fields for a Vineyard which includes name, address, city, state and a Vineyard image.  Initially, an empty Vineyard object will initailize Vineyard State.  As fields are changed, fields in State will be changed.  All fields are required.  Upon inputting all the fields, user can click Submit button which will send an API to back end to POST a vineyard.  Upon successful completion, processing in passed to App to keep Vineyards State in sync and use Routing to pass processing back to VineyardForm.  

WineForm - is passed all the vineyards and their associated wines and a callback to update state as described in App.  Component utilizes useParams to get the vineyard to filter through vineyards.  The component will display the Vineyard name and all the associated wines that have been added to the Vineyard.  It will display "No Wines Exist" if that is the case.  The component will use state containing an empty wine object that gets updated as input fields are filled.  The component will also have a form that contains input fields that enables the user to add a wine that includes year, name and price to add to the Vineyard.  

WineDelete - is passed all the vineyards and their associated wines and a callback to update state as described in App.  Component utilizes useParams to get the vineyard to filter through vineyards.  The component will display the Vineyard name and all the associated wines that have been added to the Vineyard.  It will display "No Wines Exist" if that is the case. For each wine there will be a radio button of which only one can be selected.  To Delete a wine, select a wine and click the Delete button.  Upon clicking on the Delete button, a DELETE API will be sent to the back end.  Upon successful completion, processing is passed back to App component via callback to keep State in sync.

WineUpdate - is passed all the vineyards and their associated wines and a callback to update state as described in App.  Component utilizes useParams to get the vineyard to filter through vineyards.  The component will display the Vineyard name and all the associated wines that have been added to the Vineyard.  It will display "No Wines Exist" if that is the case. For each wine there will be a radio button of which only one can be selected.  The component will also have a form that contains input fields for year, name, price and an Update button.  When a wine is selected via the radio button, the input fields will be populated with the selected info.  The user change change the value of any or all of the fields.  This component also keeps an empty wine object in state that gets updated upon selection via clicking on a radio button.  It further gets updated via changes to any of the input fields.  Upon clicking the Update button, the component will send a UPDATE API to the back end and upon successful completion will process App to keep App's State in sync.     


##  back end Using Sinatra and Ruby Activerecord

Using Ruby's Rake db:create_migration and db:migration, two tables will be created, Vineyards and Wines.  The vineyards table contains name, address, city, state and imageUrl.  The wines table contains name, price, year and vineyard_id.  A vineyard has many wines and a wine belongs to a unique vineyard.  Hence, wine's vineyard_id is a foreign key to vineyards.  These associations are defined in the Vineyard.rb and Wine.rb models.  Vineyard.rd establishes that a Vineyard has many wines.  Vineyard.rd also uses the dependent destroy parameters that insures upon deleting a vineyard, all of its associated wines will also be deleted.  Wine.rb establishes that a wine belongs to a vineyard.

To accomodate all of the front end's CRUD requests, the following actions are in the Vineyard controller and the Wine controller.  The Vineyard contoller handles the following routes.  The get request gets all the vineyards and their associated wines by utiliziing the include parameter.  Additionally, the request return the results JSON-ified back to the front end.  There is a delete request which passes id as a paramenter and deletes the one Vineyard with the passed id.  The post route creates a new vineyard with the parameters passed.  It returns the resulting JSON back to the front end.

The Wine controller has the following actions.  The post wines uses vineyard_id to add wines to the associated vineyard.  The delete route is passed a wine id to delete the appropriate wine.  The update route is also passed in a wine id to ensure the correct wine's name, price and year are appropriately updated.

## Commits - 40 on the Front end - 18 commits on the back end

Commits on Sep 26, 2022
Completed version

@craigjford
craigjford committed 5 minutes ago
 
Commits on Sep 23, 2022
Started final testing

@craigjford
craigjford committed 3 days ago
 
Commits on Sep 22, 2022
fixed deleete is App state

@craigjford
craigjford committed 4 days ago
 
Message added final touches to WineUpdate

@craigjford
craigjford committed 4 days ago
 
Commits on Sep 21, 2022
add WineUpdate coomponent/initial code/added Route in App

@craigjford
craigjford committed 5 days ago
 
fixed useParames in Wine Components

@craigjford
craigjford committed 5 days ago
 
Fixed routes and adding a vineyard(making sure an empty array was par… 

@craigjford
craigjford committed 5 days ago
 
Commits on Sep 20, 2022
added Update fields to Winelist and made changes to index.css

@craigjford
craigjford committed 6 days ago
 
Commits on Sep 19, 2022
Corrected code to delete a wine in both WineList and App components

@craigjford
craigjford committed 7 days ago
 
Commits on Sep 18, 2022
added Delete wine code to winwlist and App

@craigjford
craigjford committed 8 days ago
 
Commits on Sep 17, 2022
added radio buttons and content to 

@craigjford
craigjford committed 9 days ago
 
Added Code to list wines to update/delete. Changed WineList route in App

@craigjford
craigjford committed 9 days ago
 
Added code to WineForm and Wines to handle if now wines exist

@craigjford
craigjford committed 9 days ago
 
Corrected problem if a vineyard has no wines in VineYard component

@craigjford
craigjford committed 9 days ago
 
Commits on Sep 16, 2022
added handleSubmitWine to add a wine

@craigjford
craigjford committed 10 days ago
 
Added Submit code to WineForm

@craigjford
craigjford committed 10 days ago
 
Cleaned up code in VineyardForm component

@craigjford
craigjford committed 10 days ago
 
Cleaned up Home Component

@craigjford
craigjford committed 10 days ago
 
Cleanup up code in App Component

@craigjford
craigjford committed 10 days ago
 
Commits on Sep 15, 2022
Added code to Wine Update component and fixa routing issue

@craigjford
craigjford committed 11 days ago
 
corrected wine lists in Vinyard and WineForm components

@craigjford
craigjford committed 11 days ago
 
Commits on Sep 14, 2022
Added code to WineForm and app(route)

@craigjford
craigjford committed 12 days ago
 
Added code to Navbar and created Wineform

@craigjford
craigjford committed 12 days ago
 
added tyle to center buttons. Added code to Vineyard and VineyardList… 

@craigjford
craigjford committed 12 days ago
 
Commits on Sep 13, 2022
added Links to Veineyard from VinyardList

@craigjford
craigjford committed 13 days ago
 
Commits on Sep 12, 2022
Corrected image_url initialization field

@craigjford
craigjford committed 14 days ago
 
Corrected index.css for vineyard form

@craigjford
craigjford committed 14 days ago
 
added to code to stylesheets and VineyardForm. Added code to routes i… 

@craigjford
craigjford committed 14 days ago
 
Commits on Sep 9, 2022
Added code/functionalityto VineyardList component

@craigjford
craigjford committed 17 days ago
 
Commits on Sep 8, 2022
Added styling to vineyardList in index.css

@craigjford
craigjford committed 18 days ago
 
added code/functionality to vineyardList component

@craigjford
craigjford committed 18 days ago
 
Corrected NavBar component to comply with v6

@craigjford
craigjford committed 18 days ago
 
Commits on Sep 7, 2022
coded Vineyard component and added Wine component

@craigjford
craigjford committed 19 days ago
 
Created Vineyard and VineyardList components

@craigjford
craigjford committed 19 days ago
 
Commits on Sep 6, 2022
Created the Home component

@craigjford
craigjford committed 20 days ago

added code to navigation bar

@craigjford
craigjford committed 20 days ago
 
Added react-router-dom v6. Added components directoty

@craigjford
craigjford committed 20 days ago
 
created react front end using npx create-react-app

@craigjford
craigjford committed 20 days ago
 
Initial commit

@craigjford
craigjford committed 20 days ago  

##  back end Development

Commits on Sep 22, 2022
Fixed Update Wines

@craigjford
craigjford committed 4 days ago
 
Commits on Sep 20, 2022
Add code to Wine controller for PATCH

@craigjford
craigjford committed 6 days ago
 
Commits on Sep 19, 2022
corrected delete code to wines controller

@craigjford
craigjford committed 7 days ago
 
Commits on Sep 18, 2022
added delete to wines controller

@craigjford
craigjford committed 8 days ago
 
Commits on Sep 15, 2022
changed Vineyard post

@craigjford
craigjford committed 11 days ago
 
deleted singleton vineyard GET from controller

@craigjford
craigjford committed 11 days ago
 
Commits on Sep 13, 2022
Added Delete code for Vineyards

@craigjford
craigjford committed 13 days ago
 
Commits on Sep 12, 2022
added POST code to vineyards controller

@craigjford
craigjford committed 14 days ago
 
Commits on Sep 8, 2022
Corrected Wine model

@craigjford
craigjford committed 18 days ago
 
Commits on Sep 7, 2022
added code to wine and vineyard controllers

@craigjford
craigjford committed 19 days ago
 
Commits on Sep 6, 2022
Added vineyard and wines controllers to config.ru

@craigjford
craigjford committed 20 days ago
 
created route in vineyard contoller to gett all vineyards

@craigjford
craigjford committed 20 days ago
 
Created vineyards and wines controllers

@craigjford
craigjford committed 20 days ago
 
Commits on Sep 5, 2022
Created Vineyard and Wine models

@craigjford
craigjford committed 21 days ago
 
Changed seeds file and ran

@craigjford
craigjford committed 21 days ago
 
added collumn year to wines table

@craigjford
craigjford committed 21 days ago
 
Commits on Sep 3, 2022
Created tables through db:create_migration and db:migrate

@craigjford
craigjford committed 23 days ago
 
Created seeds file

@craigjford
craigjford committed 23 days ago

## back end Commits

Commits on Sep 22, 2022
Fixed Update Wines

@craigjford
craigjford committed 4 days ago
 
Commits on Sep 20, 2022
Add code to Wine controller for PATCH

@craigjford
craigjford committed 6 days ago
 
Commits on Sep 19, 2022
corrected delete code to wines controller

@craigjford
craigjford committed 7 days ago
 
Commits on Sep 18, 2022
added delete to wines controller

@craigjford
craigjford committed 8 days ago
 
Commits on Sep 15, 2022
changed Vineyard post

@craigjford
craigjford committed 11 days ago
 
deleted singleton vineyard GET from controller

@craigjford
craigjford committed 11 days ago
 
Commits on Sep 13, 2022
Added Delete code for Vineyards

@craigjford
craigjford committed 13 days ago
 
Commits on Sep 12, 2022
added POST code to vineyards controller

@craigjford
craigjford committed 14 days ago
 
Commits on Sep 8, 2022
Corrected Wine model

@craigjford
craigjford committed 18 days ago
 
Commits on Sep 7, 2022
added code to wine and vineyard controllers

@craigjford
craigjford committed 19 days ago
 
Commits on Sep 6, 2022
Added vineyard and wines controllers to config.ru

@craigjford
craigjford committed 20 days ago
 
created route in vineyard contoller to gett all vineyards

@craigjford
craigjford committed 20 days ago
 
Created vineyards and wines controllers

@craigjford
craigjford committed 20 days ago
 
Commits on Sep 5, 2022
Created Vineyard and Wine models

@craigjford
craigjford committed 21 days ago
 
Changed seeds file and ran

@craigjford
craigjford committed 21 days ago
 
added collumn year to wines table

@craigjford
craigjford committed 21 days ago
 
Commits on Sep 3, 2022
Created tables through db:create_migration and db:migrate

@craigjford
craigjford committed 23 days ago
 
Created seeds file

@craigjford
craigjford committed 23 days ago




