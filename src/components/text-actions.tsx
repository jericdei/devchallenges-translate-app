import IconButton from "./icon-button"
import Speaker from "./vector/speaker"
import Copy from "./vector/copy"

interface TextActions {
  text: string
  language: string
}

export default function TextActions({ text, language }: TextActions) {
  const handleSpeakClick = () => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = language
    speechSynthesis.speak(utterance)
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="flex items-center gap-2">
      <IconButton icon={<Speaker />} onClick={handleSpeakClick} />
      <IconButton icon={<Copy />} onClick={handleCopyClick} />
    </div>
  )
}
