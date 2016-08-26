$(document).ready(function(){
    $(".field-content").width("1000px").height("400px");
    $('#id_content').replaceWith('<textarea id="editor" autofocus></textarea>');

    var editor = new Simditor({
        textarea: $('#editor'),
        upload: {
            url: 'image',
            params: null,
            fileKey: 'upload_file',
            connectionCount: 3,
            leaveConfirm: 'Uploading is in progress, are you sure to leave this page?'
        }
    })

})
