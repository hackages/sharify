const users = [
  {
    id: 0,
    name: 'Benjamin',
    sexe: 'M'
  },
  {
    id: 1,
    name: 'Antonio',
    sexe: 'M'
  },
  {
    id: 2,
    name: 'Richard',
    sexe: 'M'
  },
  {
    id: 3,
    name: 'Rita',
    sexe: 'F'
  },
  {
    id: 4,
    name: 'Nichole',
    sexe: 'F'
  },
  {
    id: 5,
    name: 'Antonio',
    sexe: 'M'
  },
  {
    id: 6,
    name: 'Melusine',
    sexe: 'F'
  }
];

let list = $('<table>').addClass('table');

const header = $('<thead>').html($('<tr>')
  .append($('<td>'))
  .html('<th>id</th>' + '<th>name</th>' + '<th>sexe</th>'));

list.append(header);

const body = $('<tbody>');

for(let user of users){
  const tempRow = $('<tr>');
  if(user.sexe === 'F'){
    tempRow.css('background', 'tomato');
  } else {
    tempRow.css('background', 'turquoise');
  }
  tempRow.append($('<td>').text(user.id));
  tempRow.append($('<td>').text(user.name));
  tempRow.append($('<td>').text(user.sexe));
  body.append(tempRow);
}

list.append(body);

$('#root').html(list);
