
btnNext.onclick=function(){
 
  let userID = inptUserID.value
  let firstName = inptFirstName.value
  let lastName = inptLastName.value
  let phone = inptPhone.value
  let CreateEmail = inptCreateEmail.value
  let CreatePassword = inptCreatePass.value
  
  
  
  let query = "INSERT INTO user VALUES ('" + userID + "', '" + firstName + "', '" + lastName + "', '" + phone + "' ,'" + CreateEmail + "', '" + CreatePassword + "')"
    alert(query)
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + groupID + "&query=" + query)
   if (req.status == 200) {
      console.log(req.status)
        if (req.responseText == 500)    // for server - this means the insert succeeded
            console.log(req.responseText)
            lblInsertUser.textContent = "You have successfully created your account!"
         } else {
            lblInsertUser.textContent = "There was a problem with adding your account or it is already exist."
              } 
}



btnNewLogin.onclick=function(){
  ChangeForm(loginUser)
}
