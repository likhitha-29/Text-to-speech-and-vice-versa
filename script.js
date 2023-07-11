function speakText() {
    const text = document.getElementById('textToSpeak').value;
  
    // Create SpeechSynthesisUtterance instance
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
  
    // Specify a female voice
    utterance.voice = speechSynthesis.getVoices().find(voice => voice.name === 'Google UK English Female');
  
    // Speak the text
    speechSynthesis.speak(utterance);
  }
  function speakText2() {
    const text = document.getElementById('textToSpeak').value;
    
    // Create SpeechSynthesisUtterance instance
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
  
    // Speak the text
    speechSynthesis.speak(utterance);
  }
  