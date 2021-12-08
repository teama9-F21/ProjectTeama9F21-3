// global variables for database calls
let req = ""
let query = ""
let results = ""
let pw = "Chswmk99!"  // ***** put your database password here
let netID = "wmk39469"
//let databaseSchema = "wmk39469"  // put your netID here so this is your schema
let groupID = "375groupa9"

let userID = ""
btnLogin.onclick=function(){
  userID = inptLogUserID.value
  let password = inptPassword.value
  let query = "SELECT user_id, Password FROM user WHERE user_id = '" + userID + "' AND Password = '" + password + "'"

  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + groupID + "&query=" + query)
  
  if (req.status == 200) { //transit trip worked.        
  
    results = JSON.parse(req.responseText)
    
    if (results.length == 0) { // no results were returned by the query
        lblMessage.value = "Either enter incorrect email or password or user do not exist. Try it again!"
    } else { // query results were returned
        ChangeForm(homePage)
    }


  }
}

btnCreate.onclick=function(){
  ChangeForm(createUser)
}
