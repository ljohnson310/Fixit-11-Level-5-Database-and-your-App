
customerAdd.onshow=function(){
  query = "SELECT * FROM customer"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-call.php", "POST")
  
  if (req1.status === 200) {
  results = JSON.parse(req1.responseText)
  console.log(results)
  Data = results
  
  if results.length == 0)
    NSB.MsgBox("No customers")
  else {
    let message = ""
      for (i = 0; i <= results.length - 1; i++) {
        drpCustomer2.addItem(results[i][1]) + "\n"
        txtAdd.value = message
        }
      }
    } else
      NSB.MsgBox("Error")
}



drpAdd.onclick=function(){
  query = `INSERT INTO customer (name, street, city, state, zipcode) VALUES ("Jesse Antiques", "1113 F St", "Omaha", "NE", "68178")`
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-call.php", "POST")
  
  if (req1.status === 200) {
    console.log(result)
    if (req1.responseText === 500) {
      NSB.MsgBox("The customer has been added")
    } else {
        NSB.MsgBox("Error when adding customer")
       }
     } else
         NSB.MsgBox("Overall Error")
}
