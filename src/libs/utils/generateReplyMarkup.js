function generateReplyMarkup(keyboard, inline = false) {
  const keyboardType = inline ? "inline_keyboard" : "keyboard";

  return JSON.stringify({
    [keyboardType]: keyboard,
    resize_keyboard: true,
    one_time_keyboard: true,
  });
}

module.exports = generateReplyMarkup;
