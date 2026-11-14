import katex from 'katex'

export function Tex({ t, block = false }: { t: string; block?: boolean }) {
  const html = katex.renderToString(t, { throwOnError: false, displayMode: block })
  return block
    ? <div className="tex-display" dangerouslySetInnerHTML={{ __html: html }} />
    : <span dangerouslySetInnerHTML={{ __html: html }} />
}
