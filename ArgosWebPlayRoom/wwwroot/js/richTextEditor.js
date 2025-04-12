
window.richTextEditor = {
    applyStyle: function (command) {
        document.execCommand(command, false, null);
    },
    getContent: function (id) {
        return document.getElementById(id).innerHTML;
    },
    insertImageFromBase64: function (id, base64) {
        const editor = document.getElementById(id);
        const img = document.createElement('img');
        img.src = base64;
        img.style.maxWidth = "100%";
        editor.appendChild(img);
    }
};
