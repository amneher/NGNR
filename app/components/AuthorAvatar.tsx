"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function AuthorAvatar({ authorSlug, authorPhoto, authorTitle }: { authorSlug: string, authorPhoto: string | undefined, authorTitle: string }): JSX.Element {
  return (
    <Link href={`/author/${authorSlug}`}>
      <Image
        className="h-8 w-8 rounded-full"
        src={`${authorPhoto}`}
        width={32}
        height={32}
        alt={authorTitle}
      ></Image>
    </Link>
  );
}