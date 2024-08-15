import { useEffect, useState } from "react"
import Card from "./components/card"
import LanguageSelector from "./components/language/language-selector"
import { Language } from "./components/language/types"
import TextArea from "./components/text-area"
import Logo from "./components/vector/logo"
import Button from "./components/button"
import SortAlfa from "./components/vector/sort-alfa"
import TextActions from "./components/text-actions"
import axios from "./lib/axios"
import IconButton from "./components/icon-button"
import Switch from "./components/vector/switch"

const MAX_CHARACTERS = 500
const INITIAL_INPUT = "Hello, how are you?"
const INITIAL_LANGPAIR = "en|fr"
const DEFAULT_LANGUAGES: Language[] = [
  {
    name: "English",
    code: "en",
  },
  {
    name: "French",
    code: "fr",
  },
  {
    name: "Spanish",
    code: "es",
  },
]

export default function App() {
  const [input, setInput] = useState(INITIAL_INPUT)
  const [output, setOutput] = useState("")
  const [[inputLang, outputLang], setLangpair] = useState(
    INITIAL_LANGPAIR.split("|"),
  )

  useEffect(() => {
    const translateInitially = async () => {
      const { data } = await axios.get("/get", {
        params: {
          q: INITIAL_INPUT,
          langpair: INITIAL_LANGPAIR,
        },
      })

      setOutput(data.matches[0].translation)
    }

    translateInitially()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value

    if (value.length <= MAX_CHARACTERS) {
      setInput(value)
    }
  }

  const handleTranslateClick = async () => {
    const { data } = await axios.get("/get", {
      params: {
        q: input,
        langpair: `${inputLang}|${outputLang}`,
      },
    })

    setOutput(data.matches[0].translation)
  }

  const handleInputSelectLanguage = async (code: string) => {
    if (code === "detect") {
      // TODO: detect language!

      return
    }

    setLangpair([code, outputLang])
  }

  return (
    <main className="grid min-h-screen place-items-center px-6">
      <section className="w-full space-y-14">
        <div className="flex justify-center">
          <Logo />
        </div>

        <div className="flex flex-col gap-3">
          <Card className="bg-neutral-300/80">
            <Card.Header>
              <LanguageSelector
                languages={[
                  { code: "detect", name: "Detect Language" },
                  ...DEFAULT_LANGUAGES,
                ]}
                selectedLanguage={inputLang}
                onSelectLanguage={handleInputSelectLanguage}
              />
            </Card.Header>

            <Card.Body>
              <TextArea value={input} onChange={handleInputChange} />
            </Card.Body>

            <Card.Footer>
              <div className="flex items-end justify-between">
                <TextActions text={input} language={inputLang} />

                <div className="flex flex-col items-end gap-2">
                  <small className="text-neutral-100">
                    {input.length}/{MAX_CHARACTERS}
                  </small>

                  <Button
                    leftComponent={<SortAlfa />}
                    onClick={handleTranslateClick}
                  >
                    Translate
                  </Button>
                </div>
              </div>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Header>
              <div className="flex items-center justify-between">
                <LanguageSelector
                  languages={DEFAULT_LANGUAGES}
                  selectedLanguage={outputLang}
                  onSelectLanguage={(code) => setLangpair([inputLang, code])}
                />

                <IconButton
                  icon={<Switch />}
                  onClick={() => {
                    setLangpair([outputLang, inputLang])
                    setOutput(input)
                    setInput(output)
                  }}
                />
              </div>
            </Card.Header>

            <Card.Body>
              <p>{output}</p>
            </Card.Body>

            <Card.Footer>
              <TextActions text={output} language={outputLang} />
            </Card.Footer>
          </Card>
        </div>
      </section>
    </main>
  )
}
