
export function ellipsisText(text="", max=15) {
    if(text.length < max) return text;
    return text.slice(0, max) + "..."
}