import Link from 'next/link'
import React from 'react'
import { Article } from '@/app/models/article'
import Image from 'next/image'
import Tag from '@/app/components/Tag'


const Card = ({ id, image, title, slug, description, createDate, content, actions, tagIDs, tags }: Article) => {
    const default_width = "320"
    const default_height = "320"

    let contentTrunc;
    if (actions && actions.find(x => x === 'homeLimit')) {
        contentTrunc = 100;
    }

    return (
        <div className="card bg-base-100 dark:bg-neutral text-neutral dark:text-neutral-content rounded-box border border-transparent shadow-lg px-5 py-4 m-2 hover:shadow-slate-950" id={id} aria-label={`card-${id}`} >
            <Link href={`/articles/${slug}`} aria-label={`main-${id}-link`}>
                {image ? <figure><Image src={image} alt="Album" width={default_width} height={default_height} className='object-scale-down' aria-label={`image-${id}`} /></figure> : <span aria-label={`noImage-${id}`}></span>}
                <div className="card-body" aria-label={`body-${id}`}>
                    <h2 className="card-title font-semibold justify-center text-neutral dark:text-neutral-content" aria-label={`title-${id}`}>{title}</h2>
                    {description ? <h3 className="opacity-50 font-mono" aria-label={`description-${id}`}>{description}</h3> : <span aria-label={`noDescription-${id}`}></span>}
                    <h3 className="opacity-50 font-mono" aria-label={`createDate-${id}`}>{createDate.toDateString()}</h3>
                    <div className='divider'></div>
                    {contentTrunc ? <p aria-label={`contentTrunc-${id}`} className='font-mono'>{String(content.substring(0, contentTrunc))}</p> : <p aria-label={`contentFull-${id}`} className='font-mono'>{content}</p>}<br />
                    {tags && tags.length ? 
                        <div className="card-actions justify-center" aria-label={`withTags-${id}`}><h3 className="opacity-50">Tags:</h3>{tags.map(tag => {return <Tag key={tag.id} id={tag.id} value={tag.value} articleIDs={tag.articleIDs} />})}</div> 
                        : <div className="card-actions justify-center" aria-label={`withoutTags-${id}`}><h3 className="opacity-50">Tags: N/A</h3></div>}
                </div>
            </Link>
        </div>
    )
}

export default Card