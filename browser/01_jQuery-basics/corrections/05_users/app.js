const users = [
  {
    id: 0,
    name: 'Benjamine',
    sexe: 'F'
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
    id: 6,
    name: 'Melusine',
    sexe: 'F'
  }
];

const root = $('#root');

const table = $('<table>');
table.addClass('table');

const header = $('<thead>');
const headerRow = $('<tr>');

const thId = $('<th>').text('ID');
const thName = $('<th>').text('Name');
const thSexe = $('<th>').text('Sexe');

headerRow.append(thId, thName, thSexe);

header.append(headerRow);

table.append(header);

const body = $('<tbody>');

for(let user of users){
  const tempTr = $('<tr>');
  const tdId = $('<td>').text(user.id);
  const tdName = $('<td>').text(user.name);
  const tdSexe = $('<td>').text(user.sexe);
  
  if(user.sexe === 'M'){
    tempTr.css('background-color', 'turquoise');
  } else {
    tempTr.css('background-color', 'pink');
  }

  tempTr.css('color', 'white').append(tdId, tdName, tdSexe);

  body.append(tempTr);
}

table.append(body);
root.append(table);
