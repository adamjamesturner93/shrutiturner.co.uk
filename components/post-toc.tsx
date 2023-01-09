import React from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { Post } from '../types/post';

const HEADERS = [BLOCKS.HEADING_2, BLOCKS.HEADING_3, BLOCKS.HEADING_4];

export function TableOfContents({ content }: { content: Post['content'] }) {
  const headings = content.json.content.filter(({ nodeType }) =>
    HEADERS.find((x) => x === nodeType),
  );

  const orderedHeadings = headings.reduce<Record<string, string[]>>(
    (acc, cur) => {
      if (cur.nodeType === BLOCKS.HEADING_2) {
        return {
          ...acc,
          [(cur.content[0] as any).value]: [],
        };
      }

      const currentHeading = Object.keys(acc).pop();
      const newHeading = {
        [currentHeading]: [
          ...acc[currentHeading],
          (cur.content[0] as any).value,
        ],
      };

      return {
        ...acc,
        ...newHeading,
      };
    },
    {},
  );

  const tocEntries = Object.entries(orderedHeadings);

  if (tocEntries.length === 0) return;

  return (
    <nav title="table-of-contents" id="table-of-contents">
      <h2 className="font-bold">Table of contents</h2>
      <ol className="toc-menu">
        {tocEntries.map(([h2, h3s]) => {
          if (h3s.length === 0) {
            return (
              <li key={h2}>
                <a href={`#${h2}`}>{h2}</a>
              </li>
            );
          }
          return (
            <li key={h2}>
              <a href={`#${h2}`}>{h2}</a>
              <ol>
                {h3s.map((h3) => (
                  <li key={h3}>
                    <a href={`#${h3}`}>{h3}</a>
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
