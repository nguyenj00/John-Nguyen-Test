function get(element){
    return document.getElementById(element);
}

function closeModel(){
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    title.value = '';
    text.value = '';

    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

function saveContent(){
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var content = get('display-content');

    var newTitle = document.createElement('h2');
    var newTitleText = document.createTextNode(title.value);
    var newContent = document.createElement('p');
    var newContentText = document.createTextNode(text.value);

    newTitle.appendChild(newTitleText);
    newTitleText.appendChild(newContentText);
    content.appendChild(newTitle);
    content.appendChild(newContent);

    closeModel();

}

window.addEventListener('load', function() {
    var newButton =get('new-button');
    var cancelButton = get('cancel-button');
    var saveButton = get('save-button');

    newButton.addEventListener('click', this.openModal);
    cancelButton.addEventListener('click', this.closeModel);
    saveButton.addEventListener('click', saveContent);
});
