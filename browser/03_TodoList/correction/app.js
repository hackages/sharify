const inputField = $('[name=new-todo]');
const list = $('#list');
const counter = $('#todo-counter');
const filterAll = $('#all');
const actives = $('#actives');
const completed = $('#completed');
const remove = $('#remove-completed');
const addTodo = $('#add-todo');

function updateCounter(){
  const elements = $('.active').length;
  counter.text(elements + ' todos');
}

function deleteTodo(){
  const parent = $(this).parent();
  parent.remove();
  updateCounter();
}

function handleAddTodo(){
  const value = inputField.val(); 
  if(value !== ""){
    const li = $('<li>');
    li.addClass('active');
    li.text(value);
    
    const button = $('<button>');
    button.addClass('remove-todo');
    button.text('❌');
    button.click(deleteTodo);
    
    li.append(button);
    list.append(li);

    inputField.val("");
    updateCounter();
  }
}

addTodo.click(handleAddTodo);
updateCounter();
$('.remove-todo').click(deleteTodo);