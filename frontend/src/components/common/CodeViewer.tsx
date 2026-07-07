import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  code: string;
  language?: string;
}

const CodeViewer = ({
  code,
  language = "typescript",
}: Props) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={oneDark}
      showLineNumbers
      wrapLongLines
      customStyle={{
        borderRadius: "12px",
        fontSize: "14px",
        margin: 0,
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeViewer;