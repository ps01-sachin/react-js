import 

function CountLength() {
  const [text, setText] = useState('')
    // function for count no of vowel and consonant in the text
    function countVowels(text) {
        
    }
    function countConsonants(text) {

    }
    function countLength(text) {
    
    }
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter some text..."
      />
      <p>Length: {text.length}</p>
    </div>
  )
}

export default CountLength