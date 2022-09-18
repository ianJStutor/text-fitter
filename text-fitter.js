function fitText(elementWithText) {
    const text = elementWithText.textContent,
          { width, height } = elementWithText.getBoundingClientRect(),
          style = window.getComputedStyle(elementWithText),
          paddingTop = Number(style.getPropertyValue("padding-top").replace("px", "")) || 0,
          paddingRight = Number(style.getPropertyValue("padding-right").replace("px", "")) || 0,
          paddingBottom = Number(style.getPropertyValue("padding-bottom").replace("px", "")) || 0,
          paddingLeft = Number(style.getPropertyValue("padding-left").replace("px", "")) || 0,
          maxFontSize = getMaxFontSize(text, width-paddingLeft-paddingRight, height-paddingTop-paddingBottom);
    elementWithText.style.fontSize = `${maxFontSize}px`;
}

function getMaxFontSize(text, width, height){
	if (!text || !text.length) return 0;
	const div = document.createElement("div");
	div.style.position = "absolute";
	div.style.left = "-9999px";
	div.style.width = width + "px";
	div.dataset.size = 1;
	div.textContent = text;
	document.body.append(div);
	while(getHeight() < height){
		div.dataset.size++;
	}
	const fontSize = div.dataset.size - 1;
	div.remove();
	return fontSize;

	function getHeight(){
		div.style.fontSize = div.dataset.size + "px";
		return div.offsetHeight;
	}
}

export { fitText };
