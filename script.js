let autoReactions = {
    emojis: ['💖',  '👍', '🎉', '👏', '😂', '😮', '😢', '🤔', '👎'],
    intervalId: null,
    startReacting: function(emoji, delay) {
        if (!this.emojis.includes(emoji)) {
            console.log(`Emoji ${emoji} is not in the list of allowed emojis.`);
            return;
        }
        const reactionButton = document.evaluate(
            '//div[@class="CGV6Se"]/div/span/button',
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue;
        const reactionBar = document.evaluate(
            '//div[@class="b1bzTb"]/div/div/div[@role="toolbar"]',
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue;
        if (!reactionBar) {
            reactionButton.click();
        }
        const clickEmojiButton = () => {
            const emojiButton = document.querySelector(`[role=button][aria-label="${emoji}"]`);
            if(emojiButton){
                emojiButton.click()
            } else {
                this.stopReaction()
            }
        }
        this.intervalId = setInterval(clickEmojiButton, delay)
    },
    stopReaction: function() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
        }
    }
}
