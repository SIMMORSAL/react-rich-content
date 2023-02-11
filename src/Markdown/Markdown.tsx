import { css, SerializedStyles } from "@emotion/react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { themeLight } from "./MarkdownSyntaxTheme";

function LinkRenderer(p: any) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noreferrer"
      css={css`
        color: rgb(255, 85, 0);
      `}
    >
      {p.children}
    </a>
  );
}

const CodeBlock = {
  //@ts-ignore
  code({ inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        //@ts-ignore
        style={themeLight}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

interface Props {
  text: string;
  style?: SerializedStyles;
}

export default function MarkDown(p: Props) {
  return (
    <ReactMarkdown
      css={p.style}
      rehypePlugins={[rehypeRaw]}
      // @ts-ignore
      components={{ a: LinkRenderer, ...CodeBlock }}
    >
      {p.text}
    </ReactMarkdown>
  );
}
