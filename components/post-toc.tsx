import React from 'react';
import { Post } from '../types/post';

export function TableOfContents({ content }: { content: Post['markdown'] }) {
  const regexReplaceCode = /(```.+?```)/gms;
  const regexRemoveLinks = /\[(.*?)\]\(.*?\)/g;

  const markdownWithoutLinks = content.replace(regexRemoveLinks, '');
  const markdownWithoutCodeBlocks = markdownWithoutLinks.replace(
    regexReplaceCode,
    '',
  );
  const regXHeader = /#{1,6}.+/g;
  const titles = markdownWithoutCodeBlocks.match(regXHeader);

  let globalID = 0;

  const toc = [];
  titles.map((tempTitle) => {
    const level = tempTitle.match(/#/g).length - 1;
    const title = tempTitle.replace(/#/g, '').trim();
    const anchor = `#${title.replace(/ /g, '-').toLowerCase()}`;
    level === 1 ? (globalID += 1) : globalID;

    toc.push({
      level: level,
      title: title,
      anchor: anchor,
    });
  });

  const orderedHeadings = toc.reduce<Record<string, string[]>>((acc, cur) => {
    if (cur.level === 1) {
      return {
        ...acc,
        [cur.title]: [],
      };
    }

    const currentHeading = Object.keys(acc).pop();
    const newHeading = {
      [currentHeading]: [...acc[currentHeading], cur.title],
    };

    return {
      ...acc,
      ...newHeading,
    };
  }, {});

  const tocEntries = Object.entries(orderedHeadings);
  if (tocEntries.length === 0) return;

  return (
    <nav title="table-of-contents" id="table-of-contents" className="text-lg">
      <h2 className="font-bold">Table of contents</h2>
      <ol className="toc-menu">
        {tocEntries.map(([h2, h3s]) => {
          if (h3s.length === 0) {
            return (
              <li key={h2} className="block">
                <a className="pl-4" href={`#${h2}`}>
                  {h2}
                </a>
              </li>
            );
          }
          return (
            <li key={h2} className="block ">
              <a className="pl-4" href={`#${h2}`}>
                {h2}
              </a>
              <ol className="ml-8">
                {h3s.map((h3) => (
                  <li key={h3}>
                    <a className="pl-4" href={`#${h3}`}>
                      {h3}
                    </a>
                  </li>
                ))}
              </ol>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default TableOfContents;
