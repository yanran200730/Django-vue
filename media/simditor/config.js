$(document).ready(function(){
    var toolbar = ['mark','title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', '|', 
        'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent', 'alignment'];
    $(".field-content").width("1050px");

    $('#id_content').replaceWith('<textarea id="editor" name="content" data-autosave="editor-content" autofocus></textarea>');    
    
    var editor = new Simditor({
        textarea: $('#editor'),
        placeholder: '',
        params: {},
        upload: false,
        tabIndent: true,
        toolbar: toolbar,
        toolbarFloat: true,
        toolbarFloatOffset: 0,
        toolbarHidden: false,
        pasteImage: false,
        cleanPaste: false
    });
})
