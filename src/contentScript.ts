console.log('Chrome extension go?');

document.addEventListener("mouseup", () => {
    const selection = window.getSelection();
    if (selection && !selection?.isCollapsed) {


        const selRect = selection.getRangeAt(0).getBoundingClientRect();
        const htmlRect = (document.body.parentNode as unknown as any).getBoundingClientRect();
        if (htmlRect) {
            const btnSize = 19;
            const btnTop = (selRect.top - htmlRect.top - btnSize) + 'px';
            const btnRight = (htmlRect.right - selRect.right - btnSize) + 'px';
            if (selection.toString().length > 0) {
              if(document.getElementById("annoBtn")) return;
                const annoBtn = document.createElement("div");
                annoBtn.id = "annoBtn";
                annoBtn.style.position = "absolute";
                annoBtn.style.right = btnRight;
                annoBtn.style.top = btnTop;
                annoBtn.style.width = `${btnSize}px`;
                annoBtn.style.height = `${btnSize}px`;
                annoBtn.style.borderRadius = "2px";
                annoBtn.style.padding = "2px";
                annoBtn.style.backgroundColor = "black";
                annoBtn.style.display = "flex";
                annoBtn.style.alignItems = "center";
                annoBtn.style.justifyContent = "center";
                annoBtn.innerHTML = `<img style="width: ${btnSize}px; height: ${btnSize}px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADSUlEQVR4nO2YS0hUURjHh1F8IIijKCdtgpG0x8IhxEQQhXFRFoom6iaVSEJxMSIKEi2SUtqIgQ8UGmGiMCbIB0qIWFmQuhhFxxbjIwOzGdR7Q3p4d1+c2zgwzes+zpmr4eKDgbnw/X7nnPu/5xwVUqvhOJdKaQB0IqBWfhTR/7aEzsXHH0+B4txcsFutwLEs2GZnwZCRcXwEaktLYd/h4OEPa2dzE65kZh5tgVNhYdDW2AgHDOMBL1RCUQFtVBQM9ff7BBcqoZjA+YQEeDc2FhQ+mIQiApdTU+HT/Lxg+EASIRe4npMDjrU10fCcq5wbG/wAKCJwp6zMK2k4CTXY1RV6gYfNzX6ThhNZFpMpdAI4aZ719hIB51iWH4RygyE0AnhL8FZE0nAC6lFrq0cPagJZOh2szM0RhX85OMh/+KgLXM3Kgq92O1H4DxMTcCY62qsXcYFbxcXwfXubKLzdaoWLSUk++xEVuFtfD7/39ojCO9fXISctzW9PIgKnIyLgSWcnUXCOZeGH0wmleXkBe8sWOBsbC68tFuLwBwwDdZWVQfvLEtCnpMDCzAxxeI5lob2lRRCDZAGDXg9fVlaowFtMJq+4JCpQU1REPGk4V70fH/cZl8QEaCQN5yq8xRZzoBctcCM/n9iG7N/6trrqsU2mIvC4rY0K/L7DAdeysyW9i6IEjFVVxOEPGIa/kZAaJiqxH6w3o6NEBR40NUmGFyygi4mBm4WF7t+ktshPe3pkwQsSSA4Ph6nhYX6qG2tqiElMj4yANjKSvgDeSB02xfFJQgJfG6ZrNLLhBQngdf9xcpKYBD4n4MMOCXgk9B1Ij4uDuakpj+Roqa11S+DlQDsukVSBC4mJfyU0GpifnpY8E/h5fNghCY+CCeDTP7O1BXXl5bJn4r7RSBweBRLA8IeXUL92d2VJmLu7qcAjfwIVBQVeN2g/d3bgdkmJ/+VUXe2WeGU2u/973tfHB0HIBCp8wIuVwHVJqwV9cjI1cORPINjFayCJjaUlfgZoQ6NAAvcaGmDTZhMl8WJgAMaHhojmO5LzDuDjHM7r3o4O+Ly8TGUTRlUA+ZDpaW+HtcVF/n4en8qUBkdCBY56qZQGQCcCauVHUc4S+gMJbsFOmIAkagAAAABJRU5ErkJggg==">`;
                document.body.appendChild(annoBtn);

                annoBtn.addEventListener("click", function onBtnClick() {
                  console.log(selection.toString());
                });
            }
        }
    }
});

document.addEventListener("mousedown", (event) => {
  const annoBtn = document.getElementById("annoBtn");

  if (annoBtn && !annoBtn.contains(event.target as any)) {
      annoBtn.parentNode?.removeChild(annoBtn);
  }
});
