console.log('Chrome extension go?');

document.addEventListener("mouseup", () => {
    const selection = window.getSelection();
    if (selection && !selection?.isCollapsed) {


        const selRect = selection.getRangeAt(0).getBoundingClientRect();
        const htmlRect = (document.body.parentNode as unknown as any).getBoundingClientRect();
        if (htmlRect) {
            const btnTop = (selRect.bottom - htmlRect.top) + 'px';
            const btnRight = (htmlRect.right - selRect.right) + 'px';
            if (selection.toString().length > 0) {
                const div = document.createElement("div");
                div.id = "annoBtn";
                div.style.position = "absolute";
                div.style.right = btnRight;
                div.style.top = btnTop;
                div.innerHTML = '<div style="width: 19px; height: 19px; background-size: 19px; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACT0lEQVR4nO3ZT0gUYRjH8W8aCashKmiRtyIPYjdBUDok0iU6ZHWoQx2KutTNqJsEHrrUMbCDEFGBlyDSDhXVKek/RNghiBKDMMQottJ8ZeERhsXdZmbf53l3wB+8sKed+cw88868zwvrMUkXcBu4A+wjo9kL/ABcZJwnYzkJLBYhMoXZAAyXAGQGUwfcioGoakwL8DQBoiox24EPKRCumjC9wFwFCCfjeEjEYSDvAeGAz6EQ54BlTwgHfLUGbASuegQ4GRcsEfXAXQXEOFBjhdgKvFBATAE5K0Qn8EkB8RFotULsAeYVEHPATivEMeCPAiIv7x+zDz+f06uTUfjPo1bT66gCwMkYskBsBiYVEdcsENuAN4qICbnbqtkFfFFEvAIaLNbVC4qIGaBdG3GizLrax1iQux18XV3J+AsMaK+rbyojHHAK5fQrl5MDLmoCtgDN8vugIua6lK5K2oB3wGvpdhQyKHXsE/FESlcVsXowLcx7oMkKoYX5BuxAMY/LHPylp2fmJ9CtiWiOcRKVYpaA/ShnE/BbGXMGo9yPeUJpMJcxzNkEVzfJBFBoCdVaQvoS1nwczHPpb5mmJ8UsVK7MTNs3xf1Z5wnzHeggQGqB2ZSQtTC7CZjBCt/a0WfGPDngCtAY2cNI+9b+BxwIhXjg4UW32kg7HRrh1sAcSoAJinhY4qSeRcrsiHwfTUs38RJwo6jTnpeeb5Dc+88VjmI6S2yqtMsyuLAPEizTMcrlERlIvTzQY7LIKUb8kn2OTKVGPk1GgLeyoZI5BFnOCoOXYCNkemp9AAAAAElFTkSuQmCC);"></div>';
                document.body.appendChild(div);
            }
        }
    }
});

document.addEventListener("mousedown", () => {
    const div = document.getElementById("annoBtn");
    if (div) {
        div.parentNode?.removeChild(div);
    }
});