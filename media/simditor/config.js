$(document).ready(function(){
    $(".field-content").width("1000px");
    $('#id_content').replaceWith('<textarea id="editor" name="content" autofocus></textarea>');

    var editor = new Simditor({
        textarea: $('#editor'),
        upload: {
            url: 'image',
            params: null,
            fileKey: 'upload_file',
            connectionCount: 3,
        }
    })

})
