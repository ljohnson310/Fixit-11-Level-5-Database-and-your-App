
customerUpdate.onshow=function(){
  query = "SELECT name FROM customer"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-call.php", "POST")
  
  if (req1.status === 200) {
  Names = JSON.parse(req1.responseText)
  slcUpdate.clear()
  for (i=0; i <= Names.length - 1; i++)
  
  slcUpdate.addItem(Names[i])
} else {
  NSB.MsgBox("Error")
  }
}




btnUpdate.onclick=function(){
  let Name1 = iptUpdate.value
  let Name2 = slcUpdate.value
  
  let next = false
  for (i = 0; i <= Name.length - 1; i++) {
    if (Name2 === Names[i]) {
  next = true 
  break
  }
}

if (next == false)
  NSB.MsgBox("Not the databse")
else if (found == true) {
  query = "Update customer Set name = "Name1" + "" Where name = "Name2" + ""
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-call.php", "POST")
  
  f (req1.status === 200) {
    console.log(result)
    if (req1.responseText === 500) {
      NSB.MsgBox("The name has been updated")
      iptUpdate.value = ""
      slcUpdate.value = ""
    } else {
        NSB.MsgBox("Error when adding customer")
       }
     } else
         NSB.MsgBox("Overall Error")
}
