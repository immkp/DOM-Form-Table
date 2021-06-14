var row = 1
function getData() {
  let firstName = document.getElementById('first-name').value
  let lastName = document.getElementById('last-name').value
  let address = document.getElementById('address').value
  let pincode = document.getElementById('pincode').value
  let state = document.getElementById('state').value
  let country = document.getElementById('country').value

  let gender = ''
  var ele = document.getElementsByName('gender')
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) gender = ele[i].value
  }

  let food = ''
  let marked = document.getElementsByName('food')
  let count = 0
  for (var i of marked) {
    if (i.checked) {
      count++
      food += i.value + ','
    }
  }
  if (count < 2) {
    alert('you must choose two food items')
    return
  }

  food = food.substr(0, food.length - 1)

  let arr = [
    firstName,
    lastName,
    address,
    pincode,
    gender,
    food,
    state,
    country,
  ]

  let output = document.querySelector('.table-output')
  let newRow = output.insertRow(row)

  for (let i = 0; i < arr.length; i++) {
    let cell = newRow.insertCell(i)
    cell.innerHTML = arr[i]
    cell.style.width = '100px'
    cell.style.wordBreak = 'break-all'
  }

  row++

  document.getElementById('first-name').value = ''
  document.getElementById('last-name').value = ''
  document.getElementById('address').value = ''
  document.getElementById('pincode').value = ''
  document.getElementsByName('gender').value = ''
  document.getElementsByName('food').value = ''
  document.getElementById('state').value = ''
  document.getElementById('country').value = ''

  var items = document.getElementsByName('food')
  for (let i = 0; i < items.length; i++) {
    if (items[i].type == 'checkbox') items[i].checked = false
  }
  var radio = document.getElementsByName('gender')
  for (let i = 0; i < radio.length; i++) {
    radio[i].checked = false
  }
}
