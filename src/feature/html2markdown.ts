const html2markdown = (markdown: string) => {
  return (
    markdown
      // commenteditableはdivを使って改行を表現する時があるので削除
      .replace(/<div>/g, '')
      .replace(/<\/div>/g, '\n')
      // </div> を \n として扱うので <br> は削除
      .replace(/<br>/g, '')
      // 見出しをMDに変換
      .replace(/<h1>/g, '# ')
      .replace(/<\/h1>/g, '\n')
      .replace(/<h2>/g, '## ')
      .replace(/<\/h2>/g, '\n')
      .replace(/<h3>/g, '### ')
      .replace(/<\/h3>/g, '\n')
      // <ul> はMDでは表現しない
      .replace(/<ul>/g, '')
      .replace(/<\/ul>/g, '')
      // リストをMDに変換
      .replace(/<li>/g, '- ')
      .replace(/<\/li>/g, '\n')
      // バッククォートをMDに変換
      .replace(/<pre.+?>/g, '```\n')
      .replace(/<\/pre>/g, '```\n')
      // <> が escape されるので戻す
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
  );
};

export { html2markdown };
