let autoReactions = {
    emojis: ['💖',  '👍', '🎉', '👏', '😂', '😮', '😢', '🤔', '👎'],
    intervalId: null,
    startReacting: function(emoji, delay) {
        if (!this.emojis.includes(emoji)) {
            console.log(`Emoji ${emoji} is not in the list of allowed emojis.`);
            return;
        }
        const reactionButton = document.querySelector('[role=button][aria-label="Надіслати реакцію"]')
        const reactionBar = document.querySelector('[role=toolbar][aria-label="Надіслати реакцію"]')
        if (!reactionBar) {
            reactionButton.click();
        }
    
        clickEmojiButton = () => {
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
