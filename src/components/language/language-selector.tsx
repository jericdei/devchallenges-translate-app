import { ButtonHTMLAttributes } from "react"
import { cn } from "../../lib/utils"
import ExpandDown from "../vector/expand-down"
import { Language } from "./types"

interface LanguageSelectorProps {
  languages: Language[]
  selectedLanguage?: Language["code"]
  onSelectLanguage: (code: Language["code"]) => void
}

export default function LanguageSelector({
  languages,
  selectedLanguage,
  onSelectLanguage,
}: LanguageSelectorProps) {
  return (
    <div className="flex gap-2">
      {languages.map((language) => (
        <LanguageButton
          key={language.code}
          language={language}
          selected={language.code === selectedLanguage}
          last={language === languages[languages.length - 1]}
          onClick={() =>
            language.code !== selectedLanguage &&
            onSelectLanguage(language.code)
          }
        />
      ))}
    </div>
  )
}

interface LanguageButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  language: Language
  selected?: boolean
  last?: boolean
}

function LanguageButton({
  language,
  selected,
  last,
  ...props
}: LanguageButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center gap-2 rounded-xl px-3 py-1.5 font-bold text-neutral-200",
        selected && "bg-neutral-200 text-neutral-100",
      )}
      {...props}
    >
      <span>{language.name}</span>

      {last && <ExpandDown />}
    </button>
  )
}
