console.log('Chrome extension go?');
// chrome.runtime.onMessage.addListener(gotMessage);
const handleSelectionChange = () => {
    let msg = {
        txt: window.getSelection()?.toString(),
      };
      console.log(msg.txt);
  };

document.addEventListener("selectionchange", handleSelectionChange);

// function gotMessage(message, sender, sendResponse) {
//   console.log(message.txt);
// //   if (message.txt === 'hello') {
// //     let paragraphs = document.getElementsByTagName('p');
// //     for (elt of paragraphs) {
// //       elt.style['background-color'] = '#FF00FF';
// //     }
// //   }
// }