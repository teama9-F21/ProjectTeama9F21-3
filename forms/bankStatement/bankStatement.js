
 

  query = "SELECT date, Description, withdraw, Deposit, Balance, category from transactions order by date"

 

    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

 

if (req.status == 200) {      

        console.log(`req.responseText is a JSON string that looks like this: ${req.responseText}`)

       

        results = JSON.parse(req.responseText)

       

          let message = ""

        for (i = 0; i < results.length; i++)

            message = message + "\n" +  results[i][1]

           

          //DataTable1.value = message

  }

