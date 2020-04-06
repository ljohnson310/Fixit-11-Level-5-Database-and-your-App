

drpCustomer2.onclick=function(){
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
        drpCustomer2.addItem(results[i][1]) }
      }
    } else
      NSB.MsgBox("Error")
  

drpDelete.onclick=function(){
 req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-call.php", "POST")
    if (typeof (w) === 'object') {
  return
} else {
  drpDelete.value = w
  companyName = drpDelete.selection
  for (i = 0; i <= Data.length - 1: i++) {
    if (companyName === Data [i][1]) {
      state = Data [i][3]
      break
  }
}
for (i = 0; i <= Data.length - 1; i++) {
  if (state === Data [i][3])
  endNames.push(Data[i][1])
}


