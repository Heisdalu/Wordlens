import "./WordList.css";

const WordList = (props) => {
  const partofSpeech = props.obj.partofSpeech;
  const synonyms = props.obj.synonyms;
  const example = props.obj.examples;
  const definitions = props.obj.definitions;

//   console.log(partofSpeech, definitions, synonyms, example);
  return (
    <li className="word_content">
      <p className="word_meaning{">
        <span className="speechPart">{`(${partofSpeech})`}</span>
        {`${definitions}`}
      </p>
      <p className="word__in_sentence">
        {example.length > 0 ? `sentence: "${example}"` : ""}
      </p>
      <p className="word_synonyms">
        {synonyms.length > 0 ? `Synonyms: "${synonyms}"` : ""}
      </p>
    </li>
  );
};

export default WordList;
